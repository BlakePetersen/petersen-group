import {motion} from 'framer-motion'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Content from '@/components/primitives/content'
import Head from "@/components/head";

const variants = {
    hidden: {opacity: 0},
    enter: {opacity: 1},
    exit: {opacity: 0},
}

const Page = ({children}) => {
    return (
        <>
            <Head/>
            <Header/>
            <Content>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                >
                    {children}
                </motion.div>
            </Content>
            <Footer/>
        </>
    )
}

export default Page
