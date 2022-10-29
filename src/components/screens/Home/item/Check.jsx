import React from 'react'
import { BsCheckLg } from 'react-icons/bs'
import cn from 'classnames'

const Check = ({ isCompleted }) => {
	return (
		<div
			className={cn(
				'border-2 rounded-lg border-cyan-400 w-6 h-6 mr-3 flex items-centre justify-centre',
				{
					'bg-cyan-400': isCompleted,
				}
			)}
		>
			{isCompleted && <BsCheckLg size={24} className='text-gray-900' />}
		</div>
	)
}

export default Check
