$(function() {
    document.getElementById("avatar").src = "data:image/png;base64,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";
    var socket = io();

    // var clients = 0;

    // io.socket.on('connect', function(client) {
    //     clients++;
    //     io.sockets.emit('broadcast', {
    //         description: clients + ' clients connected!'
    //     });
    //     socket.on('disconnect', function() {
    //         clients--;
    //         io.sockets.emit('broadcast', {
    //             description: clients + ' clients connected!'
    //         });
    //     });
    // });


    function insertMessage() {
        socket.emit('chat message', $('#message-input').val());
        return false;
    }

    socket.on('chat message', function(msg) {
        $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
        setDate();
        $('.message-input').val(null);
        updateScrollbar();
    });



    var $messages = $('.messages-content'),
        d, h, m,
        i = 0;

    $(window).load(function() {
        $messages.mCustomScrollbar();
    });

    function updateScrollbar() {
        $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
            scrollInertia: 10,
            timeout: 0
        });
    }

    function setDate() {
        d = new Date()
        if (m != d.getMinutes()) {
            m = d.getMinutes();
            $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
        }
    }



    $('.message-submit').click(function() {
        insertMessage();
    });

    $(window).on('keydown', function(e) {
        if (e.which == 13) {
            insertMessage();
            return false;
        }
    })
});