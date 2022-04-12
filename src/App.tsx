import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { background } from './background';
import { CVPage } from './pages/CVPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import './styles/main.scss';

function App() {

	useEffect(() => {
		background()
	},[])

	return (
		<>
			<Router basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/cv' element={<CVPage />} />
				</Routes>
			</Router>
			<canvas width='3360' height='1878'></canvas>
		</>
	);
}

export default App;
