import config from '../assets/config.png';

const description = ['Fundamental', 'Curcial', 'Core'];

function randomNumber(maxNum) {
    return Math.floor(Math.random() * (maxNum + 1))
  }
export default function Header() {
   const getDescription = description[randomNumber(2)]
    
    return (
        <header>
        <img src={config} alt="Logo image" />
        <h2>Learn react for Web Development</h2>
        <p>{getDescription} course of the web development with React.</p>
        </header>
    )
}