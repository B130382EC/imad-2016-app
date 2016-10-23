// Counter code

var button = document.getElementById('counter');
button.onclick= function(){
 
 //Make a request to the counter end point
 var request= new XMLHttpRequest();
 
 //capture the response and store it in a variable
 
 request.onreadystatechange=function(){
     if(request.readyState==XMLHttpRequest.DONE){
         //Take some action
         if(request.status==200) {
             var counter=request.responseText;
             var span= document.getElementById('count');
             span.innerHTML=counter.toString();
         }
     }
     //not yet done
 };
 
 
 //make the request 
 request.open('GET','http://b130382ec.imad.hasura-app.io/counter',true);
 request.send(null);
};
