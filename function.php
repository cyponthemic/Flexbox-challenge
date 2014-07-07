<<<<<<< HEAD


=======
<!-- Test -->
<!-- ============HEADER -->
>>>>>>> FETCH_HEAD
<?php
function curPageName() {
 return substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1);
}
$page= curPageName();
?>