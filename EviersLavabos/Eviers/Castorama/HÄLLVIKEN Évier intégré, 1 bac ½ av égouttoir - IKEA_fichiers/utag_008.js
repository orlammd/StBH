//~~tv:20064.20150803
//~~tc:send separate (unique) visitor ids to each profile by appending profile name to vid
//~~tc:allow for multiple servers configured in a single tag (send data to multiple locations)
//~~tc:get region of datacloud server and use this region for all requests in session
//~~tc:on first page view of visit 2 or later, do additional enrichment after 1 second

/* Modified copy of json2.js (no need for parse function)*/
/* https://github.com/douglascrockford/JSON-js */
if(typeof JSON!=='object'){JSON={};}
(function(){'use strict';var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(n){return n<10?'0'+n:n;}
function this_value(){return this.valueOf();}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+ f(this.getUTCDate())+'T'+ f(this.getUTCHours())+':'+ f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}
var gap,indent,meta,rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?'"'+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}
}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}}());


//tealium universal tag - utag.sender.20064 ut4.0.201610170646, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{
(function(id,loader,u){
  try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
  u.ev={'all':1};
  u.tag_config_server="https://collect-eu-central-1.tealiumiq.com/ikea/fr-main/2/i.gif";
  u.region="";
  u.data_enrichment="frequent";
  u.profile_specific_vid = 0;
  u.enrichment_polling = 1;
  u.enrichment_polling_delay = 1000;
  u.do_enrichment = function(){};
  var q = u.tag_config_server.indexOf("?");
  if(q>0 && (q+1)==u.tag_config_server.length){
    // utag.DB("DataCloud config error. Trailing ? in URL")
    u.tag_config_server = u.tag_config_server.replace("?","");
  }
  u.server_list = u.tag_config_server.split("|");
  u.enrichment_enabled = {};
  u.get_account_profile = function(s){
    var server_domain = "tealiumiq.com";
    var p = s.substring( s.indexOf( server_domain ) ).split("/");
    return p;
  }

  u.map={};
  u.extend=[function(a,b){
/*Extension: Extract Adobe Visitor ID from s_vi Cookie
**Requested by: Malika
**Created By: Mikael @ webanalytics@ikea.com
*/
if (b["cp.s_vi"] && !b["adobe_visitor_id"] && b["cp.wasd_split_segment_cookie"] === "A") {
/*hex conversion scripts*/  
// Adds two arrays for the given base (10 or 16), returning the result.
function add(x, y, base) {
  var z = [];
  var n = Math.max(x.length, y.length);
  var carry = 0;
  var i = 0;
  while (i < n || carry) {
    var xi = i < x.length ? x[i] : 0;
    var yi = i < y.length ? y[i] : 0;
    var zi = carry + xi + yi;
    z.push(zi % base);
    carry = Math.floor(zi / base);
    i++;
  }
  return z;
}

// Returns a*x, where x is an array of decimal digits and a is an ordinary
// JavaScript number. base is the number base of the array x.
function multiplyByNumber(num, x, base) {
  if (num < 0) return null;
  if (num == 0) return [];

  var result = [];
  var power = x;
  while (true) {
    if (num & 1) {
      result = add(result, power, base);
    }
    num = num >> 1;
    if (num === 0) break;
    power = add(power, power, base);
  }

  return result;
}

function parseToDigitsArray(str, base) {
  var digits = str.split('');
  var ary = [];
  for (var i = digits.length - 1; i >= 0; i--) {
    var n = parseInt(digits[i], base);
    if (isNaN(n)) return null;
    ary.push(n);
  }
  return ary;
}

function convertBase(str, fromBase, toBase) {
  var digits = parseToDigitsArray(str, fromBase);
  if (digits === null) return null;

  var outArray = [];
  var power = [1];
  for (var i = 0; i < digits.length; i++) {
    // invariant: at this point, fromBase^i = power
    if (digits[i]) {
      outArray = add(outArray, multiplyByNumber(digits[i], power, toBase), toBase);
    }
    power = multiplyByNumber(fromBase, power, toBase);
  }

  var out = '';
  for (var i = outArray.length - 1; i >= 0; i--) {
    out += outArray[i].toString(toBase);
  }
  return out;
}

function decToHex(decStr) {
  var hex = convertBase(decStr, 10, 16);
  return hex ? '0x' + hex : null;
}

function hexToDec(hexStr) {
  if (hexStr.substring(0, 2) === '0x') hexStr = hexStr.substring(2);
  hexStr = hexStr.toLowerCase();
  return convertBase(hexStr, 16, 10);
}
  
  
/*conversion of the adobe id*/  
var s_vi_split = [];
s_vi_split = utag.data["cp.s_vi"].replace(/\[CS\]v1\||\[CE\]/g,"").split("-");
if(s_vi_split.length === 2){
b["adobe_visitor_id"] = hexToDec(s_vi_split[0]) + "_" + hexToDec(s_vi_split[1]);
}
}
}];

  u.send=function(a,b,c,d,e,f){
    if(u.ev[a]||typeof u.ev["all"]!="undefined"){
      u.make_enrichment_request = false;

      for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};
      for (var i = 0; i < u.server_list.length; i++){
        // Adjust server based on region -- if cookie found, use this
        if ( b["cp.utag_main_dc_region"] ){
          u.region = b["cp.utag_main_dc_region"];
          u.server_list[i] = u.server_list[i].replace("datacloud.","datacloud-" + u.region + ".");
        }
        if ( u.enrichment_enabled[i] !== false ){
          u.enrichment_enabled[u.server_list[i]] = true
        }
      }

      // For multiple server locations, need unique vid values for each
      if ( u.server_list.length > 1 ){
        u.profile_specific_vid = 1;
      }
      u.data = utag.datacloud || {};

      u.data["loader.cfg"]={};
      for(d in utag.loader.GV(utag.loader.cfg)){
        if(utag.loader.cfg[d].load && utag.loader.cfg[d].send){
           utag.loader.cfg[d].executed = 1;
        }else{
           utag.loader.cfg[d].executed = 0;
        }
        u.data["loader.cfg"][d]=utag.loader.GV(utag.loader.cfg[d]);
      }
        
      //u.data.cfg=utag.cfg;
      u.data.data=b;
      /* Re-encode items in "qp." params */
      for(d in u.data.data){
        if((d+'').indexOf("qp.")==0){
          u.data.data[d]=encodeURIComponent(u.data.data[d]);
        }else if((d+'').indexOf("va.")==0){
          /* Remove visitor attributes */
          delete u.data.data[d]
        }
      }

      /* Visit Number and Event Count -- event count starts over with each visit */
      if( !b["cp.utag_main_dc_event"] ){
        b["cp.utag_main_dc_visit"] = (1 + ( b["cp.utag_main_dc_visit"]?parseInt(b["cp.utag_main_dc_visit"]):0 )) + '';
      }
      b["cp.utag_main_dc_event"] = (1 + ( b["cp.utag_main_dc_event"]?parseInt(b["cp.utag_main_dc_event"]):0 )) + '';
      utag.loader.SC("utag_main", {"dc_visit": b["cp.utag_main_dc_visit"] , "dc_event": b["cp.utag_main_dc_event"] + ";exp-session"});

      /* Update global data layer for Visitor Attribute check */
      utag.data["cp.utag_main_dc_visit"] = b["cp.utag_main_dc_visit"];
      utag.data["cp.utag_main_dc_event"] = b["cp.utag_main_dc_event"];

      var dt = new Date();
      /* Send browser info */
      u.data.browser = {};
      try{
        u.data.browser["height"] = window.innerHeight || document.body.clientHeight;
        u.data.browser["width"] = window.innerWidth || document.body.clientWidth;
        u.data.browser["screen_height"] = screen.height;
        u.data.browser["screen_width"] = screen.width;
        u.data.browser["timezone_offset"] = dt.getTimezoneOffset();
      }catch(e){utag.DB(e)}

      u.data["event"]=a+'';
      u.data["post_time"]=dt.getTime();

      /* Audience Stream Data Layer Enrichment */
      if( u.data_enrichment == "frequent" || u.data_enrichment == "infrequent" ){

        u.visit_num = b["cp.utag_main_dc_visit"];

        if( parseInt(u.visit_num) > 1 && b["cp.utag_main_dc_event"] == "1"){
          u.enrichment_polling = 2;
        }

        try{
          u.va_update = parseInt(localStorage.getItem("tealium_va_update") || 0);
        }catch(e){utag.DB(e)}

        u.visitor_id = u.visitor_id || b["cp.utag_main_v_id"];
        if( ( u.data_enrichment == "frequent" && !(u.visit_num == "1" && b["cp.utag_main_dc_event"] == "1" ) ) ||
            ( u.data_enrichment == "infrequent" && parseInt(u.visit_num) > 1 && parseInt(b["cp.utag_main_dc_event"]) <= 5 && u.visit_num != u.va_update )){
          u.make_enrichment_request = true;
        }else if(b._corder){
          u.make_enrichment_request = true;
          u.enrichment_polling = 3;
          u.enrichment_polling_delay = 4000;
        }

        u.visitor_service_request = function(t, server){
          var s = "//visitor-service"+(u.region?"-"+u.region:"")+".tealiumiq.com";
          var p = u.get_account_profile( server );
          (function(p){
            // declare multiple functions with dynamic local storage key -- multiple enrichments in same domain
            var prefix = "tealium_va";
            var key = "_" + p[1] + "_" + p[2];
            
            utag.ut["writeva"+p[2]] = function(o){
              utag.DB("Visitor Attributes: " + prefix + key);
              utag.DB(o)
              var str = JSON.stringify(o);
              if(str!="{}" && str!=""){
                try{
                  localStorage.setItem('tealium_va_update', utag.data["cp.utag_main_dc_visit"]);
                  // for utag.js v4.38 or earlier
                  localStorage.setItem( prefix, str);
                  // dynamic location in localstorage (utag.js 4.39 or later)
                  localStorage.setItem( prefix + key, str);
                }catch(e){utag.DB(e)}
                
                if (typeof tealium_enrichment == "function"){
                  tealium_enrichment(o, prefix + key);
                }
              }
            }
          }( p.slice(0) ))

          var vid = u.visitor_id;
          if( u.profile_specific_vid == 1 ){
            vid += p[2]; 
          }
          utag.ut.loader({ id: "tealium_visitor_service_125"+p[2], src: s+"/"+p[1]+"/"+p[2]+"/"+vid+"?callback=utag.ut%5B%22writeva"+p[2]+"%22%5D&rnd="+t });
        }

        u.do_enrichment = function(server){
          // utag.js 4.27 or later is required
          if( typeof utag.ut.loader!="undefined" ){
            // additional attempts for visitor enrichment
            for(var i=0;i<u.enrichment_polling;i++){
              setTimeout(function(){ u.visitor_service_request((new Date).getTime(), server) }, i*u.enrichment_polling_delay+1 );
            }
          }
        }
      }
      var json_string;
      var regExpReplace = new RegExp( u.visitor_id, "g" );
      
      if(window.FormData){
        // modern browsers
        function postData(server_index){

          if ( server_index+1 > u.server_list.length ){
            return;
          }
          var xhr = new XMLHttpRequest();
          var server = u.server_list[server_index];
          var formData = new FormData();
          xhr.addEventListener('readystatechange', function() {
            if( xhr.readyState === 3 ) {
              u.region = xhr.getResponseHeader("X-Region") || u.region || "";
              if(u.region)utag.loader.SC("utag_main", {"dc_region": u.region+ ";exp-session"});
              utag.DB("dc_region:"+u.region);
            }else if( xhr.readyState === 4 ) {
              // do secondary call for multiple server locations
              postData(server_index+1);
              if( u.make_enrichment_request && u.enrichment_enabled[server] )u.do_enrichment( server );
            }
          });
          xhr.open('post', u.server_list[server_index], true);
          xhr.withCredentials = true;
          json_string = JSON.stringify(u.data);
          if( u.profile_specific_vid == 1 ){
            json_string = json_string.replace( regExpReplace, u.visitor_id + u.get_account_profile(server)[2] );
          }
          formData.append("data", json_string);
          xhr.send(formData);
        }

        postData(0);
        
      }else{
        // fallback (old browsers)
        for (var i = 0; i < u.server_list.length; i++){
          (function(i){
            var server = u.server_list[i];
            setTimeout( function(){
              json_string = JSON.stringify(u.data);
              if( u.profile_specific_vid == 1 ){
                json_string = json_string.replace( regExpReplace, u.visitor_id + u.get_account_profile(server)[2] );
              }
              var img = new Image();
              img.src = server +'?data='+encodeURIComponent(json_string);
              if( u.make_enrichment_request && u.enrichment_enabled[server] )u.do_enrichment( server );
            }, i*700 );
          }(i))
        }
      }
    }
  }
  try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
})('125','ikea.fr-main');
}catch(e){}
//end tealium universal tag
