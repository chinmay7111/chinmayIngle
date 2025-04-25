import styles from '../Hero/HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'  
import twitterDark from '../../assets/twitter-dark.svg'  
import githubLight from '../../assets/github-light.svg'  
import githubDark from '../../assets/github-dark.svg'  
import linkedinLight from '../../assets/linkedin-light.svg'  
import linkedinDark from '../../assets/linkedin-dark.svg'  
import whatsappLight from '../../assets/whatsapp-light.svg'
import whatsappDark from '../../assets/whatsapp-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext' 

function Hero() {
  const { theme, toggleTheme}= useTheme();

  const themeIcon = theme === 'light'? sun : moon;
  const githubIcon = theme === 'light'? githubLight : githubDark;
  const linkedinIcon = theme === 'light'? linkedinLight : linkedinDark;
  const twitterIcon = theme === 'light'? twitterLight : twitterDark;
  const whatsappIcon = theme === 'light'? whatsappLight : whatsappDark;

  let link = "https://wa.me/919307247310?text= hey chinmay.."

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero}
        src={heroImg} 
        alt="profile IMG" />
      <img 
        className={styles.colorMode}
        src={themeIcon}
        alt='color mode '
        onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1 >Chinmay <br /> Ingle</h1>
        <h2>FrontEnd Developer</h2>
        <span>
            <a href="https://github.com/chinmay7111" target='_blank'>
            <img src={githubIcon} alt="github icon" />
            </a>
            <a href="https://x.com/Chinmay97142276" target='_blank'>
            <img src={twitterIcon} alt="twitter icon" />
            </a>
            <a href="https://www.linkedin.com/in/chinmay-ingle-aa479b211" target='_blank'>
            <img src={linkedinIcon} alt="linkedinIcon icon" />
            </a>
            <a href={link} target='_blank'>
            <img src={whatsappIcon} alt="linkedinIcon icon" />
            </a>
        </span>
        <p className={styles.description}>
            With a passion for developing modern React web apps for commercial businesses
            </p>
            <a href={CV} download>
                <button className='hover' >Resume</button>
            </a>
      </div>
    </section>
  )
}

export default Hero
