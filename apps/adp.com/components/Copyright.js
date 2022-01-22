import Link from "next/link";

export default function Copyright() {
    return (
        <div>
            <Link href="/" passHref>
                <a>Ashley Petersen Photography</a>
            </Link>{" "}
            &mdash; &copy;
            {new Date().getFullYear()} All Rights Reserved
        </div>
    );
}
