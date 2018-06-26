
// Copyright (C) 2013=2014 EdwardNolan, Lakewood OH 44107, nolanedward@sbcglobal.net
// All rights reserved.


$('.btnSearch').click(function(){
    // code goes here !
});
 
$('form').submit(function(e){
    // code goes here !
});

function makeAjaxRequest() {
    $.ajax({
        url: 'php/search.php',
        type: 'get',
        data: {name: $('input#name').val()},
        success: function(response) {
            $('table#resultTable tbody').html(response);
        }
    });
}