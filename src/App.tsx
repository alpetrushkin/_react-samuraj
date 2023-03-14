import React from 'react';
import logo from './logo.svg';
import './App.css';

type TitlePropsType = {
  title: string
}

const Title = (props: TitlePropsType) => {
  return <span>{props.title}</span>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title={'Alex'}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Title title={'Valera'}/>
      </header>
    </div>
  );
}

export default App;
