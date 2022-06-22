import { useEffect } from 'react';
import { background } from './background';
import MainPage from './MainPage';
import './styles/index.scss';

function App() {

	useEffect(() => {
		background()
	},[])

	return (
		<>
			<MainPage />
			<canvas className='canvas' width='3360' height='1878'></canvas>
		</>
	);
}

export default App;
