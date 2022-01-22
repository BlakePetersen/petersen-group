import Link from "next/link";
import styled from "styled-components";

const _Logo = styled.a`
    font-size: 24px;
`;

export default function Logo() {
    return (
        <Link href="/" passHref>
            <_Logo>Ashley Petersen Photography</_Logo>
        </Link>
    );
}
