import { Link } from 'react-router-dom';
import CV from '../assets/files/CV.pdf';


const CVPage = () => {
	return (
		<>
            <Link to='/' className='cv-backLink'>назад на главную</Link>
			<div className='wrapper-CV'>
				<object
					type='application/pdf'
					data={CV}
					width='100%'
					height='100%'
				></object>
			</div>
		</>
	);
};
export { CVPage };
