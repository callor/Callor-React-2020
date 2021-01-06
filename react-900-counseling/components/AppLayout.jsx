import React from "react";
import Link from "next/link";
import { Menu, Input, Button } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="student">
          <Link href="/student">
            <a>학생정보</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="techer">
          <Link href="/techer">
            <a>교사용</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};
export default AppLayout;
