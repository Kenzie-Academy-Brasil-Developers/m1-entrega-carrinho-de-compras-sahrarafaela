let products = [
    {
        nome: 'Uva Crimson',
        valor: 44.99
    },

    {
        nome: 'Vinho Canção',
        valor: 17.98
    },
    {
        nome: 'Água de coco',
        valor: 8.99
    },
    {
        nome: 'Mamão',
        valor: 9.98
    },
    {
        nome: 'Água tônica',
        valor: 17.98
    }
]


let inicial = document.body

function tags(obj) {
    let main = document.createElement('main')
    let titulo = document.createElement('h1')
    let total = document.createElement('h4')
    let valor = document.createElement('h4')
    let ProductList = document.createElement('ul')
    let section = document.createElement('section')
    let ButtonEnd = document.createElement('button')
    let valorTotal = document.createElement ('h4')

    main.append(titulo, total)


    let somando = 0
    function soma (n1){
        somando += n1
    }

    titulo.textContent = "Virtual Market"
    total.textContent = "Total"
    ButtonEnd.textContent = "Finalizar compra"
    section.appendChild(ButtonEnd)
    
    
    for (let i = 0; i < obj.length; i++) {
        let ProductDetails = document.createElement('li')
        let paragrafo = document.createElement('p')
        let valorProduto = document.createElement('p')
        paragrafo.textContent = obj[i].nome
        valorProduto.textContent = `valor: ${obj[i].valor}`
        main.append(valor, ProductList)
        ProductDetails.append(paragrafo, valorProduto)
        ProductList.appendChild(ProductDetails)
        soma(obj[i].valor)
    }
    
    
    valorTotal.textContent = somando

    main.appendChild(section)
    main.appendChild(valorTotal)
    inicial.appendChild(main)

}
tags(products)

