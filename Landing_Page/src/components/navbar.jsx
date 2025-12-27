import classes from '../styles/navbar.module.css'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {

    return (
        <div class="container">
            <nav className={classes.navbar}>
                <div className='Logo'>
                    <a href='/'><img src={Logo} /></a></div>
                <div>
                    <ul className={classes.ul}>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/Features'>Features</a></li>
                        <li><a href='/Community'>Community</a></li>
                        <li><a href='/Blog'>Blog</a></li>
                        <li><a href='/Pricing'>Pricing</a></li>
                        <li><button className={`${classes.button} ${classes.RegisterButton}`}>Register Now</button></li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar