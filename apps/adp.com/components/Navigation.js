import Link from "next/link";
import styled from "styled-components";

const _Link = styled.a`
    margin: 1rem;
`;

export default function Navigation() {
    return (
        <nav>
            <Link href="/portfolio" passHref>
                <_Link>Portfolio</_Link>
            </Link>

            <Link href="/categories" passHref>
                <_Link>Categories</_Link>
            </Link>

            <Link href="/projects" passHref>
                <_Link>Projects</_Link>
            </Link>

            <Link href="/blog" passHref>
                <_Link>Blog</_Link>
            </Link>

            <Link href="/contact" passHref>
                <_Link>Contact</_Link>
            </Link>

            <Link href="/client-login" passHref>
                <_Link>Client Login</_Link>
            </Link>
        </nav>
    );
}
