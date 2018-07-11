/*---------------dedup des leviers--------------*/
function dedupcan(levier){
  if (typeof _satellite.readCookie("dartLev")!="undefined"){
    var deduplev=0;
    var listCod = _satellite.readCookie("dartLev");
    listCod=listCod.split("%3E");
    for(i=0;i<listCod.length;i++){
      listCod[i]=listCod[i].split("%7C");
    }
    var datelim= new Date;
    datelim=datelim.setDate(datelim.getDate()- 30);
    dernlev=listCod.length-1
    if((listCod[dernlev][0].indexOf(levier,0)>-1)&&(datelim<(parseInt(listCod[dernlev][1])*1000))){
      deduplev=1;
    }
    return deduplev;
  } 
}
