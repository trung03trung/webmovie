const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0b44fa96d410ee5b8169f040e54f1890',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;