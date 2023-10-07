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
                    <div class="like--container like__empty">
                        <p>${this._media.likes}</p>
                        <i class="like__icon fa-solid fa-heart" aria-label="likes"></i>
                    </div>
                </div>
            </div>
        `
        $content.innerHTML += photographerContent
        return $content
    }
    
    //gérer les likes
    async likes() {
        let likes = document.querySelectorAll('.like--container')
        const likesArray = Array.from(likes)
        
        likesArray.forEach((element) => {
            element.addEventListener('click', () => {
                const totalLikes = document.getElementById('total-likes').querySelector("p")
                
                if(element.classList.contains('like__empty')) {

                    element.classList.remove('like__empty')
                    element.classList.add('like__fill')
                    
                    const likePlus = element.querySelector("p")
                    likePlus.textContent = parseInt(likePlus.textContent)+1
                    totalLikes.textContent = parseInt(totalLikes.textContent)+1
                    
                }else if(element.classList.contains('like__fill')) {
                    
                    element.classList.remove('like__fill')
                    element.classList.add('like__empty')
                    
                    const likeMinus = element.querySelector("p")
                    likeMinus.textContent = parseInt(likeMinus.textContent)-1
                    totalLikes.textContent = parseInt(totalLikes.textContent)-1
                
                }
            })
            // console.log(element.textContent)
        })
    }

}