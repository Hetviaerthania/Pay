import React from 'react'
import Donework from '../Donework'
import workapi from './Workapi'

const Work = () => {
  return (
    <>
    <div className='work'>
    {
                      workapi.map((val, index) => {
                        return <Donework
                          id={val.id}
                          logo={val.logo}
                          title={val.title}
                          para={val.para}
                        />
                      })
                    }
      </div>
    </>
  )
}

export default Work