/*INSERT GROUP ID AND COOKIE BELOW*/

var groupId = 4634929 // << Replace 12345 with your Group Id
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_606621190875F197C5AE53DF29665A7887119F50630AFA3598D16864271C9037D391CD0549F24109EE7C5CDC604F0C63FB3B95F672F80BF2D13B5CDDA08A5E3336DA8843A701215B05306062B3F7BAF405973E5FA93F6E1D6E53AEFAB9DE6CBB1B90101D5EFF98AA5C136DF279CEBC2679C8032FB76DF97C92E0B11B42ADE5BC9ED545A33A482877D8B1271AF9887B4912B3476C12CA47527B167C56D461BABAD5DA45AE5278DFC5A20E7B3BACAE5137F63BAC37DBC0F466E6289DC26D2520D4405C3E46E90023C1E0BFBFE2C8FBAD4D539F3E58E87CB7665660CCDEA4C8C2F2C884031A8884DD6499C17927EC9B14D4025DF645CAE9884DBAB8C4B0FE32F2E91CE7DC86A0B37BB08EA1D7A9D44AE9F16822A536CA2AE84533F205EFBC57DACC17B70AE10D0E092370B3093977DD1FD006C1E89D" // << Put your account cookie inside of the quotes

/*INSERT GROUP ID AND COOKIE ABOVE*/


const express = require("express");
const rbx = require("noblox.js");
const app = express();

app.use(express.static("public"));

async function startApp() {
  await rbx.setCookie(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();

app.get("/ranker", (req, res) => {
    var User = req.param("userid");
    var Rank = req.param("rank");
  
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});