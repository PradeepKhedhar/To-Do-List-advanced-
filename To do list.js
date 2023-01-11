//To-do data input conditons

document.querySelector('#add_btn').addEventListener('click', datainput)

function datainput() {
    if (document.querySelector('#data_input').value.length == 0) {
        alert("Please Enter the Task");

    }
    else {
        document.querySelector(".tasks").innerHTML +=

            `
      
      <div class="items form-control" >
     <span id="items"> ${document.querySelector('#data_input').value} 
      </span>
      <span id="tools"> 
      <i id="check" class="fa-solid fa-check"></i>
      <i id="edit" class="fa-regular fa-pen-to-square"></i>
      <i id="del"class="fa-solid fa-trash-can"  ></i> 
      
      </span>

      </div>
       
    
       `
        document.querySelector("#data_input").value = ""


        checkbutton();


    }

  editbutton();


}





function checkbutton (){
    const checkbutton = document.querySelector("#check");
    const text = document.querySelector(".items");
    
    // Add an onclick event listener to the button
    checkbutton.addEventListener("click", function () {
        // Toggle the class "line-through" on the text element
        text.classList.toggle("line-through")
    })
}



function editbutton(){

    const edit_btn = document.getElementById("edit");
    const footer = document.querySelector(".hide");
    edit_btn.addEventListener("click", function () {
        footer.classList.toggle("hide");


        document.getElementById("edit_task").value = text.innerText
    })
}












// const edit_btn = document.getElementById("edit");
// const footer = document.getElementById("hide");


// if (edit_btn) {

//     edit_btn.addEventListener("click", function () {

//         if (footer.style.display === "none") {
//             footer.style.display = "block";

//         } else {
//             footer.style.display = "none";
//         }

//     })
// }








function deleteDivWithIcon() {
  const div_Delete = document.querySelector('.items');
  const deleteIcon = divToDelete.querySelector('.delete-icon');

  deleteIcon.addEventListener('click', function() {
    divToDelete.remove();
  });
}

// Call the function
deleteDivWithIcon();
