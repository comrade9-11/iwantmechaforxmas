import './app.css'
import ACS from '../src/assets/logos/ACS.png'
import ARS from '../src/assets/logos/ARS.png'
import CMT from '../src/assets/logos/CMT.png'
import EFC from '../src/assets/logos/EFC.png'
import CNT from '../src/assets/logos/CNT.png'
import FTN from '../src/assets/logos/FTN.png'
import OLS from '../src/assets/logos/OLS.png'
import KMN from '../src/assets/logos/KMN.png'
import ARD from '../src/assets/logos/ARD.png'
import ZRT from '../src/assets/logos/ZRT.png'
import SPL from '../src/assets/logos/SPL.png'
import data from './databse.json'
import fullName from './helperFunctions'

export default function App() {
  let teamInOrder = []

  const getPoints = (won, drawn) => {
    return (parseInt(won) * 3 + parseInt(drawn))
  }

  let teamsPoints = []

  for (let i = 0; i < data.length; i++) {
    teamsPoints.push(getPoints(data[i].won, data[i].drawn))
  }

  teamsPoints.sort(function(a, b){return a - b}).reverse()

  for (let i = 0; i < teamsPoints.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (getPoints(data[j].won, data[j].drawn) == teamsPoints[i]) {
        if (teamInOrder.length < data.length) {
          teamInOrder.push(data[j])
        }
      }
    }
  }

  console.log('sui ', teamInOrder)

  return (
    <div>
      <div className='clubs'>
        <img className='logo' src={ACS} />
        <img className='logo' src={ARS} />
        <img className='logo' src={CMT} />
        <img className='logo' src={EFC} />
        <img className='logo' src={CNT} />
        <img className='logo' src={FTN} />
        <img className='logo' src={OLS} />
        <img className='logo' src={KMN} />
        <img className='logo' src={ARD} />
        <img className='logo' src={ZRT} />
      </div>

      <div className='navbar'>
        <a href='/'><img src={SPL} /></a>
        <div className='navlinks'>
          <a href='/'><p>Premiership League ↓</p></a>
          <a href='/community'><p>Community ↓</p></a>
          <a href='/about'><p>About ↓</p></a>
          <a href='/news'><p>News ↓</p></a>
        </div>
      </div>

      <div className='navbartwo'>
        <a href='#Home'><p>Home</p></a>
        <a href='#Fixtures'><p>Fixtures</p></a>
        <a href='#Results'><p>Results</p></a>
        <a href='#Table'><p>Table</p></a>
      </div>

      <div className='content'>
        <div className='games'>
          <Games background='#932532' title='MATCHDAY 1' date='Monday 1 February'/>
        </div>
        <div className='table'>
          <div className='tableContainer'>
            <div className='key'>
              <p>Position</p>
              <p>Club</p>
              <p>Played</p>
              <p>Won</p>
              <p>Drawn</p>
              <p>Lost</p>
              <p>GD</p>
              <p>Points</p>
              <p>Form</p>
            </div>
            {teamInOrder.map(function(object, i) {
              return <TableLine className='line' pos={i+1} team={teamInOrder[i].name} stats={[teamInOrder[i].played, teamInOrder[i].won, teamInOrder[i].drawn, teamInOrder[i].lost]} gd={teamInOrder[i].GD} fullName={fullName(teamInOrder[i].name)} key={i} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export function TableLine(pos, team, stats, gd, fullName) {
  return (
    <div className='line'>
      <div>{pos.pos}</div>
      <div><img className='clubLogoTable' src={eval(pos.team)} /></div>
      <div style={{fontWeight: '800'}}>{pos.fullName}</div>
      <div>{pos.stats[0]}</div>
      <div>{pos.stats[1]}</div>
      <div>{pos.stats[2]}</div>
      <div>{pos.stats[3]}</div>
      <div>{pos.gd}</div>
      <div style={{fontWeight: '800'}}>{parseInt(pos.stats[1]) * 3 + parseInt(pos.stats[2])}</div>
    </div>
  )
}



export function Games(background, title, date) {
  return (
    <div className='gamess' style={{background: `${background}`}}>
      <div className='title'>

      </div>
    </div>
  )
}