import mongoose from 'mongoose'

const connect = async () => {
    try {
        await mongoose.connect(process.env.Mongo)
    } catch (error) {
        handleError(error)
        throw new Error('Connection failed!')
    }
}

export default connect
