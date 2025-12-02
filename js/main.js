// ------------------------ initialization --------------------------------
var userName = document.getElementById("exampleFormControlInput1");
var userEmail = document.getElementById("exampleFormControlInput2");
var userPassword = document.getElementById("exampleFormControlInput3");
var userphoto = document.getElementById("exampleFormControlInput4");
var searchInput = document.getElementById("exampleFormControlInput5");
var userDescription = document.getElementById("exampleFormControlTextarea1");
var signInButton = document.getElementById("signIn");
var deleteButton = document.getElementById("delete");
var usersList = [];
var storage = JSON.parse(localStorage.getItem("Users List"));

// ------------------------ Clear inputs --------------------------------
function clear() {
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
  userphoto.value = "";
  userDescription.value = "";
}
// ------------------------ #1 Create --------------------------------
if (storage) {
  usersList = storage;
  retrieveUsersList();
}
function signIn() {
  var user = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
    photo: "images/avatar-1.png",
    description: userDescription.value,
  };
  usersList.push(user);
  clear();
  retrieveUsersList();
}
// -------------------- #2 Retrieve & localStorage ------------------------
function retrieveUsersList() {
  localStorage.setItem("Users List", JSON.stringify(usersList));
  // هنا هنعمل تغير ف localstorage وبعده يظهر الداتا افضل من تكراره ف كل عملية
  var allUsers = ``;
  for (let i = 0; i < usersList.length; i++) {
    allUsers += `
    <tr>
    <th>${i + 1}</th>
    <td>${usersList[i].name}</td>
    <td>${usersList[i].email}</td>
    <td>${usersList[i].password}</td>
    <td>${usersList[i].photo}</td>
    <td>${usersList[i].description}</td>
    <td id="delete" class="del"><i class="fa-solid fa-trash" style="color: #ff0000;" onclick="deleteUser(${i})"></i></td>
    </tr>
    `;
  }
  document.getElementById("usersList").innerHTML = allUsers;
}
// -------------------- #3 Delete ------------------------
function deleteUser(userIndex) {
  usersList.splice(userIndex, 1);
  retrieveUsersList();
}
// -------------------- #5 Search ------------------------
function search() {
  var searchInputValue = searchInput.value;
  console.log(searchInputValue);
}
// -------------------- Events "click" -----------------------------
signInButton.addEventListener("click", signIn);
searchInput.addEventListener("input", search);
// deleteButton.addEventListener("click", deleteUser);
// الايفنت ده مش هيشتغل عشان مش موجود فى html هو بيضاف من ال js ف احسن حاجة نعمل onclick
