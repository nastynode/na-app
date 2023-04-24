import React from 'react';
import logo from '../public/naLogoTransparent.png';
import Image from 'next/image'

const width = 50;
const height = 50;

export default function Logo(className){
    return <Image className={className} src={logo} alt="Logo" width={width} height={height} />
}

