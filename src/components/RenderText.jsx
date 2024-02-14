import React from 'react'

export const RenderText = ({cnt_no}) => {
  return (
    <div className=' mb-8 text-center dancing-script text-xl'>
        {
          cnt_no === 0 &&
          <p>
            Will you be my Valentine ?
          </p>
        }
        {
          cnt_no === 1 &&
          <p>
            Think it again!
          </p>
        }
        {
          cnt_no === 2 &&
          <p>
            Pleasem i'll give you Gifts
          </p>
        }
    </div>
  )
}
