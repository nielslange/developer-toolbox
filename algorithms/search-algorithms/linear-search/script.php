<?php
/**
 * Linear search
 *
 * @param  mixed $haystack The array with values.
 * @param  mixed $key The wanted value.
 * @return int|null The index of the wanted value or null on failure.
 */
function linear_search( $haystack, $key ) {
	$count = count( $haystack );
	for ( $index = 0; $index < $count; $index++ ) {
		if ( $key === $haystack[ $index ] ) {
			return $index;
		}
	}
	return null;
}

$data = [ 10, 20, 80, 30, 60, 50, 110, 100, 130, 170 ];

$start  = microtime( true ); 
$result = linear_search( $data, 100 );
printf( 'Total execution time in seconds: %s', microtime( true ) - $start );

print( $result );
