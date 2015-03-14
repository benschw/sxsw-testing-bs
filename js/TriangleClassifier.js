var TriangleClassifier = function() {

  this.classify = function(x, y, z) {
  	if (x != y && y != z && z != x) {
	    return "scalene";
  	}
  	if (x == y && y == z) {
  		return "equilateral";
  	}
  };
};
