const express = require("express");
const cors = require("cors")
const app = express();
const http = require('https')
const axios = require("axios")
const port = 5000;

app.use(cors({credentials: true}));
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/check", (req, res) => {
  const id = req.body.id;

  if (!id) {
    return res.status(400).json({ error: "no input" });
  }

  return res.status(200).json({ message: "all good" });
});

app.get("/get-data",async(req,res)=>{
  try{
  //   const options = {
  //     hostname: 'https://www.linkedin.com',
  //     path: '/voyager/api/entities/companies/2652230',
  //     method: 'GET',
  //     headers: {
  //       Cookies:
  //         "li_at:u4fqY39f-pgtFjpZ-Mo-dvnlP2jD1Z8tOnqhYj01;JSESSIONID:ajax:7205970595350190655;csrf-token:ajax:7205970595350190655;",
  //     },
  //   }
  //   const resp = http.request(options, (response) => {
  //     let data = ''
       
  //     response.on('data', (chunk) => {
  //         data += chunk;
  //     });
      
  //     // Ending the response 
  //     response.on('end', () => {
  //         console.log('Body:', JSON.parse(data))
  //     });
         
  // }).on("error", (err) => {
  //     console.log("Error: ", err)
  // }).end()
  
  const response = await axios.get(
    "https://www.linkedin.com/voyager/api/entities/companies/2652230",
    {
      headers: {
        "csrf-token":"ajax:7205970595350190655",
        Cookie:
          "li_at=AQEDAT9XPdkFy5DxAAABhJZsuEIAAAGEunk8Qk0AS_9D3llQ-HI01sZVN7wcrZBuvLs0ZLj7XraZxPLDYRJl9_vP1UYbV1I6QHVK-LnFpzxHeoMYu4fqY39f-pgtFjpZ-Mo-dvnlP2jD1Z8tOnqhYj01;JSESSIONID=ajax:7205970595350190655;",
      },
      
    },
    {withCredentials: true}
  );
  console.log(response)

  res.status(200).json({message:"ok"})
  
  }catch(error){
    console.log(error)
    res.status(500).json({message:"server error"})
  }
})

app.listen(process.env.PORT || port, () =>
  console.log(`Server is running on port ${port}!`)
);

module.exports = app;
