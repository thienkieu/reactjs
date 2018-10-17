const sequenceflow = async function(queue, params){
    let i = 0;
    let response = params;
    const queueLenght = queue.length;
    while( i < queueLenght ) {
        const fun = queue[i];
        response = await fun(response);
        i++;
    }
};

export default sequenceflow