import { PageTransition } from 'next-page-transitions'

import Head from '../Head'
import Header from '../header/Header'
import Content from './Content'
import Footer from '../footer/Footer'
import Twitter from '../footer/Twitter'

const Layout = ({ children, title, pathname }) => <>
	<Head title={ title } />
	<Header />
	<PageTransition
		timeout={250}
		classNames='page-transition'
		loadingDelay={500}
		loadingTimeout={{
			enter: 250,
			exit: 0
		}}
		loadingClassNames='loading-indicator'
		monkeyPatchScrolling={ true }
	>
		<Content children={ children } key={ pathname } />
	</PageTransition>
	{/*<Twitter />*/}
	<Footer />
</>;

export default Layout
