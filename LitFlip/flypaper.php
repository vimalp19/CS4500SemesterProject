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

    <!-- here we use get to retrieve all the variables in the once a html page is transfered -->
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
$b = intval($_GET['b']);
    //database connect
$con = mysqli_connect('localhost','xampp','wampp','flypaper');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
    //check if a student exists in the database and return thier username, teachername, and access permissions
if (p == "checkforstudent") {
$sql="SELECT P.STDNT_ID, P.ADULT_ID, P.SDNT_PMN
    FROM STUDENT_TBL P
    WHERE P.STDNT_ID like '".$q."'";
$result = mysqli_query($con,$sql);
}
    //check if a teacher exists in the database and return thier username, groupnumber, password and access permissions
elseif (p == "checkforteacher") {
$sql="SELECT P.ADNAME, P.GROUP_ID, P.ADLT_PSWD, P.SDNT_PMN
    FROM ADULT_TBL P
    WHERE P.ADNAME like '".$a."'";
$result = mysqli_query($con,$sql);	
}
    //add a student to the database
elseif (p == "insertstudent") {	
$sql="INSERT INTO STUDENT_TBL (STDNT_ID, ADULT_ID, SDNT_PMN, FNAME, LNAME, AGE, SCHOOL, GRADE, READLVL, READFREQ, READPURP, READENJ)
    VALUES ('".$q."', '".$r."', '".$s."', '".$t."', '".$u."', '".$v."', '".$w."', '".$x."', '".$y."', '".$z."', '".$a."', '".$b."')";
$result = mysqli_query($con,$sql);	
}
     //add a teacher to the database
elseif (p == "insertteacher") {
$sql="INSERT INTO GROUP_TBL (GROUP_ID, GPNAME)    //need to first generate the teachers group id and permissions
VALUES ('".$s."', '".$r."')";
mysqli_query($con,$sql);	

$sql="INSERT INTO PMN_TBL (PMSN)
VALUES ('1')";
mysqli_query($con,$sql);	

    //now we can add the teacher
$sql="INSERT INTO ADULT_TBL (ADLT_ID, ADNAME, GROUP_ID, ADLT_PSWD, ADLT_PMN, FNAME, LNAME, SCHOOL, GRADE, EMAIL)
VALUES ('".$q."', '".$r."', '".$s."', '".$t."', '".$u."', '".$v."', '".$w."', '".$x."', '".$y."', '".$z."')";
$result = mysqli_query($con,$sql);	
}
    //retrieve all the books for a group id
elseif (p == "getbooksforpage") {
$sql="SELECT BK_TITLE, CHPTRS, PAGES, BOOK_ID, UPLOADER_ID, GROUP_ID BK_FMT, GRADE_LVL, LANG, VOCAB_ID, STND_ID
    FROM BOOK_TBL
     WHERE GROUP_ID like '".$q."'";
$result = mysqli_query($con,$sql);	
}
    //search the database by book title
elseif (p == "searchforbook") {
$sql="SELECT BK_TITLE
    FROM BOOK_TBL
      WHERE BK_TITLE like '".$q."', STND_ID like '".$r."'";  
$result = mysqli_query($con,$sql);	
}
    //add a book to the database
elseif (p == "insertbook") {
$sql="INSERT INTO BOOK_TBL (BK_TITLE, CHPTRS, PAGES, BOOK_ID, UPLOADER_ID, GROUP_ID, BK_FMT, GRADE_LVL, LANG, VOCAB_ID, STND_ID)
    VALUES '".$q."', '".$r."', '".$s."', '".$t."', '".$u."', '".$v."', '".$w."', '".$x."', '".$y."', '".$z."', '".$a."'";
$result = mysqli_query($con,$sql);	
}
    //add a vocab word to a students vocab list
elseif (p == "insertvocab") {
$sql="SELECT BK_TITLE
    FROM BOOK_TBL
      WHERE BK_TITLE like '".$q."', STND_ID like '".$r."'";  
$result = mysqli_query($con,$sql);	
}
    //retrieve a students vocab list
elseif (p == "getvocab") {
$sql="SELECT BK_TITLE
    FROM BOOK_TBL
      WHERE BK_TITLE like '".$q."', STND_ID like '".$r."'";  
$result = mysqli_query($con,$sql);	
}
    //add user notes to a book
elseif (p == "insertnotes") {
$sql="INSERT INTO NOTES_TBL (GROUP_ID, NOTE_ID, NOTE_TXT, NOTE_TYPE, PAGE_NUM, BOOK_ID, LANG)
    VALUES '".$q."', '".$r."', '".$s."', '".$t."', '".$u."', '".$v."', '".$w."'";
$result = mysqli_query($con,$sql);	
}
    //add questions to a book
elseif (p == "insertquiz") {
$sql="INSERT INTO QUIZ_TBL (GROUP_ID, QUIZ_ID, QUIZ_TXT, QUIZ_TYPE, BOOK_ID, QUIZ_FMT, STND_ID)
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

