var resultat = document.getElementById('result');
var input = document.getElementById('input');
var createDiv;



function creatediv(){
         createDiv = document.createElement('div');
        resultat.appendChild(createDiv);
        createDiv.setAttribute('class','divli');
        insertButton();
    }

    function insertValue(){
        let createValue = document.createElement("li")
        createValue.innerHTML = input.value;
        creatediv();
        createDiv.appendChild(createValue);
        
    }

    function deleteValue() {
        let targetButton = this;
        let parentDiv = targetButton.parentNode;
        resultat.removeChild(parentDiv);
      }
      
    function insertButton(){
        let createButton = document.createElement('button');
        createButton.innerHTML = "Delete";
        createButton.addEventListener('click', deleteValue);
        createDiv.appendChild(createButton);
    }
