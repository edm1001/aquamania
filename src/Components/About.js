import React from 'react';
import { motion } from 'framer-motion';
import Badge  from 'react-bootstrap/Badge';


const About = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (      
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className='text-center h-100 w-100 py-5 px-3 abt-section'
        >
            <h1 className='fw-bold abt-title'>About Aquamania</h1>
        <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1,transition:1}}
            className='py-2'
        >
            <p>
            I created Aquamania as a go-to source for most fish aquatic hobby with basic needs. in the hobby whether you're into freshwater or marine aquariums, this site is dedicated to provide the best information & tips.<br/>
            Whether starting out or a seasoned pro, we're here to share the passion and knowledge with all. </p>
            <span className='badge abt-badge'>Get in touch with us to be featured!</span>
        </motion.div>
        </motion.div>
    );
}

export default About;