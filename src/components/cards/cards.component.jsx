import React from 'react'
import CountUp from 'react-countup';
import Card from '../card/card.component';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className="card-deck text-center my-4">
        }

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-primary">Infected</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                    <CountUp
                    start={0} end={confirmed.value}
                    duration="2"
                    separator="," />
                    </h6>
                    <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
                    <div className="card-footer border-primary">
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-success">Recovered</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                    <CountUp
                    start={0} end={recovered.value}
                    duration="2"
                    separator="," />
                    </h6>
                    <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
                    <div className="card-footer border-success">
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-danger">Deaths</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                    <CountUp
                    start={0} end={deaths.value}
                    duration="2"
                    separator="," />
                    </h6>
                    <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
                    <div className="card-footer border-danger">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
