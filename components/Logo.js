import React from 'react';
import logo from '../public/naLogoTransparent.png';
import Image from 'next/image'

const width = 75;
const height = 75;

export default function Logo(){
    return <Image src={logo} alt="Logo" width={width} height={height} />
}

