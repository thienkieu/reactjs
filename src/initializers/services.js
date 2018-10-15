import MOWEDE from 'services/registry';
import LogService from 'infrastructure/Log/LogServices';

const initServices = function(){
    MOWEDE.services.register('logService', LogService);
}

export default initServices;
