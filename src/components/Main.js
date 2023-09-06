import "../styles/main.scss";
import { Layout, Drawer, Affix } from "antd";
import Sidenav from "./Sidenav";
import Header from "./Header";
import Footer from "./Footer";
import Customers from "./PageContents/Customers";
const { Header: Content, Sider } = Layout;
export default function Main() {
  return (
    <Layout>
      <Sider>
        <Sidenav />
      </Sider>
      <Layout>
        <Header />
        <Customers />
        <Footer />
      </Layout>
    </Layout>
  );
}
