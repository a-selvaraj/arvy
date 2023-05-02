import React from 'react';

import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';


const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='app__header-p p__opensans'>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>

    </div>
    <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header-img' />
    </div>
  </div>
);

export default Header;
