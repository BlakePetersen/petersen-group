import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";

const _Header = styled.header`
    position: fixed;
    text-align: center;
    width: 100%;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.8);

    > * + * {
        margin-top: 1rem;
    }
`;

export default function Header() {
    return (
        <_Header>
            <Logo />
            <Navigation />
        </_Header>
    );
}
