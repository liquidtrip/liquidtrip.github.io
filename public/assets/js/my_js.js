function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function document_ready(){

    // Verifica se il parametro 'source' è presente nell'URL
    var source = getUrlParameter('source');
    if (source === 'qr_code') {
        $('.qr_code').show();
        $('#how_it_works').hide();
    }

    /*Prima apertura*/
    if(navigator.language == 'it-IT' && ! localStorage.getItem('language') ){
        $('.it').show();
        $('.en').hide();
        $('#navbarDropdown').text('IT');
        localStorage.setItem('language', 'IT');
    }else if(navigator.language != 'it-IT' && ! localStorage.getItem('language') ){
        $('.en').show();
        $('.it').hide();
        $('#navbarDropdown').text('EN');
        localStorage.setItem('language', 'EN');
    }

    if (localStorage.getItem('language') == 'IT'){
        $('.it').show();
        $('.en').hide();
        $('#navbarDropdown').text('IT');
    }

    $("#it-item").click(function(){
        localStorage.setItem('language', 'IT');
        $('.it').show();
        $('.en').hide();
        $('#navbarDropdown').text('IT');
    });

    $("#en-item").click(function(){
        localStorage.setItem('language', 'EN');
        $('.en').show();
        $('.it').hide();
        $('#navbarDropdown').text('EN');
    });

    var partenza = $('#partenza');
    var arrivo = $('#arrivo');
    var distance = arrivo.offset().left - partenza.offset().left;
    var left = $('.step-item_horizontal').width()/2;
    $(':root').css('--distance', distance + 'px');
    $(':root').css('--left', left + 'px');
}