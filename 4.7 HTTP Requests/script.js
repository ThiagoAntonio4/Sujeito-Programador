// url = https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app")

let posts = []

function nutriApp(){
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((response) => {
        return response.json() //sem chaves nao precisa de return
    })
    .then((json)=> {
        posts = json
        console.log(posts)
        posts.map((item) => {
        let listItemElement = document.createElement("li")
        let titleElement = document.createElement("strong")
        let descriptionElement = document.createElement("a")
        let imgElement = document.createElement("img")

        let titleText = document.createTextNode(item.titulo)
        titleElement.appendChild(titleText)
        
        let descriptionText= document.createTextNode(item.subtitulo)
        descriptionElement.appendChild(descriptionText)
        
        imgElement.setAttribute("src",item.capa)
        
        listItemElement.appendChild(titleElement)
        listItemElement.appendChild(descriptionElement)
        listItemElement.appendChild(imgElement)

        listElement.appendChild(listItemElement)
        
    })
    })
    .catch(() => {
        console.log("erro")
    })
}

nutriApp()