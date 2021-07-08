const baseUrl = process.env.BASE_URL || 'https://example.com';

const generateUrlConfig = (url, queryParams= {}) => {
    return {
        url: baseUrl + url,
        queryParams: queryParams,
    }
}

const endpoints = {
    HomePageEndpoint : generateUrlConfig('/', {'main_type' : 'friendship-landing'}),
    FriendshipEndpoint :  generateUrlConfig('/friendship', {
        'main_type' : 'friendship-landing'
    })
}

export default APIConfig = {
    baseUrl,
    ...endpoints
}
