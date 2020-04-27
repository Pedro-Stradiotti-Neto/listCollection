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
        let possui = 'no';
        let aux = parseFloat(volumes);
        if (aux >= 1) {
            for (i = 1; i <= aux; i++) {
                volumes = i.toString();
                if (volumes.length == 1) {
                    volumes = '0' + volumes;
                }
                registros.push({ titulo, volumes, possui, users_id })
            }
            const [idB] = await connection('booksDetail').insert(registros);
            const [id] = await connection('books').insert({
                tipo,
                titulo,
                distribuidora,
                status,
                users_id
            });
            return res.json({ idB, id });
        }
        const [idB] = await connection('booksDetail').insert({
            titulo,
            volumes,
            possui,
            users_id
        });
        const [id] = await connection('books').insert({
            tipo,
            titulo,
            distribuidora,
            status,
            users_id
        });
        return res.json({ idB, id });
    },

    async delete(req, res) {
        const { id } = req.params;
        const { users_id, titulo: bookName } = req.body;

        const books = await connection('books')
            .where({
                'id': id,
                'titulo': bookName
            })
            .select('users_id', 'titulo');

        if (books[0].users_id !== users_id) {
            return res.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('books').where('id', id).delete();
        await connection('booksDetail').where('titulo', bookName).delete();

        return res.status(204).send();
    }
};