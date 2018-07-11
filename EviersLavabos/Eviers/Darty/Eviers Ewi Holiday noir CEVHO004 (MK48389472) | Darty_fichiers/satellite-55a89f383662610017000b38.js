/*---------------------Commerce----------------------*/
/*Mutualisation du montant*/
if(typeof s_darty!="undefined"){
if ((typeof s_darty.products!="undefined")&&(typeof s_darty.events!="undefined")){
	if(s_darty.events.indexOf("purchase",0)>-1){
		var dartProdPriList=[];
		var dartProdQuaList=[];
		var dartAmount_cmd=0;
		var dartQuant_cmd=0;
		var dartProdIds=s_darty.products.split(',');
		for (var i = 0; i < dartProdIds.length; i++) {
			dartProdIds[i]=dartProdIds[i].split(';');
			dartProdPriList.push(parseFloat(dartProdIds[i][3]));
			dartProdQuaList.push(parseFloat(dartProdIds[i][2]));
		}
		if (dartProdPriList.length >0){
			for (var i = 0; i < dartProdIds.length; i++){
				dartAmount_cmd=dartAmount_cmd+dartProdPriList[i]*dartProdQuaList[i];
			}
		}
	}
}
}

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
/*---------------------End Of Commerce----------------------*/
