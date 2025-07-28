import logo from './logo.svg';
import './App.css';

const Calculator = () => {

  const [input, setInput] = ([]);
  const [result, setResult] = ([]);

  const handleClick = (key) => {

  };

  return(
    <div className='calculator'>
      <h2>React Calculator</h2>

      <div className='screen'>
        <input type='text' readOnly value={input} placeholder='0'></input>
        <input type='text' readOnly value={result} placeholder='Result'></input>
      </div>

      <div className='button-row'>
        {['7', "8", "9", "/"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}

        {['4', "5", "6", "*"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}

        {['1', "2", "3", "-"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}

        <button onClick={handleClick("0")}>0</button>
        <button onClick={handleClick("+")}>+</button>
        <button className='equals' onClick={handleClick("=")}>=</button>
        <button className='clear' onClick={handleClick("Clear")}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
