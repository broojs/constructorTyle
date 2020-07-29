window.onload = function(){

    $('.pr').fadeOut().end().delay(500).fadeOut('slow');
  


 
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
       totalAmount = this.document.getElementById('totalAmount');



     let hexagonWrap = $('.hexagonWrap');



       $('.color').hide();
       $('.texture').hide();
       $('.form').hide();
       $('.amount').hide();
       $('.material').hide();
       $('.info_total').hide();
       $('#or').hide();
       $('.calc_square').hide();
       $('.total').hide();
       
    let control_Type;

    $('#type1').click(function(){
        control_Type = 1;

        $('#btn1Texture').attr('src', 'img/Камень/Плитняк.jpg');
        $('#btn2Texture').attr('src', 'img/Камень/Кирпич Рельефный.jpg');
        $('#btn3Texture').attr('src', 'img/Камень/Кедровый скол.jpg');
        $('#btn4Texture').attr('src', 'img/Камень/Кирпич Амран.jpg');
        $('#btn5Texture').attr('src', 'img/Камень/Кирпич Гжельский.jpg');
        $('#btn6Texture').attr('src', 'img/Камень/Кирпич Клинкер.jpg');

    $('.material').show(1000);
    });
    
    
    $('#type2').click(function(){
        control_Type = 2;
        $('.material').show(1000);

        $('#btn1Texture').attr('src', 'img/Напольная плитка/Бут.jpg');
        $('#btn2Texture').attr('src', 'img/Напольная плитка/Византия.jpg');
        $('#btn3Texture').attr('src', 'img/Напольная плитка/Грот.jpg');
        $('#btn4Texture').attr('src', 'img/Напольная плитка/Сланец Классический.jpg');
        $('#btn5Texture').attr('src', 'img/Напольная плитка/Сланец Тонкослойный.jpg');
        $('#btn6Texture').attr('src', 'img/Напольная плитка/Старый замок.jpg');

    });
    
    $('#type3').click(function(){
        control_Type = 3;
        $('.material').show(1000);

        $('#btn1Texture').attr('src', 'img/Декор/Бабочка.jpg');
        $('#btn2Texture').attr('src', 'img/Декор/Ваза.jpg');
        $('#btn3Texture').attr('src', 'img/Декор/Египет.jpg');
        $('#btn4Texture').attr('src', 'img/Декор/Звезда.jpg');
        $('#btn5Texture').attr('src', 'img/Декор/Пантера.jpg');
        $('#btn6Texture').attr('src', 'img/Декор/Папоротник.jpg');
    });
    
    $('#material1').click(function(){
        $('.form').show(1000);
    });
    
    $('#material2').click(function(){
        $('.form').show(1000);
    });
    
    $('#material3').click(function(){
        $('.form').show(1000);
    });

    let control_form;

    btnSquare.addEventListener('click', function(){

        control_form = 1;

        square.style.display = 'block';
        triangle.style.display = 'none';
        hexagon.style.display = 'none';
       
        if (control_texture == 1) {
            square1.append(texture1);
        } else if (control_texture == 2) {
            square1.append(texture1);
        }  else {
            square1.append(texture1);
        }


        

        $('.color').show(1000);
        $('#or').show(1000);
        $('.texture').show(1000);
    });


    btnTriangle.addEventListener('click', function(){

        control_form = 2;

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

    });

    btnHexagon.addEventListener('click', function(){

        control_form = 3;

        hexagon.style.display = 'block';
        triangle.style.display = 'none';
        square.style.display = 'none';
        

        if (control_texture == 1) {
            hexagonWrap.append(texture1);
        } else if (control_texture == 2) {
            hexagonWrap.append(texture1);
        }  else {
            hexagonWrap.append(texture1);
        }




        $('.color').show(1000);
        $('#or').show(1000);
        $('.texture').show(1000);

    });
        let color;
    btnBlackColor.addEventListener('click', function(){

        color = 1;

        square.style.fill = 'black';
        triangle.style.fill = 'black'
        hexagon.style.fill = 'black';
        texture1.remove();


        $('.info_total').show(1000);

    });

    btnRedColor.addEventListener('click', function(){

        color = 2;

        square.style.fill = 'red';
        triangle.style.fill = 'red';
        hexagon.style.fill = 'red';
        texture1.remove();


        $('.info_total').show(1000);
    });

    btnBrownColor.addEventListener('click', function(){

        color = 3;

        square.style.fill = 'brown';
        triangle.style.fill = 'brown';
        hexagon.style.fill = 'brown';
        texture1.remove();


        $('.info_total').show(1000);
    });




    let control_texture;

    btn1Texture.addEventListener('click', function(){

        control_texture = 1;


        if (control_form == 1 && control_Type == 1) {
            texture1.src = 'img/Камень/Плитняк.jpg';
            square1.append(texture1);
        } else if (control_form == 2 && control_Type == 1) {
            texture1.src = 'img/Камень/Плитняк.jpg';
            triangle1.append(texture1);
        } else if (control_form == 3 && control_Type == 1){
            texture1.src = 'img/Камень/Плитняк.jpg';
            hexagonWrap.append(texture1);
        } else if (control_form == 1 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Бут.jpg';
            square1.append(texture1);
        } else if (control_form == 2 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Бут.jpg';
            triangle1.append(texture1);
        } else if (control_form == 3 && control_Type == 2) {
            texture1.src = 'img/Напольная плитка/Бут.jpg';
            hexagonWrap.append(texture1);
        } else if (control_form == 1 && control_Type == 3) {
            texture1.src = 'img/Декор/Бабочка.jpg';
            square1.append(texture1);
        } else if (control_form == 2 && control_Type == 3) {
            texture1.src = 'img/Декор/Бабочка.jpg';
            triangle1.append(texture1);
        } else if (control_form == 3 && control_Type == 3) {
            texture1.src = 'img/Декор/Бабочка.jpg';
            hexagonWrap.append(texture1);
        } 


        $('.info_total').show(1000);
        hexagon.style.fill = 'transparent';
    });

$('#btn2Texture').click(function(){

    control_texture = 2;

    if (control_form == 1 && control_Type == 1) {
        texture1.src = 'img/Камень/Кирпич Рельефный.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 1) {
        texture1.src = 'img/Камень/Кирпич Рельефный.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 1){
        texture1.src = 'img/Камень/Кирпич Рельефный.jpg';
        hexagonWrap.append(texture1);
    } else if (control_form == 1 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Византия.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Византия.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Византия.jpg';
        hexagonWrap.append(texture1);
    } else if (control_form == 1 && control_Type == 3) {
        texture1.src = 'img/Декор/Ваза.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 3) {
        texture1.src = 'img/Декор/Ваза.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 3) {
        texture1.src = 'img/Декор/Ваза.jpg';
        hexagonWrap.append(texture1);
    } 

    $('.info_total').show(1000);

    hexagon.style.fill = 'transparent';
});

$('#btn3Texture').click(function(){

    control_texture = 3;

    if (control_form == 1 && control_Type == 1) {
        texture1.src = 'img/Камень/Кедровый скол.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 1) {
        texture1.src = 'img/Камень/Кедровый скол.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 1){
        texture1.src = 'img/Камень/Кедровый скол.jpg';
        hexagonWrap.append(texture1);
    } else if (control_form == 1 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Грот.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Грот.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Грот.jpg';
        hexagonWrap.append(texture1);
    } else if (control_form == 1 && control_Type == 3) {
        texture1.src = 'img/Декор/Египет.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 3) {
        texture1.src = 'img/Декор/Египет.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 3) {
        texture1.src = 'img/Декор/Египет.jpg';
        hexagonWrap.append(texture1);
    } 
        $('.info_total').show(1000);
        hexagon.style.fill = 'transparent';
    
}); 

$('#btn4Texture').click(function(){

    control_texture = 3;

    if (control_form == 1 && control_Type == 1) {
        texture1.src = 'img/Камень/Кирпич Амран.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 1) {
        texture1.src = 'img/Камень/Кирпич Амран.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 1){
        texture1.src = 'img/Камень/Кирпич Амран.jpg';
        hexagonWrap.append(texture1);
    } else if (control_form == 1 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Сланец Классический.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Сланец Классический.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Сланец Классический.jpg';
        hexagonWrap.append(texture1);
    } else if (control_form == 1 && control_Type == 3) {
        texture1.src = 'img/Декор/Зведа.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 3) {
        texture1.src = 'img/Декор/Звезда.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 3) {
        texture1.src = 'img/Декор/Звезда.jpg';
        hexagonWrap.append(texture1);
    } 
        $('.info_total').show(1000);
        hexagon.style.fill = 'transparent';
    
}); 

$('#btn5Texture').click(function(){

    control_texture = 3;

    if (control_form == 1 && control_Type == 1) {
        texture1.src = 'img/Камень/Кирпич Гжельский.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 1) {
        texture1.src = 'img/Камень/Кирпич Гжельский.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 1){
        texture1.src = 'img/Камень/Кирпич Гжельский.jpg';
        hexagonWrap.append(texture1);
    } else if (control_form == 1 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Сланец Тонкослойный.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Сланец Тонкослойный.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Сланец Тонкослойный.jpg';
        hexagonWrap.append(texture1);
    } else if (control_form == 1 && control_Type == 3) {
        texture1.src = 'img/Декор/Пантера.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 3) {
        texture1.src = 'img/Декор/Пантера.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 3) {
        texture1.src = 'img/Декор/Пантера.jpg';
        hexagonWrap.append(texture1);
    } 
        $('.info_total').show(1000);
        hexagon.style.fill = 'transparent';
    
}); 

$('#btn6Texture').click(function(){

    control_texture = 3;

    if (control_form == 1 && control_Type == 1) {
        texture1.src = 'img/Камень/Кирпич Клинкер.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 1) {
        texture1.src = 'img/Камень/Кирпич Клинкер.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 1){
        texture1.src = 'img/Камень/Кирпич Клинкер.jpg';
        hexagonWrap.append(texture1);
    } else if (control_form == 1 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Старый Замок.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Старый Замок.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 2) {
        texture1.src = 'img/Напольная плитка/Старый Замок.jpg';
        hexagonWrap.append(texture1);
    } else if (control_form == 1 && control_Type == 3) {
        texture1.src = 'img/Декор/Папоротник.jpg';
        square1.append(texture1);
    } else if (control_form == 2 && control_Type == 3) {
        texture1.src = 'img/Декор/Папоротник.jpg';
        triangle1.append(texture1);
    } else if (control_form == 3 && control_Type == 3) {
        texture1.src = 'img/Декор/Папоротник.jpg';
        hexagonWrap.append(texture1);
    } 
        $('.info_total').show(1000);
        hexagon.style.fill = 'transparent';
    
}); 



$('#btnWidthSquare').change(function(){

    $('.amount').show(1000);

});

//amount//

let control_amount = 0;
totalAmount.innerHTML = control_amount;

plus.addEventListener('click', function(){
control_amount+=5;
totalAmount.innerHTML = control_amount;

$('.total').show(1000);
});

minus.addEventListener('click', function(){

if (control_amount == 0) {
    totalAmount.innerHTML = control_amount;
} else {
control_amount-=5;
}
totalAmount.innerHTML = control_amount;

});



$('#send').click(function(){

  
    html2canvas(document.getElementById("totalConfig")).then(function(canvas) {

     let my_screen = btoa(canvas.toDataURL('png'));
   


    let data = {

        'screen' : my_screen,

    }

    if(control_form == 1){
        data.tForm = 'Квадрат';
    } else if(control_form == 2 ){
        data.tForm = 'Треугольник';
    } else if (control_form == 3) {
        data.tForm = 'Шестиугольник';
    } else {
        data.tForm = 'Не выбрано';
    }

    if (color == 1) {
        data.tColor = 'Чёрный';
    } else if (color == 2) {
        data.tColor = 'Красный';
    } else if(color == 3){
        data.tColor = 'Коричневый';    
    } else {
        data.tColor =  'Не выбрано';
    } 

    if (control_texture == 1) {
        data.tTexture = 'Собака';
    } else if (control_texture == 2) {
        data.tTexture = 'Машина';
    } else if(control_texture == 3){
        data.tTexture = 'Плитка';    
    } else {
        data.tTexture =  'Не выбрано';
    }

    data.tAmount = control_amount;
        
    localStorage.setItem('data', JSON.stringify(data));

console.log(data);

alert('asda');

$.ajax({
    method: "POST",
    url: "main.php",
    dataType: "json",
    data: {
      "text": JSON.stringify({
          'tForm': data.tForm,
          'tColor': data.tColor,
          'tTexture':data.tTexture,
          'tAmount': data.tAmount
      }),
      "canvas": atob(data.screen)
      
    },
    success: function(data) {
      console.log(data);
    },
    error: function(er) {
      console.log(er);
    }
  });




    });
});


//////////////////////Modal window//////////////////////

$('#openForm').click(function() { 
	
	$('.send').fadeIn();
    $('.send').addClass('disabled');
    $('body').css('overflow','hidden');
});

//закрыть 

$('.js-close-campaign').click(function() { 
	$('.send').fadeOut();
    $('body').css('overflow','');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	let popup = $('#content');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.send').fadeOut();
		
    }
    $('body').css('overflow','');
});




//change sizes//

document.getElementById("btnWidth").addEventListener('input', sizeWPic);

function sizeWPic() {
 let btnWidth = document.getElementById("btnWidth").value;
 let wSQ = document.getElementById('square');
 let wTriangle = document.getElementById('triangle');
 let wHexagon = document.getElementById('hexagon');

 if (control_form == 1) {
    wSQ.setAttribute('width', btnWidth);
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

 $('.calc_square').show(1000);

}

document.getElementById("btnHeight").addEventListener('input', sizeHPic);

function sizeHPic() {
 let btnHeight = document.getElementById("btnHeight").value;

 let hSQ = document.getElementById('square');
 let hTriangle = document.getElementById('triangle');
 let hHexagon = document.getElementById('hexagon');

 if (control_form == 1) {
    hSQ.setAttribute('height', btnHeight);
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

 $('.calc_square').show(1000);

}

let result = 0;

//Calc_Tile//


document.getElementById('btnWidthSquare').addEventListener('change', function(){

    let squareTile = document.getElementById('btnWidthSquare').value;
    let widthTile = document.getElementById("btnWidth").value/1000;
    let heightTile = document.getElementById("btnHeight").value/1000;

result = squareTile / (widthTile*heightTile);


document.getElementById('calc_tile').innerHTML = Math.ceil(result);

});


//Slider//
$('#next').click(function(){

    $('.carry').css({ "display": "none",});
    $('.hideImg').fadeIn(300);
    

});


$('#prev').click(function(){

    $('.carry').fadeIn(300);
    $('.hideImg').css({ "display": "none",});

});
};





