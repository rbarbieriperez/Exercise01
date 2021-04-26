'use strict'

window.addEventListener("DOMContentLoaded",() => {
    ListVisibleFalse();
    AddQuantityToComboBox();
    let combobox = document.getElementById('combobox');
    //Event that occurs when an element of combobox is selected
    combobox.addEventListener('change',() =>{
        RemoveElementsFromList("listadiv");
        RemoveElementsFromList("modelslist");
        var selectedText = combobox.options[combobox.selectedIndex].text;
        ReadArray(selectedText);
        ListVisibleTrue();
    });

    //Event that occurs when delete button is clicked
    let deletebtn = document.getElementById("borrar");
    deletebtn.addEventListener("click", () => {
        RemoveElementsFromList("listadiv");
        RemoveElementsFromList("modelslist");
    });

    //Event that occurs when a car is selected and

    let listadiv = document.getElementById("listadiv");
    listadiv.addEventListener("click", (element) => {
        var option = element.target.innerHTML;
        switch (option) {
            case "Toyota" : ReadCarsModelArray(Toyota);
                break;
            case "Hyundai" : ReadCarsModelArray(Hyundai);
                break;
            case "Chevrolet": ReadCarsModelArray(Chevrolet);
                break;
            case "Geely": ReadCarsModelArray(Geely);
                break;
            case "Renault": ReadCarsModelArray(Renault);
                break;
            case "Peugeot": ReadCarsModelArray(Peugeot);
                break;
            case "Lifan": ReadCarsModelArray(Lifan);
                break;
            case "Chery": ReadCarsModelArray(Chery);
                break;
            case "Subaru": ReadCarsModelArray(Subaru);
                break;
            case "Nissan": ReadCarsModelArray(Nissan);
                break;
            case "BYD" : ReadCarsModelArray(BYD);
                break;
            case "Ford": ReadCarsModelArray(Ford);
                break;
            case "Volkswagen": ReadCarsModelArray(Volkswagen);
                break;
        }
    });
});
var cars = ["Toyota", "Hyundai", "Chevrolet","Geely","Renault","Peugeot","Lifan","Chery","Subaru","Nissan","BYD","Ford","Volkswagen"];
var Toyota = ["Corsa","Hilux","Corolla"];


const ReadArray =  function (index){
    for (let i = 0 ; i < index; i++){
        ShowElementsInHTML(cars[i], "listadiv");
    }
    
}

const ReadCarsModelArray = function (array){
    for (let i = 0; i < array.length; i++){
        ShowElementsInHTML(array[i],"modelslist");
    }

}

const ShowElementsInHTML = function (element,list){
    //Function to add elements to a list
    //element => value of each element
    //list => name of list in HTML  
    let listadiv = document.getElementById(list);
    let parrafo = document.createElement("p");
    parrafo.appendChild(document.createTextNode(element));
    listadiv.appendChild(parrafo);
    
}

const ListVisibleFalse = function (){
    let listadiv = document.getElementById("listadiv");
    listadiv.style.display = "none";
}
const ListVisibleTrue = function (){
    let listadiv = document.getElementById("listadiv");
    listadiv.style.display = "inline-block";
}

const RemoveElementsFromList = function (lista){
    let listadiv = document.getElementById(lista);
    while (listadiv.firstChild) {
        listadiv.removeChild(listadiv.lastChild);
    }  
}

const AddQuantityToComboBox = function(){
    let combobox = document.getElementById('combobox');
    for (let i = 1; i < cars.length ; i++){
        let element = document.createElement('option');
        element.appendChild(document.createTextNode(i));
        element.value = i;
        combobox.appendChild(element);
    }
}