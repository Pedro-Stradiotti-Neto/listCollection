import React, { useEffect, useState } from 'react';
import { FiTrash2, FiPlus, FiCheckSquare } from 'react-icons/fi';

import api from '../../services/api';
import VolList from './volList';

import './style.css';

export default function BodyList(props) {
    const userId = localStorage.getItem('userId');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get('books', {
            headers: {
                authorization: userId,
                type: props.type
            }
        }).then(response => {
            setBooks(response.data)
        })
    }, [userId]);

    return (
        <li>
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
            ))
            }
        </li>
    )
}