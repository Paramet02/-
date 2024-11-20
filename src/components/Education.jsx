import React from 'react'
import Line from './Line'

function Education() {
  return (
    <div className="Education" style={{ fontFamily : "Ubuntu-Light" }}>
        <h2>Education :</h2>
        <Line />
        <h2><pre>Triamudomsuksa <br />
        pattanakarn pathumthani             2016 - 2022</pre></h2>
        <p>
        80/4 Lam Luk Ka Road, Lam Luk Ka Subdistrict,
        <br /> Lam Luk Ka District, Pathum Thani 12150, Thailand
        </p>
        <h2><pre>Sripatum University                 2022 - 2025</pre></h2>
        <p>
        2410/2 Phaholyothin Road, Chatuchak, 
        <br />
        Bangkok 10900, Thailand
        </p>
    </div>
  )
}

export default Education
