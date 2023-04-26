import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';


import BossRow from './BossRow'
import ReactTabs from './ReactTabs';

function BossList() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [bosses, setBosses] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/bosses')
            .then((res) => {
                setBosses(res.data);
                setIsLoaded(true);
            })
            .catch((err) => console.error(err));
    }, [isLoaded])

    const filterBosses = () => {
        if(filter == "All"){
            return [...bosses]
        }
        else{
            return bosses.filter((boss) => boss.chapter == filter);
        }
    }
    const filteredBosses = filterBosses();
    return (
        <Fragment>
            <ReactTabs setFilter={setFilter} />
            <div className='card mb-3'>
                <div className="card-header d-flex justify-content-between">
                    <h1>Bosses</h1>
                </div>
                <div className="card-body pb-0">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Health</th>
                                <th>Appears On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBosses.map((boss) => (
                                <BossRow key={boss._id} boss={boss} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
}

export default BossList;