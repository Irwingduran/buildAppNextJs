import React from 'react';
import Link from '../../node_modules/next/link';
import Image from '../../node_modules/next/image';

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between'>
        <Link href="/">
            <Image src="/chiltepLog2.png" alt=""  width={140} height={30} />
        </Link>
        <p>2024 &copy; TODOS LOS DERECHOS RESERVADOS</p>
    </div>
  )
}

export default Footer