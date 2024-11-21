import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const animes = [
        'Jujutsu Kaisen',
        'Hunter x Hunter',
        'One Piece',
        'Naruto',
        'Akame Ga Kill',
        'Dandandan',
        'Code Geass'
    ]

    const [nome, setNome] = useState('')
    const [nota, setNota] = useState('')
    const [imagem, setImagem] = useState('')
    const [anime, setAnime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault() 
        props.aoAnimeCadastrado({
            nome,
            nota,
            imagem,
            anime
        })
        console.log('Form foi submetido => ', nome, nota, imagem, anime)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um card do personagem</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nota" 
                    placeholder="Digite seu cargo"
                    valor={nota}
                    aoAlterado={valor => setNota(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}   
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Animes"
                    animes={animes}
                    valor={anime}
                    aoAlterado={valor => setAnime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario