var fs=require('fs')

exports.get_test_data=function () {
    var content=fs.readFileSync('./mock/test.json','utf-8')
    return content
}
exports.get_index_data=function () {
    var content=fs.readFileSync('./mock/home.json','utf-8')
    return content
}
exports.get_chapter_data=function () {
    var content=fs.readFileSync('./mock/reader/chapter.json','utf-8')
    return content
}
exports.get_chapter_content_data=function (id) {
    if (!id){
        id='1'
    }
    var content=fs.readFileSync('./mock/reader/data/data'+id+'.json','utf-8')
    return content
}
exports.get_rank_data=function () {
    var content=fs.readFileSync('./mock/rank.json','utf-8')
    return content
}
exports.get_male_data=function () {
    var content=fs.readFileSync('./mock/channel/male.json','utf-8')
    return content
}
exports.get_female_data=function () {
    var content=fs.readFileSync('./mock/channel/female.json','utf-8')
    return content
}
exports.get_categary_data=function () {
    var content=fs.readFileSync('./mock/categary.json','utf-8')
    return content
}
exports.get_book_data=function (id) {
    if (!id){
        id='18218'
    }
    if (fs.existsSync('./mock/book/'+id+'.json')){
        return fs.readFileSync('./mock/book/'+id+'.json','utf-8')
    }
    else {
        return fs.readFileSync('./mock/book/18218.json','utf-8')
    }
    // return function (cb) {
    //     var http=require('http')
    //     //把json对象转化为查询参数 {a:'1'} http://127.0.0.1/api?a=1
    //     var qs=require('querystring')
    //     var data={
    //         s:keyword,
    //         start:start,
    //         end:end
    //     }
    //     var content=qs.stringify(data)
    //     var http_request={
    //         hostname:'http://dushu.xiaomi.com',
    //         port:80,
    //         path:'/hs/v0/android/fiction/book/'+id
    //     }
    //     req_obj=http.request(http_request,function (_res) {
    //         console.log(_res)
    //         var callback_content=''
    //         _res.setEncoding('utf8')
    //         //接收到数据后触发data事件  分块返回  一部分
    //         _res.on('data',function (chunk) {
    //             //将每部分拼接  返回全部数据
    //             content+=chunk
    //         })
    //         _res.on('end',function () {
    //             //第一个参数是错误代码
    //             console.log(content)
    //             cb(null,content)
    //         })
    //     })
    //
    //     req_obj.on('error',function () {
    //
    //     })
    //     req_obj.end()
    // }
}
exports.get_search_data=function (start,end,keyword) {
    return function (cb) {
        var http=require('http')
        //把json对象转化为查询参数 {a:'1'} http://127.0.0.1/api?a=1
        var qs=require('querystring')
        var data={
            s:keyword,
            start:start,
            end:end
        }
        var content=qs.stringify(data)
        var http_request={
            hostname:'dushu.xiaomi.com',
            port:80,
            path:'/store/v0/lib/query/onebox?'+content
        }
        req_obj=http.request(http_request,function (_res) {
            var callback_content=''
            _res.setEncoding('utf8')
            //接收到数据后触发data事件  分块返回  一部分
            _res.on('data',function (chunk) {
                //将每部分拼接  返回全部数据
                content+=chunk
            })
            _res.on('end',function () {
                //第一个参数是错误代码
                cb(null,content)
            })
        })

        req_obj.on('error',function () {
            
        })
        req_obj.end()
    }
}