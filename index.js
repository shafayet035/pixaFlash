const container = document.querySelector(".gallery-container")
let term = ''
const searchVal = document.querySelector("#search")
let AllImages = [];



const searchImage = () => {
    event.preventDefault()
    container.innerHTML = ''
    const text = searchVal.value
    term = text;
    getImages()
}

const getImages = () => {
    fetch(`https://pixabay.com/api/?key=${YourApiKEY}&q&q=${term}&per_page=50&pretty=true&image_type=photo`)
        .then(Response => Response.json())
        .then(data => {
            AllImages = data.hits
            AllImages.forEach(image => {
                let img = document.createElement("img")
                console.log(image)
                img.src = image.largeImageURL
                container.appendChild(img)
            });
        });

}

getImages()
