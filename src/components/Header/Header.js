import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StarteProvider';

const Header = () => {
    const [{ basket }] = useStateValue();
    return (
        <header className='header'>
            <Link to='/'><img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></Link>
            <div className="header__search">
                <input type="text" className='header_searchInput' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <nav className="header__nav">
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Hello guest
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                <div className="header__optionBasket">
                    <Link to='/checkout'>
                        <ShoppingBasket />
                        <span className='header__optionLineOne header_basketCount'>
                            {basket?.length}
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;