        
        
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
        
        
        window.adv_tags104417_tag=1;
        /*** Tags distribues  ***/
        if(typeof(window.adv_tags)=="undefined") window.adv_tags=new Array();
        window.adv_tags[window.adv_tags.length]={id:109,action:"global",pushed:0};
        window.adv_tags[window.adv_tags.length]={id:216,action:"tag",pushed:0};
        window.adv_tags[window.adv_tags.length]={id:152,action:"global",pushed:0};
        window.adv_tags[window.adv_tags.length]={id:10,action:"tag",pushed:0};
        window.adv_tags[window.adv_tags.length]={id:151,action:"tag",pushed:0};
        window.adv_tags[window.adv_tags.length]={id:205,action:"tag",pushed:0};
    
        function tag_pushed(id){
          for(i=0;i<window.adv_tags.length;i++) 
            if(window.adv_tags[i].id==id) window.adv_tags[i].pushed++;
        }
    
        function pushTags() {
        
          /**** Tag ID : 109 ****/
        if("tag"!="confirmation" && "tag"!="cart" && "tag"!="exclusion")
          try{
            if(typeof(advWriteCookie)!="undefined")
              if (typeof(adv_cookie_104417_lstvis)!="undefined" && adv_cookie_104417_lstvis!=null)
                if (typeof(adv_cookie_104417_frtvis)=="undefined" || adv_cookie_104417_frtvis==null) /*No cookie*/
                  advWriteCookie("adv_cookie_104417_frtvis",adv_cookie_104417_lstvis);
                else
                  advWriteCookie("adv_cookie_104417_frtvis",adv_cookie_104417_frtvis);               /*Reset cookie*/
          } catch(e){}
        
        if("tag"=="confirmation"){
          try{
            if(typeof adv_cst_v_tag_104417_section == "undefined" || adv_cst_v_tag_104417_section == null) adv_cst_v_tag_104417_section="";
            if(typeof adv_cookie_104417_utms != "undefined" && adv_cookie_104417_utms!=null){
              if(adv_cst_v_tag_104417_section!="") adv_cst_v_tag_104417_section+=",";
              adv_cst_v_tag_104417_section+='CST_UTMS_'+String(adv_cookie_104417_utms);
            }
            if(typeof adv_cookie_104417_tdom != "undefined" && adv_cookie_104417_tdom!=null){
              if(adv_cst_v_tag_104417_section!="") adv_cst_v_tag_104417_section+=",";
              adv_cst_v_tag_104417_section+='CST_TDOM_'+String(adv_cookie_104417_tdom);
            }
            if(typeof adv_cookie_104417_whclk != "undefined" && adv_cookie_104417_whclk!=null){
              if(adv_cst_v_tag_104417_section!="") adv_cst_v_tag_104417_section+=",";
              adv_cst_v_tag_104417_section+='CST_WHCLK_'+String(adv_cookie_104417_whclk);
            }
            if(typeof adv_cookie_104417_lstvis != "undefined" && adv_cookie_104417_lstvis!=null){
              if(adv_cst_v_tag_104417_section!="") adv_cst_v_tag_104417_section+=",";
              adv_cst_v_tag_104417_section+='CST_LSTVIS_'+String(adv_cookie_104417_lstvis);
            }
            if(typeof adv_cookie_104417_frtvis != "undefined" && adv_cookie_104417_frtvis!=null){
              if(adv_cst_v_tag_104417_section!="") adv_cst_v_tag_104417_section+=",";
              adv_cst_v_tag_104417_section+='CST_FRTVIS_'+String(adv_cookie_104417_frtvis);
            }
          } catch(e){}
        }
        tag_pushed(109);
        
          /**** Tag ID : 10 ****/
        try{
          var adv_products_list='';
          var adv_brand_list='';
        
          if (typeof adv_cst_v_tag_104417_product != "undefined" && adv_cst_v_tag_104417_product != null) adv_products_list=String(adv_cst_v_tag_104417_product);
          if (typeof adv_cst_v_tag_104417_brand != "undefined" && adv_cst_v_tag_104417_brand != null) adv_brand_list=String(adv_cst_v_tag_104417_brand);
          adv_products_list=adv_products_list.replace(/^\s+/g,'').replace(/\s+$/g,'');
        
          var adv_products=adv_products_list.split(',');
          var adv_products_list_t='';
          
          for (iii=0;iii<adv_products.length;iii++){
            var fproduct=adv_products[iii];
            if (adv_products_list_t!='') adv_products_list_t+=',';
            adv_products_list_t+='CASTOP_'+fproduct; 
          }
        
          var advtsrp= new Date();
        
          if (adv_products_list=='')
            document.write('<img src="http' + ((document.location.protocol == 'https:') ? 's' : '') + '://adnext.fr/track.adv?ap=104417" />');
          else
            document.write('<img src="http' + ((document.location.protocol == 'https:') ? 's' : '') + '://adnext.fr/track.adv?ap=104417&product='+adv_products_list_t+'" />');
        } catch(e){}
        tag_pushed(10);
        
          /**** Tag ID : 151 ****/
        document.write('<img src="http'+'s://secure.adnxs.com/seg?add=7301602&t=2" width="1" height="1" />'); 
        
        tag_pushed(151);
        
          /**** Tag ID : 152 ****/
        try{
          /**** Debug on popup ****/
          if (typeof dop != "undefined" && dop != null){
        	var regexpmtd=new RegExp(".*mtdebug=([a-zA-Z0-9]+).*");
        	if(regexpmtd.test(document.cookie)){
        	  var adv_dbg_varsstring="popup=1&mtdebug="+document.cookie.replace(regexpmtd,"$1");
        	  if (typeof adv_cst_v_tag_104417_section != "undefined" && adv_cst_v_tag_104417_section != null) { if(adv_dbg_varsstring!="") adv_dbg_varsstring+="&"; adv_dbg_varsstring+="adv_cst_v_tag_104417_section="+encodeURIComponent(adv_cst_v_tag_104417_section); }if (typeof adv_cst_v_tag_104417_brand != "undefined" && adv_cst_v_tag_104417_brand != null) { if(adv_dbg_varsstring!="") adv_dbg_varsstring+="&"; adv_dbg_varsstring+="adv_cst_v_tag_104417_brand="+encodeURIComponent(adv_cst_v_tag_104417_brand); }if (typeof adv_cst_v_tag_104417_product != "undefined" && adv_cst_v_tag_104417_product != null) { if(adv_dbg_varsstring!="") adv_dbg_varsstring+="&"; adv_dbg_varsstring+="adv_cst_v_tag_104417_product="+encodeURIComponent(adv_cst_v_tag_104417_product); }
        	  if (typeof dref != "undefined") adv_dbg_varsstring+="&dref="+encodeURIComponent(dref);
        	  window.open("//ads2.adverline.com/retargetproduit/partnertag/debug_104417_tag.js?"+(new Date().getTime())+"&"+adv_dbg_varsstring,'Adverline : Mastertag debugger','menubar=no, status=no, width=640, height=900') ;
        	}
          }
        }catch(e){}
        tag_pushed(152);
        
          /**** Tag ID : 205 ****/
        adv_insert_script("//ads2.adverline.com/retargetproduit/partnertag_test_tracking.php?s=104417") ; 

        tag_pushed(205);
        }
        
        
        if (typeof a0 != "undefined") adv_cst_v_tag_104417_jstdom=a0; else adv_cst_v_tag_104417_jstdom=null ; document.write('<!-- a0->adv_cst_v_tag_104417_jstdom == '+adv_cst_v_tag_104417_jstdom+' -->') ;if (typeof a1 != "undefined") adv_cst_v_tag_104417_jsutms=a1; else adv_cst_v_tag_104417_jsutms=null ; document.write('<!-- a1->adv_cst_v_tag_104417_jsutms == '+adv_cst_v_tag_104417_jsutms+' -->') ;if (typeof a2 != "undefined") adv_cst_v_tag_104417_section=a2; else adv_cst_v_tag_104417_section=null ; document.write('<!-- a2->adv_cst_v_tag_104417_section == '+adv_cst_v_tag_104417_section+' -->') ;if (typeof a3 != "undefined") adv_cst_v_tag_104417_product=a3; else adv_cst_v_tag_104417_product=null ; document.write('<!-- a3->adv_cst_v_tag_104417_product == '+adv_cst_v_tag_104417_product+' -->') ;if (typeof a4 != "undefined") adv_cst_v_tag_104417_brand=a4; else adv_cst_v_tag_104417_brand=null ; document.write('<!-- a4->adv_cst_v_tag_104417_brand == '+adv_cst_v_tag_104417_brand+' -->') ;
        pushTags();
        if (typeof a5 != "undefined") advWriteCookie("adv_cookie_104417_frtvis",a5); if (typeof a6 != "undefined") advWriteCookie("adv_cookie_104417_lstvis",a6); if (typeof a7 != "undefined") advWriteCookie("adv_cookie_104417_tdom",a7); if (typeof a8 != "undefined") advWriteCookie("adv_cookie_104417_utms",a8); if (typeof a9 != "undefined") advWriteCookie("adv_cookie_104417_whclk",a9); 
