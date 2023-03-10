import '../styles/App.scss';
import { useState } from 'react';

function App() {
  // Incremento de barritas o errores dentro del ahorcado
  const [numberOfErrors, setnumberOfErrors] = useState(0);
  const [word, setWord] = useState('maripili');
  const [userLetter, setUserLetter] = useState([]);
  const [lastLetter, setlastLetter] = useState('');
  const [msg, setmsg] = useState('');

  const ClickonButton = (ev) => {
    setnumberOfErrors(numberOfErrors + 1);
  };
  //guardar la última letra escrita

  const handleInput = (ev) => {
    const targValue = ev.target.value;
    const abc = /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/;
    if (abc.test(targValue)) {
      setlastLetter(targValue);

      const userLetterClonado = [...userLetter];
      userLetterClonado.push(targValue);
      setUserLetter(userLetterClonado);

      //const userLetterClonado = [...userLetter, targValue];
      // setUserLetter( [...userLetter, targValue] );

      //setUserLetter(targValue);
      //console.log(userLetter);
      //setUserLetter([...userLetter]);
    } else {
      setlastLetter('');
      setmsg('Por favor introduce una letra correcta');
    }
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((wordLetter) => {
      if (wordLetter === lastLetter) {
        return <li className="letter"></li>;
      } else {
        return <li className="letter"> {userLetter} </li>;
      }
    });
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
              {/* <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li> */}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>

            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" for="last-letter">
              Escribe una letra:
            </label>
            <input
              autocomplete="off"
              className="form__input"
              maxlength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleInput}
            />
          </form>
          <p>{msg}</p>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
      <button onClick={ClickonButton}>Incrementar</button>
    </div>
  );
}

export default App;
