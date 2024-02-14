import React from 'react'

export const Message = ({yes}) => {

    let show = "hidden";
    if(yes) 
        show = "flex";

  return (
    <div className= {` ${show} mt-3`}>
        {/* main text rectangle div  */}
        <div className=' relative w-[18rem] h-[12rem]  messageTxt-bg rounded-lg pt-[1px] pb-[1px] pl-[1px] pr-[1px]'>
            <div className='triangle absolute w-[18rem] h-full message-bg bottom-[192px]'></div>

            {/* pop up message  */}
            <div className=' w-full h-fit absolute overflow-hidden messageTxt-bg rounded-xl pt-1 pb-4 pl-4 pr-4 pop-up-animation'>
                <p>
                My dearest Valentine, on this day of love,
                I pour my heart out like stars above.
                In your eyes, I find my guiding light,
                In your embrace, my world feels just right.

                With every beat, my heart sings your name,
                In every moment, you're my eternal flame.
                Your laughter, a melody, so sweet and pure,
                In your arms, I've found my forever cure.
                </p>
            </div>

            <div className='triangle absolute w-[12rem] h-full message-bg bottom-0 rotate-90'></div>
            <div className='triangle absolute w-[12rem] h-full message-bg bottom-0 left-[97px] -rotate-90'></div>

            <div className='triangle absolute w-[18rem] h-[145%] bottom-1 message-bg'></div>
        </div>
    </div>
  )
}
