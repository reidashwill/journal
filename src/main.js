import { Journal } from './journal';

var myJournal = new Journal();
$(document).ready(function(){
  $("form#formGroup").submit(function(event){
    event.preventDefault();
    var newTitle = $("#title").val();
    var newEntry = $("#entry").val();
    var vowelNumber = myJournal.vowelCount(newEntry);
    console.log(vowelNumber);
  });
});