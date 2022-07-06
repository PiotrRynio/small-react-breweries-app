import logo from 'assets/images/logo/logo.svg';
import { Link } from 'react-router-dom';
import { LogoImage } from './Logo.styles';

export const Logo = () => {
  return (
    <Link to={'/'}>
      <LogoImage src={logo} alt={'Brewery App Logo'} />
    </Link>
  );
};
