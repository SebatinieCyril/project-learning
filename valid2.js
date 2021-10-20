function check(form)
    {
     if(form.username.value == "anns" && form.psw.value == "a")
      {
        window.open('page.html')
        return true;
      }
     else
     {
      text="Invalid username or password".fontcolor("red");
      document.getElementById("f").innerHTML=text;
      }
    }
