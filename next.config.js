/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_NAME: "Movie App",
    OMDB_API_KEY: "910b8360",
    OMDB_API_TIMEOUT: 600000,
    OMDB_API_URL: "https://www.omdbapi.com",
    UNOGS_API_KEY: "9fd214fac0msh6f5b240f1e44380p18db5ejsnb2f6c85a5c16",
    UNOGS_API_TIMEOUT: 600000,
    UNOGS_API_URL: "https://unogs-unogs-v1.p.rapidapi.com/search/titles",
    UNOGS_HOST_URL: "unogs-unogs-v1.p.rapidapi.com",
    MOVIE_TYPES: ["episode", "movie", "series"],
    EMPTY_STATE_BG: "https://res.cloudinary.com/onepetercollins/image/upload/v1662023417/lifebit/2.Exports/2.Illustrations/illustration-empty-state_2x_r3teyu.png",
    HEART_ICON_OUTLINED: "https://res.cloudinary.com/onepetercollins/image/upload/v1662023414/lifebit/2.Exports/1.Icons/icon-heart-white_xat2ad.png",
    HEART_ICON_FULL: "https://res.cloudinary.com/onepetercollins/image/upload/v1662023414/lifebit/2.Exports/1.Icons/icon-heart-full_qv7g8c.svg",
    LEFT_ARROW_ICON_GRAY: "https://res.cloudinary.com/onepetercollins/image/upload/v1662023413/lifebit/2.Exports/1.Icons/icon-arrow-grey_tcxata.svg",
    IMAGE_PLACEHOLDER: "https://res.cloudinary.com/onepetercollins/image/upload/v1662158450/lifebit/2.Exports/2.Illustrations/empty_okbkq7.png",
    LOGO_WHATS_IN: "https://res.cloudinary.com/onepetercollins/image/upload/v1662023417/lifebit/2.Exports/2.Logos/logo_u738ge.svg",
    SEARCH_ICON: "https://res.cloudinary.com/onepetercollins/image/upload/c_thumb,w_200,g_face/v1662023415/lifebit/2.Exports/1.Icons/icon-magnifier-grey_xh2l78.svg",
    IMDB_ICON: "https://res.cloudinary.com/onepetercollins/image/upload/v1662023417/lifebit/2.Exports/2.Logos/logo-imdb_tcvulp.svg",
    METACRITIC_ICON: "https://res.cloudinary.com/onepetercollins/image/upload/v1662266562/lifebit/2.Exports/2.Logos/Metacritic_logo_original_1_jt0lqg.svg",
    ROTTEN_TOMATOES_ICON: "https://res.cloudinary.com/onepetercollins/image/upload/v1662023417/lifebit/2.Exports/2.Logos/logo-rotten-tomatoes_f4vziv.svg"
  }
}

module.exports = nextConfig
