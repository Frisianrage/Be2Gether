
const CoupleId = (userOne, userTwo) => {

//console.log(userOne, userTwo)
let firstID = userOne;
let secondID = userTwo;
let firstUser;
let secondUser;
let coupleId 

if (firstID !== null){
if(firstID < secondID) {
firstUser = firstID; 
secondUser = secondID;
coupleId = firstUser.substring(0,14)+secondUser.substring(0,14)
return coupleId;


} else if (firstID > secondID) { 
secondUser =  firstID;
firstUser = secondID;
coupleId = firstUser.substring(0,14)+secondUser.substring(0,14);
return coupleId;

};}
else console.log("Error")


}


export default CoupleId;