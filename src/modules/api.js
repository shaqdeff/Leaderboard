import renderScore from './render';

const user = document.getElementById('user');
const score = document.getElementById('score');

export default class Api {
  static addScore = async () => {
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PYBRgDanIQVARLMj9lqC/scores/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user.value,
          score: score.value,
        }),
      },
    );
    user.value = '';
    score.value = '';
  };

  static getScores = async () => {
    const result = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PYBRgDanIQVARLMj9lqC/scores/',
    );
    const data = await result.json();
    renderScore(data.result);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  Api.getScores();
}
);