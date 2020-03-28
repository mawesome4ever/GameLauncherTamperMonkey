// ==UserScript==
// @name         Instance Join
// @namespace    name?
// @version      0.1
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
    var gameid = GetURLParameter("gameid");
    console.log("gameid: "+gameid+" placeid: "+PlaceID);
    if (PlaceID && gameid){
        Roblox.GameLauncher.joinGameInstance(PlaceID, gameid);
    }
}
document.body.onload = main();

