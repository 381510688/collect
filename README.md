# collect
JavaScript采集器

| 功能模块划分 | 说明 |
|----------|----------|
| 外部资源加载 |      如，弹出式热图、事件、badge等 |
| 内部、外部API |    如，setTrackEvent等 |
| 内部基础逻辑 |      如，报文发送（每个包单独拆离） |
| 关键指标、字段说明 | 如，静默时间定义、心跳时间定义等 |
| 工具情况 |         如，cookie、url等处理 |
| 优雅降级shim、polyfill |     如，querySelector、addEventListener等函数 |
| 特殊对应处理 |      如，部分站点抽样 |



## 注意问题
- 错误的处理
- 兼容性处理
- 特殊对应处理
- 用户布玛使用iframe方式，位置坐标的兼容处理！


## 不支持的情况
- Access-Control-Allow-Origin限制（代理实现）
- Content-Security-Policy有特殊指定
- Strict-Transport-Security特殊要求


## 其他
```JavaScript
var ary = ['a', 'b', 'c'];
for(var i = 0, len = ary.length; i < len; i++) {
    if(ua.indexOf(ary[i]) > -1) return true;
    return false;
}
// 替换写法
return /(a|b|c)/i.test(ua);
```