describe("Viewport method checks", function () {
	var viewport = new Viewport(1280, 640, 50);
	
	it("gets the top left coordinates as string", function () {
		expect(viewport.getTopLeftCoordinates()).toEqual("0,0,50,50");
	});
	
	it("gets the top coordinates as string", function () {
		expect(viewport.getTopCoordinates()).toEqual("50,0,1230,50");
	});
	
	it("gets the top right coordinates as string", function () {
		expect(viewport.getTopRightCoordinates()).toEqual("1230,0,1280,50");
	});
	
	it("gets the left coordinates as string", function () {
		expect(viewport.getLeftCoordinates()).toEqual("0,50,50,590");
	});
	
	it("gets the right coordinates as string", function () {
		expect(viewport.getRightCoordinates()).toEqual("1230,50,1280,590");
	});

	it("gets the bottom left coordinates as string", function () {
		expect(viewport.getBottomLeftCoordinates()).toEqual("0,590,50,640");
	});

	it("gets the bottom coordinates as string", function () {
		expect(viewport.getBottomCoordinates()).toEqual("50,590,1230,640");
	});
	
	it("gets the bottom right coordinates as string", function () {
		expect(viewport.getBottomRightCoordinates()).toEqual("1230,590,1280,640");
	});
	
	it("gets the viewportUrl", function () {
		expect(viewport.getPlaceholderUrl()).toEqual("http://placehold.it/1280x640");
	});
});