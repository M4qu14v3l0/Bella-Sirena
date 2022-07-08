let vino = [
    {color : [{rosado : 35 , blanco : 45 , tinto : 50}]},
    {azucar: [{seco : 29 , abocado : 24  , dilce : 60}]}
]
let ron = [
    {color : [{blanco : 30 , dorado : 40 , negro : 60}]},
    {procedencia : [{cubano : 60 , haitiano : 54 , norteamericano : 44}]}
]




const start = () => {
    alert('Bienvenido iDrinker!')
    alert('Primero vamos a presentarte todas nuestras categorías en tragos')

    for(const i in vino[0].color[0]){
        document.write(` VINO-color: ${i} PRECIO: s/.${vino[0].color[0][i]} <br>`);
    }
    for(const i in vino[1].azucar[0]){
        document.write(` VINO-azucar: ${i} PRECIO: s/.${vino[1].azucar[0][i]} <br>`);
    }
    for(const i in ron[0].color[0]){
        document.write(` RON-color: ${i} PRECIO: s/.${ron[0].color[0][i]} <br>`);
    }
    for(const i in ron[1].procedencia[0]){
        document.write(` RON-procedencia: ${i} PRECIO: s/.${ron[1].procedencia[0][i]} <br>`);
    }

    showCategory()
}





const chooseCategory = (category) => {



    switch(category){
        case '1':
            
            let total = 0

            while(true){

                

                let wineSelected = prompt('Escoje los vinos de color para añadir al carrito  \n0-> rosado\n1-> blanco\n2-> tinto\nsalir-> terminar de comprar')
                if(wineSelected != 'salir'){
                    price = vino[0].color[wineSelected] 
                    total += price
                }else{
                    break
                }
                
            }
            console.log(total)
            break 
            

    }
}




const showCategory = () => {

    selectCategory = prompt(`Estas son las categorías de tragos disponible, selecciona alguna: \n1 -> VINOS - color\n2 -> VINOS - azucar\n3 -> RON - color\n4 -> RON - procedencia`);
    return chooseCategory(selectCategory);
}


start()

