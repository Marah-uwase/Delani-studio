$(function () {
    let desp = $('#desp');
    let devp = $('#devp');
    let prop = $('#prop');
    let destext = $('#destxt');
    let devtext = $('#devtext');
    let protext = $('#protext');

    $(desp).hide();
    $(devp).hide();
    $(prop).hide();

    $('.des').on('click', function () {
        $('.des').slideUp('slow');
        $(desp).show();
        
    
    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(devp).show();
       
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $(prop).show();
        
    });

    $(desp, destext).on('click', function () {
        $('.des').slideDown();
        $(desp).hide();
        
    });
        $(devp, devtext).on('click', function () {
            $('.dev').slideDown();
            $(devp).hide();
            
        });
        $(prop, protext).on('click', function () {
            $('.pro').slideDown();
            $(prop).hide();
            
        })

        $('.portimg').hover(function(){
            $('.porttext',this).slideToggle();
         }, function(){
            $('.porttext',this).slideToggle();
         });

         $("form#form").on('submit',function(event){
            event.preventDefault();
            let name = $("input#name").val();
            let email = $("input#email").val();
            let message = $("textarea#message").val();

            if ($("input#name").val() && $("input#email").val()){
                alert (name + ", we have received your message,Thank you for reaching out to us!:)");
            }
            else {
                alert("Please provide your correct name and email!");
            }

        });



});
