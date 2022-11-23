// /*global chrome*/
// chrome.runtime.onInstalled.addListener(() => {
//   console.log("Chrome extension successfully installed!");
//   chrome.cookies.getAll(
//     {
//       url: "https://www.linkedin.com/feed/",
//     },
//     function (cookie) {
//       let liAt, ssid, token;

//       console.log("Cookie : ", cookie);

//       for (let i = 0; i < cookie.length; i++) {
//         if (cookie[i].name === "li_at") {
//           liAt = cookie[i].value;
//         }
//         if (cookie[i].name === "JSESSIONID") {
//           console.log(cookie[i].value.substring(1, cookie[i].value.length - 1));

//           token = cookie[i].value.substring(1, cookie[i].value.length - 1);
//           ssid = cookie[i].value.substring(1, cookie[i].value.length - 1);
//         }
//       }

//       fetch("http://localhost:5000/get-data", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           liAt,
//           token,
//           ssid,
//         }),
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.log("Error:", error));
//     }
//   );

//   return;
// });

// // chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// //     if (request.contentScriptQuery == "getdata") {
// //         var url = request.url;
// //         fetch(url)
// //             .then(response => response.text())
// //             .then(response => sendResponse(response))
// //             .catch()
// //         return true;
// //     }
// //     if (request.contentScriptQuery == "postData") {
// //         fetch(request.url, {
// //             method: 'POST',
// //             headers: {
// //                 'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
// //                 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
// //             },
// //             body: 'result=' + request.data
// //         })
// //             .then(response => response.json())
// //             .then(response => sendResponse(response))
// //             .catch(error => console.log('Error:', error));
// //         return true;
// //     }
// // });
