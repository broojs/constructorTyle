window.onload = function () {

    $('.pr').fadeOut().end().delay(500).fadeOut('slow'); //прелоадер

    //Занесение в переменные Js  элементы конструктора 

    let btnSquare = this.document.getElementById('btnSquare'),
        square = this.document.getElementById('square'),
        square1 = this.document.getElementById('square1'),
        btnTriangle = this.document.getElementById('btnTriangle'),
        triangle = this.document.getElementById('triangle'),
        triangle1 = this.document.getElementById('triangle1'),
        btnHexagon = this.document.getElementById('btnHexagon'),
        hexagon = this.document.getElementById('hexagon'),
        btn1Texture = this.document.getElementById('btn1Texture'),
        texture1 = this.document.createElement('img'),

        btnBlackColor = this.document.getElementById('btnBlackColor'),
        btnRedColor = this.document.getElementById('btnRedColor'),
        btnBrownColor = this.document.getElementById('btnBrownColor'),

        plus = this.document.getElementById('plus'),
        minus = this.document.getElementById('minus'),
        totalAmount = this.document.getElementById('totalAmount'),
        hexagonWrap = $('.hexagonWrap');

    //скрытие шагов конструктора

    $('.color').hide();
    $('.texture').hide();
    $('.form').hide();
    $('.amount').hide();
    $('.material').hide();
    $('.info_total').hide();
    $('#or').hide();
    $('.calc_square').hide();
    $('.total').hide();
    $('.addImage').hide();




    //переменные для контроля выбора плиток
    let control_Type,
        infoType;

    $('#type1').click(function () { // обработчик события при нажатии на 1ый тип плитки
        control_Type = 1; // установлено значение переменной для контроля клика
        infoType = 'Камень';

        $('#btn1Texture').attr('src', 'img/Камень/Плитняк.jpg');
        $('#btn2Texture').attr('src', 'img/Камень/Кирпич Рельефный.jpg');
        $('#btn3Texture').attr('src', 'img/Камень/Кедровый скол.jpg');
        $('#btn4Texture').attr('src', 'img/Камень/Кирпич Амран.jpg');
        $('#btn5Texture').attr('src', 'img/Камень/Кирпич Гжельский.jpg');
        $('#btn6Texture').attr('src', 'img/Камень/Кирпич Клинкер.jpg');

        if (control_Type == 1) { //если был клик по 1ому типу, то  в итоговую форму заносится информация о выборе
            $('#getType').text('Камень');
        }

        // при клике скрывается "выбор типа" и открывается 2ой шаг "выбор материала"
        $('.material').show(1000);
        $('.type').hide(1000);
        $('.steps').eq(1).removeClass('stepsDisabled') // открытие 2ого шага в прогрессбаре
    });


    $('#type2').click(function () { // обработчик события при нажатии на 2ой тип плитки
        control_Type = 2;
        infoType = 'Напольная плитка';
        $('.material').show(1000);
        $('.type').hide(1000);
        $('.steps').eq(1).removeClass('stepsDisabled')

        $('#btn1Texture').attr('src', 'img/Напольная плитка/Бут.jpg');
        $('#btn2Texture').attr('src', 'img/Напольная плитка/Византия.jpg');
        $('#btn3Texture').attr('src', 'img/Напольная плитка/Грот.jpg');
        $('#btn4Texture').attr('src', 'img/Напольная плитка/Сланец Классический.jpg');
        $('#btn5Texture').attr('src', 'img/Напольная плитка/Сланец Тонкослойный.jpg');
        $('#btn6Texture').attr('src', 'img/Напольная плитка/Старый замок.jpg');


        if (control_Type == 2) {
            $('#getType').text('Напольная плитка');
        }
    });

    $('#type3').click(function () { // обработчик события при нажатии на 3ий тип плитки
        control_Type = 3;
        infoType = 'Декор';
        $('.material').show(1000);
        $('.type').hide(1000);
        $('.steps').eq(1).removeClass('stepsDisabled')

        $('#btn1Texture').attr('src', 'img/Декор/Бабочка.jpg');
        $('#btn2Texture').attr('src', 'img/Декор/Ваза.jpg');
        $('#btn3Texture').attr('src', 'img/Декор/Египет.jpg');
        $('#btn4Texture').attr('src', 'img/Декор/Звезда.jpg');
        $('#btn5Texture').attr('src', 'img/Декор/Пантера.jpg');
        $('#btn6Texture').attr('src', 'img/Декор/Папоротник.jpg');

        if (control_Type == 3) {
            $('#getType').text('Декор');
        }
    });

    $('#type4').click(function () { // обработчик события при нажатии на 3ий тип плитки
        control_Type = 4;
        infoType = 'Настенная плитка';
        $('.material').show(1000);
        $('.type').hide(1000);
        $('.steps').eq(1).removeClass('stepsDisabled')

        $('#btn1Texture').attr('src', 'img/Настенная плитка/Керамин Афина.jpg');
        $('#btn2Texture').attr('src', 'img/Настенная плитка/НЗКМ Laura.jpg');
        $('#btn3Texture').attr('src', 'img/Настенная плитка/KERAMA MARAZZI.jpg');
        $('#btn4Texture').attr('src', 'img/Настенная плитка/GLOBAL TILE.jpg');
        $('#btn5Texture').attr('src', 'img/Настенная плитка/GLOBAL TILE Adele Versale.jpg');
        $('#btn6Texture').attr('src', 'img/Настенная плитка/AZORY Валькирия.jpg');

        if (control_Type == 4) {
            $('#getType').text('Настенная плитка');
        }
    });

    //дальнейшие действия схожи с действиями при выборе типа плитки
    //переменные для контроля выбора плиток
    let control_material,
        infoMaterial;
    $('#material1').click(function () { // обработчик выбора материала плитки
        control_material = 1;
        infoMaterial = 'Керамогранит'
        $('.form').show(1000);
        $('.material').hide(1000);
        $('.steps').eq(2).removeClass('stepsDisabled')


        if (control_material == 1) { //если был клик по 1ому варианту, то  в итоговую форму заносится информация о выборе
            $('#getMaterial').text('Керамогранит');
        }
    });

    $('#material2').click(function () {
        control_material = 2;
        infoMaterial = 'Клинкер'
        $('.form').show(1000);
        $('.material').hide(1000);
        $('.steps').eq(2).removeClass('stepsDisabled')

        if (control_material == 2) {
            $('#getMaterial').text('Клинкер');
        }
    });

    $('#material3').click(function () {
        control_material = 3;
        infoMaterial = 'Керамическая плитка'
        $('.form').show(1000);
        $('.material').hide(1000);
        $('.steps').eq(2).removeClass('stepsDisabled')

        if (control_material == 3) {
            $('#getMaterial').text('Керамическая плитка');
        }

    });

    let control_form,
        infoForm;

    btnSquare.addEventListener('click', function () {

        control_form = 1;

        /* если клик был по форме квадрату, то форма квадрата становится "блочной", 
        остальные остаются с display: none*/

        square.style.display = 'block';
        triangle.style.display = 'none';
        hexagon.style.display = 'none';

        if (control_texture == 1) {
            square1.append(texture1);
        } else if (control_texture == 2) {
            square1.append(texture1);
        } else {
            square1.append(texture1);
        }

        //при клике по форме, открывается 4ый шаг "выбор цвета или текстуры, а "выбор формы" становится скрытым

        $('.color').show(1000);
        $('#or').show(1000);
        $('.texture').show(1000);
        $('.addImage').show(1000);
        $('.form').hide(1000);
        $('.steps').eq(3).removeClass('stepsDisabled')

        if (control_form == 1) {
            $('#getForm').text('Квадрат');
            infoForm = 'Квадрат';
        }

    });


    btnTriangle.addEventListener('click', function () {

        control_form = 2;
        infoForm = 'Треугольник';

        triangle.style.display = 'block';
        square.style.display = 'none';
        hexagon.style.display = 'none';

        if (control_texture == 1) {
            triangle1.append(texture1);
        } else if (control_texture == 2) {
            triangle1.append(texture1);
        } else {
            triangle1.append(texture1);
        }

        $('.color').show(1000);
        $('#or').show(1000);
        $('.texture').show(1000);
        $('.form').hide(1000);
        $('.addImage').show(1000);
        $('.steps').eq(3).removeClass('stepsDisabled')

        if (control_form == 2) {
            $('#getForm').text('Треугольник');
        }

    });

    btnHexagon.addEventListener('click', function () {

        control_form = 3;
        infoForm = 'Шестиугольник';

        hexagon.style.display = 'block';
        triangle.style.display = 'none';
        square.style.display = 'none';


        if (control_texture == 1) {
            hexagonWrap.append(texture1);
        } else if (control_texture == 2) {
            hexagonWrap.append(texture1);
        } else {
            hexagonWrap.append(texture1);
        }

        $('.color').show(1000);
        $('#or').show(1000);
        $('.texture').show(1000);
        $('.form').hide(1000);
        $('.addImage').show(1000);
        $('.steps').eq(3).removeClass('stepsDisabled')

        if (control_form == 3) {
            $('#getForm').text('Шестиугольник');
        }

    });


    let color,
        InfoColor;
    btnBlackColor.addEventListener('click', function () {

        color = 3;
        InfoColor = 'Чёрный';

        square.style.fill = 'black';
        triangle.style.fill = 'black'
        hexagon.style.fill = 'black';
        texture1.remove();
        $('.blah').attr('src', " ");

        if (color == 1) {
            $('#getColor').text('Чёрный');
            $('#checkTexture').fadeOut();
            $('#checkColor').fadeIn()
        }

    });

    btnGrayColor.addEventListener('click', function () {

        color = 3;
        InfoColor = 'Серый';

        square.style.fill = 'gray';
        triangle.style.fill = 'gray'
        hexagon.style.fill = 'gray';
        texture1.remove();
        $('.blah').attr('src', " ");

        if (color == 2) {
            $('#getColor').text('Чёрный');
            $('#checkTexture').fadeOut();
            $('#checkColor').fadeIn();
        }

    });

    btnWhiteColor.addEventListener('click', function () {

        color = 3;
        InfoColor = 'Белый';

        square.style.fill = 'white';
        triangle.style.fill = 'white'
        hexagon.style.fill = 'white';
        texture1.remove();
        $('.blah').attr('src', " ");

        if (color == 3) {
            $('#getColor').text('Белый');
            $('#checkTexture').fadeOut();
            $('#checkColor').fadeIn();
        }

    });

    btnGreenColor.addEventListener('click', function () {

        color = 3;
        InfoColor = 'Зелёный';

        square.style.fill = 'green';
        triangle.style.fill = 'green'
        hexagon.style.fill = 'green';
        texture1.remove();
        $('.blah').attr('src', " ");

        if (color == 4) {
            $('#checkTexture').fadeOut();
            $('#checkColor').fadeIn();
        }

    });

    btnRedColor.addEventListener('click', function () {

        color = 3;
        InfoColor = 'Красный'

        square.style.fill = 'red';
        triangle.style.fill = 'red';
        hexagon.style.fill = 'red';
        texture1.remove();
        $('.blah').attr('src', " ");

        if (color == 5) {
            $('#checkTexture').fadeOut();
            $('#checkColor').fadeIn();
        }

    });

    btnBrownColor.addEventListener('click', function () {

        color = 3;
        InfoColor = 'Коричневый'

        square.style.fill = 'brown';
        triangle.style.fill = 'brown';
        hexagon.style.fill = 'brown';
        texture1.remove();
        $('.blah').attr('src', " ");

        if (color == 6) {
            $('#checkTexture').fadeOut();
            $('#checkColor').fadeIn();
        }

    });




    let control_texture,
        infoTexture;

    btn1Texture.addEventListener('click', function () { // обработчик события для выбора текстуры

        control_texture = 3;


        if (control_form == 1 && control_Type == 1) { // суть значения переменных для контроля образа  
            texture1.src = 'img/Камень/Плитняк.jpg'; // при клике меняется значение атрибута 
            square1.append(texture1); // к выводу результата добавляется значение текстуры
            $('#getTexture').text('Плитняк');
            infoTexture = 'Плитняк'; // вывод в итоговую форму, выбранных элементов плитки
        } else if (control_form == 2 && control_Type == 1) {
            texture1.src = 'img/Камень/Плитняк.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Плитняк');
            infoTexture = 'Плитняк';
        } else if (control_form == 3 && control_Type == 1) {
            texture1.src = 'img/Камень/Плитняк.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Плитняк');
            infoTexture = 'Плитняк';
        } else if (control_form == 1 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Бут.jpg';
            square1.append(texture1);
            $('#getTexture').text('Бут');
            infoTexture = 'Бут';
        } else if (control_form == 2 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Бут.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Бут');
            infoTexture = 'Бут';
        } else if (control_form == 3 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Бут.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Бут');
            infoTexture = 'Бут';
        } else if (control_form == 1 && control_Type == 3) {
            texture1.src = 'img/Декор/Бабочка.jpg';
            square1.append(texture1);
            $('#getTexture').text('Бабочка');
            infoTexture = 'Бабочка';
        } else if (control_form == 2 && control_Type == 3) {
            texture1.src = 'img/Декор/Бабочка.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Бабочка');
            infoTexture = 'Бабочка';
        } else if (control_form == 3 && control_Type == 3) {
            texture1.src = 'img/Декор/Бабочка.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Бабочка');
            infoTexture = 'Бабочка';
        } else if (control_form == 1 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/Керамин Афина.jpg';
            square1.append(texture1);
            $('#getTexture').text('Керамин Афина');
            infoTexture = 'Керамин Афина';
        } else if (control_form == 2 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/Керамин Афина.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Керамин Афина');
            infoTexture = 'Керамин Афина';
        } else if (control_form == 3 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/Керамин Афина.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Керамин Афина');
            infoTexture = 'Керамин Афина';
        } 

        hexagon.style.fill = 'transparent'; // заливка свг элемента становится прозрачной
        $('#checkTexture').fadeIn();
        $('#checkColor').fadeOut();

    });

    $('#btn2Texture').click(function () {

        control_texture = 3;

        if (control_form == 1 && control_Type == 1) {
            texture1.src = 'img/Камень/Кирпич Рельефный.jpg';
            square1.append(texture1);
            $('#getTexture').text('Кирпич рельефный');
            infoTexture = 'Кирпич рельефный';
        } else if (control_form == 2 && control_Type == 1) {
            texture1.src = 'img/Камень/Кирпич Рельефный.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Кирпич рельефный');
            infoTexture = 'Кирпич рельефный';
        } else if (control_form == 3 && control_Type == 1) {
            texture1.src = 'img/Камень/Кирпич Рельефный.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Кирпич рельефный');
            infoTexture = 'Кирпич рельефный';
        } else if (control_form == 1 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Византия.jpg';
            square1.append(texture1);
            $('#getTexture').text('Византия');
            infoTexture = 'Византия';
        } else if (control_form == 2 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Византия.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Византия');
            infoTexture = 'Византия';
        } else if (control_form == 3 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Византия.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Византия');
            infoTexture = 'Византия';
        } else if (control_form == 1 && control_Type == 3) {
            texture1.src = 'img/Декор/Ваза.jpg';
            square1.append(texture1);
            $('#getTexture').text('Ваза');
            infoTexture = 'Ваза';
        } else if (control_form == 2 && control_Type == 3) {
            texture1.src = 'img/Декор/Ваза.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Ваза');
            infoTexture = 'Ваза';
        } else if (control_form == 3 && control_Type == 3) {
            texture1.src = 'img/Декор/Ваза.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Ваза');
            infoTexture = 'Ваза';
        } else if (control_form == 1 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/НЗКМ Laura.jpg';
            square1.append(texture1);
            $('#getTexture').text('НЗКМ Laura');
            infoTexture = 'НЗКМ Laura';
        } else if (control_form == 2 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/НЗКМ Laura.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('НЗКМ Laura');
            infoTexture = 'НЗКМ Laura';
        } else if (control_form == 3 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/НЗКМ Laura.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('НЗКМ Laura');
            infoTexture = 'НЗКМ Laura';
        } 
        hexagon.style.fill = 'transparent';
        $('#checkTexture').fadeIn();
        $('#checkColor').fadeOut();
    });

    $('#btn3Texture').click(function () {

        control_texture = 3;

        if (control_form == 1 && control_Type == 1) {
            texture1.src = 'img/Камень/Кедровый скол.jpg';
            square1.append(texture1);
            $('#getTexture').text('Кедровый скол');
            infoTexture = 'Кедровый скол';
        } else if (control_form == 2 && control_Type == 1) {
            texture1.src = 'img/Камень/Кедровый скол.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Кедровый скол');
            infoTexture = 'Кедровый скол';
        } else if (control_form == 3 && control_Type == 1) {
            texture1.src = 'img/Камень/Кедровый скол.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Кедровый скол');
            infoTexture = 'Кедровый скол';
        } else if (control_form == 1 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Грот.jpg';
            square1.append(texture1);
            $('#getTexture').text('Грот');
            infoTexture = 'Грот';
        } else if (control_form == 2 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Грот.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Грот');
            infoTexture = 'Грот';
        } else if (control_form == 3 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Грот.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Грот');
            infoTexture = 'Грот';
        } else if (control_form == 1 && control_Type == 3) {
            texture1.src = 'img/Декор/Египет.jpg';
            square1.append(texture1);
            $('#getTexture').text('Египет');
            infoTexture = 'Египет';
        } else if (control_form == 2 && control_Type == 3) {
            texture1.src = 'img/Декор/Египет.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Египет');
            infoTexture = 'Египет';
        } else if (control_form == 3 && control_Type == 3) {
            texture1.src = 'img/Декор/Египет.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Египет');
            infoTexture = 'Египет';
        } else if (control_form == 1 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/KERAMA MARAZZI.jpg';
            square1.append(texture1);
            $('#getTexture').text('KERAMA MARAZZI');
            infoTexture = 'KERAMA MARAZZI';
        } else if (control_form == 2 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/KERAMA MARAZZI.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('KERAMA MARAZZI');
            infoTexture = 'KERAMA MARAZZI';
        } else if (control_form == 3 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/KERAMA MARAZZI.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('KERAMA MARAZZI');
            infoTexture = 'KERAMA MARAZZI';
        } 
        hexagon.style.fill = 'transparent';
        $('#checkTexture').fadeIn();
        $('#checkColor').fadeOut();

    });

    $('#btn4Texture').click(function () {

        control_texture = 3;

        if (control_form == 1 && control_Type == 1) {
            texture1.src = 'img/Камень/Кирпич Амран.jpg';
            square1.append(texture1);
            $('#getTexture').text('Кирпич Амран');
            infoTexture = 'Кирпич Амран';
        } else if (control_form == 2 && control_Type == 1) {
            texture1.src = 'img/Камень/Кирпич Амран.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Кирпич Амран');
            infoTexture = 'Кирпич Амран';
        } else if (control_form == 3 && control_Type == 1) {
            texture1.src = 'img/Камень/Кирпич Амран.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Кирпич Амран');
            infoTexture = 'Кирпич Амран';
        } else if (control_form == 1 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Сланец Классический.jpg';
            square1.append(texture1);
            $('#getTexture').text('Сланец Классический');
            infoTexture = 'Сланец Классический';
        } else if (control_form == 2 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Сланец Классический.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Сланец Классический');
            infoTexture = 'Сланец Классический';
        } else if (control_form == 3 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Сланец Классический.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Сланец Классический');
            infoTexture = 'Сланец Классический';
        } else if (control_form == 1 && control_Type == 3) {
            texture1.src = 'img/Декор/Звезда.jpg';
            square1.append(texture1);
            $('#getTexture').text('Звезда');
            infoTexture = 'Звезда';
        } else if (control_form == 2 && control_Type == 3) {
            texture1.src = 'img/Декор/Звезда.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Сланец Классический');
            infoTexture = 'Звезда';
        } else if (control_form == 3 && control_Type == 3) {
            texture1.src = 'img/Декор/Звезда.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Сланец Классический');
            infoTexture = 'Звезда';
        } else if (control_form == 1 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/GLOBAL TILE.jpg';
            square1.append(texture1);
            $('#getTexture').text('GLOBAL TILE');
            infoTexture = 'GLOBAL TILE';
        } else if (control_form == 2 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/GLOBAL TILE.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('GLOBAL TILE');
            infoTexture = 'GLOBAL TILE';
        } else if (control_form == 3 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/GLOBAL TILE.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('GLOBAL TILE');
            infoTexture = 'GLOBAL TILE';
        }
        hexagon.style.fill = 'transparent';
        $('#checkTexture').fadeIn();
        $('#checkColor').fadeOut();

    });

    $('#btn5Texture').click(function () {

        control_texture = 3;

        if (control_form == 1 && control_Type == 1) {
            texture1.src = 'img/Камень/Кирпич Гжельский.jpg';
            square1.append(texture1);
            $('#getTexture').text('Кирпич Гжельский');
            infoTexture = 'Кирпич Гжельский';
        } else if (control_form == 2 && control_Type == 1) {
            texture1.src = 'img/Камень/Кирпич Гжельский.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Кирпич Гжельский');
            infoTexture = 'Кирпич Гжельский';
        } else if (control_form == 3 && control_Type == 1) {
            texture1.src = 'img/Камень/Кирпич Гжельский.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Кирпич Гжельский');
            infoTexture = 'Кирпич Гжельский';
        } else if (control_form == 1 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Сланец Тонкослойный.jpg';
            square1.append(texture1);
            $('#getTexture').text('Сланец Тонкослойный');
            infoTexture = 'Сланец Тонкослойный';
        } else if (control_form == 2 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Сланец Тонкослойный.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Сланец Тонкослойный');
            infoTexture = 'Сланец Тонкослойный';
        } else if (control_form == 3 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Сланец Тонкослойный.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Сланец Тонкослойный');
            infoTexture = 'Сланец Тонкослойный';
        } else if (control_form == 1 && control_Type == 3) {
            texture1.src = 'img/Декор/Пантера.jpg';
            square1.append(texture1);
            $('#getTexture').text('Пантера');
            infoTexture = 'Пантера';
        } else if (control_form == 2 && control_Type == 3) {
            texture1.src = 'img/Декор/Пантера.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Пантера');
            infoTexture = 'Пантера';
        } else if (control_form == 3 && control_Type == 3) {
            texture1.src = 'img/Декор/Пантера.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Пантера');
            infoTexture = 'Пантера';
        } else if (control_form == 1 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/GLOBAL TILE Adele Versale.jpg';
            square1.append(texture1);
            $('#getTexture').text('GLOBAL TILE Adele Versale');
            infoTexture = 'GLOBAL TILE Adele Versale';
        } else if (control_form == 2 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/GLOBAL TILE Adele Versale.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('GLOBAL TILE Adele Versale');
            infoTexture = 'GLOBAL TILE Adele Versale';
        } else if (control_form == 3 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/GLOBAL TILE Adele Versale.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('GLOBAL TILE Adele Versale');
            infoTexture = 'GLOBAL TILE Adele Versale';
        }

        hexagon.style.fill = 'transparent';
        $('#checkTexture').fadeIn();
        $('#checkColor').fadeOut();

    });


    $('#btn6Texture').click(function () {

        control_texture = 3;

        if (control_form == 1 && control_Type == 1) {
            texture1.src = 'img/Камень/Кирпич Клинкер.jpg';
            square1.append(texture1);
            $('#getTexture').text('Кирпич Клинкер');
            infoTexture = 'Кирпич Клинкер';
        } else if (control_form == 2 && control_Type == 1) {
            texture1.src = 'img/Камень/Кирпич Клинкер.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Кирпич Клинкер');
            infoTexture = 'Кирпич Клинкер';
        } else if (control_form == 3 && control_Type == 1) {
            texture1.src = 'img/Камень/Кирпич Клинкер.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Кирпич Клинкер');
            infoTexture = 'Кирпич Клинкер';
        } else if (control_form == 1 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Старый Замок.jpg';
            square1.append(texture1);
            $('#getTexture').text('Старый замок');
            infoTexture = 'Старый замок';
        } else if (control_form == 2 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Старый Замок.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Старый замок');
            infoTexture = 'Старый замок';
        } else if (control_form == 3 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Старый Замок.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Старый замок');
            infoTexture = 'Старый замок';
        } else if (control_form == 1 && control_Type == 3) {
            texture1.src = 'img/Декор/Папоротник.jpg';
            square1.append(texture1);
            $('#getTexture').text('Папоротник');
            infoTexture = 'Папоротник';
        } else if (control_form == 2 && control_Type == 3) {
            texture1.src = 'img/Декор/Папоротник.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('Папоротник');
            infoTexture = 'Папоротник';
        } else if (control_form == 3 && control_Type == 3) {
            texture1.src = 'img/Декор/Папоротник.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('Папоротник');
            infoTexture = 'Папоротник';
        } else if (control_form == 1 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/AZORY Валькирия.jpg';
            square1.append(texture1);
            $('#getTexture').text('AZORY Валькирия');
            infoTexture = 'AZORY Валькирия';
        } else if (control_form == 2 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/AZORY Валькирия.jpg';
            triangle1.append(texture1);
            $('#getTexture').text('AZORY Валькирия');
            infoTexture = 'AZORY Валькирия';
        } else if (control_form == 3 && control_Type == 4) {
            texture1.src = 'img/Настенная плитка/AZORY Валькирия.jpg';
            hexagonWrap.append(texture1);
            $('#getTexture').text('AZORY Валькирия');
            infoTexture = 'AZORY Валькирия';
        }

        hexagon.style.fill = 'transparent';
        $('#checkTexture').fadeIn();
        $('#checkColor').fadeOut();
        
    });



    $('#sixStep').click(function () { // при клике открывается 5ый шаг "выбор ширины и длины плитки"
    
    if (control_texture == 3 || color == 3) {
        $('.info_total').show(1000);
        $('.color').hide(1000);
        $('#or').hide(1000);
        $('.texture').hide(1000);
        $('.addImage').hide(1000);
        $('.steps').eq(4).removeClass('stepsDisabled')

    } else {
        alert ('Выберите цвет или текстуру плитки!');
    }

       

        

    });

    let infoWidth,
        infoHeight;
    $('#sevenStep').click(function () { // при клике открывается 6ой шаг "рассчёт плиток на площадь"

        $('.calc_square').show(1000);
        $('.info_total').hide(1000)
        $('.steps').eq(5).removeClass('stepsDisabled');
        //получаю значение полей ширины и высоты
        let a = $('#btnWidth').val();
        let b = $('#btnHeight').val();
        // присваиваю их в итоговую форму
        $('#getWidth').text(a);
        $('#getHeight').text(b);

        infoWidth = a + 'мм';
        infoHeight = b + 'мм';
    });

    let infoSquare;
    $('#eightStep').click(function () { // при клике открывается 7ой шаг "выбор количества"

        $('.calc_square').hide(1000);
        $('.amount').show(1000);
        $('.steps').eq(6).removeClass('stepsDisabled')
        //получаю значение поля "площадь участка"
        let c = $('#btnWidthSquare').val();
        // присваиваю его в итоговую форму
        $('#getSquare').text(c);
        infoSquare = c + 'м2';
    });

    let control_amount = $('#totalAmount').val(),
        infoAmount;

    $('#finishStep').click(function () { // при клике открывается итоговая форма"

        let control_amount = $('#totalAmount').val();
        if (control_amount < 1) {
            alert("Количество должно быть больше 0!");
        } else {
            $('.total').show(1000);
        $('.amount').hide(1000);

        let d = $('totalAmount').val();
        $('#getAmount').text(d);
        $('#getAmount').text(control_amount);
        infoAmount = control_amount;
        }
        
    });

    $("#totalAmount").keypress(function (event) { // функция для ввода только цифр
        event = event || window.event;
        if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))
            return false;
    });

    $("#btnWidthSquare").keypress(function (event) { // функция для ввода только цифр
        event = event || window.event;
        if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))
            return false;
    });


    //amount//

    
    plus.addEventListener('click', function () {
        let control_amount = $('#totalAmount').val();
        control_amount++;
        $('#totalAmount').val(control_amount);
    });

    minus.addEventListener('click', function () {
        let control_amount = $('#totalAmount').val();
        control_amount--;
        if (control_amount < 1) {
            control_amount = 1;
        }
   
        $('#totalAmount').val(control_amount);
    });

    //добавления класса иконкам шагов
    $('.steps').eq(1).addClass('stepsDisabled')
    $('.steps').eq(2).addClass('stepsDisabled')
    $('.steps').eq(3).addClass('stepsDisabled')
    $('.steps').eq(4).addClass('stepsDisabled')
    $('.steps').eq(5).addClass('stepsDisabled')
    $('.steps').eq(6).addClass('stepsDisabled')


    $('.steps').eq(0).click(function () { // при клике на иконку шага, открывается тот шаг, на который был произведён клик
        $('.color').hide(1000);
        $('.texture').hide(1000);
        $('.form').hide(1000);
        $('.amount').hide(1000);
        $('.material').hide(1000);
        $('.info_total').hide(1000);
        $('#or').hide(1000);
        $('.calc_square').hide(1000);
        $('.total').hide(1000);
        $('.type').show(1000);
        $('.addImage').hide(1000);
    });



    $('.steps').eq(1).click(function () {
        $('.color').hide(1000);
        $('.texture').hide(1000);
        $('.form').hide(1000);
        $('.amount').hide(1000);
        $('.material').show(1000);
        $('.info_total').hide(1000);
        $('#or').hide(1000);
        $('.calc_square').hide(1000);
        $('.total').hide(1000);
        $('.type').hide(1000);
        $('.addImage').hide(1000);
    });



    $('.steps').eq(2).click(function () {
        $('.color').hide(1000);
        $('.texture').hide(1000);
        $('.form').show(1000);
        $('.amount').hide(1000);
        $('.material').hide(1000);
        $('.info_total').hide(1000);
        $('#or').hide(1000);
        $('.calc_square').hide(1000);
        $('.total').hide(1000);
        $('.type').hide(1000);
        $('.addImage').hide(1000);
    });

    $('.steps').eq(3).click(function () {
        $('.color').show(1000);
        $('.texture').show(1000);
        $('.form').hide(1000);
        $('.amount').hide(1000);
        $('.material').hide(1000);
        $('.info_total').hide(1000);
        $('#or').show(1000);
        $('.calc_square').hide(1000);
        $('.total').hide(1000);
        $('.type').hide(1000);
        $('.addImage').show(1000);

    });

    $('.steps').eq(4).click(function () {
        $('.color').hide(1000);
        $('.texture').hide(1000);
        $('.form').hide(1000);
        $('.amount').hide(1000);
        $('.material').hide(1000);
        $('.info_total').show(1000);
        $('#or').hide(1000);
        $('.calc_square').hide(1000);
        $('.total').hide(1000);
        $('.type').hide(1000);
        $('.addImage').hide(1000);

    });

    $('.steps').eq(5).click(function () {
        $('.color').hide(1000);
        $('.texture').hide(1000);
        $('.form').hide(1000);
        $('.amount').hide(1000);
        $('.material').hide(1000);
        $('.info_total').hide(1000);
        $('#or').hide(1000);
        $('.calc_square').show(1000);
        $('.total').hide(1000);
        $('.type').hide(1000);
        $('.addImage').hide(1000);
    });

    $('.steps').eq(6).click(function () {
        $('.color').hide(1000);
        $('.texture').hide(1000);
        $('.form').hide(1000);
        $('.amount').show(1000);
        $('.material').hide(1000);
        $('.info_total').hide(1000);
        $('#or').hide(1000);
        $('.calc_square').hide(1000);
        $('.total').hide(1000);
        $('.type').hide(1000);
        $('.addImage').hide(1000);
    });

    /*///////////////////Total Info/////////////////////////////*/

    $('.indication').fadeOut();

    $('#send').click(function () { // отправка данных на сервер


       

            if ($('#userphone').val() == "" || $('#useremail').val() == "" || $('#username').val() == "") {
            
                $('.indication').fadeIn(1000);
                
           // } else if{


            } else {
            
        

        html2canvas(document.getElementById("contScreen")).then(function (canvas) { // функция создания скриншота

            let my_screen = btoa(canvas.toDataURL('png')); // кодирую изображение



            let data = {

                'screen': my_screen,
                'name': infoForm,

            }
            // получаю значение с формы для заказа плитки
            let username = $('#username').val();
            let usermail = $('#usermail').val();
            let userphone = $('#userphone').val();


            $.ajax({
                method: "POST",
                url: "main.php",
                dataType: "json",
                data: {
                    "text": JSON.stringify({
                        'tForm': data.infoForm,
                    }),
                    "canvas": atob(data.screen),
                    "username": username,
                    "usermail": usermail,
                    "userphone": userphone,
                    "infoType": infoType,
                    "infoMaterial": infoMaterial,
                    "infoForm": infoForm,
                    "infoTexture": infoTexture,
                    "infoWidth": infoWidth,
                    'infoHeight': infoHeight,
                    'infoSquare': infoSquare,
                    'infoAmount': infoAmount,
                },
                success: $('#resultOrder').text('Заявка принята! Ожидайте звонка.'),

                error: function () {
                    $('#resultOrder').css({
                        "color": "red",
                    });
                    $('#resultOrder').text('Заявка не отправлена! Попробуйте позже.');
                }
            });
        });
            }
    });


    //////////////////////Modal window//////////////////////

    $('#openForm').click(function () {

        $('.send').fadeIn();
        $('.send').addClass('disabled');
        $('body').css('overflow', 'hidden');
    });

    //закрыть 

    $('.js-close-campaign').click(function () {
        $('.send').fadeOut();
        $('body').css('overflow', '');
    });

    // закрыть по клику вне окна
    $(document).mouseup(function (e) {
        let popup = $('#content');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.send').fadeOut();

        }
        $('body').css('overflow', '');
    });




    //change sizes//

    document.getElementById("btnWidth").addEventListener('input', sizeWPic);

    function sizeWPic() {
        let btnWidth = document.getElementById("btnWidth").value; // получаю значение ширины
        let wSQ = document.getElementById('square');
        let wTriangle = document.getElementById('triangle');
        let wHexagon = document.getElementById('hexagon');

        if (control_form == 1) {
            wSQ.setAttribute('width', btnWidth); // присваиваю полученное значение ширины
        } else if (control_form == 2) {
            wTriangle.setAttribute('width', btnWidth);
            wTriangle.setAttribute('fill', 'transparent');
        } else if (control_form == 3) {
            wHexagon.setAttribute('width', btnWidth);
            wHexagon.setAttribute('fill', 'transparent');
        }

        if (btnWidth < 0) {
            document.getElementById("btnWidth").value = 0;
        }

        if (btnWidth > $('.totalConfig').width()) {
            wSQ.setAttribute('width', $('.totalConfig').width());
            wTriangle.setAttribute('width', $('.totalConfig').width());
            wHexagon.setAttribute('width', $('.totalConfig').width());
        }



    }

    document.getElementById("btnHeight").addEventListener('input', sizeHPic);

    function sizeHPic() {
        let btnHeight = document.getElementById("btnHeight").value; // получаю значение длины

        let hSQ = document.getElementById('square');
        let hTriangle = document.getElementById('triangle');
        let hHexagon = document.getElementById('hexagon');

        if (control_form == 1) {
            hSQ.setAttribute('height', btnHeight); // присваиваю полученное значение длины
        } else if (control_form == 2) {
            hTriangle.setAttribute('height', btnHeight);
            hTriangle.setAttribute('fill', 'transparent');
        } else if (control_form == 3) {
            hHexagon.setAttribute('height', btnHeight);
            hHexagon.setAttribute('fill', 'transparent');
        }
        hSQ.setAttribute('height', btnHeight);

        if (btnHeight < 0) {
            document.getElementById("btnHeight").value = 0;
        }

        if (btnHeight > $('.totalConfig').height()) {
            hSQ.setAttribute('height', $('.totalConfig').height());
            hTriangle.setAttribute('height', $('.totalConfig').height());
            hHexagon.setAttribute('height', $('.totalConfig').height());
        }
    }

    let result = 0;

    //Calc_Tile//

    document.getElementById('btnWidthSquare').addEventListener('change', function () {

        let squareTile = document.getElementById('btnWidthSquare').value; // получаю значение поля "площадь участка"
        // получаю значения полей "Ширина" и "Длина", делённые на 1000 для перевода из милиметров в метры
        let widthTile = document.getElementById("btnWidth").value / 1000;
        let heightTile = document.getElementById("btnHeight").value / 1000;


        if (square.style.display == 'block') {
            result = squareTile / (widthTile * heightTile); // вычисляю необоходимое кол-во плиток для участка
        } else if (triangle.style.display == 'block') {
            result = squareTile / (widthTile / 2 * heightTile);
        } else if (hexagon.style.display == 'block') {
            result = squareTile / (widthTile / 1.5 * heightTile);
        }

        if (squareTile < 0) {
            document.getElementById("btnWidthSquare").value = 0;
        }

        if (result < 0) {
            result = 0;
        }

        document.getElementById('calc_tile').innerHTML = Math.ceil(result); // вывожу округлённый результат

    });


    //Slider//
    $('.next').click(function () {

        $('.carry').css({
            "display": "none",
        });
        $('.hideImg').fadeIn(300);

    });


    $('.prev').click(function () {

        $('.carry').fadeIn(300);
        $('.hideImg').css({
            "display": "none",
        });

    });

    $('.nextColor').click(function () {

        $('.carryColor').css({
            "display": "none",
        });
        $('.hideImgColor').fadeIn(300);

    });

    $('.prevColor').click(function () {

        $('.carryColor').fadeIn(300);
        $('.hideImgColor').css({
            "display": "none",
        });

    });

    //Загрузка своих текструр

    function readURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
    
            reader.onload = function (e) {
                $('.blah').attr('src', e.target.result);
    
                let widthImg = $('.blah').width();
                console.log("widthImg = " + widthImg);
                let widthContent = 342;
                console.log("widthContent = " + widthContent);
    
                //если ширина картинки больше, чем наш контент, то добавляем коеффициент сжатия
                if (+widthImg > +widthContent) {
                    let koef = +widthImg / +widthContent;
                    
                    $("#koef").val(Math.round(koef*1000));
                    $('.blah').attr('src', e.target.result).css('width', '100%');
                }
                else {
    
                }
                //addJCrop(1);
                //jcrop_api.animateTo(getRandom());
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#AddImage").change(function () {
        $('.blah').attr('src', "~/Content/nophoto.png");
        texture1.remove();
        readURL(this);
    
        //$('input[type="file"]').hide();
        //$('.buttonSubmitImg').show();
        //CropResult.isUpload = true;
    });


  
       
        $('.input-file').each(function() {
          let $input = $(this),
              $label = $input.next('.js-labelFile'),
              labelVal = $label.html();
           
         $input.on('change', function(element) {
            $('#checkTexture').fadeIn();
            $('#checkColor').fadeOut();
            
            let fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
            infoTexture =  'Добавленная';
            control_texture = 3;
            $('#getTexture').text('Добавленная');
         });
        });
       
     


};