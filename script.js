let noClickedCount = 0;
let noClickedBeforeYes = false;

function noClicked() {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const message = document.getElementById("message");

  noClickedCount++;

  if (noClickedCount === 1) {
    noButton.textContent = "Are you sure?"; 
  }

  noClickedBeforeYes = true;

  const scaleValue = 1 + (noClickedCount * 0.2);  
  yesButton.style.transform = `scale(${scaleValue})`;

  yesButton.style.transition = "transform 0.5s ease";

  noButton.style.transform = `translateX(${scaleValue * 20}px)`;

  if (scaleValue > 2.5) {
    yesButton.style.maxWidth = "100%";  
    yesButton.style.maxHeight = "500px";
  }
}

function yesClicked() {
  const message = document.getElementById("message");
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  message.textContent = "YAY I LOVE YOU!!!";

  if (noClickedBeforeYes) {
    const whyMessage = document.createElement('h2');
    whyMessage.textContent = "I knew you would say yes :D";
    document.body.appendChild(whyMessage);

    whyMessage.style.fontSize = "2.5em";
    whyMessage.style.fontWeight = "500";
    whyMessage.style.color = "#f7f7f7"; 
    whyMessage.style.marginTop = "25px";
    whyMessage.style.padding = "15px";
    whyMessage.style.backgroundColor = "#ff6b6b"; 
    whyMessage.style.borderRadius = "12px"; 
    whyMessage.style.textShadow = "1px 1px 6px rgba(0,0,0,0.3)"; 
    whyMessage.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.2)";
    
  }

  document.body.style.backgroundColor = "#66cc66"; 

  noButton.style.display = "none";
  yesButton.style.display = "none";

  message.style.fontSize = "6em";        
  message.style.color = "#ffffff";      
  message.style.fontWeight = "bold";     

  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.textAlign = "center";
}
