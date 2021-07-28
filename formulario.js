var getData= function(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var CE=document.getElementById("CE").value;
    var Nt=document.getElementById("Nt").value;
    var cmt=document.getElementById("cmt").value;
    if(name==""){
        document.getElementById("name").focus();
        window.alert("Introduce el nombre");
    }else{
        if(age==""){
            document.getElementById("age").focus();
            window.alert("Intoduce tu edad");
        }else{
        if(CE==""){
            document.getElementById("CE").focus();
            window.alert("Intoduce tu Correo Electronico");
        }else{
            if(Nt==""){
                document.getElementById("Nt").focus();
                window.alert("Introduce Tu numero telofonico");
            }else{
            if(cmt==""){
                document.getElementById("cmt").focus();
                window.alert("Introduce un comentario porfavor");
            }
            else{
            console.log(name+" \n"+age+"\n"+CE+"\n"+Nt+"\n"+cmt);
            document.getElementById("name").value=="";
            document.getElementById("age").value="";
            document.getElementById("CE").value="";
            document.getElementById("Nt").value="";
            document.getElementById("name").focus();
            
                 }
                 }
            }
    }
}
}