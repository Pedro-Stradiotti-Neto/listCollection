const express = require('express');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const users_id = req.headers.authorization;
        const book = await connection('books').select('*').where('users_id', users_id);

        return res.json(book);
    },

    async create(req, res) {
        let { tipo, titulo, volumes, distribuidora, status } = req.body;
        const users_id = req.headers.authorization;
        let registros = [];
        let aux = parseFloat(volumes);
        if (aux >= 1) {
            for (i = 1; i <= aux; i++) {
                volumes = i.toString();
                if (volumes.length == 1) {
                    volumes = '0' + volumes;
                }
                registros.push({ tipo, titulo, volumes, distribuidora, status, users_id })
            }
            const [id] = await connection('books').insert(registros);
            return res.json({ id });
        }

        const [id] = await connection('books').insert({
            tipo,
            titulo,
            volumes,
            distribuidora,
            status
        });
        return res.json({ id });
    },

    async delete(req, res) {
        const { id } = req.params;
        const users_id = req.headers.authorization;

        const books = await connection('books')
            .where('id', id)
            .select('users_id')
            .first();

        if (books.users_id !== users_id) {
            return res.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('books').where('id', id).delete();

        return res.status(204).send();
    }
};