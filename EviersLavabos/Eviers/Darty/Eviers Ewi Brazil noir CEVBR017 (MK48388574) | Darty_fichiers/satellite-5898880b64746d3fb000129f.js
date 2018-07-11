/* Tag DMP Fnac V 0.0

Tag DMP Fnac qui envoit une seule fois un hit si premiére connexion, puis un seul deuxième hit si identification
Espace Client ou tunnel. 
Nous allons utiliser créer 2 cookies de durée  0 ( connexion ) qui sauvegardent les infos
de la connexion. 
*/

if(typeof s_darty!="undefined"){
  if(_satellite.readCookie("firstEntry")==undefined){
		/*<![CDATA[*/
		/**
		* ------------------------------------------
		* Documentation : 
		 * ------------------------------------------
		* estvisiteurdarty : 
		 *                             desc : 
		 *                             type : boolean
		* ------------------------------------------
		*/

		var EDMP_data = ['eultech.fnac.com','fnac','darty',{
		"estvisiteurdarty" : "1"
		}];

		(function(){var td='//eultech.fnac.com',d=document,l=d.location,o,a,cn,cj='',cdh,cdr,acdr,i;if(!l.protocol.indexOf('http')){o=d.createElement('script');a=d.getElementsByTagName('script')[0];cn=parseInt((new Date()).getTime()/3600000);cdh=(l.host+td).replace(/[^a-z]/g,'');cdr=cdh+cdh.toUpperCase();acdr=cdr.split('');for(i=-1;i<cn%7;i++){cj+=acdr[(cn+i)%acdr.length];}o.type='text/javascript';o.async='async';o.defer='defer';o.src='//'+td+'/'+cj+(cn%8760)+'-'+(cn%10)+'.js';a.parentNode.insertBefore(o,a);}})();
		/*]]>*/
		_satellite.setCookie("firstEntry",1,0);
	}
  
  if((_satellite.readCookie("firstConnexion")==undefined && s_darty.prop1==1)||(_satellite.readCookie("firstConnexion")==undefined && _satellite.readCookie("PCKEMAIL")!=undefined)){
		/*<![CDATA[*/
		/**
		* ------------------------------------------
		* Documentation : 
		* ------------------------------------------
		* estclientdarty : 
		*                             desc : 
		*                             type : boolean
		* ------------------------------------------
		* estvisiteurdarty : 
		*                             desc : 
		*                             type : boolean
		* ------------------------------------------
		*/

		var EDMP_data = ['eultech.fnac.com','fnac','darty',{
		"estclientdarty" : "1"
		,"estvisiteurdarty" : "1"
		}];

		(function(){var td='//eultech.fnac.com',d=document,l=d.location,o,a,cn,cj='',cdh,cdr,acdr,i;if(!l.protocol.indexOf('http')){o=d.createElement('script');a=d.getElementsByTagName('script')[0];cn=parseInt((new Date()).getTime()/3600000);cdh=(l.host+td).replace(/[^a-z]/g,'');cdr=cdh+cdh.toUpperCase();acdr=cdr.split('');for(i=-1;i<cn%7;i++){cj+=acdr[(cn+i)%acdr.length];}o.type='text/javascript';o.async='async';o.defer='defer';o.src='//'+td+'/'+cj+(cn%8760)+'-'+(cn%10)+'.js';a.parentNode.insertBefore(o,a);}})();
		/*]]>*/
		
		_satellite.setCookie("firstConnexion",1,0);
	}
}

