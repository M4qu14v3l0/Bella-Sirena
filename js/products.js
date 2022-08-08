//variables
const containerProducts = document.querySelector('#product__fajas')
const buttonListener = document.getElementsByClassName('car-button')
const productsSelected = document.querySelector('#products__selected')
const totalPriceProducts = document.querySelector('.total-price')

let userCar = [
    
]

//fetch

const displayProducts = async () =>{

    const res = await fetch('../data/fajas_data.json')
    const data = await res.json()

    for(products of data){
        let html =  
        `
        <div class="product-container">
            <div class="product-picture">
                <img src="${products.img}" alt="">
            </div>

            <div class="product-data">
                <h3>${products.name}</h3>
                <p>s/.<span>${products.price}</span></p>
                <p>${products.rate} stars</p>
                <button class="car-button" id="${products.id}" >Comprar</button>
            </div>  
        </div>
        `
                containerProducts.innerHTML += html ;

        //buttons Listener


        for (var i = 0 ; i < buttonListener.length; i++) {
            buttonListener[i].addEventListener('click' , (e) => {
                //notification
                Toastify({
                    text: "Añadido",
                    duration: 1500,
                    // destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: false,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                    color: "black",
                    background: "antiquewhite",

                    },
                    // onClick: function(){} // Callback after click
                }).showToast();

                addItem(e)
            }) ; 
        }
    }
};

displayProducts()


const displayProductSelected = () => {

    productsSelected.innerHTML = ''

    userCar.forEach(products => {
    
        if(products === null){
            return
        }else{
            let htmlProductSelected = 
            `
            <tr>
                <td>${products.id}</td>
                <td>${products.name}</td>
                <td class="quantity-car">
                    <button class = 'user-car-btn add-item' id = '${products.id}'>+</button>
                    <p>${products.quantity}</p>
                    <button class = 'user-car-btn delete-item' id = '${products.id}'>-</button>
                </td>
                <td>s/.${products.price * products.quantity}</td>
            </tr>
            `
            productsSelected.innerHTML += htmlProductSelected ;
    
    }});



    // const carQuantity = userCar.reduce((acc , {quantity}) => acc + quantity , 0)
    // console.log(carQuantity)
    // console.log('----------------------')
    const carTotal = userCar.filter((x) => x !== null).reduce((acc,{quantity , price}) => acc + (quantity * price), 0)
    console.log(carTotal)

    totalPriceProducts.innerHTML = `Total: ${carTotal}`



    localStorage.setItem('userCar', JSON.stringify(userCar))
}    

//--------------old code------------------------

// function displayProducts(product) {

//     for(products of product){
//         let html = 
//         `
//         <div class="product-container">
//             <div class="product-picture">
//                 <img src="${products.img}" alt="">
//             </div>
    
//             <div class="product-data">
//                 <h3>${products.name}</h3>
//                 <p>s/.<span>${products.price}</span></p>
//                 <p>${products.rate} stars</p>
//                 <button class="car-button" id="${products.id}" >Comprar</button>
//             </div>  
//         </div>
//         `
//         containerProducts.innerHTML += html ;
//     }
// };

// displayProducts(fajasData);
//-----------------------------------------------------



//storage

//save products
document.addEventListener('DOMContentLoaded' , () => {

    if(localStorage.getItem('userCar')){
        userCar = JSON.parse(localStorage.getItem('userCar'))
        displayProductSelected()
    }else{
        userCar = []
    }
})
 


 //Get data from selected button

const addItem = (item) => {
    if(item.target.classList.contains('car-button')){

        setCar(item.target.parentElement)

        // item.target.setAttribute('disabled' , '');

        // item.target.classList.add('block-button');

        // item.target.innerText = 'EN CARRITO';
    }
    item.stopPropagation()
}


const setCar = (object) => {

    const products = {
        id: object.querySelector('.car-button').id,
        name: object.querySelector('h3').textContent, 
        price: object.querySelector('span').textContent,
        quantity: 1 
    }

    if(userCar.hasOwnProperty(products.id)){
        products.quantity = userCar[products.id].quantity + 1
    }else{
        userCar[products.id] = {...products}
    }

    displayProductSelected()
}



// add and delete item from car 

productsSelected.addEventListener('click' , (e) => {
    actionBtn(e)
})


const actionBtn = (e) => {
    if(e.target.classList.contains('add-item')){

        const temp = userCar[e.target.id]

        temp.quantity++

        userCar[e.target.id] = {...temp}
        
        //not here --> userCar[e.target.id].price *= userCar[e.target.id].quantity

        displayProductSelected()

    }

    if(e.target.classList.contains('delete-item')){

        const temp = userCar[e.target.id]

        temp.quantity--

        userCar[e.target.id] = {...temp}  

        if(userCar[e.target.id].quantity === 0){

            delete userCar[e.target.id]
        }


        displayProductSelected()

    }

    e.stopPropagation()
}