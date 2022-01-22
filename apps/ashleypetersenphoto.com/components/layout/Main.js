import styled from "styled-components";

import Head from "../Head";
import Header from "../Header";
import Footer from "../Footer";

const _Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Layout({ children, title }) {
    return (
        <_Body>
            <Head title={title} />
            <Header />

            {children}

            <Footer />
        </_Body>
    );
}
