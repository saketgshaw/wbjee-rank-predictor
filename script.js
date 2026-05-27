
function predictRank() {

  const marks = parseFloat(document.getElementById("marks").value);
  const difficulty = document.getElementById("difficulty").value;
  const result = document.getElementById("result");

  if (isNaN(marks) || marks < 0 || marks > 200) {
    result.style.display = "block";
    result.innerHTML = `
      <h2>Please enter valid marks between 0 and 200</h2>
    `;
    return;
  }

  let adjustedMarks = marks;

  // Difficulty Adjustment
  if (difficulty === "easy") {
    adjustedMarks -= 8;
  }

  if (difficulty === "hard") {
    adjustedMarks += 8;
  }

  adjustedMarks = Math.max(0, Math.min(200, adjustedMarks));

  let predictedRank = 0;

  /*
    ANALYSIS FROM PROVIDED DATA

    ~120 marks  -> Rank ~100
    ~90 marks   -> Rank ~500
    ~80 marks   -> Rank ~1000
    ~55 marks   -> Rank ~5000
    ~45 marks   -> Rank ~10000
    ~38 marks   -> Rank ~20000
    ~25 marks   -> Rank ~50000
  */

  // Highly tuned 2026 prediction

  if (adjustedMarks >= 150) {
    predictedRank = 50;
  }

  else if (adjustedMarks >= 140) {
    predictedRank = 80;
  }

  else if (adjustedMarks >= 130) {
    predictedRank = 120;
  }

  else if (adjustedMarks >= 120) {
    predictedRank = 180;
  }

  else if (adjustedMarks >= 110) {
    predictedRank = 300;
  }

  else if (adjustedMarks >= 100) {
    predictedRank = 500;
  }

  else if (adjustedMarks >= 90) {
    predictedRank = 1000;
  }

  else if (adjustedMarks >= 85) {
    predictedRank = 1500;
  }

  else if (adjustedMarks >= 80) {
    predictedRank = 2200;
  }

  else if (adjustedMarks >= 75) {
    predictedRank = 3000;
  }

  else if (adjustedMarks >= 70) {
    predictedRank = 3800;
  }

  else if (adjustedMarks >= 65) {
    predictedRank = 4500;
  }

  else if (adjustedMarks >= 60) {
    predictedRank = 5200;
  }

  else if (adjustedMarks >= 55) {
    predictedRank = 5000;
  }

  else if (adjustedMarks >= 50) {
    predictedRank = 7000;
  }

  else if (adjustedMarks >= 45) {
    predictedRank = 10000;
  }

  else if (adjustedMarks >= 40) {
    predictedRank = 16000;
  }

  else if (adjustedMarks >= 35) {
    predictedRank = 22000;
  }

  else if (adjustedMarks >= 30) {
    predictedRank = 30000;
  }

  else if (adjustedMarks >= 25) {
    predictedRank = 42000;
  }

  else {
    predictedRank = 55000;
  }

  let range = 0;

  if (predictedRank <= 1000) {
    range = 80;
  }

  else if (predictedRank <= 5000) {
    range = 200;
  }

  else if (predictedRank <= 10000) {
    range = 400;
  }

  else if (predictedRank <= 20000) {
    range = 700;
  }

  else {
    range = 1200;
  }

  const lowerRank = Math.max(1, predictedRank - range);
  const upperRank = predictedRank + range;

  result.style.display = "block";

  result.innerHTML = `
    <h2>Predicted Rank</h2>

    <div class="rank">
      ${lowerRank.toLocaleString()} - ${upperRank.toLocaleString()}
    </div>

    <p style="
      margin-top:12px;
      color:#666;
      font-size:14px;
      line-height:1.5;
    ">
      Based on previous years marks vs rank analysis and expected WBJEE 2026 competition level.
    </p>
  `;
}