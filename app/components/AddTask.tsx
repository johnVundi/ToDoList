// @react
"use client"; 

import { AiOutlinePlus } from "react-icons/ai"
import { Modal } from "./Modal"
import React, { useState } from "react";


export const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)


  return (
    <div>
        <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full"> Add new Task
            <AiOutlinePlus className="ml-2" size={18}/>
        </button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}
