var Pipline = {
    addPipelineHandler: function(name, callback, topOfThePipeline) {
        this.pipelines = this.pipelines || {};

        var list = this.pipelines[name] = this.pipelines[name] || [];

        if (topOfThePipeline) {
            list.splice(0, 0, callback);
        } else {
            list.push(callback);
        }
    },

    runPipeline: function(opts) {
        if (!opts) {
            throw new Error('Opts is required.');
        }

        var name = opts.name,
            input = opts.input,
            callback = opts.callback;

        if (!name || input === undefined || typeof callback !== 'function') {
            throw new Error('A pipeline name, an input value, and a callback are required');
        }

        if (!this.pipelines) {
            return callback.call(null, input);
        }

        var list = this.pipelines[name];

        if (!list || !list.length) {
            return callback.call(null, input);
        }

        var pipe = function(i, data) {
            if (i === list.length) {
                callback.call(null, data);
                
                return;
            }

            var extension = list[i];
            extension.call(null, data, pipe.bind(null, i+1));
        };
        
        pipe(0, input);
    }
}

export default Pipline;