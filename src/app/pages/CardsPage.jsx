import { Main } from '/src/ui/components/templates/Main/Main.jsx';
import { Header } from '/src/ui/components/templates/Header/Header.jsx';
import { CardsContent } from '/src/ui/components/organisms/Cards/CardsContent.jsx';
import {CurrencyProvider} from "../../utils/CurrencyProvider/CurrencyContext.jsx";
import {CurrencyWrapper} from "../../utils/CurrencyProvider/CurrencyWrapper.jsx";

export const CardsPage = () => {
  return (
    <>
      <CurrencyProvider>
        <CurrencyWrapper>
      <Header title={'Credit Cards'}/>
      <Main>
        <CardsContent/>
      </Main>
        </CurrencyWrapper>
      </CurrencyProvider>
    </>
  )
}