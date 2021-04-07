import { useEffect } from 'react'
import useGTM from '@elgorditosalsero/react-gtm-hook'
import { PageTransition } from 'next-page-transitions'

import Head from '../Head'
import Header from '../header/Header'
import Content from './Content'
import Footer from '../footer/Footer'

import C from '../../config/constants';

const Layout = ({ children, title, pathname }) => {
	const { init, UseGTMHookProvider } = useGTM();
	useEffect(() => init({ id: C.GTM_ID }), []);

	return <>
		<Head title={ title } />
		<Header />
		<PageTransition
			timeout={250}
			classNames='page-transition'
			monkeyPatchScrolling={ true }
		>
			<UseGTMHookProvider>
				<Content children={ children } key={ pathname } />	
			</UseGTMHookProvider>
		</PageTransition>
		<Footer />
	</>
};

export default Layout
