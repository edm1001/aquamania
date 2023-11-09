import React from 'react';
import { motion } from 'framer-motion';

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
            className='text-center h-100 w-100 py-5'
        >
            <h2>About Aquamania</h2>
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1,transition:1}}
                className='py-2'
            >

            <p>Welcome to Aquamania - Your Ultimate Hobbyist Hub for Aquatic Enthusiasts!<br/>
            As a Fish hobbyist I created this site as a go-to source for our aquatic hobby. Whether you're into freshwater or marine aquariums, pond keeping, or aquascaping, we're dedicated to providing you with the best information, tips, and community support.<br/>
            Dive into the world of aquatic wonders with fellow hobbyists. Whether you're just starting out or a seasoned pro, we're here to share the excitement and knowledge with you. Get in touch with us to learn more!</p>
            </motion.div>
        </motion.div>
    );
}

export default About;