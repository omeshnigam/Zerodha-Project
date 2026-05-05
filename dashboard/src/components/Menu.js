import React,{useState}from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const[selectedMenu,setSelectedMenu]=useState(0);
  const[isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);
  const handleMenuClick=(index)=>{
    setSelectedMenu(index);
  }
  const handleProfileClick=(index)=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }
  const menuClass="menu";
  const activeMenuClass="menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}>
            <p className={selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClick(1)}>
            <p className={selectedMenu===1?activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuClick(2)}>
            <p className={selectedMenu===2?activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}>
            <p className={selectedMenu===3?activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}>
            <p className={selectedMenu===4?activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuClick(5)}>
            <p className={selectedMenu===5?activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        <button
          onClick={() => { window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/`; }}
          style={{
            marginTop: '10px',
            padding: '5px 14px',
            background: 'linear-gradient(135deg, #e8533f 0%, #d4432f 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            width: 'auto',
            letterSpacing: '0.3px'
          }}
          onMouseOver={(e) => e.target.style.opacity = '0.85'}
          onMouseOut={(e) => e.target.style.opacity = '1'}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Menu;
