// ==UserScript==
// @name         Fandom Debloater
// @version      0.1.1
// @description  Makes fandom less shit
// @author       Xyrec
// @match        *.fandom.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fandom.com
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @downloadURL  https://github.com/Xyrec/fandom-debloater/raw/main/fandom-debloater.js
// @updateURL    https://github.com/Xyrec/fandom-debloater/raw/main/fandom-debloater.js
// ==/UserScript==

(function() {
    'use strict';

    $(".fandom-community-header__local-navigation").css("display", "none");
    $(".WikiaBarWrapper ").css("display", "none");
    $(".global-navigation").css("display", "none");
    $(".main-container").css("margin-left", "0px");
    $(".main-container").css("min-width", "702px");
    $(".main-container").css("width", "100%");
    $(".fandom-sticky-header").css("left", "0px");
    $(".search-modal:before").css("left", "0px");
    $(".mcf-wrapper").css("display", "none");
    $(".right-rail-wrapper").css("display", "none");
    $(".page__right-rail").css("display", "none");
    $(".fandom-community-header__background.cover").css("width", "100%");
})();