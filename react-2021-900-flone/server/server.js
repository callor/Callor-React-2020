const express = require('express');
const app = express();


const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser');

sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());





const{
    frienner_list,
    sequelize:{Op}
} = require('./models');
sequelize.query('SET NAMES utf8;');

app.post('/add/data', (req,res)=>{
    console.log(req.body);

    frienner_list.create({
        id : req.body.id,
        nn : req.body.nn,
        pw : req.body.pw,
        name : req.body.name,
        addr : req.body.addr,
        tel : req.body.tel,
        email : req.body.email,
        liv : req.body.liv,
        sup : req.body.sup
     })
     .then(result => {
         res.send(result)
     })
     .catch(err => {
         console.log(err)
         throw err;
     })
})


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})