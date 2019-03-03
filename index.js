var express = require('express');
var app = express();
var parser = require('body-parser').json();
var mongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));
var url ="mongodb://127.0.0.1:27017";


app.get("/getPart1",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
       // var part = {"part":"1"}
        dbo.collection("De1").find().toArray((err,re)=>{
            console.log(re);
            console.log(re[0].listening.length)
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re[0].listening.length; i++){
                if(re[0].listening[i].part == "1")
                sendBuf.push(re[0].listening[i]);
            }
            console.log(sendBuf)
            res.send(sendBuf);
            db.close();
        })
    });
})


app.get("/getPart2",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        var part = {"part":"2"}
        dbo.collection("listening").find(part).toArray((err,re)=>{
            if(err) throw err;
            res.send(re);
            db.close();
        })
    });
})

app.get("/getPart3",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        var part = {"part":"3"}
        dbo.collection("listening").find(part).toArray((err,re)=>{
            if(err) throw err;
            //console.log(re);
            res.send(re);
            db.close();
        })
    });
})

app.get("/getExample1",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        var part = {"number":"Example1"}
        dbo.collection("listening").findOne(part,(err,re)=>{
            if(err) throw err;
            //console.log(re);
            res.send(re);
            db.close();
        })
    });
})

app.post('/submit',parser,(req,res)=>{
    var {array,indexArray} = req.body;
    console.log(array);
    console.log(indexArray);
    // xem nguoi dung chua chon cau nao
    var missAnswer = []; // chua cac cau chua tra loi
    //th1 : cac cau nam sau cau hien tai
    // lay ra chi so cau lon nhat trong mang indexarray
    
    // truy cap database de lay ra mang dap an
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db('toeic');
        if(err) throw err;
        dbo.collection("listening").find().toArray((err,re)=>{
            var data =[];
            for(var i=0; i< re.length; i++){
                if(re[i].part != "example1") data.push(re[i].answer);
            }
            
        })
    })
})

app.post('/checkIndexExist',parser,(req,res)=>{
    var {array,index,value,number} = req.body;
    var i=0;
    for(; i<array.length; i++){
        if(array[i].index == index){
            res.send({title:"UPDATE",index,value,number});
            break;
        }
    }
    if(i == array.length) res.send({title:"ADD",index,value,number});
    
   
})

app.post('/checkIndex',parser,(req,res)=>{
    var {indexArray,currentIndex} = req.body;
   // console.log(array);
    console.log(indexArray)
    console.log(currentIndex)
    var string ="";
    var arraySend = [];
    for(var i=0; i<indexArray.length; i++){
        string +=indexArray[i];
    }
    console.log(string)
    var convert;
    var indexArraySend = 0;
    for(var i=1; i<currentIndex; i++){
        convert = i.toString();
        if(string.indexOf(convert) == -1){      
           //var temp = parseInt(convert);
             arraySend[indexArraySend]={value:"a",index:convert};
             indexArraySend++;
        }else{
            console.log("else");
        }
    }
    console.log(arraySend)
    res.send({indexArray,currentIndex,array:arraySend});
})
