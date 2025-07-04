import { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"

function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by shivraj.</div>
<div>
  <Link to={'https://github.com/shivrajjavalkote'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://www.linkedin.comwww.linkedin.com/in/shivrajjavalkote'} target='linkedin'><FaLinkedin></FaLinkedin></Link>

</div>
      
    </footer>
  )
}

export default Footer