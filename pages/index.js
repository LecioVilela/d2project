import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../Components/Components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher)
    const xur = () => {
        window.open('https://www.youtube.com/results?search_query=where+is+xur')
    }
    /*return (<pre>{JSON.stringify(data)}</pre>) verificando se os dados estão sendo retornados*/
    return (
        <div>
            <PageTitle title='Seja bem-vindo' />
            <p className='mt-12 text-center'>
                Destiny 2 é um jogo eletrônico de tiro em primeira pessoa multijogador desenvolvido pela Bungie e publicado pela Activision.<br />
                Foi lançado para PlayStation 4 e Xbox One em 6 de setembro de 2017, seguido por uma versão para Microsoft Windows no mês seguinte.<br />
                É a continuação de Destiny e de suas expansões subsequentes.<br /><br />
                O Xur é um vendedor de equipamentos exóticos de Destiny que aparecia todas as semanas, sempre de Sexta-Feira até Domingo, com novos equipamentos exóticos. No primeiro Destiny vendia-te equipamentos exóticos por Strange Coins, mas em Destiny 2 a moeda de troca são os Legendary Shards.
            </p>
            <div className='text-center my-12'>
                <Link href='/cadastro'>
                    <a onClick={xur} target='_blank' className='bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'>
                        Clique aqui para se cadastrar e saber
                        onde está o "Xur", toda sexta-feira!</a>
                </Link>
            </div>
            { !data && <p>Carregando...</p>}
            { !error && data && data.showCoupon &&
                <p className='mt-12 my-12 text-center'>
                    {data.message}
                </p>
            }
        </div>
    )
}

export default Index