import Service from './service.js';
var MOWEDE = {};

if (typeof window !== 'undefined') {
    if (window.MOWEDE === undefined) {
        window.MOWEDE = MOWEDE;
    }
}

if (typeof module !== 'undefined') {
    if (global.MOWEDE === undefined) {
        global.MOWEDE = MOWEDE;
    }
}

var float = window && window.location.search.indexOf('floaterId=') !== -1;
var services = {};
var registryService = new Service('service-registry');
var globalServices = [];
var openerServices = float && window.opener.MOWEDE.services;

if (float) {
    window.addEventListener('beforeunload', function (event) {
        globalServices.forEach(function(name) {
            var service = MOWEDE.services.subscribe(name);
            var openerService = openerServices.subscribe(name);

            service.close();

            if (openerService.createdByFloat) {
                openerServices.remove(name);
            }
        });
    });
}

function wrapFloatService(service) {
    var openerService = openerServices.subscribe(service.name);

    var oldFire = service.fire;
    var oldListen = service.listen;
    var listeners = [];
    var hdls = {};

    service.fire = function() {
    // make a special case of start and ready. do not call these, unless it is a local service
        var event = arguments[0];
        if (!openerService.createdByFloat && (event === 'start' || event === 'ready')) {
            return;
        }
        var globalResult = openerService.fire.apply(openerService, arguments);
        var localResult = oldFire.apply(service, arguments);

        return globalResult || localResult;
    }

    service.listen = function(name, cb) {
        if (listeners.indexOf(name) === -1) {
            hdls[name] = openerService.listen(name, function() {
                var params = Array.prototype.slice.call(arguments, 0)
                params.unshift(name);
                oldFire.apply(service, params);
            });

            listeners.push(name);
        }

        return oldListen.call(service, name, cb);
    }

    service.close = function() {
        if (openerService.createdByFloat) {
            openerServices.remove(service.name)
        } else {
            listeners.forEach(function(name) {
                openerService.unlisten(name, hdls[name]);
            });
        }
    }
}

function makeGlobalService(service) {
    var name = service.name;
    service.global = true;

    if (float) {
        var openerService = openerServices.subscribe(service.name);

    // does it exist in the parent? If not, create it there, but remember that
        if (!openerService) {
            openerService = openerServices.register(service.name);
            openerService.createdByFloat = true;
        } else {
        // it exists in the parent, so we need to use that one. make a fresh one
             delete services[name];
             services[name] = new Service(name);
             service = services[name];
             service.setType(openerService.methods);
        }


        wrapFloatService(service);
    }
}

var stack = [];

MOWEDE.services = {
    listen : registryService.listen.bind(registryService),
    unlisten : registryService.unlisten.bind(registryService),
    fire : registryService.fire.bind(registryService),
    fireArgs : registryService.fireArgs.bind(registryService),
    register : function(name) {
        if (services[name] === undefined) {
            services[name] = new Service(name);
        }

        registryService.fire('registered', name);
        return services[name];
    },

    subscribe : function(name) {
    // if we are floating, maybe this service is global, check the global list of the parent
        if (services[name] === undefined && float) {
            var openerService = openerServices.subscribe(name);

            if (openerService.global) {
        // found global service during subscribe
        console.log('found global service during subscribe');
                services[name] = new Service(name);
                makeGlobalService(services[name]);
            }
        }
        if (services[name] === undefined) {
            return false
        }

        return services[name];
    },

    remove : function(name) {
        if (services[name] !== undefined) {
            delete services[name];
        }
    },

    broadcast : function(event, filter) {
        var passed = Array.prototype.slice.call(arguments, 1);
        var results = [];

        for (var name in services) {
            if (services.hasOwnProperty(name)) {
                var skip = (filter && !filter(name)) || false;
                try {
                    if (!skip) {
                        results.push(services[name].fireArgs(event, passed));
                    }
                } catch (e) {
                    console.warn('error during broadcast');
                    console.warn(e.stack);
                }
            }
         }

         MOWEDE.services.fireArgs(event, passed);

         return results;
    },

    makeAnonymousService : function() {
        return new Service('anon')
    },

    make : function(serviceName, thing, implementing, eventable, isGlobal)
    {
        thing.registryService = MOWEDE.services.register(serviceName);
        implementing = implementing || [];

        implementing.forEach(function(name) {
            if (thing[name]) {
                thing.registryService.implement(name, thing[name].bind(thing));
            } else {
                console.warn('cannot find', name, 'in', serviceName);
            }
        });

        if (eventable) {
            thing.fire = thing.registryService.callfire.bind(thing.registryService);
            thing.listen = thing.registryService.listen.bind(thing.registryService);
            thing.unlisten = thing.registryService.unlisten.bind(thing.registryService);
        }

        if (isGlobal) {
            MOWEDE.services.makeGlobal(serviceName);
        }
    },

    makeGlobal : function(name) {
        if (globalServices.indexOf(name) === -1) {
            globalServices.push(name);
            makeGlobalService(services[name]);
        }
    },

    isGlobal : function(name) {
        return globalServices.indexOf(name) !== -1;
    },

    reset : function() {
        services = {};
    },

    push : function() {
        stack.push(services);
    },

    pop : function() {
        var newServices = stack.pop();

        if (newServices) {
            services = newServices();
        }
    }
}
