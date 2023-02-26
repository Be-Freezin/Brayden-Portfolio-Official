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
      <h3 className="w-1/2 text-center font-handcraftChalk text-4xl text-skin-accent lg:text-9xl ">
        Things im good at
      </h3>
      <div className="absolute top-48 left-28 flex h-20 w-20 flex-col items-center justify-center  rounded-md border-b-2 border-bordermain p-2 font-bitechalknormal text-lg text-skin-base">
        <img className="my-2 mx-auto" src={html} alt="" />
        <span>HTML</span>
      </div>
      <div className="absolute top-10  flex h-20 w-20 flex-col items-center justify-center  rounded-md border-b-2 border-bordermain p-2 font-bitechalknormal text-lg text-skin-base">
        <img className="my-2 mx-auto" src={css} alt="" />
        <span>CSS</span>
      </div>
      <div className="absolute top-48 right-28 flex h-20 w-20 flex-col items-center justify-center  rounded-md border-b-2 border-bordermain p-2 font-bitechalknormal text-lg text-skin-base">
        <img className="my-2 mx-auto" src={javascript} alt="" />
        <span>Javascript</span>
      </div>
      <div className="absolute right-0 flex h-20 w-20 flex-col items-center justify-center  rounded-md border-b-2 border-bordermain p-2 font-bitechalknormal text-lg text-skin-base">
        <img className="my-2 mx-auto" src={react} alt="" />
        <span>React</span>
      </div>
      <div className="absolute bottom-48 right-28 flex h-20 w-20 flex-col items-center justify-center  rounded-md border-b-2 border-bordermain p-2 font-bitechalknormal text-lg text-skin-base">
        <img className="my-2 mx-auto" src={tailwind} alt="" />
        <span>Tailwind</span>
      </div>
      <div className="absolute bottom-10 flex h-20 w-20 flex-col items-center justify-center  rounded-md border-b-2 border-bordermain p-2 font-bitechalknormal text-lg text-skin-base">
        <img className="my-2 mx-auto" src={gitcircle} alt="" />
        <span>Github</span>
      </div>
      <div className="absolute bottom-48 left-28 flex h-20 w-20 flex-col items-center justify-center  rounded-md border-b-2 border-bordermain p-2 font-bitechalknormal text-lg text-skin-base">
        <img className="my-2 mx-auto" src={figma} alt="" />
        <span>Figma</span>
      </div>
      <div className="absolute left-0 flex h-20 w-20 flex-col items-center justify-center  rounded-md border-b-2 border-bordermain p-2 font-bitechalknormal text-lg text-skin-base">
        <img className="my-2 mx-auto" src={vscode} alt="" />
        <span>VSCode</span>
      </div>
    </div>
  )
}

export default SkillsContent