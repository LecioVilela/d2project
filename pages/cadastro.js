import React from 'react'
import Link from 'next/link'

const Cadastro = () => {
    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-4 text-2xl'>Cadastre-se para receber a newsletter</h1>
            <p className='text-center mb-6'>
                Xur viaja pela galáxia e toda semana abre uma loja em um local giratório onde venderá alguns exóticos aleatórios.  Você o encontrará em uma área diferente a cada semana, então a pergunta sempre será … onde está Xur hoje?  Bem, nós teremos a área exata em que você pode encontrá-lo assim que ele aparecer, porque ele pode ser bem difícil de localizar às vezes.  Sua seleção de itens muda, o que lhe dará a chance de comprar algumas armaduras exóticas raras, engramas e armas que você normalmente não terá acesso em D2.
            </p>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Seu nome: </label>
                <input type='text' className='p-4 block shadow my-2 rounded-lg bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100' />
            </div>
        </div>
    )
}

export default Cadastro