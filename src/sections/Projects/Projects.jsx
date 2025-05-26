import styles from './ProjectsStyles.module.css'
import notePad from '../../assets/notepad.png'
import speechrecogniition from '../../assets/speechRecongnition.png'
// import calcy from '../../assets/clacy.jpeg'
import viberr from '../../assets/viberr.png'
// import hipsster from '../../assets/hipsster.png'
import liftfit from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard'
function Projects() {
  return (

    <section id="projects" className={styles.container }>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectContainer}>
         <ProjectCard 
        src={speechrecogniition} 
        link="https://speechrecogniition.netlify.app/" 
        h3="Speech-Reco"
        p='Speech Recognition App'
        />
      
        <ProjectCard 
        src={notePad} 
        link="https://advtextedit.netlify.app/" 
        h3="AdvNotePad"
        p=' Advance notePad'
        />

        <ProjectCard 
        src={viberr} 
        link="https://nextfliixx.netlify.app/" 
        h3="NextFlix"
        p='Movies & Series App'
        />
      
        <ProjectCard 
        src={liftfit} 
        link="https://github.com/chinmay7111" 
        h3="FitLift"
        p='Fitness App'
        />
        
        <ProjectCard 
        src={liftfit} 
        link="https://fnstasks.web.app/ucsfClone/index.html" 
        h3="Clone"
        p='Fitness App'
        />
      
      
      </div>
    </section>
  )
}

export default Projects
