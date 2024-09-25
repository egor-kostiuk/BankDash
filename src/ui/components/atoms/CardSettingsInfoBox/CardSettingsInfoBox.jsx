import './CardSettingsInfoBox.css';

export const CardSettingsInfoBox = ({ img, title, subtitle }) => {
  return (
    <button className={'card-settings-info-box'}>
      <div className={`card-settings-img ${title.slice(0, title.indexOf(' '))}`}>
        <img src={img} alt={title}/>
      </div>
      <div className={'card-settings-content'}>
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
    </button>
  )
}