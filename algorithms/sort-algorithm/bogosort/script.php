<?php
/**
 * Bogo Sort
 *
 * @param {array} $array The original array.
 * @return {array} The sorted array.
 */
function bogoSort( $array ) {
  for ( $index = 0; $index < count( $array ) - 1; $index++ ) {
    if ( $array[ $index ] > $array[ $index + 1 ] ) {
      shuffle( $array );
      return bogoSort( $array );
    }
  }
  return $array;
}

$data = [ 2, 3, 6, 5, 4, 1 ];

$start  = microtime( true ); 
$result = bogoSort( $data );
printf( 'Total execution time in seconds: %s', microtime( true ) - $start );

print( '<pre>' );
print_r( $result );
print( '</pre>' );
