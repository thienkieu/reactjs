const sequenceflow = async function(queue, params, completedHandler){
    let i = 0;
    let response = params;
    const queueLenght = queue.length;
    while( i < queueLenght ) {
        const fun = queue[i];
        response = await fun(response);
        i++;
    }

    if (completedHandler) {
        completedHandler(response);
    }

    return response;
};

export default sequenceflow