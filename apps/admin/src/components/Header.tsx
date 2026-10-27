import { Logs, X} from "lucide-react";
type HeaderProps = {
  isSideBarOpen: boolean;
  toggleSidebar: () => void;
};

const Header = ({ isSideBarOpen ,toggleSidebar}:HeaderProps) => {
  return (
    <header className="flex items-center gap-4 border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
<button onClick={toggleSidebar}>
 {isSideBarOpen? <X/>: <Logs/>} 
</button>

      <>
      <img src='./logo.webp' alt='logo' className="h-10 w-10 object-contain"></img>
        <h1 className="text-xl font-semibold text-gray-800">Clinic Management Admin Panel</h1></>
        
    </header>
  )
}

export default Header
