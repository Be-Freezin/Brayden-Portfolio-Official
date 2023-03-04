import React from 'react'
import AudioIcon from "../../assets/icons/ableton.svg"
const AudioCard = ({ audioIsShown, setAudioIsShown }) => {
  return (
    <div
      className="relative flex h-20 w-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow"
      onMouseEnter={() => setAudioIsShown(true)}
      onMouseLeave={() => setAudioIsShown(false)}
    >
      <img className="my-2 w-8" src={AudioIcon} alt="" srcset="" />
      <span className="mt-3">Audio</span>

      {audioIsShown && (
        <div className="absolute bottom-0 right-0 z-50 flex h-96 w-64 flex-col justify-evenly rounded-md  bg-codehover   p-1 text-center shadow-0xl shadow-codehover lg:bottom-0 lg:left-0">
          <div className="flex h-full  w-full flex-col justify-evenly bg-skin-bg ">
            <h2 className="mt-4 border-b-2 pb-4 font-bitechalk text-2xl ">
              Audio/Music Production
            </h2>
            <p className="flex h-full flex-col justify-evenly px-4 text-lg">
              I've always been fascinated by music, and started playing drums at
              the age of 14. Over the years i've grown to appreciate various
              styles of music. For the past several years i've been producing
              music. Primarily drum and bass but i enjoy making multiple other
              genres as well.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AudioCard