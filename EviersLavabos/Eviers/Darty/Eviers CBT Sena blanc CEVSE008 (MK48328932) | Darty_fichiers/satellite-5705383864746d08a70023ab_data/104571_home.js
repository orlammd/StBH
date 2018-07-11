/*** Mastertag Adverline *** 3.17 ***/


if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}
try {
  (function(window, document) {
  
    adv_mt_referrer = document.referrer ; 
  
    function dump_referer(){
      var aw = self; 
      var stop = false; 
      var ret = "";
      
      try{
        ret=window.document.location.href;
        while(!stop){
          ret+="#"+aw.document.referrer;
          if(aw===aw.parent)
            stop=true; 
          else {
            try{
              if(aw.document.referrer === aw.parent.document.referrer)
                stop=true;
              else 
                aw=aw.parent;
            } catch (e) {
              stop=true;
            }
          }
        }
      } catch (e) {}
      return ret;
    }

    function tag_pushed(id){
      for(i=0;i<window.adv_tags.length;i++) 
        if(window.adv_tags[i].id==id) window.adv_tags[i].pushed++;
    }


    function adv_insert_iframe(urlifr){
      try{
        var ifr=null;
        ifr=document.createElement('iframe');
        ifr.style.frameborder=0; 
        ifr.style.border=0; 
        ifr.style.cellSpacing=0; 
        ifr.style.display = 'none';
        ifr.setAttribute('id', 'adv_partnertag_'+ (new Date()).getTime());
        ifr.src = urlifr;
        document.getElementsByTagName('body')[0].appendChild(ifr);
      } catch (e){}
    }


    function adv_insert_script(urlsrc){
      try{
        var scr = document.createElement("script"); 
        scr.type="text/javascript"; 
        scr.src= urlsrc; 
        document.getElementsByTagName("head")[0].appendChild(scr); 
      } catch (e){}
    }


    function is_ie() {
      var browser = /(?:MSIE.(\d+\.\d+))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(navigator.userAgent);
      if (browser) {
        var version = browser[1] ? parseFloat(browser[1]) : (browser[2] ? parseFloat(browser[2]) : NaN);
        if (version && document && document.documentMode) {
          version = document.documentMode;
        }
        return version;
      }
      return false;
    }

    
    function defer(fn) {
      var is_loaded = "readyState" in document?/loaded|complete/.test(document.readyState) : !!document.body;

      if (!is_loaded) {
          var exec = function () {
            try {
              document.documentElement.doScroll("left");
            } catch (e) {
              setTimeout(exec, 100);
              return;
            }
            fn();
          };
          exec();
      } else fn();
    }

    var appended = false;

    function pushTags() {
      if (!appended) {

        if(typeof(window.adv_tags104571_home)!="undefined") return false;
        window.adv_tags104571_home=1;
        /*** Tags distribues  ***/
        if(typeof(window.adv_tags)=="undefined") window.adv_tags=new Array();
        window.adv_tags[window.adv_tags.length]={id:109,action:"global",pushed:0};
        window.adv_tags[window.adv_tags.length]={id:152,action:"global",pushed:0};
        window.adv_tags[window.adv_tags.length]={id:53,action:"home",pushed:0};
        window.adv_tags[window.adv_tags.length]={id:206,action:"home",pushed:0};
        
          /**** Tag ID : 109 ****/
        //google utm_source
        adv_cookie_104571_utms=null;
        //root domain referrer
        adv_cookie_104571_tdom=null;
        adv_cookie_104571_whclk=null;
        adv_cookie_104571_lstvis=null;
        
        (function() {
          if("home"=="confirmation" || "home"=="cart" || "home"=="pap" || "home"=="exclusion") return false;
          try{
          var p = new Object();
          var today = new Date();
          var yyyy = today.getFullYear().toString();
          var mm = (today.getMonth()+1).toString(); // getMonth() is zero-based
          var dd  = today.getDate().toString();
          adv_cookie_104571_lstvis=yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]);
        
          var curr_url=document.location.href;
          var curr_win=window;
          var depth=1;
            
          
          while (depth<9 && curr_url!="") {
            if(/.*?utm_source=([^&]+).*/gi.test(curr_url))
              adv_cookie_104571_utms=curr_url.replace(/.*?utm_source=([^&]+).*/gi,"$1");
              
            adv_cookie_104571_tdom=curr_url
              .replace(/.*?\/\/(.*)/gi,"$1")
              .replace(/(.*?)\/.*/gi,"$1")
              .replace(/.*?\.(.*)\..*/gi,"$1");
            
            try{
              if(depth>1) curr_win=curr_win.parent;
              curr_url=curr_win.document.referrer;
            } catch(e){depth=100;}  
            depth++;
          }
        
          var whoslast=0;
        
          
          re=/affili_12714=.*?ref=(\d+).*?cltime=([0-9A-Z:-]+)/gi;
          i=0;
          while ((clicks=re.exec(document.cookie)) != null && i < 100) {
            i++;
            c=clicks[1];
            w=clicks[2];
            wo="";
            while(wo!=w){
              wo=w;
              w=w.replace(/(.*?)[^0-9](.*)/g,"$1$2");
            }
            if(w>whoslast){ //+ recent.
              adv_cookie_104571_whclk=c;
              whoslast=w;
            }
          }
          
          dom_s='http://www.darty.com/'
            .replace(/.*?\/\/(.*)/gi,"$1")
            .replace(/(.*?)\/.*/gi,"$1")
            .replace(/.*?\.(.*)\..*/gi,"$1");
            
          if(dom_s==adv_cookie_104571_tdom) adv_cookie_104571_tdom=null; 
          if('AW'=='Z') adv_cookie_104571_tdom=null; 
            
          } catch (e) {}
        })();
        
        adv_cst_v_home_104571_jstdom=adv_cookie_104571_tdom;
        adv_cst_v_home_104571_jsutms=adv_cookie_104571_utms;
        
        tag_pushed(109);
        
          /**** Tag ID : 152 ****/
         /**** Debug ****/
        try{
          var adv_dbg_varsstring="";
          if (typeof adv_cst_v_home_104571_section != "undefined" && adv_cst_v_home_104571_section != null) { if(adv_dbg_varsstring!="") adv_dbg_varsstring+="&"; adv_dbg_varsstring+="adv_cst_v_home_104571_section="+encodeURIComponent(adv_cst_v_home_104571_section); }if (typeof adv_cst_v_home_104571_brand != "undefined" && adv_cst_v_home_104571_brand != null) { if(adv_dbg_varsstring!="") adv_dbg_varsstring+="&"; adv_dbg_varsstring+="adv_cst_v_home_104571_brand="+encodeURIComponent(adv_cst_v_home_104571_brand); }if (typeof adv_cst_v_home_104571_product != "undefined" && adv_cst_v_home_104571_product != null) { if(adv_dbg_varsstring!="") adv_dbg_varsstring+="&"; adv_dbg_varsstring+="adv_cst_v_home_104571_product="+encodeURIComponent(adv_cst_v_home_104571_product); }
          if(top===self) {
        	if (typeof dump_referer != "undefined") { if(adv_dbg_varsstring!="") adv_dbg_varsstring+="&"; adv_dbg_varsstring+="dref="+encodeURIComponent(dump_referer()); }
        	adv_insert_script("//ads2.adverline.com/retargetproduit/partnertag/debug_104571_home.js?"+(new Date().getTime())+"&"+adv_dbg_varsstring) ;
          }
        }catch(e){}
        tag_pushed(152);
        
        /**** Transmission des variables a l'iframe ****/
        var adv_ifr_varsstring="";
        if(top!==self) adv_ifr_varsstring="dop=1"; //Le debug ne pourra pas etre affiche dans la page
        if(top!==self && typeof dump_referer != "undefined") adv_ifr_varsstring+="&dref="+encodeURIComponent(dump_referer()); 
        if (typeof adv_cst_v_home_104571_jstdom != "undefined" && adv_cst_v_home_104571_jstdom != null) { if(adv_ifr_varsstring!="") adv_ifr_varsstring+="&"; adv_ifr_varsstring+="a0="+encodeURIComponent(adv_cst_v_home_104571_jstdom); }if (typeof adv_cst_v_home_104571_jsutms != "undefined" && adv_cst_v_home_104571_jsutms != null) { if(adv_ifr_varsstring!="") adv_ifr_varsstring+="&"; adv_ifr_varsstring+="a1="+encodeURIComponent(adv_cst_v_home_104571_jsutms); }if (typeof adv_cst_v_home_104571_section != "undefined" && adv_cst_v_home_104571_section != null) { if(adv_ifr_varsstring!="") adv_ifr_varsstring+="&"; adv_ifr_varsstring+="a2="+encodeURIComponent(adv_cst_v_home_104571_section); }if (typeof adv_cookie_104571_frtvis != "undefined" && adv_cookie_104571_frtvis != null) { if(adv_ifr_varsstring!="") adv_ifr_varsstring+="&"; adv_ifr_varsstring+="a3="+encodeURIComponent(adv_cookie_104571_frtvis); }if (typeof adv_cookie_104571_lstvis != "undefined" && adv_cookie_104571_lstvis != null) { if(adv_ifr_varsstring!="") adv_ifr_varsstring+="&"; adv_ifr_varsstring+="a4="+encodeURIComponent(adv_cookie_104571_lstvis); }if (typeof adv_cookie_104571_tdom != "undefined" && adv_cookie_104571_tdom != null) { if(adv_ifr_varsstring!="") adv_ifr_varsstring+="&"; adv_ifr_varsstring+="a5="+encodeURIComponent(adv_cookie_104571_tdom); }if (typeof adv_cookie_104571_utms != "undefined" && adv_cookie_104571_utms != null) { if(adv_ifr_varsstring!="") adv_ifr_varsstring+="&"; adv_ifr_varsstring+="a6="+encodeURIComponent(adv_cookie_104571_utms); }if (typeof adv_cookie_104571_whclk != "undefined" && adv_cookie_104571_whclk != null) { if(adv_ifr_varsstring!="") adv_ifr_varsstring+="&"; adv_ifr_varsstring+="a7="+encodeURIComponent(adv_cookie_104571_whclk); }
        if(is_ie())
            adv_insert_iframe("//ads2.adverline.com/retargetproduit/partnertag/iframe.html?s=104571&a=home&"+adv_ifr_varsstring); 
          else
            adv_insert_iframe("//ads2.adverline.com/retargetproduit/partnertag/iframe.html?s=104571&a=home#"+adv_ifr_varsstring);

        appended = true;
      }
    }

    function init() {
      if ( (is_ie() && is_ie()<11) || !document.body) {
        defer(function() {
          pushTags();
        })
      } else {
        pushTags();        
      }
    }
	
    init();
  })(window, window.document);
} catch(e) {}

