// Define the object for the question entity
let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

// define the array that stores all questions
let questions = [
    {
      title: 'gato',
      alternatives: ['dog', 'cat', 'bird', 'fish'],
      correctAnswer: 1
    },
    {
      title: 'ave',
      alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
      correctAnswer: 3
    },
    {
      title: 'rata',
      alternatives: ['cat', 'fish', 'rat', 'shark'],
      correctAnswer: 2
    },
    {
      title: 'mosca',
      alternatives: ['fly', 'puma', 'fish', 'dog'],
      correctAnswer: 0
    }
  ];

let app = {
    start: function(){

        // Keep track of current position
        this.currentPosition = 0;

        // Keep track of score
        this.score = 0;

        // Get alternatives
        let alts = document.querySelectorAll('.alternative');

        // .bind(this) allows to pass on the context to another method if not using arrow functions
        alts.forEach((element, index)=>{
            
            // Listening for events
            element.addEventListener('click', ()=>{
                // Check correct answer
                this.checkAnswer(index);
            });
        });

        // Show stats
        this.updateStats();

        // Show question
        this.showQuestion(questions[this.currentPosition])
    },

    // Method for showing the question
    showQuestion: function(q){

        // Show question title.
        let titleDiv = document.getElementById('title');

        titleDiv.textContent = q.title;

        // show alternatives
        let alts = document.querySelectorAll('.alternative');
    
        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];
        });
    },

    // Method for checking answer
    checkAnswer: function (userSelected){
        // Keep track of current question through position.
        let currentQuestion = questions[this.currentPosition];
        
        if(currentQuestion.correctAnswer == userSelected){
            // Correct
            console.log("correct");
            this.score++;
            this.showResult(true)
        } else {
            // Not Correct
            console.log("not correct")
            this.showResult(false)
        }

        // Keep the stats up to date
        this.updateStats();

        // Increase position
        this.increasePosition();
        // Show next question
        this.showQuestion(questions[this.currentPosition]);
    },

    increasePosition: function(){
        this.currentPosition++;

        // Back to the start of the list if all questions are completed
        if(this.currentPosition == questions.length){
            this.currentPosition = 0;
        };
    },

    updateStats: function(){
        let scoreDiv = document.getElementById('score')
        scoreDiv.textContent = `Your score: ${this.score}`;
    },

    showResult: function(isCorrect){
        let resultDiv = document.getElementById('result')
        let result = ''

        // checks
        if(isCorrect){
            result = 'Correct Answer'
        } else{
            // Get the current question
            let currentQuestion = questions[this.currentPosition];

            // Get correct answer index
            let correctAnswerIndex = currentQuestion.correctAnswer;

            // Get correct answer text
            let correctAnswerText = currentQuestion.alternatives[correctAnswerIndex]

            result = `Wrong. Correct answer: ${correctAnswerText}`
        }

        resultDiv.textContent = result
    }
}



// call the function to start the application
app.start();

