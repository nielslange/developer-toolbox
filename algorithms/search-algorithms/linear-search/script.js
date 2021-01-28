/**
 * Linear search
 *
 * @param {Array} haystack The array with values.
 * @param {string} key The wanted value.
 * @return {number?} The index of the wanted value or null on failure.
 */
function linearSearch( haystack, key ) {
	for ( let index = 0; index < haystack.length; index++ ) {
		if ( key === haystack[ index ] ) return index;
	}
	return null;
}

const data = [ 10, 20, 80, 30, 60, 50, 110, 100, 130, 170 ];

console.time( 'linearSearch' );
const result = linearSearch( data, 100 );
console.timeEnd( 'linearSearch' );

console.log( result );
