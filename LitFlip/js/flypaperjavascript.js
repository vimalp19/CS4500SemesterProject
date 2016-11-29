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
	if (username.value == "" || password.value == "") {
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
    if (username.value == "" || password.value == "") {
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
	if (stdntid.value == "" || adultid.value == "" || sdntpmn.value == "" || fname.value == "" || lname.value == "" || age.value == "" || school.value == "" || grade.value == "" || readlvl.value == "" || readfreq.value == "" || readpurp.value == "" || readenj.value == "") {
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

	if (adltid.value == "" || groupid.value == "" || adltpswd.value == "" || adltpmn.value == "" || fname.value == "" || lname.value == "" || age.value == "" || school.value == "" || grade.value == "" || email.value == "" || username.value "") {
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
    if (username.value == "") {
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
    if (bookName.value == "" || stndid.value == "") {
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
    if (bookName.value == "" || chapters.value == "" || pages.value == "" || bookid.value == "" || uploaderid.value == "" || group_id.value == "" || bkformat.value == "" || gradelvl.value == "" || lang.value == "" || vocabid.value == "" || stndid.value == "") {
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
    var vocab_id = document.getElementById("vocab_id").innerHTML;
    var vocab_term = document.getElementById("vocab_term").innerHTML;
    if (vocab_id.value == "" || vocab_term.value == "") {
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
        xmlhttp.open("GET","flypaper.php?p=insertvocab&q=" + vocab_id + "&r=" + vocab_term ,true);
        xmlhttp.send();
    }
}

function getvocab() {
    var vocab_id;
    var vocab_term;
    
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
        xmlhttp.open("GET","flypaper.php?p=getvocab&q=" + vocab_id + "&r=" + vocab_term ,true);
        xmlhttp.send();
    }
}

function insertnotes() {
    var group_id = document.getElementById("group_id").innerHTML;
    var note_id = document.getElementById("note_id").innerHTML;
    var note_txt = document.getElementById("note_txt").innerHTML;
    var note_type = document.getElementById("note_type").innerHTML;
    var page_num = document.getElementById("page_num").innerHTML;
    var book_id = document.getElementById("book_id").innerHTML;
    var lang = document.getElementById("lang").innerHTML;
    if (group_id.value == "" || note_id.value == "" || note_txt.value == "" || note_type.value == "" || page_num.value == "" || book_id.value == "" || lang.value == "") {
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
        xmlhttp.open("GET","flypaper.php?p=insertnotes&q=" + group_id + "&r=" + note_id + "&s=" + note_txt + "&t=" + note_type + "&u=" + page_num + "&v=" + book_id + "&w=" + lang,true);
        xmlhttp.send();
    }
}

function insertquiz() {
    var group_id = document.getElementById("group_id").innerHTML;
    var quiz_id = document.getElementById("quiz_id").innerHTML;
    var quiz_txt = document.getElementById("quiz_txt").innerHTML;
    var quiz_type = document.getElementById("quiz_type").innerHTML;   
    var book_id = document.getElementById("book_id").innerHTML;
    var quiz_fmt = document.getElementById("quiz_fmt").innerHTML;
    var stnd_id = document.getElementById("stnd_id").innerHTML;
    if (group_id.value == "" || quiz_id.value == "" || quiz_txt.value == "" || quiz_type.value == "" || book_id.value == "" || quiz_fmt.value == "" || stnd_id.value == "") {
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
        xmlhttp.open("GET","flypaper.php?p=insertquiz&q=" + group_id + "&r=" + quiz_id + "&s=" + quiz_txt + "&t=" + quiz_type + "&u=" + book_id + "&v=" + quiz_fmt + "&w=" + stnd_id,true);
        xmlhttp.send();
    }
}
