import { css } from '../../stitches.config';
import ewmLogo from '../assets/ewm.svg'

const LogoClass = css({
  '& img': {
    width: 350,
    height: 41
  }
})

export const Logo = () => {
  return <img className={LogoClass()} src={ewmLogo} alt="EWM" />
}
