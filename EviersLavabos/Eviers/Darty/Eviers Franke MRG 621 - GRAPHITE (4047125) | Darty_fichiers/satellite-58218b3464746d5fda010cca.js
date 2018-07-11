_satellite.pushAsyncScript(function(event, target, $variables){
  (function (w) {
  w._ebq = w._ebq || [];
  w._ebq.push(['init', '581322bae80da2d93432ce27']);
  var profile = { info: {} };

  if (typeof _satellite.getVar('emailId') != undefined && _satellite.getVar('emailId') && _satellite.getVar('emailId') !== 'None')
    profile.datasources = [{
      id: '581322bae80da2d93432ce2c',
      original_id: _satellite.getVar('emailId')
    }];

  w._ebq.push(['identify', profile]);
  
  var elt = document.createElement('script'); 
  elt.type = 'text/javascript'; 
  elt.async = true;
  elt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.early-birds.fr/earlybirds-full.min.js';
  var s = document.getElementsByTagName('script')[0]; 
  s.parentNode.insertBefore(elt, s);
})(window);
});
