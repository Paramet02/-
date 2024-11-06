import React from 'react'
import LineWhite from './LineWhite'

function Personal() {
  return (
    <div className="Personal" style={{ fontFamily : "Ubuntu-Light" }}>
        <h2>Personal :</h2>
        <LineWhite />
        <p>
        Nickname : Khing
        <br />
        Age : 21
        <br />
        Date : 22 / 04 / 2003
        <br />
        Sex : Male
        </p>
    </div>
  )
}

export default Personal