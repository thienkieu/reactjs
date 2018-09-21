import _ from 'underscore';

// This class to manage the listening and firing  of event

function Service(name) {
    this.name = name;
    this.events = {};
    this.reflectors = {};
    this.eventId = 0;
    this.publish = this.callfire;
    this.subscribe = this.listen;
    this.unsubscribe = this.remove;
    this.invoke = this.callfire;
    this.invokeArgs = this.fireArgs;
    this.methods = [];
}

Service.prototype = {
    setType: function(names) {
        names.forEach(function(name){
            this[name] = this.invoke.bind(this, name);
            this.methods.push(name);
        }, this);
    },

    callfire: function() {
        return this.fire.apply(this, arguments);
    },

    implementOne: function(name, callback) {
        var ename = name + '_e_';
        var eventList = this.events[ename];

        //there can only be one implementation
        if (eventList) {
            return;
        }

        this.listen(name, callback);
        this[name] = this.invoke.bind(this, name);
        this.methods.push(name);
    },

    implement: function(name, callback) {
        if (typeof name === 'string') {
            this.implementOne(name, callback);
            return;
        }

        var object = name;
        for (var name in object) {
            if (object.hasOwnProperty(name)) {
                var callback = object[name];
                this.implementOne(name, callback.bind(this));
            }
        }
    },

    listen: function(name, callback) {
        name += '_e_';
        var eventList = this.events[name];

        if (eventList == null) {
            eventList = {};
            this.events[name] = eventList;
        }

        var eventId = 'event_' + this.eventId;
        this.eventId++;
        eventList[eventId] = callback;

        return eventId;
    },

    remove: function(name, id) {
        name += '_e_';
        var eventList = this.events[name];

        if (eventList == null) return;

        if (id === '') {
            eventList = {};
        } else {
            delete eventList[id];
        }
    },

    removeAll: function(name) {
        name += '_e_';
        this.events[name] = {};
    },

    getEventCount: function(name) {
        neme += '_e_';
        var eventList = this.events[name];
        if (eventList == null) return 0;
        return _.size(eventList);
    },

    fire : function(name) {
        name += '_e_';
        var passed = Array.prototype.slice.call(arguments, 1);
        var eventList = this.events[name];
        var result = undefined
        if (eventList == null) return;

        for (var key in eventList) {
            if (eventList.hasOwnProperty(key)) {
                var callback = eventList[key];
                var response = callback.apply(this, passed);
                if (result === undefined && response !== undefined) {
                    result = response;
                }
            }
        }

        return result;
    },

    fireArgs : function(name, params) {
        params.unshift(name);
        result = this.fire.apply(this, params);
        params.shift(name);
        return result;

    },

    reflect : function(name, service) {
        var reflectors;
        this.reflectors[name] = this.reflectors[name] || [];

        reflectors = this.reflectors[name];
        if (!reflectors.length) this.listen(name, onReflect.bind(this, name));

        reflectors.push(service);
    },

    onReflect : function(name) {
        var params = Array.prototype.slice.call(arguments, 1);
        var services = this.reflectors[name];

        if (!services) {
            return;
        }

        services.forEach(function(service) {
            service.fireArgs(name, params);
        }, this);
    }

}

export default Service;
