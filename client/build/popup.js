chrome.cookies.getAll(
  {
    url: "https://www.linkedin.com/feed/",
  },
  function (cookie) {
    let liAt, ssid, token;

    console.log("Cookie : ", cookie);

    for (let i = 0; i < cookie.length; i++) {
      if (cookie[i].name === "li_at") {
        liAt = cookie[i].value;
      }
      if (cookie[i].name === "JSESSIONID") {
        console.log(cookie[i].value.substring(1, cookie[i].value.length - 1));

        token = cookie[i].value.substring(1, cookie[i].value.length - 1);
        ssid = cookie[i].value.substring(1, cookie[i].value.length - 1);
      }
    }

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

        let connectionTag = document.getElementById("connection");
        let followerTag = document.getElementById("followers");
        let user = document.getElementById("user");
        let main = document.getElementById("data");
        let loader = document.getElementById("loader");

        user.innerText = data.userName;
        connectionTag.innerText = data.connectionCount;
        followerTag.innerText = data.followerCount;

        main.style.display = "block";
        loader.style.display = "none";
      })
      .catch((error) => {
        console.log("Error:", error);

        let errorTag = document.getElementById("error");
        errorTag.style.display = "block";
      });
  }
);
