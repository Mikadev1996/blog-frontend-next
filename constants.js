const production = {
    url: {
        BASE_URL: 'production_url'
    },
    local: {
        BASE_URL: 'production_url'
    }
}

const development = {
    url: {
        BASE_URL: 'http://localhost:3000/api'
    },
    local: {
        BASE_URL: 'https://localhost:5000/api'
    }
}

export const config = development;