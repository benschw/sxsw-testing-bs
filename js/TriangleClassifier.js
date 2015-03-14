var TriangleClassifier = function() {

  this.classify = function(x, y, z) {
  	if (x != y && y != z && z != x) {
	    return "scalene";
  	}
  	if (x == y && y == z) {
  		return "equilateral";
  	}
  	if ((x == y && x != z) || (x == z && x != y)) {
  		return "isosceles"
  	}
  };
};
