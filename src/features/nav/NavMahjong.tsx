import React from "react";
import logo from "./logo.svg";
import protoLogo from "./AWS-Prototyping_Logo_White.svg";
//import { useDispatch, useSelector } from "react-redux";
import { Button, Navbar, Alignment, Icon } from "@blueprintjs/core";
import styles from "./NavMahjong.module.scss";

const NavMahjong: React.FC = () => {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <img src={logo} alt="logo" className={styles.applogo} />
        <Navbar.Heading>Mahjong</Navbar.Heading>
        <Navbar.Divider />
        <span className="bp3-tag .modifier">v0.5.0</span>
        <Navbar.Divider />
        <div className="bp3-select .modifier">
          <select>
            <option selected>English</option>
            <option value="1">Simplified Chinese</option>
          </select>
        </div>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <div className="bp3-input-group .modifier">
          <span className="bp3-icon bp3-icon-search"></span>
          <input
            className="bp3-input"
            type="search"
            placeholder="Search Docs"
            dir="auto"
          />
        </div>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="document" text="Doc" />
        <Button className="bp3-minimal" icon="git-repo" text="Github" />
        <Navbar.Divider />
        <span className={styles.madeBy}>Made with &nbsp;</span>
        <Icon icon="heart"></Icon>
        <span className={styles.madeBy}> &nbsp; by &nbsp;</span>
        <Icon
          icon={<img src={protoLogo} alt="logo" className={styles.protoLogo} />}
        />
      </Navbar.Group>
    </Navbar>
  );
};

export default NavMahjong;
