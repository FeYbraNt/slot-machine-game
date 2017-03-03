/**
* Slot machine
* Author: Rafael Lopez Dorado | http://rldorado.me
*
* Licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
* Date: Mar 03, 2017 
*/
function runSlots(){
    var slotOne;
    var slotTwo;
    var slotThree;

    var images = ["src/img/Symbol_0.png", "src/img/Symbol_1.png", "src/img/Symbol_2.png","src/img/Symbol_3.png", "src/img/Symbol_4.png", "src/img/Symbol_5.png"];

    slotOne = Math.floor(Math.random() * (images.length - 1 + 1)) + 1;
    slotTwo = Math.floor(Math.random() * (images.length - 1 + 1)) + 1;
    slotThree = Math.floor(Math.random() * (images.length - 1 + 1)) + 1;

    // Only change code below this line.
    $($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">');
    $($('.slot')[1]).html('<img src = "' + images[slotTwo-1] + '">');
    $($('.slot')[2]).html('<img src = "' + images[slotThree-1] + '">');


    // Results
    $('#result').html(''); // Default
    $('#result').html('No Win');
    
    var smallWin = function (slots) {
        return ((slots[0] === slots[1]) && (slots[1] !== slots[2])) || ((slots[0] !== slots[1]) && (slots[1] === slots[2])) || ((slots[0] === slots[2]) && (slots[2] !== slots[1])); 
    }
    
    var bigWin = function (slots) {
        return (slots[0] === slots[1]) && (slots[1] === slots[2]);
    }
    
    var slotArray = [slotOne, slotTwo, slotThree];
    if(smallWin(slotArray)){
        $('#result').html('Small Win');
    } else if (bigWin(slotArray)) {
        $('#result').html('Big Win');
    }

    if(slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
        $('.logger').html(slotOne);
        $('.logger').append(' ' + slotTwo);
        $('.logger').append(' ' + slotThree);
    }

    return(slotArray);
}