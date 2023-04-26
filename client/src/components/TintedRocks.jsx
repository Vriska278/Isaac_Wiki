import { Link } from "react-router-dom";
import rocks from "../assets/Tinted_Rocks_Repentance.png"
import specialRocks from '../assets/Repentance_super_special_rocks.png'

function TintedRocks() {
  return (
    <>
      <div className="container">
        <div className="card shadow mb-5">
          <div className="card-header d-flex justify-content-center ">
            <h1> Tinted Rocks </h1>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-center mb-2">
              <img className="w-50" src={rocks} alt="Tinted Rocks" />
            </div>
            <div className="border-bottom mb-3">
              <p>
                Tinted Rocks are a type of special rock that will randomly spawn in rooms throughout a playthrough. They are distinguished from other "normal" rocks by a small "x" on their face as well as being slightly discolored from the other rocks that appear in a given floor (see image above for examples). Only one Tinted Rock can spawn per room. Using a bomb or other explosive item/ability, these rocks can be broken and have a chance to spawn 1-3 of the following items:
              </p>
              <ul>
                <li>Soul Hearts</li>
                <li>Keys</li>
                <li>Bombs</li>
                <li>A combination of any of the above spawns</li>
                <li>Gold Chest (only 1)</li>
                <li>Standard Chest (only 1)</li>
                <li>Tinted rock spider enemies (only on Ashpit and Mines floors)</li>
                <li>The Small Rock item (once it is unlocked)</li>
              </ul>
              <p>
                Destroying 10 Tinted Rocks will unlock the item MR. MEGA,
                Destroying 100 will unlock The Small Rock item<br></br>
                Developing the ability to spot these rocks can significantly improve your run win rate. The soul hearts they can provide will make you live longer and protect your red heart HP to be used for devil deals and other HP related transactions.
              </p>
            </div>
            <div className="d-flex justify-content-center mb-2">
              <img className="w-50" src={specialRocks} alt="special rocks" />
            </div>
            <div className="border-bottom mb-2">
              <p>
                Another subset of Tinted Rocks exist called "Super Special Rocks" (see image above for examples). The "x" indicator for these is much smaller and less pronounced. As well this subset lacks the discoloration that normal tinted rocks have making them much more difficult to spot on the fly. These rocks appear in runs after obtaining the 5 nights at mom's achievement (beating mom with 5 different characters).
              </p>
              <p>
                Super Special Rocks require 2 bombs, or explosions in general, to destroy and drop double the contents of a normal tinted rock with the exeption of chests and The Small Rock item.
              </p>
            </div>
            <div className="text-end"><Link to="/bosses"><button className="btn btn-danger">Home</button></Link></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TintedRocks;
