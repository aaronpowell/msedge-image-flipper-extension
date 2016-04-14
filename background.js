browser.webNavigation.onCompleted.addListener(function (details) {
    browser.tabs.sendMessage(details.tabId, {
        rotate: true
    });
});

// function rotateClockWise() {
//     return function(info, tab1) {
//         browser.tabs.getCurrent(function(tab) {
//             browser.tabs.sendMessage(tab.id, {
//                 angle: 90,
//                 rotation: 'rotate'
//             }, function(response) {

//             });
//         });
//     };
// }

// function rotateCounterClockWise() {
//     return function(info, tab1) {
//         browser.tabs.getCurrent(function(tab) {
//             browser.tabs.sendMessage(tab.id, {
//                 angle: -90,
//                 rotation: 'rotate'
//             }, function(response) {

//             });
//         });
//     };
// }

// function upright() {
//     return function(info, tab1) {
//         browser.tabs.getCurrent(function(tab) {
//             browser.tabs.sendMessage(tab.id, {
//                 angle: 0,
//                 rotation: 'flip'
//             }, function(response) {

//             });
//         });
//     };
// }

// function upsideDown() {
//     return function(info, tab1) {
//         browser.tabs.getCurrent(function(tab) {
//             browser.tabs.sendMessage(tab.id, {
//                 angle: 180,
//                 rotation: 'flip'
//             }, function(response) {

//             });
//         });
//     };
// }


// /**
//  * Create a context menu which will only show up for images.
//  */
// browser.contextMenus.create({
//     "title": "Rotate CW",
//     "type": "normal",
//     "contexts": ["all"],
//     "onclick": rotateClockWise()
// });

// browser.contextMenus.create({
//     "title": "Rotate CCW",
//     "type": "normal",
//     "contexts": ["all"],
//     "onclick": rotateCounterClockWise()
// });

// browser.contextMenus.create({
//     "title": "Upside Down",
//     "type": "normal",
//     "contexts": ["all"],
//     "onclick": upsideDown()
// });

// browser.contextMenus.create({
//     "title": "Upright",
//     "type": "normal",
//     "contexts": ["all"],
//     "onclick": upright()
// });