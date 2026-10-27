import { NavLink } from "react-router"
import options from '../lib/options'

const Dashboard = () => {
  return (
    <div className="font-light bg-danger h-full">
        
        <ul className="flex flex-col gap-2">
            {options.map((opt)=>{
                return (<li key={opt.name}>
                    <NavLink to={`${opt.path}`}>{opt.name}</NavLink>
                </li>)
            })}
        </ul>
    </div>
  )
}

export default Dashboard