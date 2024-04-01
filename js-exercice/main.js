const section = document.querySelector('.links');
const form = document.querySelector('form');
const inputDivs = form.querySelectorAll('div');
let array = []

inputDivs.forEach((el)=>{
     const input = el.querySelector('input');
    array.push(input)
})

class Link
{   
    link;
    title;
    color;

    constructor(link, title, color){

        this.link = link;
        this.title = title;
        this.color = color;
    }

    createNewLink(){
        // const declaration
        const newLink = document.createElement('a');
        const linkContainer = document.createElement('div');
        const regex = /^(http|https):\/\/.{2,50}(\.\w{2,6})(\/?)([a-zA-Z0-9&=?\/]*)$/
        const link = array[0];
        const title = array[1];

        // verfication
        
        if(!regex.test(this.link)){
            link.value = "";
            link.setAttribute('placeholder','https://')
            link.classList.add('placeholder-red')

            return
        }
        else{
            link.classList.remove('placeholder-red')
            link.setAttribute('placeholder','Votre lien:')
        }

        // value assignation
        newLink.href = this.link;
        newLink.innerText = this.title;
        newLink.classList.add('text-light')
        newLink.setAttribute('target','_blank')
        linkContainer.style.background = this.color;
        linkContainer.classList.add('col-md-3','text-center','p-3','rounded-3')
        // element DOM assignation
        linkContainer.appendChild(newLink);
        section.appendChild(linkContainer)
        link.value="";
        title.value="";


    }

}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const linkValue = array[0].value;
    const titleValue = array[1].value;
    const colorValue = array[2].value;

    // Crée une nouvelle instance de la classe Link avec les valeurs du formulaire
    const test = new Link(linkValue, titleValue, colorValue);

    test.createNewLink();
})

