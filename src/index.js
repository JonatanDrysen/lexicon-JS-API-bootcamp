const body = document.querySelector("body")

async function fetchPokemon() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/pokemons.json")
        const data = await response.json()
        console.log("*****Task 1a: *****")
        data.forEach(pokemon => console.log(pokemon))

        const title1 = document.createElement("h1")
        title1.innerText = "Task 1b: "
        body.appendChild(title1)
        renderHTML(data)
    }
    catch(err) {
        console.error("Error: ", err)
    }
}

function renderHTML(data) {
    data.forEach(item => {
        const ul = document.createElement("ul")
        const li = document.createElement("li")
        li.innerText = item.name
        ul.appendChild(li)
        body.appendChild(ul)
    })
}

fetchPokemon()
