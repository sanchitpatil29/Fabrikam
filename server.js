
var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
            "<h1>FabriKam </h1>"
            +"<hr/>"
            
            + "<br/>"
            + "<ol>"
            +"<li>Intranet solutions(MAAS)</li>"
            +"<li>Extranet applications</li>"
            +"<li>Hololgraphic Devices</li>"
            +"<li>Salary Processing Applications</li>"
            +"<li>Feedback Control Systems</li>"
            + "</ol>"
    );
});

app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>FabriKam </h1>"
            +"<hr/>"
            +"<h3>Doing ordinary things extraordinarily</h3>"
            + "<br/>"
          
    );
});

app.get("/login",(req, res)=>{
    res.send(
            "<h1>FabriKam </h1>"
            + "<h3>Login</h3>"
            +"<hr/>"
            +"<form>"
            + "<input/>"
            + "<br/>"
            +"<input/> "
            +"<button>login</button>"
            + "</form>"
    );
});

var server=app.listen(9000);
console.log("Vijay Sales Online shopping running on port 9000");