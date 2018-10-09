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

var services = {};

// TODO: need review when have globalService for dialog or sub tab.
//var globalServices = [];

/*
window.addEventListener('beforeunload', function (event) {
    globalServices.forEach(function(name) {
        var service = MOWEDE.services.subscribe(name);
        service.close();
    });
});
*/

var stack = [];

MOWEDE.services = {
    register : function(name) {
        if (services[name] === undefined) {
            services[name] = new Service(name);
        }
        return services[name];
    },

    subscribe : function(name) {
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
         return results;
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

export default MOWEDE;
