/**
 * 参考链接：https://developer.chrome.com/multidevice/user-agent
 */


/**
 * 获取设备类别
 * @param navigator
 * @return number 【0: 不可识别；1：手机；2：PC；3：PC模拟的手机；4：平板】
 */
function getTerminalType(navigator) {
    var ua = navigator.userAgent;
    if (!ua) return 0;

    if(isTabletByOSList()) {
        // 平板
        return 4;
    }else if(isPCByPlat() || isPCByOSList()) {
        // PC 【PC模拟的手机 ||真是PC】
        return isMobileByOSList() ? 3 : 2;
    } else if(isMobileByOSList()) {
        // 手机
        return 1;
    }
    return 0;
}

/**
 * 根据platform判断是否为pc平台
 * @returns {boolean} true为PC
 */
function isPCByPlat() {
    var macPlatReg = /(win|mac68k|macppc|macintosh|macintel)/i;
    return macPlatReg.test(navigator.platform);
}

/**
 * 根据ua信息判断是否为PC的操作系统
 * @returns {boolean} true为PC
 */
function isPCByOSList() {
    var pcOSReg = /(AIX|Amiga|BeOS|DragonFly|FreeBSD|GNU|Haiku|HP-UX|IRIX|Joli|Java|Macintosh|Minix|MorphOS|NetBSD|OpenBSD|PClinuxOS|QNX x86pc|SunOS|Ubuntu|Mint|Red Hat|Slackware|SUSE|PCLinuxOS|Debian|Fedora|CentOS|Vine|Arch Linux|Gentoo|Kanotix|Mandriva)/i;
    return pcOSReg.test(navigator.userAgent);
}

/**
 * 根据ua信息判断是否为Mobile的操作系统
 * @returns {boolean} true为Mobile
 */
function isMobileByOSList() {
    var mobileOSReg = /(Android|AROS|Bada|BlackBerry|Chromium|CrOS|Danger Hiptop|Inferno|iPhone|iPad|iPod|Nintendo DS|Nintendo Wii|Palm OS|PLAYSTATION|Syllable|SymbOS|Symbian|Tizen|webOS|WebTV|Windows CE|Windows Mobile|Windows Phone|Xbox)/i;
    return mobileOSReg.test(navigator.userAgent);
}

/**
 * 根据ua信息判断是否为Tablet的操作系统
 * @returns {boolean} true为Tablet
 */
function isTabletByOSList() {
    var ua = navigator.userAgent,
        tabletOSReg = /((.*MSIE.*Windows NT 6\.2;.*Touch\).*)|ipad)/i,
        containsAndroidReg = /Android/i,
        exclusiveMobileReg = /^((?!Mobile).)+$/i;   // 包含Android但不是Mobile
    return tabletOSReg.test(ua) || (containsAndroidReg.test(ua) && exclusiveMobileReg.test(ua));
}




