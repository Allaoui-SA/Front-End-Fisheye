class PhotographerHeader {
    constructor(photographer) {
        this._photographer = photographer
    }

    async createPhotographerHeader() {
        const $header = document.querySelector(".photograph-header")
        const $modalName = document.querySelector('.modal').querySelector('h2')
        const portrait = `assets/photos/photographers_id/${this._photographer.portrait}`
        $header.querySelector('h1').innerHTML =`${this._photographer.name}`
        $header.querySelector('.city').innerHTML =`${this._photographer.city}`
        $header.querySelector('.tagline').innerHTML =`${this._photographer.tagline}`
        $header.querySelector('img').src =`${portrait}`
        
        $modalName.innerHTML += `<br>${this._photographer.name}`
    }
    
}