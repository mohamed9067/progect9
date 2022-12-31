var productNameInput = document.getElementById('productNameInput')
var productPriceInput = document.getElementById('productPriceInput')
var productCategoryInput = document.getElementById('productCategoryInput')
var productDescriptionInput = document.getElementById('productDescriptionInput')
var addbtn = document.getElementById('addbtn')
var updatbtn = document.getElementById('updatbtn')

// console.log(productNameInput,productPriceInput,productCategoryInput,productDescriptionInput);
 var productcontainer = [];

if(localStorage.getItem('product')!==nall){
    productcontainer =JSON.parse(localStorage.getItem('product'))
    displayproduct()
}



function addProduct(){
    var product = {
        name :productNameInput.value,
        price :productPriceInput.value,
        Category :productCategoryInput.value,
        Description :productDescriptionInput.value
    }
    productcontainer.push(product)
    // console.log(productcontainer);
    localStorage.setItem('product',JSON.stringify(productcontainer))
    displayproduct()
    cleerproduct()
}

function displayproduct(){
var cartoon = ``
for( var i=0 ; i<productcontainer.length ; i++){
    cartoon+=`<tr>

    <td>${productcontainer[i].name}</td>
    <td>${productcontainer[i].price}</td>
    <td>${productcontainer[i].Category}</td>
    <td>${productcontainer[i].Description}</td>


    <td><button onclick='deleteProduct(${i})' class='btn btn-outline-danger btn-sm'> Delete</button></td>  
    <td><button onclick='setProduct(${i})' class='btn btn-outline-success btn-sm'> Update</button></td>  
    </tr>`
}
document.getElementById('showData').innerHTML =cartoon
}



localStorage.setItem('mohamw','samy')
var Storage = localStorage.getItem('Name')
console.log(Storage)



function cleerproduct(){
    productNameInput.value =``;
    productPriceInput.value =``;
    productCategoryInput.value =``;
    productDescriptionInput.value =``;

}

function deleteProduct(productIndex){
productcontainer.splice(productIndex,1)
localStorage.setItem('product',JSON.stringify(productcontainer))
displayproduct()
}

var productIndex=0
function setProduct(id){
    productIndex=id

    document.getElementById('productNameInput').value = productcontainer[productIndex].name
    document.getElementById('productPriceInput').value = productcontainer[productIndex].price
    document.getElementById('productCategoryInput').value = productcontainer[productIndex].Category
    document.getElementById('productDescriptionInput').value = productcontainer[productIndex].Description


    addbtn.classList.add('d-none')
    updatbtn.classList.remove('d-none')
    
}



function updateProduct(){

    productcontainer[productIndex].name =  document.getElementById('productNameInput').value
    localStorage.setItem('product',JSON.stringify(productcontainer))
    displayproduct()
    cleerproduct()

    addbtn.classList.remove('d-none')
    updatbtn.classList.add('d-none')
    
}





function searchTerm(term)
{
    var cointProduct = ``;
    for( var i=0 ; i< productsContainer.length ; i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true){
            cointProduct+= `
            <tr >
                <td>${productsContainer[i].name}</td>
                <td>${productsContainer[i].price}</td>
                <td>${productsContainer[i].category}</td>
                <td>${productsContainer[i].des}</td>
                <td><button onclick='deleteProduct(${i})' class ='btn btn-outline-danger btn-sm '>Delete</button></td>
                <td><button onclick="setForm(${i})"  class ='btn btn-outline-warning btn-sm '>Update</button></td>
            </tr>
            `
        }
        document.getElementById('tablebody').innerHTML =cointProduct;
        }
    }


    function valdiateProdcutName(){
        var regex =/^[A-Z][a-z]{3,8}$/
        if(regex.test(productNameInput.value) == true){
            return true
        }
        else
        {
            return false
        }
    }













