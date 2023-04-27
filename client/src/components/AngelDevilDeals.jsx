function AngelDevilDeals() {
  return (
    <>
      <div className='container'>
        <div className='card shadow'>
          <div className='card-header d-flex justify-content-center '>
            <h1> Angel & Devil Deals </h1>
          </div>
          <div className='card-body'>
            <div className='d-flex flex-row'>
              <img
                src='https://steamuserimages-a.akamaihd.net/ugc/1709661497156341165/D56B3F824111285B5154D4475A92444408418AC6/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
                alt='angel room'
              />
              <img
                src='https://steamuserimages-a.akamaihd.net/ugc/1764828940392354264/20371CF772ACACB2C6946CDBBA4E9C850E51AD57/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
                alt='devil room'
                style={{ width: 600 }}
              />
            </div>
            <p>
              Devil rooms at the start of the every floor past the first floor
              have a 100 percent chance of spawning. One of those ways it to
              take no red heart damage on the current floor. Another option is
              taking no red heart damage during a boss fight, this increases the
              chance to get a devil deal by 35 percent.
            </p>
            <p>
              Having certain items also increase the percentage chance of a
              devil deal appearing. These items include the pentagram, Book of
              revelations, goat head, the book of belilal, black candle, satanic
              bible wisps.
            </p>
            <p>
              Soul hearts and black hearts protect your chance of a devil deals
              if damage is taken. If a devil deal is taken, only devil deals
              will occur for the rest of the run. For Angel Rooms to appear two
              conditions must be met. The first condition is a devil must has
              spawned on a previous floor. The second condition is no devil deal
              made up until that point in the run.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AngelDevilDeals;
