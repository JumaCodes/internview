import React from 'react'

const Legend = () => {
    return (
        <div className='bg-white-500 w-64'>
            <div className='flex n items-center'>
                <div className='rounded-full bg-orange-500 w-2 h-2 mr-2'>

                </div>
                <div className='text-sm'>Match is Ongoing</div>
            </div>

            <div className='flex n items-center'>
                <div className='rounded-full bg-gray-400 w-2 h-2 mr-2'>

                </div>
                <div className='text-sm'>Loser of the Match</div>
            </div>

            <div className='flex n items-center'>
                <div className='rounded-full bg-lime-600 w-2 h-2 mr-2'>

                </div>
                <div className='text-sm'>Winner of the Match</div>
            </div>
        </div>
    )
}

export default Legend