import { Link } from 'react-router-dom';
import { logo } from '../assets';

type Props = {};

export default function MainPage({}: Props) {
	return (
		<div id='wrapper'>
			<h1>
				<img src={logo} alt='' />
			</h1>
			<h2>Lover of Code, Coffee &amp; Lack of Sleep&nbsp;</h2>
			<br />
			<p>
				<a href='https://vk.com/idantooon' target='_blank'>
					VK
				</a>
			</p>
			<p>
				<a href='https://github.com/gftx' target='_blank'>
					Github
				</a>
			</p>
			<p>
				<a href='https://www.instagram.com/i.anton_/' target='_blank'>
					Instagram
				</a>
			</p>
			<p>
				<a href='https://t.me/br1stl' target='_blank'>
					Telegram
				</a>
			</p>

			<br />
			<br />

			<p>
				<Link to='/profile'>My Portfolio / Моё Портфолио</Link>
			</p>
		</div>
	);
}
