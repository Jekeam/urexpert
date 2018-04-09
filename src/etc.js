$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top - 70 }, 800);
        return false;
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

    document.getElementById('feedback-form').addEventListener('submit', function(evt) {
        var http = new XMLHttpRequest(),
            f = this;
        evt.preventDefault();
        http.open("POST", "contacts.php", true);
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
                if (http.responseText.indexOf(f.nameFF.value) == 0) { // очистить поле сообщения, если в ответе первым словом будет имя отправителя
                    f.messageFF.removeAttribute('value');
                    f.messageFF.value = '';
                }
            }
        }
        http.onerror = function() {
            alert('Извините, данные не были переданы');
        }
        http.send(new FormData(f));
    }, false);
<<<<<<< HEAD
>>>>>>> parent of 0335f9c... форма готова
=======
>>>>>>> parent of 0846be9... переделаем на телефон потом
=======
>>>>>>> parent of 0335f9c... форма готова
=======
>>>>>>> parent of 0846be9... переделаем на телефон потом
});

$(window).scroll(function() {
    var body = $("body").scrollTop();
    if (body > 200) {
        $(".scrollup").css("opacity", "1", 500);
    } else { $(".scrollup").css("opacity", "0", 500); };
});

function setEqualNewHeight(columns) {
    var tallestcolumn = 0;
    columns.removeAttr('style');
    columns.each(function() {
        currentHeight = $(this).height();
        if (currentHeight > tallestcolumn) { tallestcolumn = currentHeight; }
    });
    columns.height(tallestcolumn);
}

function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.removeAttr('style');
    columns.each(function() {
        currentHeight = $(this).outerHeight();
        if (currentHeight > tallestcolumn) { tallestcolumn = currentHeight; }
    });
    columns.height(tallestcolumn);
}
$(window).load(function() {
    setEqualHeight($(".row .height200"));
    setEqualHeight($(".portfolio-page"));
    setEqualHeight($(".portfolio-main-page"));
    /*new*/
    setEqualNewHeight($(".content .color .row .block"));
    setEqualHeight($(".content .color .column"));
    setEqualHeight($(".product-abstract .link-and-icon li"));
    setEqualHeight($(".product-content .column"));
    setEqualHeight($("footer .col-lg-3"));
});
$(window).resize(function() {
    setEqualHeight($(".row .height200"));
    setEqualHeight($(".portfolio-page"));
    setEqualHeight($(".portfolio-main-page"));
    /*new*/
    setEqualNewHeight($(".content .color .row .block"));
    setEqualHeight($(".content .color .column"));
    setEqualHeight($(".product-abstract .link-and-icon li"));
    setEqualHeight($(".product-content .column"));
    setEqualHeight($("footer .col-lg-3"));
});

$(document).ready(function() {
    $('.faq .post-heading h3').click(function() {
        $(this).parent().next('.post-body').slideToggle();
    });
});

$(document).ready(function(e) {
    $('#callback-request-submit_f').click(function() {
        $("#callback-request-feedback_f").show();
        $('#callback-request-phone_f').hide();
        $('#callback-request-name_f').hide();
        $('#callback-request-submit_f').hide();
    });

    $('#submitFF').click(function(event) {
        var name = $('#nameFF').val();
        var contact = $('#contactFF').val();
        var year = $('#yearFF').val();
        var km = $('#kmFF').val();
        var message = $('#messageFF').val();
        if (message == "") { console.log('Нет пожеланий');
            $('#messageFF').val('Нет пожеланий'); }
        if (name.length > 0 && contact.length > 0 && year.length > 0 && km.length > 0) {
            $("#callback-feedback").html("<h2 class='post-message'>Идет отправка сообщения...</h2>");
            $('#feedback-form').submit(function() {
                $("#callback-feedback").html("<span class='post-success'><h2>Cпасибо за обращение! Заявка отправлена.</h2><p>Специалист свяжется с Вами в ближайщее время!</p></span><h6>Для повторной отправки обновите страницу (F5)</h6>");
                $('#feedback-form').hide();
            });
        } else { alert('Заполните все поля формы');
            event.preventDefault(); return false; }
    });

    /*Новые формы*/
    $('.contact .form-inline .btn').click(function(event) {
        var tmp = $(this).parent();
        var name = tmp.find('.name').val();
        var contact = tmp.find('.phone').val();
        if (name.length > 0 && contact.length > 0) {
            var abstr = tmp.parent();
            abstr.find('.answer').html("Ожидайте, заявка отправляется.");
            tmp.submit(function() {
                abstr.find('.answer').html("<h4>Cпасибо за обращение! Ваша заявка отправлена.</h4><h6>Для повторной отправки обновите страницу (F5)</h6>");
                tmp.hide();
            });
        } else { alert('Заполните все поля формы');
            event.preventDefault(); return false; }
    });

    $('.product-abstract.cooperation form .btn').click(function(event) {
        var tmp = $(this).parent();
        var name = tmp.find('.name').val();
        var contact = tmp.find('.phone').val();
        if (name.length > 0 && contact.length > 0) {
            var abstr = tmp.parent();
            abstr.find('.answer').html("Ожидайте, заявка отправляется.");
            tmp.submit(function() {
                abstr.find('.answer').html("<h4>Cпасибо за обращение! Ваша заявка отправлена.</h4><h6>Для повторной отправки обновите страницу (F5)</h6>");
                tmp.hide();
            });
        } else { alert('Заполните все поля формы');
            event.preventDefault(); return false; }
    });



    $('.modal-body .form .btn').click(function(event) {
        var tmp = $(this).parent();
        var name = tmp.find('.name').val();
        var contact = tmp.find('.phone').val();
        if (name.length > 0 && contact.length > 0) {
            var abstr = tmp.parent();
            abstr.find('.answer').html("Ожидайте, заявка отправляется.");
            tmp.submit(function() {
                abstr.find('.answer').html("<h4>Cпасибо за обращение! Ваша заявка отправлена.</h4><h6>Для повторной отправки обновите страницу (F5)</h6>");
                tmp.hide();
            });
        } else { alert('Заполните все поля формы');
            event.preventDefault(); return false; }
    });

    /*Вопрос-ответ*/
    /*$('.modal-body #faqQuestion-submit').click(function(event){
    	var name=$('.faqQuestion .name').val();var email=$('.faqQuestion .email').val();var message=$('.faqQuestion .message').val();var test=$('.faqQuestion .text').val();
    	if (test.length > 0){event.preventDefault();return false;}
    	else{
    		if(grecaptcha.getResponse().length > 0){
    			if(name.length > 0 && email.length > 0 && message.length > 0 ){
    				$("#faqQuestion-feedback").show();
    				$('.faqQuestion').hide();	
    			}
    			else {alert ('Заполните все поля формы');event.preventDefault();return false;}
    		}
    		else {alert ('Вы не прошли проверку Я не робот');event.preventDefault();return false;}
    	}
    });*/
    $('.contact .form .btn').click(function(event) {
        var tmp = $(this).parent();
        var name = tmp.find('.name').val();
        var contact = tmp.find('.email').val();
        var message = tmp.find('.message').val();
        if (name.length > 0 && contact.length > 0 && message.length > 0) {
            var abstr = tmp.parent();
            abstr.find('.answer').html("Ожидайте, заявка отправляется.");
            tmp.submit(function() {
                abstr.find('.answer').html("<h4>Cпасибо за обращение! Скоро мы ответим на ваш вопрос! </h4><h6>Для повторной отправки обновите страницу (F5)</h6>");
                tmp.hide();
            });
        } else { alert('Заполните все поля формы');
            event.preventDefault(); return false; }
    });

});

/*Portfolio tags*/
$('.category .widget .go').click(function(event) {
    var marka = $('.marka option:selected').attr('value');
    var city = $('.city option:selected').attr('value');
    var service = $('.service option:selected').attr('value');
    if (marka.length > 0 && city.length > 0 && service.length > 0) {
        document.location.href = '/example?&tags=' + marka + '%2C' + city + '%2C' + service;
    }
    if (marka.length > 0 && city.length > 0 && service.length == 0) {
        document.location.href = '/example?&tags=' + marka + '%2C' + city;
    }
    if (marka.length > 0 && city.length == 0 && service.length > 0) {
        document.location.href = '/example?&tags=' + marka + '%2C' + service;
    }
    if (marka.length == 0 && city.length > 0 && service.length > 0) {
        document.location.href = '/example?&tags=' + city + '%2C' + service;
    }
    if (marka.length > 0 && city.length == 0 && service.length == 0) {
        document.location.href = '/example?&tags=' + marka;
    }
    if (marka.length == 0 && city.length > 0 && service.length == 0) {
        document.location.href = '/example?&tags=' + city;
    }
    if (marka.length == 0 && city.length == 0 && service.length > 0) {
        document.location.href = '/example?&tags=' + service;
    }


    return false;
});

$(document).ready(function() {
    var url = window.location;
    $('ul.nav a[href="' + url + '"]').parent().addClass('active');
    $('ul.nav a').filter(function() {
        return this.href == url;
    }).parent().addClass('active');
});

$(function() { /* выбор города */
    $('ul.contact-list li').click(function() {
        var tx = $(this).html();
        var tv = $(this).attr('alt');
        $("span.contact-city").html(tx);
        $(".contact-text").html(tv);
    });
})

$(document).ready(function() {
    $('body.new header').affix({ offset: { top: 10, bottom: 20 } })
    $(function() { $('[data-toggle="tooltip"]').tooltip(); })
})

$('img.openImage').click(function() {
    var img = $(this).clone();
    $('#imageFull .modal-dialog .modal-content .modal-body').html(img);
    $('#imageFull .modal-dialog .modal-content .modal-body .openImage').attr('title', 'Нажмите, чтобы закрыть');
})
$(document).ready(function() {
    var url = window.location.pathname;
    if (url == '/cooperation/investoram') {
        $('header .action .btn').addClass('hidden');
    }
});