import { useState } from 'react';
import './App.css';
import CharComponent from './components/CharComponent';
import ValidationComponent from './components/ValidationComponent';

function App() {
  const [text, setText] = useState("default");
  let textCharArray = [...text.split("")];
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };
  const charOnClickHandler = (index) => {
    const chars = [...textCharArray];
    chars.splice(index,1);
    setText(chars.join(""));
  };

  return (
    <div className="App">
      <input type="text" value={text} onChange={textChangeHandler}/>
      <p>{text}</p>
      <ValidationComponent textLength={text.length}/>
      {textCharArray.map((char, index) => {
        return(
          <CharComponent 
            letter={char}
            textCharArray={textCharArray}
            clickHandler={() => charOnClickHandler(index)}
            key={index} />
        ); 
      })}
    </div>
  );
}

export default App;
