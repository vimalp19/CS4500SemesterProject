<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$p = intval($_GET['p']);
$q = intval($_GET['q']);
$r = intval($_GET['r']);
$s = intval($_GET['s']);
$t = intval($_GET['t']);
$u = intval($_GET['u']);
$v = intval($_GET['v']);
$w = intval($_GET['w']);
$x = intval($_GET['x']);
$y = intval($_GET['y']);
$z = intval($_GET['z']);
$a = intval($_GET['a']);

$con = mysqli_connect('localhost','peter','abc123','my_db');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
if (p == "checkforstudent") {
$sql="SELECT P.STDNT_ID, P.ADULT_ID, P.STDNT_PSWD, P.SDNT_PMN
    FROM STUDENT_TBL P
    WHERE P.STDNT_ID like '".$q."'";
$result = mysqli_query($con,$sql);
}
elseif (p == "checkforteacher") {
$sql="SELECT P.ADLT_ID, P.GROUP_ID, P.ADLT_PSWD, P.SDNT_PMN
    FROM ADULT_TBL P
    WHERE P.ADLT_ID like '".$q."'";
$result = mysqli_query($con,$sql);	
}
elseif (p == "insertstudent") {
$sql="INSERT_INTO STUDENT_TBL (STDNT_ID, ADULT_ID, STDNT_PSWD, SDNT_PMN)
    VALUES ('".$q."', '".$r."', '".$s."', '".$t."')";
$result = mysqli_query($con,$sql);	
}
elseif (p == "insertteacher") {
$sql="INSERT_INTO ADULT_TBL (ADLT_ID, GROUP_ID, ADLT_PSWD, ADLT_PMN)
    VALUES ('".$q."', '".$r."', '".$s."', '".$t."')";
$result = mysqli_query($con,$sql);	
}
elseif (p == "getbooksforpage") {
$sql="SELECT BK_TITLE, CHPTRS, PAGES, BOOK_ID, UPLOADER_ID, GROUP_ID BK_FMT, GRADE_LVL, LANG, VOCAB_ID, STND_ID
    FROM BOOK_TBL
     WHERE GROUP_ID like '".$q."'";
$result = mysqli_query($con,$sql);	
}
elseif (p == "searchforbook") {
$sql="SELECT BK_TITLE
    FROM BOOK_TBL
      WHERE BK_TITLE like '".$q."', STND_ID like '".$r."'";  
$result = mysqli_query($con,$sql);	
}
elseif (p == "insertbook") {
$sql="INSERT_INTO BOOK_TBL (BK_TITLE, CHPTRS, PAGES, BOOK_ID, UPLOADER_ID, GROUP_ID, BK_FMT, GRADE_LVL, LANG, VOCAB_ID, STND_ID)
    VALUES '".$q."', '".$r."', '".$s."', '".$t."', '".$u."', '".$v."', '".$w."', '".$x."', '".$y."', '".$z."', '".$a."'";
$result = mysqli_query($con,$sql);	
}
elseif (p == "insertvocab") {
$sql="SELECT BK_TITLE
    FROM BOOK_TBL
      WHERE BK_TITLE like '".$q."', STND_ID like '".$r."'";  
$result = mysqli_query($con,$sql);	
}
elseif (p == "getvocab") {
$sql="SELECT BK_TITLE
    FROM BOOK_TBL
      WHERE BK_TITLE like '".$q."', STND_ID like '".$r."'";  
$result = mysqli_query($con,$sql);	
}
elseif (p == "insertnotes") {
$sql="INSERT_INTO NOTES_TBL (GROUP_ID, NOTE_ID, NOTE_TXT, NOTE_TYPE, PAGE_NUM, BOOK_ID, LANG)
    VALUES '".$q."', '".$r."', '".$s."', '".$t."', '".$u."', '".$v."', '".$w."'";
$result = mysqli_query($con,$sql);	
}
elseif (p == "insertquiz") {
$sql="INSERT_INTO QUIZ_TBL (GROUP_ID, QUIZ_ID, QUIZ_TXT, QUIZ_TYPE, BOOK_ID, QUIZ_FMT, STND_ID)
    VALUES '".$q."', '".$r."', '".$s."', '".$t."', '".$u."', '".$v."', '".$w."'";
$result = mysqli_query($con,$sql);	
}
else
{}
echo "<table>
<tr>
<th>STDNT_ID</th>
<th>ADULT_ID</th>
<th>STDNT_PSWD</th>
<th>SDNT_PMN</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['STDNT_ID'] . "</td>";
    echo "<td>" . $row['ADULT_ID'] . "</td>";
    echo "<td>" . $row['STDNT_PSWD'] . "</td>";
    echo "<td>" . $row['SDNT_PMN'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>