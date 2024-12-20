//~~tv:3108.20140925
//~~tc:Adding support for email and login values

var criteo_q = criteo_q || [];

//tealium universal tag - utag.sender.3108 ut4.0.201610170646, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;
    // Start Tealium loader
    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { b.hFlag = 0; b.onreadystatechange = function () { if ((this.readyState === 'complete' || this.readyState === 'loaded') && !b.hFlag) { b.hFlag = 1; o.cb(); } }; b.onload = function () { if (!b.hFlag) { b.hFlag = 1; o.cb(); } }; } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    u.ev = {'view' : 1};
    u.initialized = false;
    // setData called for customer_id, site_type, user_segment
    u.known_params = {"product":1,"product.id":1,"product.price":1,"product.quantity":1,"event":1,"requiresDOM":1,"account":1,"keywords":1,"checkin_date":1,"checkout_date":1,"new_customer":1,"deduplication":1,"email":1, "login":1, "hashed_email":1, "hashed_login":1};
      u.map={"product_ids":"product.id"};
  u.extend=[];

    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f;

        u.data = {
          "base_url" : "//static.criteo.net/js/ld/ld.js" || "//static.criteo.net/js/ld/ld.js",
          "account" : "16273",
          "event" : "viewItem",
          "deduplication" : 1,
          "new_customer" : "",
          "keywords" : "",
          "setData" : {"site_type" : "d"},
          "email" : "",
          "login" : "",
          "hashed_email" : "",
          "hashed_login" : "",
          // E-Commerce Vars
          "order_id" : "",
          "product_id" : [],
          "product_quantity" : [],
          "product_unit_price" : []
        };
        
        var t_criteo_q = [];

        

        c = [];

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              if (!u.known_params[e[f]]) {
                u.data.setData[e[f]] = b[d];
              } else {
                u.data[e[f]] = b[d];
              }
            }
          }
        }
        // End Mapping

        u.data.order_id = u.data.order_id || b._corder;
        if (u.data.product_id.length === 0 && b._cprod !== undefined) { u.data.product_id = b._cprod.slice(0); }
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }
        if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) { u.data.product_unit_price = b._cprice.slice(0); }

        t_criteo_q.push( { event: "setAccount", account: parseInt(u.data.account) } );

        if (u.data.email) { t_criteo_q.push( { event: "setEmail", email: u.data.email } ); }
        if (u.data.login) { t_criteo_q.push( { event: "setLogin", login: u.data.login } ); }
        if (u.data.hashed_email) { t_criteo_q.push( { event: "setHashedEmail", email: u.data.hashed_email } ); }
        if (u.data.hashed_login) { t_criteo_q.push( { event: "setHashedLogin", email: u.data.hashed_login } ); }
  
        for (d in u.data.setData) {
          c = { event: "setData" };
          c[d] = u.data.setData[d];
          t_criteo_q.push( c );
        }

        u.data.transaction_id = u.data.transaction_id || u.data.order_id;
        u.data.product_id = u.data["product.id"] || u.data.product_id;
        u.data.product_unit_price = u.data["product.price"] || u.data.product_unit_price;
        u.data.product_quantity = u.data["product.quantity"] || u.data.product_quantity;

        if (u.data.transaction_id) {
          /* Stop default event */
          u.data.event="";
          f = { event: "trackTransaction", id: u.data.transaction_id, new_customer: u.data.new_customer, deduplication: u.data.deduplication, product:[] };
          for (d = 0; d < u.data.product_id.length; d++) {
            f.product.push( { id: u.data.product_id[d], price: u.data.product_unit_price[d], quantity: u.data.product_quantity[d] } );
          }
          t_criteo_q.push( f )
        }

        if (u.data.event) {

          if (u.data.event.indexOf("viewHome") > -1) {            
            t_criteo_q.push( { event: "viewHome" } );
          }

          else if (u.data.event.indexOf("viewItem") > -1) {
            u.data.product_id = u.data["product.id"] || u.data.product_id[0];
            t_criteo_q.push( { event: "viewItem", product: u.data.product_id } );
          }

          else if (u.data.event.indexOf("viewList") > -1) {
            f = { event: "viewList" };
            if(u.data.product_id) { f.product = u.data.product_id; }
            if (u.data.keywords) { f.keywords = u.data.keywords; }
            t_criteo_q.push(f);
          }

          else if (u.data.event.indexOf("viewBasket") > -1) {
            f = { event: "viewBasket", product:[] };
            for(d = 0; d < u.data.product_id.length; d++) {
              f.product.push( { id: u.data.product_id[d], price: u.data.product_unit_price[d], quantity: u.data.product_quantity[d] } );
            }
            t_criteo_q.push(f);
          }
          
          else if (u.data.event.indexOf("viewSearch") > -1) {
            f = { event: "viewSearch" };
            if (u.data.checkin_date) { f.checkin_date = u.data.checkin_date; }
            if (u.data.checkout_date) { f.checkout_date = u.data.checkout_date; }
            t_criteo_q.push(f);
          }

          else {
            f = { event: u.data.event, product:[] };
            for(d = 0; d < u.data.product_id.length; d++) {
              f.product.push( { id: u.data.product_id[d], price: u.data.product_unit_price[d], quantity: u.data.product_quantity[d] } );
            }
            t_criteo_q.push(f);
          }
        }
        
        criteo_q.push( t_criteo_q );

        // Start Loader Callback
        u.loader_cb = function () {
          u.initialized = true;
        };
        // End Loader Callback

        if (!u.initialized) {
          u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_25' });
        }

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }('25', 'ikea.fr-main'));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag