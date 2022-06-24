const scoreList = document.querySelector('.score-list');

const renderScore = (scores) => {
  let output = '';
  scores.forEach((score, index) => {
    output += `<li class="${index % 2 === 0 ? 'colored' : 'score-value'}">${score.name}: ${score.score}</li>`;
  });
  scoreList.innerHTML = output;
}

export default renderScore;