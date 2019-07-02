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
//get all test in main page
app.get("/getMain",(req,res)=>{
    mongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        var dbo = db.db("toeic");
        dbo.collection("dethi").find().toArray((err,result)=>{
            if(err) throw err;
            // neu chua dang nhap
            if(req.session.username == null){
                console.log("1");

                res.send({result});
            }
            else{
                // vong lap de kiem tra ten de tra ve du lieu la so diem nguoi do
             
                for(var i=0; i<result.length; i++){
                    // truong hop bang xep hang chua co ai ca
                    if(result[i].user.length == 0){
                        
                        var temp = {
                            score: 0,
                            readScore: 0,
                            listenScore: 0,
                            isdone: "Bạn chưa làm bài thi này"
                        }
                        result[i].info = temp;
                    }
                    for(var j=0; j< result[i].user.length; j++){
                        if(result[i].user[j].username == req.session.username){
                            result[i].info = result[i].user[j];
                                                
                            break;
                        }else{
                          
                            var temp = {
                                score: 0,
                                readScore: 0,
                                listenScore: 0,
                                isdone: "Bạn chưa làm bài thi này"
                            }
                            result[i].info = temp;
                        }
                    }
                   
                }
                res.send({result});
            }
        })
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
app.post("/getPart1",parser,(req,res)=>{
    var {testNumber} = req.body;
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("dethi").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re.length; i++){
                if(re[i].test == testNumber){
                    for(var j= 0; j< re[i].de.listening.length; j++){
                        if(re[i].de.listening[j].part == "1"){
                            sendBuf.push(re[i].de.listening[j]);
                        }
                    }
                    break;
                }
                
            }
            res.send(sendBuf);
            db.close();
        })
    });
})

// lay du lieu tu database cua part2
app.post("/getPart2",parser,(req,res)=>{
    var {testNumber} = req.body;
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("dethi").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re.length; i++){
                if(re[i].test == testNumber){
                    for(var j= 0; j< re[i].de.listening.length; j++){
                        if(re[i].de.listening[j].part == "2"){
                            sendBuf.push(re[i].de.listening[j]);
                        }
                    }
                    break;
                }
                
            }
            res.send(sendBuf);
            db.close();
        })
    });
})

// lay du lieu tu database cua part 3
app.post("/getPart3",parser,(req,res)=>{
    var {testNumber} = req.body;
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("dethi").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re.length; i++){
                if(re[i].test == testNumber){
                    for(var j= 0; j< re[i].de.listening.length; j++){
                        if(re[i].de.listening[j].part == "3"){
                            sendBuf.push(re[i].de.listening[j]);
                        }
                    }
                    break;
                }
                
            }
            res.send(sendBuf);
            db.close();
        })
    });
})

// lay du lieu tu database cua part 4
app.post("/getPart4",parser,(req,res)=>{
    var {testNumber} = req.body;
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("dethi").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re.length; i++){
                if(re[i].test == testNumber){
                    for(var j= 0; j< re[i].de.listening.length; j++){
                        if(re[i].de.listening[j].part == "4"){
                            sendBuf.push(re[i].de.listening[j]);
                        }
                    }
                    break;
                }
                
            }
            res.send(sendBuf);
            db.close();
        })
    });
})
// lay du lieu tu database cua part 5
app.post("/getPart5",parser,(req,res)=>{
    var {testNumber} = req.body;
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("dethi").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re.length; i++){
                if(re[i].test == testNumber){
                    for(var j= 0; j< re[i].de.reading.length; j++){
                        if(re[i].de.reading[j].part == "5"){
                            sendBuf.push(re[i].de.reading[j]);
                        }
                    }
                    break;
                }
                
            }
            res.send(sendBuf);
            db.close();
        })
    });
})

// lay du lieu tu database cua part 6
app.post("/getPart6",parser,(req,res)=>{
    var {testNumber} = req.body;
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("dethi").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re.length; i++){
                if(re[i].test == testNumber){
                    for(var j= 0; j< re[i].de.reading.length; j++){
                        if(re[i].de.reading[j].part == "6"){
                            sendBuf.push(re[i].de.reading[j]);
                        }
                    }
                    break;
                }
                
            }
            res.send(sendBuf);
            db.close();
        })
    });
})
// lay du lieu tu database cua part 7
app.post("/getPart7",parser,(req,res)=>{
    var {testNumber} = req.body;
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("dethi").find().toArray((err,re)=>{
            if(err) throw err;
            var sendBuf = [];
            for(var i=0; i< re.length; i++){
                if(re[i].test == testNumber){
                    for(var j= 0; j< re[i].de.reading.length; j++){
                        if(re[i].de.reading[j].part == "7"){
                            sendBuf.push(re[i].de.reading[j]);
                        }
                    }
                    break;
                }
                
            }
            res.send(sendBuf);
            db.close();
        })
    });
})

// tao mang luu tru cac cau listening
var listenAdd = [];
var readAdd = [];
app.post('/addExample',parser,(req,res)=>{
    var{audio, image, textQuestion, radio1, radio2, radio3,radio4,answer, part, number, test} = req.body;
    console.log(audio);
    var objectAdd ={
        audio,image,textQuestion,radio1,radio2,radio3,radio4,answer,part,number,test
    }
    listenAdd.push(objectAdd);
   console.log(objectAdd)
    res.send({title: "ok"});
})
// add part2
app.post('/addPart2',parser,(req,res)=>{
    var{audio, image, textQuestion, radio1, radio2, radio3,answer, part, number, test} = req.body;
    var objectAdd ={
        audio,image,textQuestion,radio1,radio2,radio3,radio4:"",answer,part,number,test
    }
    listenAdd.push(objectAdd)
   
    res.send({title: "ok"});
})
// add part1
app.post('/addPart1',parser,(req,res)=>{
    var{audio, image, textQuestion, radio1, radio2, radio3, radio4, answer, part, number, test} = req.body;
    var objectAdd ={
        audio,image,textQuestion,radio1,radio2,radio3,radio4,answer,part,number,test
    }
    console.log("number" + number);
    if(parseInt(part) < 5){    
        listenAdd.push(objectAdd)
        
    }else{
        readAdd.push(objectAdd);
       
    }
    if(parseInt(number) == 200){
        
                // tao mot doi tuong de luu tru du lieu gui len server khi them de thi moi
            var object = {
            test: 'De6',
            de: {
                listening: listenAdd,
                reading: readAdd
            },
            user: [],
            numberDoTest: 0
            }
            console.log("end");
            mongoClient.connect(url,(err,db)=>{
                if(err) throw err;
                var dbo = db.db("toeic");
                dbo.collection("dethi").insertOne(object,(err,re)=>{
                    if(err) throw err;
                    if(re!= null) console.log("them thanh cong");
                    db.close();
                })
            })
    }
    res.send({title: "ok"});
})


// delete document
app.post('/deleteTest',parser,(req,res)=>{
    var {testNumber} = req.body;
    console.log(testNumber)
    mongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        var dbo = db.db('toeic');
        var query ={test:testNumber};
        dbo.collection('dethi').deleteOne(query,(err,re)=>{
            if(err) throw err;
            res.send({title:'DELETE'});

            db.close();
        })
    })
})
// logout
app.get('/logout',(req,res)=>{
    req.session.username = undefined;
    console.log("1");
    res.send({title:'LOGOUT'});
})
app.post("/getExample1",parser,(req,res)=>{
    var {testNumber} = req.body;
    console.log("test number : " + testNumber)
    mongoClient.connect(url,(err,db)=>{
        var dbo = db.db("toeic");
        if(err) throw err;
        dbo.collection("dethi").find().toArray((err,re)=>{
            if(err) throw err;
            console.log("length :" + re.length);
            for(var i=0; i< re.length; i++){
                if(re[i].test == testNumber){
                    for(var j= 0; j< re[i].de.listening.length; j++){
                        if(re[i].de.listening[j].part == "Example1"){
                            console.log("here");
                            console.log(re[i].de.listening[j])
                            res.send(re[i].de.listening[j]);
                            break;
                        }
                    }
                    break;
                }
                
            }
           
            db.close();
        })
    });
})
// get thong tin trang chu khi co user
app.get('/getUserInfo1',(req,res)=>{
    // truy cap database de lay du lieu
    mongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        var dbo = db.db('toeic');
        dbo.collection('De1').find({}).toArray((err,result)=>{
            if(err) throw err;
            var len = result.length;
            for(var i=1; i<len-1; i++){
                for(var j=i+1; j<len; j++){
                    if(result[i].score < result[j].score){
                        var temp = result[i];
                        result[i] = result[j];
                        result[j] = temp; 
                    }
                }
            }
        var BXH=[];
        for(var i=1; i< len; i++){
            BXH.push(result[i]);
        }
            if(result.length > 1){
                var max = 0;
                for(var i=1; i< result.length; i++){
                    if(parseInt(result[i].numberoftester) > max) max = result[i].numberoftester;
                }
                   var find = req.session.username;
                   var temp = true;
                   for(var i=1; i< result.length; i++){
                    if(result[i].username == find){
                        temp = false;
                        res.send({maxValue: max,result: result[i],BXH});
                        break;
                    }
                   }
                   if(temp == true){
                    res.send({maxValue: max,result:null,BXH});
                   }
            }else{
                console.log("BXH" + BXH);
                res.send({maxValue: 0,result:null,BXH});
            }

            db.close();
        })
    })
})
app.get('/getUserInfo2',(req,res)=>{
    // truy cap database de lay du lieu
    mongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        var dbo = db.db('toeic');
        dbo.collection('De2').find({}).toArray((err,result)=>{
            if(err) throw err;
            var len = result.length;
            for(var i=1; i<len-1; i++){
                for(var j=i+1; j<len; j++){
                    if(result[i].score < result[j].score){
                        var temp = result[i];
                        result[i] = result[j];
                        result[j] = temp; 
                    }
                }
            }
        var BXH=[];
        for(var i=1; i< len; i++){
            BXH.push(result[i]);
        }
            if(result.length > 1){
                var max = 0;
                for(var i=1; i< result.length; i++){
                    if(parseInt(result[i].numberoftester) > max) max = result[i].numberoftester;
                }
                console.log("max value: " + max);
                   var find = req.session.username;
                   var temp = true;
                   for(var i=1; i< result.length; i++){
                    if(result[i].username == find){
                        temp = false;
                        res.send({maxValue: max,result: result[i],BXH});
                        break;
                    }
                   }
                   if(temp == true){
                    res.send({maxValue: max,result:null,BXH});
                   }
            }else{
                console.log("BXH" + BXH);
                res.send({maxValue: 0,result:null,BXH});
            }

            db.close();
        })
    })
})
// tra ve so nguoi dung da chon lam bai nay 
app.post('/numberDoTest',parser,(req,res)=>{
    var {testNumber} = req.body;
    mongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        var dbo = db.db('toeic');
        dbo.collection(testNumber).find({}).toArray((err,result)=>{
            if(err) throw err;
            if(result.length > 1){
                var max = 0;
                for(var i=1; i< result.length; i++){
                    console.log(result[i].numberoftester);
                    if(parseInt(result[i].numberoftester) > max) max = result[i].numberoftester;
                }
                max++;
                console.log("max " + max);
                res.send({maxValue: max});
            }else{
                res.send({maxValue: 0});
            }

            db.close();
        })
    })
})
// ham compare and swap
function sort(a,b){
    return (a > b)?1:(a < b)?-1:0;
}
app.post('/submit',parser,(req,res)=>{
    var {array,indexArray,testNumber,numberDoTest} = req.body;
             
           // truy cap database lay ra mang dap an
           var listenPart = []; // luu cac cau tra loi dung cua phan listening
           var readPart = []; // luu cac cau tra loi dung cua phan reading
           mongoClient.connect(url,(err,db)=>{
               if(err) throw err;
               var dbo = db.db("toeic");
               dbo.collection("dethi").find().toArray((err,re)=>{
                   if(err) throw err;
                   // loc lay ra mang dap an phan nghe
                   for(var i=0; i<re.length ;i++){
                       if(re[i].test == testNumber){
                           var len = re[i].de.listening.length;
                         for(var j=0; j<len ; j++){
                             if(re[i].de.listening[j].number != "Example1"){
                                 listenPart.push(re[i].de.listening[j].answer);
                             }
                         }
                       }
                   }

                   // tinh diem phan nghe
                   //for(var i=0; i<100; i++){
                       var countListen = 0;
                    for(var i=0; i<100; i++){
                        if(array[i].value == listenPart[i]) countListen++;
                    }
                     // loc lay ra mang dap an phan doc
                     for(var i=0; i<re.length ;i++){
                        if(re[i].test == testNumber){
                            var len = re[i].de.reading.length;
                          for(var j=0; j<len ; j++){                            
                             readPart.push(re[i].de.reading[j].answer);
                          }
                        }
                    }
                    // tinh diem phan doc
                    //for(var i=100; i<200; i++){
                    var countRead = 0;
                    for(var i=0; i<100; i++){
                        console.log(i + " " + array[i+100].value + " and " + readPart[i]);
                        if(array[i+100].value == readPart[i]) countRead++;
                    }
                    console.log("read" + countRead);
                    console.log("listen" + countListen);
                    console.log(numberDoTest);
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
                    // 1.khi 1 user hoan thanh bai thi thi co the do la user moi 
                    // 2.hoac la cap nhat lai so diem cho user
                      
                    //1.
                    for(var i=0; i<re.length ;i++){
                        var j = 0;                      
                        if(re[i].test == testNumber){
                          for(; j< re[i].user.length; j++){                        
                          if(re[i].user[j].username == req.session.username){
                                  // neu da ton tai user
                                console.log("da ton tai user");
                                var number =parseInt(numberDoTest);
                                number++;
                                console.log("numberdotest: " + number)
                                var query = {test: testNumber};
                                var value = {$set: {numberDoTest: number}}
                                mongoClient.connect(url,(err,db)=>{
                                    console.log("go to database")
                                    if(err) throw err;
                                    var dbo = db.db('toeic');
                                    dbo.collection('dethi').updateOne(query,value,(err,result)=>{
                                        if(err) throw err;
                                        res.send({
                                          listeningScore,
                                          readingScore,
                                      })
                                        db.close();
                                    })
                                })
                                
                                break;
                          } 
                        }
                        if(j == re[i].user.length){
                              console.log("chua ton tai user");
                              // chua ton tai user
                              var userArray = re[i].user;
                              var element = {
                                  username: req.session.username,
                                  readScore: readingScore,
                                  listenScore: listeningScore,
                                  score: total,
                                  isdone: "Bạn đã làm bài thi này"
                              }
                              userArray.push(element);
                              for(var i=0; i<userArray.length - 1; i++){
                                for(var j= i+1; j< userArray.length; j++){
                                    if(userArray[i] < userArray[j]){
                                        var temp = userArray[i];
                                        userArray[i] = userArray[j];
                                        userArray[j] = temp;
                                    }
                                }
                            }
                              var number =parseInt(numberDoTest);
                              number++;
                              console.log("numberdotest: " + number)
                              var query = {test: testNumber};
                              var value = {$set: {user: userArray, numberDoTest: number}}
                              mongoClient.connect(url,(err,db)=>{
                                  console.log("go to database")
                                  if(err) throw err;
                                  var dbo = db.db('toeic');
                                  dbo.collection('dethi').updateOne(query,value,(err,result)=>{
                                      if(err) throw err;
                                      res.send({
                                        listeningScore,
                                        readingScore,
                                    })
                                      db.close();
                                  })
                              })
                          }
                          
                        
                    }
                }
                           
               
               db.close();
           })
      // }
    
        })
})
// post to save grade
app.post('/saveGrade',parser,(req,res)=>{
    console.log("to save grade");
    var {listenScore,readScore,testNumber} = req.body;
    var total = parseInt(listenScore) + parseInt(readScore);
    mongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        var dbo = db.db('toeic');
        dbo.collection("dethi").find().toArray((err,re)=>{
            if(err) throw err;
            var newUser = [];
            for(var i=0; i< re.length; i++){
                if(re[i].test == testNumber){
                    for(var j=0; j< re[i].user.length; j++){
                        if(re[i].user[j].username == req.session.username){
                            re[i].user[j].score = total;
                            re[i].user[j].readScore = readScore;
                            re[i].user[j].listenScore = listenScore;
                            break;
                        }
                    }
                    newUser = re[i].user;
                    for(var i=0; i<newUser.length - 1; i++){
                        for(var j= i+1; j< newUser.length; j++){
                            if(newUser[i].score < newUser[j].score){
                                var temp = newUser[i];
                                newUser[i] = newUser[j];
                                newUser[j] = temp;
                            }
                        }
                    }
                    console.log(newUser);
                }
            }
            var updateValue = { $set:{user: newUser}};
        var find = {test: testNumber};
        mongoClient.connect(url,(err,db)=>{
            if(err) throw err;
            var dbo = db.db('toeic');
            dbo.collection('dethi').updateOne(find,updateValue,(err,result)=>{
                if(err) throw err;
                res.send({title:"UPDATE"})
                db.close();
            })
        })
            db.close();
        })
    })
})
// handle when user click xem dap an
app.post('/getAnswer',parser,(req,res)=>{
    var {testNumber,array} = req.body;
    // truy cap database lay mang dap an dung
    var read = [];
    var listen = [];
    mongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        var dbo = db.db('toeic');
        dbo.collection(testNumber).find().toArray((err,re)=>{
            if(err) throw err;
            var listenLength = re[0].listening.length;
            for(var i=1; i<listenLength ;i++){
                  listen.push(re[0].listening[i].answer);
            }
            var readlen = re[0].reading.length;
            for(var i=0; i< readlen; i++){
                read.push(re[0].reading[i].answer);
            }
            var lenarray = array.length;
            for(var i=0; i< 100; i++){
                array[i].answer = listen[i];
            }
            for(var i=100; i<200; i++){
                array[i].answer = read[i-100];
            }
            res.send({Array: array})
            db.close();
        })
    })
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
    console.log(username);
    // neu mot trong 3 truong rong thi bao chua dang ki thanh cong
    if(username == "" || email == "" || password == ""){
        console.log("chua nhap du lieu");
        res.send({title:"THAT_BAI"});
    }else{
        // kiem tra username da ton tai hay chua
        mongoClient.connect(url,(err,db)=>{
            if(err) throw err;
            var dbo = db.db('toeic');
            var find = {username};
            dbo.collection('user').findOne(find,(err,result)=>{
                if(err) throw err;
                if(result){
                    console.log('trung ten');
                    res.send({title:"TRUNG_TEN"});
                }
                db.close();
            })
        })
        // cap nhat vao data base
        console.log("khong trung ten");
        mongoClient.connect(url,(err,db)=>{
            req.session.username = username;
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