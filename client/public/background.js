/*global chrome*/
chrome.runtime.onInstalled.addListener(() => {
  console.log("Chrome extension successfully installed!");
  chrome.cookies.getAll(
    {
      url: "https://www.linkedin.com/feed/",
    },
    function (cookie) {
      let requiredCookies = cookie.filter(
        (value) => value.name === "li_at" || value.name === "JSESSIONID"
      );
      console.log("Cookie : ", requiredCookies);
    }
  );

  fetch("http://localhost:5000/get-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      liAt: "AQEDAT9XPdkFy5DxAAABhJZsuEIAAAGEunk8Qk0AS_9D3llQ-HI01sZVN7wcrZBuvLs0ZLj7XraZxPLDYRJl9_vP1UYbV1I6QHVK-LnFpzxHeoMYu4fqY39f-pgtFjpZ-Mo-dvnlP2jD1Z8tOnqhYj01",
      token: "ajax:7205970595350190655",
      ssid: "ajax:7205970595350190655",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error:", error));

  return;
});

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.contentScriptQuery == "getdata") {
//         var url = request.url;
//         fetch(url)
//             .then(response => response.text())
//             .then(response => sendResponse(response))
//             .catch()
//         return true;
//     }
//     if (request.contentScriptQuery == "postData") {
//         fetch(request.url, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
//                 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
//             },
//             body: 'result=' + request.data
//         })
//             .then(response => response.json())
//             .then(response => sendResponse(response))
//             .catch(error => console.log('Error:', error));
//         return true;
//     }
// });
