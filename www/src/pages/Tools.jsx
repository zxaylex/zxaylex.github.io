import { motion } from "framer-motion";
import animationVariants from "../utils/anim_utils";
import styles from './Tools.module.css';


const Tools = () => {
    const tools = [
        [
            {name: "lunacy", description: "My tool for web design."},
            {name: "coolors", description: "Color Palette Selection"},
            {name: "gimp", description: "Icons and Photo Design"}
        ],
        [
            {name: "python", description: "My Main programming language"},
            {name: "javascript", description: "Where I develop websites"},
            {name: "rust", description: "Still learning about the APIs"}
        ],
        [
            {name: "Windows 10", description: "My current operating system"},
            {name: "Debian", description: "Where I code most of my projects."},
            {name: "Arch", description: "Somtimes I get bored on using a mouse."},
        ],
        [
            {name: "ReactJS", description: "This website uses react!"},
            {name: "NestJS", description: "My main backend framework"},
            {name: "Flask", description: "My second main backend framework"},
            {name: "Svelte", description: "I create simple websites with this."},
        ],
    ]
    return (
        <motion.div
        initial='initial'
        animate='in'
        exit='out'
        variants={animationVariants.pageVariants}
        transition={animationVariants.pageTransition}>
            <div className={styles.toolheader}>
                <p>Here are my tools.</p>
            </div>
            <div className={styles.box}>
                <div className={styles.boxin}>
                    <div className={styles.boxes}>
                        <div className={styles.boxicon}></div>
                        <div className={styles.boxicon}></div>
                        <div className={styles.boxicon}></div>
                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.boxicon}></div>
                        <div className={styles.boxicon}></div>
                        <div className={styles.boxicon}></div>
                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.boxicon}></div>
                        <div className={styles.boxicon}></div>
                        <div className={styles.boxicon}></div>
                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.boxicon}></div>
                        <div className={styles.boxicon}></div>
                        <div className={styles.boxicon}></div>
                    </div>
                </div>        
            </div>  
        </motion.div>
    )
}

export default Tools;