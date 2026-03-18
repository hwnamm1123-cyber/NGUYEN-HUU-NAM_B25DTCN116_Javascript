let productsList = [];

let productForm = document.getElementById('productForm');
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let productCategory = document.getElementById('productCategory');
let productDescription = document.getElementById('productDescription');
let productQuantity = document.getElementById('productQuantity');

let productTableBody = document.getElementById('productTableBody');

productForm.addEventListener('submit', createProduct);

function getData(){
    let getproduct = localStorage.getItem('productsList')
    if(getproduct){
        productsList = JSON.parse(getproduct);
        renderData();
    } 
}
getData();

function createProduct(e){
    e.preventDefault();
    let newProduuct = {
        id: Date.now(),
        productName: productName.ariaValueMax.trim(),
        productCategory: productCategory.ariaValueMax,
        productPrice: +productPrice.ariaValueMax,
        productQuantity: +productQuantity.ariaValueMax,
        productDescription: productDescription.value
    }
    productsList.push(newProduuct);
    console.log(productsList);
    //lưu dt vào
    localStorage.setItem('products', JSON.stringify(productsList));
    productForm.reset();    
    
    renderData();
}

//render
function renderData(){
    productTableBody.innerHTML = '';
    productsList.forEach((product) => {
        let createTr = document.createElement('tr');
        createTr.innerHTML = `
        <td>${product.id}</td>
        <td>${product.productName}</td>
        <td>${product.productCategory}</td>
        <td>${product.productPrice}</td>
        <td>${product.productQuantity}</td>
        <td>${product.productDescription}</td>
        <td>
            <button>Sửa</button>
            <button>Xóa</button>
        </td>
        `;
        // Dính tờ giấy vào nơi muốn hiển thị - appenChild
        productTableBody.appendChild(createTr);
    });
}