import React from "react"
import MusicIcon from "../../assets/icons/music.svg"
const MusicCard = ({ musicIsShown, setMusicIsShown }) => {
  return (
    <div
      className="relative flex h-20 w-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow"
      onMouseEnter={() => setMusicIsShown(true)}
      onMouseLeave={() => setMusicIsShown(false)}
    >
      <img className="my-2 w-6" src={MusicIcon} alt="" srcset="" />
      <span>Music</span>

      {musicIsShown && (
        <div className="absolute bottom-0  z-50 flex h-96 w-64 flex-col justify-evenly rounded-md  bg-musichover   p-1 text-center shadow-0xl shadow-musichover lg:left-0 lg:bottom-0">
          <div className="flex h-full  w-full flex-col justify-evenly bg-skin-bg ">
            <h2 className="mt-4 border-b-2 pb-4 font-bitechalk text-2xl ">
              Favorite Genres
            </h2>
            <ul className="flex h-full flex-col justify-evenly text-lg">
              <li>90's Hip-Hop</li>
              <li>Death Metal</li>
              <li>Drum 'n' Bass</li>
              <li>Thrash Metal</li>
              <li>Synthwave</li>
              <li>Trance</li>
              <li>Black Metal</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default MusicCard
