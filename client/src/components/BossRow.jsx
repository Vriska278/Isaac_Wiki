import { Link } from "react-router-dom";

function BossRow({ boss }) {


    return (
        <tr id={boss._id}>
            <td className="align-middle">
                <Link to={`/bosses/${boss._id}`}>{boss.name}</Link>
            </td>
            <td className="align-middle">
                {boss.health}
            </td>
            <td className="align-middle">
                {boss.floors}
            </td>
        </tr>
    )
}

export default BossRow;