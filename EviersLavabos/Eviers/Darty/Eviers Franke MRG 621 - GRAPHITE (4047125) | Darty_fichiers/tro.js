var _troqck=_troqck||0;
(function(){Y=function(q,y,n){var r,l,u=!1,m="",h=window.location,g=h.hostname.split(".").reverse();this.segq=[];this.syncq=[];r=2<g.length&&3>=g[1].length&&2>=g[0].length?"."+g[2]+"."+g[1]+"."+g[0]:"."+g[1]+"."+g[0];window!==top&&document.referrer&&""!==document.referrer&&(h=document.referrer);var v=function(b,c){for(var a="",d=0;d<c.length;d++)0<d&&(a+="|"),a+=c[d];try{a=b+"="+encodeURIComponent(a)}catch(e){a=b+"="+escape(a)}return a},w=function(b,c,a){var d=new Date;d.setDate(d.getDate()+a);var e;
try{e=encodeURIComponent(c)}catch(k){e=escape(c)}e+=null===a?"":"; expires="+d.toUTCString();e+="; domain="+r+"; path=/";document.cookie=b+"="+e},x=function(b){var c,a,d,e=document.cookie.split(";");for(c=0;c<e.length;c++)if(a=e[c].substr(0,e[c].indexOf("=")),d=e[c].substr(e[c].indexOf("=")+1),a=a.replace(/^\s+|\s+$/g,""),a===b)try{return decodeURIComponent(d)}catch(k){return unescape(d)}return""},t=function(b,c){try{if(null==l||""===l)throw"missing tagid";for(var a="tagid="+l+"&",a=a+("vck="+y+"&"),
a=a+("r1="+m+"&"),a=a+("vruid="+n+"&");0<b.length;)a+=b.shift()+"&";if(null!==h&&""!==h){a+="u=";try{a+=encodeURIComponent(h)}catch(d){a+=escape(h)}a+="&"}a+="rnd="+Math.round(2E9*Math.random());a="//"+(c||"mmtro.com")+"/p?"+a;(new Image(1,1)).src=a}catch(e){}};this.push=function(){try{for(var b=0;b<arguments.length;b++)q.push(arguments[b])}catch(c){}for(var b=[],a=[],d=[],e=!1;0<q.length;)try{var k=q.shift(),f=k.shift().toLowerCase(),g=k;0===_troqck&&(this.segq.push([f,g]),this.syncq.push([f,g]));
if("tagid"===f){if(32!==k[0].split("-")[1].length)throw"invalid tagid";l=k[0];e=!0}else if(-1!==f.indexOf("_")){0===f.indexOf("_")&&(f=f.substring(1,f.length));var h=v(f,g);0===_troqck?b.push(h):(a.push(h),d.push([f,g]))}else"rtg"===f.substring(0,3)?b.push(v(f,g)):"exclusion"===f?b.push("exclusion=1"):"m5e"!==f&&"email"!==f||b.push(f+"="+g[0])}catch(p){}try{if(0===_troqck&&(0<b.length||e))_troqck=1,t(b);else if(0<b.length)t(b,"err.mmtro.com");else if(0<a.length)if(t(a),d.push(["r1",m]),d.push(["vruid",
n]),this.segq.length)for(;0<d.length;)k=d.shift(),f=k.shift().toLowerCase(),g=k,this.segq.push([f,g]);else this.segq.push.apply(this,d)}catch(r){}};var p=function(b){var c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=b;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};this.callSeg=function(){try{p("//mmtro.com/seg/"+l.split("-")[0]+".js")}catch(b){}};this.callSync=function(){try{x("__troSYNC")||p("//mmtro.com/sync.js")}catch(b){}};this.jarSyncMMTRO=
function(b){try{w("__troRUID",b,395)}catch(c){}};this._init=function(){try{for(var b=!1,c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src;if(void 0!=d&&""!=d&&-1<d.lastIndexOf("//mmtro.com/tro.js")){b=!0;break}}if(!b)throw"validation failed";if(null==n||""==n)throw"invalid vruid";m=x("__troRUID");if(null==m||""==m)u=!0,m=n;this.push();u&&w("__troRUID",m,395);null!=l&&""!=l&&p("//mmtro.com/trojs/"+l+"/"+m+"/"+n+"/exec.js")}catch(e){}}};
if(_troq.length){var Z=new Y(_troq,1,"c3ac8a4a-197a-4aea-b739-6dc1783d04b5");_troq=Z;Z._init();}})();