var Viewport = new Class({
	width: 0,
	height: 0,
	offsetSize: 0, 
	
	initialize: function ( width, height, offsetSize ) {
		this.width = width;
		this.height = height;
		this.offsetSize = offsetSize;
	},
	
	getTopLeftCoordinates: function () {
		return this.createCoordinates(0, 0, this.offsetSize, this.offsetSize);
	},
	
	getTopCoordinates: function () {
		return this.createCoordinates(this.offsetSize, 0, this.width - this.offsetSize, this.offsetSize);
	},
	
	getTopRightCoordinates: function () {
		return this.createCoordinates(this.width - this.offsetSize, 0, this.width, this.offsetSize);
	},

	getLeftCoordinates: function () {
		return this.createCoordinates(0, this.offsetSize, this.offsetSize, this.height - this.offsetSize);
	},
	
	getRightCoordinates: function () {
		return this.createCoordinates(
			this.width - this.offsetSize,
			this.offsetSize,
			this.width,
			this.height - this.offsetSize
		);
	},
	
	getBottomLeftCoordinates: function () {
		return this.createCoordinates(0, this.height - this.offsetSize, this.offsetSize, this.height);
	},
	
	getBottomCoordinates: function () {
		return this.createCoordinates(
			this.offsetSize,
			this.height - this.offsetSize,
			this.width - this.offsetSize,
			this.height
		);
	},
	
	getBottomRightCoordinates: function () {
		return this.createCoordinates(
			this.width - this.offsetSize,
			this.height - this.offsetSize,
			this.width,
			this.height
		);
	},

	createCoordinates: function ( x1, y1, x2, y2 ) {
		return "{0},{1},{2},{3}".format( x1, y1, x2, y2 );
	},
	getPlaceholderUrl: function () {
		return "http://placehold.it/{0}x{1}".format(this.width, this.height);
	}
});