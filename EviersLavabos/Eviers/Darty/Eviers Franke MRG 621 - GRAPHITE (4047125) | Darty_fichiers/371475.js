if ( typeof tldc === 'undefined' ) window.tldc = {};
if ( typeof tlrp_transaction === 'object' ) tldc.xtra = tlrp_transaction;
if ( typeof extra_info === 'object' ) tldc.xtra = extra_info;
if ( typeof tldc.xtra === 'undefined' ) tldc.xtra = {};
if ( typeof tlrp_transaction === 'object' && typeof tlrp_transaction.products === 'object' ) tldc.xtra.uids = tlrp_transaction.products;
if ( typeof tldc.advid === 'undefined' ) tldc.advid = '401492';
function error(msg) {
  var version = "3.0.1b";
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

if ( typeof tldc.cvPx === 'undefined' ) tldc.cvPx = {};
tldc.cvPx['371475'] = {};
tldc.cvPx['371475'].a = 371475;
tldc.cvPx['371475'].l = [2522776,2522989,2523134,2728496,2728930,2731951,2734886,2734919,2736020,2753870,2753874,2753876,2753877,2768577,2768578,2768580,2768589,2768591,2768592,2768595,2768600,2768602,2768603,2769444,2769899,2769900,2821517,2986019,2986028,2986059,2986060,3006369,3006786,3006791,3006798,3009570,3009574,3018679,3018682,3018693,3018697,3018701,3018702,3120944,3121251,3121253,3121270,3141731,3267995,3268015,3268027,3268034,3268037,3268058,3268059,3268060,3268061,3268062,3268104,3268105,3268112,3268113,3268115,3277198,3277224,3277258,3277321,3277452,3279169,3279170,3280473,3296931,3296943,3296958,3296960,3298899,3298902,3298914,3298915,3298916,3298917,3303656,3303660,3303663,3303664,3303692,3303697,3303703,3303705,3303744,3303777,3303778,3303779,3303780,3303805,3303806,3303807,3322789,3323122,3323123,3323145,3323147,3327575,3327617,3327624,3327643,3328965,3329040,3336088,3336223,3340952,3343931,3343983,3343986,3345432,3345438,3345445,3345508,3351743,3357339,3357341,3357345,3357347,3357349,3361347,3361371,3365989,3366338,3366344,3366345,3366400,3367679,3368048,3368490,3368505,3368515,3368516,3368705,3371496,3372375,3374122,3374199,3374234,3375113,3378404,3403735,3403738,3403875,3403876,3403877,3403878,3403879,3403897,3403898,3403899,3403900,3403935,3403939,3403949,3403953,3469235,3481548,3481562,3481737,3486068,3486087,3486105,3486119,3587503,3587640,3587642,3587646,3587681,3587944,3587946,3587981,3594896,3595102,3595123,3595124,3595127,3595270,3595311,3595314,3595329,3595356,3595428,3595638,3595641,3595668,3595672,3595674,3595679,3595685,3595688,3595697,3595706,3595926,3604978,3604979,3604987,3604990,3605003,3608276,3608277,3608280,3608282,3614719,3618021,3618022,3618058,3634302,3634333,3693837,3696710,3698574,3698731,3698757,3698765,3698778,3698825,3698929,3699043,3699060,3699145,3699207,3699379,3699424,3699428,3699432,3699433,3699451,3699511,3699517,3699528,3699529,3699538,3700990,3701791,3703740,3703800,3703862,3703865,3703951,3704081,3704124,3704134,3704158,3704164,3771998,3780783,3780798,3780805,3780806,3780811,3781277,3781295,3781297,3781298,3781309,3781315,3781641,3781642,3781643,3781644,3781645,3781646,3781647,3781650,3781651,3781652,3781653,3781654,3781655,3781656,3781657,3781658,3781662,3781664,3781665,3781698,3781804,3781805,3781806,3781807,3798555,3803450,3820101,3820255,3820256,3820257,3820258,3820443,3820450,3820451,3820452,3820453,3887690,3887822,3887866,3887870,3887906,3887916,3887987,3887990,3888143,3888168,3888189,3888196,3888206,3888210,3888213,3888221,3888228,3888231,3892204,3942074,3942093,3942097,3942100,3942101,3942327,3942336,3942347,3942389,3942396,3942604,3942606,3942610,3942622,3942628,4011927,4011934,4011954,4011957,4011983,4011985,4011993,4012003,4012004,4012005,4012144,4012145,4012146,4012148,4012166,4012167,4012168,4012169,4040655,4040689,4040698,4040715,4040769,4040800,4040870,4055974,4055980,4055985,4056063,4056477,4056493,4056504,4056513];
tldc.cvPx['371475'].i = 1; 
tldc.cvPx['371475'].c = 30; 
tldc.cvPx['371475'].t = 'h';
tldc.cvPx['371475'].m = 1440;
tldc.cvPx['371475'].vi = 0;
tldc.cvPx['371475'].vc = 0;
tldc.cvPx['371475'].hf = 0;
tldc.cvPx['371475'].x = tldc.xtra;
var urlencode=function(e){e=(e+"").toString();return encodeURIComponent(e).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")};var stringify=function(e){var t=typeof e;if(t!="object"||e===null){if(t=="string"){e='"'+e+'"'}return String(e)}else{var n;var r;var i=[];var s=e&&e.constructor==Array;for(n in e){if(e.hasOwnProperty(n)){r=e[n];t=typeof r;if(t=="string"){r='"'+r+'"'}else if(t=="object"&&r!==null){r=stringify(r)}i.push((s?"":'"'+n+'":')+String(r))}}return(s?"[":"{")+String(i)+(s?"]":"}")}}
function insertInDom (el) { var ref = document.getElementsByTagName('script')[0]; ref.parentNode.insertBefore(el, ref);}
tldc.tl_getCookie=function(a){return(a=(new RegExp("(^|;)[ ]*"+a+"=([^;]*)")).exec(document.cookie))?a[2]:0};tldc.tl_loadUUIDCookie=function(){var a=tldc.tl_getCookie("_tli");return a?a:"0"};
var TradeLabConvTracker = function (cdata) {
    var xval = 1, isrc; 
  if ( typeof tldc.tl_check4xconv === 'undefined' && typeof tl_check4xconv === 'function' ) tldc.tl_check4xconv = tl_check4xconv;
  if ( typeof tldc.tl_addXconv === 'undefined' && typeof tl_addXconv === 'function' ) tldc.tl_addXconv = tl_addXconv;
  if ( typeof tldc.tl_getAnalyticsData === 'undefined' && typeof tl_getAnalyticsData === 'function' ) tldc.tl_getAnalyticsData = tl_getAnalyticsData;   
    if ( typeof tldc.tl_check4xconv === 'function' ) {
    if ( !tldc.tl_check4xconv(371475) ) {
        if ( typeof tldc.tl_addXconv === 'function' ) tldc.tl_addXconv(371475);
      }
      else xval = 0;
  }
  if ( typeof document.cookie != 'undefined' ) {
    tldc.uuid = tldc.tl_loadUUIDCookie();
  }
    var i = document.createElement("img");
    i.style.position = "absolute";
    i.style.height = 0;
    i.style.width = 0;
    i.setAttribute('id', 'imgConv');
    if ( typeof tldc.ses == 'object' && typeof tldc.ses.uuid2 == 'string' && tldc.ses.uuid2 != ''  ) {
      isrc = "//its.tradelab.fr/?type=convr&x=" + xval + "&cdata=" + urlencode(cdata) + "&advid=" + tldc.advid;
    }
    else {
    isrc = "//ib.adnxs.com/getuid?//its.tradelab.fr/?type=convr&x=" + xval + "&uuid2=$UID&cdata=" + urlencode(cdata) + "&advid=" + tldc.advid; 
    }
    if ( typeof tldc.tl_getAnalyticsData === 'function' ) {
      isrc += "&xur=" + urlencode(tldc.locationHref) + "&adata=" + tldc.tl_getAnalyticsData();
    }
    if ( typeof tldc.uuid !== 'undefined' && tldc.uuid !== "0" ) {
      isrc += "&uuid=" + tldc.uuid;
    }
    i.src = isrc;
    insertInDom(i);
    var a=document.createElement("img");
    var asrc = '';
    a.style.position = "absolute";
    a.style.height = 0;
    a.style.width = 0;    
    if ( document.location.protocol == 'http:' ) asrc="http://ib.adnxs.com/px?id=371475";
    else asrc="https://secure.adnxs.com/px?id=371475";
    if ( typeof tldc.xtra.redirect_url != 'undefined' ) asrc += '&redir='+tldc.xtra.redirect_url;
    if ( typeof tldc.xtra.order_id != 'undefined' ) asrc += '&order_id='+tldc.xtra.order_id;
    if ( typeof tldc.xtra.value != 'undefined' ) asrc += '&value='+tldc.xtra.value;
    asrc += "&t=2";
    a.src = asrc;
    insertInDom(a);
    return true;  
}
if ( tldc.cvPx['371475'].hf == 0 ) {  
  if ( TradeLabConvTracker(stringify(tldc.cvPx['371475'])) ) tldc.cvPx['371475'].hf = 1;
}

})();

} catch(err) { error('CvPx3|'+err.message); }