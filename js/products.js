//variables
const containerProducts = document.querySelector('#product__fajas')
const buttonListener = document.getElementsByClassName('car-button')
const productsSelected = document.querySelector('#products__selected')

let userCar = [
    
]

const fajasData = [
    {id : 0 ,  name : 'Faja Cinturilla' , price : 179 , rate : 4.5 , img : 'https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_140,dpr_2/assets/1/14/dimlarge/015791_700_1200x1500_usa_1.jpg'},
    {id : 1 ,  name : 'Faja Body' , price : 180 , rate : 5 , img : 'https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_140,dpr_2/assets/1/14/dimlarge/018472_802_1200x1500_usa_2.jpg'},
    {id : 2 ,  name : 'Faja Estilo Body' , price : 123 , rate : 4.1 , img : 'https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_140,dpr_2/assets/1/14/dimlarge/018678n_700_1200x1500_2021_2.jpg'},
    {id : 4 ,  name : 'Calzón faja clásico' , price : 200 , rate : 2.5 , img : 'https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_140,dpr_2/assets/1/14/dimlarge/012903_382_1200x1500_2022_2.jpg'},
    {id : 3 ,  name : 'Calzón faja postparto' , price : 160 , rate : 3.5 , img : 'https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_140,dpr_2/assets/1/14/dimlarge/012885_802_1200x1500_usa_2.jpg'}
];

//methods


function displayProducts(product) {

    for(products of product){
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
    }
};

displayProducts(fajasData);

//save products
document.addEventListener('DOMContentLoaded' , () => {
    if(localStorage.getItem('userCar')){
        userCar = JSON.parse(localStorage.getItem('userCar'))
        displayProductSelected()
    }
})




//buttons Listener


for (var i = 0 ; i < buttonListener.length; i++) {
    buttonListener[i].addEventListener('click' , (e) => {
        Toastify({
            text: "Añadido",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        addItem(e)
    }) ; 
 }


 //Get data from selected button

const addItem = (item) => {
    if(item.target.classList.contains('car-button')){
        setCar(item.target.parentElement)

        item.target.setAttribute('disabled' , '');
        item.target.classList.add('block-button');
        item.target.innerText = 'EN CARRITO';

    }
    item.stopPropagation()
}


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
                    <td>s/.${products.price}</td>
                </tr>
                `
                productsSelected.innerHTML += htmlProductSelected ;
            }
        });

        localStorage.setItem('userCar', JSON.stringify(userCar))
    }    



// add and delete item from car 

productsSelected.addEventListener('click' , (e) => {
    actionBtn(e)
})



const actionBtn = (e) => {



    if(e.target.classList.contains('add-item')){
        const tempAdd = userCar[e.target.id]

        tempAdd.quantity++

        userCar[e.target.id] = {...tempAdd}

        //not here --> userCar[e.target.id].price *= userCar[e.target.id].quantity

        displayProductSelected()

    }

    if(e.target.classList.contains('delete-item')){

        const tempDelete = userCar[e.target.id]

        tempDelete.quantity--

        if(userCar[e.target.id].quantity === 0){
            delete userCar[e.target.id]
        }

        displayProductSelected()

    }




    e.stopPropagation()

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

    }

    userCar[products.id] = {...products}

    displayProductSelected()
}






