import React from 'react'
import Image from 'next/image'

interface DateProps {
    date: string;
    info1: string;
    icon1: string;
    info2: string;
    icon2: string;
}

export default function Date(props: DateProps) {
    const {date, info1, info2, icon1, icon2} = props;

  return (
    <div className="date-container">
        <div className="date-wrapper wrapper">
            <div className="content-wrapper">
                <span className='text-gradient-horizontal h1' data-aos="fade-up">{date}</span>
                <div className="info" data-aos="fade-up">
                    <div className="speaker">
                        <Image src={icon1} alt ="" width={24} height={24}></Image>
                        <span className='text-red text-detail'>{info1}</span>
                    </div>
                    <div className="place">
                        <Image src={icon2} alt ="" width={24} height={24}></Image>
                        <span className='text-red text-detail'>{info2}</span>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}
