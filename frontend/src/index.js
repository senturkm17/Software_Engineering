import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TaskProvider} from './contexts/task_context';
import {SprintProvider} from './contexts/sprint_context';
import {PlayersProvider} from './contexts/players_context';
import {ProgressProvider} from './contexts/in_progress_context';
import {DoneProvider} from './contexts/done_context';

ReactDOM.render(
  <React.StrictMode>
    <TaskProvider>
      <SprintProvider>
        <ProgressProvider>
          <PlayersProvider>
            <DoneProvider>
              <App/>
            </DoneProvider>
          </PlayersProvider>
        </ProgressProvider>
      </SprintProvider>
    </TaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(// console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
