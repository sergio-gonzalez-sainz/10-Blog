//alert("Hola Koders!")
//prompt("escribe tu nombre aquí")
//console.log(" este es un mensaje de consola")

/*let myName = "israel salinas martínez"
let someNumber = 5 + 3
let isMinor = 6 < 7

if( isMinor === true ){
    alert("en efecto es menor")
} else {
    alert("no es menor")
}

for( let i = 0; i < 10; i++ ){
    console.log("estamos en el paso " + i + " del ciclo")
}

let foo = "una variable definida"
console.log( foo )

const addTwoNumbers = ( number1, number2 ) => {
    let result = number1 + number2
    return result
}

console.log( addTwoNumbers(12, 50))*/

const hideElementById = elementId => {
  document
    .getElementById(elementId) /*Buscamos el elemento con base en su id*/
    .classList /*accede a la lista de clases del elemento*/
    .add(
      'd-none'
    ) /*Agrega la clase "d-none" a la lista de clases del elemento*/
}

const showElementById = elementId => {
  document
    .getElementById(elementId) /*Buscamos el elemento con base en su id*/
    .classList /*accede a la lista de clases del elemento*/
    .remove(
      'd-none'
    ) /*Agrega la clase "d-none" a la lista de clases del elemento*/
}

/*document.getElementById('button-one').addEventListener('click', () => {
  hideElementById('test-card')
  showElementById('test-card-2')
})*/

//let container = document.getElementById("post-wrapper")

const printAllPost = ( dataToPrint ) => {
  let container = document.getElementById('post-wrapper')
  container.innerHTML = ""

  Object.keys(dataToPrint).forEach(key => {
    console.log(key)
    console.log(dataToPrint[key])
    let postData = dataToPrint[key]
    let { cover, author, date, content, title } = postData
    
    let currentContent = container.innerHTML
    let cardHTML = `<div class="post-card card mb-4">
                <img
                  src=${cover}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div class="author-data d-flex align-items-center mb-3">
                    <img
                      src="https://lh3.googleusercontent.com/a-/AOh14GjLSYdjpS22H3iyojbmfWPa7hQbS7tCSoS3FrnPKw=s96-c"
                      alt=""
                      class="rounded-circle me-3 d-block"
                    />
                    <div>
                      <p class="name fs-3 mb-2">${author}</p>
                      <p class="date m-0 text-muted">${date}</p>
                    </div>
                  </div>
                  <h5 class="card-title fs-1 fw-bold">${title}</h5>
                  <p>
                    ${content}
                  </p>
                  <p class="card-text">
                    <span class="text-muted">#hashtag_1 </span>
                    <span class="text-muted">#hashtag_2 </span>
                    <span class="text-muted">#hashtag_3 </span>
                    <span class="text-muted">#hashtag_4 </span>
                    <span class="text-muted">#hashtag_5 </span>
                  </p>
                  <button id="button-one" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
    `
    let newContent = currentContent + cardHTML
    container.innerHTML = newContent
  })
}



const getPostsFromDb = () => {
    fetch("https://taller-maquetado-default-rtdb.firebaseio.com/posts.json").then( response => {
        console.log( response )
        response.json().then( json => {
            console.log( json )

            printAllPost( json )
        })
    })
}

const getFormData = () => {
    let inputs = document.querySelectorAll("#post-form input")
    let postObject = {}
    inputs.forEach( input => {
        console.log( input.name )
        console.log( input.value )
        postObject[input.name] = input.value
    })
    console.log( postObject )
    fetch("https://taller-maquetado-default-rtdb.firebaseio.com/posts.json",{
        method:"POST",
        body:JSON.stringify(postObject)
    }).then( response => {
        response.json().then( json => {
            getPostsFromDb()
        })
    })
}

document.getElementById("save-post").addEventListener("click", getFormData )

getPostsFromDb()
