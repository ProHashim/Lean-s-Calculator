function insert(num){
    document.form.numInput.value = document.form.numInput.value+num
}


function equal(){
    var exp = document.form.numInput.value
    if(exp){
        document.form.numInput.value = eval(exp)
    }
    else{
        document.form.numInput.value = "0"
    }
}


  function clean(){
    document.form.numInput.value="";
  }
  

function back(){
    var exp = document.form.numInput.value
    document.form.numInput.value = exp.substring(0,exp.length-1)
    
}