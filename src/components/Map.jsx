export default function Map(){
    return (
        <div className="map">
            <MapR />
        </div>
    )
}

const MapR = () => {

    

    return (
        <svg className="map-r" id="eFQMcZreh3g1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 657 512" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
            <ConstructionSite />
            <CityCentral />
            <DeadTown />
            <Supermarket />
            <FactorySouth />
            <EasternSlums />
            <Stink />
            <OldMarketplace />
        </svg>
    )
}

const ConstructionSite = () => {
    return (
        <svg className="sector">
            <rect width="271.5137" height="202.093746" rx="0" ry="0" transform="matrix(.960666 0 0 0.911037 0.644023 0.914673)" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
    )
}

const CityCentral = () => {
    return (
        <svg className="sector" >
            <path d="M261.478003,0.914673v289.02402h395.521997v-104.90914h-153.544295v-92.05744h-135.76985v-92.05744h-106.207852Z" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
    )
}

const DeadTown = () => {
    return (
        <svg className="sector">
            <path d="M367.685855,0q0,92.972113,0,92.972113l135.76985-.000001v92.057439L657,185.02955l-.000001-185.029553-289.314144.914673" transform="translate(.000002 0.000003)" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
    )
}

const Supermarket = () => {
    return (
        <svg className="sector">
            <path d="M261.478003,289.938693v91.990581h197.760999l197.760997-91.990582q-395.521995.000002-395.521996.000001Z" transform="translate(.000001 0.000001)" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
    )
}

const FactorySouth = () => {
    return (
        <svg className="sector">
            <path d="M0.644023,315.806222l260.83398,66.123053.000001-196.899723-260.833982-.000001.000001,130.776671Z" transform="translate(.000001 0.000002)" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
    )
}

const EasternSlums = () => {
    return (
        <svg className="sector">
            <path d="M459.239002,381.929275v130.070725l197.761-.000001L657,289.938659L459.239002,381.929275Z" transform="translate(0 0.000004)" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
    )
}

const Stink = () => {
    return (
        <svg className="sector">
            <path d="M328.499999,512.000003L0.644021,511.999999l.000001-68.186331c78.250194,2.034555,260.833981,0,260.833981,0L328.5,470.093341l-.000001,41.906662Z" transform="translate(.000002 0.000001)" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
    )
}

const OldMarketplace = () => {
    return (
        <svg className="sector">
            <path d="M0.644023,315.806223v128.007445h260.833979l67.021999,26.279673-.000002,41.906662l130.739003-.000004v-130.070725h-197.760998L0.644023,315.806223Z" transform="translate(.000001 0.000001)" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
    )
}