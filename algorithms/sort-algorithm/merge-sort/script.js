/**
 * Merge Sort
 *
 * @param {array} array The original array.
 * @return {array} The sorted array.
 */
function mergeSort( array ) {
	const half = array.length / 2;
	if ( array.length < 2 ) return array;
	const left = array.splice( 0, half );
	return merge( mergeSort( left ), mergeSort( array ) );
}

/**
 * Merge arrays
 *
 * @param {array} left The left array.
 * @param {array} right The right array.
 * @return {array}  The updated array.
 */
function merge( left, right ) {
	let array = [];
	while ( left.length && right.length ) {
		if ( left[ 0 ] < right[ 0 ] ) {
			array.push( left.shift() );
		} else {
			array.push( right.shift() );
		}
	}
	return [ ...array, ...left, ...right ];
}

const data = [ 10, 20, 80, 30, 60, 50, 110, 100, 130, 170 ];

console.time( 'mergeSort' );
const result = mergeSort( data );
console.timeEnd( 'mergeSort' );

console.log( result );
