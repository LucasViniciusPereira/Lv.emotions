# Lv.emotions

Plugin de emotion

##Documentação

* 'campoMensagemID': '#ID  do campo de input para enviar a mensagem',
* 'btnEnviaMensagemID': '#ID do botão para enviar a mensagem',
* 'listaEmotionsView': '#ID para especificar aonde deverá mostrar a lista de emotions',
* 'exibeMensagemView': '#ID para qual elemento html a mensagem será exibida'
* 'elementoRetorno':   'tipo do elemento html para retorno'

##Exemplo
       $(document).ready(function () {
            $("#element").emotions({ campoMensagemID:'#txtMensagem', 
                                     btnEnviaMensagemID: '#btnEnviar',
                                     listaEmotionsView:  '#listaExibiEmotions',
                                     exibeMensagemView:  '#exibeMensagens'});
        });
        
        var mensagem = $(this).retornaMensagemEmotion('Passando a mensagem como parâmetro :) ');

Pluing de emotions reutilizavél desenvolvido por @lucasVinicius(Eu mesmo), para aplicações e apis WEB.
