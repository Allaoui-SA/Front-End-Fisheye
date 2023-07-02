const url = new URL(window.location.toLocaleString()).searchParams;
const photographerId = url.get('photographerId')

class App {
    constructor() {
        this.$photographerSection = document.getElementById("photographer_section")
        this.photographersApi = new PhotographerApi('/data/photographers.json')
    }
    async profile() {
        const photographers = await this.photographersApi.getPhotographers()
        //lorsqu'on est sur l'accueil
        if(photographerId==null) {
            photographers.forEach(photographer => {
                const Template = new PhotographerCard(photographer)
                this.$photographerSection.appendChild(Template.createPhotographerCard())        
            })
        }
        //lorsqu'on est sur la page de profil
        else {
            let profile = photographers.find(item => item.id === parseInt(photographerId))            
            const Template = new PhotographerHeader(profile)
            Template.createPhotographerHeader() 
        }
    }
}


const app = new App()
app.profile()
