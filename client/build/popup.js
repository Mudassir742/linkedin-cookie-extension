var connectionTag = document.getElementById("connection");
var followerTag = document.getElementById("followers");
var user = document.getElementById("user");
var main = document.getElementById("data");
var loader = document.getElementById("loader");
var errorTag = document.getElementById("error");

chrome.cookies.getAll(
  {
    url: "https://www.linkedin.com/feed",
  },
  function (cookie) {
    console.log("Cookie : ", cookie);

    let liAt, ssid, token;

    for (let i = 0; i < cookie.length; i++) {
      if (cookie[i].name === "li_at") {
        liAt = cookie[i].value;
      }
      if (cookie[i].name === "JSESSIONID") {
        token = "ajax:" + cookie[i].value.replace(/[^0-9]/g,'')
        ssid = "ajax:" + cookie[i].value.replace(/[^0-9]/g,'')
      }
    }

    if (!liAt || !token || !ssid) {
      errorTag.innerText = "Cookie Error!!!";

      loader.style.display = "none";
      errorTag.style.display = "block";

      return;
    }

    console.log(token);

    fetch("http://localhost:5000/get-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        liAt,
        token,
        ssid,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        user.innerText = data.userName;
        connectionTag.innerText = data.connectionCount;
        followerTag.innerText = data.followerCount;

        main.style.display = "block";
        loader.style.display = "none";
      })
      .catch((error) => {
        console.log("Error:", error);

        loader.style.display = "none";
        main.style.display = "none";
        errorTag.style.display = "block";
      });
  }
);
