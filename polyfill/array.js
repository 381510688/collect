
/*目前只针对字符串*/
Array.prototype.indexOf = Array.prototype.indexOf || (function(value) {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i].indexOf(value) > -1) return i;
    }
    return -1;
});