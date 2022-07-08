/*
var  idCampo = "nome"
var  texto_copy = ""
//

document.addEventListener('DOMContentLoaded', function(event){
        //console.log('Pagina:',document.URL);
        dataLayer.push({event:'page_view_DL',categoria:'pagina',acao:'view',rotulo:document.URL});
});

//  
var listButton = document.querySelectorAll('a.menu-lista-link');
function onClickElementButton(event, element) {
    var name  = element.innerText;
    if(name=='Entre em Contato') {
       dataLayer.push({event:'DL_click_contato',categoria:'menu',ação:'entre_em_contato',rotulo:'link_externo'});
    }
    if(name=='Download PDF') {
         dataLayer.push({event:'DL_click_download',categoria:'menu',ação:'download_pdf',rotulo:'download_pdf'});
    }
  //console.log(name);
}
                                            
function buttonListCallback(element) {
    element.addEventListener('click', function(event){ onClickElementButton(event, element)}); 
}
listButton.forEach(buttonListCallback);
//

//

var cardList = document.querySelectorAll('div.card');
function onClickElementCards(event, element) {
    var title = element.querySelector('p.card-title');
    var name = title.innerText;
    //ga('send', 'event', 'analise','ver_mais',name)
    dataLayer.push({event:'DL_click_cards',categoria:'ver_mais',ação:'ver_mais',rotulo:name});
    console.log(name);
}

function cardListCallback(element) {
    element.addEventListener('click', function(event){ onClickElementCards(event, element)});
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
                    //ga('send','event', 'contato',nomeCampo, 'preencheu')
                    dataLayer.push({event:'DL_preencheu_campo',categoria:'contato',ação:nomeCampo,rotulo:'preencheu'});
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
                //ga('send','event', 'contato','aceito', 'preencheu')
                dataLayer.push({event:'DL_preencheu_campo',categoria:'contato',ação:'aceito',rotulo:'preencheu'});
            }
        
    }
}
*/
