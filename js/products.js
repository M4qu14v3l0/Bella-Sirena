//variables
const containerProducts = document.querySelector('#product__fajas')
const buttonListener = document.getElementsByClassName('car-button')
const userCar = [
    
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

//buttons Listener


for (var i = 0 ; i < buttonListener.length; i++) {
    buttonListener[i].addEventListener('click' , (e) => {
        addItem(e)
    }) ; 
 }


 //Get data from selected button

const addItem = (item) => {
    if(item.target.classList.contains('car-button')){
        setCar(item.target.parentElement)
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
    }

    userCar[products.id] = {...products}

    console.log(userCar)
}

const displayProductSelected = (product) => {

}





