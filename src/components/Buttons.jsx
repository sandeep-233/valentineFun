import React from 'react'
import emoji from '../assets/emoji.gif'


export const Buttons = ({cnt_no, setCnt_no, yes, setYes}) => {
    function handleYesButton() {
        setYes(true);
        setCnt_no(-1);
    }

    let css = "";
    if(cnt_no > 0)
        css = "goesDown";

    let show = "flex";
    if(yes)
        show = "hidden";


  return (
    <div className='flex flex-row gap-12 items-center justify-evenly'>
        <button 
         onClick={handleYesButton}
         className={` flex items-center justify-center w-[7.25rem] h-[3.24rem] pt-[9px] pb-[9px] font-bold 
          text-center rounded-lg relative button-bg hover:scale-95 transition-all ${show} `}
        >
            YES
            
        </button>
        
        <div 
         onClick={() => setCnt_no(1 + cnt_no)}
         className={`w-[7.25rem] h-[3.24rem] pt-[9px] pb-[9px]
          rounded-lg relative  ${show}`}
        >
            {/* normal NO button  */}
            {
                (cnt_no === 0 || cnt_no == 1) &&
                <button 
                className={` w-[7.25rem] h-[3.24rem] pt-[9px] pb-[9px]
                 font-bold text-center rounded-lg absolute top-0 left-0
                  right-0 bottom-0 button-bg hover:scale-95 transition-all ${css} `}
                >
                    NO
                </button>
            }
            {
                cnt_no === 1 &&
                <button
                className={` w-[7.25rem] h-[3.24rem] pt-[9px] pb-[9px]
                 font-bold  text-center rounded-lg absolute top-0 left-0
                  right-0 bottom-0 button-bg hover:scale-95 transition-all popAnimation`}
                >NO</button>
            }
            {
                cnt_no === 2 &&
                <button
                className=' crackBg w-[7.25rem] h-[3.24rem] pt-[9px] pb-[9px]
                 font-bold  text-center rounded-lg absolute top-0 left-0 right-0
                  bottom-0 button-bg hover:scale-95 transition-all'
                >NO</button>
            }
        </div>
    </div>
  )
}
