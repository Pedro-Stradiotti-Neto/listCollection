import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiBook } from 'react-icons/fi';
import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.png';

export default function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [sexo, setSexo] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            sexo
        };

        try {
            const response = await api.post('/users', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (error) {
            alert('Não foi possível realizar seu cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Books Collection" />
                    <h1>Faça seu Cadastro</h1>
                    <p>Começe hoje mesmo a criar uma lista dos seus livros de forma organizada e sem dificuldades.</p>
                    <Link className="back-link" to="/">
                        <FiBook size={17} color="#A6A390" />
                        Já estou cadastrado
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Sexo"
                        value={sexo}
                        onChange={e => setSexo(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
