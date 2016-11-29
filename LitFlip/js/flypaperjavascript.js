function boxnum(rd) {
    if(document.getElementbyId('switch').checked)
    {
	 $(‘#login’).attr(‘action’, “studentHome.html”);
	 checkforstudent();
    }
    else
    {
	$(‘#login’).attr(‘action’, “teacherHome.html”);
	checkforstudent();
    }
}	

function checkforstudent() {
	var username = document.getElementById("loginname").innerHTML;
	var password = document.getElementById("password").innerHTML;
	if (username == "" || password == "") {
        document.getElementById("loginname").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("loginname").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","flypaper.php?p=checkforstudent&q="+username+"&r="password,true);
        xmlhttp.send();
    }
}

function checkforteacher() {
    var username = document.getElementById("loginname").innerHTML;
    var password = document.getElementById("password").innerHTML;
    if (username == "" || password == "") {
      document.getElementById("loginname").innerHTML = "";
      return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("loginname").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","flypaper.php?p=checkforteacher&q="+username+"&r="password,true);
        xmlhttp.send();
    }
}

function insertstudent() {
    var stdntid = document.getElementById("stdntid").innerHTML;
    var adultid = document.getElementById("adultid").innerHTML;
    var sdntpmn = document.getElementById("sdntpmn").innerHTML;
    var fname = document.getElementById("fname").innerHTML;
    var lname = document.getElementById("lname").innerHTML;
    var age = document.getElementById("age").innerHTML;
    var school = document.getElementById("school").innerHTML;
    var grade = document.getElementById("grade").innerHTML; 
    var readlvl = document.getElementById("readlvl").innerHTML;
    var readfreq = document.getElementById("readfreq").innerHTML;
    var readpurp = document.getElementById("readpurp").innerHTML;
    var readenj = document.getElementById("readenj").innerHTML; 
	if (stdntid == "" || adultid == "" || sdntpmn == "" || fname == "" || lname == "" || age == "" || school == "" || grade == "" || readlvl == "" || readfreq == "" || readpurp == "" || readenj == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","flypaper.php?p=insertstudent&q=" + stdntid + "&r=" + adultid + "&s=" + sdntpmn + "&t=" + fname + "&u=" + lname + "&v=" + age + "&w=" + school + "&x=" + grade + "&y=" + readlvl + "&z=" + readfreq + "&a=" + readpurp + "&b=" + readenj,true);
        xmlhttp.send();
    }
}

function insertteacher() {
    var adltid = document.getElementById("adltid").innerHTML;
    var username = document.getElementById("username").innerHTML;
    var groupid = document.getElementById("groupid").innerHTML;
    var adltpswd = document.getElementById("adltpswd").innerHTML;
    var adltpmn = document.getElementById("adltpmn").innerHTML;
    var fname = document.getElementById("fname").innerHTML;
    var lname = document.getElementById("lname").innerHTML;
    var age = document.getElementById("age").innerHTML;
    var school = document.getElementById("school").innerHTML;
    var grade = document.getElementById("grade").innerHTML;
    var email = document.getElementById("email").innerHTML;

	if (adltid == "" || groupid == "" || adltpswd == "" || adltpmn == "" || fname == "" || lname == "" || age == "" || school == "" || grade == "" || email == "" || username "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","flypaper.php?p=insertteacher&q=" + adltid + "&r=" + username + "&s=" + groupid + "&t=" + adltpswd, "&u=" + adltpmn + "&v=" + fname + "&w=" + lname + "&x=" + age + "&y=" + school + "&z=" + grade + "&a=" + email + "&b=" + username,true);
        xmlhttp.send();
    }
}

function getbooksforpage() {
    var username = document.getElementById("username").innerHTML;
    if (username == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","flypaper.php?p=getbooksforpage&q="+username,true);
        xmlhttp.send();
    }
}

function searchforbook() {
    var bookName = document.getElementById("bookName").innerHTML;
    var stndid = document.getElementById("stndid").innerHTML;
    if (bookName == "" || stndid == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","flypaper.php?p=searchforbook&q=" + bookName + "&r=" + stndid,true);
        xmlhttp.send();
    }
}

function insertbook() {
    var bookName = document.getElementById("bookName").innerHTML;
    var chapters = document.getElementById("chapters").innerHTML;
    var pages = document.getElementById("pages").innerHTML;
    var bookid = document.getElementById("bookid").innerHTML;
    var uploaderid = document.getElementById("uploaderid").innerHTML;
    var group_id = document.getElementById("group_id").innerHTML;
    var bkformat = document.getElementById("bkformat").innerHTML;
    var gradelvl = document.getElementById("gradelvl").innerHTML;
    var lang = document.getElementById("lang").innerHTML;
    var vocabid = document.getElementById("vocabid").innerHTML;
    var stndid = document.getElementById("stndid").innerHTML;
    if (bookName == "" || chapters == "" || pages == "" || bookid == "" || uploaderid == "" || group_id == "" || bkformat == "" || gradelvl == "" || lang == "" || vocabid == "" || stndid == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","flypaper.php?p=insertbook&q=" + bookName + "&r=" + chapters + "&s=" + pages + "&t=" + bookid + "&u=" + uploaderid + "&v=" + group_id + "&w=" + bkformat + "&x=" + gradelvl + "&y=" + lang + "&z=" + vocabid + "&a=" + stndid,true);
        xmlhttp.send();
    }
}

function insertvocab() {
    var VOCAB_ID = document.getElementById("VOCAB_ID").innerHTML;
    var VOCAB_TERM = document.getElementById("VOCAB_TERM").innerHTML;
    if (VOCAB_ID == "" || VOCAB_TERM == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText == "")
			    {
			    }
				else
				   document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","flypaper.php?p=insertvocab&q=" + VOCAB_ID + "&r=" + VOCAB_TERM ,true);
        xmlhttp.send();
    }
}

function getvocab() {
    var VOCAB_ID;
    var VOCAB_TERM;
    if (VOCAB_ID == "" || VOCAB_TERM == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","flypaper.php?p=getvocab&q=" + VOCAB_ID + "&r=" + VOCAB_TERM ,true);
        xmlhttp.send();
    }
}

function insertnotes() {
    var GROUP_ID = document.getElementById("GROUP_ID").innerHTML;
    var NOTE_ID = document.getElementById("NOTE_ID").innerHTML;
    var NOTE_TXT = document.getElementById("NOTE_TXT").innerHTML;
    var NOTE_TYPE = document.getElementById("NOTE_TYPE").innerHTML;
    var PAGE_NUM = document.getElementById("PAGE_NUM").innerHTML;
    var BOOK_ID = document.getElementById("BOOK_ID").innerHTML;
    var LANG = document.getElementById("LANG").innerHTML;
    if (GROUP_ID == "" || NOTE_ID == "" || NOTE_TXT == "" || NOTE_TYPE == "" || PAGE_NUM == "" || BOOK_ID == "" || LANG == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","flypaper.php?p=insertnotes&q=" + GROUP_ID + "&r=" + NOTE_ID + "&s=" + NOTE_TXT + "&t=" + NOTE_TYPE + "&u=" + PAGE_NUM + "&v=" + BOOK_ID + "&w=" + LANG,true);
        xmlhttp.send();
    }
}

function insertquiz() {
    var GROUP_ID = document.getElementById("GROUP_ID").innerHTML;
    var QUIZ_ID = document.getElementById("QUIZ_ID").innerHTML;
    var QUIZ_TXT = document.getElementById("QUIZ_TXT").innerHTML;
    var QUIZ_TYPE = document.getElementById("QUIZ_TYPE").innerHTML;   
    var BOOK_ID = document.getElementById("BOOK_ID").innerHTML;
    var QUIZ_FMT = document.getElementById("QUIZ_FMT").innerHTML;
    var STND_ID = document.getElementById("STND_ID").innerHTML;
    if (GROUP_ID == "" || QUIZ_ID == "" || QUIZ_TXT == "" || QUIZ_TYPE == "" || BOOK_ID == "" || QUIZ_FMT == "" || STND_ID == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","flypaper.php?p=insertquiz&q=" + GROUP_ID + "&r=" + QUIZ_ID + "&s=" + QUIZ_TXT + "&t=" + QUIZ_TYPE + "&u=" + BOOK_ID + "&v=" + QUIZ_FMT + "&w=" + STND_ID,true);
        xmlhttp.send();
    }
}
