var count=0;
function myFunction()
    {
        count++;
        T = document.getElementById("target");
        let x=0;
        let y=0;
        let z=0;
        x=Math.random()*450
        y=Math.random()*1100
        z=Math.random()*70+10
            T.style.top= x + "px";
            T.style.left= y + "px";
            T.style.width= z + "px";
            T.style.height= z + "px";

            document.getElementById("score").innerHTML=count;
    } 
    function start(){
        document.getElementById("start").style.display="none";
        A = document.getElementById("time");
        id=null;
        let sec=30;
        document.getElementById("target").addEventListener("click",myFunction);
        document.getElementById("target").style.display="flex";
        id=setInterval(timer,1000);
        function timer ()
        {
            sec--;
        A.innerHTML=sec;
        document.getElementById("start").style.background="rgb(55, 255, 5)";
        if(sec==0)
        {   
            document.getElementById("target").style.display="none";
            document.getElementById("restart").style.background="rgb(226, 239, 43)";

            alert("GAME OVER your score is : " +count)
            document.getElementById("target").removeEventListener("click",myFunction);
            clearInterval(id)
        }
    }
    


}