//~~tv:13032.20141006
//~~tc: Added mapping support for TKV2

//tealium universal tag - utag.sender.13032 ut4.0.201610170646, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{
(function(id,loader,u){
  try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
  u.ev={'view':1};
  u.qsp_delim="&";
  u.kvp_delim="=";
  u.ActivityID="570047";
  u.tag_type="conversion";
  u.Quantity="";
  u.ProductID="";
  u.base_url="//bs.serving-sys.com/BurstingPipe/ActivityServer.bs?";
  u.map={"cp.utag_main_ses_id":"Session"};
  u.extend=[];

  u.send=function(a,b,c,d,e,f){
    if(u.ev[a]||typeof u.ev.all!='undefined'){
      
      c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!='undefined'&&b[d]!=''){e=u.map[d].split(',');for(f=0;f<e.length;f++){
        u[e[f]]=b[d];
      }}}

      u.rnd=parseInt(Math.random()*1000000);

      if(u.tag_type=="retargeting"){
        if(u.TVAL){
          c.push("CN=DT");
          c.push("TID="+u.TID);
          c.push("TVAL="+u.TVAL)
        }else{
          c.push("CN=TT");
          c.push("TID="+u.TID);
          u.AdvertiserID = u.AdvertiserID || u.ActivityID;
          c.push("AdvertiserID="+u.AdvertiserID);
          if(u.TKV1){c.push("TKV1="+u.TKV1)};
          if (u.TKV2) { c.push("TKV2=" + u.TKV2); }
        }
        c.push("rnd="+u.rnd);
        u.head=document.getElementsByTagName("head")[0];u.scr=document.createElement("script");u.scr.type="text/javascript";u.scr.src=u.base_url+c.join(u.qsp_delim);u.head.appendChild(u.scr);
        //c.push("ns=1");
        //u.img=new Image();u.img.src=u.base_url+c.join(u.qsp_delim);
      }else{
        c.push("cn=as");
        c.push("ActivityID="+u.ActivityID);
        c.push("ifrm=1");
        c.push("rnd="+u.rnd);
        if(u.Session){c.push("Session="+u.Session)};

        u.OrderID=u.OrderID || b._corder;
        if(u.OrderID){
          if(u.Quantity=="" && typeof b._cquan!="undefined" ){
            u.Quantity=0;
            for(f=0;f<b._cquan.length;f++){
              u.Quantity+=parseInt(b._cquan[f]);
            }
          }
          if(u.ProductID=="" && typeof b._cprod!="undefined"){
            u.ProductID=b._cprod[0];
          }
          u.Value=u.Value || b._csubtotal;
          c.push("Value="+u.Value);
          c.push("OrderID="+u.OrderID);
          c.push("ProductID="+u.ProductID);
          c.push("ProductInfo="+u.ProductInfo);
          c.push("Quantity="+u.Quantity);
        }

        d=document.createElement("iframe");d.setAttribute('id','32');d.setAttribute('height','1');d.setAttribute('width','1');d.setAttribute('style','display:none');d.setAttribute('src',u.base_url+c.join(u.qsp_delim));document.body.appendChild(d);
      }
     
    }
  }
  try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
})('32','ikea.fr-main');
}catch(e){}
//end tealium universal tag

