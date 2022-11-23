const express = require("express");

const app = express();

const cors = require("cors");
const axios = require("axios");

const port = 5000;

app.use(cors({ credentials: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Server is Running"));

app.post("/get-data", async (req, res) => {
  try {
    const { liAt, token, ssid } = req.body;

    if (!liAt || !token || !ssid) {
      return res.status(400).json({ error: "bad input" });
    }

    const getProfileKey = await axios.get(
      "https://www.linkedin.com/voyager/api/me",
      {
        headers: {
          "csrf-token": `${token}`,
          Cookie: `li_at=${liAt};JSESSIONID=${ssid};`,
        },
      }
    );

    let entityURN = getProfileKey.data.miniProfile.entityUrn.split(":")[3];

    console.log(entityURN);

    if (entityURN) {
      const response = await axios.get(
        "https://www.linkedin.com/voyager/api/identity/profiles/" +
          entityURN +
          "/networkinfo",
        {
          headers: {
            "csrf-token": `${token}`,
            Cookie: `li_at=${liAt};JSESSIONID=${ssid};`,
          },
        }
      );

      const messageCount = await axios.get(
        "https://www.linkedin.com/voyager/api/messaging/conversations",
        {
          headers: {
            "csrf-token": `${token}`,
            Cookie: `li_at=${liAt};JSESSIONID=${ssid};`,
          },
        }
      );

      return res.status(200).json({
        connectionCount: response.data.connectionsCount,
        followerCount: response.data.response.data.followersCount,
      });
    }
    return res.status(404).json({ error: "missing-URN" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
});

app.listen(process.env.PORT || port, () =>
  console.log(`Server is running on port ${port}!`)
);

module.exports = app;
