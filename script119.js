function changeBackColor119() {
    // ?I???????????????B
    var confirm119Class = document.getElementsByClassName('confirm119');
    for (i = 0; i < confirm119Class.length; i++) {
        if (confirm119Class[i].style.backgroundColor == "white") {
            confirm119Class[i].style.backgroundColor = "yellow";
        } else {
            confirm119Class[i].style.backgroundColor = "white";
        }
    }

    // initClass???????��w?i????????????B
    var init119Class = document.getElementsByClassName('init119');
    for (i = 0; i < init119Class.length; i++) {
        init119Class[i].style.backgroundColor = "";
    }
}

setInterval(changeBackColor119, 50);

$(function () {
    var idx119, num119, stock119, swap119, time119, timerId119;

    stock119 = void 0;

    num119 = void 0;

    idx119 = void 0;

    time119 = void 0;

    timerId119 = void 0;

    swap119 = void 0;

    var img119_1_Random, img119_2_Random, img119_3_Random, img119_4_Random, img119_5_Random, img119_6_Random, img119_7_Random, img119_8_Random;

    var isPushStart119_firstTime = true;

    var isInit119 = true;

    $('#allStart119').on('click', function () {
        isInit119 = false;
        // start able
        $('#start119').prop('disabled', false);
        $('#start119').removeClass('btn-right-radius-disable');
        $('#start119').addClass('btn-right-radius');

        // go disable
        $('#allStart119').prop('disabled', 'true');
        $('#allStart119').prop('value', '');
        $('#allStart119').removeClass('btn-circle-3d-small');
        $('#allStart119').addClass('btn-circle-3d-small-disable');

        isSetImg119_1_Interval = setInterval((function () {
            img119_1.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg119_2_Interval = setInterval((function () {
            img119_2.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg119_3_Interval = setInterval((function () {
            img119_3.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg119_4_Interval = setInterval((function () {
            img119_4.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg119_5_Interval = setInterval((function () {
            img119_5.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg119_6_Interval = setInterval((function () {
            img119_6.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg119_7_Interval = setInterval((function () {
            img119_7.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg119_8_Interval = setInterval((function () {
            img119_8.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);
    });

    $('#start119').on('click', function () {

        $('#t119 td').removeClass('init119');

        timerId119 = setInterval((function () {

            idx119 = Math.floor(Math.random() * num119);

            $('#t119 td').removeClass('selected').eq(stock119[idx119]).addClass('selected');

        }), time119);

        $('#start119,#reset119').prop('disabled', true);
        $('#start119,#reset119').removeClass('btn-right-radius');
        $('#start119,#reset119').addClass('btn-right-radius-disable');

        $('#stop119').prop('disabled', false);
        $('#stop119').removeClass('btn-right-radius-disable');
        $('#stop119').addClass('btn-right-radius');

        if (isPushStart119_firstTime == true) {
            clearInterval(isSetImg119_1_Interval);
            clearInterval(isSetImg119_2_Interval);
            clearInterval(isSetImg119_3_Interval);
            clearInterval(isSetImg119_4_Interval);
            clearInterval(isSetImg119_5_Interval);
            clearInterval(isSetImg119_6_Interval);
            clearInterval(isSetImg119_7_Interval);
            clearInterval(isSetImg119_8_Interval);


            img119_1_Random = Math.floor(Math.random() * array.length);
            img119_1.src = "./" + array[img119_1_Random] + ".jpg";
            array.splice(array.indexOf(array[img119_1_Random]), 1);

            img119_2_Random = Math.floor(Math.random() * array.length);
            img119_2.src = "./" + array[img119_2_Random] + ".jpg";
            array.splice(array.indexOf(array[img119_2_Random]), 1);

            img119_3_Random = Math.floor(Math.random() * array.length);
            img119_3.src = "./" + array[img119_3_Random] + ".jpg";
            array.splice(array.indexOf(array[img119_3_Random]), 1);

            img119_4_Random = Math.floor(Math.random() * array.length);
            img119_4.src = "./" + array[img119_4_Random] + ".jpg";
            array.splice(array.indexOf(array[img119_4_Random]), 1);


            img119_5_Random = Math.floor(Math.random() * array.length);
            img119_5.src = "./" + array[img119_5_Random] + ".jpg";
            array.splice(array.indexOf(array[img119_5_Random]), 1);

            img119_6_Random = Math.floor(Math.random() * array.length);
            img119_6.src = "./" + array[img119_6_Random] + ".jpg";
            array.splice(array.indexOf(array[img119_6_Random]), 1);

            img119_7_Random = Math.floor(Math.random() * array.length);
            img119_7.src = "./" + array[img119_7_Random] + ".jpg";
            array.splice(array.indexOf(array[img119_7_Random]), 1);

            img119_8_Random = Math.floor(Math.random() * array.length);
            img119_8.src = "./" + array[img119_8_Random] + ".jpg";
            array.splice(array.indexOf(array[img119_8_Random]), 1);

            isPushStart119_firstTime = false;
        }
    });

    $('#stop119').on('click', function () {

        clearInterval(timerId119);

        $('#t119 td').removeClass('init119');

        $('#t119 td').eq(stock119[idx119]).addClass('confirm119');

        num119--;

        swap119 = stock119[num119];

        stock119[num119] = stock119[idx119];

        stock119[idx119] = swap119;

        if (num119 <= 5) {
            $('#start119').prop('disabled', true);
            $('#start119').removeClass('btn-right-radius');
            $('#start119').addClass('btn-right-radius-disable');
        } else {
            $('#start119').prop('disabled', false);
            $('#start119').removeClass('btn-right-radius-disable');
            $('#start119').addClass('btn-right-radius');
        }

        $('#stop119').prop('disabled', true);
        $('#stop119').removeClass('btn-right-radius');
        $('#stop119').addClass('btn-right-radius-disable');

        $('#reset119').prop('disabled', false);
        $('#reset119').removeClass('btn-right-radius-disable');
        $('#reset119').addClass('btn-right-radius');
    });

    $('#reset119').on('click', function () {

        var i119;

        stock119 = [];

        //?X?g?b?N???X?g

        i119 = 0;

        while (i119 < 8) {

            stock119.push(i119);

            i119++;

        }

        num119 = 8; //?c???}?X

        time119 = 10; //time119r?X?s?[?h

        idx119 = null; //?????u

        $('#t119 td').removeClass('confirm119').removeClass('selected');

        if (isInit119 == true) {
            $('#start119').prop('disabled', true);
            $('#start119').removeClass('btn-right-radius');
            $('#start119').addClass('btn-right-radius-disable');
        } else {
            // start able
            $('#start119').prop('disabled', false);
            $('#start119').removeClass('btn-right-radius-disable');
            $('#start119').addClass('btn-right-radius');
        }

        $('#stop119').prop('disabled', true);
        $('#stop119').removeClass('btn-right-radius');
        $('#stop119').addClass('btn-right-radius-disable');

        $('#t119 td').addClass('init119');

    }).trigger('click');

});
