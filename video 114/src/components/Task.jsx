import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Task = (props) => {
    return (
        <>
            <div className="task text-xl flex items-center justify-between w-full border-2 border-[#d2ed97] p-4 rounded-xl bg-[#f5f5f5] shadow-[1px_1px_1px_1px_grey]">
                <div className="content flex items-center gap-3">
                    <input onChange={props.handleCheckbox} type="checkbox" name={props.task.key} id="check" checked={props.task.isCompleted} />
                    <div className={props.task.isCompleted ? 'line-through' : ''}>
                        {props.task.todo}
                    </div>
                </div>
                <div className="btn flex gap-3">
                    <button onClick={props.handleEdit} className='border-2 border-[#6cf4be] bg-[#3bc9b4] px-2 py-1 text-white rounded-xl hover:scale-[1.01] active:scale-[0.95] text-xl font-medium'>
                        <FaEdit />
                    </button>
                    <button onClick={props.handleDelete} className='border-2 border-[#6cf4be] bg-[#3bc9b4] px-2 py-1 text-white rounded-xl hover:scale-[1.01] active:scale-[0.95] text-xl font-medium'>
                    <MdDelete />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Task
