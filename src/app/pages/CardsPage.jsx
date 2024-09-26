import { CurrencyProvider } from '/src/utils/CurrencyProvider/CurrencyContext.jsx';
import { CurrencyWrapper } from '/src/utils/CurrencyProvider/CurrencyWrapper.jsx';

import { Main } from '/src/ui/components/templates/Main/Main.jsx';
import { Header } from '/src/ui/components/templates/Header/Header.jsx';
import { CardsContent } from '/src/ui/components/organisms/Cards/CardsContent.jsx';

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