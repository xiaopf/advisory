$(document).ready(function () {
    $('.upComingEvents').click(function(){
        window.location.href = window.location.origin + '/events/'
    })

    let i = 0;
    $('.carousel>div').hide();
    $('.carousel>div').eq(i).show();
    
    let timer = setInterval(() => {
        i++;
        $('.carousel>div').hide();
        $('.carousel>div').eq(i % 3).fadeIn(1000);
    }, 2000);

})
