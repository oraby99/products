function validateForm(userName)
{
      var userNameRegex = /^[A-Z][a-z]{3,8}/;
      if(userNameRegex.test(userName) == false)
      {
           return false;
      }
      else
      {
          return true;
      }
}
var productsContainer ;
if(localStorage.getItem("productData")== null)
{
       productsContainer =[];   
}
else
{
     productsContainer = JSON.parse(localStorage.getItem("productData") );
         displayProducts();
}


var inputs = document.getElementsByClassName("form-control");

function addProduct() {


    var productName = document.getElementById("productNameInp").value;
    var productPrice = document.getElementById("productPriceInp").value;
    var productCategory = document.getElementById("productCategoryInp").value;
    var productCode = document.getElementById("productCodeInp").value;
    var productDesc = document.getElementById("productDescInp").value;
    //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//     var dash = productCode.search("-")
//     var productCompany =productCode.slice(0,dash);
//     var productModel =productCode.slice(dash+1,productCode.length);
// console.log(productCode);
// console.log(productCompany);
// console.log(productModel);
    if(validateForm(productName)== true)
    {
     var product =
     {
         name: productName,
         price: productPrice,
         category: productCategory,
         code:productCode,
         desc:productDesc
     }
     
     productsContainer.push(product);
     localStorage.setItem("productData",JSON.stringify(productsContainer))
     displayProducts();
     clearForm();
     window.alert("ADDED SUCCESSFULLY !")
    }
else
{
     window.alert("USERNAME NOT VALID");
}
  
}

function clearForm()
{ 
    for (var i = 0; i < inputs.length; i++)
    {
        inputs[i].value = "";
    }
}

function displayProducts()
{
var temp = "";
for(var i = 0 ; i < productsContainer.length ;i++)
{
    
     
     temp+="<tr><td>"+productsContainer[i].name+"</td>"
     +"<td>"+productsContainer[i].price+"</td>"
     +"<td>"+productsContainer[i].category+"</td>"
     +"<td>"+productsContainer[i].code+"</td>"
     +"<td>"+productsContainer[i].desc+"</td><button onclick ='deleteProduct("+i+")' class='small btn-outline-success k m-2' >DELETE</button></tr>";
    
}

document.getElementById("tableBody").innerHTML = temp;

}
function searchProduct(term)
{
     var temp =``;
     for (var i = 0; i < productsContainer.length; i++) 
     {
         if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase()))
         {
   
          temp+="<tr><td>"+productsContainer[i].name+"</td>"
          +"<td>"+productsContainer[i].price+"</td>"
          +"<td>"+productsContainer[i].category+"</td>"
          +"<td>"+productsContainer[i].code+"</td>"
          +"<td>"+productsContainer[i].desc+"</td><button onclick ='deleteProduct("+i+")' class='small btn-outline-success k m-2' >DELETE</button></tr>"
         }
          
     }
     document.getElementById("tableBody").innerHTML = temp;
}
function deleteProduct(indx) 
{
    var deleted = productsContainer.splice(indx,1);
    localStorage.setItem("productData",JSON.stringify(productsContainer))
    displayProducts(); 
}


