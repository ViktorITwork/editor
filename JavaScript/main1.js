var boldText = document.getElementsByClassName("bold")[0];//доступ до кнопки, яка надає об"єму тексту
var mainWindow = document.getElementsByClassName("main-window1")[0];//доступ до головного блоку
var mainWindow1 = document.getElementsByClassName("main-window")[0];//доступ до блоку, де відображається текст
var editWindow = document.getElementsByClassName("edit-window")[0];//досту до блоку (невидимого), де містятиться додаткова панель інструментів (елементи створення списку і таблиці)
var editWindow1 = document.getElementsByClassName("edit-window1")[0];//досту до блоку, де міститься поле редагування тексту (textarea)
var cursiveText = document.getElementsByClassName("cursive")[0];//доступ до кнопки стилізації тексту курсор
var underlineText = document.getElementsByClassName("underline")[0]//доступ до кнопки підкреслення тексту
var KindList = document.getElementsByClassName("kind_of_list");//доступ до блоку, де обирається вид списку
var marker1 = document.getElementsByClassName("marker1")[0];//блок з типом маркування нумерованого списку
var marker2 = document.getElementsByClassName("marker2")[0];//блок, з типом маркування маркованого списку
var liCountsEl = document.getElementsByClassName("parts-of-list")[0];//досту до форми введення кількості елементів списку
var choice = document.getElementsByClassName("choice")[0];//доступ до фоми, за допомогою якої загружається зображення на ПК

boldText.onclick = function () {//функція надання об"ємності тексту шляхоя нажаття на нопку
  if (this.classList.contains('active')){
    this.classList.remove('active')
    mainWindow1.style.fontWeight = "";
  } else {
    this.classList.add('active')
    mainWindow1.style.fontWeight= "bold";}
} 

cursiveText.onclick = function () {//функція відображення тексту курсивом
  if (this.classList.contains('active')){
    this.classList.remove('active')
    mainWindow1.style.fontStyle = "";
  } else {
    this.classList.add('active')
    mainWindow1.style.fontStyle = "italic";}
} 

underlineText.onclick = function () {//функція підкреслення тексту
  if (this.classList.contains('active')){
    this.classList.remove('active')
    mainWindow1.style.textDecoration = "";
  } else {
    this.classList.add('active')
    mainWindow1.style.textDecoration = "UnderLine";}
}


var textSize = document.getElementsByClassName("text-size");//функція зміни розміру тексту
textSize[0].onchange = function () {
  mainWindow1.style.fontSize = this.value;
}
var textStyle = document.getElementsByClassName("text-style1");//функція зміни шрифта тексту
textStyle[0].onchange = function () {
  mainWindow1.style.fontFamily = this.value;
}
var BTC = document.getElementsByClassName("color-text");
BTC[0].onclick = function () {//нажаття на кнопку color для надання кольору тексту
  tableColor[0].style.display = "block";
  mainWindow.onclick = function() {
        tableColor[0].style.display = "none";
  }
  var colors = tableColor[0].getElementsByTagName("td");
  for (var i = 0; i < colors.length; i++) {
    colors[i].onclick = function (){//функція зміни кольору тексту
      mainWindow1.style.color = this.style.backgroundColor;
      
    }
  }
}
var tableColor = document.getElementsByClassName("table-border1");
var divTable = document.getElementsByClassName("div-table2");
var divTable3 = document.getElementsByClassName("div-table3");
var background = document.getElementsByClassName("background");

mainWindow.onclick = function() {//функція зникнення блоків з зображеннями та кольорами
  divTable[0].style.display = "none";
  divTable3[0].style.display = "none";
  tableColor[0].display = "none";
}

background[0].onclick = function () {
  divTable[0].style.display = "block";//доступ до блоку з фоновими кольорами
}


var tableColor2 = document.getElementsByClassName("table-border2");
var colors2 = tableColor2[0].getElementsByTagName("td");
for (var i = 0; i < colors2.length; i++) {
  colors2[i].onclick = function (){
    mainWindow1.style.backgroundColor = this.style.backgroundColor;
    mainWindow1.style.backgroundImage = "none";//функція надання фону блоку коьльору
    mainWindow.onclick = function() {//функція зникнення блоків з зображеннями та кольорами
      divTable[0].style.display = "none";
      divTable3[0].style.display = "none";
      tableColor[0].display = "none";
    }
  }
}
var backgroundImage = document.getElementsByClassName("background-images");//функція доступу до блоку з фоновими зображеннями
var tableImages = document.getElementsByClassName("table-border3");
var images2 = tableImages[0].getElementsByTagName("td");
backgroundImage[0].onclick = function () {//функція надання фонового зображення блоку
  divTable3[0].style.display = "block";
  divTable[0].style.display = "none";
    for (var i = 0; i < images2.length; i++) {
      images2[i].onclick = function (){
        mainWindow1.style.backgroundImage = this.style.backgroundImage;
         mainWindow.onclick = function() {//функція зникнення блоків з зображеннями та кольорами
          divTable[0].style.display = "none";
          divTable3[0].style.display = "none";
          tableColor[0].display = "none";
        }
      }
    }
    choice.onchange = function onFileSelected(event) {//функція завантаження фонового зображення з обладнання користувача
      var selectedFile = event.target.files[0];
      var reader = new FileReader();
      reader.onload = function(event) {
        mainWindow1.style.backgroundImage = 'url(' + event.target.result + ')';
      };
      reader.readAsDataURL(selectedFile);
    }
  }
  
var colorsBut = document.getElementsByClassName("background-colors");
colorsBut[0].onclick = function () {//функція перемикання із блоку із зображеннями на блоку із кольорами на надання фону відповідного кольору
  divTable3[0].style.display = "none";
  divTable[0].style.display = "block";
  for (var i = 0; i < colors2.length; i++) {
  colors2[i].onclick = function (){
    mainWindow1.style.backgroundImage = "none"
    mainWindow1.style.backgroundColor = this.style.backgroundColor;
  }
}
}


var leftText = document.getElementsByClassName("left");//функція надання лівого напрямку тексту
leftText[0].onclick = function () {
    mainWindow1.style.textAlign = "left";
}
var centerText = document.getElementsByClassName("center");//функція центрування тексту
centerText[0].onclick = function () {
    mainWindow1.style.textAlign = "center";
}
var rightText = document.getElementsByClassName("right");//функція надання правого спрямування тексту
rightText[0].onclick = function () {
    mainWindow1.style.textAlign = "right";
}
var panel1 = document.getElementsByClassName("panel1");//доступ до панелі з інструментами
var panel2 = document.getElementsByClassName("panel2");//доступ до іншої панелі з інтсрументами
var tableElements = document.getElementsByClassName("table-elements");//доступ до блоку з елеменами для створення таблиці
var edit = document.getElementsByClassName("edit");//доступ до кнопки edit
var numberListTr = document.getElementsByClassName("number-list-tr")[0];//кількість рядків у таблиці
var numberColums = document.getElementsByClassName("number-list-td")[0];//кількість стовпців;
var HeightTd = document.getElementsByClassName("height-list-td")[0];//висота таблиці
var WidthTd = document.getElementsByClassName("width-list-td")[0];//ширина таблиці
var LineColor = document.getElementsByClassName("color-td")[0];//колір лінії комірки
var BorderWidth = document.getElementsByClassName("cellspacing")[0];//товщина лінії комірки
var typeOfBorderTable = document.getElementsByClassName("type_of_border_tbl")[0];//товщина рамки таблиці
var textarea = document.getElementsByTagName("textarea")[0];//досту до текстового поля приредагуванні
var save = document.getElementsByClassName("save")[0];//досту до кнопки save
var pushTable = document.getElementsByClassName("button-push-tbl")[0];//;доступ до кнопки скинути (у таблиці)
var pushList = document.getElementsByClassName("button-push-list")[0];//доступ до кнопки скинути у списку
var listDiv = document.getElementsByClassName("list-elements")[0];//кількість елементів у списку
var numberListError = document.getElementsByClassName("s1")[0];//блок, який з'являється при невірному вводі кідкості рядків таблиці
var numberColumsError = document.getElementsByClassName("s2")[0];//блок, який з'являється при невірному вводі кількості стовпців
var HeightTdError = document.getElementsByClassName("s3")[0];//блок, який з'являється при невірному вводі висоти комірки таблиці
var WidthTdError = document.getElementsByClassName("s4")[0];//блок, який з'являється при невірноиу вводі ширини комірки таблиці
var BorderWidthError = document.getElementsByClassName("s5")[0];//блок, який з'являється при невірному вводі товщини лінії комірки таблиці
var Error1 = document.getElementsByClassName("s6")[0];//помилка при неправильних даних у списку
edit[0].onclick = function () {//функція відкривання блоку з іншою панеллю інструментів та елементами створення таблиці та списку
  panel1[0].style.display = "none";
  mainWindow.style.display = "none";
  mainWindow1.style.display = "none";
  panel2[0].style.display = "block";
  editWindow.style.display = "block";
  textarea.value += mainWindow.innerHTML;
  mainWindow.innerHTML = "";
  var createTable = document.getElementsByClassName("create-table");
    createTable[0].onclick = function () {//функція нажимання на кнопку для створення таблиці
      tableElements[0].style.display = "block";
      var createButton = document.getElementsByClassName("button-make-tbl");
      createButton[0].onclick = function () {
        var table = "<table width="+WidthTd.value+" height="+HeightTd.value+" cellspacing="+BorderWidth.value+" bordercolor="+LineColor.value+" border-width="+BorderWidth.value+">"
        for (i = 0; i < numberListTr.value; i++){  
          table += "<tr>";
          for (j = 0; j < numberColums.value; j++)  { 
            table += "<td style='border-color:"+LineColor.value+";'></td>";
          } //функція cтворення таблиці двома циклами з додаванням стилів, введених (обраних) користувачем;
        table += "</tr>";
        }
        table += "</table>";

        textarea.value += table;//поміщення коду таблиці у блок textarea
        if (+numberListTr.value <= 0 || isNaN(numberColums.value) == true) {//перевірка правильності введення кількості рядків
          numberListTr.style.borderColor = "red";
          numberListError.style.display = "inline-block";
        } else {
          numberListTr.style.borderColor = "";
          numberListError.style.display = "none";
        }
        if (+numberColums.value <= 0 || isNaN(numberColums.value) == true ) {//перевірка правильності введення кількості стовпців
          numberColums.style.borderColor = "red";
          numberColumsError.style.display = "inline-block";
        } else {
          numberColums.style.borderColor = "";
          numberColumsError.style.display = "none";
        }
        if (+HeightTd.value <= 0 || isNaN(HeightTd.value) == true) {//перевірка правильності введення висоти таблиці
          HeightTd.style.borderColor = "red";
          HeightTdError.style.display = "inline-block";
        } else {
          HeightTd.style.borderColor = "";
          HeightTdError.style.display = "none";
        }
        if (+WidthTd.value <= 0 || isNaN(WidthTd.value) == true) {//перевірка правильності введення таблиці
          WidthTd.style.borderColor = "red";
          WidthTdError.style.display = "inline-block";
        } else {
          WidthTd.style.borderColor = "";
          WidthTdError.style.display = "none";
        }
        if (+BorderWidth.value <= 0 || isNaN(BorderWidth.value) == true) {//перевірка правильності введення товщини лінії колонки таблиці
          BorderWidth.style.borderColor = "red";
          BorderWidthError.style.display = "inline-block";
        } else {
          BorderWidth.style.borderColor = "";
          BorderWidthError.style.display = "none";
        }
        if (+typeOfBorderTable.value <= 0 || isNaN(typeOfBorderTable.value) ==true){//перевірка правильності введення товщини рамки таблиці
          typeOfBorderTable.style.borderColor = "red";
          Error1.style.display = "inline-block";
        } else {
          typeOfBorderTable.style.borderColor = "";
          Error1.style.display = "none";
        }
      }
        editWindow1.onclick = function () {//функція зникнення блоку, де користувач вводить елементи таблиці
          tableElements[0].style.display = "none";
        }
        pushTable.onclick = function () {//функція обнулення даних, введених користувачем для створення таблиці
         document.getElementById("myForm").reset();
        }
    }

  
  var parts = document.getElementsByClassName("parts")[0];//форма вибору типу маркування для нумерованого списку
  var markerOl = document.getElementsByClassName("marker1a")[0];//нумерований список
  var markerUl = document.getElementsByClassName("marker2a")[0];//маркований список
  var createListFinal = document.getElementsByClassName("button-make-list");//кнопка для створення списку
  var ErrorList = document.getElementsByClassName("s7")[0];//змінна для засвідчення помилки в елементах списку
  var toggleParts = function (selected) {//функція додавання елементів списку
      if ((selected == "ol" && markerOl.value != '') || 
          (selected == "ul" && markerUl.value != '')) {
        parts.style.display = "block";
      } else {
        parts.style.display =  'none';
      }
    }

  var createList1 = document.getElementsByClassName("create-list");
  createList1[0].onclick = function () {
    listDiv.style.display = "block";
    KindList[0].onchange = function () {// функції вибору типу списку і його складових елементів
      var selectedType = this.value;
      marker1.style.display = selectedType == "ol" ? "block" : 'none';
      marker2.style.display = selectedType == "ul" ? "block" : 'none';
      toggleParts(selectedType);
      markerOl.onchange = function () {//вибір нумерованого списку
        toggleParts(selectedType);
      }
      markerUl.onchange = function () {//вибір маркованого списку
        toggleParts(selectedType);
      }
      createListFinal[0].onclick = function () {//функція створення списку;
        var liCounts = parseInt(liCountsEl.value)
        var listType = selectedType == 'ol' ? markerOl.value : markerUl.value;
        var list = "<"+selectedType+" style = 'list-style-type:"+listType+";'>";
        for (var i = 0; i <= liCounts; i++) {
          list +="<li>Текст</li>"
        }
        list += "</"+selectedType+">";
        textarea.value += list;
        if (+liCountsEl.value <= 0 || isNaN(liCountsEl.value) ==true){//перевірка правильності даних введених користувачем
          liCountsEl.style.borderColor = "red";
          ErrorList.style.display = "inline-block";
        } else {
          liCountsEl.style.borderColor = "";
          ErrorList.style.display = "none";
        }
      }

      pushList.onclick = function () {//функція обнулення даних введених користувачем
         document.getElementById("myForm1").reset();
      }
    }
      editWindow1.onclick = function () {//функціяя зникнення блоку з елементами для створення списку
          listDiv.style.display = "none";
      }
  }
}

save.onclick = function () {//зберігання даних (на основі яких створюється таблиця та/або список) та їх напрвлення в головний блок для відображення
  mainWindow.innerHTML += textarea.value;
  panel1[0].style.display = "block";
  mainWindow.style.display = "block";
  mainWindow1.style.display = "block";
  panel2[0].style.display = "none";
  editWindow.style.display = "none";
}

