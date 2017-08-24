|包|说明<二者发送的字段基本一致>|
|:----:|:-----:|
| PN | 该报文只在一个访次开始时发送 |
| PV | 该报文在每次访问页面时发送，除访次的第一次访问外|

## 报文定义



## 如何判断新访

```javascript
/**
* 如果包含特殊参数，则切断访次（除非特殊设置）
* ignoreCampaign： 是通过外部API植入 setIgnoreCampaign()
* list：也是来自外部API植入 setCamParam()
*/
function isHasSearchInUrl(list){
    // 用户设置了忽略广告参数时,不切断访次
    if(ignoreCampaign){
        return false;
    }
    if(location.href.match(/(utm_campaign|utm_source|utm_medium|utm_term|utm_content)/)){
        return true;
    }
    for(var i=0;i<list.length;i++){
        if(location.search.match(new RegExp("[?/&]("+list[i]+")="))){
            return true;
        }
    }
    return false;
}
```






