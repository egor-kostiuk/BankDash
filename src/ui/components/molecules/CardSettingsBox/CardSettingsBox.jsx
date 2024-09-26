import { ContainerTitle } from '/src/ui/components/atoms/ContainerTitle/ContainerTitle.jsx';
import { CardSettingsInfoBox } from '/src/ui/components/atoms/CardSettingsInfoBox/CardSettingsInfoBox.jsx';
import { cardSettingsInfo } from '/src/helpers/cardSettingsInfo.js';

import './CardSettingsBox.css';

export const CardSettingsBox = () => {
  return (
    <div>
      <ContainerTitle title={'Card Settings'}/>
      <div className={'card-settings-container container'}>
        <ul className={'card-settings-list'}>
          {cardSettingsInfo.map(item => (
            <CardSettingsInfoBox
              key={item.title}
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}