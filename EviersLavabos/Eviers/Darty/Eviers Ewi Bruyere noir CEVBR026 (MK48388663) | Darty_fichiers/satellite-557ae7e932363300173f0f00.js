_satellite.pushAsyncScript(function(event, target, $variables){
  /*Script*/
window.criteo_q = window.criteo_q || [];
if((s_darty)&&(s_darty.pageName)){
  var siteType='abc';
  var custId='';
  var prodIdList=[];
  var prodPrix=[];
  var prodQuant=[];
  var prodProduct=[];
  var prodParam=[];
  var keyW=s_darty.prop7||'';
            var nbSplit=0;
  
  if((s_darty.pageName.indexOf('www/',0)>-1)||(s_darty.pageName.indexOf('www-pro/',0)>-1)){siteType='d'};
  if(s_darty.pageName.indexOf('mobile/',0)>-1){siteType='m'};

  if ((s_darty.pageName=='www/accueil')||(s_darty.pageName=='mobile/accueil')||(s_darty.pageName=='www-pro/accueil')){
    window.criteo_q.push (
    { event: "setAccount", account : 1332},
    { event: "setCustomerId", id: custId},
    { event: "setSiteType", type: siteType},
    { event: "viewHome"}
    );
  }

  if(s_darty.events){
    if (s_darty.events.indexOf('event2',0)>-1){
      //--Product List
      if (s_darty.products){
        prodParam=s_darty.products.split(',');
                                    if (prodParam.length<3){
                                             nbSplit=prodParam.length;}
                                    else {
                                             nbSplit=3;}
        for (var i = 0; i < nbSplit; i++) {
          prodParam[i]=prodParam[i].split(';');
          prodIdList.push(prodParam[i][1]);
        }
      }
      window.criteo_q.push (
      { event: "setAccount", account : 1332},
      { event: "setCustomerId", id: custId},
      { event: "setSiteType", type: siteType},
      { event: "viewList", product: prodIdList, keywords:keyW}
      );
    }     
  }
  
  if(s_darty.events){
    if (s_darty.events.indexOf('event12',0)>-1){
      //--Product List
      if (s_darty.products){
        prodParam=s_darty.products.split(',');
        for (var i = 0; i < prodParam.length; i++) {
          prodParam[i]=prodParam[i].split(';');
          prodIdList.push(prodParam[i][1]);
        }
      }
      window.criteo_q.push (
      { event: "setAccount", account : 1332},
      { event: "setCustomerId", id: custId},
      { event: "setSiteType", type: siteType},
      { event: "viewItem", product: prodIdList}
      );
    }   
  }
  
  if(s_darty.events){
    if (s_darty.events.indexOf('event3',0)>-1){
      //--Product List
      var cookieContenu=decodeURIComponent(_satellite.readCookie("DARTY_BASKET_CONTENT"));
      var cookiePanier= JSON.parse(cookieContenu);
      for (var i = 0; i < cookiePanier.items.length; i++) {
          prodProduct.push({ id: cookiePanier.items[i].codic, price: 1, quantity: cookiePanier.items[i].qty });
      
      }     
      
      window.criteo_q.push (
      { event: "setAccount", account : 1332},
      { event: "setCustomerId", id: custId},
      { event: "setSiteType", type: siteType},
      { event: "viewBasket", product: prodProduct}
      );
    }   
  }
  
  if(s_darty.events){
    if(s_darty.events.indexOf('purchase',0)>-1){    
      //--Product List
      prodParam=s_darty.products.split(',');
        for (var i = 0; i < prodParam.length; i++) {
          prodParam[i]=prodParam[i].split(';');
          prodIdList.push(prodParam[i][1]);
          prodPrix.push(prodParam[i][3]);
          prodQuant.push(prodParam[i][2]);
        }
      var fromCriteo=dedupcan('criteo')    
      
      
      for (var i = 0; i < prodParam.length; i++) {
        if (prodIdList[i].indexOf("frais_",0)==-1){
          prodProduct.push({ id: prodIdList[i], price: prodPrix[i], quantity: prodQuant[i] });      
        }
      }     
      
      window.criteo_q.push (
        { event: "setAccount", account : 1332},
        { event: "setCustomerId", id: custId},
        { event: "setSiteType", type: siteType},
        { event: "trackTransaction" , id: s_darty.purchaseID, new_customer: '', deduplication: fromCriteo, product: prodProduct}
        );
    }   
  }
}
});
