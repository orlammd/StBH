var __ts=new Date().getTime();(function(){'use strict';var
h="25695f598f4616e7559dde5dca06ee01c13d8feb",w=window,d=w.document,lto;var lastTopW=window;while(top!=w){try{lastTopW=w;w=w.parent;w.location.href;d=w.document;if(!d){throw"doc undefined";}}catch(e){w=lastTopW;d=w.document;break;}}
var wIst=top===w;if(!wIst){try{console.log("Critical: Visit Tag found in Cross domain Iframe")}catch(e){}}
var ts=w.performance&&w.performance.timing?w.performance.timing.navigationStart||__ts:__ts;if(!d.getElementById||!h||!/^[a-z0-9]+$/i.test(h)){return;}
if(!w.sublime_unique_id){w.sublime_unique_id=1;}else{return;}
var
width=1,height=1,ifstyle="border:none;position:relative;visibility:visible;display:inline;height:"+height+"px;width:"+width+"px;display:block;",src='//sac.ayads.co/v/'+h,qs=[],_p={u:w.location.href,t:d.title,st:ts.toFixed(0),icf:wIst?0:1},fired=0;for(var i in _p){qs.push(i+"="+encodeURIComponent(_p[i]));}
var cif=function(late){clearTimeout(lto);if(fired){return;}
fired=true;var i=d.createElement("iframe");i.scrolling="no";i.frameBorder="0";i.hspace="0";i.vspace="0";i.marginwidth="0";i.marginheight="0";i.allowTransparency="true";i.style.cssText=ifstyle;i.width=width+"px";i.height=height+"px";i.id='sublime_'+(w.sublime_unique_id++);if(w.performance&&w.performance.now){qs.push('ld='+(Math.round(w.performance.now())/ 1000));}
if(late){qs.push('l=1');}
if(w.location.hash.indexOf('ayads-visit')>-1){qs.push("diagnose=1");}
i.src=src+"#"+qs.join('&');d.body.appendChild(i);},check=function(){if(!fired&&(d.readyState==="complete"||d.readyState==="interactive")){cif();}
if(!fired){lto=setTimeout(check,100);}};lto=setTimeout(check,100);if(d.readyState==="complete"||d.readyState==="interactive"){cif(true);}else if(d.addEventListener){d.addEventListener("DOMContentLoaded",cif,false);w.addEventListener("load",cif,false);}else if(d.attachEvent){d.attachEvent("onreadystatechange",function(){if(d.readyState==="complete"){cif();}});w.attachEvent("onload",cif);}else{if(typeof w.onload==='function'){var oldol=w.onload;w.onload=function(){cif();oldol();};}else{w.onload=cif;}}})();