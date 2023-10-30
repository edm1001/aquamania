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
        >
            <h2>About Aquamania</h2>
            <p>Welcome to Aquamania - Your Ultimate Hobbyist Hub for Aquatic Enthusiasts!</p>
            <p>At Aquamania, we're your go-to source for everything related to aquatic hobbies. Whether you're into freshwater or marine aquariums, pond keeping, or aquascaping, we're dedicated to providing you with the best information, tips, and community support.</p>
            <p>Dive into the world of aquatic wonders with fellow hobbyists. Whether you're just starting out or a seasoned pro, we're here to share the excitement and knowledge with you.</p>
            <p>Feel free to get in touch with us to learn more about how we can support your aquatic hobby needs.</p>
        </motion.div>
    );
}

export default About;