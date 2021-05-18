// Main Telegram channels
export const akitaTelegramLink = 'https://t.me/akitatoken'
export const polarfoxTelegramLink = 'https://t.me/polarfoxdex'

// Akita Telegram Europe
export const akitaTelegramLocal = (country: string) => {
    switch(country) {
        // Europe
        case 'FR': return 'https://t.me/AKITAFRENCHTEAM'
        case 'ES': return 'https://t.me/AKITAINUtokenES'
        case 'DE': return 'https://t.me/AKITAGER'
        case 'RU': return 'https://t.me/AKITAtokenRus'
        case 'CZ': return 'https://t.me/Czech_Slovak_Akita'
        case 'NL': return 'https://t.me/AKITANederland'
        // Asia
        case 'VN': return 'https://t.me/joinchat/1LaoaTMtn2s4Nzc1'
        case 'IR': return 'https://t.me/Akita_faa'
        case 'TR': return 'https://t.me/trAKITAtrr'
        case 'CN': return 'https://t.me/AKITA_Chinese'
        case 'IN': return 'https://t.me/AKITAIndia'
        case 'AE': return 'https://t.me/Akitarab'
        default: return akitaTelegramLink
    }
}

// Polarfox
export const polarfoxLink = 'https://polarfox.io'

// Discord
export const akitaDiscordLink = 'https://discord.gg/v85jGJUrnz'

// Medium
export const akitaMediumLink = 'https://akitanetwork.medium.com/'

// Twitter
export const akitaTwitterLink  = 'https://twitter.com/akita_network/'

// Instagram
export const akitaInstagramLink = 'https://instagram.com/akita_network'

// GitHub
export const polarfoxGithubLink = 'https://github.com/Polarfox-DEX'

// Etherscan
export const akitaEtherscanLink = 'https://etherscan.io/token/0x3301ee63fb29f863f2333bd4466acb46cd8323e6'

// CoinMarketCap
export const akitaCoinMarketCapLink = 'https://coinmarketcap.com/currencies/akita-inu/'

// CoinGecko
export const akitaCoinGeckoLink = 'https://www.coingecko.com/en/coins/akita-inu'
