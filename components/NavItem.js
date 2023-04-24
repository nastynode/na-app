import React from "react";
import Link from "next/link";

export default function NavItem({page, path}){
    return(
        <Link href={path}>
            {page}
        </Link>
    )
}