import React, {useState, Fragment} from 'react'
import warning from "../../assets/Warning.png"
import { Dialog, Transition } from '@headlessui/react'
import "./index.css"

const Notification = ({open, onClose}) => {
    if(!open) return null
  return (
    <Transition name="notification" appear show={open} as={Fragment}>
        <Dialog as="div" className="fixed" onClose={onClose}>
        <div className="running-text">
            <div className="text"><marquee class="py-1" direction="Left" onmouseout="this.start()" scrollamount="8"> This is Natural Disaster "Early Warning System". Please protect yourself and those around you. Also pay attention to the safety instructions provided. Please go to a safe place soon. This is Natural Disaster "Early Warning System". Please protect yourself and those around you. Also pay attention to the safety instructions provided. Please go to a safe place soon. </marquee></div>
        </div>
        <div className="running-text2">
            <div className="text2"><marquee class="py-1" direction="Left" onmouseout="this.start()" scrollamount="8"> This is Natural Disaster "Early Warning System". Please protect yourself and those around you. Also pay attention to the safety instructions provided. Please go to a safe place soon. This is Natural Disaster "Early Warning System". Please protect yourself and those around you. Also pay attention to the safety instructions provided. Please go to a safe place soon. </marquee></div>
        </div>
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="overlay" />
            
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-1000"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="modalContainer">
                    <img src={warning} alt="" />
                    <div className="modalRight">
                        <button onClick={onClose} className="closeBtn text-black hover:bg-transparent hover:text-red-500 font-bold">x</button>
                        <div className="content">
                            <h1 className="font-bold font-large">THIS IS DISASTER EARLY WARNING SYSTEM!</h1>
                            <p>We highly recommend you to immediately find a safe place</p>
                        </div>
                        <div className="btnContainer">
                        <button  className="btnAnswer">
                            Take me to the <span className="font-bold underline font-large">SAFE PLACE</span>
                        </button>
                        </div>
                    </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}    

export default Notification;