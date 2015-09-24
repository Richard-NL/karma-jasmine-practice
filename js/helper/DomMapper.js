var DomMapper = new Class({
	viewport: {},
	initialize: function ( viewport,  areaElements ) {
		this.viewport = viewport;
		
		areaElements.each( function ( areaElement ) {
			areaElement.set(
				'coords',
				this.getCoordinatesValue( areaElement.get('alt'))
			);
		}, this);
	},
	
	getCoordinatesValue: function ( altAttributeValue ) {
		var methodName = this.getViewMethodNameByDomAltAttribute ( altAttributeValue),
			coordinate = this.viewport[methodName]();

		return coordinate;
	},
	
	getViewMethodNameByDomAltAttribute: function ( altAttributeValue ) {
		var methodNameSegments = altAttributeValue.split('-');
		
		if ( methodNameSegments.length === 1 ) {
			return 'get{0}Coordinates'.format( methodNameSegments[0].ucFirst() );
		}
		
		if ( methodNameSegments.length === 2 ) {
			return 'get{0}{1}Coordinates'.format(
				methodNameSegments[0].ucFirst(),
				methodNameSegments[1].ucFirst()
			);
		}
		throw 'invalid class name';
	}
});