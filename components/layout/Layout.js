import { PageTransition } from 'next-page-transitions'

import Head from '../Head'
import Header from '../header/Header'
import Content from './Content'
import Footer from '../footer/Footer'

const Layout = ({ children, title, pathname }) => <>
	<Head title={ title } />
	<Header />
	<PageTransition
		timeout={250}
		classNames='page-transition'
		monkeyPatchScrolling={ true }
	>
		<Content children={ children } key={ pathname } />
	</PageTransition>
	<Footer />
</>;

export default Layout
