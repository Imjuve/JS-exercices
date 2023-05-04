const container = document.getElementById('container');
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


function init(){
    
    
    for(let i = 0 ; i < alphabet.length; i++){
        const newDiv = document.createElement('div');
        newDiv.innerHTML = alphabet[i];
        container.appendChild(newDiv);
    }
    
    
}

