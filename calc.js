var inpmark=document.getElementById("texts");
var finalMark=document.getElementById("Final mark");
var totalSubs=document.getElementById("Num subjects");
var numSubs=0;
var total=0;
// var l_gpa=[];
// var button=document.getElementById("t");
// button.style.display="block"
function createField()
{
  for(var i=0;i<numSubs;i++)
  {
    var input=document.getElementById(i);
    inpmark.removeChild(input);
  }
  numSubs=0;
  for(var i=0;i<totalSubs.value;i++)
  {
    var input = document.createElement("input");
    input.type = "number";
    input.name="mark";
    input.id=numSubs;
    inpmark.appendChild(input);
    numSubs+=1;
  }
}
function calculate(){
  
  
  var final=document.getElementById('output')
  finalMark.removeChild(final);
  
  
  var totalm=0;
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
    totalm+=parseInt(gp);
    
  }
  
  var gpa;
  gpa=totalm/numSubs;
  console.log(gpa);
  var final=document.createElement("P");
  final.innerText=(gpa);
  final.id='output';
  finalMark.appendChild(final);
  totalm=0;


}
