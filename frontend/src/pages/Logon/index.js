import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiFeather } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import './style.css';
import api from '../../services/api';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const re = await api.post('/session', { id });
            localStorage.setItem('userId', id);
            localStorage.setItem('userName', re.data.nome);
            history.push('/list');
        } catch (error) {
            alert('Falha no Login, tente novamente')
        }
    }

    return (
        <div className="logon-container" >
            <section className="form">

                <img src={logoImg} alt="Books Collection" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input
                        placeholder="Seu ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiFeather size={17} color="#A6A390" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        </div>
    );
}