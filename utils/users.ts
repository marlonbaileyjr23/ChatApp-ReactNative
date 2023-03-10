import { JwtPayload } from "jsonwebtoken";

const users= [];    
// Join user to chat
function userJoin(id: string ,username: string,room: string){
    const user={
        id,
        username,
        room
    };
    users.push(user);
    return user;
}

// Get current user
function getCurrentUser(id: any){
    return users.find(user=>user.id===id);
}

// User leaves chat
function userLeave(id: any){
    const index=users.findIndex(user=>user.id===id);
    if(index!==-1){
        return users.splice(index,1)[0];
    }
}

// Get room users
function getRoomUsers(room: string){
    return users.filter(user=>user.room===room);
}

module.exports={
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
    
    
}