import React from 'react';

function SecretRooms() {
  return (
    <>
      <div className='container'>
        <div className='card shadow'>
          <div className='card-header d-flex justify-content-center '>
            <h1> Secret Rooms </h1>
          </div>
          <div className='card-body'>
            <div className='d-flex justify-content-center'>
              <h1>Secret Rooms</h1>
              <p>
                Secret Rooms are rooms that are not normally visible on the map
                and are usually accessed by bombing a wall leading to them.
                Regular Secret Rooms are usually located next to 3 or 4 rooms,
                while Super Secret Rooms can only be next to one room; they are
                placed on one of the dead ends generated on the map, similar to
                other Special Rooms. Very rarely, the regular Secret Room may
                also be located next to only one room. Entrances to Secret Rooms
                will never have rocks or gaps in the way. Super Secret Rooms are
                only located next to one other room.Super Secret Rooms are most
                likely to be found either at the end of a series of rooms that
                lead to a dead-end, and is particularly likely to appear near
                the Boss Room, as they are the second room type to be placed on
                a map during Map Generation, and are therefore placed far away
                from the room Isaac starts in.
              </p>
              <h1> Ultra Secret Rooms </h1>
              <p>
                Ultra Secret Rooms are special rooms that are not connected to
                any other room on the map directly. They are not revealed by
                most mapping effects , The Mind, etc, and can only be revealed
                on the map with Cracked Orb, Book of Secrets wisps, and Rune
                Shard. They can be accessed directly by opening Red Rooms
                adjacent to them using Red Key or Red Key wisps, Crystal Key,
                Cracked Key, and Soul of Cain: entering a Red Room next to the
                Ultra Secret room will reveal its position and automatically
                open the doorway leading into it. It can also be entered by
                teleporting to it using XVIII - The Moon?; when teleported into,
                a pathway of Red Rooms back to the rest of the level will be
                opened automatically. Ultra Secret rooms contain items from the
                Ultra Secret Room item pool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecretRooms;
