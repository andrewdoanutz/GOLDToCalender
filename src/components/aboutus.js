import React, { Component } from 'react'
import Profile from './profile'


import "../css/about.css";


export default class About extends Component {
  render() {
    return (
      
      <div className="profiles">
        <div className="andrew">
        <Profile image="https://media.licdn.com/dms/image/C5603AQHaYrsskcDsfw/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=iHRfLOcCBX2TKZRN4UcvFWu8Ndr7_NO0Zsfsk6_BEtw" 
        name="Andrew Doan"
        yearMajor="3rd Year Computer Engineer"
        linkedIn="https://www.linkedin.com/in/andrewadoan/"
        />
        </div>
        <div className="benson">
        <Profile image="https://media.licdn.com/dms/image/C5603AQEqQFxxFRM8_w/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=1e55cAZ29kbxtPYfIZXzTlUL0X1eT3fJ3PlcBlM7Qz8"
        name="Benson Chu"
        yearMajor="3rd Year Computer Science"
        linkedIn="https://www.linkedin.com/in/benson-chu-566a40107/"
        />
        </div>
        <div className="tim">
        <Profile image="https://media.licdn.com/dms/image/C5603AQH5QVRBGzwu7A/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=8U_ap4XUIBp0OL6scg75p2CPEuVCuY9oaDEY4n8JoZI"
        name="Tim Chang"
        yearMajor="3rd Year Computer Engineer"
        linkedIn="https://www.linkedin.com/in/timchang2167/"
        />
        </div>
      </div>
    )
  }
}
