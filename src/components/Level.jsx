import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";


export default function LevelProgressBar({ level,  points, nextLevelPoints }){
    return(
        <CircularProgressbarWithChildren
            value={points}
            maxValue={nextLevelPoints}
            styles={{
                
                // Customize the root svg element
                root: {
                    padding: '3px'
                },
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: '#088C6F',
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'round',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  strokeWidth: '8px'
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: 'transparent',
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'round',
                  
                  
                },
              }}
        >
            <p style={{
                color: '#fff',
                fontSize: '35px',
                fontWeight: '400',
                marginTop: '-12px'
            }}>
                {level}
            </p>
        </CircularProgressbarWithChildren>
    )
}