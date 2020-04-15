import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiTrash2, FiCheck, FiX, FiPlus, FiCheckSquare } from 'react-icons/fi'

import './style.css';

import logoImg from '../../assets/logo.png';

export default function List() {
    return (
        <div className="list-container">
            <header>
                <img src={logoImg} alt="Books Collection" />
                <span>Bem Vindo(a), Pedro</span>

                <Link className='button' to="/profile-edit">
                    Editar meu perfil
                </Link>
                <button>
                    <FiLogOut size={26} color="#A6A390" />
                </button>
            </header>

            <h1>Coleção de Livros - Em Andamento</h1>

            <ul>
                <li>
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        No Game No Life
                                    </button>
                                    <button className="erase">
                                        <FiTrash2 size={20} color="#A6A390" />
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body group-body">
                                    <label>Edições Disponíveis</label>
                                    <label>Já Possuo?</label>
                                </div>
                                <div className="card-body adquired">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Volume 1
                                          </label>
                                    </div>
                                    <FiCheck className="icon" size={20} color="#A6A390" />
                                </div>
                                <div className="card-body adquired">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                        <label className="form-check-label" htmlFor="defaultCheck2">
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

                <li>
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        Sword Art Online
                                    </button>
                                    <button className="erase">
                                        <FiTrash2 size={20} color="#A6A390" />
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body group-body">
                                    <label>Edições Disponíveis</label>
                                    <label>Já Possuo?</label>
                                </div>
                                <div className="card-body adquired">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                                        <label className="form-check-label" htmlFor="defaultCheck3">
                                            Volume 1
                                          </label>
                                    </div>
                                    <FiCheck className="icon" size={20} color="#A6A390" />
                                </div>
                                <div className="card-body adquired">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                                        <label className="form-check-label" htmlFor="defaultCheck4">
                                            Volume 2
                                          </label>
                                    </div>
                                    <FiCheck className="icon" size={20} color="#A6A390" />
                                </div>

                                <div className="">

                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <h1>Coleção de Livros - Finalizados</h1>

            <ul>
                <li>
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header" id="headingTres">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTres" aria-expanded="true" aria-controls="collapseOne">
                                        FullMetal Alchemist
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
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck5" />
                                        <label className="form-check-label" htmlFor="defaultCheck5">
                                            Volume 1
                                          </label>
                                    </div>
                                    <FiCheck className="icon" size={20} color="#A6A390" />
                                </div>
                                <div className="card-body adquired">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck6" />
                                        <label className="form-check-label" htmlFor="defaultCheck6">
                                            Volume 27
                                          </label>
                                    </div>
                                    <FiCheck className="icon" size={20} color="#A6A390" />
                                </div>

                                <div className="group-button">

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
                            <div className="card-header" id="headingQuatro">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseQuatro" aria-expanded="true" aria-controls="collapseOne">
                                        Demons Slayer
                                    </button>
                                    <button className="erase">
                                        <FiTrash2 size={20} color="#A6A390" />
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseQuatro" className="collapse" aria-labelledby="headingQuatro" data-parent="#accordion">
                                <div className="card-body group-body">
                                    <label>Edições Disponíveis</label>
                                    <label>Já Possuo?</label>
                                </div>
                                <div className="card-body adquired">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck7" />
                                        <label className="form-check-label" htmlFor="defaultCheck7">
                                            Volume 1
                                          </label>
                                    </div>
                                    <FiX className="icon" size={20} color="#A6A390" />
                                </div>
                                <div className="card-body adquired">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck8" />
                                        <label className="form-check-label" htmlFor="defaultCheck8">
                                            Volume 2
                                          </label>
                                    </div>
                                    <FiX className="icon" size={20} color="#A6A390" />
                                </div>

                                <div className="group-button">

                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    );
}