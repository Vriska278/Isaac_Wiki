import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function BossList() {
    const url = 'http://localhost:8000/api/bosses';
    const [bosses, setBosses] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/bosses')
            .then((res) => {
                console.log(res)
                setBosses(res.data);
            })
            .catch((err) => console.error(err));
    }, [])

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
                            <tr key={boss._id}>
                                <td><Link to={`/bosses/${boss._id}`}>{boss.name}</Link></td>
                                <td>{boss.health}</td>
                                <td>{boss.floors}</td>
                            </tr>
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