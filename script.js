let cart= [];
var itemIndex;


function calc(){
  show.innerHTML = cart
  show.innerHTML = ""
  document.getElementById("show").style.display = "block"
  document.getElementById("allButtons").style.display = "block"
  document.getElementById("errorDiv").style.display = "none"
  
      cart.map((items, j)=>{
        console.log(j, items);
        show.innerHTML += `
        <div style= "display: flex; justify-content: space-between;" >
         <p style= "margin-right: 50px;" > ${j+1}. ${cart[j]}</p>
         <button class= "btn btn-danger btn-sm my-3 mx-5 " onclick="del(${j+1})" >Delete Item</button>
         <button class= "btn btn-warning btn-sm my-3 mx-5" onclick= "edit(${j+1})" >Edit item</button>
         </div>
        `
      })
}

  function del(j){
    cart.splice(j-1, j)
    calc()
  }

  function edit(j){
    var newItem = prompt("Input The New Item")
      cart.splice(j-1, j, newItem)
      document.getElementById("input").value = ""
      calc()
  }
  


    function submitItem() {
    if (input.value === "") {
      document.getElementById("errorDiv").style.display = "block"
      errorDiv.innerHTML = "Please Input An Item Before Adding To Cart"
    }
    else {
      cart.push (input.value)
      document.getElementById("input").value = ""
      calc()
    } 
  } 



function addToFirst()  {
  if (input.value === "") {
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Please Input An Item Before Adding To Cart"
  } else{
    cart.unshift(input.value)
    document.getElementById("input").value = "" 
    calc()
  }
}


function addToLast()  {
  if (input.value === ""){
    alert("Please Input an Item Before Proceeding To Add It To Cart")
  } else {
    cart.push(input.value)
    document.getElementById("input").value = ""
    calc ()
  }
}

function deleteFirst()  {
  if (cart.length === 0){
    alert("You Don't Have Any Item In Your Cart")
  } else{
  cart.shift(input.value)
  document.getElementById("input").value = "" 
  calc ()
  }
}


function deleteLast()  {
  if (cart.length === 0){
    alert("You Don't Have Any Item In Your Cart")
  } else {
  cart.pop(input.value)
  document.getElementById("input").value = "" 
  calc ()
  }
}

function replaceAnItem()  {
  if (cart.length === 0) {
    alert("You Don't Have Any Item In The Cart") }
    else {
      var itemNumber =  Number(prompt ("Enter The Number Of The Item You Want To Replace"))
      if (itemNumber > cart.length || itemNumber <= 0){
        alert("Invalid Item Number")
      } else {
        var newItemNumber = prompt ("Enter The Name Of The New Item Here")
      cart.splice(itemNumber-1, 1, newItemNumber)
      document.getElementById("input").value = ""
      calc()
      }
    }
  }
  
    


function deleteAllItems()  {
  if (cart.length === 0) {
    alert("There is Nothing to Delete")
  } else {
  let confirmation = confirm("Are you sure you want to delete all the items in your cart?")
  if (confirmation === true){
      cart.splice(0, cart.length)
      document.getElementById("input").value = ""
      calc ()
    }
  }
}


//These Are The Items Buttons

function hpEnvy()  {
  document.getElementById("errorDiv").style.display = "none"
  cart.push("HP Envy")
  document.getElementById("input").value = ""
  calc ()
}


function samsungFlip()  {
  document.getElementById("errorDiv").style.display = "none"
  cart.push("Samsung Flip")
  document.getElementById("input").value = ""
  calc ()
}


function lenovoThinkpad()  {
  document.getElementById("errorDiv").style.display = "none"
  cart.push("Lenovo Thinkpad")
  calc ()
}