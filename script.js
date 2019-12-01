function changeBackColor() {
    // ?I???????????????B
    var confirmClass = document.getElementsByClassName('confirm');
    for (i = 0; i < confirmClass.length; i++) {
        if (confirmClass[i].style.backgroundColor == "white") {
            confirmClass[i].style.backgroundColor = "yellow";
        } else {
            confirmClass[i].style.backgroundColor = "white";
        }
    }

    // initClass???????��w?i????????????B
    var initClass = document.getElementsByClassName('init');
    for (i = 0; i < initClass.length; i++) {
        initClass[i].style.backgroundColor = "";
    }
}

setInterval(changeBackColor, 50);

$(function () {
    var idx, num, stock, swap, time, timerId;

    stock = void 0;

    num = void 0;

    idx = void 0;

    time = void 0;

    timerId = void 0;

    swap = void 0;

    var img1_1_Random, img1_2_Random, img1_3_Random, img1_4_Random, img1_5_Random, img1_6_Random, img1_7_Random, img1_8_Random;

    var isPushStart1_firstTime = true;

    var isInit = true;

    $('#allStart1').on('click', function () {
        isInit = false;
        // start able
        $('#start1').prop('disabled', false);
        $('#start1').removeClass('btn-right-radius-disable');
        $('#start1').addClass('btn-right-radius');

        // go disable
        $('#allStart1').prop('disabled', 'true');
        $('#allStart1').prop('value', '');
        $('#allStart1').removeClass('btn-circle-3d-small');
        $('#allStart1').addClass('btn-circle-3d-small-disable');

        isSetImg1_1_Interval = setInterval((function () {
            img1_1.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg1_2_Interval = setInterval((function () {
            img1_2.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg1_3_Interval = setInterval((function () {
            img1_3.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg1_4_Interval = setInterval((function () {
            img1_4.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg1_5_Interval = setInterval((function () {
            img1_5.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg1_6_Interval = setInterval((function () {
            img1_6.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg1_7_Interval = setInterval((function () {
            img1_7.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg1_8_Interval = setInterval((function () {
            img1_8.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);
    });

    $('#start1').on('click', function () {
        $('#t1 td').removeClass('init');

        timerId = setInterval((function () {

            idx = Math.floor(Math.random() * num);

            $('#t1 td').removeClass('selected').eq(stock[idx]).addClass('selected');

        }), time);

        $('#start1,#reset1').prop('disabled', true);
        $('#start1,#reset1').removeClass('btn-right-radius');
        $('#start1,#reset1').addClass('btn-right-radius-disable');

        $('#stop1').prop('disabled', false);
        $('#stop1').removeClass('btn-right-radius-disable');
        $('#stop1').addClass('btn-right-radius');

        if (isPushStart1_firstTime == true) {
            clearInterval(isSetImg1_1_Interval);
            clearInterval(isSetImg1_2_Interval);
            clearInterval(isSetImg1_3_Interval);
            clearInterval(isSetImg1_4_Interval);
            clearInterval(isSetImg1_5_Interval);
            clearInterval(isSetImg1_6_Interval);
            clearInterval(isSetImg1_7_Interval);
            clearInterval(isSetImg1_8_Interval);


            img1_1_Random = Math.floor(Math.random() * array.length);
            img1_1.src = "./" + array[img1_1_Random] + ".jpg";
            array.splice(array.indexOf(array[img1_1_Random]), 1);

            img1_2_Random = Math.floor(Math.random() * array.length);
            img1_2.src = "./" + array[img1_2_Random] + ".jpg";
            array.splice(array.indexOf(array[img1_2_Random]), 1);

            img1_3_Random = Math.floor(Math.random() * array.length);
            img1_3.src = "./" + array[img1_3_Random] + ".jpg";
            array.splice(array.indexOf(array[img1_3_Random]), 1);

            img1_4_Random = Math.floor(Math.random() * array.length);
            img1_4.src = "./" + array[img1_4_Random] + ".jpg";
            array.splice(array.indexOf(array[img1_4_Random]), 1);


            img1_5_Random = Math.floor(Math.random() * array.length);
            img1_5.src = "./" + array[img1_5_Random] + ".jpg";
            array.splice(array.indexOf(array[img1_5_Random]), 1);

            img1_6_Random = Math.floor(Math.random() * array.length);
            img1_6.src = "./" + array[img1_6_Random] + ".jpg";
            array.splice(array.indexOf(array[img1_6_Random]), 1);

            img1_7_Random = Math.floor(Math.random() * array.length);
            img1_7.src = "./" + array[img1_7_Random] + ".jpg";
            array.splice(array.indexOf(array[img1_7_Random]), 1);

            img1_8_Random = Math.floor(Math.random() * array.length);
            img1_8.src = "./" + array[img1_8_Random] + ".jpg";
            array.splice(array.indexOf(array[img1_8_Random]), 1);

            isPushStart1_firstTime = false;
        }
    });

    $('#stop1').on('click', function () {

        clearInterval(timerId);

        $('#t1 td').removeClass('init');

        $('#t1 td').eq(stock[idx]).addClass('confirm');

        num--;

        swap = stock[num];

        stock[num] = stock[idx];

        stock[idx] = swap;

        if (num <= 3) {
            $('#start1').prop('disabled', true);
            $('#start1').removeClass('btn-right-radius');
            $('#start1').addClass('btn-right-radius-disable');
        } else {
            $('#start1').prop('disabled', false);
            $('#start1').removeClass('btn-right-radius-disable');
            $('#start1').addClass('btn-right-radius');
        }

        $('#stop1').prop('disabled', true);
        $('#stop1').removeClass('btn-right-radius');
        $('#stop1').addClass('btn-right-radius-disable');

        $('#reset1').prop('disabled', false);
        $('#reset1').removeClass('btn-right-radius-disable');
        $('#reset1').addClass('btn-right-radius');
    });

    $('#reset1').on('click', function () {

        var i;

        stock = [];

        //?X?g?b?N???X?g

        i = 0;

        while (i < 8) {

            stock.push(i);

            i++;

        }

        num = 8; //?c???}?X

        time = 10; //timer?X?s?[?h

        idx = null; //?????u

        $('#t1 td').removeClass('confirm').removeClass('selected');

        if (isInit == true) {
            $('#start1').prop('disabled', true);
            $('#start1').removeClass('btn-right-radius');
            $('#start1').addClass('btn-right-radius-disable');
        } else {
            // start able
            $('#start1').prop('disabled', false);
            $('#start1').removeClass('btn-right-radius-disable');
            $('#start1').addClass('btn-right-radius');
        }
        $('#stop1').prop('disabled', true);
        $('#stop1').removeClass('btn-right-radius');
        $('#stop1').addClass('btn-right-radius-disable');

        $('#t1 td').addClass('init');

    }).trigger('click');

});
