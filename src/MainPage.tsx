import { logo } from "./assets";
import { FC } from "react";

const MainPage: FC = () => {
  const handleOpenPdf = () => {
    window.open(`${process.env.PUBLIC_URL}Anton_Ivanov_CV.pdf`, "_blank");
  };

  return (
    <main id='wrapper' className='container'>
      <img className='logo' src={logo} alt='logo' />
      <h2 className='subTitle'>
        Lover of Code, Coffee &amp; Lack of Sleep&nbsp;
      </h2>
      <p className='menuItem'>
        <a
          className='menuItem-link'
          href='https://github.com/gftx'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      </p>
      <p className='menuItem'>
        <a
          className='menuItem-link'
          href='https://www.linkedin.com/in/anton-ivanov-461bba1b0/'
          target='_blank'
          rel='noreferrer'
        >
          LinkedIn
        </a>
      </p>
      <p className='menuItem'>
        <a
          className='menuItem-link'
          href='https://t.me/br1stl'
          target='_blank'
          rel='noreferrer'
        >
          Telegram
        </a>
      </p>
      <p className='menuItem'>
        <button className='menuItem-link menuItem-button' onClick={handleOpenPdf}>
          CV
        </button>
      </p>
    </main>
  );
};

export default MainPage;
