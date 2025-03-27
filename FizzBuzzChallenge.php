<?php
echo 'FIZZ BUZZ' . PHP_EOL;
 for ($a = 1; $a <= 36; $a++) {
  if($a % 3 == 0) {
   printf('FIZZ ');
  }
  else if($a % 5 == 0) {
   printf('BUZZ ');
  }
  else if($a % 30 == 0) {
   printf('FIZZ BUZZ ');
  }
  else {
   printf('%d ', $a);  
  }
 }
?>
