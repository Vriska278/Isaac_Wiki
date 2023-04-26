import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function BossDetails () {
    const {id} = useParams();
    const [boss, setBoss] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/bosses/${id}`)
            .then((res) => {
                setBoss(res.data);
            })
            .catch((err) => console.error(err));
    },[id]);

    return (
        boss&& <>
            <div className="container">
                <div className="card shadow">
                    <div className="card-header d-flex justify-content-center">
                        <h1>{boss.name}</h1>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-center"><img src={boss.spriteUrl} alt="Boss Sprite" /></div>
                    <ul>
                        <li>Health: {boss.health}</li>
                        <li>Chapter: {boss.chapter}</li>
                        <li>Appears On Floors: {boss.floors}</li>
                        <li>Behavior: {boss.behavior}</li>
                    </ul>
                    <div className="text-end"><Link to="/bosses"><button className="btn btn-danger">Home</button></Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BossDetails;