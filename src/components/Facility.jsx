import React from 'react'
import { PiCarProfileBold } from 'react-icons/pi';
import Flex from './Flex';

export default function Facility({text,className}) {
  return (
    <>
    <Flex className="gap-x-4">
    <PiCarProfileBold  className='text-2xl'/>
    <p className={`text-base text-paracolor1 font-dm font-normal ${className&&className}`}>Two years warranty</p>
    </Flex>


    </>
  )
}
