// ------------------------ initialization --------------------------------
var userName = document.getElementById("exampleFormControlInput1");
var userEmail = document.getElementById("exampleFormControlInput2");
var userPassword = document.getElementById("exampleFormControlInput3");
var userPhoto = document.getElementById("exampleFormControlInput4");
var searchInput = document.getElementById("exampleFormControlInput5");
var userDescription = document.getElementById("exampleFormControlTextarea1");
var signInButton = document.getElementById("signIn");
var updateButton = document.getElementById("update");
// var deleteButton = document.getElementById("delete");
// var deleteButton = document.getElementById("delete");
var usersList = [];
var userIndex;
var storage = JSON.parse(localStorage.getItem("Users List"));

// -------------------- Clear inputs --------------------------------
function clear() {
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
  userPhoto.value = "";
  userDescription.value = "";
}
// -------------------- #1 Create --------------------------------
function signIn() {
  var user = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
    photo: userPhoto.files[0]
      ? `images/${userPhoto.files[0].name}`
      : "images/favicon.png",
    photoAlt: userPhoto.files[0] ? `${userPhoto.files[0].name}` : "favicon",
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
      <td><img src="${usersList[i].photo}" alt="${usersList[i].photoAlt}"></td>
      <td>${usersList[i].description}</td>
      <td id="delete" class="iconBTN"><i class="fa-solid fa-trash" style="color: #ff0000;" onclick="deleteUser(${i})"></i></td>
      <td id="update" class="iconBTN"><i class="fa-solid fa-pen" style="color: #0040ff;" onclick="editUserData(${i})"></i></td>
      </tr>
    `;
  }
  document.getElementById("usersList").innerHTML = allUsers;
}
// -------------------- #3 Delete ------------------------
function deleteUser(index) {
  usersList.splice(index, 1);
  retrieveUsersList();
}
// -------------------- #4 Update ------------------------
function editUserData(index) {
  userIndex = index;
  userName.value = usersList[index].name;
  userEmail.value = usersList[index].email;
  userPassword.value = usersList[index].password;
  // userPhoto.value = usersList[index].photo;
  userDescription.value = usersList[index].description;
  signInButton.classList.add("d-none");
  updateButton.classList.remove("d-none");
}
function updateUser() {
  var user = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
    photo: userPhoto.files[0]
      ? `images/${userPhoto.files[0].name}`
      : "images/favicon.png",
    photoAlt: userPhoto.files[0] ? `${userPhoto.files[0].name}` : "favicon",
    description: userDescription.value,
  };
  usersList.splice(userIndex,1,user);
  clear();
  retrieveUsersList();
  signInButton.classList.remove("d-none");
  updateButton.classList.add("d-none");
}
// -------------------- #5 Search ------------------------
function search() {
  var searchInputValue = searchInput.value;
  var allUsers = ``;
  for (let i = 0; i < usersList.length; i++) {
    // name
    if (
      usersList[i].name.toLowerCase().includes(searchInputValue.toLowerCase())
    ) {
      allUsers += `
        <tr>
        <th>${i + 1}</th>
        <td><mark>${usersList[i].name}</mark></td>
        <td>${usersList[i].email}</td>
        <td>${usersList[i].password}</td>
        <td><img src="${usersList[i].photo}" alt="${
        usersList[i].photoAlt
      }"></td>
      <td>${usersList[i].description}</td>
        <td id="delete" class="iconBTN"><i class="fa-solid fa-trash" style="color: #ff0000;" onclick="deleteUser(${i})"></i></td>
        <td id="update" class="iconBTN"><i class="fa-solid fa-pen" style="color: #0040ff;" onclick="editUserData(${i})"></i></td>
        </tr>
        `;
      // email
    } else if (
      usersList[i].email.toLowerCase().includes(searchInputValue.toLowerCase())
    ) {
      allUsers += `
        <tr>
        <th>${i + 1}</th>
        <td>${usersList[i].name}</td>
        <td>${usersList[i].email}</td>
        <td>${usersList[i].password}</td>
        <td><img src="${usersList[i].photo}" alt="${
        usersList[i].photoAlt
      }"></td>
      <td>${usersList[i].description}</td>
        <td id="delete" class="iconBTN"><i class="fa-solid fa-trash" style="color: #ff0000;" onclick="deleteUser(${i})"></i></td>
        <td id="update" class="iconBTN"><i class="fa-solid fa-pen" style="color: #0040ff;" onclick="editUserData(${i})"></i></td>
        </tr>
        `;
      // password
    } else if (
      usersList[i].password
        .toLowerCase()
        .includes(searchInputValue.toLowerCase())
    ) {
      allUsers += `
      <tr>
      <th>${i + 1}</th>
        <td>${usersList[i].name}</td>
        <td>${usersList[i].email}</td>
        <td>${usersList[i].password}</td>
        <td><img src="${usersList[i].photo}" alt="${
        usersList[i].photoAlt
      }"></td>
      <td>${usersList[i].description}</td>
        <td id="delete" class="iconBTN"><i class="fa-solid fa-trash" style="color: #ff0000;" onclick="deleteUser(${i})"></i></td>
        <td id="update" class="iconBTN"><i class="fa-solid fa-pen" style="color: #0040ff;" onclick="editUserData(${i})"></i></td>
        </tr>
        `;
      // description
    } else if (
      usersList[i].description
        .toLowerCase()
        .includes(searchInputValue.toLowerCase())
    ) {
      allUsers += `
      <tr>
      <th>${i + 1}</th>
        <td>${usersList[i].name}</td>
        <td>${usersList[i].email}</td>
        <td>${usersList[i].password}</td>
        <td><img src="${usersList[i].photo}" alt="${
        usersList[i].photoAlt
      }"></td>
      <td>${usersList[i].description}</td>
      <td id="delete" class="iconBTN"><i class="fa-solid fa-trash" style="color: #ff0000;" onclick="deleteUser(${i})"></i></td>
      <td id="update" class="iconBTN"><i class="fa-solid fa-pen" style="color: #0040ff;" onclick="editUserData(${i})"></i></td>
        </tr>
    `;
    }
  }
  document.getElementById("usersList").innerHTML = allUsers;
}
// -------------------- Events -----------------------------
if (storage) {
  updateButton.classList.add("d-none");
  usersList = storage;
  retrieveUsersList();
}
signInButton.addEventListener("click", signIn);
searchInput.addEventListener("input", search);
updateButton.addEventListener("click", updateUser);
// deleteButton.addEventListener("click", deleteUser);
// deleteButton.addEventListener("click", deleteUser);
// الايفنت ده مش هيشتغل عشان مش موجود فى html هو بيضاف من ال js ف احسن حاجة نعمل onclick
