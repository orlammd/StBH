function getQParam(para,exUrl){
	decoup=exUrl.split("?");
	if(typeof decoup[1]!="undefined"){
		decoup=decoup[1].split("&");
		for(i=0;i<decoup.length;i++){
			if(decoup[i].indexOf(para,0)>-1){
				paraV=decoup[i].split("=");
				return paraV[1];
			}
		}
	}
}
