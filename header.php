<?php require_once('function.php'); ?>
<html>
	<head>
		<title>Advantage of flexbox - Code Challenge</title>
		<link rel="stylesheet" href="css/normalize.css" type="text/css">
		<link rel="stylesheet" href="css/style.css" type="text/css">
		<link rel="stylesheet" href="icons/foundation-icons.css" type="text/css">
		<link rel="stylesheet" href="tooltip/css/tooltipster.css" type="text/css">
	</head>
	<body>
		<div class="wrapper">
			<nav class="main_nav">
				<ul class="main_menu">
					<li><a href="index.php">
						<i class="fi-layout <?php if($page=='index.php'){echo 'on';}?>" title="Challenge"></i></a><br>
						<span class="nav_button">Challenge</span>
					</li>
								<li><a href="about.php">
									<i class="fi-trophy <?php if($page=='about.php'){echo 'on';}?>" title="About"></i></a><br>
									<span class="nav_button">About</span>
								</li>
											<li><a href="contact.php">
												<i class="fi-mail <?php if($page=='contact.php'){echo 'on';}?>" title="Contact"></i></a><br>
												<span class="nav_button">Contact</span>
											</li>
				</ul>
			</nav>
