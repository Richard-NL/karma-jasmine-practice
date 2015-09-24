describe("DomMapper function checks", function () {
	var domMapper = new DomMapper(new Viewport(1280, 640, 50), []);

	it("checks if the method name derived from the class attribute is correct", function () {
		expect(domMapper.getViewMethodNameByDomAltAttribute('top')).toEqual('getTopCoordinates');
	});
	
	it("checks if the method name derived from the class attribute with a minus char is correct", function () {
		expect(domMapper.getViewMethodNameByDomAltAttribute('top-left')).toEqual('getTopLeftCoordinates');
	});
});