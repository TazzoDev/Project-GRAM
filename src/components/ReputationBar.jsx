export default function ReputationBar(repData){

    return(
    <div className="progress-bar">
      <div className="filled" style={{ width: `${repData.reputation}%` }}></div>
      <div className="marker" style={{ left: `${repData.prices}%` }}></div>
    </div>
    )
}