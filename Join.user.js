// ==UserScript==
// @name         Instance Join
// @namespace    name?
// @version      0.2
// @updateURL    https://github.com/mawesome4ever/GameLauncherTamperMonkey/raw/master/Join.user.js
// @description  Join game with id
// @author       mawesome4ever (addictedroblox1414)
// @match        http*://*.roblox.com/games/*
// @grant        none
// ==/UserScript==

function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
}
function main(){
    var PlaceID = location.href.match(/\/(\d+)\//g);
    PlaceID = String(PlaceID).match(/\d+/g);
    let gameid = GetURLParameter("gameid");
    console.log(" placeid: "+PlaceID+" gameid: "+gameid);
    if (gameid && PlaceID){
        Roblox.GameLauncher.joinGameInstance(parseInt(PlaceID,10), String(gameid));
    }
}
document.body.onload = main();

