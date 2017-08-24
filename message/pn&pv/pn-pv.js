/**
 * pn包
 */
pnReq = {
    id: "sid.uid.vid.pid.peid",             // "站点id,访客id,访次id,页面id,页面访问id"
    stat: "vn.y.ym.vh.lt.ref_type",         // "访次序数,滚动条位置,阅读线位置,可视高度,页面加载时间,外链类型【0:站内，1:外链】"
    ref: "",                                // "来源"【如果有referr，则返回字符串，如果没有，则为空】
    p: "",                                  // "url"
    tl: "",                                 // "页面标题"
    cad: "",                                // "广告参数"
    ptif: "tt.sw.sh.cd.tz.pf.bl.cs",        // "终端类型,屏幕宽度,屏幕高度,屏幕色深,时区,系统平台,浏览器语言,页面字符集"
    op: "tpid.tpname.vpid.vpname.optType",  // "实验页面ID,实验页面名称,版本页面ID,版本页面名称,AB测试类型"
    def01: "",                              // ""
    v: "1.0",                               // ""
    ts: new Date().getTime()                // ""
};

pvReq = {
    id: "sid.uid.vid.pid.peid",
    stat: "pvn.y.ym.vh.lt.ref_type,vn",     // "pv序数,滚动条位置,阅读线位置,可视高度,页面加载时间,外链类型【0:站内，1:外链】,访次序数"
    ref: "",
    vref: "",                               // "访次来源【如果是该访次为直接来源，则该值为空，其他为该访次的来源url】"
    p: "",
    tl: "",
    cad: "",
    ptif: "tt.sw.sh.cd.tz.pf.bl.cs",
    op: "tpid.tpname.vpid.vpname.optType",
    def01: "",
    v: "1.0",
    ts: new Date().getTime()
};