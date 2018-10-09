import MOWEDE from 'services/registry';

const logService = MOWEDE.services.register('logService');
const LogService = {
    log: function(value) {
        if (typeof value === 'string') {
            console.log(value);
        } if (typeof value === 'object') {
            var text = JSON.stringify(value);
            console.log(text);
        }
        
    }
}

logService.implement(LogService);
