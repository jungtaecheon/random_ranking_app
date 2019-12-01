function changeBackColor2() {
    // ?I???????????????B
    var confirm2Class = document.getElementsByClassName('confirm2');
    for (i = 0; i < confirm2Class.length; i++) {
        if (confirm2Class[i].style.backgroundColor == "white") {
            confirm2Class[i].style.backgroundColor = "yellow";
        } else {
            confirm2Class[i].style.backgroundColor = "white";
        }
    }

    // initClass???????��w?i????????????B
    var init2Class = document.getElementsByClassName('init2');
    for (i = 0; i < init2Class.length; i++) {
        init2Class[i].style.backgroundColor = "";
    }
}

setInterval(changeBackColor2, 50);

$(function () {
    var idx2, num2, stock2, swap2, time2, timerId2;

    stock2 = void 0;

    num2 = void 0;

    idx2 = void 0;

    time2 = void 0;

    timerId2 = void 0;

    swap2 = void 0;

    var img2_1_Random, img2_2_Random, img2_3_Random, img2_4_Random, img2_5_Random, img2_6_Random, img2_7_Random, img2_8_Random;

    var isPushStart2_firstTime = true;

    var isInit2 = true;

    $('#allStart2').on('click', function () {
        isInit2 = false;
        // start able
        $('#start2').prop('disabled', false);
        $('#start2').removeClass('btn-right-radius-disable');
        $('#start2').addClass('btn-right-radius');

        // go disable
        $('#allStart2').prop('disabled', 'true');
        $('#allStart2').prop('value', '');
        $('#allStart2').removeClass('btn-circle-3d-small');
        $('#allStart2').addClass('btn-circle-3d-small-disable');

        isSetImg2_1_Interval = setInterval((function () {
            img2_1.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg2_2_Interval = setInterval((function () {
            img2_2.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg2_3_Interval = setInterval((function () {
            img2_3.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg2_4_Interval = setInterval((function () {
            img2_4.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg2_5_Interval = setInterval((function () {
            img2_5.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg2_6_Interval = setInterval((function () {
            img2_6.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg2_7_Interval = setInterval((function () {
            img2_7.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg2_8_Interval = setInterval((function () {
            img2_8.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);
    });

    $('#start2').on('click', function () {

        $('#t2 td').removeClass('init2');

        timerId2 = setInterval((function () {

            idx2 = Math.floor(Math.random() * num2);

            $('#t2 td').removeClass('selected').eq(stock2[idx2]).addClass('selected');

        }), time2);

        $('#start2,#reset2').prop('disabled', true);
        $('#start2,#reset2').removeClass('btn-right-radius');
        $('#start2,#reset2').addClass('btn-right-radius-disable');

        $('#stop2').prop('disabled', false);
        $('#stop2').removeClass('btn-right-radius-disable');
        $('#stop2').addClass('btn-right-radius');

        if (isPushStart2_firstTime == true) {
            clearInterval(isSetImg2_1_Interval);
            clearInterval(isSetImg2_2_Interval);
            clearInterval(isSetImg2_3_Interval);
            clearInterval(isSetImg2_4_Interval);
            clearInterval(isSetImg2_5_Interval);
            clearInterval(isSetImg2_6_Interval);
            clearInterval(isSetImg2_7_Interval);
            clearInterval(isSetImg2_8_Interval);


            img2_1_Random = Math.floor(Math.random() * array.length);
            img2_1.src = "./" + array[img2_1_Random] + ".jpg";
            array.splice(array.indexOf(array[img2_1_Random]), 1);

            img2_2_Random = Math.floor(Math.random() * array.length);
            img2_2.src = "./" + array[img2_2_Random] + ".jpg";
            array.splice(array.indexOf(array[img2_2_Random]), 1);

            img2_3_Random = Math.floor(Math.random() * array.length);
            img2_3.src = "./" + array[img2_3_Random] + ".jpg";
            array.splice(array.indexOf(array[img2_3_Random]), 1);

            img2_4_Random = Math.floor(Math.random() * array.length);
            img2_4.src = "./" + array[img2_4_Random] + ".jpg";
            array.splice(array.indexOf(array[img2_4_Random]), 1);


            img2_5_Random = Math.floor(Math.random() * array.length);
            img2_5.src = "./" + array[img2_5_Random] + ".jpg";
            array.splice(array.indexOf(array[img2_5_Random]), 1);

            img2_6_Random = Math.floor(Math.random() * array.length);
            img2_6.src = "./" + array[img2_6_Random] + ".jpg";
            array.splice(array.indexOf(array[img2_6_Random]), 1);

            img2_7_Random = Math.floor(Math.random() * array.length);
            img2_7.src = "./" + array[img2_7_Random] + ".jpg";
            array.splice(array.indexOf(array[img2_7_Random]), 1);

            img2_8_Random = Math.floor(Math.random() * array.length);
            img2_8.src = "./" + array[img2_8_Random] + ".jpg";
            array.splice(array.indexOf(array[img2_8_Random]), 1);

            isPushStart2_firstTime = false;
        }
    });

    $('#stop2').on('click', function () {

        clearInterval(timerId2);

        $('#t2 td').removeClass('init2');

        $('#t2 td').eq(stock2[idx2]).addClass('confirm2');

        num2--;

        swap2 = stock2[num2];

        stock2[num2] = stock2[idx2];

        stock2[idx2] = swap2;

        if (num2 <= 5) {
            $('#start2').prop('disabled', true);
            $('#start2').removeClass('btn-right-radius');
            $('#start2').addClass('btn-right-radius-disable');
        } else {
            $('#start2').prop('disabled', false);
            $('#start2').removeClass('btn-right-radius-disable');
            $('#start2').addClass('btn-right-radius');
        }

        $('#stop2').prop('disabled', true);
        $('#stop2').removeClass('btn-right-radius');
        $('#stop2').addClass('btn-right-radius-disable');

        $('#reset2').prop('disabled', false);
        $('#reset2').removeClass('btn-right-radius-disable');
        $('#reset2').addClass('btn-right-radius');
    });

    $('#reset2').on('click', function () {

        var i2;

        stock2 = [];

        //?X?g?b?N???X?g

        i2 = 0;

        while (i2 < 8) {

            stock2.push(i2);

            i2++;

        }

        num2 = 8; //?c???}?X

        time2 = 10; //time2r?X?s?[?h

        idx2 = null; //?????u

        $('#t2 td').removeClass('confirm2').removeClass('selected');

        if (isInit2 == true) {
            $('#start2').prop('disabled', true);
            $('#start2').removeClass('btn-right-radius');
            $('#start2').addClass('btn-right-radius-disable');
        } else {
            // start able
            $('#start2').prop('disabled', false);
            $('#start2').removeClass('btn-right-radius-disable');
            $('#start2').addClass('btn-right-radius');
        }

        $('#stop2').prop('disabled', true);
        $('#stop2').removeClass('btn-right-radius');
        $('#stop2').addClass('btn-right-radius-disable');

        $('#t2 td').addClass('init2');

    }).trigger('click');

});
