import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './store/slices/counter/counterSlices';

function App() {
	// const [count, setCount] = useState(0);
	const { counter } = useSelector((state) => state.counter);

	const dispatch = useDispatch();

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<p>Counter esta en {counter}</p>
			<div className="card">
				<button onClick={() => dispatch(increment())}>Incrementar</button>
				<button onClick={() => dispatch(decrement())}>Decrementar</button>
				<button onClick={() => dispatch(reset())}>Reset</button>
				<button onClick={() => dispatch(incrementByAmount(2))}>Incrementa por un monto</button>
			</div>
		</div>
	);
}

export default App;
