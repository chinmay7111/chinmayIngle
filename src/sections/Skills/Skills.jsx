import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillsList from '../../common/SkillsList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>skills</h1>

      <div className={styles.skillList}>
       <SkillsList src={checkMarkIcon} skills="HTML"/>
       <SkillsList src={checkMarkIcon} skills="CSS"/>
       <SkillsList src={checkMarkIcon} skills="JavaScript"/>
       <SkillsList src={checkMarkIcon} skills="TypeScript"/>
       <SkillsList src={checkMarkIcon} skills="Node JS"/>
      </div>
      
      <hr />

      <div className={styles.skillList}>
      <SkillsList src={checkMarkIcon} skills="React"/>
      <SkillsList src={checkMarkIcon} skills="React Native"/>
      <SkillsList src={checkMarkIcon} skills="Tailwind CSS"/>
      <SkillsList src={checkMarkIcon} skills="Vue"/>
      </div>
      <hr />

      <div className={styles.skillList}>
      <SkillsList src={checkMarkIcon} skills="Redux"/>
      <SkillsList src={checkMarkIcon} skills="Webpack"/>
      <SkillsList src={checkMarkIcon} skills="Git"/>
      <SkillsList src={checkMarkIcon} skills="Bootstrap"/>
      </div>

    </section>
  )
}

export default Skills
