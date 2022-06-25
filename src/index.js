import './styles.css';
import Api from './modules/api';
import consoleText from './modules/terminalFx';

const refreshButton = document.querySelector('.refresh-btn');
refreshButton.addEventListener('click', () => {
  Api.getScores();
});

const form = document.querySelector('.add-score');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  Api.addScore();
} 
);

consoleText(['Add your score'], 'text', ['#dfbfbf']);