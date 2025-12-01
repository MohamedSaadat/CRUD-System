// initialization
var userName = document.getElementById("exampleFormControlInput1");
var userEmail = document.getElementById("exampleFormControlInput2");
var userPassword = document.getElementById("exampleFormControlInput3");
var userphoto = document.getElementById("exampleFormControlInput4");
var userDescription = document.getElementById("exampleFormControlTextarea1");
var button = document.getElementById("button");
// ------------------------ #1 Create --------------------------------
var usersList = [];
function signIn() {
  var user = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
    photo: "images/avatar-1.png",
    description: userDescription.value,
  };
  usersList.push(user);
    retrieveUserList();
  console.log(usersList);
}
// -------------------- #2 Retrieve ------------------------
function retrieveUserList() {
  var allUsers = ``;
  for (let i = 0; i < usersList.length; i++) {
    allUsers += `
    <tr>
        <th>${i + 1}</th>
        <td>${usersList[i].userName}</td>
        <td>${usersList[i].userEmail}</td>
        <td>${usersList[i].userPassword}</td>
        <td>${usersList[i].userphoto}</td>
        <td>${usersList[i].userDescription}</td>
    </tr>
    `;
  }
  document.getElementById("usersList").innerHTML = allUsers;
}
// --------------------------------------------------------
button.addEventListener("click", signIn);
