export const apiEndPoint = () => {
    // return 'https://ticket-app-backend.herokuapp.com';
    return 'https://ticket-app-be.herokuapp.com';
}

export const configHeader = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };
    return config;
}