function changeBackColor118() {
    // ?I???????????????B
    var confirm118Class = document.getElementsByClassName('confirm118');
    for (i = 0; i < confirm118Class.length; i++) {
        if (confirm118Class[i].style.backgroundColor == "white") {
            confirm118Class[i].style.backgroundColor = "yellow";
        } else {
            confirm118Class[i].style.backgroundColor = "white";
        }
    }

    // initClass???????��w?i????????????B
    var init118Class = document.getElementsByClassName('init118');
    for (i = 0; i < init118Class.length; i++) {
        init118Class[i].style.backgroundColor = "";
    }
}

setInterval(changeBackColor118, 50);

$(function () {
    var idx118, num118, stock118, swap118, time118, timerId118;

    stock118 = void 0;

    num118 = void 0;

    idx118 = void 0;

    time118 = void 0;

    timerId118 = void 0;

    swap118 = void 0;

    var img118_1_Random, img118_2_Random, img118_3_Random, img118_4_Random, img118_5_Random, img118_6_Random, img118_7_Random, img118_8_Random;

    var isPushStart118_firstTime = true;

    var isInit118 = true;

    $('#allStart118').on('click', function () {
        isInit118 = false;
        // start able
        $('#start118').prop('disabled', false);
        $('#start118').removeClass('btn-right-radius-disable');
        $('#start118').addClass('btn-right-radius');

        // go disable
        $('#allStart118').prop('disabled', 'true');
        $('#allStart118').prop('value', '');
        $('#allStart118').removeClass('btn-circle-3d-small');
        $('#allStart118').addClass('btn-circle-3d-small-disable');

        isSetImg118_1_Interval = setInterval((function () {
            img118_1.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg118_2_Interval = setInterval((function () {
            img118_2.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg118_3_Interval = setInterval((function () {
            img118_3.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg118_4_Interval = setInterval((function () {
            img118_4.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg118_5_Interval = setInterval((function () {
            img118_5.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg118_6_Interval = setInterval((function () {
            img118_6.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg118_7_Interval = setInterval((function () {
            img118_7.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);

        isSetImg118_8_Interval = setInterval((function () {
            img118_8.src = "./" + array[Math.floor(Math.random() * array.length)] + ".jpg";
        }), intervalSpeed);
    });

    $('#start118').on('click', function () {

        $('#t118 td').removeClass('init118');

        timerId118 = setInterval((function () {

            idx118 = Math.floor(Math.random() * num118);

            $('#t118 td').removeClass('selected').eq(stock118[idx118]).addClass('selected');

        }), time118);

        $('#start118,#reset118').prop('disabled', true);
        $('#start118,#reset118').removeClass('btn-right-radius');
        $('#start118,#reset118').addClass('btn-right-radius-disable');

        $('#stop118').prop('disabled', false);
        $('#stop118').removeClass('btn-right-radius-disable');
        $('#stop118').addClass('btn-right-radius');

        if (isPushStart118_firstTime == true) {
            clearInterval(isSetImg118_1_Interval);
            clearInterval(isSetImg118_2_Interval);
            clearInterval(isSetImg118_3_Interval);
            clearInterval(isSetImg118_4_Interval);
            clearInterval(isSetImg118_5_Interval);
            clearInterval(isSetImg118_6_Interval);
            clearInterval(isSetImg118_7_Interval);
            clearInterval(isSetImg118_8_Interval);


            img118_1_Random = Math.floor(Math.random() * array.length);
            img118_1.src = "./" + array[img118_1_Random] + ".jpg";
            array.splice(array.indexOf(array[img118_1_Random]), 1);

            img118_2_Random = Math.floor(Math.random() * array.length);
            img118_2.src = "./" + array[img118_2_Random] + ".jpg";
            array.splice(array.indexOf(array[img118_2_Random]), 1);

            img118_3_Random = Math.floor(Math.random() * array.length);
            img118_3.src = "./" + array[img118_3_Random] + ".jpg";
            array.splice(array.indexOf(array[img118_3_Random]), 1);

            img118_4_Random = Math.floor(Math.random() * array.length);
            img118_4.src = "./" + array[img118_4_Random] + ".jpg";
            array.splice(array.indexOf(array[img118_4_Random]), 1);


            img118_5_Random = Math.floor(Math.random() * array.length);
            img118_5.src = "./" + array[img118_5_Random] + ".jpg";
            array.splice(array.indexOf(array[img118_5_Random]), 1);

            img118_6_Random = Math.floor(Math.random() * array.length);
            img118_6.src = "./" + array[img118_6_Random] + ".jpg";
            array.splice(array.indexOf(array[img118_6_Random]), 1);

            img118_7_Random = Math.floor(Math.random() * array.length);
            img118_7.src = "./" + array[img118_7_Random] + ".jpg";
            array.splice(array.indexOf(array[img118_7_Random]), 1);

            img118_8_Random = Math.floor(Math.random() * array.length);
            img118_8.src = "./" + array[img118_8_Random] + ".jpg";
            array.splice(array.indexOf(array[img118_8_Random]), 1);

            isPushStart118_firstTime = false;
        }
    });

    $('#stop118').on('click', function () {

        clearInterval(timerId118);

        $('#t118 td').removeClass('init118');

        $('#t118 td').eq(stock118[idx118]).addClass('confirm118');

        num118--;

        swap118 = stock118[num118];

        stock118[num118] = stock118[idx118];

        stock118[idx118] = swap118;

        if (num118 <= 5) {
            $('#start118').prop('disabled', true);
            $('#start118').removeClass('btn-right-radius');
            $('#start118').addClass('btn-right-radius-disable');
        } else {
            $('#start118').prop('disabled', false);
            $('#start118').removeClass('btn-right-radius-disable');
            $('#start118').addClass('btn-right-radius');
        }

        $('#stop118').prop('disabled', true);
        $('#stop118').removeClass('btn-right-radius');
        $('#stop118').addClass('btn-right-radius-disable');

        $('#reset118').prop('disabled', false);
        $('#reset118').removeClass('btn-right-radius-disable');
        $('#reset118').addClass('btn-right-radius');
    });

    $('#reset118').on('click', function () {

        var i118;

        stock118 = [];

        //?X?g?b?N???X?g

        i118 = 0;

        while (i118 < 8) {

            stock118.push(i118);

            i118++;

        }

        num118 = 8; //?c???}?X

        time118 = 10; //time118r?X?s?[?h

        idx118 = null; //?????u

        $('#t118 td').removeClass('confirm118').removeClass('selected');

        if (isInit118 == true) {
            $('#start118').prop('disabled', true);
            $('#start118').removeClass('btn-right-radius');
            $('#start118').addClass('btn-right-radius-disable');
        } else {
            // start able
            $('#start118').prop('disabled', false);
            $('#start118').removeClass('btn-right-radius-disable');
            $('#start118').addClass('btn-right-radius');
        }


        $('#stop118').prop('disabled', true);
        $('#stop118').removeClass('btn-right-radius');
        $('#stop118').addClass('btn-right-radius-disable');

        $('#t118 td').addClass('init118');

    }).trigger('click');

});
