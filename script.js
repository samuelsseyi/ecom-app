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
    cart.splice(index, 1)
    calc()
  }


  var myIndex;
  const getIndex = (index)=>{
   myIndex = index
  }

  const edit = () => {
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
  let addedInput = document.getElementById("addModal").value
  if (addedInput === ""){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Please Input The Item You Want To Add To First"
  } else {
    document.getElementById("errorDiv").style.display = "none"
    cart.unshift(addedInput)
    document.getElementById("addModal").value = ""
    calc ()
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