// ==UserScript==
// @name         No tab in messenger
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Removes tab spam in facebook messenger conversations.
// @author       Cyrmax
// @updateURL https://cyrmax.github.io/no-tab-in-messenger
// @downloadURL https://cyrmax.github.io/no-tab-in-messenger
// @match        https://messenger.com/*
// @match        https://www.messenger.com/*
// @run-at document-start
// @grant unsafeWindow
// ==/UserScript==


// Function that sets timer on unsafe window.
// The timer runs every 2 seconds, searches for element with role equal to tab and tabindex equal to -1 and removes tab role on this element.
(function () {
    unsafeWindow.setInterval(function () {
        let element = document.querySelector('[role="tab"][tabindex="-1"]');
        if (element != null) {
            element.removeAttribute("role");
        }
    }, 2000)
})();