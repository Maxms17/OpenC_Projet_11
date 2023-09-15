import logo from '../../assets/LOGO.svg'
import './Footer.css'

function Header() {
    return (
        <div className='my-footer'>
            <img src={logo} alt='Kasa' className='my-logo_blanc' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Header