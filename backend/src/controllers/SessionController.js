const express = require('express');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        const user = await connection('users')
            .where('id', id)
            .select('nome')
            .first();

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado, tente novamente!' });
        }

        return res.json(user);
    }
};