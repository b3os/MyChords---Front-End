import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
import { Sidebar } from "react-pro-sidebar";
const cx = classNames.bind(styles);
const SideBar = ({listGenres, listMusicianName}) => {
    return (
        <div style={{ height: "100%" }}>
            <div className={cx("aside-1")} style={{ height: "100%" }}>
                <Sidebar className={cx("sidebar")}>
                    <Menu className={cx("menu-item")}>
                        <MenuItem className="menu1">
                            <h2>List Beat</h2>
                        </MenuItem>
                        <MenuItem> Dashboard </MenuItem>

                        <SubMenu label="Genre">
                            {console.log(listGenres)}
                            {listGenres.map((item) => {
                                return <MenuItem > {item.name}</MenuItem>
                            })}
                        </SubMenu>
                        <SubMenu label="Musician">
                            {listMusicianName.map((item) => {
                                return <MenuItem>{item}</MenuItem>
                            })}
                        </SubMenu>
                    </Menu>
                </Sidebar>
            </div>
        </div>
    );
};
export default SideBar;