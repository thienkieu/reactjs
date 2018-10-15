const LogService = {
    log: function(value, functionName = '') {
        let prefix = functionName? functionName+': ': '';
        if (typeof value === 'string') {
            console.log(prefix + value);
        } if (typeof value === 'object') {
            var text = JSON.stringify(value);
            console.log(prefix + text);
        }
        
    }
}

export default LogService;
