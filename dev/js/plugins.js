$(function(){
    $('.js-radio').styler();

    $('.js-fancybox').fancybox({
        maxWidth	: 740,
        maxHeight	: 491,
        fitToView	: false,
        autoSize	: true,
        closeClick	: false,
        padding: 0,
        closeBtn: false,
        helpers:  {
            overlay : {
                locked : false
            }
        }
    });

    $('.js-tabs').easytabs({
        updateHash: false
    });

    $.validator.addMethod('phone', function(value) {
        var numbers = value.split(/\d/).length - 1;
        return (10 <= numbers && numbers <= 20 && value.match(/^(\+){0,1}(\d|\s|\(|\)){10,20}$/)); }, 'Please enter a valid phone number');

    $('#js-visaform, #js-orderform').validate({

        rules: {
            name: {
                required: true
            },
            phone: {
                required: true,
                phone: true,
            }
        },
        messages: {
            name: "Как к вам обращаться?",
            phone: {
                required: "Как с вами связаться?",
                phone: "формат +375291111111"
            }
        },
        submitHandler: function(form) {
            send_order()
        }
    });
});