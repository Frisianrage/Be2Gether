



function ChatId() {

let firstID = "BJjFizyhDvMniQuSTi3gAPWqOWJ2";
let secondID = "fHfw8F7nlSeQ6ajLhHvxuKACGa42";
let firstUser;
let secondUser; 

if(firstID < secondID) {
firstUser = firstID; 
secondUser = secondID
} else { 
secondUser =  firstID;
firstUser = secondID};

let chatId = firstUser.substring(0,14)+secondUser.substring(0,14)

return chatId

}
export default ChatId;