class Content {
    constructor() {
        this.mediasApi = new MediaApi('/data/photographers.json')
    }
    async gallery(sortBy="likes") {
        const medias = await this.mediasApi.getMedias()
        let photographer = await this.mediasApi.getPhotographerById(photographerId)

        console.log(sortBy)


        // TEST SORTING
        if (sortBy === "likes") {
            medias.sort((a, b) => {
                return b.likes - a.likes;
            });
        } else if (sortBy === "date") {
            medias.sort((a, b) => {
                // const dateA = new Date(a.dataset.date);
                // const dateB = new Date(b.dataset.date);
                return new Date(b.date) - new Date(a.date);
            });
        } else if (sortBy === "title") {
            medias.sort((a, b) => {
                return a.title > b.title ? 1 : -1;
            });
        }
        // TEST SORTING


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

