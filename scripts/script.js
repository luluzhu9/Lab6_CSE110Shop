// Script.js

window.addEventListener('DOMContentLoaded', () => {
  
  if (!(localStorage.getItem('products') != null)){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      myList = data;
      localStorage.setItem('products', JSON.stringify(myList));
    });

  } else {

    var products = localStorage.getItem('products');
    var productJSON = JSON.parse(products);

    var product_list = document.getElementById('product-list');
    
    for(var i = 0; i < productJSON.length; i++){
      product_list.appendChild(new ProductItem(productJSON[i]));
    }
  }
  
});

