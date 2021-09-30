module.exports = mongoose =>{
    mongoose.connect(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@cluster0.dubxe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }, ()=>{console.log("Conectado ao bd")})
}