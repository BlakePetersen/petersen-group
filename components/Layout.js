import Head from './Head'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import {initStore, toggleNavMenu, toggleSearchMenu} from "../store";
import { bindActionCreators } from "redux";
import withRedux from "../utils/withRedux";

const Layout = ({ children, title }) => (
  <div>
    <Head title={ title } />
    <Header />
    <Content children={ children } />
    <Footer />
  </div>
);

const mapStateToProps = ({ navMenu, searchMenu }) => ({ navMenu, searchMenu });

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNavMenu: bindActionCreators(toggleNavMenu, dispatch),
    toggleSearchMenu: bindActionCreators(toggleSearchMenu, dispatch)
  }
};

export default Layout
