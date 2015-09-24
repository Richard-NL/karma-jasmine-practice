String.prototype.format = function() {
	var args = arguments;
	return this.replace(/{(\d+)}/g, function( match, number ) {
		return typeof args[number] != 'undefined' ? args[number] : match;
	});
};
(function ( $$ ) {
	function createCoordsAttributeValue ( x1, y1, x2, y2 ) {
		return "{0},{1},{2},{3}".format( x1, y1, x2, y2 );
	}

	function createPlaceholdUrl ( width, height ) {
		return 'http://placehold.it/{0}x{1}'.format( width, height );
	}
	var offsetSize = 50,
		viewPortWidth = 1280,
		viewPortHeight = 640,

		placeHolderImageElement = $$('img.mapper').pick(),

		topLeftElement = $$('[alt="top-left"]').pick(),
		topElement = $$('[alt="top"]').pick(),
		topRightElement = $$('[alt="top-right"]').pick(),

		leftElement = $$('[alt="left"]').pick(),
		rightElement = $$('[alt="right"]').pick(),

		bottomLeftElement = $$('[alt="bottom-left"]').pick(),
		bottomElement = $$('[alt="bottom"]').pick(),
		bottomRightElement = $$('[alt="bottom-right"]').pick();

	placeHolderImageElement.setProperty( 'src', createPlaceholdUrl( viewPortWidth, viewPortHeight ) );
	placeHolderImageElement.removeProperty( 'style' );

	topLeftElement.setProperty('coords', createCoordsAttributeValue(0, 0, offsetSize, offsetSize));
	topElement.setProperty('coords', createCoordsAttributeValue(offsetSize, 0, viewPortWidth - offsetSize, offsetSize));
	topRightElement.setProperty('coords', createCoordsAttributeValue(viewPortWidth - offsetSize, 0, viewPortWidth, offsetSize));

	leftElement.setProperty('coords', createCoordsAttributeValue(0, offsetSize, offsetSize, viewPortHeight - offsetSize));
	rightElement.setProperty(
		'coords',
		createCoordsAttributeValue(
			viewPortWidth - offsetSize,
			offsetSize,
			viewPortWidth,
			viewPortHeight - offsetSize
		)
	);

	bottomLeftElement.setProperty('coords', createCoordsAttributeValue(0, viewPortHeight - offsetSize, offsetSize, viewPortHeight));
	bottomElement.setProperty(
		'coords',
		createCoordsAttributeValue(
			offsetSize,
			viewPortHeight - offsetSize,
			viewPortWidth - offsetSize,
			viewPortHeight
		)
	);
	bottomRightElement.setProperty(
		'coords',
		createCoordsAttributeValue(
			viewPortWidth - offsetSize,
			viewPortHeight - offsetSize,
			viewPortWidth,
			viewPortHeight
		)
	);
})( $$ );