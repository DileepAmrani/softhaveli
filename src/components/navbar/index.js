import React from "react"
import { createUseStyles } from "react-jss"
import { Link } from "gatsby"
import Logo from "./../../images/logo.jpeg"
const useStyles = createUseStyles({
  navbar: {
    backgroundColor: "#008AFF",
    padding: "1.5% 5%",
    display: 'flex',
    alignItems: 'center'
  },
  logoBox:{
      flex: 1
  },
  links:{
  },
  link:{
      margin: 5,
      textDecoration: 'none',
      color: '#2C2F3B',
      fontSize: '18px',
      color: '#fff',
      '&:hover':{
          borderBottom: '1px solid #fff',
          
      }
  },
})

function Navbar() {
  const classes = useStyles()
  return (
    <div className={classes.navbar}>
      <div className={classes.logoBox}>
        <Link>
            Soft Haveli
        </Link>
      </div>
      <div className={classes.links}>
        <Link className={classes.link} to='.'>Courses</Link>
        <Link className={classes.link} to='.'>Blog</Link>
        <Link className={classes.link} to='.'>Services</Link>
        <Link className={classes.link} to='.'>Projects</Link>
      </div>
    </div>
  )
}

export default Navbar
