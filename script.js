let cart= [];


function calc() {
  show.innerHTML = cart
  show.innerHTML = ""
  document.getElementById("show").style.display = "block"
  document.getElementById("allButtons").style.display = "block"
  document.getElementById("errorDiv").style.display = "none"
  
      cart.map((items, j)=>{
        show.innerHTML += `
        <div style= "display: flex; justify-content: space-between;" class= "container mb-5">
          <div class="row">
              <p> ${j+1}. ${items}</p>
              <button class= "btn btn-danger btn-sm col-3 mx-1 ms-5" onclick="del(${j})" >Delete Item</button>
              <button class= "btn btn-warning btn-sm col-3 mx-1 " data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="getIndex(${j})" >Edit item</button>  
          </div>  
        </div>      
        `
      })
}




   const del = (index) => {
    var confirmation = window.confirm("Are You Want To Delete This Item?")
    if (confirmation === true){
    cart.splice(index, 1)
    calc()
   }
  }


  var myIndex;
  const getIndex = (index)=>{
   myIndex = index
  }

  const edit = (index) => {
    var editedItem = document.getElementById("newItem").value
      cart.splice(myIndex, 1, editedItem)
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
  let addedInput = document.getElementById("addFirstInput").value
  if (addedInput === ""){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Please Input The Item You Want To Add To First"
  } else {
    document.getElementById("errorDiv").style.display = "none"
    cart.unshift(addedInput)
    document.getElementById("addFirstInput").value = ""
    calc ()
  }
}


function addToLast()  {
  let addedInput = document.getElementById("addLastInput").value
  if (addedInput === ""){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Please Input The Item You Want To Add To Last"
  } else {
    cart.push(addedInput)
    document.getElementById("addLastInput").value = ""
    calc ()
  }
}

function deleteFirst()  {
  if (cart.length === 0){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "You Don't Have Any Item In Your Cart"
  } else{
  let confirmation = window.confirm("Are You Sure You want To Delete The First Item?")
  if (confirmation === true ){
      cart.shift(input.value)
      calc ()
    }
  }
}


function deleteLast()  {
  if (cart.length === 0){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "You Don't Have Any Item In Your Cart"
  } else {
    let confirmation = window.confirm("Are You Sure You want To Delete The Last Item?")
    if (confirmation === true){
      cart.pop(input.value)
      calc ()
    }
  }
}

  
    


function deleteAllItems()  {
  if (cart.length === 0) {
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "You Don't Have Any Item In Your Cart"
  } else {
  let confirmation = confirm("Are you sure you want to delete all the items in your cart?")
  if (confirmation === true){
      cart.splice(0, cart.length)
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