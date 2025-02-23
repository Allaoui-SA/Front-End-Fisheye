class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('an error occurs', err))
    }
    async getPhotographerById(photographerId) {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers.find(item => item.id == photographerId))
            .catch(err => console.log('an error occurs', err))
    }
    async getPhotographerMedia(photographerId) {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media.filter(item => item.photographerId == photographerId))
            .catch(err => console.log('an error occurs', err))
    }
}


class PhotographerApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        return await this.get()
    }
}
class MediaApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getMedias() {
        return (
            await this.getPhotographerMedia(photographerId)
        )
    }
}
