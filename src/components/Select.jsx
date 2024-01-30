import React from 'react'
import SelectCard from './SelectCard'
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';
export default function Select() {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid gap-2 sm:grid-cols-2 lg:grid-col-3'>

  <SelectCard text='Bora Bora' bg={BoraBora}/>
  <SelectCard bg={BoraBora2} text='Maldives' />
  <SelectCard bg={Maldives} text='Antigua' />
    <SelectCard bg={Maldives2} text='Cozumel' />
    <SelectCard bg={Maldives3} text='Jamaica' />
    <SelectCard bg={KeyWest} text='Key West' />
    
    </div>
  )
}
