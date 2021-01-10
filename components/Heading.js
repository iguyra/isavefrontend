import React from "react";
import Link from "next/link";
import { getFrontUser } from "../functions/fauthContoller";
import CartIcon from "./cart/CartIcon";

class Heading extends React.Component {
  isMounted = false;

  state = {
    user: {},
    headerActive: false,
    menuActive: false,
 
  };

  async componentDidMount() {
    try {
     
    const token = localStorage.getItem("token");
      const data = await getFrontUser(token);
    
    if (data) {
      this.setState({ user: data.user });
      }
      window.addEventListener("scroll", this.handleBackground,true);
    
    } catch (error) {
      console.log("errorrr",error.response.data)
   }

  }

  handleBackground = () => {
    if (window.scrollY > 96) {
      this.setState({ headerActive: true });   

    } else {
      this.setState({ headerActive: false });
    }
  };

   openMenu = () => {
     this.setState({ menuActive: !this.state.menuActive })
  }

  render() {
    const { user, headerActive,menuActive ,navigation} = this.state;
    return (
      <section className={headerActive ? "header active": "header"}>
        <div className="header__details">
          <div onClick={this.openMenu} className={menuActive ? "header__menu active" : "header__menu"}></div>
          <Link href="/">
            <a className="header__name">iguyra</a>
          </Link>
        </div>
        <div className=""></div>
        <div className="searchtest">
          <div className="searchtest__inputcontainer">
            <input
              type="text"
              className="searchtest__input"
              placeholder="search product"
              id="searchinput"
            />
            <Link  href="/search" >
            <a className="searchtest__searchbutton" id="searchbutton">
              <i className="fas fa-search"></i>
              </a>
            </Link>
          </div>
        </div>

        <div className="header__profileDetails">
          <div className="header__profile">
            {user.email ? (
              <Link href="/user">
                <a>
                  <i className="fas activeIcon fa-user" id="user"></i>
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a>
                  <i className="fas fa-user" id="userLogin"></i>
                </a>
              </Link>
            )}
          </div>
          <div className="header__cart">

            <CartIcon />
           
          </div>
        </div>

       
        <section onClick={this.openMenu} className={menuActive ? "navigation" : "navigation off"} id="navigation">
          <div className="navigation__container">
            <div className="navigation__item">
            <Link href="/about-us">
              <a className="navigation__list"
          ><p>about us</p>
          <i className="far fa-address-card"></i
        ></a>
          </Link>
              <Link href="/contact">
              <a className="navigation__list"
          ><p>contact</p>
          <i className="far fa-address-card"></i
        ></a>
          </Link>
        
        <a className="navigation__list"
          ><p className="navigation__callus">
            call us <span className="call-green"></span>
          </p>
          <i className="fas fa-phone-volume"></i
        ></a>
        <div className="navigation__category">
          categories
          <a className="navigation__category--list">women</a>
          <a className="navigation__category--list">men</a>
          <a className="navigation__category--list">accesories</a>
        </div>
      </div>
      <div className="navigation__close" id="close"></div>
      <div className="navigation__detail">iguyra.com</div>

          </div>
    
       </section>

      </section>
    );
  }
}

export default Heading;
 {/* <Link href="/cart">
              <a>
                <i className="fas fa-cart-plus"></i>
              </a>
            </Link> */}

