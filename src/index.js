const body = document.querySelector("body")

async function fetchPokemon() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/pokemons.json")
        const data = await response.json()
        console.log("*****Task 1a: *****")
        data.forEach(pokemon => console.log(pokemon))

        renderTitle("Task 1b:")
        renderHTML(data)
    }
    catch(err) {
        console.error("Error: ", err)
    }
}

async function fetchDogs() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/dogs.json")
        const data = await response.json()
        console.log("*****Task 2a: *****")
        data.forEach(dog => console.log(dog.name))

        renderTitle("Task 2b:")
        renderHTML(data)
    }
    catch(err) {
        console.error("Error: ", err)
    }
}

async function fetchBooks() {
    try {
        // Task 3a:
        const response = await fetch("https://majazocom.github.io/Data/books.json")
        const data = await response.json()
        const filteredData = data.filter((book) => book.pages <= 500)
        
        renderTitle("Task 3b")
        renderHTML(filteredData)
    }
    catch(err) {
        console.error("Error: ", err)
    }
}

async function fetchVisitors() {
    // Task 4a:
    const response = await fetch("https://majazocom.github.io/Data/attendees.json")
    const data = await response.json()
    const attending = data.filter((visitor) => visitor.attending === true)
    const attendingWithAllergy = data.filter((visitor) => visitor.attending === true && visitor.allergies.length > 0)

    renderTitle("Task 4b: ")
    renderHTML(attending)
    renderTitle("Task 4c: ")
    renderHTML(attendingWithAllergy)
}

function renderHTML(data) {
    data.forEach(item => {
        const ul = document.createElement("ul")
        const li = document.createElement("li")
        if(item.name) {
            li.innerText = item.name
        } else if(item.title) {
            li.innerText = item.title
        }
        ul.appendChild(li)
        body.appendChild(ul)
    })
}

function renderTitle(text) {
    const title = document.createElement("h1")
    title.innerText = text
    body.appendChild(title)
}

fetchPokemon()
fetchDogs()
fetchBooks()
fetchVisitors()