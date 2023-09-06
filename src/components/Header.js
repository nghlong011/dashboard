import "../styles/AppHeader.scss";
import { NavLink, Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col, Breadcrumb, Avatar, Input, Space, Badge } from "antd";
import { SearchOutlined, BellFilled, SettingFilled } from "@ant-design/icons";

export default function Header() {
  return (
    <div className="AppHeader">
      <Breadcrumb
        items={[
          {
            title: <a href="">Pages</a>,
          },
          {
            title: "Dashboard",
          },
        ]}
      />
      <Space>
        <Input prefix={<SearchOutlined />} placeholder="Type here..." />
        <Link to="/sign-in" className="btn-sign-in">
          <Avatar
            style={{ backgroundColor: "black" }}
            icon={<UserOutlined />}
          />
          <span>Sign in</span>
        </Link>
        <SettingFilled style={{ fontSize: 24 }} />
        <Badge count={4}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
}
