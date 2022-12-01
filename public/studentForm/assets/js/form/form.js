import {studInfoSend} from "../api/studInfoApi.js";
export function getDetails() {
  console.log("getDetails function called");
  const getName = document.getElementById("fnameIp").value;
  const getLname = document.getElementById("lnameIp").value;
//   const getAge = document.getElementById("ageIp").value;
//   const getGender = document.getElementById("genderIp").value;
    const getPhone = document.getElementById("phoneIp").value;
    const getDOB = document.getElementById("DOBIp").value;
    const getAdd = document.getElementById("add1Ip").value;
    // const getAdd2 = document.getElementById("add2Ip").value;
    const getCity = document.getElementById("cityIp").value;
    const getState = document.getElementById("stateIp").value;
    const getPin = document.getElementById("pinIp").value;
    const getPrn = document.getElementById("prnIp").value;
    // const getClg = document.getElementById("ClgIp").options[document.getElementById("ClgIp").selectedIndex].text;
    // const getCountry = document.getElementById("countryIp").value;
    // const selectElement= document.querySelector("#clgIp");
    // const getClg = selectElement.value;
    const selectElement= document.querySelector("#classIp");
    const getClass = selectElement.value;
    const selectElement2= document.querySelector("#divIp");
    const getDiv = selectElement2.value;
    const getRoll = document.getElementById("rollIp").value;
    const getEmail = document.getElementById("emailIp").value;

    let studInfo={
        name:getName,
        lname:getLname,
        phone:getPhone,
        dob:getDOB,
        add:getAdd,
        // add2:getAdd2,
        city:getCity,
        state:getState,
        pin:getPin,
        prn:getPrn,
        // country:getCountry,
        classs:getClass,

        div:getDiv,
        roll:getRoll,
        // clg:getClg,
        email:getEmail,
    };
    console.log(studInfo);

    studInfoSend(studInfo);

}