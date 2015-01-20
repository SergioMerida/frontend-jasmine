describe("First jasmine project", function() {
  it("should say hello jasmine", function() {

    expect(helloWorld()).toBe("hello world");
  });
  it("It should write Jasmine", function() {
	
	expect(titles).toBe("Jasmine");
	expect(titles).not.toBe(" ");
  });
  it("It should include in the title Jasmine", function() {
	
	expect(titles).toMatch(/jasmine/i);
  });
  it("It should verify the sum of two numbers", function() {
	
	expect(sum(2 , 2)).toBe(4);
	expect(sum(3 , 6)).toBe(9);
	expect(sum(-50 , 1000)).toBe(950);
	expect(sum("50" , "400")).toBe(450);
	expect(sum("This is a string" , 50)).toBe(null);
	expect(sum(50 , 80)).toBeGreaterThan(100);
	expect(sum(50 , 100)).toBeLessThan(160);
  });
});


