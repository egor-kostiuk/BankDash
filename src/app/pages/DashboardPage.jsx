import { Main } from '/src/ui/components/templates/Main/Main.jsx';
import { Header } from '/src/ui/components/templates/Header/Header.jsx';

import { useEditProfile } from '/src/hooks/useEditProfile.js';
import { CurrencyWrapper } from '/src/utils/CurrencyProvider/CurrencyWrapper.jsx';
import { CurrencyProvider } from '/src/utils/CurrencyProvider/CurrencyContext.jsx';
import { CardList } from '/src/ui/CardsList.jsx'; // Test component


export const DashboardPage = () => {
  const { userDetails } = useEditProfile();

  return (
    <CurrencyProvider currency={userDetails?.currency}>
      <CurrencyWrapper>
        <Header title={'Overview'}/>
        <Main>
          <CardList/>
        </Main>
      </CurrencyWrapper>
    </CurrencyProvider>
  )
}