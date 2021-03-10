import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <p className='mt-12 text-center'>
                Destiny 2 é um jogo eletrônico de tiro em primeira pessoa multijogador desenvolvido pela Bungie e publicado pela Activision.<br />
                Foi lançado para PlayStation 4 e Xbox One em 6 de setembro de 2017, seguido por uma versão para Microsoft Windows no mês seguinte.<br />
                É a continuação de Destiny e de suas expansões subsequentes.
            </p>

            <div className='text-center my-12'>
                <Link href='https://www.youtube.com/results?search_query=where+is+xur'>
                    <a target='_blank' className='bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'>
                        Clique aqui para saber
                        onde está o "Xur", toda sexta-feira!</a>
                </Link>
            </div>

            <p className='mt-12 my-12 text-center'>
                O Xur é um vendedor de equipamentos exóticos de Destiny que aparecia todas as semanas, sempre de Sexta-Feira até Domingo, com novos equipamentos exóticos.<br />
                No primeiro Destiny vendia-te equipamentos exóticos por Strange Coins, mas em Destiny 2 a moeda de troca são os Legendary Shards.
            </p>

        </div>
    )
}

export default Index