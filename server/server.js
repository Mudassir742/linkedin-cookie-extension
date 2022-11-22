const express = require("express");
const cors = require("cors");
const app = express();
const http = require("https");
const axios = require("axios");
const port = 5000;

app.use(cors({ credentials: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/check", (req, res) => {
  const id = req.body.id;

  if (!id) {
    return res.status(400).json({ error: "no input" });
  }

  return res.status(200).json({ message: "all good" });
});

app.post("/get-data", async (req, res) => {
  try {
    const { liAt, token, ssid } = req.body;
    console.log(req.liAt);
    if (!liAt || !token || !ssid) {
      return res.status(400).json({ error: "bad input" });
    }
    const response = await axios.get(
      // "https://www.linkedin.com/voyager/api/me",
      "https://www.linkedin.com/voyager/api/identity/profiles/ACoAAD9XPdkBkCEWB-plclErtC9k1USK0ZgD83Y/networkinfo",
      //"https://www.linkedin.com/voyager/api/messaging/conversations",
      //"https://www.linkedin.com/voyager/api/relationships/invitationsSummary",
      {
        headers: {
          "csrf-token": `${token}`,
          Cookie: `li_at=${liAt};JSESSIONID=${ssid};`,
        },
      },
      { withCredentials: true }
    );
    console.log(response.data);

    res.status(200).json({ emplyeCount: response.data.connectionsCount });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});

app.listen(process.env.PORT || port, () =>
  console.log(`Server is running on port ${port}!`)
);

module.exports = app;
