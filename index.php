<?
	$title = "Grand Dice Roll";
	if(isset($_REQUEST["max"]))
		$max = $_REQUEST["max"];
	else $max = 0;

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta content="text/html; charset=UTF-8" http-equiv="content-type">
	<meta name="author" content="<?php print $title ?>"/>
	<meta name="copyright" content="Copyright (c) 2009 by Pau Ferrer Ocaña"/>
	<meta name="generator" content="IES Nicolau Copèrnic"/>
	<title><?php print $title ?></title>
	<link rel="icon" href="images/icon.png" type="image/png"/>
	<link rel="shortcut icon" href="images/favicon.ico"/>
	<link rel="StyleSheet" href="style/style.css" type="text/css"/>
	<script type="text/javascript" src="functions.js" charset="UTF-8"></script>
</head>

<body onLoad="onLoad(<?=$max;?>);">

<div id="instructions" <? if($max != 0) echo ' style="display:none;" '; ?>>
  <h1>Grand Dice Roll</h1>
  <p><b>Instruccions:</b></p>
  <p>Escriure el número de cares, prèmer la tecla retorn.<br />Per parar el dau, prèmer una tecla.</p>
</div>
  <div id="form" <? if($max != 0) echo ' style="display:none;" '; ?>>
   <form method="post">
	<label for="max">Cares:</label><br />
	<input maxlength="5" name="max" id="max" size="5" type="text" onchange="javascript:roll()"><br>
	<input type="submit">
   </form>
</div>

<div id="dice" <? if($max == 0) echo ' style="display:none;" '; ?>>
	<span class="result" id="result">1</span>
</div>



<?
for($i=1;$i<=$max;$i++){
	echo '<table id="results" width="200px" style="visibility:hidden"><tr width="200px"><td width="10px">'.$i.'</td><td id="res'.$i.'" width="10px">0</td><td width="0%" class="yes"  id="yes'.$i.'"></td><td class="no" width="90%" id="no'.$i.'"></td></tr></table>'."\n";
}
?>

</body>
</html>




