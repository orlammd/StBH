!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','//connect.facebook.net/en_US/fbevents.js');

fbq('init', '1605296009743063');
fbq('init', '2143920249166907');
fbq('track', "PageView");


var prodIdList=[];
var prodProduct=[];

if(typeof s_darty!="undefined"){
	// Pour une page Produit
	if(s_darty.events){
		if(s_darty.events.indexOf("event12",0)>-1){
			if (s_darty.products){
				prodParam=s_darty.products.split(',');
				for (var i = 0; i < prodParam.length; i++) {
					prodParam[i]=prodParam[i].split(';');
					prodIdList.push(prodParam[i][1]);
				}
			}
			fbq('track', 'ViewContent',{content_ids:prodIdList,content_type:'product'});
		}
		// Pour une recherche
	else if(s_darty.prop6){
			if(s_darty.prop7!="undefined"){
				prodParam=s_darty.products.split(',');
				for (var i = 0; i < prodParam.length; i++) {
					prodParam[i]=prodParam[i].split(';');
					prodIdList.push(prodParam[i][1]);
				}
				var fbsearchvar=s_darty.prop7;
				fbq('track', 'Search',{
					search_string: fbsearchvar,
					content_ids: prodIdList,
					content_type : 'product'
				}
				);
			}
			else{
				fbq('track', 'Search');
			}
		}
		// Pour un panier
		else if(s_darty.events.indexOf("event3",0)>-1){
			var cookieContenu=decodeURIComponent(_satellite.readCookie("DARTY_BASKET_CONTENT"));
			var cookiePanier= JSON.parse(cookieContenu);
			for (var i = 0; i < cookiePanier.items.length; i++) {
				prodProduct.push(cookiePanier.items[i].codic);
      
			}
			fbq('track', 'AddToCart',{content_ids:prodProduct,content_type:'product'});
		}
		else if(s_darty.events.indexOf("event6",0)>-1){fbq('track', 'InitiateCheckout');}
		else if(s_darty.events.indexOf("event7",0)>-1){fbq('track', 'AddPaymentInfo');}
		else if(s_darty.events.indexOf("purchase",0)>-1){
			if(s_darty.products){
				montCmd=_satellite.getVar('totalProducts');
				prodParam=s_darty.products.split(',');
				for (var i = 0; i < prodParam.length; i++) {
				  prodParam[i]=prodParam[i].split(';');
				  prodIdList.push(prodParam[i][1]);
				}
				fbq('track', 'Purchase', {content_ids:prodIdList,content_type:'product',value: montCmd, currency: 'EUR'});
			}
		}
	}
	if(s_darty.prop42){
		if(s_darty.prop42=="Inscription"){fbq('track', 'Lead');}
		else if(s_darty.prop42=="Inscription reussie"){fbq('track', 'CompleteRegistration');}
	}
}
