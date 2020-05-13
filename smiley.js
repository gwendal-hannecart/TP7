function canvasApp(){
    let canvas=document.getElementById("smiley");
    let context=canvas.getContext("2d");
    context.beginPath();
    context.lineWidth="3";
    context.fillStyle="yellow";
    context.arc(100, 100, 75, 0, 2*Math.PI);
    context.fill();
    context.closePath();
    context.beginPath();
    context.fillStyle="black";
    context.arc(65, 70, 10, 0, 2*Math.PI);
    context.fill();
    context.closePath();
    context.beginPath();
    context.fillStyle="black";
    context.arc(135, 70, 10, 0, 2*Math.PI);
    context.fill();
    context.closePath();
    context.beginPath();
    context.fillstrockeStyle="black";
    context.arc(99, 120, 35, 0, Math.PI);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.textBaseline="middle";
    context.textAlign="center";
    context.font=" 20px sans-serif"
    context.fillText("Hello Canvas !",100,200);
    context.closePath();
   
}

function displayDateTime(){
    const event =new Date ();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let paragraphe1=document.createElement("p");
    paragraphe1.textContent=" Nous sommes le "  +event.toLocaleDateString(undefined, options);;
    document.body.insertBefore(paragraphe1,document.getElementById("smiley"));
    let paragraphe2=document.createElement("p");
    paragraphe2.textContent=" Il est actuellement "  +event.toLocaleTimeString(undefined);;
    document.body.insertBefore(paragraphe2,document.getElementById("smiley"));
}

function displayDecrementSeconds(){
    const event =new Date ();
    let seconde=58;
    let time=seconde;
    let paragraphe1=document.createElement("p");
    paragraphe1.id="1";
    paragraphe1.textContent=seconde;
    document.body.insertBefore(paragraphe1,document.getElementById("smiley"));
    let paragraphe2=document.createElement("p");
    paragraphe2.textContent="Le dessin est affiché ci-dessous";
    let intervalid=setInterval(function() {
       document.body.removeChild(document.getElementById("1"));
       seconde=seconde-1;
       let paragraphe2=document.createElement("p");
       paragraphe2.textContent=seconde;
        paragraphe2.id="1";
        document.body.insertBefore(paragraphe2,document.getElementById("smiley"));
    }, 1000);
    setTimeout(function(){
        document.body.removeChild(document.getElementById("1"));
        let paragraphe2=document.createElement("p");
        paragraphe2.id="1";
        paragraphe2.textContent="Le dessin est affiché ci-dessous";
        document.body.insertBefore(paragraphe2,document.getElementById("smiley"));
        clearInterval(intervalid);
        canvasApp();
    },time*1000);
  
}

function main(){
    displayDateTime();
    displayDecrementSeconds();
         
}
main();