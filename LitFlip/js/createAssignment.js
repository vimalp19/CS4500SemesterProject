jQuery(function($) {
            
	$("#assignment").click (function() {
                    
                    var showAssignmentDetails = 0;
               
                    var assignmentName = $('<div class="form-group" id="addAssignmentName"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="assignmentName">Assignment Name:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="assignmentName" name="assignmentName" type="text" placeholder="Assignment Name" class="form-control input-md" required=""> </div> </div>');
                    var assignmentDescription = $('<div class="form-group" id="addAssignmentDescription"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="assignmentDescription">Description:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="assignmentDescription" name="assignmentDescription" type="text" placeholder="Assignment Description" class="form-control input-md" required=""> </div> </div>');
                    var assignmentButtons = $('<div class="form-group" id="cancelOrContinue"> <div class="col-xs-8 col-xs-offset-2 col-lg-4 col-lg-offset-4"> <label id="add" class="checkbox-inline" for="addQuestion"> <input class="btn btn-success" type="button" name="addquestion" id="addquestion" value="Add Question"> </label> <label id="cancel" class="checkbox-inline" for="cancelAssignment"> <input class="btn btn-success" type="button" name="cancelassignment" id="cancelassignment" value="Cancel"> </label> </div> </div>');
                    var questionOptions = $('<br> <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5 btn-group-vertical" id="questionOptions"> <button type="button" class="btn btn-success" id="new">Create New Question</button> <button type="button" class="btn btn-success" id="pre">Pre-reading Question</button> <button type="button" class="btn btn-success" id="during">During reading Question</button> <button type="button" class="btn btn-success" id="post">Post-reading Question</button> </div> <br> <br>');
                    var newQuestion = $('<div class="form-group" id="addNewQuestion"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="newQuestion">New Question:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="newquestion" name="newquestion" type="text" placeholder="Question" class="form-control input-md" required=""> </div> </div>');
                    var prereadingQuestion = $('<div class="form-group"> <div class="col-xs-6 col-xs-offset-3" align="center"> <label for="prereadingQuestion">Question:</label> <select required class="form-control" id="prereadingquestion"> <option value=""></option> <option value="Based on the title, what do you think the story will be about?">Based on the title, what do you think the story will be about?</option> <option value="What do you already know about the topic?">What do you already know about the topic?</option> <option value="Based on the front cover, what do you think the story will be about?">Based on the front cover, what do you think the story will be about?</option> </select> <span>Select one of the pre-reading questions</span> </div> </div>');
                    var duringreadingQuestion = $('<div class="form-group"> <div class="col-xs-6 col-xs-offset-3" align="center"> <label for="whilereadingQuestion">Question:</label> <select required class="form-control" id="whilereadingquestion"> <option value=""></option> <option value="What do you think will happen next based on what just happened?">What do you think will happen next based on what just happened?</option> <option value="What has happened so far?">What has happened so far?</option> <option value="What is your reaction to what just happened? How do you feel about what just happened?">What is your reaction to what just happened? How do you feel about what just happened?</option><option value="If you were this character, would you react to this situation the same way?  Would you react differently?  Why or why not?">If you were this character, would you react to this situation the same way?  Would you react differently?  Why or why not?</option> </select> <span>Select one of the while-reading questions</span> </div> </div>');
                    var postreadingQuestion = $('<div class="form-group"> <div class="col-xs-6 col-xs-offset-3" align="center"> <label for="postreadingQuestion">Question:</label> <select required class="form-control" id="postreadingquestion"> <option value=""></option> <option value="How did the story end?">How did the story end?</option> <option value="Was this ending similar or different to the ending you expected?">Was this ending similar or different to the ending you expected?</option> <option value="Was there a moral or a lesson to this story?">Was there a moral or a lesson to this story?</option> <option value="Who was the main/most important character in the story?">Who was the main/most important character in the story?</option> <option value="What was the main character trying to do?">What was the main character trying to do?</option> <option value="What was the problem and solution?">What was the problem and solution?</option> <option value="What was the setting (where did the story take place)?">What was the setting (where did the story take place)?</option> <option value="What was your favorite part and why?">What was your favorite part and why?</option> <option value="What character traits did the characters have (kind, mean, creative, patient, messy)? How do you know?">What character traits did the characters have (kind, mean, creative, patient, messy)? How do you know?</option> <option value="Retell the most important events in your own words.">Retell the most important events in your own words.</option> <option value="What was the author purpose for writing the book?">What was the author purpose for writing the book?</option> <option value="What facts were in the book?">What facts were in the book?</option> <option value="What new facts did you learn?">What new facts did you learn?</option> <option value="What questions do you have after reading?">What questions do you have after reading?</option> <option value="What is your favorite fact and why?">What is your favorite fact and why?</option> <option value="Was the book fiction or non-fiction? How do you know?">Was the book fiction or non-fiction? How do you know?</option> <option value="Was there a problem in the book? What was it? How was it solved?">Was there a problem in the book? What was it? How was it solved?</option> <option value="Who was the main character? ">Who was the main character? </option> <option value="How would you describe the main character?">How would you describe the main character?</option> <option value=""></option> </select><span>Select one of the while-reading questions</span> </div> </div>');
                    var answer = $('<div class="form-group" id="addAnswer"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="Answer">Answer:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="answer" name="answer" type="text" placeholder="Answer" class="form-control input-md" required=""> </div> </div>');
                    var test = $('<p>HELLO</p>');
                    
                    if (showAssignmentDetails == 0) {
                        
                        $(assignmentName).appendTo("#assignmentForm");
                        $(assignmentDescription).appendTo("#assignmentForm");
                        $(assignmentButtons).appendTo("#assignmentForm");
                        
                        showAssignmentDetails = 1;
                    }
                
                    
                    //On the click of the 'Add Question' button, add the following:
                    $(".btn-success").click (function(){
                        var id = $(this).attr('id');
                    
                        alert (id);
                        
                        $("#questionOptions").hide();
                    
                        if (id == "new") {
                            $(newQuestion).appendTo("#assignmentForm");
                            $(answer).appendTo("#assignmentForm");
                        }
                            
                        else if (id == "pre") {
                            $(prereadingQuestion).appendTo("#assignmentForm");
                            $(answer).appendTo("#assignmentForm");
                        }
                            
                        else if (id == "during") {
                            $(duringreadingQuestion).appendTo("#assignmentForm");
                            $(answer).appendTo("#assignmentForm");
                        }
                            
                        else if (id == "post") {
                            $(postreadingQuestion).appendTo("#assignmentForm");
                            $(answer).appendTo("#assignmentForm");
                        } 
                    });
               
                    
                    $("#addquestion").click (function() {
                        
                        $(questionOptions).appendTo("#assignmentForm");
                        $("#cancelOrContinue").hide();
                    });
                    
                    
                    //On the click of the 'Cancel' button, remove the following:
                    $("input#cancelassignment").click (function(){
                    
                        showAssignmentDetails = 0;
                        
                        $("#addAssignmentName").hide();
                        $("#addAssignmentDescription").hide();
                        $("#cancelOrContinue").hide();      
                    });   
                }); 
            });
