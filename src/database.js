const mongoose  =  require('mongoose');

const dbUrl ='mongodb+srv://Daniel:3nxhbZiIRszL9MDV@cluster0.bt3xa.mongodb.net/software?retryWrites=true&w=majority'
mongoose.connect(dbUrl,{useNewUrlParser:true})

.then(db => console.log('DB is connected'))
.catch(err => console.error(err));