function error(a){var f=new Date,c;c=top===self?window.location.href:document.referrer;""===c&&(c=parent.document.location.href);a=[f,"3.0.3",a,c].join("|");a+="|"+navigator.userAgent;f="//its.tradelab.fr/?type=debug&content="+encodeURIComponent(a);(new Image).src=f;"undefined"!=typeof console&&console.log(a)}
try{(function(){function a(b,c,a){if(void 0!==b&&"undefined"===typeof tldc.tlseg[b]){void 0===c&&(c=null);var g=c,d=document.createElement("img"),e;d.style.position="absolute";d.style.height=0;d.style.width=0;e="http:"===document.location.protocol?"http://ib.adnxs.com/":"https://secure.adnxs.com/";d.src=null===g?e+"seg?add="+b+"&t=2":e+"seg?add="+b+":"+g+"&t=2";if(f){g=c;d=!1;"undefined"===typeof tldc.tl_addSeg&&"function"===typeof tl_addSeg&&(tldc.tl_addSeg=tl_addSeg);if("object"===typeof tldc.ses)if("object"===
typeof tldc.ses.seg){a:{e=tldc.ses.seg;for(var h=e.length;h--;)if(e[h]===b){e=!0;break a}e=!1}!1===e&&(d=!0,"function"===typeof tldc.tl_addSeg&&tldc.tl_addSeg(b))}else tldc.ses.seg=[],d=!0,"function"===typeof tldc.tl_addSeg&&tldc.tl_addSeg(b);!0===d&&(d=document.createElement("img"),e=navigator.userAgent,h=top===self?window.location.href:document.referrer,""===h&&(h=parent.document.location.href),a=a?"&isregen=1&ua="+encodeURIComponent(encodeURIComponent(e))+"&ur="+encodeURIComponent(encodeURIComponent(h)):
"&isregen=0&ua="+encodeURIComponent(encodeURIComponent(e))+"&ur="+encodeURIComponent(encodeURIComponent(h)),d.style.position="absolute",d.style.height=0,d.style.width=0,a="object"==typeof tldc.ses&&"string"==typeof tldc.ses.uuid2&&""!=tldc.ses.uuid2?"//its.tradelab.fr/?type=seg&uuid2="+tldc.ses.uuid2+"&sid="+b+"&val="+g+"&fp="+m+"&advid="+tldc.advid+a:"//ib.adnxs.com/getuid?//its.tradelab.fr/?type=seg&uuid2=$UID&sid="+b+"&val="+g+"&fp="+m+"&advid="+tldc.advid+a,"undefined"!==typeof tldc.uuid&&"0"!==
tldc.uuid&&(a+="&uuid="+tldc.uuid),d.src=a)}tldc.tlseg[b]=void 0===c?1:c}}var f=!0;"undefined"===typeof tldc&&(window.tldc={},f=!1);tldc.tl_getCookie=function(b){return(b=(new RegExp("(^|;)[ ]*"+b+"=([^;]*)")).exec(document.cookie))?b[2]:0};tldc.tl_loadUUIDCookie=function(){var b=tldc.tl_getCookie("_tli");return b?b:"0"};"undefined"!=typeof document.cookie&&(tldc.uuid=tldc.tl_loadUUIDCookie());var c={},m="0";"undefined"===typeof tldc.tlseg&&(tldc.tlseg={});for(var n=document.getElementsByTagName("script"),
k=0;k<n.length;k++){var l=n[k].getAttribute("src");null!==l&&-1!==l.indexOf("seg.js")&&(l.replace(RegExp("([^?=&]+)(=([^&]*))?","g"),function(b,a,f,g){c[a]=g}),"undefined"===typeof tldc.advid&&(tldc.advid="undefined"===typeof c.advid?0:c.advid),a(c.add,c.val,!1))}})()}catch(a){error("segv3|"+a.message)};