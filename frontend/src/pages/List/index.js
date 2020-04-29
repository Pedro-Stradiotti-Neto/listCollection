import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'

import BodyList from './bodyList';

import './style.css';

import logoImg from '../../assets/logo.png';

export default function List() {
    const userName = localStorage.getItem('userName');
    const typeObras = ['Em Andamento', 'Finalizado', 'Títulos Futuros']

    return (
        <div className="list-container">
            <header>
                <img src={logoImg} alt="Books Collection" />
                <span>Bem Vindo(a), {userName}</span>

                <Link className='button' to="/profile-edit">
                    Editar meu perfil
                </Link>
                <button>
                    <FiLogOut size={26} color="#A6A390" />
                </button>
            </header>

            <h1>Coleção de Livros - {typeObras[0]}</h1>

            <ul>
                <BodyList type={typeObras[0]} />
            </ul>

            <h1>Coleção de Livros - {typeObras[1]}</h1>

            <ul>
                <BodyList type={typeObras[1]} />
            </ul>

            <h1>Coleção de Livros - {typeObras[2]}</h1>

            <ul>
                <BodyList type={typeObras[2]} />
            </ul>

        </div>
    );
}