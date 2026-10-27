import options from '../../lib/options'
import { NavLink } from 'react-router'

type SideBarProps = {
  isOpen: boolean;
};

const SideBar = ({ isOpen }: SideBarProps) => {
  return (
    <aside
      inert={!isOpen}
      className={`absolute inset-y-0 left-0 z-10 pl-[50px] bg-white transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
<ul className="flex flex-col gap-2">
            {options.map((opt)=>{
                return (<li key={opt.name}>
                    <NavLink to={`${opt.path}`}>{opt.name}</NavLink>
                </li>)
            })}
        </ul>
    </aside>
  )
}

export default SideBar
