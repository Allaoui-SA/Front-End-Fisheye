class PhotographerContent extends PhotographerHeader {
    constructor(photographer, media) {
        super(photographer)
        this._media = media
    }
    
    async createPhotographerContent() {
        // console.log(this._media)

        const str = this._photographer.name;

        let first = str.split(' ')[0].replace(/-/g, ' ')
        
        const $content = document.querySelector(".content-gallery")
        const image = `assets/photos/${first}/${this._media.image}`
        const video = `assets/photos/${first}/${this._media.video}`

        let media = ""

        let photographerContent
        if(this._media.image == null) {
            media = `<video class="gallery-item" src="${video}" title="${this._media.title}"></video>`   
        } else {
            media = `<img class="gallery-item" src="${image}" alt="${this._media.title}">`
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
        const totalLikes = document.getElementById('total-likes').querySelector("p")
        let allLikes = 0

        
        likesArray.forEach((element) => {

            allLikes += parseInt(element.textContent)
            element.addEventListener('click', () => {
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
        })
        // console.log(allLikes)
        totalLikes.innerHTML = allLikes
    }

    async lightbox() {
        const lightbox = document.querySelector(".lightbox-gallery")
        const lightboxMedia = document.querySelector(".lightbox-media")
        let lightboxOn = document.querySelectorAll(".displayLightbox")
        let lightboxOff = document.querySelector(".fa-xmark")
        let lightboxPrev = document.querySelector(".fa-arrow-left")
        let lightboxNext = document.querySelector(".fa-arrow-right")
        
        // variable qui nous permettra de naviguer entre les images
        let index

        // tableau de toutes les instances ouvrant une lightbox
        const lightboxArray = Array.from(lightboxOn)
        lightboxArray.forEach((element) => {
            // au clic sur une instance
            element.addEventListener("click", function() {
                // on récupère l'index de l'instance
                index = lightboxArray.indexOf(element)
                // on affiche la lightbox
                lightbox.classList.remove("lightbox-off")
                lightbox.classList.add("lightbox-on")

                if(element.querySelector(".gallery-item").title) {
                    // on récupère la vidéo, le src et titre
                    lightboxMedia.innerHTML = `<video class="lightbox-video" controls><source src="`+ element.querySelector(".gallery-item").getAttribute('src') +`" ></video>`+ `<figcaption>`+ element.querySelector(".gallery-item").title +`</figcaption>`
                }else{
                    // on récupère l'image, le src et le titre    
                    lightboxMedia.innerHTML = `<img class="lightbox-image" src="`+ element.querySelector(".gallery-item").getAttribute('src')+`">`+ `<figcaption>`+ element.querySelector(".gallery-item").alt +`</figcaption>`
                }
            })
        })
        // on ferme la lightbox et on vide son contenu
        lightboxOff.addEventListener("click", function() {
            lightbox.classList.remove("lightbox-on")
            lightbox.classList.add("lightbox-off")
            lightboxMedia.innerHTML = ""
        })

        function prev() {
            // si l'image affichée est la toute première
            if(index == 0) {
                // on se place sur la dernière instance
                index = lightboxArray.length - 1
            }else{
                // on se place sur l'instance précédente
                --index
            }
            if(lightboxArray[index].querySelector(".gallery-item").title) {
                // on récupère la vidéo, le src et le titre
                lightboxMedia.innerHTML = `<video class="lightbox-video" controls><source src="`+ lightboxArray[index].querySelector(".gallery-item").getAttribute('src') +`" ></video>`+ `<figcaption>`+ lightboxArray[index].querySelector(".gallery-item").title +`</figcaption>`
            }else{
                // on récupère l'image précédente, le src et le titre
                lightboxMedia.innerHTML = `<img class="lightbox-image" src="`+ lightboxArray[index].querySelector(".gallery-item").getAttribute('src')+`">`+ `<figcaption>`+ lightboxArray[index].querySelector(".gallery-item").alt +`</figcaption>`
            }
        }
        function next() {
            // si l'image affichée est la toute dernière
            if(index == lightboxArray.length - 1) {
                // on se place sur la première instance
                index = 0
            }else{
                // on se place sur l'instance suivante 
                ++index
            }
            if(lightboxArray[index].querySelector(".gallery-item").title) {
                // on récupère la vidéo, le src et le titre
                lightboxMedia.innerHTML = `<video class="lightbox-video" controls><source src="`+ lightboxArray[index].querySelector(".gallery-item").getAttribute('src') +`" ></video>`+ `<figcaption>`+ lightboxArray[index].querySelector(".gallery-item").title +`</figcaption>`
            }else{
                // on récupère l'image, le src et le titre
                lightboxMedia.innerHTML = `<img class="lightbox-image" src="`+ lightboxArray[index].querySelector(".gallery-item").getAttribute('src')+`">`+ `<figcaption>`+ lightboxArray[index].querySelector(".gallery-item").alt +`</figcaption>`
            }
        }

        // au clic du bouton "précédent"
        lightboxPrev.addEventListener("click", () => prev())
        // au clic du bouton "suivant"
        lightboxNext.addEventListener("click", () => next())
        
        document.addEventListener('keydown', (event) => {
            
            if(!lightboxArray[index]) {
                return
            }
            if(event.code == "ArrowLeft") {
                prev()
            }else if(event.code == "ArrowRight"){
                next()
            }
           
          })

    }

}