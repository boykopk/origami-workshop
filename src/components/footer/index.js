import React, { Component } from "react";
import Link from "../link";
import styles from "./index.module.css";
import logo from "../../images/blue-origami-bird-flipped.png";
import getNavigation from "../../utils/navigation";
import UserContext from "../../Context";

class Footer extends Component {
  static contextType = UserContext;

  render() {
    const { user } = this.context;

    const links = getNavigation(user);
    
    return (
      <footer className={styles.footer}>
        <div>
          {links.map((navElement) => {
            return (
              <Link
                key={navElement.title}
                href={navElement.link}
                title={navElement.title}
                type="footer"
              />
            );
          })}
          <img alt="logo" className={styles.logo} src={logo} />
        </div>
        <p className={styles.university}>Software University 2019</p>
      </footer>
    );
  }
}

export default Footer;
