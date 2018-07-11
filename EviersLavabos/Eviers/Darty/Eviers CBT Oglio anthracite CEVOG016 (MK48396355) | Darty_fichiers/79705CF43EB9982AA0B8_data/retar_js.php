function gladd() {
			if (document.getElementsByTagName){
				var h = document.getElementsByTagName('body')[0];
				if (!h){
					h = document.createElement('body');
					document.documentElement.appendChild(h);
				}
			}
			if (document.createElement) {
				var img_digi = document.createElement('img');
				if (img_digi) {
					img_digi.setAttribute('src', 'https://gladdiator.digigladd.com/ab?r=10739&type=PRODUIT');
					img_digi.style.border = 0+'px';
					img_digi.setAttribute('width','1');
					img_digi.setAttribute('height','1');
				}
			}
		}
		gladd();//RETAR