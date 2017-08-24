/**
 * 获取元素路径
 * 优先级：id > name >
 * @param dom
 * @returns {*}
 */
function getCssPath(dom) {
    var domNodeName = dom.nodeName.toLowerCase();
    if (domNodeName == "body" || domNodeName == "html") {
        return "body";
    }
    else {
        var parentNode = dom.parentNode;
        //存在id时,用id标示元素
        if (dom.getAttribute("id")) {
            return this.getCssPath(parentNode)+'>'+"#" + dom.getAttribute("id");
        }
        //表单元素如果存在name 则用nodeName 和name来标示元素
        else if (domNodeName == "input" || domNodeName == "select" || domNodeName == "textarea" || domNodeName == "button") {
            if (dom.getAttribute("name")) {
                return this.getCssPath(parentNode) + ">" + domNodeName + ":input[name='" + dom.getAttribute("name") + "']";
            }
        }

        //元素不存在id,表单元素也没有name时,用其在其父级元素中相同nodeName元素的index来标示元素
        var allChilds=[];
        for(var i=0;i<parentNode.children.length;i++){//获取父级元素下相同nodeName的所有元素
            var child = parentNode.children[i];
            if(child.nodeName && child.nodeName.toLowerCase() ==domNodeName) {
                allChilds.push(child);
            }
        }
        for (var i = 0; i < allChilds.length; i++) {
            if (allChilds[i] == dom) {//找到元素在其父级元素下相同nodeName元素的index
                return this.getCssPath(parentNode) + ">" + domNodeName + ":eq(" + i + ")";
            }
        }
    }

}