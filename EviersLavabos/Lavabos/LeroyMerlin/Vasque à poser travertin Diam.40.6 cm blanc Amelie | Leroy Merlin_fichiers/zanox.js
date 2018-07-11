if(!window.zanox||window.zanox.version!="3.5.6.0"){window.zanox=function(){var core={version:"3.5.6.0",restEndpointGetMediaslot:"//api.zanox.com/json/2011-03-01/applications/mediaslot/#msId#?callback=#callback#",restEndpointGetAdmedia:"//api.zanox.com/json/2011-03-01/admedia?purpose=#purpose#&connectid=#connectId#&program=#program#&adspace=#adspace#&partnership=#partnership#&callback=#callback#",xhtmlEndpoint:"//api.zanox.ws/xhtml/2011-03-01/applications/iframe/#appId#?mediaslot=#msId#",brokenImageUrl:"http://ad.zanox.com/ppv/images/error_empty.gif",hasPostMessageSupport:window.postMessage!=null,isDomReady:false,renderMsQueue:[],createMediaslot:function(integrationCodeData){var mediaslotContainerNodes=utils.getElementsByClassName("zx_"+integrationCodeData.id);var msContainerNode=null;for(var i=0;i<mediaslotContainerNodes.length;i++){if(utils.isUndef(mediaslotContainerNodes[i].zxMediaslotData)||mediaslotContainerNodes[i].zxMediaslotData==null){msContainerNode=mediaslotContainerNodes[i];break}}if(msContainerNode==null){utils.logMessageToConsole("Didn't find the container node for mediaslot with id "+integrationCodeData.id+"!");return}var newMs={idx:utils.indexOfArray(mediaslotContainerNodes,msContainerNode),containerNode:msContainerNode,id:integrationCodeData.id,settings:integrationCodeData.settings||{},height:null,width:null,status:null,adspace:null,apps:null};msContainerNode.zxMediaslotData=newMs;core.requestMs(newMs)},requestMs:function(ms){var callbackFuncName="GETMS"+ms.id+ms.idx;var getMediaslotRestUrl=utils.getProtocol()+utils.buildUrl(core.restEndpointGetMediaslot,{msId:ms.id,callback:"zanox.cb."+callbackFuncName});zanox.cb[callbackFuncName]=utils.bind(core.renderMs,this,ms,callbackFuncName);zanox.load(getMediaslotRestUrl)},renderMs:function(ms,callbackFuncName,wsData){zanox.cb[callbackFuncName]=null;if(!core.isDomReady){core.renderMsQueue.push(utils.bind(core.renderMsDeferred,this,ms,wsData))}else{core.renderMsDeferred(ms,wsData)}},renderMsDeferred:function(ms,wsData){if(wsData.error){return}ms.width=wsData.width;ms.height=wsData.height;ms.status=wsData.status;ms.adspace=wsData.adspace;ms.apps=wsData.apps;var msContainer=ms.containerNode;msContainer.style.height=ms.height+"px";msContainer.style.width=ms.width+"px";if(ms.status&&ms.status.toUpperCase()=="DELETED"){var imgNode=utils.genBrokenImg(ms.height,ms.width);msContainer.appendChild(imgNode);return}settings.parseSettings(ms.settings);utils.forEach(ms.apps,function(app){var appContainer=document.createElement("div");appContainer.id=utils.generateUUIDWithPrefix("ZX");appContainer.className="zx_app_"+app.id;appContainer.style.height=app.height+"px";appContainer.style.width=app.width+"px";msContainer.appendChild(appContainer);settings.parseSettings(app.settings);settings.mergeSettings(app.settings,ms.settings);if(ms.settings[app.id]){settings.parseSettings(ms.settings[app.id]);settings.mergeSettings(app.settings,ms.settings[app.id])}var callbackData=core.buildCallbackData(ms,app,appContainer.id);core.ensureCallbackDataCompatibility(callbackData);app.callbackData=callbackData;(renderModes[app.renderMode]||renderModes.iframe).render(ms,app,appContainer)})},buildCallbackData:function(ms,app,appContainerId){return{mediaslot:{id:ms.id,height:ms.height,width:ms.width},adspace:{id:ms.adspace.id},app:{id:app.id,height:app.height,width:app.width,container:{id:(app.renderMode=="inline"?appContainerId:"ZX"+app.id)},settings:app.settings,connectIds:{developer:app.connectIds.developer,publisher:app.connectIds.publisher},renderMode:app.renderMode}}},ensureCallbackDataCompatibility:function(callbackData){callbackData.connect_id_developer=callbackData.app.connectIds.developer;callbackData.connect_id_publisher=callbackData.app.connectIds.publisher;callbackData.app_options=callbackData.app.settings;return callbackData},onDomReady:function(){if(arguments.callee.done){return}arguments.callee.done=true;core.isDomReady=true;utils.forEach(core.renderMsQueue,function(func){func()});core.renderMsQueue.length=0}};var settings={parseSettings:function(obj){for(var key in obj){var value=obj[key];if(!value||!utils.isString(value)){continue}var dynSetting=this.parseSetting(utils.trim(value));if(dynSetting!=null){try{var execVal=settings["exec_"+dynSetting.command](dynSetting.data);obj[key]=utils.isString(execVal)?utils.trim(execVal):execVal}catch(e){utils.logErrorToConsole("Could not execute dynamic setting: ",e);obj[key]=null}}}},parseSetting:function(value){var knownCommands=["id","qparam","cookie","meta","js"];var found=null;utils.forEach(knownCommands,function(command){if(value.match("^"+command+":")==command+":"){found={command:command,data:utils.trim(value.substr(command.length+1))}}});return found},mergeSettings:function(referenceObj,srcObj){if(srcObj==null){return}for(var refPropName in referenceObj){if(srcObj[refPropName]!=null){referenceObj[refPropName]=srcObj[refPropName]}}},exec_id:function(data){var attrSeparatorPos=data.indexOf(">");var idName=utils.trim((attrSeparatorPos==-1?data:data.substring(0,attrSeparatorPos)));var attrName=utils.trim((attrSeparatorPos==-1?null:data.substring(attrSeparatorPos+1)));var elem=document.getElementById(idName);if(elem!=null){if(attrName){return elem.getAttribute(attrName,0)}else{return utils.getNodeValue(elem)}}else{return null}},exec_qparam:function(qsKey){var qStrings=window.location.search.substr(1,window.location.search.length).split("&");return this.getTokenizedValue(qStrings,qsKey)},exec_cookie:function(cKey){var cookies=document.cookie.split("; ");return this.getTokenizedValue(cookies,cKey)},getTokenizedValue:function(array,searchForKey){var result=null;utils.forEach(array,function(elem){var split=elem.split("=");if(split[0]==searchForKey&&split.length>1){result=decodeURIComponent(split[1])}});return result},exec_meta:function(tagName){var metaElems=document.getElementsByTagName("meta");var found=null;utils.forEach(metaElems,function(elem){if(elem.getAttribute("name")==tagName||elem.getAttribute("property")==tagName){found=elem.getAttribute("content")}});return found},exec_js:function(code){return utils.evalScript(code,true)}};var utils={trim:function(text){text=(text||"")+"";return text.replace(regex.stringTrim,"")},loadScript:function(url,onComplete){var head=document.getElementsByTagName("head")[0]||document.documentElement;var script=document.createElement("script");script.src=url;var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){done=true;onComplete();script.onload=script.onreadystatechange=null;if(head&&script.parentNode){head.removeChild(script)}}};head.insertBefore(script,head.firstChild);return undefined},loadScripts:function(urls,onComplete){if(urls.length==0){onComplete();return}var i=1;var count=0;utils.forEach(urls,function(url){count++;utils.loadScript(url,function(){if(i++==count){onComplete()}})})},generateUUIDWithPrefix:function(prefix){function S4(){return(((1+Math.random())*65536)|0).toString(16).substring(1)}var id=prefix+S4()+S4()+S4()+S4()+S4();return id.toUpperCase()},registerForEvent:function(eventName,callback){if(window.addEventListener){window.addEventListener(eventName,callback,false)}else{window.attachEvent("on"+eventName,callback)}},logErrorToConsole:function(message,error){this.logToConsole(message+(error.message?error.message:error))},logMessageToConsole:function(message){this.logToConsole(message)},logObjectToConsole:function(message,object){this.logToConsole(message);if(this.isIE()){this.logToConsole(JSON.stringify(object))}else{this.logToConsole(object)}},logToConsole:function(object){if(typeof console!=="undefined"&&console!=null&&console.log){console.log(object)}},getNodeValue:function(node){if(node==null){return null}switch(node.tagName.toLowerCase()){case"input":switch(node.type.toLowerCase()){case"checkbox":case"radio":return node.checked?true:false;default:return node.value}case"select":if(node.selectedIndex<0){return null}var values=[];for(var i=0;i<node.options.length;i++){if(node.options[i].selected){values.push(node.options[i].value)}}return values.join(";");case"textarea":return node.value;default:return node.innerHTML.replace(regex.htmlTags,"").replace(regex.htmlComments,"")}},setNodeContent:function(node,content){if(content==null){node.innerHTML=null;return}var externalScripts=utils.execRegEx(content,regex.externalScripts);var internalScripts=utils.execRegEx(content,regex.internalScripts);content=content.replace(regex.scriptTags,"").replace(regex.scriptTagsShort,"");node.innerHTML=content;utils.loadScripts(externalScripts,function(){utils.forEach(internalScripts,function(script){script=utils.trim(script);if(script!=""){utils.evalScript(script)}})})},evalScript:function(script,careAboutReturnValue){var isIndirectEvalGlobal=(function(original,Object){try{return(1,eval)("Object")===original}catch(err){return false}})(Object,123);try{if(isIndirectEvalGlobal){return(1,eval)(script)}else{if(typeof window.execScript!=="undefined"){if(!careAboutReturnValue){window.execScript(script);return}else{return eval(script)}}utils.logMessageToConsole("Global eval() is not available, this browser might not compatiable with the zanox.js script!")}}catch(e){utils.logErrorToConsole("Could not execute dynamic script: ",e)}},execRegEx:function(source,regEx){var founds=[];var match=null;do{match=regEx.exec(source);if(match&&match.length>1){founds.push(match[1])}}while(match!=null);return founds},getElementsByClassName:function(className,tag,root){var returnElements=[];if(document.getElementsByClassName){root=root||document;var elements=root.getElementsByClassName(className);var nodeName=(tag)?new RegExp("\\b"+tag+"\\b","i"):null;var current;for(var i=0,il=elements.length;i<il;i+=1){current=elements[i];if(!nodeName||nodeName.test(current.nodeName)){returnElements.push(current)}}}else{tag=tag||"*";root=root||document;var classes=className.split(" ");var classesToCheck=[];var elements=(tag==="*"&&root.all)?root.all:root.getElementsByTagName(tag);var current;var match;for(var k=0,kl=classes.length;k<kl;k+=1){classesToCheck.push(new RegExp("(^|\\s)"+classes[k]+"(\\s|$)"))}for(var l=0,ll=elements.length;l<ll;l+=1){current=elements[l];match=false;for(var m=0,ml=classesToCheck.length;m<ml;m+=1){match=classesToCheck[m].test(current.className);if(!match){break}}if(match){returnElements.push(current)}}}return returnElements},genBrokenImg:function(height,width){var img=document.createElement("img");img.src=core.brokenImageUrl;img.width=width;img.height=height;return img},registerForDomReadyEvent:function(callback){if(document.addEventListener){document.addEventListener("DOMContentLoaded",callback,false)}(function(){
/*@cc_on
			try {
				document.body.doScroll("up");
				return callback();
			} catch(e) {}
			/*@if (false) @*/
if(/loaded|complete/.test(document.readyState)){return callback()}/*@end @*/;if(!callback.done){setTimeout(arguments.callee,30)}})();utils.registerForEvent("load",callback)},forEach:function(array,fn,thisObj){if(array==null||array.length==null){return}var scope=thisObj||window;for(var i=0;i<array.length;i++){if(i in array){fn.call(scope,array[i],i,array)}}},bind:(function(slice){function bind(fn,context){var self=fn;if(2<arguments.length){var $arguments=slice.call(arguments,2);return function(){return self.apply(context,arguments.length?$arguments.concat(slice.call(arguments)):$arguments)}}return function(){return arguments.length?self.apply(context,arguments):self.call(context)}}return bind}(Array.prototype.slice)),buildUrl:function(url,parameters,hash){var newUrl=url;for(var paramName in parameters){newUrl=newUrl.replace("#"+paramName+"#",parameters[paramName])}if(utils.isDebugEnabled()){newUrl=newUrl+"&zxdebug"}if(hash){newUrl=newUrl+"#"+encodeURIComponent(hash)}return newUrl},getProtocol:function(){return(document.location.protocol=="https:"?"https:":"http:")},getFirstJSONPElement:function(dataObject){return(dataObject instanceof Array&&dataObject.length>0)?dataObject[0]:dataObject},createIframeNode:function(additionalParameters){var iframeNode=document.createElement("iframe");iframeNode.marginWidth=0;iframeNode.marginHeight=0;iframeNode.vspace=0;iframeNode.hspace=0;iframeNode.allowTransparency=true;iframeNode.scrolling="no";iframeNode.frameBorder=0;for(var paramName in additionalParameters){iframeNode[paramName]=additionalParameters[paramName]}return iframeNode},isString:function(obj){return(typeof obj=="string")},isArray:function(obj){return(obj instanceof Array)},isDebugEnabled:function(){return document.location.href.toLowerCase().indexOf("zxdebug")>0},serialize:function(object){this.applyJson2CompatibilityFix();var serializedObject=JSON.stringify(object);this.restoreJson2CompatibilityFix();return serializedObject},applyJson2CompatibilityFix:function(){if(JSON.stringify([{}])=='"[{}]"'){this.toJSONFunctionBackup={array:Array.prototype.toJSON,hash:Hash.prototype.toJSON,object:Object.prototype.toJSON,string:String.prototype.toJSON};try{delete Array.prototype.toJSON;delete Hash.prototype.toJSON;delete Object.prototype.toJSON;delete String.prototype.toJSON}catch(e){utils.logErrorToConsole("Could not apply toJSON() bugfix to the browser: ",e)}}},restoreJson2CompatibilityFix:function(){if(JSON.stringify([{}])=='"[{}]"'){Array.prototype.toJSON=this.toJSONFunctionBackup.array;Hash.prototype.toJSON=this.toJSONFunctionBackup.hash;Object.prototype.toJSON=this.toJSONFunctionBackup.object;String.prototype.toJSON=this.toJSONFunctionBackup.string}},isIE:function(){return/MSIE/.test(navigator.userAgent)},isUndef:function(obj){return typeof obj==="undefined"},indexOfArray:function(array,object){for(var i=0;i<array.length;i++){if(array[i]===object){return i}}return -1}};var regex={externalScripts:/<\s*script[^>]*?src[\s]*=[\s]*['"]([^"']*?)['"]/gim,internalScripts:/<\s*script[^>]*>([\S\s]*?)<\s*\/script\s*>/gim,scriptTags:/<\s*script[^>]*>[\s\S]*?<\s*\/script\s*>/gim,scriptTagsShort:/<\s*script[^>]*\/>/gim,htmlTags:/<[a-zA-Z\/][^>]*>/gi,htmlComments:/<!--[\S\s]*?-->/gi,stringTrim:/^(\s|\u00A0)+|(\s|\u00A0)+$/g,queryParamSettings:/[\\?&]zxjd=([^&]*)/};var clicks={simulatePPC:function(clickData){this.getAdmedia(clickData.connectId,clickData.programId,clickData.adspaceId,clickData)},getAdmedia:function(connectId,programId,adspaceId,clickData){var callbackFuncName="GETAM"+connectId+programId+adspaceId;var getAdmediaRestUrl=utils.getProtocol()+utils.buildUrl(core.restEndpointGetAdmedia,{purpose:"startpage",partnership:"direct",connectId:connectId,program:programId,adspace:adspaceId,callback:"zanox.cb."+callbackFuncName});zanox.cb[callbackFuncName]=utils.bind(clicks.getAdmediaCallback,this,callbackFuncName,clickData);zanox.load(getAdmediaRestUrl)},getAdmediaCallback:function(callbackFuncName,clickData,wsData){zanox.cb[callbackFuncName]=null;if(wsData.code==104){this.redirectToTargetUrl(clickData.targetUrl,10);return}var iframeDropped=false;if(wsData.admediumItems){var admedium=utils.getFirstJSONPElement(wsData.admediumItems.admediumItem);if(admedium.trackingLinks){var trackingLink=utils.getFirstJSONPElement(admedium.trackingLinks.trackingLink);if(utils.isString(trackingLink.ppc)){var ppcLinkProtocol=trackingLink.ppc.substring(0,5);var ppcLink=ppcLinkProtocol.replace("http:",utils.getProtocol())+trackingLink.ppc.substring(5);if(clickData.masterPublisherTry){ppcLink=this.applySubIdToUrl(ppcLink,clickData.adspaceId)}else{if(clickData.subAdspaceId){ppcLink=this.applySubIdToUrl(ppcLink,clickData.subAdspaceId)}}var iframeNode=utils.createIframeNode({height:0,width:0,src:ppcLink});document.body.appendChild(iframeNode);iframeDropped=true}}}if(iframeDropped||clickData.masterPublisherTry||(!clickData.masterPublisherConnectId||!clickData.masterPublisherAdspaceId)){this.redirectToTargetUrl(clickData.targetUrl,iframeDropped?1000:10);return}if(!iframeDropped&&!clickData.masterPublisherTry&&clickData.masterPublisherConnectId&&clickData.masterPublisherAdspaceId){clickData.masterPublisherTry=true;this.getAdmedia(clickData.masterPublisherConnectId,clickData.programId,clickData.masterPublisherAdspaceId,clickData)}},applySubIdToUrl:function(ppcUrl,subAdspaceId){var startZPars=ppcUrl.indexOf("&");ppcUrl=ppcUrl.substring(0,startZPars)+"S"+subAdspaceId+ppcUrl.substring(startZPars);return ppcUrl},redirectToTargetUrl:function(url,timeoutInMillis){if(url){window.setTimeout(function(){var link=document.createElement("a");link.href=url;link.target="_top";document.body.appendChild(link);link.click()},timeoutInMillis)}}};var renderModes={iframe:{render:function(ms,app,appContainer){if(this.isIE6()){return}var iframeNode=utils.createIframeNode({height:ms.height,width:ms.width});appContainer.appendChild(iframeNode);this.sendCallbackDataToIframe(iframeNode,ms,app)},doCallback:function(appId,callback){if(core.hasPostMessageSupport){utils.registerForEvent("message",utils.bind(this.onReceivedMessage,this,appId,callback))}else{var hashData=decodeURIComponent(window.location.hash.substring(1));var callbackData=this.parseReceivedMessage(appId,hashData);if(callbackData!=null){if(utils.isDebugEnabled()){utils.logObjectToConsole("Following json data was passed to application "+appId+":",callbackData)}callback(callbackData)}}},onReceivedMessage:function(appId,callback,event){var callbackData=this.parseReceivedMessage(appId,event.data);if(callbackData!=null){if(utils.isDebugEnabled()){utils.logObjectToConsole("Following json data was passed to application "+appId+":",callbackData)}callback(callbackData)}this.onReceivedMessage=function(){}},parseReceivedMessage:function(appId,plainMessage){var callbackData=null;try{callbackData=JSON.parse(plainMessage)}catch(e){utils.logErrorToConsole("Could not parse json data received from the parent page: ",e)}if(callbackData&&callbackData.app&&callbackData.app.id==appId){return callbackData}else{return null}},isIE6:function(){return((window.XMLHttpRequest==undefined)&&(ActiveXObject!=undefined))},sendCallbackDataToIframe:function(iframeNode,ms,app){var serializedCallbackData=utils.serialize(app.callbackData);var iframeUrlHash;if(core.hasPostMessageSupport){if(iframeNode.attachEvent){iframeNode.attachEvent("onload",function(){iframeNode.contentWindow.postMessage(serializedCallbackData,"*")})}else{iframeNode.onload=function(){iframeNode.contentWindow.postMessage(serializedCallbackData,"*")}}}else{iframeUrlHash=serializedCallbackData}iframeNode.src=utils.getProtocol()+utils.buildUrl(core.xhtmlEndpoint,{msId:ms.id,appId:app.id},iframeUrlHash)}},inline:{render:function(ms,app,appContainer){utils.setNodeContent(appContainer,app.content)},doCallback:function(appId,callback){var mediaslotContainerNodes=utils.getElementsByClassName("zx_mediaslot");for(var i=0;i<mediaslotContainerNodes.length;i++){var mediaslotContainerNode=mediaslotContainerNodes[i];if(mediaslotContainerNode.zxMediaslotData!=null&&mediaslotContainerNode.zxMediaslotData.apps!=null){utils.forEach(mediaslotContainerNode.zxMediaslotData.apps,function(app){if(app.id==appId&&!app.initialized){app.initialized=true;if(utils.isDebugEnabled()){utils.logObjectToConsole("Following data was passed to application "+appId+" in mediaslot "+mediaslotContainerNode.zxMediaslotData.id+":",app.callbackData)}callback(app.callbackData)}})}}}}};var publik={version:function(){return core.version}(),load:function(url,onComplete){if(!utils.isString(url)){return}if(!onComplete){onComplete=function(){}}utils.loadScript(url,onComplete)},loadAll:function(urls,onComplete){if(!onComplete){onComplete=function(){}}if(!utils.isArray(urls)){utils.logMessageToConsole("zanox.loadAll() javascript function expects an array of urls to load!");return}utils.loadScripts(urls,onComplete)},setInnerHTML:function(node,content){if(node==null){return}if(!utils.isString(content)){return}utils.setNodeContent(node,content)},setCallback:function(appId,callback){if(!utils.isString(appId)){return}if(!callback){return}if(zanox.runsInIframe){renderModes.iframe.doCallback(appId,callback)}else{renderModes.inline.doCallback(appId,callback)}},cb:{},mediaslot:function(integrationCodeData){if(integrationCodeData==null){return}if(!utils.isString(integrationCodeData.id)){return}core.createMediaslot(integrationCodeData)},trackClick:function(clickData){if(clickData==null){return}clicks.simulatePPC(clickData)}};utils.registerForDomReadyEvent(core.onDomReady);return publik}();if(window._zx&&window._zx.length>0){window._zx.push=zanox.mediaslot;for(var i=0;i<window._zx.length;i++){zanox.mediaslot(window._zx[i])}window._zx.length=0}}if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());