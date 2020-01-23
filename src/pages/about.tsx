import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Ahaan Jain" desc="Hi. I'm Ahaann! You can visit my website" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Ahaan!</h1>
        <p>
          You can visit my <a href="https://ahaanjain.myty.in">website</a>
          
          I am a six year old boy studying in witty international school. I aspire to become an entrepreneur and a tech expert in the future.
          I enjoy watching peep and chirp animation, ryan toy review, pink panthor.
          My favorite activity is playing badminton, football and cricket with my friends.
          I live in Malad (West),Mumbai.
         </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
