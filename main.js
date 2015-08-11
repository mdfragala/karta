;(function(global document, factory, undefined){
   if (typeof define === 'function' && define.amd) {
      global.Karta = factory(window, document);
      return global.Karta;
   } else if (typeof exports === 'object') {
      module.exports = factory(window, document);
   } else {
      global.Karta = factory(window, document);
   }
})(this, window, document, function(window, document){



   return Karta;

});
