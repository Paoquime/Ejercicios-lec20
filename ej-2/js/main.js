var feature = 'callbacks'; 
(function () {     
	if ( typeof feature === 'undefined' ){         
		var feature = 'closures';         
		console.log('JS coders love its ' + feature );     
	} else {         
	    console.log('JS developers love its ' + feature );     
	} 
})();