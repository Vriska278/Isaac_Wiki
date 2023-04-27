import React from 'react';
import { Link } from 'react-router-dom';
function AdvancedMechanics() {
  return (
    <>
      <div className='container'>
        <div className='card shadow'>
          <div className='card-header d-flex justify-content-center '>
            <h1> Advanced Mechanics and Syngery Tips </h1>
          </div>
          <div className='card-body'>
            <div className='d-flex justify-content-center'>
              <p>
                <ul>
                  <li>
                    If you beat mom under 20 mins you get to go to a boss rush,
                    in which you get to choose one of four items before facing
                    15 waves of bosses with two bosses per wave.
                  </li>
                  <li>
                    Jera and blank card is a powerful combo that can be used to
                    duplicate all items a room multiple times over.
                  </li>
                  <li> More bosses are unlocked by defeating mom 11 times </li>
                  <li>
                    Using the bible on mom instantly kills mom but if you use it
                    on satan it instantly kills you
                  </li>
                  <li>
                    Extra HUD shows you what items you have picked up for better
                    synergies, Found HUD show the stats of the player
                  </li>
                  <li>
                    There are a few transformations, bookworm, mom, beelzebub,
                    fun guy, seraphim, bob, spun, leviathan, and guppy which is
                    the most powerful. These transformations can be obtained by
                    collecting three of X item ie( three mushroom items, three
                    leviathan items, or three guppy items.)
                  </li>
                </ul>
              </p>
            </div>
            <div className='text-end'>
              <Link to='/bosses'>
                <button className='btn btn-danger'>Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancedMechanics;
