/*function check() 
{
    alert("Button clicked")
}*/

var err1=document.getElementById("err1")
function check()
{
    try {
        alsrt("Button clicked")
    } catch (error) {
        console.log(error.message)
        err1.innerText=error.message
    }
}

var inp=document.getElementById('val').value
var err2=document.getElementById('err2')

function display()
{
    var inp=document.getElementById('val').value
var err2=document.getElementById('err2')
    console.log("btn clicked",inp)
    try {
        if(inp=="") throw "Box cannot be empty"
        if(isNaN(inp)) throw "value is not a number"
        if(inp<10) throw "Value  cannot be less than 10"
        if(inp>20) throw "Value  cannot be greater than 20"
        if(inp>=10 && inp<=20) throw "You entered is right answer"
    } catch (error) {
        console.log(error)
        err2.innerText=error
    }
    finally{
        inp.innerText=""
    }

}