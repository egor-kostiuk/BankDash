import "./NavProfileButton.css";

export const NavProfileButton = ({onClick, img}) => {
  return (
    <div className={'dropdown'}>
      <button className={'nav-profile-button'} onClick={onClick}>
        <img src={img} alt={''}/>
      </button>
      <nav className="dropdown-content">
        <legend>User profile</legend>
        <ul>
          <li>
            <h5>Username</h5>
          </li>
            <hr/>
          <li>
            <button>My profile</button>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}