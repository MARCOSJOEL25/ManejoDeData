"use strict";

var dataUserLocal = [];
const DataList = document.querySelector("#DataList");
const SearchData = document.querySelector("#SearchData");

const BASE_URL = "https://fakerapi.it/api/v1/users?_quantity=1000";

window.addEventListener("DOMContentLoaded", async () => {
    dataUserLocal = await FetchAllData();
});

async function FetchAllData() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  console.log(data.data)
  return data.data;
}

SearchData.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    var newdataUserLocal = dataUserLocal.filter(user => `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(e.target.value.toLowerCase()))
    console.log(newdataUserLocal)
    renderUsers(newdataUserLocal);
  });

const createUser = (usersData)=>usersData.map(item => `<li>${item.firstname} ${item.lastname}</li>`).join(" ")

function renderUsers(user){
  const itemsString = createUser(user)
  DataList.innerHTML = itemsString;
}