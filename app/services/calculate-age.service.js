demo.service('calculateWeightService', [function(){

	/* calcilate height from weight */
	this.calculateWeight = function(height) {
		if(height != null)
			return parseInt(height) * 12;
		return null;

	}

}])