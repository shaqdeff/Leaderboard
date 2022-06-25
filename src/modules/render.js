const scoreList = document.querySelector('.score-list');

const renderScore = (scores) => {
  let output = '';
  scores.forEach((score, index) => {
    output += `<li class="${index % 2 === 0 ? 'score-value' : 'score-value colored'}"><span>${score.user}: ${score.score}</span></li>`;
  });
  scoreList.innerHTML = output;
};

export default renderScore;