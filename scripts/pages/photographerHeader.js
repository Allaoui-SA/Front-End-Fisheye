class PhotographerHeader {
    constructor(photographer) {
        this._photographer = photographer
    }

    async createPhotographerHeader() {
        const $header = document.querySelector(".photograph-header")
        const $modalName = document.querySelector('.modal').querySelector('h2')
        const portrait = `assets/photos/photographers_id/${this._photographer.portrait}`
        const photographerHeader = `
        <div>
            <h1>${this._photographer.name}</h1>
            <p class="photographer-description__profile">
                <span class="city">${this._photographer.city}</span>
                <br>
                <span class="tagline">${this._photographer.tagline}</span>
            </p>
        </div>
        <button tabindex="0" onclick="displayModal()" class="contact_button">Contactez-moi</button>
        <img src="${portrait}">
        `
        
        $modalName.innerHTML += `<br>${this._photographer.name}`
        $header.innerHTML = photographerHeader

    }
    
}

class PhotographerContent extends PhotographerHeader {
    constructor(photographer, media) {
        super(photographer)
        this._media = media
    }
    
    async createPhotographerContent() {

        const str = this._photographer.name;

        let first = str.split(' ')[0].replace(/-/g, ' ')
        
        const $content = document.querySelector(".content-gallery")
        const image = `assets/photos/${first}/${this._media.image}`
        const video = `assets/photos/${first}/${this._media.video}`

        let photographerContent
        if(this._media.image == null) {
            photographerContent = `
                <div>
                    <a class="displayLightbox" role="link" tabindex="0">
                        <video class="gallery-item" src="${video}"></video>
                    </a>
                    <div class="gallery-flex">
                        <p class="title">${this._media.title}</p>
                        <p>${this._media.likes} <i class="likes fa-solid fa-heart" aria-label="likes"></i></p>
                    </div>
                </div>
            `           
        } else {
            photographerContent = `
                <div>
                    <a class="displayLightbox" role="link" tabindex="0">
                        <img class="gallery-item" src="${image}" alt="">
                    </a>
                    <div class="gallery-flex">
                        <p class="title">${this._media.title}</p>
                        <p>${this._media.likes} <i class="likes fa-solid fa-heart" aria-label="likes"></i></p>
                    </div>
                </div>
            ` 
        }
        $content.innerHTML += photographerContent
        return $content
    }

}
