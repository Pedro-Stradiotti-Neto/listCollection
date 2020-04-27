const express = require('express');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const users_id = req.headers.authorization;
        const bookName = req.headers.bookname;

        console.log(users_id, bookName);

        const book = await connection('booksDetail').select('*').where({
            'titulo': bookName,
            'users_id': users_id
        });

        return res.json(book);
    }
};