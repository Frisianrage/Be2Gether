
const ChatId = (userOne, userTwo) => {

//console.log(userOne, userTwo)
let firstID = userOne;
let secondID = userTwo;
let firstUser;
let secondUser;
let chatId 

if (firstID !== null){
if(firstID < secondID) {
firstUser = firstID; 
secondUser = secondID;
chatId = firstUser.substring(0,14)+secondUser.substring(0,14)
return chatId;


} else if (firstID > secondID) { 
secondUser =  firstID;
firstUser = secondID;
chatId = firstUser.substring(0,14)+secondUser.substring(0,14);
return chatId;

};}
else console.log("Error")


}


export default ChatId;