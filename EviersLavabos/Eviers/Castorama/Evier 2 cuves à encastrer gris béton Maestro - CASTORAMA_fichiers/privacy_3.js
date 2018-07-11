/*										
 * tagContainer Privacy v1						
 * Copyright Tag Commander						
 * http://www.tagcommander.com/					
 * Generated: 16/09/2014 17:55:57             
 * ---                                         	
 * Version   : 006                   	
 * IDP       : 3                   	
 * IDS       : 39              	
 */

tC.privacyVersion='006';

(function(document,tC){var cookie=tC.getCookie(tC.privacy.getCN()),datas_cookie=cookie.split('@@@'),version_reactivate='006',privacy_id='3',privacy_version='006',element_preview=document.getElementById('tc_div_preview'),element_container=element_preview?element_preview:document.body;if(datas_cookie.length<=2||(version_reactivate!=""&&datas_cookie[1]!=version_reactivate)){}else{return;}
var text='<h3 style=\"background : url( http://cdn.tagcommander.com/39/privacy/cookiesBannerH3Icon.gif) no-repeat; padding : 2px 0 4px 30px; margin: 8px 0 8px 20px;\"><font face=\"Century Gothic\" color=\"#0078d7\">Utilisation des Cookies</font></h3><p style=\"margin-left : 49px; margin-bottom : 10px\"> Castorama utilise des cookies pour optimiser votre expérience de navigation sur notre site et pour vous proposer des offres personnalisées en fonction de vos intérêts. En continuant votre visite sur notre site, vous consentez à l’utilisation de ces cookies.<a href=\"/store/pages/cookies.html\" title=\"En savoir plus sur la gestion des cookies sur Castorama.fr\"> <font  color=\"#0078d7\"> En savoir plus </font></a></p>',text_color='#58585a',background_color='#f2f2f2',button_label='OK',button_background_color='#0078d7',button_text_color='#ffffff',button_type='optin',dom_container=document.createElement('div'),dom_text=document.createElement('div'),dom_button=document.createElement('button');dom_container_button=document.createElement('div');dom_container_text=document.createElement('div');dom_style=document.createElement('style');dom_container.id='tc_privacy';dom_container_button.id='tc_privacy_container_button';dom_container_text.id='tc_privacy_container_text';dom_button.id='tc_privacy_button';dom_text.id='tc_privacy_text';function remove_privacy(){var tc_privacy=document.getElementById('tc_privacy');element_container.removeChild(tc_privacy);}
function clickButton(){if(button_type=='optout'){tC.privacy.Out(privacy_id,privacy_version,'ALL');}else{tC.privacy.In(privacy_id,privacy_version,'ALL');}
remove_privacy();}
tC(dom_container).resetCss().css({'width':'100%','background':background_color,'position':element_preview?'absolute':'fixed','zIndex':element_preview?'1':'999999','bottom':'0','left':'0','textAlign':'left','opacity':0.9});tC(dom_container_button).resetCss().css({'right':'10px','display':'inline-block'});tC(dom_button).resetCss().css({'color':button_text_color,'background':button_background_color,'display':'block','cursor':'pointer','fontSize':'12px','padding':'5px 10px','margin':'10px 0'});tC(dom_container_text).resetCss().css({'display':'inline-block'});tC(dom_text).resetCss().css({'color':text_color,'padding':'10px 10px 10px 10px','fontSize':'12px','textAlign':'left'});dom_text.innerHTML=text;dom_button.innerHTML=button_label;if(dom_button.addEventListener){dom_button.addEventListener("click",function(event){clickButton();},true);}else if(dom_button.attachEvent){dom_button.attachEvent("onclick",function(event){clickButton();});}
dom_container_button.appendChild(dom_button);dom_container_text.appendChild(dom_text);dom_container.appendChild(dom_container_text);dom_container.appendChild(dom_container_button);element_container.appendChild(dom_container);dom_style.type='text/css';var css='#tc_privacy_container_text{'
+'width:79%;'
+'display:inline-block;'
+'}'
+'#tc_privacy_container_button,#tc_privacy_container_text{'
+'vertical-align:middle;'
+'}'
+'#tc_privacy_container_button{'
+'width:19%;'
+'display:inline-block;'
+'}'
+'#tc_privacy_button{'
+'float: right;'
+'}'
+'@media(min-width: 768px) and (max-width: 979px){'
+'#tc_privacy_container_text{'
+'width:69%;'
+'}'
+'#tc_privacy_container_button{'
+'width:29%;'
+'}'
+'}'
+'@media(max-width: 767px)   {'
+'#tc_privacy_container_text{'
+'width:100%;'
+'}'
+'#tc_privacy_container_button{'
+'width:100%;'
+'}'
+'#tc_privacy_button{'
+'margin:0 0 0 0;'
+'float: none;'
+'width:100%;'
+'}'
+'}';if(dom_style.styleSheet){dom_style.styleSheet.cssText=css;}else{dom_style.appendChild(document.createTextNode(css));}
var head=document.getElementsByTagName('head')[0];head.appendChild(dom_style);tC.privacy_id_container=typeof tC.id_container!="undefined"?tC.id_container:1;tC.privacy_imageEltCounter=document.createElement("img");tC.privacy_imageEltCounter.src="//manager.tagcommander.com/utils/privacyHit.php?id_tc="+tC.privacy_id_container+"&site=39&version="+tC.privacyVersion+"&id_privacy=3&privacy_action=V&rand="+Math.random();tC.privacy_imageEltCounter.width=1;tC.privacy_imageEltCounter.height=1;document.body.appendChild(tC.privacy_imageEltCounter);})((top.document||document),tC);tc_privacy_used=1;