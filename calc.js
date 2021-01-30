var markInputs=document.getElementById("texts");
var finalMark=document.getElementById("Final mark");
var total=document.getElementById("subjects");
var numSubs=0;
var total1=0;


function addMarks(){
  
  for(var i=0;i<numSubs;i++){
    var input=document.getElementById(i);
    markInputs.removeChild(input);
  }
  
  numSubs;
  
  for(var i=0;i<total.value;i++){
    var input = document.createElement("input");
    input.type = "number";
    input.name="mark";
    input.id=numSubs;
    markInputs.appendChild(input);
    numSubs+=1;
  }


}
function calculate(){
  
  
  var final=document.getElementById('output')
  finalMark.removeChild(final);
  
  
  var total1=0;
  var gp;
  
  for(var i=0;i<numSubs;i++)
  {
    
    var texts=document.getElementById(i);
    switch(true)
    {
      case parseInt(texts.value)>89:
        gp='10';
        break;
      case parseInt(texts.value)>79:
        gp='9';
        break;
      case parseInt(texts.value)>69:
        gp='8';
        break;
      case parseInt(texts.value)>59:
        gp='7';
        break;
      case parseInt(texts.value)>49:
        gp='6';
        break;
  
      default:
        gp='0';
        break;
    }
    total1+=parseInt(gp);
    
  }
  
  var gpa;
  gpa=total1/numSubs;
  console.log(gpa);
  var final=document.createElement("P");
  final.innerText=(gpa);
  final.id='output';
  finalMark.appendChild(final);
  total1=0;


}