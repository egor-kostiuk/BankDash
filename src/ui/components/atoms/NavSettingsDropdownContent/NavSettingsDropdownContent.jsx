import "./NavSettingsDropdownContent.css"

export const NavSettingsDropdownContent = ({img, title, time, className}) => {
  return (
    <>
      <div className={`${className}`}>
        <div className={'notifications-img'}>
          <img src={img} alt="icon"/>
        </div>
        <div className={'notifications-box'}>
          <span className={'notification-title'}>{title}</span>
          <span className={'notification-info'}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     aria-hidden="true"
                     role="img"
                     className="notification-info-img"
                     viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" fill="#00ACC1"></circle><circle cx="24" cy="24" r="16"
                                                                                 fill="#eee"></circle>
                  <path d="M23 11h2v13h-2z"></path><path
                  d="M31.285 29.654L29.66 31.28l-6.504-6.504l1.626-1.627z"></path>
                  <circle cx="24" cy="24" r="2"></circle><circle cx="24" cy="24" r="1" fill="#00ACC1"></circle>
                </svg>
                {time}
              </span>
        </div>
      </div>
    </>
  )
}