var id=location.href.split('?id=').pop()
$.get('/ajax/book?id='+id,function (data) {
    var windowWidth=$(window).width()
    if (windowWidth<320){
        windowWidth=320
    }
    var header_tab_width=(windowWidth-180)/2
    new Vue({
        el:'#app',
        data:{
            data:data,
            screen_width:windowWidth,
            double_screen_width:windowWidth*2,
            header_tab_width:header_tab_width,
        },
        methods:{
            readBook:function () {
                location.href='/reader'
            }
        }
    })
},'json')