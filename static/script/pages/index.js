$.get('/ajax/index',function (data) {
    var windowWidth=$(window).width()
    if (windowWidth<320){
        windowWidth=320
    }
    var header_tab_width=(windowWidth-180)/2
    new Vue({
        el:'#app',
        data:{
            screen_width:windowWidth,
            double_screen_width:windowWidth*2,
            header_tab_width:header_tab_width,
            top:data.items[0].data.data,
            hot:data.items[1].data.data,
            recommend:data.items[2].data.data,
            female:data.items[3].data.data,
            male:data.items[4].data.data,
            free:data.items[5].data.data,
            topic:data.items[6].data.data,
            translateValue:'translate3d(0px,0px,0px)',
            header_translateValue:'translate3d(px,0px,0px)',
            tab_1_class:'Swipe-tab_on',
            tab_2_class:''
        },
        methods:{
            tabSwitch:function (pos) {
                if (pos == 0){
                    this.translateValue='translate3d(0px,0px,0px)'
                    this.header_translateValue='translate3d(0px,0px,0px)'
                    this.tab_1_class='Swipe-tab_on'
                    this.tab_2_class=''
                }
                else {
                    this.translateValue='translate3d(-'+windowWidth+'px,0px,0px)'
                    this.header_translateValue='translate3d('+header_tab_width+'px,0px,0px)'
                    this.tab_1_class=''
                    this.tab_2_class='Swipe-tab_on'
                }
            }
        }
    })
},'json')