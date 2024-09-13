// declaration for elemnt in HTML
let inputName = document.getElementById("name");
let inputStage = document.getElementById("stage");
let inputSubject = document.getElementById("subject");
let addbtn = document.querySelector(".addbtn");
let updatebtn = document.querySelector(".updatebtn");
let transitionAdd = document.querySelector(".transadd");
let transitionRemove = document.querySelector(".transremove");
let transitionUpdate = document.querySelector(".transupdate");

let studId = 0;
// Data Persistence  use localStorage for save all value in table even reload your page
if (localStorage.getItem("Students") == null) {
  studentsContainer = [];
} else {
  studentsContainer = JSON.parse(localStorage.getItem("Students"));
  displayTable(studentsContainer);
}
// function to add student in your table
function addStudent() {
  if (validator()) {
    var student = {
      name: inputName.value,
      stage: inputStage.value,
      subject: inputSubject.value,
    };
    studentsContainer.push(student);

    displayTable(studentsContainer);
    clearForm();
    transitionAdded();

    localStorage.setItem("Students", JSON.stringify(studentsContainer));
  }
}
// function to clear all input from value you enter after added

function clearForm() {
  name: inputName.value = "";
  stage: inputStage.value = "";
  subject: inputSubject.value = "";
}
// function to display your value in table

function displayTable(arr) {
  let container = " ";
  for (let i = 0; i < arr.length; i++) {
    container += `  <tr>
                    <td class="my-1"> <i class="fa-solid fa-check markicon" ></i></td>
                    <td class="my-1">${arr[i].name}</td>
                    <td class="my-1">${arr[i].stage}</td>
                    <td class="my-1">${arr[i].subject}</td>
              
                    <td><button onclick="setUpdateTable(${i})" class="setupdatebtn">Update</button></td>
                    <td><button onclick="deleteTable(${i})" class="deletebtn">Delete</button></td>
                  </tr>`;
  }

  document.getElementById("rowData").innerHTML = container;
}
// function to delete student in your table

function deleteTable(index) {
  index;
  studentsContainer.splice(index, 1);
  localStorage.setItem("Students", JSON.stringify(studentsContainer));
  displayTable(studentsContainer);
  transitionRemoved();
}
// function to set all value in input to update this value in table

function setUpdateTable(index) {
  studId = index;

  inputName.value = studentsContainer[studId].name;
  inputStage.value = studentsContainer[studId].stage;
  inputSubject.value = studentsContainer[studId].subject;

  addbtn.classList.replace("appear", "hidden");
  updatebtn.classList.replace("hidden", "appear");
}
// function to update student in your table

function updateForm() {
  if (validator()) {
    var student = {
      name: inputName.value,
      stage: inputStage.value,
      subject: inputSubject.value,
    };
    studentsContainer.splice(studId, 1, student);
    displayTable(studentsContainer);
    clearForm();
    localStorage.setItem("Students", JSON.stringify(studentsContainer));

    addbtn.classList.replace("hidden", "appear");
    updatebtn.classList.replace("appear", "hidden");
    transitionUpdated();
  }
}
// function to validate value for name you enter match or not

function validator() {
  let regex = /^[A-Z][A-z0-9]{2,20}$/;

  if (regex.test(inputName.value)) {
    return true;
  } else {
    alert("Name inValid must start with Capital after that 2 to 20 charcater");
  }
}
// function to search for student in table with name

function searchStudent(searchKey) {
  var searchArray = [];
  for (i = 0; i < studentsContainer.length; i++) {
    if (
      studentsContainer[i].name.toLowerCase().includes(searchKey.toLowerCase())
    ) {
      searchArray.push(studentsContainer[i]);
    }
  }
  displayTable(searchArray);
}

// function to do notification when add new student in table

function transitionAdded() {
  transitionAdd.classList.replace("hidden", "appear");

  setTimeout(() => {
    transitionAdd.classList.replace("appear", "hidden");
  }, 2000);
}
// function to do notification when remove new student in table

function transitionRemoved() {
  transitionRemove.classList.replace("hidden", "appear");

  setTimeout(() => {
    transitionRemove.classList.replace("appear", "hidden");
  }, 2000);
}
// function to do notification when update new student in table

function transitionUpdated() {
  transitionUpdate.classList.replace("hidden", "appear");

  setTimeout(() => {
    transitionUpdate.classList.replace("appear", "hidden");
  }, 2000);
}
