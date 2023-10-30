function hello()
/* UserName validation start*/ 
{
    var uname=document.getElementById("uname").value;
    if(uname=="")
    {
        document.getElementById("err").innerHTML="* Enter valid UserName ! ";
        return false;
        
    }
    if(uname.length<4)
    {
        document.getElementById("err").innerHTML="* Length must to be 4 to 8 ! ";
        return false;
        
    }
    if(uname.length<8)
    {
        document.getElementById("err").innerHTML="* Length must to be 4 to 8 ! ";
        return false;
        
    }
    var pattern =/^[a-z A-Z]/;
    if(!uname.match(pattern))
    {
    document.getElementById("err").innerHTML="* Enter Only Char ! ";
    return false;
}
    /* UserName validation End*/ 

    /* Email id Validation Start*/ 
    function hello()
    var email=document.myform.email.value;
    if(email== "")
    {
    document.getElementById("err").innerHTML="* Enter Valid Email Id ! ";
    return false;  
    }
    if(email.indexOf('@')<=0)
    {
    document.getElementById("err").innerHTML="* Enter Valid Email Id ! ";
    return false;
    }

    /* Email id Validation End*/ 

}