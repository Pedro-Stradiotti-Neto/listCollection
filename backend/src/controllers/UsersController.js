const express = require('express');
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const user = await connection('users').select('*');

        return res.json(user);
    },

    async create(req, res) {
        const { nome, email, sexo } = req.body;
        const id = crypto.randomBytes(3).toString('HEX');

        await connection('users').insert({
            id,
            nome,
            email,
            sexo,
        });

        return res.json({ id });
    },

    async delete(req, res) {
        const users_id = req.headers.authorization;

        await connection('users').where('id', users_id).first().delete();
        await connection('books').where('users_id', users_id).delete();

        return res.status(204).send();
    }
};