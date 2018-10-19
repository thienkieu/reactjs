import 'whatwg-fetch';

async function parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    let json = await response.json();
    json.isSuccess = true;
    return json;
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function handleError(e) {
    return {
        isSuccess: false,
        errorInfo: {
            email: 'email error',
            password: 'password is incorrect',
            e: e,
        }
    }
}

export default function request(url, options) {
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .catch(handleError);
}