import React from 'react';


import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string
    whatsapp: string;
}

export interface TeacerItemProps {
    teacher: Teacher;
}


const TeacherItem: React.FC<TeacerItemProps> = ({ teacher }) => {
    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />

                <div>
                    <strong>{teacher.name} </strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>

                <a 
                    target="_blank" 
                    onClick={createNewConnection} 
                    href={`https://wa.me/${teacher.whatsapp}`}>
                    
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;
