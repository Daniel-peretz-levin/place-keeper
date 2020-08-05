'use strict'
const KEY= 'userPref'

function getUserPref() {
    return loadFromStorage(KEY);
}

function getProphecy() {
    return gProphecy[getIntNotInc(0, gProphecy.length)]
}
