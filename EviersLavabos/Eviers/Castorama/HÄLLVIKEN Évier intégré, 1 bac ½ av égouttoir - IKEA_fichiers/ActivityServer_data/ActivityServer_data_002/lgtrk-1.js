if((typeof(lgtrk_data)!="undefined")&&lgtrk_data!=null&&typeof lgtrk_data==="object"){var urlPixel="";if(lgtrk_data.pt==null){var lgSendTracking=function(){var referrer=getHostnameFromUrl(document.referrer);if(whiteListDomain.indexOf(referrer)>-1){var urlPixel=("https:"==document.location.protocol?"https://":"http://")+"tracking-vst.leguide.com/?ref="+encodeURIComponent(document.referrer);if(lgtrk_data.idshop!=null&&lgtrk_data.idshop.length>0){urlPixel+="&idshop="+lgtrk_data.idshop}var img=new Image();img.src=urlPixel}};if(null!==document.referrer&&0<document.referrer.length){var referrer=getHostnameFromUrl(document.referrer);if(referrer!==document.location.hostname){lgLoadScript(("https:"==document.location.protocol?"https://secure.":"http://")+"cimg.leguide.com/js/lgWhiteList-1.0.min.js",lgSendTracking)}}}else{switch(lgtrk_data.pt){case"pp":case"rp":case"scp":case"purchase":urlPixel=("https:"==document.location.protocol?"https://":"http://")+"tracking-"+lgtrk_data.pt+".leguide.com/?";urlPixel+="pt="+lgtrk_data.pt;if(lgtrk_data.idshop!=null&&lgtrk_data.idshop.length>0){urlPixel+="&idshop="+lgtrk_data.idshop}if(lgtrk_data.idp!=null&&lgtrk_data.idp.length>0){var idps=lgtrk_data.idp.split(",");for(n=0;n<idps.length;n++){urlPixel+="&idp"+(n+1)+"="+idps[n]}urlPixel+="&nidp="+idps.length}if(lgtrk_data.idcat!=null&&lgtrk_data.idcat.length>0){urlPixel+="&idcat="+lgtrk_data.idcat}if(lgtrk_data.kwd!=null&&lgtrk_data.kwd.length>0){urlPixel+="&kwd="+lgtrk_data.kwd}if(lgtrk_data.extra_idp!=null&&lgtrk_data.extra_idp.length>0){var extra_idps=lgtrk_data.extra_idp.split(",");for(n=0;n<extra_idps.length;n++){urlPixel+="&extra_idp"+(n+1)+"="+extra_idps[n]}urlPixel+="&neidp="+extra_idps.length}if(lgtrk_data.pt=="scp"||lgtrk_data.pt=="purchase"){var price=0;if(lgtrk_data.price_idp!=null&&lgtrk_data.price_idp.length>0){var price_idps=lgtrk_data.price_idp.split(",");for(n=0;n<price_idps.length;n++){urlPixel+="&price_idp"+(n+1)+"="+price_idps[n]}}if(lgtrk_data.qty_idp!=null&&lgtrk_data.qty_idp.length>0&&lgtrk_data.price_idp!=null&&lgtrk_data.price_idp.length>0){var qty_idps=lgtrk_data.qty_idp.split(",");for(n=0;n<qty_idps.length;n++){urlPixel+="&qty_idp"+(n+1)+"="+qty_idps[n];if(qty_idps[n]!=null&&price_idps[n]!=null){price+=qty_idps[n]*price_idps[n]}}}if(price>0){urlPixel+="&price="+price}else{if(lgtrk_data.price!=null&&lgtrk_data.price.length>0){urlPixel+="&price="+lgtrk_data.price}}}break}if(urlPixel!=""){var img=new Image();img.src=urlPixel;lgtrk2kelkoo(lgtrk_data)}}}function lgLoadScript(url,callback){var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.type="text/javascript";script.src=url;script.onreadystatechange=callback;script.onload=callback;head.appendChild(script)}function getHostnameFromUrl(url){var a=document.createElement("a");a.href=url;return a.hostname}function lgtrk2kelkoo(lgtrk_data){var debug=false;if(debug){console.log("*** start:kelkooTracking ***")}var basket=[];if(lgtrk_data.idp!=null&&lgtrk_data.idp.length>0){var idps=lgtrk_data.idp.split(",");if(debug){console.log("idps:"+JSON.stringify(idps,null,4))}var quantity="";var qty_idps="";if(lgtrk_data.qty_idp!=null&&lgtrk_data.qty_idp.length>0){qty_idps=lgtrk_data.qty_idp.split(",")}var price="";var price_idps="";if(lgtrk_data.price_idp!=null&&lgtrk_data.price_idp.length>0){price_idps=lgtrk_data.price_idp.split(",")}for(n=0;n<idps.length;n++){if(qty_idps[n]!=null){quantity=qty_idps[n]}if(price_idps[n]!=null){price=price_idps[n]}basket.push({productname:"",productid:idps[n],quantity:quantity,price:price})}}window._kkstrack={origin:"LeGuide",merchantInfo:[{country:"",merchantId:lgtrk_data.idshop}],orderValue:lgtrk_data.price,orderId:"",basket:basket};if(debug){console.log("window._kkstrack:"+JSON.stringify(window._kkstrack,null,4))}(function(){var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://s.kk-resources.com/ks.js";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(s,x)})();if(debug){console.log("*** end:kelkooTracking ***")}};