import { projects } from '@/data'
import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const RecentProject = () => {
    return (
        <div className='py-20'>
            <h1 className='heading'>
                A small selection of {' '}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
                {
                    projects.map(({ id, title, des, img, iconLists, link }) => (
                        <div>
                            {title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentProject