import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const RootLayout = ({children}:{children: ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link href={"/"} className='flex items-center gap-2'>
          <Image alt='logo' src={"/logo.svg"} height={32} width={38}/>
          <h2 className="text-primary-100">
            IntelliView
          </h2>
        </Link>
      </nav>
      {children}
      
    </div>
  )
}

export default RootLayout
