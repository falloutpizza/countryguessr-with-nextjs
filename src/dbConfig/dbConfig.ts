import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection
        connection.on("connected", () => console.log("database connected!"))
        connection.on("error", (e) => {
            console.log("an error occured after connecting to database!");
            console.log(e);
            process.exit();
        })
    } catch(e){
        console.log("an error occured while connecting to the database!")
        console.log(e)
    }
}