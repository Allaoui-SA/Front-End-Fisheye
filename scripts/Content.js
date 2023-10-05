class Content {
    constructor() {
        this.mediasApi = new MediaApi('/data/photographers.json')
    }
    async gallery() {
        const medias = await this.mediasApi.getMedias()
        let photographer = await this.mediasApi.getPhotographerById(photographerId)

        //console.log(medias)
        
        let galleryLightbox = []

        //afficher les médias
        medias.forEach(media => {
            if(media.image==null) {
                galleryLightbox.push(media.video)
            } else {
                galleryLightbox.push(media.image)
            }
            const Template = new PhotographerContent(photographer, media)            
            Template.createPhotographerContent()       
            
        })

        //gérer les likes 
        const LikesHandler = new PhotographerContent(photographer, medias)            
        LikesHandler.likes()     
         
        // localStorage.setItem('links', JSON.stringify(galleryLightbox))
        
    }

}

const content = new Content()
content.gallery()

