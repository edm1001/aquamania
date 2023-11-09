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
            className='text-center h-100 w-100 py-5 px-3 bg-success text-white'
        >
            <h1 className='fw-bold text-warning'>About Aquamania</h1>
        <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1,transition:1}}
            className='py-2'
        >
            <p>
            Aquamania was created as a go-to source for the aquatic hobby, to help fish owners by anticipating their specific fish, whether you're into freshwater or marine aquariums, this site is dedicated to provide the best information & tips!<br/>
            Whether starting out or a seasoned pro, we're here to share the passion and knowledge with all. </p>
            <Badge pill bg="info">Get in touch with us to be featured!</Badge>
        </motion.div>
        </motion.div>
    );
}

export default About;