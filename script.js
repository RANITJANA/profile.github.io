function invalid() {
    alert("Just For Display. I don't have any account");
}
function subs() {
    alert("No Account -- No subscribe.");
}
function msg() {
    prompt("Message via Gmail.", "ranitjana100@gmail.com");
}
let value=1;
function toggle(){
    let m=document.getElementById("mode");
    let b=document.getElementById("container");
    let p=document.getElementById("profile_pic");
    let e=document.getElementById("extra");
    const a=[document.getElementById("love"),document.getElementById("comm"),document.getElementById("share")];
    if(value){
        m.style.filter="invert(100%)";
        b.style.backgroundColor="black";
        b.style.color="White";
        b.style.border="0.5px solid white";
        p.style.border="5px solid black";
        p.style.boxShadow=" 0 0 0 3px white";
        for(let i=0;i<a.length;i++){
            a[i].style.filter="invert(100%)";
        }
    }
    else{
        m.style.filter="invert(0%)";
        b.style.backgroundColor="white";
        b.style.color="black";
        b.style.border="none";
        p.style.border="5px solid white";
        p.style.boxShadow=" 0 0 0 3px rgba(0, 0, 255, 0.899)";
        for(let i=0;i<a.length;i++){
            a[i].style.filter="invert(0%)";
        }
    }
    value=!value;
}