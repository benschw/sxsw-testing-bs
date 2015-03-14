/**********************************
 * Magic School Bus reminder 
 * Classifications:
 *  scalene: all three sides are different  
 *  isosceles: two of its sides are equal
 *  equilateral:  all three sides are equal
 * 
 * A Valid Triangle exists when:
 *  a + b > c
 *  a + c > b
 *  b + c > a 
 **********************************/


describe('TriangleClassifier', function() {
  it('exists', function() {
    expect(TriangleClassifier).toBeDefined();
  });

  it('classifies as scalene 4,3,2', function() {
    var result = new TriangleClassifier().classify(4,3,2);
    expect(result).toEqual('scalene');
  });
  it('classifies as equilateral 5,5,5', function() {
    var result = new TriangleClassifier().classify(5,5,5);
    expect(result).toEqual('equilateral');
  });
  it('classifies as equilateral 5,6,5', function() {
    var result = new TriangleClassifier().classify(5,6,5);
    expect(result).toEqual('isosceles');
  });

  it('throws an ArgumentError when invalid 1,2,5', function() {
	expect(function() {
	  var result = new TriangleClassifier().classify(1,2,5);
	}).toThrow();

  });
});

