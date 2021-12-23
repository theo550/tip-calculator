import React, { useState } from 'react'
import './bill.css'

function Main() {

  const [bill, setBill] = useState('')
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(1)

  const handleChange = (e) =>{
    setBill(Number(e.target.value))
  }

  const handleTip = (e) => {
    setTip(Number(e.target.classList[1])/100)
  }

  const handleCustomTip = (e) => {
    setTip(Number(e.target.value)/100)
  }

  const handlePeople = (e) => {
    setPeople(e.target.value)
  }

  const reset = () => {
    setTip(0)
    setBill('')
    setPeople(1)
  }

  return (
    <div className='container'>
      <div className="left">
        <h3>Bill</h3>
        <i className="fas fa-dollar-sign dollar"></i>
        <input className='input' type="text" value={bill} onChange={handleChange} />
        <h3>Select tip %</h3>
        <div className="tips">
          <div onClick={handleTip} className="tip-amount 5">5%</div>
          <div onClick={handleTip} className="tip-amount 10">10%</div>
          <div onClick={handleTip} className="tip-amount 15">15%</div>
          <div onClick={handleTip} className="tip-amount 20">20%</div>
          <div onClick={handleTip} className="tip-amount 25">25%</div>
          <input onChange={handleCustomTip} className="tip-amount custom" placeholder='Custom'/>
        </div>
        <h3>Number of people</h3>
        <i className="fas fa-user-alt user"></i>
        <input className='input' value={people} onChange={handlePeople} type="number" min={1} />
      </div>

      <div className="right">
        <div className="total">
          <div className="text">
            <h3>Tip amount</h3>
            <p>/ person</p>
          </div>
          <p className='total-tips'>${(tip * bill / people).toFixed(2)}</p>
        </div>

        <div className="total">
          <div className="text">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <p className='total-tips'>${Number((bill + (tip * bill)) / people).toFixed(2)}</p>
        </div>

        <div className="total-amount">
          <p className='total-tips'>${bill + (tip * bill)}</p>
          <p>total amount</p>
        </div>

        <button onClick={reset} className='reset'>Reset</button>
      </div>
    </div>
  )
}

export default Main
