var express = require('express');
var app = express();
var session = require('express-session');
var parser = require('body-parser').json();
var mongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));
// thiet lap thoi gian luu ten user
app.use(session({
    secret: 'asvsdv',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000*60*60*24}
}))
var url ="mongodb://127.0.0.1:27017";

// truy cap databse de lay mang ket qua diem so
var result =[];
mongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo = db.db("toeic");
    dbo.collection("result").find().toArray((err,re)=>{
        if(err) throw err;
        result = re[0].result;
        db.close();
    })
})

// load trang chu de xem user co ton tai hay khong
app.get('/loadPage',(req,res)=>{
    if(req.session.username){
        return res.send({
            title: "DA_DANG_NHAP",
            username: req.session.username,
        });
    }
    return res.send({ title: "DA_DANG_NHAP"});
})
// lay du lieu tu database cua part1
app.get("/getPart1",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("De1").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re[0].listening.length; i++){
                if(re[0].listening[i].part == "1")
                sendBuf.push(re[0].listening[i]);
            }
            res.send(sendBuf);
            db.close();
        })
    });
})

// lay du lieu tu database cua part2
app.get("/getPart2",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("De1").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=10; i< re[0].listening.length; i++){
                if(re[0].listening[i].part == "2")
                sendBuf.push(re[0].listening[i]);
            }
            res.send(sendBuf);
            db.close();
        })
    });
})

// lay du lieu tu database cua part 3
app.get("/getPart3",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("De1").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re[0].listening.length; i++){
                if(re[0].listening[i].part == "3")
                sendBuf.push(re[0].listening[i]);
            }
            res.send(sendBuf);
            db.close();
        })
    });
})

// lay du lieu tu database cua part 4
app.get("/getPart4",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("De1").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re[0].listening.length; i++){
                if(re[0].listening[i].part == "4")
                sendBuf.push(re[0].listening[i]);
            }
            res.send(sendBuf);
            db.close();
        })
    });
})
// lay du lieu tu database cua part 5
app.get("/getPart5",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("De1").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re[0].reading.length; i++){
                if(re[0].reading[i].part == "5")
                sendBuf.push(re[0].reading[i]);
            }
            res.send(sendBuf);
            db.close();
        })
    });
})

// lay du lieu tu database cua part 6
app.get("/getPart6",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("De1").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re[0].reading.length; i++){
                if(re[0].reading[i].part == "6")
                sendBuf.push(re[0].reading[i]);
            }
            res.send(sendBuf);
            db.close();
        })
    });
})
// lay du lieu tu database cua part 7
app.get("/getPart7",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("De1").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re[0].reading.length; i++){
                if(re[0].reading[i].part == "7")
                sendBuf.push(re[0].reading[i]);
            }
            res.send(sendBuf);
            db.close();
        })
    });
})

app.get("/getExample1",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("De1").find().toArray((err,re)=>{
            if(err) throw err;
            for(var i=0; i< re[0].listening.length; i++){
                if(re[0].listening[i].number == "Example1"){
                    res.send(re[0].listening[i]);
                    break;
                }
            }
           
            db.close();
        })
    });
})
// get thong tin trang chu khi co user
app.get('/getUserInfo',(req,res)=>{
    // truy cap database de lay du lieu
})
// ham compare and swap
function sort(a,b){
    return (a > b)?1:(a < b)?-1:0;
}
app.post('/submit',parser,(req,res)=>{
    var {array,indexArray,testNumber,username} = req.body;
    console.log("test number" + testNumber);
    console.log("length of answer array: "+ array.length);
   for(var i=0; i< array.length; i++){
       console.log(array[i].value);
   }
   console.log("indexArray before sort: " + indexArray)
   console.log("length of indecArray: " + indexArray.length);            
           // truy cap database lay ra mang dap an
           var listenPart = []; // luu cac cau tra loi dung cua phan listening
           var readPart = []; // luu cac cau tra loi dung cua phan reading
           mongoClient.connect(url,(err,db)=>{
               if(err) throw err;
               var dbo = db.db("toeic");
               dbo.collection(testNumber).find().toArray((err,re)=>{
                   if(err) throw err;
                   // loc lay ra mang dap an phan nghe
                   var listenLength = re[0].listening.length;
                   for(var i=0; i<listenLength ;i++){
                       if(re[0].listening[i].number != "Example1"){
                           listenPart.push(re[0].listening[i].answer);
                       }
                   }
                  console.log(array);
                   // tinh diem phan nghe
                   //for(var i=0; i<100; i++){
                       var countListen = 0;
                    for(var i=0; i<10; i++){
                        if(array[i].value == listenPart[i]) countListen++;
                    }
                     // loc lay ra mang dap an phan nghe
                   var readLength = re[0].reading.length;
                   for(var i=0; i<readLength ;i++){                     
                        readPart.push(re[0].reading[i].answer);
                   }
                    // tinh diem phan doc
                    //for(var i=100; i<200; i++){
                    var countRead = 0;
                    console.log()
                    for(var i=0; i<52; i++){
                        console.log(i + " " + array[i+100].value + " and " + readPart[i]);
                        if(array[i+100].value == readPart[i]) countRead++;
                    }
                    console.log("read" + countRead);
                    console.log("listen" + countListen);
                    // anh xa diem
                    var listeningScore = 0;
                    var readingScore = 0;
                    for(var i=0; i<100; i++){
                        if(result[i].SoCauDung == countListen) listeningScore = result[i].DiemNghe;
                        if(result[i].SoCauDung == countRead) readingScore = result[i].DiemDoc;
                        if(listeningScore != 0 && readingScore != 0 ) break;
                    }
                    var total = parseInt(listeningScore) + parseInt(readingScore);
                    //update vao database
                    mongoClient.connect(url,(err,db)=>{
                        if(err) throw err;
                        var dbo = db.db('toeic');
                        var findelement = {username: req.session.username};
                        var update = false;
                        dbo.collection(testNumber).findOne(findelement,function(err,result){
                            if(err) throw err;
                            if(!result){
                                console.log("new one");
                                var element = {username:req.session.username, score:total};
                                dbo.collection(testNumber).insertOne(element,function(err,re){
                                if(err) throw err;
                                // sap xep lai bang xep hang
                                var len = re.length;
                                for(var i=1; i<len-1; i++){
                                    for(var j=i+1; j<len; j++){
                                        if(re[i].score < re[j].score){
                                            var temp = re[i];
                                            re[i] = re[j];
                                            re[j] = temp; 
                                        }
                                    }
                                }
                               var BXH=[];
                               for(var i=1; i< re.length; i++){
                                   BXH.push(re[i]);
                               }
                                res.send({
                                    listeningScore,
                                    readingScore,
                                    BXH
                                })
                                db.close();
                            })
                            }else{
                                console.log(result.score);
                                if(result.score < total){
                                    console.log("update");
                                    var updateValue = { $set:{score: total}};
                                    dbo.collection(testNumber).updateOne(findelement,updateValue,function(err,re){
                                        if(err) throw err;
                                         // sap xep lai bang xep hang
                                         var len = re.length;
                                         for(var i=1; i<len-1; i++){
                                             for(var j=i+1; j<len; j++){
                                                 if(re[i].score < re[j].score){
                                                     var temp = re[i];
                                                     re[i] = re[j];
                                                     re[j] = temp; 
                                                 }
                                             }
                                         }
                                        var BXH=[];
                                        for(var i=1; i< re.length; i++){
                                            BXH.push(re[i]);
                                        }
                                         res.send({
                                             listeningScore,
                                             readingScore,
                                             BXH
                                         })
                                        db.close();
                                    })
                                }else{      
                                // neu ket qua thap hon ket qua hien tai thi chi sap xep lai bxh va gui ket qua ve
                                 // sap xep lai bang xep hang
                                 console.log("not update because score!");
                                 var len = re.length;
                                 for(var i=1; i<len-1; i++){
                                     for(var j=i+1; j<len; j++){
                                         if(re[i].score < re[j].score){
                                             var temp = re[i];
                                             re[i] = re[j];
                                             re[j] = temp; 
                                         }
                                     }
                                 }
                                        var BXH=[];
                                     for(var i=1; i< re.length; i++){
                                          BXH.push(re[i]);
                                        }
                                 res.send({
                                     listeningScore,
                                     readingScore,
                                     BXH
                                 })
                                }
                            }
                            db.close();
                        })
                  
                    })
                   // gui diem nghe va diem doc ve cho client, gui ca ten nguoi dung nua
                   
               })
           })
      //  }
    
    
})

// handle login
app.post('/login',parser,(req,res)=>{
    var {username,password} = req.body;
    // kiem tra username va password trong database

    mongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        var dbo = db.db("toeic");
        var findElement = {username,password};
        dbo.collection('user').find(findElement).toArray((err,re)=>{
            if(err) throw err;
            if(re.length > 0) {
                req.session.username = username;
                res.send("DANG_NHAP_THANH_CONG");
                db.close();
            }
            else {
                console.log("2");
                res.send("CHUA_DANG_NHAP");
            }
            db.close();
        })
    })
})
// kiem tra xem index cua cau hien tai da ton tai chua, update cau tra loi neu roi va them cau tra loi vao mang neu chua
app.post('/checkIndexExist',parser,(req,res)=>{
    var {array,index,value,number} = req.body;
    var i=0;
    for(; i<array.length; i++){
        if(array[i].index == index){
            console.log("update");
            res.send({title:"UPDATE",index,value,number});
            break;
        }
    }
    if(i == array.length) res.send({title:"ADD",index,value,number});
    
   
})

// check nhung cau nao chua chon truoc cau hien tai thi se gan gia tri mac dinh cho cau do
app.post('/checkIndex',parser,(req,res)=>{
    var {indexArray,currentIndex} = req.body;
    var string ="";
    var arraySend = [];
    for(var i=0; i<indexArray.length; i++){
        string +=indexArray[i];
    }
    var convert;
    var indexArraySend = 0;
    for(var i=1; i<currentIndex; i++){
        convert = i.toString();
        if(string.indexOf(convert) == -1){      
           //var temp = parseInt(convert);
             arraySend[indexArraySend]={value:"a",index:convert};
             indexArraySend++;
        }else{
        }
    }
    res.send({indexArray,currentIndex,array:arraySend});
})

// kiem tra nguoi dung post thong tin dang ki
app.post('/signup',parser,(req,res)=>{
    var {username, email, password} = req.body;
    // neu mot trong 3 truong rong thi bao chua dang ki thanh cong
    if(username == "" || email == "" || password == ""){
        res.send("THAT_BAI");
    }else{
        // cap nhat vao data base
        mongoClient.connect(url,(err,db)=>{
            if(err) throw err;
            var dbo = db.db("toeic");
            var insertElement = {username,email,password};
            dbo.collection("user").insertOne(insertElement,(err,re)=>{
                if(err) throw err;
                res.send({title:"THANH_CONG",result:re});
                db.close();
            })
        })
    }   
})