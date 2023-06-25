document.addEventListener("DOMContentLoaded", function() {
    var reportCard = document.getElementById("report-card");
  
    // Define the subjects and their initial scores
    var subjects = [
      { name: "Math", score: 0 },
      { name: "Science", score: 0 },
      { name: "English", score: 0 },
      { name: "History", score: 0 }
    ];
  
    // Display the subjects and input fields
    subjects.forEach(function(subject) {
      var subjectDiv = document.createElement("div");
      subjectDiv.className = "subject";
  
      var nameLabel = document.createElement("label");
      nameLabel.textContent = subject.name;
      subjectDiv.appendChild(nameLabel);
  
      var scoreInput = document.createElement("input");
      scoreInput.type = "number";
      scoreInput.min = 0;
      scoreInput.max = 100;
      scoreInput.value = subject.score;
      subjectDiv.appendChild(scoreInput);
  
      reportCard.appendChild(subjectDiv);
    });
  
    // Add a calculate button
    var calculateButton = document.createElement("button");
    calculateButton.id = "calculate-button";
    calculateButton.textContent = "Calculate";
    calculateButton.addEventListener("click", function() {
      var totalScore = 0;
      var subjectInputs = document.querySelectorAll(".subject input");
  
      subjectInputs.forEach(function(input) {
        totalScore += parseInt(input.value);
      });
  
      var averageScore = totalScore / subjects.length;
      alert("Average Score: " + averageScore.toFixed(2));
    });
  
    reportCard.appendChild(calculateButton);
  });