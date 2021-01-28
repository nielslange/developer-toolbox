<?php
/**
 * Merge Sort
 *
 * @param {array} array The original array.
 * @return {array} The sorted array.
 */
function mergeSort( $array ) {
	$half = count( $array ) / 2;
	if ( count( $array ) < 2 ) return $array;
	$left = array_splice( $array, 0, $half );
	return merge( mergeSort( $left ), mergeSort( $array ) );
}

/**
 * Merge arrays
 *
 * @param {array} left The left array.
 * @param {array} right The right array.
 * @return {array}  The updated array.
 */
function merge( $left, $right ) {
	$array = [];
	while ( count( $left ) && count( $right ) ) {
		if ( $left[ 0 ] < $right[ 0 ] ) {
			array_push( $array, array_shift( $left ) );
		} else {
			array_push( $array, array_shift( $right ) );
		}
	}
	return array_merge( $array, $left, $right );
}

$data = [ 10, 20, 80, 30, 60, 50, 110, 100, 130, 170 ];

$start  = microtime( true ); 
$result = mergeSort( $data );
printf( 'Total execution time in seconds: %s', microtime( true ) - $start );

print( '<pre>' );
print_r( $result );
print( '</pre>' );
