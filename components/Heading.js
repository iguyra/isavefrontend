import React from "react";
import Link from "next/link";
import { getFrontUser } from "../functions/fauthContoller";
import CartIcon from "./cart/CartIcon";

class Heading extends React.Component {
  state = {
    user: {},
    headerActive: "header",
    menuActive: false,
    navigation:"navigation"
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    const data = await getFrontUser(token);
    if (data) {
      this.setState({ user: data.user });
    }

    window.addEventListener("scroll", this.handleBackground);
  }

  handleBackground = () => {
    if (window.scrollY > 96) {
      this.setState({ headerActive: "header active" });
    } else {
      this.setState({ headerActive: "header" });
    }
  };

   openMenu = () => {
     this.setState({ menuActive: !this.state.menuActive })
  }

  render() {
    const { user, headerActive,menuActive ,navigation} = this.state;
    return (
      <section className={headerActive}>
        <div className="header__details">
          <div onClick={this.openMenu} className="header__menu"></div>
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

       
        <section class={menuActive ? "navigation" : "navigation off"} id="navigation">
          <div className="navigation__container">
          <div class="navigation__item">
        <a class="navigation__list">about us</a>
        <a class="navigation__list"
          ><p>contact</p>
          <i class="far fa-address-card"></i
        ></a>
        <a class="navigation__list"
          ><p class="navigation__callus">
            call us <span class="call-green"></span>
          </p>
          <i class="fas fa-phone-volume"></i
        ></a>
        <div class="navigation__category">
          categories
          <a class="navigation__category--list">bikinis</a>
          <a class="navigation__category--list">tops</a>
          <a class="navigation__category--list">underwears</a>
        </div>
      </div>
      <div class="navigation__close" id="close">x</div>
      <div class="navigation__detail">iguyra.com</div>

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

