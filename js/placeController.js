'use strict'

function init() {
    var userPref = getUserPref();
    console.log(userPref);
    if (!userPref) return;
    setPref(userPref);
}
function setPref(userPref) {
    console.log(userPref.backgroundColor);
    document.body.style.backgroundColor = userPref.backgroundColor;
    document.body.style.color = userPref.fontColor;

}
