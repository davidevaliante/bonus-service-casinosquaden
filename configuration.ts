export interface Config {
    streamerId : string | number 
    streamerName : string
    api : string
    primaryColor : string
    secondaryColor : string
    fontString : string
    font : string
    youtubeMetatag? : string
}

export const defaultConfig : Config = {
    streamerId : 9,
    streamerName : 'casinosquaden',
    api : 'https://compare.topadsservices.com',
    primaryColor : '#2b2b2b',
    secondaryColor : '#e1b96e',
    fontString : "",
    font : `'Roboto', sans-serif`,
}

export let configuration : Config = {
    streamerId : 9,
    streamerName : 'casinosquaden',
    api : 'https://compare.topadsservices.com',
    primaryColor : '#2b2b2b',
    secondaryColor : '#e1b96e',
    fontString : "",
    font : `'Roboto', sans-serif`,
}

export const setConfigurationFile = (newConfig  : Config = configuration) => {
    configuration = newConfig
}

