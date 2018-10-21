const express=require('express')
const hbs=require('hbs')
const fs=require('fs')
var port = process.env.PORT||3000
var app=express()
hbs.registerPartials(__dirname+'/views/partials')
hbs.registerHelper('getCurrentYear',()=>{
  //return new Date().getFullYear()
  return new Date()
})
hbs.registerHelper('streamIt',(text)=>{
  return 'text.toUpperCase(text)'
})
app.set('view engin','hbs')

app.use((req,resp,next)=>{
  var tstm = new Date().toString()
  var log = `${tstm} ${req.method} ${req.url} ${req.metadata}`
  fs.appendFile('server.log',log+'\n',(err)=>{
    if (err)
    {consol.log('unbale to write to file')}
  })
  console.log(log)
  next();
})
// app.use((req,res,next)=>{
//   res.render('maintenance.hbs')
// })
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
  //res.send('<h1>Hello express</h1>');
  res.render('home.hbs',{
      pageTitle:'Welcome to my new page',
      messageText: 'You are visiting my site',
    })
})

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'My About Page',
  })
})

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage:'Bad request'
  })
})


app.listen(port,()=>{
  console.log(`server is up and running on port ${port}`)
}
)
