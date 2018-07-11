_satellite.pushAsyncScript(function(event, target, $variables){
  (function (w) {
  w._ebq = w._ebq || [];
  var codic = _satellite.getVar('produitCodic');
  w._ebq.push(['trackActivity', {
    original_id: codic,
    verb: 'view'
  }]);
  
  jQuery('.darty_product_pic_more_pics > li').on('click',function(){
    w._ebq.push(['trackActivity', {
      original_id: codic,
      verb: 'change-thumbnail'
    }]);
  });
  
  jQuery('a.darty_buttons_comparator_on').on('click',function(){
    w._ebq.push(['trackActivity', {
      original_id: codic,
      verb: 'compare'
    }]);
  });
  
  jQuery('button[data-wishlist-add]').on('click',function(){
    w._ebq.push(['trackActivity', {
      original_id: codic,
      verb: 'add-to-wishlist'
    }]);
  });
  
  jQuery('#product_navigation > ul > li').on('click',function(){
    w._ebq.push(['trackActivity', {
      original_id: codic,
      verb: 'click-on-tab'
    }]);
  });
  
  jQuery('.wibilong-btn').on('click',function(){
    w._ebq.push(['trackActivity', {
      original_id: codic,
      verb: 'click-on-wibilong'
    }]);
  });
  
})(window);
});
