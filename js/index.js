
$(function () {
    //1. 渲染首页的nav菜单栏
    $.ajax({
        type:'get',
        url:  obj.url + "getindexmenu",
        dataType: 'json',
        success:function (data) {
            console.log(data);
            data.result.forEach(function (cv, i) {
                var str = cv.img;
                var arr = [];
                arr = str.split('=');
                var str1 = arr[1].slice(0, -4);
                arr = str1.split("\"");
                console.log(arr[1]);
                cv.img = arr[1];
            });
            $('.content .nav ul').html( template('tpl', data) );
        }
        
    });
    
    //2. 点击nav更多切换显示第三行nav
    $('.nav').on('click', ".index7", function () {
        $(this).nextAll().toggleClass('hide');
    });
    
    //3. 渲染折扣列表
    $.ajax({
        type:'get',
        url:  obj.url + "getmoneyctrl",
        success:function (data) {
            data.result.forEach(function (cv, i) {
               cv.productComCount = cv.productComCount.slice(1,-3);
               cv.productImgSm = cv.productImgSm.split("=")[3].slice(0, -5);
            });
            $('.product ul').html( template('tpl2', data) );
        }
    })

    
});