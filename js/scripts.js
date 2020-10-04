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
        $(desp).show(500);
        
    
    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(devp).show(500);
       
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $(prop).show(500);
        
    });

    $(desp, destext).on('click', function () {
        $('.des').slideDown();
        $(desp).hide(500);
        
    });
        $(devp, devtext).on('click', function () {
            $('.dev').slideDown();
            $(devp).hide(500);
            
        });
        $(prop, protext).on('click', function () {
            $('.pro').slideDown();
            $(prop).hide(500);
            
        })

        $('.portimg').hover(function(){
            $('.porttext',this).slideToggle('slow');
         }, function(){
            $('.porttext',this).slideToggle('slow');
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
