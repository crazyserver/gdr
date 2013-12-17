<?php
	require_once('functions.php');
?>
<!DOCTYPE html>
<html>
	<head>  
		<meta charset="utf-8">
		<meta name="author" content="Pau Ferrer Ocaña"/>
		<meta name="copyright" content="Copyright &copy;2009-<?php echo date('Y'); ?> Pau Ferrer Ocaña"/>
		<meta name="generator" content="IES Nicolau Copèrnic"/>
		<title>Grand Dice Roll</title>
		<link rel="stylesheet" href="style.css"/>
		<script src="functions.js"></script>
	</head>
<body>
	<div id="content">
<?php

	$max = isset($_REQUEST["max"])? $_REQUEST["max"] : false;
	if($max <= 0) $max = false;
	$tirades = isset($_REQUEST["tirades"])? $_REQUEST["tirades"] : false;
	if($tirades <= 0) $tirades = false;
	if($max && $tirades) print_dice($max,$tirades);
	else print_instructions();
?>
	</div>
</body>
</html>
