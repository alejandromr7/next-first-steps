'use client';

import { usePathname } from 'next/navigation'
import Link from 'next/link';
import style from './ActiveLink.module.css'


interface Props {
    path: string;
    text: string;
}

const ActiveLink = ({ path, text }: Props) => {

    const pathName = usePathname();
    return (
        <Link
            href={path}
            className={`${style.link} ${(pathName === path) && style['active-link']}`}
        >
            {text}
        </Link>
    )
}

export default ActiveLink