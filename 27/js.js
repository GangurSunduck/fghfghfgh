"use strict"
document.forms[0].oninput = () => {

    const select = document.querySelector('select');

    const texttable = document.querySelector('.texttable');

    const options = select.querySelectorAll('option');

    const values = [...options].map(option => option.value);

    for (const item of values) {
        texttable.classList.remove(item);
    }

    texttable.classList.add(select.value);
}
let autoIncrement = 1;
function transferData() {
    autoIncrement++
    var nameInput = document.getElementById("nameInput");
    var nameOutput = document.getElementById("nameOutput");

    nameOutput.insertAdjacentHTML("beforeBegin", `
    <div class="choo" id="udalenie_${autoIncrement}">
    <p>${autoIncrement}</p>
    <p>ㅤ</p>
    <p>Вы добавили текст:</p>
    <p>ㅤ</p>
    <div>${nameInput.value}</div>
    <p>ㅤ</p>
    <button type="button" onclick="ClearFields(${autoIncrement});">Clear</button>
    </div>
   
    `,);
}
function transferData1() {
    autoIncrement++
    var nameOutput = document.getElementById("nameOutput");
    var nameInput1 = document.getElementById("nameInput1");
    nameOutput.insertAdjacentHTML("beforeBegin", `
  
    <div class="choo" id="udalenie_${autoIncrement}">
    <p>${autoIncrement}</p>
    <p>ㅤ</p>
    <p>Вы добавили таблицу под названием:</p>
    <p>ㅤ</p>
    <div>${nameInput1.value}</div>
    <p>ㅤ</p>
    <button type="button" onclick="ClearFields(${autoIncrement});">Clear</button>
    </div>
    `,);
}
function transferData2() {
    autoIncrement++
    var nameOutput = document.getElementById("nameOutput");
    var nameInput2 = document.getElementById("nameInput2");
    nameOutput.insertAdjacentHTML("beforeBegin", `
  
    <div class="choo" id="udalenie_${autoIncrement}">
    <p>${autoIncrement}</p>
    <p>ㅤ</p>
    <p>Вы добавили текст в таблицу:</p>
    <p>ㅤ</p>
    <div>${nameInput2.value}</div>
    <p>ㅤ</p>
    <button type="button" onclick="ClearFields(${autoIncrement});">Clear</button>
    </div>
    `,);
}
function ClearFields(autoIncrement) {
    console.log("Test");
    document.getElementById(`udalenie_${autoIncrement}`).remove()
}