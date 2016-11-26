$(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/pantagathus@mail.ru",
                method: "POST",
                data: {
                    userName: $('#userName').val(),
                    email: $('#email').val(),
                    message: $('#message').val()
                },
                dataType: "json"
            })
            .done(function() {
                $('form').html('<h1>Thank you!</h1>')
            })
            .fail(function() {
                $('form').html('<h1>Error</h1>')
            });
    });
});