function boxnum(username, password) {
    if(document.getElementbyId('switch').checked)
    {
	 $(‘#login’).attr(‘action’, “studentHome.html”);
	 checkforstudent(username, password);
    }
    else
    {
	$(‘#login’).attr(‘action’, “teacherHome.html”);
	checkforstudent(username, password);
    }
}	

function checkforstudent(username, password) {
	if (username == "" || password == "") {
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
        xmlhttp.open("GET","flypaper.php?p= checkforstudent q="+username " r="password,true);
        xmlhttp.send();
    }
}

function checkforteacher(username, password) {
    if (username == "" || password == "") {
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
        xmlhttp.open("GET","flypaper.php?p= checkforteacher q="+username " r="password,true);
        xmlhttp.send();
    }
}

function insertstudent(stdntid, adultid, sdntpmn, fname, lname, age, school, grade, readlvl, readfreq, readpurp, readenj) {
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
        xmlhttp.open("GET","flypaper.php?p= insertstudent q=" + stdntid + " r=" + adultid + " s=" + sdntpmn + " t=" + fname + " u=" + lname + " v=" + age + " w=" + school + " x=" + grade + " y=" + readlvl + " z=" + readfreq + " a=" + readpurp + " b=" + readenj,true);
        xmlhttp.send();
    }
}

function insertteacher(adltid, username, groupid, adltpswd, adltpmn, fname, lname, age, school, grade, email, username) {
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
        xmlhttp.open("GET","flypaper.php?p= insertteacher q=" + adltid + " r=" + username + " s=" + groupid + " t=" + adltpswd, " u=" + adltpmn + " v=" + fname + " w=" + lname + " x=" + age + " y=" + school + " z=" + grade + " a=" + email + " b=" + username,true);
        xmlhttp.send();
    }
}

function getbooksforpage(username) {
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
        xmlhttp.open("GET","flypaper.php?p= getbooksforpage q="+username,true);
        xmlhttp.send();
    }
}

function searchforbook(bookName, stndid) {
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
        xmlhttp.open("GET","flypaper.php?p= searchforbook q=" + bookName + " r=" + stndid,true);
        xmlhttp.send();
    }
}

function insertbook(bookName, chapters, pages, bookid, uploaderid, group_id, bkformat, gradelvl, lang, vocabid, stndid) {
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
        xmlhttp.open("GET","flypaper.php?p= insertbook q=" + bookName + " r=" + chapters + " s=" + pages + " t=" + bookid + " u=" + uploaderid + " v=" + group_id + " w=" + bkformat + " x=" + gradelvl + " y=" + lang + " z=" + vocabid + " a=" + stndid,true);
        xmlhttp.send();
    }
}

function insertvocab(VOCAB_ID, VOCAB_TERM) {
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
        xmlhttp.open("GET","flypaper.php?p= insertvocab q=" + VOCAB_ID + " r=" + VOCAB_TERM ,true);
        xmlhttp.send();
    }
}

function getvocab(VOCAB_ID, VOCAB_TERM) {
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
        xmlhttp.open("GET","flypaper.php?p= getvocab q=" + VOCAB_ID + " r=" + VOCAB_TERM ,true);
        xmlhttp.send();
    }
}

function insertnotes(GROUP_ID, NOTE_ID, NOTE_TXT, NOTE_TYPE, PAGE_NUM, BOOK_ID, LANG) {
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
        xmlhttp.open("GET","flypaper.php?p= insertnotes q=" + GROUP_ID + " r=" + NOTE_ID + " s=" + NOTE_TXT + " t=" + NOTE_TYPE + " u=" + PAGE_NUM + " v=" + BOOK_ID + " w=" + LANG,true);
        xmlhttp.send();
    }
}

function insertquiz(GROUP_ID, QUIZ_ID, QUIZ_TXT, QUIZ_TYPE, BOOK_ID, QUIZ_FMT, STND_ID) {
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
        xmlhttp.open("GET","flypaper.php?p= insertquiz q=" + GROUP_ID + " r=" + QUIZ_ID + " s=" + QUIZ_TXT + " t=" + QUIZ_TYPE + " u=" + BOOK_ID + " v=" + QUIZ_FMT + " w=" + STND_ID,true);
        xmlhttp.send();
    }
}