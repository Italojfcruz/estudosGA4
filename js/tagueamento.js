
/*
var idCampo = "nome"
var  texto_copy = ""

document.querySelector('a.menu-lista-link.menu-lista-contato').addEventListener('click', (event) => {
    ga(
        'send', 
        'event', 
        'menu', 
        'entre_em_contato', 
        'link_externo'
    );
})


document.querySelector('a.menu-lista-link.menu-lista-download').addEventListener('click', (event) => {
    ga(
        'send',
       'event', 
       'menu', 
       'download_pdf', 
       'download_pdf');
})

//

var cardList = document.querySelectorAll('div.card');

function onClickElement(event, element) {
    var title = element.querySelector('p.card-title');
    var name = title.innerText;
    ga('send', 'event', 'analise','ver_mais',name)
    console.log(name);
}

function cardListCallback(element) {
    element.addEventListener('click', (event) => { onClickElement(event, element)})
}

cardList.forEach(cardListCallback);

//
var menuNotNull = document.getElementById("menus");
var  nomeCampo = ""
if(menuNotNull){
 
    document.getElementById("menus").addEventListener("click",retornarIdCampo)

    function retornarIdCampo()
        {
                idCampo =  document.activeElement.id
                
                console.log("id do click:",idCampo)
                if(idCampo!="aceito"){
                   sendDados(idCampo)
                    }
        }

}

function sendDados(idCampo){
    var camposNotNull = document.getElementById(idCampo)
    if(camposNotNull){
        camposNotNull.addEventListener("blur", campSelect);
        nomeCampo = idCampo   
    }
    function campSelect() 
    {
        var  texto =   document.getElementById(idCampo).value
        
        if (texto != "" ) 
            {
        
                if(texto != texto_copy)
                {
                     
                    console.log("dado enviado!")
                    ga('send','event', 'contato',nomeCampo, 'preencheu')
                    texto_copy = texto 
                    
                }
                else
                {   
                    console.log("insira valor diferente");
                }   
          
            } 
            else
            {
               console.log("Campo vazio");
                
        }
    }
}
var  i = 1
var aceito = document.getElementById("aceito")
if(aceito)
{
    aceito.addEventListener("click",verificarCheckBox);

    function verificarCheckBox()
    {
           
            i = i + 1
            if(i == 11){i = 1}
            var check =   document.getElementById("aceito").value
            
            if(i%2 == 0)
            {
                ga('send','event', 'contato','aceito', 'preencheu')
                
            }
        
    }
}
*/
