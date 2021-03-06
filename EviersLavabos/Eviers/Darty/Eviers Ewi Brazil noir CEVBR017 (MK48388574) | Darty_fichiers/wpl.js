var wibilongPopin=function(){"use strict";var a={minWidth:785,scheme:"https://",trackerUrl:"probe.wibilong.com",overflowDevice:"",baseUrl:"",basePurchaseUrl:"",popinLoaderUrl:"popin.wibilong.com",htmlId:{div:"PopinDiv",button:"PopinButton",span:"PopinSpan",container:"PopinContainer",shadow:"PopinShadow",iframeContainer:"PopinIframeContainer",closeButton:"PopinCloseButton",inputHiddenProduct:"PopinProductId",inputHiddenMerchant:"MerchantId",imgLogger:"imgLogger",iframe:"PopinIframe"},event:{display:1,click:2},htmlClass:{div:"PopinDiv",button:"PopinButton",imgLogger:"imgLogger",inputHiddenPopinTrackingEventInfo:"PopinTrackingInfo",inputHiddenTrackingSession:"PopinTrackingToken",inputHiddenProduct:"PopinProductId",inputHiddenMerchant:"MerchantId"}},b={ajax:function(a,c,d){var e=b.getXHR();e.onload=function(){c instanceof Function&&c(e.responseText)},e.onprogress=function(){},e.ontimeout=function(){},e.onerror=function(){},e.withCredentials=d,e.open("GET",a),setTimeout(function(){e.send()},0)},ajaxPost:function(a,c,d){var e=b.getXHR();e.onload=function(){d instanceof Function&&d(null,e.responseText)},e.onprogress=function(){},e.ontimeout=function(){},e.onerror=function(a){return d instanceof Function?d(a):void 0},e.withCredentials=!0,e.open("POST",a),e.setRequestHeader("Content-type","application/json"),setTimeout(function(){e.send(JSON.stringify(c))},0)},getXHR:function(){var a=window.XDomainRequest?new window.XDomainRequest:new XMLHttpRequest;return a},ie:function(){for(var a=3,b=document.createElement("b"),c=b.all||[];b.innerHTML="<!--[if gt IE "+ ++a+"]><i><![endif]-->",c[0];);return a>4?a:document.documentMode},isIE:function(){var a=-1,b=window.navigator.userAgent,c=b.indexOf("MSIE "),d=b.indexOf("Trident/");if(c>0)a=parseInt(b.substring(c+5,b.indexOf(".",c)),10);else if(d>0){var e=b.indexOf("rv:");a=parseInt(b.substring(e+3,b.indexOf(".",e)),10)}return a>-1?a:null},appendQs:function(a,b,c){var d=new RegExp("([?&])"+b+"=.*?(&|$)","i"),e=-1!==a.indexOf("?")?"&":"?";return a.match(d)?a.replace(d,"$1"+b+"="+encodeURIComponent(c)+"$2"):a+e+b+"="+encodeURIComponent(c)},track:{display:function(c){var e=b.getFirstChildByClass(c,a.htmlClass.imgLogger);if(e){var f=b.getTrackingInfo(c),g=b.getFirstChildByClass(c,a.htmlClass.button).dataset.buttontag,h=d.trackEvent(f,g,a.event.display);e.setAttribute("src",h);var i=function(){b.removeElt(e)};setTimeout(i,2e3)}},click:function(c){var e=b.getTrackingInfo(c),f=b.getFirstChildByClass(c,a.htmlClass.button).dataset.buttontag,g=d.trackEvent(e,f,a.event.click);b.ajax(g,function(){},!0)}},getTrackingInfo:function(c){return b.getFirstChildByClass(c,a.htmlClass.inputHiddenPopinTrackingEventInfo).value||""},getTrackingSessionToken:function(c){return b.getFirstChildByClass(c,a.htmlClass.inputHiddenTrackingSession).value||""},getChildsByClass:function(a,c){for(var d=[],e=0;e<a.childNodes.length;e++)a.childNodes[e].className==c&&d.push(a.childNodes[e]),d=d.concat(b.getChildsByClass(a.childNodes[e],c));return d},getFirstChildByClass:function(a,c){var d=null,e=b.getChildsByClass(a,c);return e[0]&&(d=e[0]),d},getDivsPopin:function(){var b=[],c=document.getElementById(a.htmlId.div);null!=c&&b.push(c);var d=document.getElementsByClassName(a.htmlClass.div);if(d&&d.length>0)for(var e=0;e<d.length;e++)b.push(d[e]);return b},removeElt:function(a){a.parentNode.removeChild(a)},changeIdToClass:function(a,c,d){for(var e=a.childNodes,f=0;f<e.length;f++)e[f].id==c&&(e[f].removeAttribute("id"),e[f].className=d),e[f].childNodes&&e[f].childNodes.length>0&&b.changeIdToClass(e[f],c,d)},getHtmlObj:{span:function(){return document.getElementById(a.htmlId.span)},container:function(){return document.getElementById(a.htmlId.container)},shadow:function(){return document.getElementById(a.htmlId.shadow)},iframeContainer:function(){return document.getElementById(a.htmlId.iframeContainer)},closeButton:function(){return document.getElementById(a.htmlId.closeButton)},inputHiddenProduct:function(){return document.getElementById(a.htmlId.inputHiddenProduct)},imgLogger:function(){return document.getElementById(a.htmlId.imgLogger)},iframe:function(){return document.getElementById(a.htmlId.iframe)}}},c={interval:null,intervalShadow:null,speed:15,speedShadow:10,scrollPosition:[],createDom:function(c){var d=document.createElement("div"),e="position: fixed; left: 50%; top: 50%; right:50%; bottom:50%; z-index: 99991; overflow: hidden;";null!==b.isIE()&&b.isIE()<9||(e+="width: 100%; max-width: "+a.minWidth+"px; height: 80%; -ms-transform: translateX(-50%) translateY(-50%); -webkit-transform: translateX(-50%) translateY(-50%); transform: translateX(-50%) translateY(-50%);"),d.id=a.htmlId.container,d.style.cssText=e;var f="display: block; z-index: 99992; background-image:url(https://statics.apreslachat.com/passets/img/picto/close.png); width: 18px; height: 18px; position: absolute; top: 8px; right: 24px";navigator.userAgent.match(/(iphone|ipad)/gi)&&(f="display: block; z-index: 99992; background-image:url(https://statics.apreslachat.com/passets/img/picto/close.png); width: 18px; height: 18px; position: fixed; top: 0px; right: 8px; margin-top: 6px;"),d.innerHTML+="<a href='javascript:void(0);' id='"+a.htmlId.closeButton+"' style='"+f+"'></a><iframe src='"+c+"' style='width:100%;height:100%' frameborder=0 id='"+a.htmlId.iframe+"'></iframe>";var g=document.createElement("div");g.id=a.htmlId.shadow,g.style.cssText="position: fixed; top: 0%; left: 0; width: 100%; height: 100%; background-color: black; z-index: 99990; opacity: 0.7;",document.body.appendChild(d),document.body.appendChild(g)},removeDom:function(){null==this.interval&&null==this.intervalShadow&&(document.body.removeChild(document.getElementById(a.htmlId.container)),document.body.removeChild(document.getElementById(a.htmlId.shadow)))},lockScroll:function(){this.scrollPosition.pageXOffset=document.documentElement.scrollLeft||document.body.scrollLeft,this.scrollPosition.pageYOffset=document.documentElement.scrollTop||document.body.scrollTop;var a=[];a.push(document.getElementsByTagName("html")[0]),a.push(document.getElementsByTagName("body")[0]);for(var b=0;b<a.length;b++){var c=a[b];c.data=c.data+"&overflow="+(c.style?c.style.overflow:""),c.style.overflow="hidden",navigator.userAgent.match(/(iphone|ipad)/gi)&&(c.data+="&height="+(c.style?c.style.height:"")+"&maxHeight="+(c.style?c.style.maxHeight:""),c.style.height="100%",c.style.maxHeight="100%"),navigator.userAgent.match(/(ipad)/gi)&&0===b&&(c.data+="&position="+(c.style?c.style.position:""),c.style.position="fixed")}window.scrollTo(this.scrollPosition.pageXOffset,this.scrollPosition.pageYOffset)},unlockScroll:function(){var a=[];a.push(document.getElementsByTagName("html")[0]),a.push(document.getElementsByTagName("body")[0]);for(var b=0;b<a.length;b++)for(var c=a[b],d=c.data.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");"undefined"!=typeof f[1]&&(c.style[f[0]]=f[1].length>1?f[1]:"")}window.scrollTo(this.scrollPosition.pageXOffset,this.scrollPosition.pageYOffset)},slideCenter:function(){var a=b.getHtmlObj.container(),d=a.style.top;d=""!=d?parseInt(d.replace("%","")):1;var e=d+2;50>d?a.style.top=e+"%":(clearInterval(c.interval),c.interval=null)},slideBottom:function(){var a=b.getHtmlObj.container(),d=a.style.top;d=""!=d?parseInt(d.replace("%","")):1;var e=d+2;150>d?a.style.top=e+"%":(clearInterval(c.interval),c.interval=null,c.removeDom())},fadeIn:function(){var a=b.getHtmlObj.shadow(),d=a.style.opacity;d=parseFloat(d);var e=d+.1;.5>d?a.style.opacity=e:(clearInterval(c.intervalShadow),c.intervalShadow=null)},fadeOut:function(){var a=b.getHtmlObj.shadow(),d=a.style.opacity;d=parseFloat(d);var e=d-.01;d>.01?a.style.opacity=e:(clearInterval(c.intervalShadow),c.intervalShadow=null,c.removeDom())},resize:function(){var c=b.getHtmlObj.container();if(null!==c&&null!==b.isIE()&&b.isIE()<9){c.style.width=document.documentElement.clientWidth>a.minWidth?a.minWidth+"px":"100%";var d=.8*document.documentElement.clientHeight;c.style.height=d+"px";var e=c.clientHeight/2,f=c.clientWidth/2;c.style.marginTop="-"+e+"px",c.style.marginLeft="-"+f+"px"}},fitContainer:function(){var a=b.getHtmlObj.container(),c=b.getHtmlObj.iframe();a.clientHeight>c.clientHeight&&(a.style.heigth=c.clientHeight)},show:function(){this.resize(),this.interval=setInterval(c.slideCenter,c.speed),this.intervalShadow=setInterval(c.fadeIn,c.speedShadow)},hide:function(){null==this.interval&&null==this.intervalShadow&&(this.removeDom(),f.buttons(),this.unlockScroll())}},d={button:function(b){var c=b.getAttribute("data-product");return a.scheme+a.popinLoaderUrl+"/button?product="+c+"&host="+a.baseUrl},popin:function(c){var d=c.getAttribute("data-product"),e=b.getFirstChildByClass(c,a.htmlClass.inputHiddenProduct).value;return a.baseUrl+"/question/index?productid="+e+"&merchantRef="+d},detailQuestion:function(b,c){return a.baseUrl+"/reply/index?questionId="+b+"&Valid="+c},trackEvent:function(b,c,d){return a.scheme+a.trackerUrl+"/popinevt/create?tk="+encodeURIComponent(b)+"&tg="+c+"&e="+d+"&u="+encodeURI(window.location.href)},sessionTracker:function(b,c){return a.scheme+a.trackerUrl+"/session/create?token="+encodeURIComponent(b)+"&redirectTo="+encodeURIComponent(c)},purchaseConfirmation:function(b,c){return a.scheme+a.trackerUrl+"/purchases"}},e={all:function(){this.scheme(),this.localVar(),this.elements(),this.detail()},purchaseConfirmation:function(a){var c=a;return{purchase:function(a,e){a.host=c,a.productRef instanceof Array||(a.productRef=[a.productRef]);var f=d.purchaseConfirmation();b.ajaxPost(f,a,function(a){return e instanceof Function&&a?e(a):e instanceof Function?e(null,{confirm:!0}):void 0})}}},scheme:function(){var c=b.isIE();null!==c&&11>c&&window.location.protocol+"//"!==a.scheme&&(a.scheme=window.location.protocol+"//")},elements:function(){var a=b.getDivsPopin();if(a&&a.length>0)for(var c=0;c<a.length;c++)e.loadButton(a[c])},loadButton:function(c){(b.ie()>8||"undefined"==typeof b.ie())&&b.ajax(d.button(c),function(d){c.innerHTML=d,b.changeIdToClass(c,a.htmlId.button,a.htmlClass.button),b.changeIdToClass(c,a.htmlId.imgLogger,a.htmlClass.imgLogger),b.changeIdToClass(c,a.htmlId.inputHiddenProduct,a.htmlClass.inputHiddenProduct),b.changeIdToClass(c,a.htmlId.inputHiddenMerchant,a.htmlClass.inputHiddenMerchant),f.button(c),f.resize(),b.track.display(c)},!1)},detail:function(){if(window.location.hash.length>0){var a,b=window.location.hash,c=null,e=null;if(b=b.split("#").filter(function(a){return a.match(/Thread=[0-9]+&Valid={0,1}/)}),b.length>0){a=b[0],a=a.split("&");for(var f=0;f<a.length;f++){var h=a[f].split("=");2==h.length&&("Thread"==h[0]&&(c=h[1]),"#Thread"==h[0]&&(c=h[1]),"Valid"==h[0]&&(e=h[1]))}(null!=c||null!=e)&&g(d.detailQuestion(c,e))}}},localVar:function(){var c=b.getDivsPopin();c&&c.length>0&&(a.baseUrl=c[0].getAttribute("data-url"))}},f={close:function(){var a=b.getHtmlObj.shadow();a&&(a.onclick=function(){c.hide()});var d=b.getHtmlObj.closeButton();d&&(d.onclick=function(){c.hide()}),window.onkeyup=function(a){27==a.which&&c.hide()}},button:function(c){var e=b.getFirstChildByClass(c,a.htmlClass.button);e&&(e.onclick=function(){var a=d.popin(c),e=b.getTrackingSessionToken(c);e&&""!==e&&(a=d.sessionTracker(e,a)),g(a,c)})},buttons:function(){for(var a=b.getDivsPopin(),c=0;c<a.length;c++)f.button(a[c])},resize:function(){null==window.onresize?window.onresize=function(a){c.resize()}:window.onresize=function(a){c.resize()}}},g=function(a,d){c.createDom(a),c.resize(),f.close(),c.lockScroll(),d&&b.track.click(d)};return{init:function(){return e.all()},open:function(a,b){return g(a,b)},animate:function(){return c},hide:function(){return c.Hide()},getChildsByClass:function(a,c){return b.getChildsByClass(a,c)},PurchaseConfirmation:function(a){return e.purchaseConfirmation(a)}}}();if("complete"===document.readyState||"interactive"===document.readyState)wibilongPopin.init();else if(null==window.onload)window.onload=function(){wibilongPopin.init()};else{var temp=window.onload;window.onload=function(){temp(),wibilongPopin.init()}}