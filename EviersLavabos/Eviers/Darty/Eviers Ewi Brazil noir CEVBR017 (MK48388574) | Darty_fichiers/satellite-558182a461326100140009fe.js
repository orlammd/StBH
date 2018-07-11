/*Script*/
if (typeof s_darty.purchaseID == "undefined"){
  tradScri=document.createElement("script");
  tradScri.setAttribute('type','text/javascript');
  extra_info = {'order_id':'','value':''};
  tradScri.setAttribute('src','//cdn.tradelab.fr/tag/1b1024266d.js');
  document.body.appendChild(tradScri);
}

if (typeof s_darty.purchaseID != "undefined"){
  tradeDedup=dedupcan('tradelab');
  
  var tradePriList=[];
  var tradeQuaList=[];
  tradeAmount_cmd=0;
  if (typeof s_darty.products != "undefined"){
    var tradeIds=s_darty.products.split(',');
    for (var i = 0; i < tradeIds.length; i++) {
      tradeIds[i]=tradeIds[i].split(';');
      tradePriList.push(parseFloat(tradeIds[i][3]));
      tradeQuaList.push(parseFloat(tradeIds[i][2]));
    }
    if (tradePriList.length >0){
      for (var i = 0; i < tradeIds.length; i++){
        tradeAmount_cmd=tradeAmount_cmd+tradePriList[i]*tradeQuaList[i];
      }
    }
  }
  
  tradeAmount=Math.floor(tradeAmount_cmd);
  extra_info = {'order_id':s_darty.purchaseID,'value':tradeAmount};
  
  if (tradeDedup==1){
    tradScriOdedup=document.createElement("script");
    tradScriOdedup.setAttribute('type','text/javascript');
    tradScriOdedup.setAttribute('src','//cdn.tradelab.fr/conv/541088.js');
    document.body.appendChild(tradScriOdedup);
  }
  
  tradScriO=document.createElement("script");
  tradScriO.setAttribute('type','text/javascript');
  tradScriO.setAttribute('src','//cdn.tradelab.fr/conv/541087.js');
  document.body.appendChild(tradScriO);
  
}
