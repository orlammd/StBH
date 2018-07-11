function error(msg) {
  var version = "2.5.9";
  var now = new Date();
  var dUrl = '';
  if (top === self) dUrl = window.location.href;
  else dUrl = document.referrer;
  if (dUrl === "") dUrl = parent.document.location.href;
  var content = [now, version, msg, dUrl].join('|');
  content += '|' + navigator.userAgent;
  var errorUrl = "//its.tradelab.fr/?type=debug&content=" + encodeURIComponent(content);
  var img = new Image();
  img.src = errorUrl;
  if ( typeof console != "undefined" ) console.log(content);
}

try {

(function(){

  if (typeof tldc === 'undefined') {
    window.tldc = {
      advid: '401492',
      domain: ''
    };
  }

  tldc.keyStr = "ABCDEFGHIJKLMNOP" +
    "QRSTUVWXYZabcdef" +
    "ghijklmnopqrstuv" +
    "wxyz0123456789+/" +
    "=";
  
  tldc.lSc = document.getElementsByTagName("script")[0];

tldc.decode64=function(a){var b="",d,c,f="",g,h="",e=0;/[^A-Za-z0-9\+\/\=]/g.exec(a);a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do d=tldc.keyStr.indexOf(a.charAt(e++)),c=tldc.keyStr.indexOf(a.charAt(e++)),g=tldc.keyStr.indexOf(a.charAt(e++)),h=tldc.keyStr.indexOf(a.charAt(e++)),d=d<<2|c>>4,c=(c&15)<<4|g>>2,f=(g&3)<<6|h,b+=String.fromCharCode(d),64!=g&&(b+=String.fromCharCode(c)),64!=h&&(b+=String.fromCharCode(f));while(e<a.length);return unescape(b)};
tldc.tl_urlencode=function(a){a=(a+"").toString();return encodeURIComponent(a).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")};
tldc.tl_stringify=function(a){var b=typeof a;if("object"!=b||null===a)return"string"==b&&(a='"'+a+'"'),String(a);var d,c,f=[],g=a&&a.constructor==Array;for(d in a)a.hasOwnProperty(d)&&(c=a[d],b=typeof c,"string"==b?c='"'+c+'"':"object"==b&&null!==c&&(c=tldc.tl_stringify(c)),f.push((g?"":'"'+d+'":')+String(c)));return(g?"[":"{")+String(f)+(g?"]":"}")};tldc.tl_getDomain=function(a){var b=/^(?:(?:https?|ftp):)?\/*(?:[^@]+@)?([^:/#]+)/.exec(a);return b?b[1].split(".").slice(-2).join("."):a};
tldc.tl_getReferrer=function(){var a="";if(top===self)a=document.referrer;else try{a=parent.document.referrer}catch(b){a=""}a=a.substr(a.indexOf("://")+3);return a=a.substr(0,255)};tldc.tl_getLocation=function(){var a="",a=top===self?window.location.href:document.referrer;""===a&&(a=parent.document.location.href);a=a.substr(a.indexOf("://")+3);return a=a.substr(0,255)};
tldc.tl_setCookie=function(a,b,d,c,f,g){var h;d&&(h=new Date,h.setTime(h.getTime()+d));document.cookie=a+"="+b+(d?";expires="+h.toGMTString():"")+";path="+(c||"/")+(f?";domain="+f:"")+(g?";secure":"")};tldc.tl_getCookie=function(a){return(a=(new RegExp("(^|;)[ ]*"+a+"=([^;]*)")).exec(document.cookie))?a[2]:0};tldc.tl_insertInDom=function(a){var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)};
tldc.injectScript=function(a,b){var d=a.id,c=a.code,f=a.src,g=a.async,h=a.defer,e=document.createElement("script");e.type="text/javascript";d&&(e.id=d);g&&e.setAttribute("async","async");h&&e.setAttribute("defer","defer");e.readyState?e.onreadystatechange=function(){if("loaded"==e.readyState||"complete"==e.readyState)e.onreadystatechange=null,b()}:e.onload=function(){b()};f?e.src=f:e.text=tldc.decode64(c);tldc.lSc.parentNode.insertBefore(e,tldc.lSc)};
tldc.rLoad=function(a){for(var b=0;b<a.length;b++)tldc.injectScript(a[b],function(){})};tldc.tl_check4xconv=function(a){for(var b=0;b<tldc.ses.xconv.length;b++)if(parseInt(tldc.ses.xconv[b])===a)return!0;return!1};tldc.tl_addXconv=function(a){tldc.ses.xconv.push(a);tldc.tl_setSessionCookie(tldc.ses)};tldc.tl_addSeg=function(a){tldc.ses.seg.push(a);tldc.tl_setSessionCookie(tldc.ses)};tldc.tl_isSiteDomain=function(a){var b;b=tldc.domain.toLowerCase();return a===b?!0:!1};
tldc.tl_updateAnalyticsData=function(){if(!tldc.analytics_loaded){var a=Math.round((new Date).getTime()/1E3),b=tldc.tl_getDomain(tldc.referrer_url),d=tldc.vis||tldc.tl_loadVisitorCookie(),c=tldc.ses||tldc.tl_loadSessionCookie(),f=tldc.ref||tldc.tl_loadCampaignCookie(),g=!c.session;tldc.analytics_loaded=!0;d.total_page_cnt++;g?(c.session=!0,d.vis_cnt++,d.prev_vis_ts=d.curr_vis_ts,d.prev_page_cnt=d.curr_page_cnt,d.curr_page_cnt=1):d.curr_page_cnt++;d.curr_vis_ts=a;if(g||b!==tldc.domain&&tldc.referrer_url!==
f.ref_url)f.ref_url=tldc.referrer_url.slice(0,512),f.ref_ts=a,f.page_url=tldc.locationHref.slice(0,512),f.dm=tldc.domain,tldc.tl_setCampaignCookie(f),a=document.createElement("img"),a.style.position="absolute",a.style.height=0,a.style.width=0,a.setAttribute("id","imgTP"),a.src=document.location.protocol+"//its.tradelab.fr/?type=tp&advid="+tldc.advid+"&adata="+tldc.tl_getAnalyticsData(),tldc.tl_insertInDom(a);tldc.tl_setVisitorCookie(d);tldc.tl_setSessionCookie(c)}};
tldc.firePixel=function(a,b){var d=document.createElement("img"),c;d.style.position="absolute";d.style.height=0;d.style.width=0;c=document.location.protocol;c=("https:"===c?c+"//secure.adnxs.com/":c+"//ib.adnxs.com/")+("seg?add="+[].concat(a).join(","));null!==b&&(c+=":"+b);c+="&t=2";d.src=c;tldc.tl_insertInDom(d)};tldc.tl_sync=function(a){tldc.ses.uuid2=a;tldc.tl_setSessionCookie(tldc.ses);a=a.slice(-2);tldc.firePixel("2491894",a)};
tldc.tl_loadVisitorCookie=function(){var a=tldc.tl_getCookie("_tlv"),b=Math.round((new Date).getTime()/1E3);return a.length?(a=a.split("."),{vis_cnt:a[0],frst_vis_ts:a[1],prev_vis_ts:a[2],curr_vis_ts:a[3],total_page_cnt:a[4],prev_page_cnt:a[5],curr_page_cnt:a[6]}):{vis_cnt:0,frst_vis_ts:b,prev_vis_ts:0,curr_vis_ts:b,total_page_cnt:0,prev_page_cnt:0,curr_page_cnt:1}};
tldc.tl_loadCampaignCookie=function(){var a=tldc.tl_getCookie("_tlc"),b={ref_url:"",ref_ts:0,page_url:"",dm:""};return a.length?(a=-1<a.indexOf("|")?a.split("|"):a.split(":"),4!==a.length?b:{ref_url:a[0],ref_ts:a[1],page_url:a[2],dm:a[3]}):b};
tldc.tl_loadSessionCookie=function(){var a=tldc.tl_getCookie("_tls");return a?(a=a.split("."),"undefined"===typeof a[1]&&(a[1]=""),"undefined"===typeof a[2]&&(a[2]=""),"undefined"===typeof a[3]&&(a[3]=""),{session:!0,xconv:""===a[1]?[]:a[1].split(","),seg:""===a[2]?[]:a[2].split(","),uuid2:""===a[3]?"":a[3]}):{session:!1,xconv:[],seg:[],uuid2:""}};
tldc.tl_loadParamsCookie=function(){var a=tldc.tl_getCookie("_tlp"),b;b=[];var d={};if(a.length){b=a.split("#");b=b[0].split(",");for(a=0;a<b.length;a++){var c=[],c=b[a].split(":");d[c[0]]=c[1]}return{fsegs:d}}return{fsegs:{}}};tldc.tl_loadAnalyticsCookies=function(){tldc.ref=tldc.tl_loadCampaignCookie();tldc.vis=tldc.tl_loadVisitorCookie();tldc.ses=tldc.tl_loadSessionCookie()};
tldc.tl_getAnalyticsData=function(){var a=tldc.ref||tldc.tl_loadCampaignCookie(),b=tldc.vis||tldc.tl_loadVisitorCookie();return tldc.tl_urlencode(tldc.tl_stringify({c:a,v:b}))};tldc.tl_getParamsData=function(){var a=tldc.params||tldc.tl_loadParamsCookie();return tldc.tl_urlencode(tldc.tl_stringify(a))};
tldc.tl_setVisitorCookie=function(a){tldc.tl_setCookie("_tlv",a.vis_cnt+"."+a.frst_vis_ts+"."+(a.prev_vis_ts||"")+"."+a.curr_vis_ts+"."+a.total_page_cnt+"."+a.prev_page_cnt+"."+a.curr_page_cnt,tldc.config_visitor_cookie_timeout,tldc.config_cookie_path,tldc.config_cookie_domain)};tldc.tl_setSessionCookie=function(a){a="*."+a.xconv.join(",")+"."+a.seg.join(",")+"."+a.uuid2;tldc.tl_setCookie("_tls",a,tldc.config_session_cookie_timeout,tldc.config_cookie_path,tldc.config_cookie_domain)};
tldc.tl_setCampaignCookie=function(a){var b=[];b.push(encodeURIComponent(a.ref_url));b.push(a.ref_ts);b.push(encodeURIComponent(a.page_url));b.push(a.dm);tldc.tl_setCookie("_tlc",b.join(":"),tldc.config_referrer_cookie_timeout,tldc.config_cookie_path,tldc.config_cookie_domain)};tldc.tl_setParamsCookie=function(a){var b="";a=a.fsegs;var d=[],c;for(c in a)a.hasOwnProperty(c)&&d.push(c+":"+a[c]);b+=d.join(",");tldc.tl_setCookie("_tlp",b,tldc.config_params_cookie_timeout,tldc.config_cookie_path,tldc.config_cookie_domain)};
tldc.tl_initTagman=function(){if(""===tldc.domain||"undefined"===tldc.domain||"null"===tldc.domain)tldc.domain=tldc.tl_getDomain(location.hostname);tldc.analytics_loaded=!1;tldc.locationHref=tldc.tl_getLocation();tldc.referrer_url=tldc.tl_getReferrer();tldc.config_visitor_cookie_timeout=864E5;tldc.config_params_cookie_timeout=864E5;tldc.config_session_cookie_timeout=18E5;tldc.config_referrer_cookie_timeout=864E5;tldc.config_cookie_path="/";tldc.config_cookie_domain="."+tldc.domain;tldc.tl_setCookie("_tlc",
"",-1E4,"/",location.hostname);tldc.tl_setCookie("_tls","",-1E4,"/",location.hostname);tldc.tl_setCookie("_tlv","",-1E4,"/",location.hostname);tldc.tl_loadAnalyticsCookies();tldc.params=tldc.tl_loadParamsCookie();tldc.tl_updateAnalyticsData()};

   var dUrl = tldc.tl_getLocation(),
    scriptArray = [],
    n = 0;

  window.tl_sync = tldc.tl_sync;
  window.injectScript = tldc.injectScript;
  window.lSc = tldc.lSc;

  tldc.tl_initTagman();
  
  tldc.injectScript({"src":"//cdn.tradelab.fr/fseg/135.js?add=2119547"}, function(){});
	if ( tldc.vis.vis_cnt > 1 ) tldc.injectScript({"src":"//cdn.tradelab.fr/fseg/135.js?add=2119549"}, function(){});
	if ( tldc.vis.curr_page_cnt > 1 ) tldc.injectScript({"src":"//cdn.tradelab.fr/fseg/135.js?add=2119548"}, function(){});
	else {
		setTimeout(function(){
			tldc.injectScript({"src":"//cdn.tradelab.fr/fseg/135.js?add=2119548"}, function(){});
		}, 5000);
	}
	
  
  if ( dUrl.match(/DartyCaddieReceiptView/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/conv/438314.js"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2327194"};
}
if ( dUrl.match(/boutique\/noel/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2327133"};
}
if ( dUrl.match(/achat\/jeux\_loisirs/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2327134"};
}
if ( dUrl.match(/achat\/informatique/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2327137"};
}
if ( dUrl.match(/achat\/boutique\/espace\_apple/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2327138"};
}
if ( dUrl.match(/achat\/telephonie/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/540.js?add=7504096"};
}
if ( dUrl.match(/achat\/photo/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2327140"};
}
if ( dUrl.match(/achat\/hifi/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2327141"};
}
if ( dUrl.match(/achat\/audio/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2327142"};
}
if ( dUrl.match(/achat\/petit\_electromenager/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2327143"};
}
if ( dUrl.match(/achat\/maison/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2327144"};
}
if ( dUrl.match(/achat\/beaute/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2327145"};
}
if ( dUrl.match(/achat\/gros\_electromenager/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/1158.js?add=2327146"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/540.js?add=7504015"};
}
if ( dUrl.match(/achat\/encastrable/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/540.js?add=7504015"};
}
if ( dUrl.match(/achat\/cuisine/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2327148"};
}
if ( dUrl.match(/basket\_add/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/135.js?add=2327189"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2342505"};
	scriptArray[n++] = {"code":"CmlmICh0eXBlb2YgZXh0cmFfaW5mbyA9PSAidW5kZWZpbmVkIikgdmFyIGV4dHJhX2luZm8gPSB7fTsKaWYodHlwZW9mIGlkekN1c3RvbURhdGEgIT0gInVuZGVmaW5lZCIpewogICAgdmFyIHByZF9pZHMgPSBpZHpDdXN0b21EYXRhWyJjb2RpYyJdOwogICAgaWYgKHR5cGVvZiBwcmRfaWRzID09ICJzdHJpbmciKSB7CiAgICAgICAgZXh0cmFfaW5mb1sicHJvZHVjdHMiXSA9IHByZF9pZHMuc3BsaXQoIjo6IikKICAgICAgICBjb25zb2xlLmxvZygicHJkc3BsaXQiLHByZF9pZHMuc3BsaXQoIjo6IikpCiAgICB9CiAgICB2YXIgcHJkX2JyYW5kcyA9IGlkekN1c3RvbURhdGFbIm1hcnF1ZSJdOwogICAgaWYgKHR5cGVvZiBwcmRfaWRzID09ICJzdHJpbmciKSB7CiAgICAgICAgcHJkX2JyYW5kcyA9cHJkX2JyYW5kcy5zcGxpdCgiOjoiKQogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJkX2JyYW5kcy5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBpZiAocHJkX2JyYW5kc1tpXSA9PT0gIkFjZXIiKXsKICAgICAgICAgICAgICAgIHRsZGMuaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvY29udi83Nzg1MTEuanMifSxmdW5jdGlvbigpe30pOwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQp9CmNvbnNvbGUubG9nKCJ4dHIiLGV4dHJhX2luZm8pOwp0bGRjLmluamVjdFNjcmlwdCh7CiAgICAic3JjIjogIi8vY2RuLnRyYWRlbGFiLmZyL2NvbnYvNjM2MDY1LmpzIgp9LCBmdW5jdGlvbigpIHt9KTsK"};
	scriptArray[n++] = {"code":"CnRsZGMuaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvdWFwYXJzZXIubWluLmpzIn0sIGZ1bmN0aW9uKCkgewoJdmFyIHBhcnNlciA9IG5ldyBVQVBhcnNlcigpOwoJdmFyIHVhb2JqID0gcGFyc2VyLmdldFJlc3VsdCgpOwoJdmFyIGRibXRyYWNrZXI7CgkvL2NvbnNvbGUubG9nKHBhcnNlci5nZXRSZXN1bHQoKSk7CglpZiAoIHVhb2JqLmRldmljZS50eXBlID09PSAnbW9iaWxlJyB8fCB1YW9iai5kZXZpY2UudHlwZSA9PT0gJ3RhYmxldCcgKSBkYm10cmFja2VyID0gImh0dHBzOi8vNDY5NDQ0MS5mbHMuZG91YmxlY2xpY2submV0L2FjdGl2aXR5aTtzcmM9NDY5NDQ0MTt0eXBlPWludm1lZGlhO2NhdD1pcmhudWtwejtkY19sYXQ9O2RjX3JkaWQ9O3RhZ19mb3JfY2hpbGRfZGlyZWN0ZWRfdHJlYXRtZW50PTtvcmQ9IjsgCgllbHNlIGRibXRyYWNrZXIgPSAiaHR0cHM6Ly80Njk0NDQxLmZscy5kb3VibGVjbGljay5uZXQvYWN0aXZpdHlpO3NyYz00Njk0NDQxO3R5cGU9aW52bWVkaWE7Y2F0PWV2Zml0bmh6O2RjX2xhdD07ZGNfcmRpZD07dGFnX2Zvcl9jaGlsZF9kaXJlY3RlZF90cmVhdG1lbnQ9O29yZD0iOwoJdmFyIGF4ZWwgPSBNYXRoLnJhbmRvbSgpICsgIiI7Cgl2YXIgYSA9IGF4ZWwgKiAxMDAwMDAwMDAwMDAwMDsKCWlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImlmcmFtZSIpOwoJaWZyYW1lLnNyYyA9IGRibXRyYWNrZXIgKyBhICsgIj8iOwoJaWZyYW1lLnNldEF0dHJpYnV0ZSgiaGVpZ2h0IiwgIjEiKTsKCWlmcmFtZS5zZXRBdHRyaWJ1dGUoIndpZHRoIiwgIjEiKTsKCWlmcmFtZS5zZXRBdHRyaWJ1dGUoImZyYW1lYm9yZGVyIiwgIjAiKTsKCWlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gIm5vbmUiOwoJdmFyIHJlZiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCJzY3JpcHQiKVswXTsgCglyZWYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaWZyYW1lLHJlZik7Cn0pOwo="};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/540.js?add=2327190"};
	scriptArray[n++] = {"code":"CiAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzY3JpcHQiKTsKICBlLmFzeW5jID0gdHJ1ZTsKICBlLnNyYyA9ICJodHRwczovL2FkLmF0ZG10LmNvbS9tL2EuanM7bT0xMTI3NzIwMTAzNDM5MjtjYWNoZT0iICsgTWF0aC5yYW5kb20oKSArCiAgICAiP3RhZz0xMTI3NzIwMTAzNDM5OSI7CiAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgic2NyaXB0IilbMF07CiAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLCBzKTsK"};
	scriptArray[n++] = {"code":"CmlmKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaSkgKXsKdGxkYy5pbmplY3RTY3JpcHQoeyJzcmMiOiIvL2Nkbi50cmFkZWxhYi5mci9zZWcuanM/YWRkPTgzNTY3MDEifSxmdW5jdGlvbigpe30pOwp9CmVsc2UgeyB0bGRjLmluamVjdFNjcmlwdCh7InNyYyI6Ii8vY2RuLnRyYWRlbGFiLmZyL3NlZy5qcz9hZGQ9ODM4NzQ3NiJ9LGZ1bmN0aW9uKCl7fSk7Cn0K"};
}
if ( dUrl.match(/identification/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/540.js?add=2327191"};
}
if ( dUrl.match(/livraison/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/135.js?add=2327192"};
}
if ( dUrl.match(/tunnel\_achat\/paiement/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/135.js?add=2327193"};
}
if ( dUrl.match(/tunnel\_achat\/recu/i) ) {
	scriptArray[n++] = {"code":"CmlmKHR5cGVvZiBpZHpDdXN0b21EYXRhICE9ICJ1bmRlZmluZWQiKXsKICAgIHZhciBwcmRfaWRzID0gaWR6Q3VzdG9tRGF0YVsiY29kaWMiXTsKICAgIGlmICh0eXBlb2YgcHJkX2lkcyA9PSAic3RyaW5nIikgewogICAgICAgIGlmICh0eXBlb2YgZXh0cmFfaW5mbyA9PSAidW5kZWZpbmVkIikgdmFyIGV4dHJhX2luZm8gPSB7fTsKICAgICAgICBleHRyYV9pbmZvWyJwcm9kdWN0cyJdID0gcHJkX2lkcy5zcGxpdCgiOjoiKQogICAgfQp9CnRsZGMuaW5qZWN0U2NyaXB0KHsKICAgICJzcmMiOiAiLy9jZG4udHJhZGVsYWIuZnIvY29udi80MzgzMTQuanMiCn0sIGZ1bmN0aW9uKCkge30pOwo="};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=6672999"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/conv/791639.js"};
}
if ( dUrl.match(/achat\/gps\_autoradio/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2403478"};
}
if ( dUrl.match(/achat\/informatique\/logiciel/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2403482"};
}
if ( dUrl.match(/achat\/cuisine\/nos\-cuisines/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/383.js?add=2508802"};
}
if ( dUrl.match(/achat\/cuisine\/nos\-equipements/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/383.js?add=2508810"};
}
if ( dUrl.match(/votre\-projet\-pas\-a\-pas\/le\-financement/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/383.js?add=2508813"};
}
if ( dUrl.match(/prenez\-rendez\-vous\-avec\-un\-concepteur/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/383.js?add=2508820"};
}
if ( dUrl.match(/nos\-services\/rendezvous\.html/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2508824"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/conv/497386.js"};
}
if ( dUrl.match(/puer-joue/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2723621"};
}
if ( dUrl.match(/tunnel\_achat\/identification/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/135.js?add=2327190"};
}
if ( dUrl.match(/tunnel\_achat\/livraison\/destinataire/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/135.js?add=2327191"};
}
if ( dUrl.match(/tunnel\_achat\/livraison\/transporteur/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/135.js?add=2327192"};
}
if ( dUrl.match(/tunnel\_achat\/paiement\/autre/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/135.js?add=2327193"};
}
if ( dUrl.match(/hp\_/i) ) {
	scriptArray[n++] = {"code":"CmZ1bmN0aW9uIHN0YXJ0aXQgKCkgewp3aW5kb3cuc2V0VGltZW91dCAoc3RhdHVzQ2hhbmdlLCAyICogMTAwMCk7Cn0KZnVuY3Rpb24gc3RhdHVzQ2hhbmdlICgpIHsKCXZhciBlbGVtID0geyJzcmMiOiIvL2Nkbi50cmFkZWxhYi5mci9jb252LzU2NjM5MS5qcyJ9OwoJaW5qZWN0U2NyaXB0KGVsZW0sIGZ1bmN0aW9uKCl7fSk7Cn0Kc3RhcnRpdCgpOwo="};
}
if ( dUrl.match(/samsung\_galaxy/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/conv/589295.js"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=3268161"};
}
if ( dUrl.match(/achat\/services\/forfaits\-abonnements/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/644.js?add=3284852"};
}
if ( dUrl.match(/bouyguestelecom/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/644.js?add=3284853"};
}
if ( dUrl.match(/bouyguestelecom\.darty\.com\/cms\/web\/bouygues\/bbox/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/644.js?add=3284855"};
}
if ( dUrl.match(/darty\.com\/nav\/achat/i) ) {
	scriptArray[n++] = {"code":"CnZhciBheGVsID0gTWF0aC5yYW5kb20oKSArICIiOwp2YXIgYSA9IGF4ZWwgKiAxMDAwMDAwMDAwMDAwMDsKaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7CmlmcmFtZS5zcmMgPSAiaHR0cHM6Ly80Njk0NDQxLmZscy5kb3VibGVjbGljay5uZXQvYWN0aXZpdHlpO3NyYz00Njk0NDQxO3R5cGU9aW52bWVkaWE7Y2F0PWkzZmQ5azVhO29yZD0nICsgYSArICc/IjsKaWZyYW1lLnNldEF0dHJpYnV0ZSgiaGVpZ2h0IiwgIjEiKTsKaWZyYW1lLnNldEF0dHJpYnV0ZSgid2lkdGgiLCAiMSIpOwppZnJhbWUuc2V0QXR0cmlidXRlKCJmcmFtZWJvcmRlciIsICIwIik7CmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOwp2YXIgcmVmID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOyAKcmVmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGlmcmFtZSxyZWYpOwo="};
}
if ( dUrl.match(/darty\.com\/m\/produit/i) ) {
	scriptArray[n++] = {"code":"CnZhciBheGVsID0gTWF0aC5yYW5kb20oKSArICIiOwp2YXIgYSA9IGF4ZWwgKiAxMDAwMDAwMDAwMDAwMDsKaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7CmlmcmFtZS5zcmMgPSAiaHR0cHM6Ly80Njk0NDQxLmZscy5kb3VibGVjbGljay5uZXQvYWN0aXZpdHlpO3NyYz00Njk0NDQxO3R5cGU9aW52bWVkaWE7Y2F0PXV3ODRqNHNwO29yZD0nICsgYSArICc/IjsKaWZyYW1lLnNldEF0dHJpYnV0ZSgiaGVpZ2h0IiwgIjEiKTsKaWZyYW1lLnNldEF0dHJpYnV0ZSgid2lkdGgiLCAiMSIpOwppZnJhbWUuc2V0QXR0cmlidXRlKCJmcmFtZWJvcmRlciIsICIwIik7CmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOwp2YXIgcmVmID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOyAKcmVmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGlmcmFtZSxyZWYpOwo="};
}
if ( dUrl.match(/com\/cuisine/i) ) {
	scriptArray[n++] = {"code":"Cgp2YXIgWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJyZHZfY3Vpc2luZSIpOwoKaWYgKFgpIHsKICAgWC5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsZnVuY3Rpb24gKCl7CiAgICB0bGRjLmluamVjdFNjcmlwdCh7InNyYyI6Ii8vY2RuLnRyYWRlbGFiLmZyL2NvbnYvNjgyNzc2LmpzIn0sIGZ1bmN0aW9uKCl7fSkKICB9LGZhbHNlKTsKfQoK"};
}
if ( dUrl.match(/com\/cuisine\/\#dartyclic/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/895.js?add=4816745"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/conv/682375.js"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=7270047"};
}
if ( dUrl.match(/com\/cuisine\/remise\-exceptionnelle/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/895.js?add=4816745"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/conv/682375.js"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=7270047"};
}
if ( dUrl.match(/services\=espace\-cuisine/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/conv/682378.js"};
}
if ( dUrl.match(/entr-et-soin-de-la-mais/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/1153.js?add=6331169"};
}
if ( dUrl.match(/peti-elec-cuis/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/1153.js?add=6331169"};
}
if ( dUrl.match(/beau-form-et-sant/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/1153.js?add=6390436"};
}
if ( dUrl.match(/info-et-tabl\_ordi-port\_pc-port/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=6669961"};
}
if ( dUrl.match(/ordi-port\_pc-port-tact/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=6669963"};
}
if ( dUrl.match(/mac\_macb/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=6669964"};
}
if ( dUrl.match(/info-et-tabl\_tabl-ipad/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=6669965"};
}
if ( dUrl.match(/ordi-de-bure\_pc-tout-en-un/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=6669966"};
}
if ( dUrl.match(/appl\_mac\_mac-mini/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=6669967"};
}
if ( dUrl.match(/black\_friday/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/135.js?add=7153567"};
}
if ( dUrl.match(/achat\/audio\_mp3\_mp4/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/540.js?add=7504040"};
}
if ( dUrl.match(/achat\/gps\_autoradio\_dvd\_portable/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/540.js?add=7504096"};
}
if ( dUrl.match(/achat\/hifi\_video/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/540.js?add=7504120"};
}
if ( dUrl.match(/achat\/photo\_camescope/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/fseg/540.js?add=7504120"};
}
if ( dUrl.match(/pop\/panier/i) ) {
}
scriptArray[n++] = {"code":"CnZhciBheGVsID0gTWF0aC5yYW5kb20oKSArICIiOwp2YXIgYSA9IGF4ZWwgKiAxMDAwMDAwMDAwMDAwMDsKaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7CmlmcmFtZS5zcmMgPSAiaHR0cHM6Ly80Njk0NDQxLmZscy5kb3VibGVjbGljay5uZXQvYWN0aXZpdHlpO3NyYz00Njk0NDQxO3R5cGU9aW52bWVkaWE7Y2F0PWp1dWw2Z25hO29yZD0nICsgYSArICc/IjsKaWZyYW1lLnNldEF0dHJpYnV0ZSgiaGVpZ2h0IiwgIjEiKTsKaWZyYW1lLnNldEF0dHJpYnV0ZSgid2lkdGgiLCAiMSIpOwppZnJhbWUuc2V0QXR0cmlidXRlKCJmcmFtZWJvcmRlciIsICIwIik7CmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOwp2YXIgcmVmID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOyAKcmVmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGlmcmFtZSxyZWYpOwo="};
scriptArray[n++] = {"code":"CmlmKCAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKSB7CiAgICB0bGRjLmluamVjdFNjcmlwdCh7InNyYyI6Ii8vY2RuLnRyYWRlbGFiLmZyL3NlZy5qcz9hZGQ9ODM1NjcwMSJ9LGZ1bmN0aW9uKCl7fSk7Cn0K"};
scriptArray[n++] = {"code":"CmlmICh0eXBlb2Ygc19kYXJ0eSAhPSAidW5kZWZpbmVkIikgewogICAgaWYgKHR5cGVvZiBleHRyYV9pbmZvID09ICJ1bmRlZmluZWQiKSB2YXIgZXh0cmFfaW5mbyA9IHt9OwogICAgZXh0cmFfaW5mb1sic19kYXJ0eSJdID0gc19kYXJ0eTsKICAgIHRsZGMuaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvY29udi83MTUyMzIuanMifSwgZnVuY3Rpb24oKXt9KTsKfQo="};
scriptArray[n++] = {"code":"CnRsZGMuaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvc2VnLmpzP2FkZD0yNTYwMjM0In0sIGZ1bmN0aW9uKCl7fSk7CnRsZGMuaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvc2VnLmpzP2FkZD0yMzQyNTAwIn0sIGZ1bmN0aW9uKCl7fSk7CmlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCJkYXJ0eV9wcml4X2JhcnJlX3JlbWlzZSIpLmxlbmd0aCA+IDApIHRsZGMuaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvc2VnLmpzP2FkZD03NTY3MzI2In0sIGZ1bmN0aW9uKCl7fSk7CnZhciBzZWdzID0gWwogICAgewogICAgICAgIGtleToicGV0aXRfZWxlY3Ryb21lbmFnZXIiLAogICAgICAgIHNlYXJjaDogIjc1NDY0MDIiLAogICAgICAgIHByb2R1Y3Q6Ijc1NDY0MDMiLAogICAgICAgIGJhc2tldDoiNzU0NjQwNCIKICAgIH0sCiAgICB7CiAgICAgICAga2V5OiJzYW1zdW5nIiwKICAgICAgICBzZWFyY2g6ICI3NTQ2NDI5IiwKICAgICAgICBwcm9kdWN0OiI3NTQ2NDMxIiwKICAgICAgICBiYXNrZXQ6Ijc1NDY0MzIiCiAgICB9LAogICAgeyAgIAogICAgICAgIGtleToiY29ubmVjdCIsCiAgICAgICAgc2VhcmNoOiAiNzU1NTE2MiIsCiAgICAgICAgcHJvZHVjdDoiNzU1NTE2NSIsCiAgICAgICAgYmFza2V0OiI3NTU1MTY2IgogICAgfSwKICAgIHsgICAKICAgICAgICBrZXk6InB1ZXJpY3VsdHVyZSIsCiAgICAgICAgc2VhcmNoOiAiNzU1NTEyNiIsCiAgICAgICAgcHJvZHVjdDoiNzU1NTEyOCIsCiAgICAgICAgYmFza2V0OiI3NTU1MTMwIgogICAgfSwKICAgIHsKICAgICAgICBrZXk6IlRWIiwKICAgICAgICBzZWFyY2g6ICIyMzI3MTQxIiwKICAgICAgICBwcm9kdWN0OiI3NTU2MDU1IiwKICAgICAgICBiYXNrZXQ6Ijc1NTYwNjAiICAKICAgIH0sCiAgICB7IAogICAgICAgIGtleToiT0xFRCIsCiAgICAgICAgc2VhcmNoOiAiNzU1NjA4MyIsCiAgICAgICAgcHJvZHVjdDoiNzU1NjA3NSIsCiAgICAgICAgYmFza2V0OiI3NTU2MDgwIiAgCiAgICB9LAogICAgeyAKICAgICAgICBrZXk6IjRLIiwKICAgICAgICBzZWFyY2g6ICI3NTU2MDg5IiwKICAgICAgICBwcm9kdWN0OiI3NTU2MDg2IiwKICAgICAgICBiYXNrZXQ6Ijc1NTYwODciICAKICAgIH0sCiAgICB7ICAKICAgICAgICBrZXk6ImxnIiwKICAgICAgICBzZWFyY2g6ICI3NTU2MTI2IiwKICAgICAgICBwcm9kdWN0OiI3NTU2MTI5IiwKICAgICAgICBiYXNrZXQ6Ijc1NTYxMzEiICAKICAgIH0sCiAgICB7ICAKICAgICAgICBrZXk6IlBoaWxpcHMiLAogICAgICAgIHNlYXJjaDogIjc1NTYxMzQiLAogICAgICAgIHByb2R1Y3Q6Ijc1NTYxMzkiLAogICAgICAgIGJhc2tldDoiNzU1NjE0MSIgIAogICAgfSwKICAgIHsgIAogICAgICAgIGtleToiU29ueSIsCiAgICAgICAgc2VhcmNoOiAiNzU1NjE0NyIsCiAgICAgICAgcHJvZHVjdDoiNzU1NjE0OSIsCiAgICAgICAgYmFza2V0OiI3NTU2MTUyIiAgCiAgICB9LAogICAgeyAgCiAgICAgICAgCiAgICAgICAga2V5OiJUaG9tc29uIiwKICAgICAgICBzZWFyY2g6ICI3NTU2MTUzIiwKICAgICAgICBwcm9kdWN0OiI3NTU2MTU0IiwKICAgICAgICBiYXNrZXQ6Ijc1NTYxNTUiICAKICAgIH0sCiAgICB7ICAKICAgICAgICAKICAgICAgICBrZXk6IlBhbmFzb25pYyIsCiAgICAgICAgc2VhcmNoOiAiNzU1NjE1NiIsCiAgICAgICAgcHJvZHVjdDoiNzU1NjE1OCIsCiAgICAgICAgYmFza2V0OiI3NTU2MTYxIiAgCiAgICB9LAogICAgeyAgCiAgICAgICAgCiAgICAgICAga2V5OiJTaGFycCIsCiAgICAgICAgc2VhcmNoOiAiNzU1NjE2NCIsCiAgICAgICAgcHJvZHVjdDoiNzU1NjE2OCIsCiAgICAgICAgYmFza2V0OiI3NTU2MTcxIiAgCiAgICB9LAogICAgeyAgCiAgICAgICAgCiAgICAgICAga2V5OiJjZW50cmFsZV92YXBldXIiLAogICAgICAgIHNlYXJjaDogIjc1NTYyNjMiLAogICAgICAgIHByb2R1Y3Q6Ijc1NTYyNjQiLAogICAgICAgIGJhc2tldDoiNzU1NjI2NSIgIAogICAgfSwKICAgIHsgIAogICAgICAgIGtleToiY2VudHJhbGUgdmFwZXVyIiwKICAgICAgICBzZWFyY2g6ICI3NTU2MjYzIiwKICAgICAgICBwcm9kdWN0OiI3NTU2MjY0IiwKICAgICAgICBiYXNrZXQ6Ijc1NTYyNjUiICAKICAgIH0sCiAgICB7ICAKICAgICAgICBrZXk6InJvYm90X2N1aXNldXIiLAogICAgICAgIHNlYXJjaDogIjc1NTYyODEiLAogICAgICAgIHByb2R1Y3Q6Ijc1NTYyODQiLAogICAgICAgIGJhc2tldDoiNzU1NjI4NiIgIAogICAgfSwKICAgIHsgIAogICAgICAgIGtleToicm9ib3RzX2N1aXNpbmUiLAogICAgICAgIHNlYXJjaDogIjc1NTYyODEiLAogICAgICAgIHByb2R1Y3Q6Ijc1NTYyODQiLAogICAgICAgIGJhc2tldDoiNzU1NjI4NiIgIAogICAgfSwKICAgIHsgIAogICAgICAgIGtleToiYXNwaXJhdGV1ciIsCiAgICAgICAgc2VhcmNoOiAiNzU1NjMxOCIsCiAgICAgICAgcHJvZHVjdDoiNzU1NjMxOSIsCiAgICAgICAgYmFza2V0OiI3NTU2MzIyIiAgCiAgICB9LAogICAgeyAgCiAgICAgICAga2V5OiJlbnRyZXRpZW4iLAogICAgICAgIHNlYXJjaDogIjc1NTY2MTkiLAogICAgICAgIHByb2R1Y3Q6Ijc1NTY2MjMiLAogICAgICAgIGJhc2tldDoiNzU1NjYyNSIgIAogICAgfSwKICAgIHsgIAogICAgICAgIGtleToibmV0dG95YW50IiwKICAgICAgICBzZWFyY2g6ICI3NTU2NjE5IiwKICAgICAgICBwcm9kdWN0OiI3NTU2NjIzIiwKICAgICAgICBiYXNrZXQ6Ijc1NTY2MjUiICAKICAgIH0sCiAgICB7ICAKICAgICAgICBrZXk6ImFjY2Vzc29pcmVfc29pbiIsCiAgICAgICAgc2VhcmNoOiAiNzU1NjYxOSIsCiAgICAgICAgcHJvZHVjdDoiNzU1NjYyMyIsCiAgICAgICAgYmFza2V0OiI3NTU2NjI1IiAgCiAgICB9LAogICAgeyAgCiAgICAgICAga2V5OiJhdWRpbyIsCiAgICAgICAgc2VhcmNoOiAiMjMyNzE0MiIsCiAgICAgICAgcHJvZHVjdDoiNzU2NTkwMSIsCiAgICAgICAgYmFza2V0OiI3NTY1OTA0IiAgCiAgICB9LAogICAgeyAgCiAgICAgICAga2V5OiJoaWZpIiwKICAgICAgICBzZWFyY2g6ICIyMzI3MTQyIiwKICAgICAgICBwcm9kdWN0OiI3NTY1OTAxIiwKICAgICAgICBiYXNrZXQ6Ijc1NjU5MDQiICAKICAgIH0sCiAgICB7ICAKICAgICAgICBrZXk6InJhZGlvIiwKICAgICAgICBzZWFyY2g6ICIyMzI3MTQyIiwKICAgICAgICBwcm9kdWN0OiI3NTY1OTAxIiwKICAgICAgICBiYXNrZXQ6Ijc1NjU5MDQiICAKICAgIH0sCiAgICB7IAogICAgICAgIGtleToiamV1eCB2aWRlb3MiLAogICAgICAgIHNlYXJjaDogIjc1NjU5NTIiLAogICAgICAgIHByb2R1Y3Q6Ijc1NjU5NjAiLAogICAgICAgIGJhc2tldDoiNzU2NTk2NiIgIAogICAgfSwKICAgIHsgICAgCiAgICAgICAga2V5OiJqZXUgdmlkZW8iLAogICAgICAgIHNlYXJjaDogIjc1NjU5NTIiLAogICAgICAgIHByb2R1Y3Q6Ijc1NjU5NjAiLAogICAgICAgIGJhc2tldDoiNzU2NTk2NiIgIAogICAgfSwKICAgIHsgICAgCiAgICAgICAga2V5OiJjb25zb2xlX2pldXgiLAogICAgICAgIHNlYXJjaDogIjc1NjU5NTIiLAogICAgICAgIHByb2R1Y3Q6Ijc1NjU5NjAiLAogICAgICAgIGJhc2tldDoiNzU2NTk2NiIgIAogICAgfSwKICAgIHsgICAgCiAgICAgICAga2V5OiJsYW5nZXIiLAogICAgICAgIHNlYXJjaDogIjc1NTUxMjYiLAogICAgICAgIAogICAgICAgICAgICAgCiAgICB9LAogICAgeyAgIAogICAgICAgIGtleToiY291Y2hlcyIsCiAgICAgICAgc2VhcmNoOiAiNzU1NTEyNiIsCiAgICAgICAgCiAgICB9LAogICAgeyAgIAogICAgICAgIGtleToiam91ZXRzIiwKICAgICAgICBzZWFyY2g6ICI3NTU1MTI2IiwKICAgICAgICAKICAgIH0sCiAgICB7ICAgCiAgICAgICAga2V5OiJ0cm90dGV1ciIsCiAgICAgICAgc2VhcmNoOiAiNzU1NTEyNiIsCiAgICAgICAgCiAKICAgIH0sCiAgICB7ICAgCiAgICAgICAga2V5OiJwZWx1Y2hlIiwKICAgICAgICBzZWFyY2g6ICI3NTU1MTI2IiwKICAgICAgICAKICAgIH0sCiAgICB7ICAgCiAgICAgICAga2V5OiJzdWNldHRlIiwKICAgICAgICBzZWFyY2g6ICI3NTU1MTI2IiwKICAgICAgICAKICAgICAgICAKICAgIH0sCiAgICB7ICAgCiAgICAgICAga2V5OiJwb3J0ZXVyIiwKICAgICAgICBzZWFyY2g6ICI3NTU1MTI2IiwKICAgICAgICAKICAgIH0KICAgIF07CiAgICAKdmFyIHBhZ2VfdHlwZSA9ICIiOwp2YXIgYXR0cmlidXRlcyA9ICIiOwppZiAodHlwZW9mIHNfZGFydHkgIT0gInVuZGVmaW5lZCIpewogICAgaWYgKHNfZGFydHlbImV2ZW50cyJdKXsKICAgICAgICBpZiAoc19kYXJ0eVsiZXZlbnRzIl0uaW5kZXhPZigicHJvZFZpZXciKSA+IC0xKXsKICAgICAgICAgICAgcGFnZV90eXBlID0gInByb2R1Y3QiOwogICAgICAgICAgICBhdHRyaWJ1dGVzICs9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIi5kYXJ0eV9wcm9kdWN0X2ltZyA+IGltZyIpLnNyYwogICAgICAgICAgICBhdHRyaWJ1dGVzICs9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIi5kYXJ0eV9wcm9kdWN0X2ltZyA+IGltZyIpLmFsdAogICAgICAgIH0KICAgIH0KICAgIGlmIChwYWdlX3R5cGUgIT0gInByb2R1Y3QiKXsKICAgICAgICBpZiAoc19kYXJ0eVsicGFnZU5hbWUiXS5pbmRleE9mKCJwYW5pZXIiKSA+IC0xKXBhZ2VfdHlwZSA9ICJiYXNrZXQiOwogICAgICAgIGVsc2UgcGFnZV90eXBlID0gInNlYXJjaCI7CiAgICAgICAgdmFyIHByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgiLmRhcnR5X3Byb2R1Y3RfaW1nID4gYSA+IGltZyIpOwogICAgICAgIGZvciAoazE9IDA7IGsxIDwgcHJvZHVjdHMubGVuZ3RoIDsgazErKyl7CiAgICAgICAgICAgIGF0dHJpYnV0ZXMgKz0gcHJvZHVjdHNbazFdLmN1cnJlbnRTcmMKICAgICAgICAgICAgYXR0cmlidXRlcyArPSBwcm9kdWN0c1trMV0uYWx0CiAgICAgICAgfQogICAgfQogICAgY29uc29sZS5sb2coInRscHQiLHBhZ2VfdHlwZSk7CiAgICBjb25zb2xlLmxvZygidGxhdHQiLGF0dHJpYnV0ZXMpOwogICAgaWYgKHBhZ2VfdHlwZSl7CiAgICAgICAgZm9yIChzPTAgOyBzIDwgc2Vncy5sZW5ndGggOyBzKyspewogICAgICAgICAgICBpZiAoYXR0cmlidXRlcy50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2Vnc1tzXS5rZXkudG9Mb3dlckNhc2UoKSkgPiAtMSl7CiAgICAgICAgICAgICAgICBpZiAoc2Vnc1tzXVtwYWdlX3R5cGVdKXsKICAgICAgICAgICAgICAgICAgICB0bGRjLmluamVjdFNjcmlwdCh7InNyYyI6Ii8vY2RuLnRyYWRlbGFiLmZyL3NlZy5qcz9hZGQ9IitzZWdzW3NdW3BhZ2VfdHlwZV19LCBmdW5jdGlvbigpe30pOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQp9Cg=="};
  
	
	if ( tldc.ses.uuid2 === '' ) {
  	scriptArray[n++] = {'src': '//ib.adnxs.com/getuid?//its.tradelab.fr/?type=tlsync&uuid2=$UID&callback=tl_sync'};
  }

  tldc.rLoad(scriptArray);

})();

} catch(err) {
  error('tagmanv2|'+err.message);
}