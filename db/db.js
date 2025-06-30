
import mongoose from "mongoose"

const Database = async () => {

    try {
        const con = await mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        return res.status(401).json({ "message": "Database not connected" })
        process.exit(1)
    }
}

export default Database