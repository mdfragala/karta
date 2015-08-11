var Markers = function() {
   var Module = function() {};
   Module.collection = [];

   Module.prototype.__add__ = function($marker) {
      this.collection.push($marker);
   };
   Module.prototype.__delete__ = function($marker) {
      var index = this.collection.indexOf($marker);
      if (index !== -1) this.collection.splice(index, 1);
   };
   Module.prototype.__find__ = function($query, $callback) {
      var isMatch,
      matches = [],
      i = 0;

      for (i; i < this.collection.length; i++) {
         isMatch = $query(this.collection[i]);
         if (isMatch) {
            matches.push(this.collection[i]);
         }
      }

      if ($callback) {
         $callback.call(this, matches)
      }

      return matches;
   };

   return new Module();

};
