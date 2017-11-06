
$(function () {
    
    //1. 商品信息渲染
    $.ajax({
        type: 'get',
        url: obj.url + 'getmoneyctrl',
        success: function (data) {
            console.log(data);
            $('.product_info>ul').html( template('productTpl', data) );
            $('.product_page').html( template('pageTpl', data) );
        }
    })
    
});