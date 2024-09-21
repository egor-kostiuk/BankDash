import './CardsList.css';

import {ContainerTitle} from "../../atoms/ContainerTitle/ContainerTitle.jsx";
import {auth} from "../../../../services/api/firebase.js";
import {useCards} from "../../../../services/cards/hooks/useCards.js";
import {Card} from "../../atoms/Card/Card.jsx";

export const CardsListBox = () => {
  const user = auth.currentUser;
  const cards = useCards(user?.uid);

  return (
    <div className={'cards-list-box'}>
      <ContainerTitle title={'My Cards'}/>
      <ul className={'cards-list'}>
        {cards.map(card => (
          <Card key={card.id} number={card.cardNumber} balance={card.balance} color={'white'}>
          </Card>
        ))}
      </ul>
    </div>
  )
}