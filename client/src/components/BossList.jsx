import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BossRow from './BossRow'

function BossList() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [bosses, setBosses] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/bosses')
            .then((res) => {
                setBosses(res.data);
                setIsLoaded(true);
            })
            .catch((err) => console.error(err));
    }, [isLoaded])

    return (
        <div className='card mb-3'>
            <div className="card-header d-flex justify-content-between">
                button group here
            </div>
            <div className="card-body">
                <h1>Bosses</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Health</th>
                            <th>Appears On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bosses.map((boss) => (
                            <BossRow key={boss._id} boss={boss} />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="card-footer d-flex justify-content-between">
                button group here?
            </div>
        </div>
    );
}

export default BossList;