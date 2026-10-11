import {StreamChat} from 'stream-chat'; 
import "dotenv/config";

const apikey = process.env.STREAM_API_KEY;
const apisecretkey = process.env.STREAM_API_SECRET;

if(!apikey || !apisecretkey){
    console.log("Stream API key or secret key missing");
}

const StreamClient = StreamChat.getInstance(apikey, apisecretkey);

export const upsertStreamUser = async(userData)=>{
    try {
        await StreamClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.log("error upserting stream user", error);
    }
};

export const generateStreamToken = (userId)=>{
    try {
        const userIdstr = userId.toString();
        return StreamClient.createToken(userIdstr);
    } catch (error) {
        console.log("error generating stream token", error.message);
    }
};
