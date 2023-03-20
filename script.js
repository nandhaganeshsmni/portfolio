let aboutDiv2=document.getElementById("aboutDiv2");
let aboutHeader=document.createElement("h2");
aboutHeader.setAttribute("id", "aboutHeader");
aboutHeader.innerText="About";
aboutDiv2.appendChild(aboutHeader);

////////////// p //////////////

let aboutP4=document.createElement("p");
aboutP4.innerText="I'm Nandha Ganesh S, Software Tester";
aboutP4.setAttribute("id", "aboutP4");
aboutDiv2.appendChild(aboutP4);

let aboutP1=document.createElement("p");
aboutP1.innerText="My native place is R.Reddia patti, now i'm from sengkottai";
aboutP1.setAttribute("id", "aboutP1");
aboutDiv2.appendChild(aboutP1);

let aboutP2=document.createElement("p");
aboutP2.innerText="I studied D.EEE in P.A.C.Ramasamy Raja polytechnic college, Rajapalayam";
aboutP2.setAttribute("id", "aboutP2");
aboutDiv2.appendChild(aboutP2);

let aboutP3=document.createElement("p");
aboutP3.innerText="My hobby is playing cricket and chess";
aboutP3.setAttribute("id", "aboutP3");
aboutDiv2.appendChild(aboutP3);

let aboutP5=document.createElement("p");
aboutP5.innerText="Ph.no: 6383370197";
aboutP5.setAttribute("id", "aboutP5");
aboutDiv2.appendChild(aboutP5);

let aboutP6=document.createElement("p");
aboutP6.innerText="snmahismn@gmail.com";
aboutP6.setAttribute("id", "aboutP6");
aboutDiv2.appendChild(aboutP6);

let aboutP7=document.createElement("p");
aboutP7.innerText="AGE - 20";
aboutP7.setAttribute("id", "aboutP7");
aboutDiv2.appendChild(aboutP7);

//////////////////////////////////////// root3 //////////////////////////////////////

let root3=document.getElementById("root3");
let skill1=document.createElement("div");
skill1.setAttribute("id", "skill1");
skill1.innerText="Skills";
root3.appendChild(skill1);

let skill2=document.createElement("div");
skill2.setAttribute("id", "skill2");
root3.appendChild(skill2);

let nameArr=["Scratch", "HTML", "CSS", "Javascript", "Java", "Manual Testing", "Selenium IDE", "Selenium WebDriver", "TestNG"];
let imgArr=["scratch.jpg", "html.png", "css.png", "js.png", "java.jpg", "Manual-Testing.png", "side.png", "Selenium-3-webdriver.jpg", "testNG.jpg"];
let percentArr=["100%", "90%", "90%", "60%", "Basics", "100%", "90%", "90%", "90%"];
for(let i=0;i<9;i++){
    let lang=document.createElement("div");
    lang.setAttribute("id","i"+i);
    lang.style.setProperty("border", "1px solid black");
    lang.style.width=20+"%";
    lang.style.height=60+"%";
    lang.style.setProperty("display", "flex");
    lang.style.setProperty("justify-content", "center");
    lang.style.setProperty("align-items", "center");
    lang.style.setProperty("flex-direction", "column");
    lang.style.setProperty("justify-content", "space-evenly");
    lang.style.backgroundColor="black";
    let langImages=document.createElement("img");
    langImages.setAttribute("id", "langImages"+i);
    langImages.setAttribute("src", imgArr[i]);
    langImages.style.width=25+"vh";
    langImages.style.height=25+"vh";
    lang.style.setProperty("box-shadow", "inset 0px 5px 10px 0px rgba(0,255,255,0.7)");
    lang.setAttribute("onmouseover", "hoverOnFun(this)");
    lang.setAttribute("onmouseout", "hoverOutFun(this)");
    lang.appendChild(langImages);
    let langName=document.createElement("p");
    langName.setAttribute("id", "langName"+i);
    langName.innerText=nameArr[i];
    langName.style.setProperty("color", "rgba(0,255,255,0.7)");
    langName.style.setProperty("font-weight", "bolder");
    langName.style.setProperty("display", "grid");
    langName.style.setProperty("justify-items", "center");
    lang.appendChild(langName);
    let langPercent=document.createElement("p");
    langPercent.setAttribute("id", "langPercent");
    langPercent.setAttribute("class", "langPercentClass");
    langPercent.innerText=percentArr[i];
    lang.appendChild(langPercent);
    skill2.appendChild(lang);
}

function hoverOnFun(elem){
    elem.firstChild.style.setProperty("transform", "scale(1.1)");
    elem.lastChild.style.setProperty("color", "#7f00ff");
    elem.firstChild.style.setProperty("transition", ".35s");
    elem.lastChild.style.setProperty("transition", ".35s");
    elem.style.setProperty("transition", ".35s");
    // elem.style.setProperty("box-shadow", "inset 0px 5px 10px 0px rgba(7f,00,ff,0.7)");
}

function hoverOutFun(elem){
    elem.firstChild.style.setProperty("transform", "scale(1)");
    elem.lastChild.style.setProperty("color", "rgba(0,255,255,0.7)");
    elem.firstChild.style.setProperty("transition", ".35s");
    elem.lastChild.style.setProperty("transition", ".35s");
    elem.style.setProperty("transition", ".35s");
    // elem.style.setProperty("box-shadow", "inset 0px 5px 10px 0px rgba(0,255,255,0.7)");
}


///////////////////////////// root4 ////////////////////////////////////////////

let root4=document.getElementById("root4");
let projectsHead=document.createElement("div");
projectsHead.setAttribute("id", "projectsHead");
projectsHead.innerText="Projects";
projectsHead.style.setProperty("color", "#7f00ff");
projectsHead.style.setProperty("font-weight", "bolder");
projectsHead.style.setProperty("display", "grid");
projectsHead.style.setProperty("justify-items", "center");
root4.appendChild(projectsHead);

let mainButton=document.createElement("div");
mainButton.setAttribute("id", "mainButton");
root4.appendChild(mainButton);


let buttonArr=["Scratch", "JavaScript", "Manual Testing", "Selenium IDE", "WebDriver", "TestNG"];
for(let j=0;j<6;j++){
    let projButton=document.createElement("button");
    projButton.setAttribute("id", "projButton"+j);
    projButton.setAttribute("class", "projButtonClass");
    projButton.setAttribute("onclick", `projectSortingFunction('${buttonArr[j]}')`);
    projButton.setAttribute("onmouseover", "buttonShades(this)");
    projButton.setAttribute("onmouseout", "buttonShadesOff(this)");
    projButton.innerText=buttonArr[j];
    mainButton.appendChild(projButton);
}

let projectScreen=document.createElement("div");
projectScreen.setAttribute("id", "projectScreen");
root4.appendChild(projectScreen);




const projectDetails=[
    {
        name:"Neomonsters",
        description:"game",
        link:"https://scratch.mit.edu/projects/721888246/fullscreen/",
        path:"neomonsters.png",
        type:"scratch"
    },

    {
        name:"Dice Story",
        description:"Story",
        link:"https://scratch.mit.edu/projects/719005503/fullscreen/",
        path:"story.png",
        type:"scratch"
    },

    {
        name:"Analog Clock",
        description:"Time",
        link:"https://scratch.mit.edu/projects/717291429/fullscreen/",
        path:"clock.png",
        type:"scratch"
    },

    {
        name:"RainForest.arkivert",
        description:"Forest",
        link:"https://save-the-rain-forest.snmahismnandhu.repl.co/#",
        path:"rainForest.png",
        type:"javascript"
    },

    {
        name:"TicTacToe",
        description:"Game",
        link:"https://tic-tak-toe.snmahismnandhu.repl.co/",
        path:"tictactoe.png",
        type:"javascript"
    },

    {
        name:"RockPaperScissors",
        description:"Game",
        link:"https://rockpaperscissor.snmahismnandhu.repl.co/",
        path:"rockpaperscissors.png",
        type:"javascript"
    },

    {
        name:"FlipKart",
        description:"shopping website",
        link:"https://sheet.zoho.com/sheet/open/s0tmba95e9fdae1ba40099b97b18d462127a6?sheetid=0&range=A1",
        path:"fk.png",
        type:"manual testing"
    },

    {
        name:"BMW",
        description:"BMW website",
        link:"https://sheet.zoho.com/sheet/open/41t39051295f2c3c64e0bb641df6b9b8213ef?sheetid=0&range=D9",
        path:"bmw.png",
        type:"manual testing"
    },

    {
        name:"TPV Theatre",
        description:"Theatre Website",
        link:"https://sheet.zoho.com/sheet/open/p0ci8add71d969b9c4b68afb8204521b9cdf9?sheetid=0&range=C5",
        path:"the.png",
        type:"manual testing",
        
    },

    {
        name:"Hyndai",
        description:"car website",
        link:"https://workdrive.zoho.com/file/pqvl4107c0bc931254c31b9783aad131f19b8",
        path:"hyndai.png",
        type:"selenium ide"
    },

    {
        name:"EMailIde",
        description:"google mail",
        link:"https://workdrive.zoho.com/file/pqvl409dfab230227420692c9e9a48b4a8f3b",
        path:"email.jpeg",
        type:"selenium ide"
    },

    {
        name:"GelatoRoma",
        description:"IceCreamWebsite",
        link:"https://workdrive.zoho.com/file/pqvl410f89a4f8a974c77bb450ea5c186d321",
        path:"geroma.png",
        type:"selenium ide"
    },

    {
        name:"Email",
        description:"Google mail",
        link:"https://workdrive.zoho.com/file/pqvl42df7c19cc5164b76ab1f9b7107e956dc",
        path:"email.jpeg",
        type:"webdriver"
    },

    {
        name:"YouTube",
        description:"Enterteinment",
        link:"https://workdrive.zoho.com/file/da6bs90f9791a188246a79a93b0a670d060c1",
        path:"youtube.jpg",
        type:"webdriver"
    },

    {
        name:"OnlineEditor",
        description:"code finder",
        link:"https://workdrive.zoho.com/file/da6bsee454fdbce91441ba54aae1e77c5fa77",
        path:"onlineeditor.png",
        type:"webdriver"
    },

    {
        name:"ZohoSchools",
        description:"ZS Website",
        link:"https://workdrive.zoho.com/file/da6bse6c88a8146fa43e78f5a08facb7e5386",
        path:"zs.png",
        type:"testng"
    },

    {
        name:"MicroSoft",
        description:"MicroSoft 365",
        link:"https://workdrive.zoho.com/file/da6bse9cc2801d4374f30acb08dd4f077ac35",
        path:"microsoft.png",
        type:"testng"
    },

    {
        name:"PlayStore",
        description:"Google PlayStore",
        link:"https://workdrive.zoho.com/file/da6bs5947478ec4f04a9892666857df431976",
        path:"playstore.png",
        type:"testng"
    }
    

];

function buttonShades(elem){
   elem.style.setProperty("color", "#7f00ff");
   elem.style.setProperty("background-color", "white");
}

function buttonShadesOff(elem){
    elem.style.setProperty("color", "white");
   elem.style.setProperty("background-color", "#7f00ff");
}

function projectSortingFunction(elem){
   
    for(let i=0;i<document.getElementsByClassName("projButtonClass").length;i++){
        if(elem.toLowerCase()===document.getElementsByClassName("projButtonClass")[i].innerText){
            document.getElementsByClassName("projButtonClass")[i].style.setProperty("background-color", "white");
            document.getElementsByClassName("projButtonClass")[i].style.setProperty("color", "#7f00ff");
        }

        else{
            document.getElementsByClassName("projButtonClass")[i].style.setProperty("background-color", "#7f00ff");
            document.getElementsByClassName("projButtonClass")[i].style.setProperty("color", "white");   
        }
    }
    projectScreen.innerHTML="";
    projectDetails.forEach(element => {
        if (element.type===(elem.toLowerCase())) {
            console.log(element);
            let openLink=document.createElement("a");
            openLink.setAttribute("id", "openLink");
            openLink.setAttribute("href", element.link);
            openLink.setAttribute("target", "_blank");
            console.log(element.link);
            let childDiv=document.createElement("div");
            childDiv.setAttribute("class", "childDiv");
            childDiv.style.setProperty("background-image", `url(${element.path})`);
            childDiv.setAttribute("onmouseover", "showDetails(this)");
            childDiv.setAttribute("onmouseout", "closeDetails(this)");
            let grandChildDiv=document.createElement("div");
            grandChildDiv.setAttribute("class","grandChildDiv");
            grandChildDiv.innerHTML=`<h1 class="hOne">${element.name}</h1><h3 class="hThree">${element.description}</h3>`;
            childDiv.appendChild(grandChildDiv);
            projectScreen.appendChild(openLink);
            openLink.appendChild(childDiv);
            // projectScreen.appendChild(childDiv);
        }
    });
}

function showDetails(elem){
    elem.children[0].style.display="flex";
}

function closeDetails(elem) {
    elem.children[0].style.display="none";
}

////////////////////////// email //////////////////////////////
let pArr=["NAME", "EMAIL-ID", "SUBJECT"];
let containerEmail=document.getElementsByClassName("containerEmail")[0];

for (let i = 0; i < 3; i++) {
    let inputs=document.createElement("input");
    inputs.setAttribute("id", "ipId"+i);
    inputs.setAttribute("class", "ipClass");
    inputs.style.setProperty("width", "49%");
    inputs.style.setProperty("height", "4vh");
    inputs.style.setProperty("padding", "2vh");
    inputs.setAttribute("placeholder", pArr[i]);
    inputs.style.setProperty("border-radius", "1%");
    inputs.style.setProperty("border", "none");
    inputs.style.setProperty("outline", "none");
    inputs.setAttribute("type", "text");
    containerEmail.appendChild(inputs);
}

let textArea=document.createElement("textarea");
textArea.setAttribute("id", "textArea");
textArea.setAttribute("class", "textClass");
containerEmail.appendChild(textArea);
textArea.style.setProperty("width", "49%");
    textArea.style.setProperty("height", "14vh");
    textArea.style.setProperty("padding", "2vh");
    textArea.setAttribute("placeholder", "content");
    textArea.style.setProperty("border-radius", "1%");
    textArea.style.setProperty("border", "none");
    textArea.style.setProperty("outline", "none");

let submitMail=document.createElement("button");
submitMail.setAttribute("id", "submitMail");
submitMail.setAttribute("class", "submitClass");
submitMail.setAttribute("onclick", "sendEmail()");
submitMail.innerText="SUBMIT";
containerEmail.appendChild(submitMail);

function changeColor(){
    let changeColor=document.getElementById("navi");
    changeColor.style.setProperty("color", "white");
    console.log(1);
}

function sendEmail() {
    /* // Get the email address from the input box */
    
  
    /* // Send the email using EmailJS */
    emailjs.init("i11FkZVnn9SYxmwES");
    var params = {
        from_name: document.getElementById("ipId0").value,
        mailid: document.getElementById("ipId1").value,
        sub:document.getElementById("ipId2").value,
        msg:document.getElementById("textArea").value
    };
    emailjs.send("service_c1m9zob", "template_ivrzp73", params)
        .then(function(response) {
            console.log("Email sent", response);
        }, function(error) {
            console.log("Error sending email", error);
        });
  }



projectSortingFunction("testng");


