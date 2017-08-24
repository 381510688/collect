/**
 * 获取元素绝对坐标
 * getBoundingClientRect() 返回元素的大小及其相对于视口的位置（IE11、firefox表现不一样）
 * 参考地址：https://support.microsoft.com/en-us/help/3191338/the-getboundingclientrect-method-might-return-an-incorrect-value-in-internet-explorer-11
 * pageYOffset/pageXOffset 返回文档/页面水平、垂直方向滚动的像素值（IE9以下不支持）
 * 兼容方式：
 *  var x = (window.pageXOffset !== undefined) ?
 *              window.pageXOffset :
 *              (document.documentElement || document.body.parentNode || document.body).scrollLeft;
 *  var y = (window.pageYOffset !== undefined) ?
 *              window.pageYOffset :
 *              (document.documentElement || document.body.parentNode || document.body).scrollTop;
 */
function getOffset(element){
    var offset = {top: 0, left: 0};
    //使用最新的计算方法（和jquery的一致）
    if( typeof element.getBoundingClientRect !== 'undefined'){
        var doc = element && element.ownerDocument,
            docElem = doc.documentElement,
            box = element.getBoundingClientRect();
        offset= {
            top: box.top  + ( window.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
            left: box.left + ( window.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
        };
    }else{  //兼容旧版浏览器（不支持getBoundingClientRect 的浏览器）
        offset.top += element.offsetTop;
        offset.left += element.offsetLeft;
        if(element.offsetParent){
            var parentOffset = getOffset(element.offsetParent);
            offset.top += parentOffset.top;
            offset.left += parentOffset.left;
        }
        if(offset.top < 0){
            offset.top = 0
        }
        if(offset.left < 0){
            offset.left = 0
        }
        offset.top = isNaN(offset.top) ? 0 : parseInt(offset.top, 10);
        offset.left = isNaN(offset.left) ? 0 : parseInt(offset.left, 10);
    }
    offset.top = Math.round(offset.top);
    offset.left = Math.round(offset.left);
    return offset;
}