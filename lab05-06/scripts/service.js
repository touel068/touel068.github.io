
// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates1 = ["06/28/2021","07/08/2021","07/01/2021","07/15/2021","07/22/2021","07/29/2021"];
var unavailableDates2 = ["06/29/2021","07/05/2021","07/01/2021"];
var unavailableDates3 = ["06/02/2021","06/09/2021","06/16/2021","06/23/2021","06/30/2021","06/31/2021","07/09/2021","07/01/2021"];
const setDateFormat = "mm/dd/yy";
var expert;


function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];

    // Saturday is Day 7, disable all Sundays
    if (date.getDay() === 6)
    return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);


    if(document.getElementById("expert").value=="nigel"){
        return [ unavailableDates1.indexOf(string) === -1 ]
    }
    if(document.getElementById("expert").value=="jeff"){
        return [ unavailableDates2.indexOf(string) === -1 ]
    }
    
    if(document.getElementById("expert").value=="cassandra"){
        return [ unavailableDates3.indexOf(string) === -1 ]
    }
    
    
}

// HERE, JQuery "LISTENING" starts
$(document).ready(function(){


    $("#expert").on("change", function(){
        expert = document.getElementById("expert").value;

        $( "#dateInput" ).datepicker(
            {
                dateFormat: setDateFormat,
                // no calendar before June 1rst 2021
                minDate: new Date('06/01/2021'),
                maxDate: '+4M',
                // used to disable some dates
                beforeShowDay: $.datepicker.noWeekends,
                beforeShowDay: disableDates
            }
        );

    });



    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
  

});