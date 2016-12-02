jQuery(function($) {

	
	//HTML Code to generate the input the assignment name and description
    var assignmentName = $('<div class="form-group" id="addAssignmentName"> <label class="col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-3 control-label" for="assignmentName">Assignment Name:</label> <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4"> <input id="assignmentName" name="assignmentName" type="text" placeholder="Assignment Name" class="form-control input-md" required=""> </div> </div>');
    var assignmentDescription = $('<div class="form-group" id="addAssignmentDescription"> <label class="col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-3 control-label" for="assignmentDescription">Description:</label> <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4"> <input id="assignmentDescription" name="assignmentDescription" type="text" placeholder="Assignment Description" class="form-control input-md" required=""> </div> </div>');
    
	//HTML Code to generate the following buttons: Add Question, Submit Assignment, Cancel
	var assignmentButtons = $('<div class="form-group" id="cancelOrContinue"> <div class="col-xs-8 col-xs-offset-2 col-lg-4 col-lg-offset-4"> <label id="add" class="checkbox-inline" for="addQuestion"> <input class="btn btn-success" type="button" name="addquestion" id="addquestion" value="Add Question"> </label> <label id="add" class="checkbox-inline" for="submitAssignment"> <input class="btn btn-success" type="submit" name="submitAssignment" id="submitAssigment" value="Submit"> </label> <label id="cancel" class="checkbox-inline" for="cancelAssignment"> <input class="btn btn-success" type="button" name="cancelassignment" id="cancelassignment" value="Cancel"> </label> </div> </div>');
    
	//HTML Code to generate buttons for user to select what type of question to create: new question or a question that already exists in the collection (pre-reading, while reading, and post-reading questions to choose from)
    var newQuestionButton = $('<br class="breakInForm"> <div class="form-group"><label class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5" for="createNewQuestion"> <input class="btn btn-success" type="button" name="createNewQuestion" id="createNewQuestion" value="New Question"> </label> </div>');
    var prereadingButton = $('<div class="form-group"><label class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5" for="prereading"> <input class="btn btn-success" type="button" name="prereading" id="prereading" value="Pre-reading Question"> </label> </div>');
    var duringreadingButton = $('<div class="form-group"><label class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5" for="duringreading"> <input class="btn btn-success" type="button" name="duringreading" id="duringreading" value="During Reading Question"> </label> </div>');;
    var postreadingButton = $('<div class="form-group"><label class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5" for="postreading"> <input class="btn btn-success" type="button" name="postreading" id="postreading" value="Post-reading Question"> </label> </div>');
        
	
	//When page is loaded, append the code for the assignment name, description, and the buttons
    $(assignmentName).appendTo('#assignmentForm');
    $(assignmentDescription).appendTo('#assignmentForm');
    $(assignmentButtons).appendTo('#assignmentForm');
    
	//But then hide the all of them. They should only be seen when the teacher attempts to create a new assignment and clicks on the button "New Assignment" 
    $('#addAssignmentName').hide();
    $('#addAssignmentDescription').hide();
    $('#cancelOrContinue').hide();
    
	
    var questionCount = 1;   //Keep track of the number of questions (also used in creating the id for each new question and answer)
    var showAssignment = 0;  //Used to toggle between displaying and not displaying questions for creating new assignment
    
	
    //Function that is triggered when the "New Assignment" button is clicked
    $(document).on('click', '#assignment', function() {
              
		//Only proceed with displaying the assignment information if is not being displayed currently
        if (showAssignment == 0) {
        
            $('#addAssignmentName').show();
            $('#addAssignmentDescription').show();
            $('#cancelOrContinue').show();
        
            showAssignment = 1;   //Indicate that the assignment information is now being displayed
        }     
    });
    
    
	//Function that is triggered when "Cancel" button is clicked
    $(document).on('click', 'input#cancelassignment', function() {
    
		//Verify that the assignment information is being displayed currently
        if (showAssignment == 1) {
            
			//Proceed with hiding all of the assignment information
            $('#addAssignmentName').hide();
            $('#addAssignmentDescription').hide();
			$('#cancelOrContinue').hide();
            
            //And also removing the buttons for adding questions
            $(newQuestionButton).remove();
            $(prereadingButton).remove();
            $(duringreadingButton).remove();
            $(postreadingButton).remove();
            
            //And also any questions that were created
            $('.addQuestion').remove();
            $('.addAnswer').remove();
			$('.deleteQuestion').remove();
			$('.breakInForm').remove();
		
			questionCount = 1;    //Reset the question count
            showAssignment = 0;   //Indicate that the assignment information is no longer being displayed
        }
    });
    
    
	//Function that is triggered when the "Add Question" button is clicked
    $(document).on ('click', '#addquestion', function() {

		//Proceed with displaying the buttons containing the various question options to choose from
        $(newQuestionButton).appendTo("#assignmentForm");        
        $(prereadingButton).appendTo("#assignmentForm");
        $(duringreadingButton).appendTo("#assignmentForm");
        $(postreadingButton).appendTo("#assignmentForm");
    });
    
    
	//Function that is triggered when the button for Pre-reading questions is clicked
    $(document).on ('click', '#prereading', function() {
        
		//Used to generate the id for the question, its answer, and the delete button
        var question = "question_" + questionCount;
        var newAnswer = "answer_" + questionCount;
		var deletequestion = "deleteQuestion_" + questionCount;
        
		var questionDiv = "addQuestionDiv_" + questionCount;
		var newAnswerDiv = "addAnswerDiv_" + questionCount;
		var deleteQuestionDiv = "deleteQuestionDiv_" + questionCount;
		
		
		//Proceed with displaying the options in pre-reading question and an input box for its answer, and the delete question button
        var prereadingQuestion = $('<br class="breakInForm"><br class="breakInForm"> <div class="form-group addQuestion" id="addQuestionDiv"> <div class="col-xs-6 col-xs-offset-3" align="center"> <label for="prereadingQuestion">Pre-reading Question:</label> <select required class="form-control" id="prereadingquestion"> <option value=""></option> <option value="Based on the title, what do you think the story will be about?">Based on the title, what do you think the story will be about?</option> <option value="What do you already know about the topic?">What do you already know about the topic?</option> <option value="Based on the front cover, what do you think the story will be about?">Based on the front cover, what do you think the story will be about?</option> </select> <span>Select one of the pre-reading questions</span> </div> </div>');
        var answer = $('<div class="form-group addAnswer" id="addAnswerDiv"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="Answer">Answer:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="answer" name="answer" type="text" placeholder="Answer" class="form-control input-md" required=""> </div> </div>');
        var deleteQuestion = $('<br class="breakInForm"> <div class="form-group deleteQuestion" id="deleteQuestionDiv"><label class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5" for="deleteQuestion"> <input class="btn btn-success deleteQuestionButton" type="button" name="deleteQuestion" id="deleteQuestion" value="Delete"> </label> </div>');
		
        $(prereadingQuestion).appendTo("#assignmentForm");
        $('#prereadingquestion').attr('id', question);
		$('#addQuestionDiv').attr('id', questionDiv);
        
        $(answer).appendTo("#assignmentForm");
        $('#answer').attr('id', newAnswer);
		$('#addAnswerDiv').attr('id', newAnswerDiv);
		
		$(deleteQuestion).appendTo("#assignmentForm");
		$('#deleteQuestion').attr('id', deletequestion);
        $('#deleteQuestionDiv').attr('id', deleteQuestionDiv);
		
        questionCount++;    //Reset the question count
    });

	
    //Function that is triggered when the button for during reading questions is clicked
    $(document).on ('click', '#duringreading', function() {
        
		//Used to generate the id for the question, its answer, and the delete button
        var question = "question_" + questionCount;
        var newAnswer = "answer_" + questionCount;
		var deletequestion = "deleteQuestion_" + questionCount;
        
		var questionDiv = "addQuestionDiv_" + questionCount;
		var newAnswerDiv = "addAnswerDiv_" + questionCount;
		var deleteQuestionDiv = "deleteQuestionDiv_" + questionCount;
		
        
		//Proceed with displaying the options in the during eading question and an input box for its answer, and the delete question button
        var duringreadingQuestion = $('<br class="breakInForm"><br class="breakInForm"> <div class="form-group addQuestion" id="addQuestionDiv"> <div class="col-xs-6 col-xs-offset-3" align="center"> <label for="whilereadingQuestion">During Reading Question:</label> <select required class="form-control" id="whilereadingquestion"> <option value=""></option> <option value="What do you think will happen next based on what just happened?">What do you think will happen next based on what just happened?</option> <option value="What has happened so far?">What has happened so far?</option> <option value="What is your reaction to what just happened? How do you feel about what just happened?">What is your reaction to what just happened? How do you feel about what just happened?</option><option value="If you were this character, would you react to this situation the same way?  Would you react differently?  Why or why not?">If you were this character, would you react to this situation the same way?  Would you react differently?  Why or why not?</option> </select> <span>Select one of the while-reading questions</span> </div> </div>');
        var answer = $('<div class="form-group addAnswer" id="addAnswerDiv"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="Answer">Answer:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="answer" name="answer" type="text" placeholder="Answer" class="form-control input-md" required=""> </div> </div>');
        var deleteQuestion = $('<br class="breakInForm"> <div class="form-group deleteQuestion" id="deleteQuestionDiv"><label class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5" for="deleteQuestion"> <input class="btn btn-success deleteQuestionButton" type="button" name="deleteQuestion" id="deleteQuestion" value="Delete"> </label> </div>');
		
        $(duringreadingQuestion).appendTo("#assignmentForm");
        $('#whilereadingquestion').attr('id', question);
		$('#addQuestionDiv').attr('id', questionDiv);
        
        $(answer).appendTo("#assignmentForm");
        $('#answer').attr('id', newAnswer);
		$('#addAnswerDiv').attr('id', newAnswerDiv);
		
		$(deleteQuestion).appendTo("#assignmentForm");
		$('#deleteQuestion').attr('id', deletequestion);
		$('#deleteQuestionDiv').attr('id', deleteQuestionDiv);
        
        questionCount++;    //Reset the question count
    });    
    
	
	//Function that is triggered when the button for Post-reading questions is clicked
    $(document).on ('click', '#postreading', function() {
        
		//Used to generate the id for the question, its answer, and the delete button
        var question = "question_" + questionCount;
        var newAnswer = "answer_" + questionCount;
		var deletequestion = "deleteQuestion_" + questionCount;
        
		var questionDiv = "addQuestionDiv_" + questionCount;
		var newAnswerDiv = "addAnswerDiv_" + questionCount;
		var deleteQuestionDiv = "deleteQuestionDiv_" + questionCount;
		
        
		//Proceed with displaying the options in post-reading question and an input box for its answer, and the delete question button
        var postreadingQuestion = $('<br class="breakInForm"><br class="breakInForm"> <div class="form-group addQuestion" id="addQuestionDiv"> <div class="col-xs-6 col-xs-offset-3" align="center"> <label for="postreadingQuestion">Post-reading Question:</label> <select required class="form-control" id="postreadingquestion"> <option value=""></option> <option value="How did the story end?">How did the story end?</option> <option value="Was this ending similar or different to the ending you expected?">Was this ending similar or different to the ending you expected?</option> <option value="Was there a moral or a lesson to this story?">Was there a moral or a lesson to this story?</option> <option value="Who was the main/most important character in the story?">Who was the main/most important character in the story?</option> <option value="What was the main character trying to do?">What was the main character trying to do?</option> <option value="What was the problem and solution?">What was the problem and solution?</option> <option value="What was the setting (where did the story take place)?">What was the setting (where did the story take place)?</option> <option value="What was your favorite part and why?">What was your favorite part and why?</option> <option value="What character traits did the characters have (kind, mean, creative, patient, messy)? How do you know?">What character traits did the characters have (kind, mean, creative, patient, messy)? How do you know?</option> <option value="Retell the most important events in your own words.">Retell the most important events in your own words.</option> <option value="What was the author purpose for writing the book?">What was the author purpose for writing the book?</option> <option value="What facts were in the book?">What facts were in the book?</option> <option value="What new facts did you learn?">What new facts did you learn?</option> <option value="What questions do you have after reading?">What questions do you have after reading?</option> <option value="What is your favorite fact and why?">What is your favorite fact and why?</option> <option value="Was the book fiction or non-fiction? How do you know?">Was the book fiction or non-fiction? How do you know?</option> <option value="Was there a problem in the book? What was it? How was it solved?">Was there a problem in the book? What was it? How was it solved?</option> <option value="Who was the main character? ">Who was the main character? </option> <option value="How would you describe the main character?">How would you describe the main character?</option> <option value=""></option> </select><span>Select one of the while-reading questions</span> </div> </div>');
        var answer = $('<div class="form-group addAnswer" id="addAnswerDiv"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="Answer">Answer:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="answer" name="answer" type="text" placeholder="Answer" class="form-control input-md" required=""> </div> </div>');
        var deleteQuestion = $('<br class="breakInForm"> <div class="form-group deleteQuestion" id="deleteQuestionDiv"><label class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5" for="deleteQuestion"> <input class="btn btn-success deleteQuestionButton" type="button" name="deleteQuestion" id="deleteQuestion" value="Delete"> </label> </div>');
		
        $(postreadingQuestion).appendTo("#assignmentForm");
        $('#postreadingquestion').attr('id', question);
		$('#addQuestionDiv').attr('id', questionDiv);
        
        $(answer).appendTo("#assignmentForm");
        $('#answer').attr('id', newAnswer);
		$('#addAnswerDiv').attr('id', newAnswerDiv);
		
		$(deleteQuestion).appendTo("#assignmentForm");
		$('#deleteQuestion').attr('id', deletequestion);
		$('#deleteQuestionDiv').attr('id', deleteQuestionDiv);
        
        questionCount++;    //Reset the question count
    });
    
	
    //Function that is triggered when the button for creating new question is clicked
    $(document).on ('click', '#createNewQuestion', function() {
        
		//Used to generate the id for the question, its answer, and the delete button
        var question = "question_" + questionCount;
        var newAnswer = "answer_" + questionCount;
		var deletequestion = "deleteQuestion_" + questionCount;
        
		var questionDiv = "addQuestionDiv_" + questionCount;
		var newAnswerDiv = "addAnswerDiv_" + questionCount;
		var deleteQuestionDiv = "deleteQuestionDiv_" + questionCount;
		
		
		//Proceed with displaying input boxes for creating the new question and its answer, and the delete question button
        var newQuestion = $('<br class="breakInForm"><br class="breakInForm"> <div class="form-group addQuestion" id="addQuestionDiv"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="newQuestion">Create New Question:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="newquestion" name="newquestion" type="text" placeholder="Question" class="form-control input-md" required=""> </div> </div>');
        var answer = $('<div class="form-group addAnswer" id="addAnswerDiv"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="Answer">Answer:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="answer" name="answer" type="text" placeholder="Answer" class="form-control input-md" required=""> </div> </div>');
        var deleteQuestion = $('<br class="breakInForm"> <div class="form-group deleteQuestion" id="deleteQuestionDiv"><label class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5" for="deleteQuestion"> <input class="btn btn-success deleteQuestionButton" type="button" name="deleteQuestion" id="deleteQuestion" value="Delete"> </label> </div>');
		
        $(newQuestion).appendTo("#assignmentForm");
        $('#newquestion').attr('id', question);
        $('#addQuestionDiv').attr('id', questionDiv);
		
        $(answer).appendTo("#assignmentForm");
        $('#answer').attr('id', newAnswer);
		$('#addAnswerDiv').attr('id', newAnswerDiv);
		
		$(deleteQuestion).appendTo("#assignmentForm");
		$('#deleteQuestion').attr('id', deletequestion);
		$('#deleteQuestionDiv').attr('id', deleteQuestionDiv);
        
        questionCount++;    //Reset the question count
    });
	
	
	//Function that is triggered when the button for deleting a question is clicked
	$(document).on('click', '.deleteQuestionButton', function() {
		
		//Use the ID of the button clicked to find the question number for that delete button
		var questionToDelete = $(this).attr('id').split('_');
		var questionNum = questionToDelete[questionToDelete.length - 1];
		
		//Then proceed with removing the question, answer, and delete button for that question
		var questionToRemove = "addQuestionDiv_" + questionNum;
		var answerToRemove = "addAnswerDiv_" + questionNum;
		var deleteButtonToRemove = "deleteQuestionDiv_" + questionNum;

		$("#" + questionToRemove).remove();
		$("#" + answerToRemove).remove();	
		$("#" + deleteButtonToRemove).remove();
		
		questionCount--;    //Update the question number count
		
	});
    
});
