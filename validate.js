

function validate()
{  
    var id = document.getElementById("empid").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var text;
    if(validEmployeeId(id)==false)
    {
        text="*invalid Employee ID".fontcolor("red");
        document.getElementById("e").innerHTML=text;
    }
    else
    {
        text=""
        document.getElementById("e").innerHTML=text;
    }
    if(validEmail(email)==false)
    {
        text="*invalid email".fontcolor("red");
        document.getElementById("d").innerHTML=text;
    }
    else
    {
        text=""
        document.getElementById("d").innerHTML=text;
    }
    if(validPhone(phone)==false)
    {
        text="*invalid phone number".fontcolor("red");
        document.getElementById("c").innerHTML=text;
    }
    else
    {
        text=""
        document.getElementById("c").innerHTML=text;
    }
    if(validDob(dob)==false)
    {
        text="*invalid DOB".fontcolor("red");
        document.getElementById("b").innerHTML=text;
    }
    else
    {
        text=""
        document.getElementById("b").innerHTML=text;
    }
    if(validName(name)==false)
    {
        text="*invalid Name".fontcolor("red");
        document.getElementById("a").innerHTML=text;
    }
    else
    {
        text=""
        document.getElementById("a").innerHTML=text;
    }
    if(validEmployeeId(id)&validEmail(email)&validPhone(phone)&validName(name)&validDob(dob))
    {
        window.open("valid.html")
    }

}

function validEmployeeId(str)
{
    reg=new RegExp("[A|a][C|c][E|e]+[0-9]{4}");

   
    if((reg.test(str))&(str.length==7))
    {
        return true;
    }
    else
    {

        return false;
    }
}
function validEmail(str)
{
    reg=new RegExp("^[A-Za-z0-9+_.-]+@[A-Za-z]+.+[A-za-z]+$");

   
    if(reg.test(str))
    {
        return true;
    }
    else
    {
       
       
        return false;
    }
}
function validPhone(str)
{
    reg = new RegExp("[5-9][0-9]{9}");

   
    if(reg.test(str))
    {
        return true;
    }
    else
    {

       
        return false;
    }
}
function validName(str)
{
   
        reg= new RegExp("[a-b]|[A-B]");
        if(reg.test(str))
        {
            return true;
        }
        else
        {

           
            return false;
        }

}
function validDob(str)
{
    if(str.length==0)
    {
        return false;
    }
    var dob = new Date(str);
   
    var month_diff = Date.now() - dob.getTime();
   
    var age_dt = new Date(month_diff);
       
    var year = age_dt.getUTCFullYear();

    var age = Math.abs(year - 1970);
   
    if(age<18)
    {
       
        return false
    }
    else{
        return true
    }
}