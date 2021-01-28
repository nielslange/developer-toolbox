/**
 * Bogo Sort
 *
 * @param {array} array The original array.
 * @return {array} The sorted array.
 */
function bogoSort( array ) {
	for ( let index = 0; index < array.length - 1; index++ ) {
		if ( array[ index ] > array[ index + 1 ] ) {
			return bogoSort( shuffle( array ) );
		}
	}
	return array;
}

/**
 * Durstenfeld shuffle
 *
 * @param {array} array The original array.
 * @return {array} The shuffeled array.
 * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 */
function shuffle( array ) {
	for ( let i = array.length - 1; i > 0; i-- ) {
		let j = Math.floor( Math.random() * ( i + 1 ) );
		[ array[ i ], array[ j ] ] = [ array[ j ], array[ i ] ];
	}

	return array;
}

const data = [ 2, 3, 6, 5, 4, 1 ];

console.time( 'bogoSort' );
const result = bogoSort( data );
console.timeEnd( 'bogoSort' );

console.log( result );
