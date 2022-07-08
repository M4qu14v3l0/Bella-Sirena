let vino = [
    {color : {rosado : 35 , blanco : 45 , tinto : 50}},
    {azucar: {seco : 29 , abocado : 24  , dulce : 60}}
]
let ron = [
    {color : {blanco : 30 , dorado : 40 , negro : 60}},
    {procedencia : {cubano : 60 , haitiano : 54 , norteamericano : 44}}
]

let total = 0

let totalPagar = document.querySelector('#total')




for(const i in vino[0].color){
    document.write(` VINO-color: ${i} PRECIO: s/.${vino[0].color[i]} <br>`);
}
for(const i in vino[1].azucar){
    document.write(` VINO-azucar: ${i} PRECIO: s/.${vino[1].azucar[i]} <br>`);
}
for(const i in ron[0].color){
    document.write(` RON-color: ${i} PRECIO: s/.${ron[0].color[i]} <br>`);
}
for(const i in ron[1].procedencia){
   document.write(` RON-procedencia: ${i} PRECIO: s/.${ron[1].procedencia[i]} <br>`);
}


 const start = () => {
    alert('Bienvenido iDrinker!')
    alert('Primero vamos a presentarte todas nuestras categorías en tragos')
    categorySelected()
}


const categorySelected = () => {
    category =  prompt(`Estas son las categorías de tragos disponible, selecciona alguna: \n1 -> VINOS - color\n2 -> VINOS - azucar\n3 -> RON - color\n4 -> RON - procedencia`);
    return chooseCategory(category);
}

const chooseCategory = (category) => {

    let price
    let value = true;


    switch(category){



        case '1':
        
            while(value){
                console.log('entró')
                wineSelected = prompt(`Escoje los vinos de color para añadir al carrito  \nrosado\nblanco\ntinto\ncambio -> cambiar de categoría\nsalir -> terminar de comprar\nTOTAL: ${total}`)
                if(wineSelected != 'cambio' && wineSelected != 'salir'){
                    price = vino[0].color[wineSelected] 
                    total += price
                }else if (wineSelected == 'cambio'){
                    categorySelected()
                }else if (wineSelected == 'salir'){
                    value = false;
                }
            }

            

        case '2':

            while(value){

                wineSelected = prompt(`Escoje los vinos azucarados para añadir al carrito  \nseco\nabocado\ndulce\ncambio -> cambiar de categoría\nsalir-> terminar de comprar\nTOTAL: ${total}`)

                if(wineSelected != 'cambio' && wineSelected != 'salir'){
                    price = vino[1].azucar[wineSelected] 
                    total += price
                }else if (wineSelected == 'cambio'){
                    categorySelected()
                }else if (wineSelected == 'salir'){
                    value = false;
                }
            }
    
        case '3':

            while(value){

                ronSelected = prompt(`Escoje los rones azucarados para añadir al carrito  \nblanco\ndorado\nnegro\ncambio -> cambiar de categoría\nsalir-> terminar de comprar\nTOTAL: ${total}`)

                if(ronSelected != 'salir' && ronSelected != 'cambio'){
                    price = ron[0].color[ronSelected] 
                    total += price
                }
                else if (ronSelected == 'cambio'){
                    categorySelected()
                }
                else if (wineSelected == 'salir'){
                    value = false;
                }
            }

        case '4':

            while(value){

                ronSelected = prompt(`Escoje los rones azucarados para añadir al carrito  \ncuabano\nhaitiano\nnorteamericano\ncambio -> cambiar de categoría\nsalir-> terminar de comprar\nTOTAL: ${total}`)

                if(ronSelected != 'salir' && ronSelected != 'cambio' ){
                    price = ron[1].procedencia[ronSelected] 
                    total += price
                }else if (ronSelected == 'cambio'){
                    categorySelected()
                }else if (wineSelected == 'salir'){
                    value = false;
                }
            }


    totalPagar.innerText = `Tu total a pagar es de: s/.${total}`
    }
}


// const showCategory = () => {

//     selectCategory = prompt(`Estas son las categorías de tragos disponible, selecciona alguna: \n1 -> VINOS - color\n2 -> VINOS - azucar\n3 -> RON - color\n4 -> RON - procedencia`);
//     return chooseCategory(selectCategory);
// }


start()

