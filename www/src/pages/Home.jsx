import styles from './Home.module.css';
import { motion } from 'framer-motion';
import animationVariants from './../utils/anim_utils.js';


const Home = () => {
    const years_old = new Date().getFullYear() - 2004
    return (
        <motion.div
            initial='initial'
            animate='in'
            exit='out'
            variants={animationVariants.pageVariants}
            transition={animationVariants.pageTransition}>

        <div className={styles.main}>
            <div className={styles.left}>
                <p className={styles.name}>Zach David Maregmen</p>
                <p className={styles.title}>Backend Developer | Python AI Trainer</p>

                <div className={styles.bio}>
                <p className={styles.age}>age: {years_old}</p>
                <p className={styles.program}>program: bs computer science</p> 
                </div>

                <div className={styles.desc}>
                    <p className={styles.intro1}>I code stuff in my free time and I also like to play games. I <br/>
                                        am currently learning sveltekit and this website is also <br/>
                                        built in top of it. If you have any questions, feel free to
                                        contact me.
                    </p>
                    <p className={styles.intro2}>
                            I do not have current projects but I am planning to make a 
                            weekly<br/> open source projects. Feel free to visit my github page
                    </p>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.status}>
                    <p className={styles.discord}>discord status: <span>online</span></p>
                    <p className={styles.ytmusic}>youtube music: <span>online</span></p>
                </div>
                <div className={styles.todo}>
                    <div className={styles.todocontainer}>

                        <p className={styles.todotitle}>My Todo List</p>
                        <br />
                        <div className={styles.acadreqs}>
                            <p className={styles.category}>Academic Requirements:</p>
                            <p className={styles.todos}>Research #1: AI and Blockchain</p>
                            <p className={styles.todos}>Research #3: UI Simulation</p>
                        </div>
                        <div className={styles.sideproj}>
                            <p className={styles.category}>Side Projects:</p>
                            <p className={styles.todos}>PixelHearts: Gamified Dating</p>
                            <p className={styles.todos}>ByteBoard: Twitter for Nerds</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default Home;