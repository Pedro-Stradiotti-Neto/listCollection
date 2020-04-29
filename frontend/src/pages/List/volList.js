import React, { useEffect, useState } from 'react';
import { FiCheck } from 'react-icons/fi'

import api from '../../services/api';

import './style.css';

export default function VolList(props) {
    const userId = localStorage.getItem('userId');
    const [bookDetail, setBookDetail] = useState([]);

    useEffect(() => {
        api.get('booksDetail', {
            headers: {
                authorization: userId,
                bookName: props.title
            }
        }).then(response => {
            setBookDetail(response.data)
        })
    }, [userId]);


    return (
        <li>
            {bookDetail.map(bookDetail => (
                <div className="card-body adquired" key={bookDetail.id}>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="check1" />
                        <label className="form-check-label" htmlFor="check1">
                            Volume {bookDetail.volumes}
                        </label>
                    </div>
                    <FiCheck className="icon" size={20} color="#A6A390" />
                </div>
            ))
            }
        </li>
    );
}