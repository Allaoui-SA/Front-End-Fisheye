class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer
    }
    
    createPhotographerCard() {
        const $wrapper = document.createElement('div')
        const portrait = `assets/photos/photographers_id/${this._photographer.portrait}`
        const photographerCard = `
            <div>
                <a tabindex="0" arialabel="0" href="photographer.html?photographerId=${this._photographer.id}">
                    <article>
                        <img src="${portrait}">
                        <h2>${this._photographer.name}</h2>
                    </article>
                </a>
                <p class="photographer-description__home">
                    <span class="city">${this._photographer.city}</span>
                    <br>
                    <span class="tagline">${this._photographer.tagline}</span>
                    <br>
                    <span class="price">${this._photographer.price}</span>
                </p>
            </div>
        `

        $wrapper.innerHTML = photographerCard
        return $wrapper
    }
}