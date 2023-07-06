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

        let media = ""

        let photographerContent
        if(this._media.image == null) {
            media = `<video class="gallery-item" src="${video}"></video>`   
        } else {
            media = `<img class="gallery-item" src="${image}" alt="">`
        }
        photographerContent = `
            <div>
                <a class="displayLightbox" role="link" tabindex="0">
                ${media}                
                </a>
                <div class="gallery-flex">
                    <p class="title">${this._media.title}</p>
                    <p>${this._media.likes} <i class="likes fa-solid fa-heart" aria-label="likes"></i></p>
                </div>
            </div>
        ` 
        $content.innerHTML += photographerContent
        return $content
    }

}