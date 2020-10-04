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
    