/*!
 * lv.emotions v1.0.0
 * Criado para utilizar emoticons em suas p�ginas web
 * https://github.com/LucasViniciusPereira
 * License : MIT
 * Author : Lucas Vinicius Pereira (http://lucasvinicius.eti.br/)
 */
(function ($) {
    $.fn.emotions = function (options) {
        // Defini��o dos valores padr�es
        var arrayEmotions = {
            "0": "Undefined", "1": "o:)", "2": ":3", "3": "o.O", "4": ":'(", "5": "3:)", "6": ":(", "7": ":O", "8": "8)", "9": ":D",
            "10": "&gt:(", "11": "<3", "12": "^_^", "13": ":*", "14": ":v", "15": ":)", "16": "-_-", "17": "8|", "18": ":p", "19": ":/", "20": "&gt:O", "21": ";)"
        };
        var nameEmotions = ["undefined", "angel", "colonthree", "confused", "cry", "devil", "frown", "gasp", "glasses", "grin", "grumpy", "heart", "kiki", "kiss", "pacman", "smile", "squint", "sunglasses", "tongue", "unsure", "upset", "wink"];
        
        var defaults = {
            'path': 'img-emotions/',
            'extension': '.gif',
            'campoMensagemID': '#txtMensagem',
            'btnEnviaMensagemID': '#btnEnviarMensagem',
            'listaEmotionsView': '#lista-emotions',
            'exibeMensagemView': '#showHere'
        };

        /*
        * Monta a lista de emotions para o usu�rio clicar no emotion
        */
        $.fn.montaListaEmotionView = function () {
            var lista = "";
            $.each(nameEmotions, function (key, value) {
                if (value != 'undefined')
                    lista = lista + "<a onclick='$(this).recuperarEmotion(" + key + ")'>" + $(this).montaImagemEmotion(value) + '</a>';  //<img src='" + path + value + extension + "'></a>";
            });
            $(settings.listaEmotionsView).prepend(lista);
        };

        /*
        * Ao clicar no emotion ele recupera em qual elemento foi clicado
        * keyEmotion => index do emotion
        */
        $.fn.recuperarEmotion = function (keyEmotion) {
            $.each(arrayEmotions, function (key, value) {
                if (parseInt(key) == keyEmotion)
                    element = value;
            });
            $(settings.campoMensagemID).val($(settings.campoMensagemID).val() + ' ' + element + ' ');
        };

        /*
        * Monta a imagem do emotion e retorna o html
        *_name =>   Qual o nome do arquivo da imagem
        */
        $.fn.montaImagemEmotion = function (_name) {
            return "<img src='" + settings.path + _name + settings.extension + "' />";
        }

        // Gera��o das settings do seu plugin
        var settings = $.extend({}, defaults, options);

        //Init method
        $(this).montaListaEmotionView();

        //Retorno da fun��o
        return this.each(function () {
            $(settings.btnEnviaMensagemID).click(function () {
                //Remove os espa�os e separa em array
                textoDigitado = $(settings.campoMensagemID).val().trimLeft().trimRight().toString().split(" ");
                textoCompleto = "";

                //Substitui o carecter digitado pelo emotion
                for (i = 0; i < textoDigitado.length; i++) {
                    $.each(arrayEmotions, function (key, value) {
                        if (textoDigitado[i] == value) {
                            textoDigitado[i] = $(this).montaImagemEmotion(nameEmotions[key]);
                        }
                    });
                }

                //Imprime todo o texto digitado
                $.each(textoDigitado, function (key, value) {
                    textoCompleto = textoCompleto + ' ' + value;
                });

                $(settings.exibeMensagemView).append('<p>' + textoCompleto + '</p>');
                $(settings.campoMensagemID).val('');
                $(settings.campoMensagemID).focus();
            });
        });
    };
})(jQuery);