
const animationVariants = {
    pageTransition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.3
    },
    pageVariants: {
        initial: {
            opacity: 0,
            scale: 0.99
        },
        in: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            scale: 1
        }
    }
}

export default animationVariants;