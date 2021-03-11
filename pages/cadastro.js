/*<pre> 
{JSON.stringify(form, null, 2)} Mostra na tela o que está sendo preenchido
</pre>
cupon: {JSON.stringify(retorno)} <- Mostra na tela quando VERDADEIRO

                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        Seu cupom: <br />
                        <span className='font-bold'>{retorno.Cupom}</span>
                    </div>                                                                      ESSE BLOCO MOSTRA NA TELA O CUPOM E MENSAGEM PARA O CLIENTE
                }
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        <span className='font-bold'>{retorno.Promo}</span>
                    </div>
                }
*/

import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import PageTitle from '../Components/Components/PageTitle'

const Cadastro = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const [sucess, setSucess] = useState(false)
    const [retorno, setRetorno] = useState({})
    const save = async () => {
        //return 1

        const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })
        const data = await response.json()
        setSucess(true)
        setRetorno(data)

        //console.log(data)
    }
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }
    return (
        <div className='pt-6'>
            <PageTitle title='Cadastro' />
            <h1 className='text-center font-bold my-4 text-2xl'>Cadastre-se para receber a newsletter</h1>
            <p className='text-center mb-6'>
                Xur viaja pela galáxia e toda semana abre uma loja em um local giratório onde venderá alguns exóticos aleatórios.  Você o encontrará em uma área diferente a cada semana, então a pergunta sempre será … onde está Xur hoje?  Bem, nós teremos a área exata em que você pode encontrá-lo assim que ele aparecer, porque ele pode ser bem difícil de localizar às vezes.  Sua seleção de itens muda, o que lhe dará a chance de comprar algumas armaduras exóticas raras, engramas e armas que você normalmente não terá acesso em D2.
            </p>
            { !sucess && <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Seu nome: </label>
                <input type='text' className='p-4 block shadow my-2 rounded-lg bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
                <label className='font-bold'>Email: </label>
                <input type='text' className='p-4 block shadow my-2 rounded-lg bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
                <label className='font-bold'>Whatsapp: </label>
                <input type='text' className='p-4 block shadow my-2 rounded-lg bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
                <label className='font-bold'>Quantos pontos você daria para o meu projeto?</label>
                <div className='flex py-6'>
                    {notas.map(nota => {
                        return (
                            <label className='block w-1/6 text-center mr-10'>
                                {nota}<br />
                                <input type='radio' name='Nota' value={nota} onChange={onChange} />
                            </label>)
                    })
                    }
                </div>
                <button className='bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow mb-2 ml-1 mt-2' onClick={save}>Enviar cadastro! 📩</button>
            </div>}
            { sucess && <div className='w-1/5 mx-auto'>
                <p className='bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50 border border-yellow-500 rounded-lg text-yellow-500 px-4 py-3 text-center mb-6'>Obrigado por contruibuir com meu projeto! Espero que goste do conteúdo.</p>
                <Link href='/'>
                    <button className='bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow mb-2 ml-1 mt-2'> ↩ Voltar para página principal.</button>
                </Link>
            </div>}
        </div>
    )
}

export default Cadastro