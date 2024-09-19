import { Main } from '/src/ui/components/templates/Main/Main.jsx';
import { Header } from '/src/ui/components/templates/Header/Header.jsx';
import { CardsContent } from '/src/ui/components/organisms/Cards/CardsContent.jsx';

export const CardsPage = () => {
  return (
    <>
      <Header title={'Credit Cards'}/>
      <Main>
        <CardsContent/>
      </Main>
    </>
  )
}