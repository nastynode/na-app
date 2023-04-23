import React from 'react';
import logo from '../public/groupSymbol.png';
import Image from 'next/image'

const width = 100;
const height = 100;

export default function Logo(){
    return <Image src={logo} alt="Logo" width={width} height={height} />
}

