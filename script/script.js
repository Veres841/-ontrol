function sel(a){
    return document.querySelector(a);
};


function id(a){
    return document.getElementById(a);
};

var buttNav = document.forms.navFormButt;
var bTextArea = document.forms.buttTextAreaForm;

//===== Функціонал кнопок блоку Nav ==========================

buttNav.elements.edit.addEventListener('click', function(){
    sel('.tArea').innerHTML = sel('.parText').innerHTML;
    sel('.textArea').style.display = 'block';
    sel('.wrapForm').style.display = 'none';
});

buttNav.elements.styleB.addEventListener('click', function(){
    sel('.wrapForm').style.display = 'block';
    sel('.textArea').style.display = 'none';
});


//===== Функціонал кнопок блоку TextArea ==========================

bTextArea.elements.save.addEventListener('click', function(){
    sel('.parText').innerHTML = sel('.tArea').value;
    sel('.tArea').value = '';
});

buttNav.elements.edit.addEventListener('click', function(){
    sel('.tArea').value = sel('.parText').innerHTML;
})

bTextArea.elements.addButt.addEventListener('click', function(){
    sel('.addBlock').style.display = 'block';
    sel('.artText').style.display = 'none';
    sel('.nav').style.display = 'none';
    sel('.addTable').style.display = 'none';
    sel('.addItem').style.display = 'none';
    sel('.footWrap').style.display = 'none';
});

//===== Зміна розміру шрифту ======================================

var textSize = document.forms.rdButtForm;
for(var i = 0; i < textSize.length; i++){
    textSize[i].addEventListener('click', function(){
        sel('.parText').style.fontSize = this.value;
    });
}

//===== Зміна стилю шрифту ======================================

var fontFamily = document.forms.fontFamilyForm;
for(var i = 0; i < fontFamily.length; i++){
    fontFamily[i].addEventListener('click', function(){
        sel('.parText').style.fontFamily = this.value;
    });
}

//===== Жирний текст ============================================

var checkBox = document.forms.chBoxForm;
checkBox.elements.chBold.addEventListener('click', function(){
    if(this.checked){
        sel('.parText').style.fontWeight = this.value;
    } else {
        sel('.parText').style.fontWeight = 'normal';
    }
});

//===== Курсивний текст ========================================

checkBox.elements.chItalic.addEventListener('click', function(){
    if(this.checked){
        sel('.parText').style.fontStyle = this.value;
    } else {
        sel('.parText').style.fontStyle = 'normal';
    }
});

//======= Колір фону та тексту =======================================
var toggle = true;
document.body.addEventListener('click', function(e){
    if(e.target.id == 'color'){
        toggle = true;
        sel('.colorBox').style.display = 'table';
    } else if(e.target.id == 'bgColor'){
        toggle = false;
        sel('.colorBox').style.display = 'table';
    } else {
         sel('.colorBox').style.display = 'none';
    }
});


var allColor = document.querySelectorAll('.box');
for(var i = 0; i < allColor.length; i++){
    allColor[i].addEventListener('click', function(){
        if(toggle){
            sel('.parText').style.color = this.style.background;  
        } else {
            sel('.header').style.background = this.style.background;
        }
          
    });
};


//====== Вибрати таблицю або список ===========================
var choose = document.forms.chooseRadButt;

for (var i = 0; i < choose.length; i++) {
    choose.elements[i].addEventListener('click', function(){
        if (this.value == 'table') {
            sel('.addTable').style.display = 'block';
            sel('.addItem').style.display = 'none';
            
        } else if (this.value == 'item'){
            sel('.addTable').style.display = 'none';
            sel('.addItem').style.display = 'block';
            
            }
    });
}

//======= Таблиця =================================================

id('create').addEventListener('click', function(){
    var tr = sel('.countTr').value;
    var td = sel('.countTd').value;
    var cellWidth = sel('.cellWidth').value;
    var cellHeight = sel('.cellHeight').value;
    var borderWidth = sel('.borderWidth').value;
    var borderStyle = sel('.borderStyle').value;
    var borderColor = sel('.borderColor').value;
    var table = '<table style="border:' + borderWidth + 'px ' + borderStyle + ' ' + borderColor + '">';
    for (var i = 0; i < tr; i++) {
        table += '<tr>';
        for (var j = 0; j < td; j++) {
            table += '<td style="border:' + borderWidth + 'px ' + borderStyle + ' ' + borderColor + ';height:' + cellHeight + 'px;width:' + cellWidth + 'px;"></td>';
        }
        table += '</tr>';
    }
    table += '</table>';
    sel('.tArea').value += table;
    
    sel('.artText').style.display = 'block';
    sel('.nav').style.display = 'block';
    sel('.footWrap').style.display = 'block';
    sel('.addBlock').style.display = 'none';
});


//======= Список ===============================
var itemButt = document.forms.rBtnItem;
itemButt.createItem.addEventListener('click', function(){ 
var item = sel('.countEl').value;
var typeMarck = sel('.typeItem').value;
var listItem = '<ul type=' + typeMarck + '>';
    for (var i = 0; i < item; i++){
        listItem += '<li>Text</li>';
    }
listItem += '</ul>';

sel('.artText').style.display = 'block';
sel('.nav').style.display = 'block';
sel('.footWrap').style.display = 'block';    
sel('.addItem').style.display = 'none';
sel('.addBlock').style.display = 'none';    
sel('.tArea').value += listItem;    
});





























