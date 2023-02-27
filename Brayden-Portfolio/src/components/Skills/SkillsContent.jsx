import React from 'react'
import vscode from '../../assets/icons/vscode.png'
import tailwind from '../../assets/icons/tailwind.png'
import react from '../../assets/icons/react.png'
import javascript from '../../assets/icons/javascript.png' 
import html from '../../assets/icons/html.png'
import gitcircle from '../../assets/icons/git-circle.png'
import figma from '../../assets/icons/figma.png'
import css from '../../assets/icons/css.png'

const SkillsContent = () => {
  return (
    <div className="relative flex h-4/5 items-center justify-center">
      <h3 className="mt-10 w-1/2 text-center font-handcraftChalk text-5xl text-skin-accent lg:text-9xl ">
        Things im good at
      </h3>
      <div className="absolute top-72 left-14 flex h-16 w-16 flex-col items-center justify-center rounded-md border-b-2 border-bordermain p-2  font-bitechalknormal text-lg text-skin-base lg:top-48 lg:left-28 lg:h-20 lg:w-20">
        <img className="my-2 mx-auto w-5 lg:w-7" src={html} alt="" />
        <span className="text-sm lg:text-lg">HTML</span>
      </div>
      <div className="absolute top-56 flex   h-16 w-16 flex-col items-center justify-center rounded-md border-b-2 border-bordermain  p-2 font-bitechalknormal text-lg text-skin-base lg:top-10 lg:h-20 lg:w-20">
        <img className="my-2 mx-auto w-5 lg:w-7" src={css} alt="" />
        <span className="text-sm lg:text-lg">CSS</span>
      </div>
      <div className="absolute top-72 right-14 flex h-16 w-16 flex-col items-center justify-center rounded-md border-b-2 border-bordermain p-2  font-bitechalknormal text-lg text-skin-base lg:top-48 lg:right-28 lg:h-20 lg:w-20">
        <img className="my-2 mx-auto w-5 lg:w-7" src={javascript} alt="" />
        <span className="text-sm lg:text-lg">Javascript</span>
      </div>
      <div className="absolute right-0 flex h-16 w-16 flex-col items-center justify-center rounded-md border-b-2  border-bordermain p-2 font-bitechalknormal text-lg text-skin-base lg:h-20 lg:w-20">
        <img className="my-2 mx-auto w-5 lg:w-7" src={react} alt="" />
        <span className="text-sm lg:text-lg">React</span>
      </div>
      <div className="absolute bottom-72 right-14 flex  h-16 w-16 flex-col items-center justify-center rounded-md border-b-2 border-bordermain p-2  font-bitechalknormal text-lg text-skin-base lg:bottom-48 lg:right-28 lg:h-20 lg:w-20">
        <img className="my-2 mx-auto w-5 lg:w-7" src={tailwind} alt="" />
        <span className="text-sm lg:text-lg">Tailwind</span>
      </div>
      <div className="absolute bottom-56 flex h-16 w-16 flex-col items-center justify-center rounded-md border-b-2 border-bordermain  p-2 font-bitechalknormal text-lg text-skin-base lg:bottom-10 lg:h-20 lg:w-20">
        <img className="my-2 mx-auto w-5 lg:w-7" src={gitcircle} alt="" />
        <span className="text-sm lg:text-lg">Github</span>
      </div>
      <div className="absolute bottom-72 left-14 flex h-16 w-16 flex-col items-center justify-center rounded-md border-b-2 border-bordermain p-2  font-bitechalknormal text-lg text-skin-base lg:bottom-48 lg:left-28 lg:h-20 lg:w-20">
        <img className="my-2 mx-auto w-5 lg:w-7" src={figma} alt="" />
        <span className=" text-sm lg:text-lg">Figma</span>
      </div>
      <div className="absolute left-0 flex h-16 w-16 flex-col items-center justify-center rounded-md border-b-2  border-bordermain p-2 font-bitechalknormal text-lg text-skin-base lg:h-20 lg:w-20">
        <img className="my-2 mx-auto w-5 lg:w-7" src={vscode} alt="" />
        <span className="text-sm lg:text-lg">VSCode</span>
      </div>
    </div>
  )
}

export default SkillsContent