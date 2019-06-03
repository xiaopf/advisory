$(document).ready(function () {
    $('.upComingEvents').click(function(){
        console.log('webpack 打包！')
        window.location.href = window.location.origin + '/events'
    })
})
