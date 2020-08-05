'use strict'

var gUserPref = {};



function onSavePref(ev) {
    ev.preventDefault();
    console.log('im here');
    const backgroundColor = document.querySelector('[name=bco]').value;
    const fontColor = document.querySelector('[name=fco]').value;
    // const dateOfBirth = document.querySelector('[name=dob]').value;
    // const timeOfBirth = document.querySelector('[name=time]').value;
    gUserPref['backgroundColor'] = backgroundColor;
    gUserPref['fontColor'] = fontColor;
    // gUserPref['dateOfBirth'] = dateOfBirth;
    // gUserPref['timeOfBirth'] = timeOfBirth;
    console.log(gUserPref);
    _savePrefToStorage()
}

// function showAge(age) {
//     document.querySelector('#sAge').innerText = age;
// }

function _savePrefToStorage() {
    saveToStorage('userPref', gUserPref);

}