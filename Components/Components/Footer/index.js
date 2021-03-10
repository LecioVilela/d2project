import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por:
                <a target='_blank' className='hover:underline' href="https://www.linkedin.com/in/l%C3%A9cio-vilela/"> Lécio Vilela</a> /
                <a target='_blank' className='hover:underline' href="https://github.com/LecioVilela"> Github</a>
                <div className='mt-1'>
                    <img className='inline p-4' src='/engrams.png' />
                    <img className='inline p-4' src='/guardian.png' />
                </div>
            </div>

        </div>
    )
}

export default Footer