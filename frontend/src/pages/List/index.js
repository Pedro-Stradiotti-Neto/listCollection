import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiTrash2, FiCheck, FiX, FiPlus, FiCheckSquare } from 'react-icons/fi'

import api from '../../services/api';
import VolList from './volList';

import './style.css';

import logoImg from '../../assets/logo.png';
import { useState } from 'react';

export default function List() {
    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get('books', {
            headers: {
                authorization: userId,
            }
        }).then(response => {
            setBooks(response.data)
        })
    }, [userId]);

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

            <h1>Coleção de Livros - Em Andamento</h1>

            <ul>
                {books.map(books => (
                    <li key={books.id}>
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" id="headingUm">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" data-toggle="collapse" data-target={"#" + books.titulo.slice(0, 3)} aria-expanded="true" aria-controls="collapseOne">
                                            {books.titulo}
                                        </button>
                                        <button className="erase">
                                            <FiTrash2 size={20} color="#A6A390" />
                                        </button>
                                    </h5>
                                </div>
                                <div id={books.titulo.slice(0, 3)} className="collapse" aria-labelledby="headingUm" data-parent="#accordion">
                                    <div className="card-body group-body">
                                        <label>Edições Disponíveis</label>
                                        <label>Já Possuo?</label>
                                    </div>
                                    <ul>
                                        <VolList title={books.titulo} />
                                    </ul>
                                    <div className="group-icons">
                                        <div className="group-left">
                                            <button className="edit-icons">
                                                <FiPlus size={20} color="#A6A390" />
                                            Adicionar Novo Volume
                                        </button>
                                        </div>

                                        <div className="group-right">
                                            <button className="edit-icons">
                                                Editar
                                            <FiCheckSquare size={20} color="#A6A390" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <h1>Coleção de Livros - Finalizados</h1>

            <ul>
                <li>
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header" id="headingDois">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseDois" aria-expanded="true" aria-controls="collapseOne">
                                        Full Metal Achemist
                                    </button>
                                    <button className="erase">
                                        <FiTrash2 size={20} color="#A6A390" />
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseDois" className="collapse" aria-labelledby="headingDois" data-parent="#accordion">
                                <div className="card-body group-body">
                                    <label>Edições Disponíveis</label>
                                    <label>Já Possuo?</label>
                                </div>
                                <div className="card-body adquired">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check3" />
                                        <label className="form-check-label" htmlFor="check3">
                                            Volume 1
                                          </label>
                                    </div>
                                    <FiCheck className="icon" size={20} color="#A6A390" />
                                </div>
                                <div className="card-body adquired">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check4" />
                                        <label className="form-check-label" htmlFor="check4">
                                            Volume 2
                                          </label>
                                    </div>
                                    <FiX className="icon" size={20} color="#A6A390" />
                                </div>

                                <div className="group-icons">
                                    <div className="group-left">
                                        <button className="edit-icons">
                                            <FiPlus size={20} color="#A6A390" />
                                            Adicionar Novo Volume
                                        </button>
                                    </div>

                                    <div className="group-right">
                                        <button className="edit-icons">
                                            Editar Entregas
                                            <FiCheckSquare size={20} color="#A6A390" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <h1>Coleção de Livros - Títulos Futuros</h1>

            <ul>
                <li>
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header" id="headingTres">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTres" aria-expanded="true" aria-controls="collapseOne">
                                        Demons Slayer
                                    </button>
                                    <button className="erase">
                                        <FiTrash2 size={20} color="#A6A390" />
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseTres" className="collapse" aria-labelledby="headingTres" data-parent="#accordion">
                                <div className="card-body group-body">
                                    <label>Edições Disponíveis</label>
                                    <label>Já Possuo?</label>
                                </div>
                                <div className="card-body adquired">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="check5" />
                                        <label className="form-check-label" htmlFor="check5">
                                            Volume 1
                                          </label>
                                    </div>
                                    <FiCheck className="icon" size={20} color="#A6A390" />
                                </div>
                                <div className="card-body adquired">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check6" />
                                        <label className="form-check-label" htmlFor="check6">
                                            Volume 2
                                          </label>
                                    </div>
                                    <FiX className="icon" size={20} color="#A6A390" />
                                </div>

                                <div className="group-icons">
                                    <div className="group-left">
                                        <button className="edit-icons">
                                            <FiPlus size={20} color="#A6A390" />
                                            Adicionar Novo Volume
                                        </button>
                                    </div>

                                    <div className="group-right">
                                        <button className="edit-icons">
                                            Editar Entregas
                                            <FiCheckSquare size={20} color="#A6A390" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    );
}