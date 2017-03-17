var items = {
    "types" : {
        "first" : "coffee",
        "second" : "tea",
        "third" : "espresso"
    },
    "tools" : {
        "first" : "filter",
        "second" : "strainer",
        "third" : "tamper"
    },
    "forms" : {
        "first" : "grounds",
        "second" : "loose",
        "third" : "beans"
    },
    'message' : {
        "coffee" : "You won coffee!",
        "tea" : "You won tea!",
        "espresso" : "You won espresso!",
        "lose" : "lets try that again"
    }
};
var win = '';

// handlebars templating
$(function () {
    var theTemplateScript = $("#slots-template").html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    var theCompiledHtml = theTemplate(items);
    $('.content').html(theCompiledHtml);
});

$(document).ready(function() {

    var list1 = $('#slots-wrapper1 ul');
    var list2 = $('#slots-wrapper2 ul');
    var list3 = $('#slots-wrapper3 ul');
    var firstItem1 = list1.find('li:first');
    var firstItem2 = list2.find('li:first');
    var firstItem3 = list3.find('li:first');
    firstItem1.clone().appendTo(list1);
    firstItem2.clone().appendTo(list2);
    firstItem3.clone().appendTo(list3);

    function spin() {
        win = '';
        $('#winMessage h2').html('');

        $('#slots-wrapper1, #slots-wrapper2, #slots-wrapper3').stop().animate({
            top: -600
        }, 600, 'linear', function () {

            var slot = Math.floor(Math.random() * 3),
                top = -slot * 200;

            $(this).css({
                top: 0
            }).animate({top: top}, function() {

                if( $('#slots-wrapper1').css('top') === '0px' && $('#slots-wrapper2').css('top') === '0px' && $('#slots-wrapper3').css('top') === '0px' ) {
                    win = items.message.coffee;
                }else if ( $('#slots-wrapper1').css('top') === '-200px' && $('#slots-wrapper2').css('top') === '-200px' && $('#slots-wrapper3').css('top') === '-200px' ) {
                    win = items.message.tea;
                }else if ( $('#slots-wrapper1').css('top') === '-400px' && $('#slots-wrapper4').css('top') === '-400px' && $('#slots-wrapper3').css('top') === '-400px' ){
                    win = items.message.espresso;
                }else {
                    win = items.message.lose;
                }
                console.log(win);
                $('#winMessage h2').html(win);
            });
        });
    }

    $('#spin').click(function () {
        $('#slots-wrapper1, #slots-wrapper2, #slots-wrapper3').css({
            top: 0
        });
        spin();
    });
});
