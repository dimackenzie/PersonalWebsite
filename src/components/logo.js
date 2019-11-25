import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import ian from '../assets/images/ian.svg'

const Logo = () => {
  return (
    <LogoWrap
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/">
        <Icon src={ian} alt="Ian Mackenzie" />
      </Link>
    </LogoWrap>
  )
}

const LogoWrap = styled(motion.h1)`
  margin: 0;
`

const Icon = styled.img`
  margin: 0;
`

export default Logo
