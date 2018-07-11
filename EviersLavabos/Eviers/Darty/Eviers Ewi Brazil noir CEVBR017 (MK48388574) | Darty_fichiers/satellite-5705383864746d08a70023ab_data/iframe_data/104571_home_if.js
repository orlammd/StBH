        
        
        if(typeof String.prototype.trim !== 'function') {
          String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, ''); 
          }
        }
        
            function adv_insert_script(urlsrc){
              try{
                var scr = document.createElement("script"); 
                scr.type="text/javascript"; 
                scr.src= urlsrc; 
                document.getElementsByTagName("head")[0].appendChild(scr); 
              } catch (e){}
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
        
        
        window.adv_tags104571_home=1;
        /*** Tags distribues  ***/
        if(typeof(window.adv_tags)=="undefined") window.adv_tags=new Array();
        window.adv_tags[window.adv_tags.length]={id:109,action:"global",pushed:0};
        window.adv_tags[window.adv_tags.length]={id:152,action:"global",pushed:0};
        window.adv_tags[window.adv_tags.length]={id:53,action:"home",pushed:0};
        window.adv_tags[window.adv_tags.length]={id:206,action:"home",pushed:0};
    
        function tag_pushed(id){
          for(i=0;i<window.adv_tags.length;i++) 
            if(window.adv_tags[i].id==id) window.adv_tags[i].pushed++;
        }
    
        function pushTags() {
        
          /**** Tag ID : 109 ****/
        if("home"!="confirmation" && "home"!="cart" && "home"!="exclusion")
          try{
            if(typeof(advWriteCookie)!="undefined")
              if (typeof(adv_cookie_104571_lstvis)!="undefined" && adv_cookie_104571_lstvis!=null)
                if (typeof(adv_cookie_104571_frtvis)=="undefined" || adv_cookie_104571_frtvis==null) /*No cookie*/
                  advWriteCookie("adv_cookie_104571_frtvis",adv_cookie_104571_lstvis);
                else
                  advWriteCookie("adv_cookie_104571_frtvis",adv_cookie_104571_frtvis);               /*Reset cookie*/
          } catch(e){}
        
        if("home"=="confirmation"){
          try{
            if(typeof adv_cst_v_home_104571_section == "undefined" || adv_cst_v_home_104571_section == null) adv_cst_v_home_104571_section="";
            if(typeof adv_cookie_104571_utms != "undefined" && adv_cookie_104571_utms!=null){
              if(adv_cst_v_home_104571_section!="") adv_cst_v_home_104571_section+=",";
              adv_cst_v_home_104571_section+='CST_UTMS_'+String(adv_cookie_104571_utms);
            }
            if(typeof adv_cookie_104571_tdom != "undefined" && adv_cookie_104571_tdom!=null){
              if(adv_cst_v_home_104571_section!="") adv_cst_v_home_104571_section+=",";
              adv_cst_v_home_104571_section+='CST_TDOM_'+String(adv_cookie_104571_tdom);
            }
            if(typeof adv_cookie_104571_whclk != "undefined" && adv_cookie_104571_whclk!=null){
              if(adv_cst_v_home_104571_section!="") adv_cst_v_home_104571_section+=",";
              adv_cst_v_home_104571_section+='CST_WHCLK_'+String(adv_cookie_104571_whclk);
            }
            if(typeof adv_cookie_104571_lstvis != "undefined" && adv_cookie_104571_lstvis!=null){
              if(adv_cst_v_home_104571_section!="") adv_cst_v_home_104571_section+=",";
              adv_cst_v_home_104571_section+='CST_LSTVIS_'+String(adv_cookie_104571_lstvis);
            }
            if(typeof adv_cookie_104571_frtvis != "undefined" && adv_cookie_104571_frtvis!=null){
              if(adv_cst_v_home_104571_section!="") adv_cst_v_home_104571_section+=",";
              adv_cst_v_home_104571_section+='CST_FRTVIS_'+String(adv_cookie_104571_frtvis);
            }
          } catch(e){}
        }
        tag_pushed(109);
        
          /**** Tag ID : 53 ****/
        document.write('<img src="http' + ((document.location.protocol == 'https:') ? 's' : '') + '://adnext.fr/track.adv?ap=104571" />') ; 

        tag_pushed(53);
        
          /**** Tag ID : 152 ****/
        try{
          /**** Debug on popup ****/
          if (typeof dop != "undefined" && dop != null){
        	var regexpmtd=new RegExp(".*mtdebug=([a-zA-Z0-9]+).*");
        	if(regexpmtd.test(document.cookie)){
        	  var adv_dbg_varsstring="popup=1&mtdebug="+document.cookie.replace(regexpmtd,"$1");
        	  if (typeof adv_cst_v_home_104571_section != "undefined" && adv_cst_v_home_104571_section != null) { if(adv_dbg_varsstring!="") adv_dbg_varsstring+="&"; adv_dbg_varsstring+="adv_cst_v_home_104571_section="+encodeURIComponent(adv_cst_v_home_104571_section); }if (typeof adv_cst_v_home_104571_brand != "undefined" && adv_cst_v_home_104571_brand != null) { if(adv_dbg_varsstring!="") adv_dbg_varsstring+="&"; adv_dbg_varsstring+="adv_cst_v_home_104571_brand="+encodeURIComponent(adv_cst_v_home_104571_brand); }if (typeof adv_cst_v_home_104571_product != "undefined" && adv_cst_v_home_104571_product != null) { if(adv_dbg_varsstring!="") adv_dbg_varsstring+="&"; adv_dbg_varsstring+="adv_cst_v_home_104571_product="+encodeURIComponent(adv_cst_v_home_104571_product); }
        	  if (typeof dref != "undefined") adv_dbg_varsstring+="&dref="+encodeURIComponent(dref);
        	  window.open("//ads2.adverline.com/retargetproduit/partnertag/debug_104571_home.js?"+(new Date().getTime())+"&"+adv_dbg_varsstring,'Adverline : Mastertag debugger','menubar=no, status=no, width=640, height=900') ;
        	}
          }
        }catch(e){}
        tag_pushed(152);
        
          /**** Tag ID : 206 ****/
        adv_insert_script("//ads2.adverline.com/retargetproduit/partnertag_test_tracking.php?s=104571") ; 

        tag_pushed(206);
        }
        
        
        if (typeof a0 != "undefined") adv_cst_v_home_104571_jstdom=a0; else adv_cst_v_home_104571_jstdom=null ; document.write('<!-- a0->adv_cst_v_home_104571_jstdom == '+adv_cst_v_home_104571_jstdom+' -->') ;if (typeof a1 != "undefined") adv_cst_v_home_104571_jsutms=a1; else adv_cst_v_home_104571_jsutms=null ; document.write('<!-- a1->adv_cst_v_home_104571_jsutms == '+adv_cst_v_home_104571_jsutms+' -->') ;if (typeof a2 != "undefined") adv_cst_v_home_104571_section=a2; else adv_cst_v_home_104571_section=null ; document.write('<!-- a2->adv_cst_v_home_104571_section == '+adv_cst_v_home_104571_section+' -->') ;
        pushTags();
        if (typeof a3 != "undefined") advWriteCookie("adv_cookie_104571_frtvis",a3); if (typeof a4 != "undefined") advWriteCookie("adv_cookie_104571_lstvis",a4); if (typeof a5 != "undefined") advWriteCookie("adv_cookie_104571_tdom",a5); if (typeof a6 != "undefined") advWriteCookie("adv_cookie_104571_utms",a6); if (typeof a7 != "undefined") advWriteCookie("adv_cookie_104571_whclk",a7); 
