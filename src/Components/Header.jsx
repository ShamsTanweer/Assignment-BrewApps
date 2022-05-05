import React from 'react'
import { AiFillCheckCircle, AiFillFire } from 'react-icons/ai';
import { GiCutDiamond, GiByzantinTemple, GiTornado, GiGorilla } from 'react-icons/gi';

function Header() {
  return (
    <div className='headSection'>
    <h1>Live Spaces</h1>
     <p><AiFillCheckCircle/> All NFTs on cyber either belong to or were minted by their space creator.</p>
     <div className='btns'>
     <button className='headButton'><AiFillFire/> 24th trending</button>
     <button className='headButton'>Latest Shows</button>
     <button className='headButton'>Most Popular</button>
     <button className='headButton'><GiCutDiamond/>In Genesis</button>
     <button className='headButton'><GiByzantinTemple/> In Temple</button>
     <button className='headButton'><GiTornado/>In Void</button>
     <button className='headButton'><GiGorilla/>#BAYC</button>
     </div>

  </div>
  )
}

export default Header