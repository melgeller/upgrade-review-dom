//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let countries$$ = document.createElement('ul')
for (i=0; i<countries.length; i++){
    let country$$ = document.createElement('li')
    country$$.innerText = countries[i]
    countries$$.appendChild(country$$)
}
document.body.appendChild(countries$$)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let remove$$ = document.querySelector(".fn-remove-me")
remove$$.remove()

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let divpadre$$ = document.querySelector('[data-function="printHere"]')

let coches$$ = document.createElement('ul')
for (i=0; i<cars.length; i++){
    let car$$ = document.createElement('li')
    car$$.innerText = cars[i]
    coches$$.appendChild(car$$)
}
divpadre$$.appendChild(coches$$)

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.
const countriesTwo = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const divCountry$$ = document.createElement('div')

for (i=0; i<countriesTwo.length; i++){
    const title$$ = document.createElement('h4')
    const img$$ = document.createElement('img')
    const minidiv$$ = document.createElement('div')
    title$$.innerText = countriesTwo[i].title
    img$$.setAttribute('src', countriesTwo[i].imgUrl)

    minidiv$$.appendChild(title$$)
    minidiv$$.appendChild(img$$)
    divCountry$$.appendChild(minidiv$$)
    minidiv$$.classList.add('randomCountry')
    document.body.appendChild(divCountry$$)
    const borraEste$$ = document.createElement('button')
    minidiv$$.appendChild(borraEste$$)
    borraEste$$.innerText = 'Borra este'
    borraEste$$.addEventListener('click', () => removeme(minidiv$$))
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la lista.

const butt$$ = document.createElement('button')
butt$$.classList.add('button')
const rc$$ = document.querySelectorAll('.randomCountry')
divCountry$$.appendChild(butt$$)
butt$$.innerText = 'DELETE last element'

const clickremove = () => {
    rc$$[rc$$.length-1].remove()
}
const myButt$$ = document.querySelector('.button').addEventListener('click', clickremove)

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//elementos de las listas que elimine ese mismo elemento del html.

const removeme = (elemento) => {
    elemento.remove()
}
