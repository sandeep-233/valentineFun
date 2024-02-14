import React from 'react'
import img from '../assets/img.gif'
import img01 from '../assets/img01.gif'
import img02 from '../assets/img02.gif'
import img03 from '../assets/img03.gif'
import yesImg from '../assets/excited.gif'

export const RenderImg = ({cnt_no, yes}) => {
  return (
    <>
        <div className=' w-[144px] h-[144px] mb-2'>
            {
             yes &&
             <img src={yesImg} alt='' className='w-full' /> // excited look
            }
            {
            cnt_no === 0 &&
            <img src={img} alt='' className='w-full' /> // excited look
            }
            {
            cnt_no === 1 &&
            <img src={img01} alt='' className='w-full' /> // sad look
            }
            {
            cnt_no === 2 &&
            <img src={img02} alt='' className='w-full' /> // very sad look
            }
        </div>
    </>
  )
}
