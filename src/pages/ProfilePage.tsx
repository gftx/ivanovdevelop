import { Link } from 'react-router-dom';
import { arrow, med, pizza, profilePic, fam } from '../assets';

type Props = {};

export default function ProfilePage({}: Props) {
	return (
		<div className='portfolio'>
			<div className='wrapper_portfolio'>
				<h1>
					<a href='../index.html'>
						<img src='logo.svg' alt='' />
					</a>
				</h1>
				<h2>Lover of Code, Coffee &amp; Lack of Sleep&nbsp;</h2>
				<br />
				<div className='myPhoto'>
					<img src={profilePic} alt='profile' />
					<img src={arrow} alt='arrow' />
				</div>
				<br />
				<br />
				<div className='aboutMe'>
					<h2>/ About me </h2>
					<div className='aboutMe_text'>
						Имею коммерческий опыт в разработке различных веб-приложений
						(лендинги, интернет-магазины, реал-тайм приложения, боты в telegram
						и discord). Обладаю ключевыми навыками программирования: ООП,
						паттерны программирования, работа с API, работа с СУБД, RESTful
						подход. Свободно владею английским языком и профессиональной
						лексикой.
                        Hard и Soft skills, опыт работы можно посмотреть в CV по ссылке ниже!
					</div>
				</div>
				<p>
					<Link to='/cv' target='blank'>
						/ My CV 
					</Link>
				</p>
				<p>
					<Link to='/'>/ How to contact me </Link>
				</p>
			</div>

			<div className='wrapper_works'>
				<h1>/ My works</h1>
				<div>
					<h2>
						<a
							href='https://github.com/gftx/famTree'
							className='work'
							target='_blank'
						>
							<p>Family tree</p>
							<div>
								TypeScript (client + server) family tree application (еще в
								разработке)
							</div>
							<div className='work_img'>
								<img src={fam} alt='fam tree' />
							</div>
						</a>
					</h2>
				</div>
				<div>
					<h2>
						<a href='https://littlesicily.ru/' className='work' target='_blank'>
							<p>Little Sicily</p>
							<div>
								Лендинг с бронированием столиков для ресторана Итальянской кухни
								в центре Петербурга
							</div>
							<div className='work_img'>
								<img src={pizza} alt='pizza' />
							</div>
						</a>
					</h2>
				</div>
				<div>
					<h2>
						<a href='#' className='work'>
							<p>NDA проекты</p>
							<div>
								проекты с использованием стека: ReactJS, TypeScript,
								Razzle(SSR), NodeJS, Redux, StoreOn, SCSS и тд
							</div>
						</a>
					</h2>
				</div>
				{/* <div className='work2'></div>
					<div className='work3'></div> */}
			</div>
		</div>
	);
}
