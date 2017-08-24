/**
 * 获取指纹ID信息
 * sid： 【站点ID】<7cd998c4，站点ID在用户注册站点时生成，系统唯一>
 * uid： 【访客ID】<hMFo/A/lL/A-QUrcY29q1w，base64(md5(终端信息 + 初次访问时间) - 末尾两个+号>
 * vid： 【访次ID】<ZTVtB2C8hv8d6ofUyYFsRw，base64(md5(uid + 进入页 + 访次开始时间)) - 末尾两个+号>
 * pid： 【页面ID】<5e8rBprfn7qW6jcXpwsx8A，base64(md5(页面URL)) - 末尾两个+号>
 * peid：【页面访问ID】<dj9ad8TzZaS6xa27dx/Agw，base64(md5(uid + vid + 页面URL + 页面访问时间)) - 末尾两个+号>
 */


/**
 * 创建UID
 * @returns {string}
 */
function creatUID() {
    try {
        var uidStr = [this.getSysInfo()]; // UID字符组
        // 取得UA
        uidStr.push("&ua=" + objCommon.encode((na.userAgent || ""), false));
        // 浏览器宽度
        uidStr.push("&bw=" + (doc.documentElement.clientWidth || doc.body.clientWidth || 0));
        // 浏览器高度
        uidStr.push("&bh=" + objBrowserInfo.getBrowserHeight());
        // 通用插件信息
        uidStr.push("&pi=" + objBrowserInfo.getPlugins());
        // 当次访问时间
        uidStr.push("&ts=" + visitTimeDate);
        var str = uidStr.join("");
        if (!str) {     // 判断uid是否为空，如果为空，通过时间和随机数重新创建uid
            str = (new Date()).getTime() + "" + Math.random();
        }
        return str;
    } catch (ex) {
        return (new Date()).getTime() + "" + Math.random();
    }
    return createID(getUidStr());
}

/**
 * 创建id
 * @param message
 * @returns {string}
 */
function createID(message) {
    return base64encodeForBin(this.Hex2Bin(this.MD5(message)));
}


objCommon.createID(objBrowserInfo.getUidStr())
this.getUidStr = function(){
    try {
        var uidStr = [this.getSysInfo()]; // UID字符组
        // 取得UA
        uidStr.push("&ua=" + objCommon.encode((na.userAgent || ""), false));
        // 浏览器宽度
        uidStr.push("&bw=" + (doc.documentElement.clientWidth || doc.body.clientWidth || 0));
        // 浏览器高度
        uidStr.push("&bh=" + objBrowserInfo.getBrowserHeight());
        // 通用插件信息
        uidStr.push("&pi=" + objBrowserInfo.getPlugins());
        // 当次访问时间
        uidStr.push("&ts=" + visitTimeDate);
        var str = uidStr.join("");
        if (!str) {     // 判断uid是否为空，如果为空，通过时间和随机数重新创建uid
            str = (new Date()).getTime() + "" + Math.random();
        }
        return str;
    } catch (ex) {
        return (new Date()).getTime() + "" + Math.random();
    }
}

this.getSysInfo = function(){
    var sysInfo = []; // UID字符组
    //当宽度大于高度的时候，
    if(this.getTerminalType() == 1 || this.getTerminalType() == 4) {
        //对于手机和平板，数值小的就是宽度，数值大的就是高度。永远统计竖屏状态
        sysInfo.push("." + [this.getViewWidth(),this.getScreenHeight()].sort()[0]);// 屏幕宽度
        sysInfo.push("." + [this.getViewWidth(),this.getScreenHeight()].sort()[1]);// 屏幕高度
    }else{
        sysInfo.push("." + this.getViewWidth());// 屏幕宽度
        sysInfo.push("." + this.getScreenHeight());// 屏幕高度
    }
    sysInfo.push("." + (win.screen.colorDepth||0));        // 屏幕色深，取得屏幕信息（width*length*color）
    sysInfo.push("." + this.getTimezone().replace(/\./g, "_"));  // 时区, 将小数点替换成_是为了不合信息串中的小数点冲突
    sysInfo.push("." + (na.platform||"").replace(/\./g, "_").toLowerCase());                     // 取得系统平台
    sysInfo.push("." + (na.language||na.browserLanguage||"").replace(/\./g, "_").toLowerCase()); // 取得浏览器语言
    sysInfo.push("." + (doc.characterSet || doc.charset ||"").replace(/\./g, "_").toLowerCase());// 取得浏览器字符集
    /*合并成URL传参时用的信息串*/
    return sysInfo.join("");//paraStr
}

