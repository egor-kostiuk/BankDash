import { Main } from "/src/ui/components/templates/Main/Main.jsx";
import { Header } from "/src/ui/components/templates/Header/Header.jsx";
import { SettingsContent } from "/src/ui/components/organisms/Settings/SettingsContent/Settings.jsx";

export const SettingsPage = () => {
  return (
    <>
      <Header title={'Settings'}/>
      <Main>
        <SettingsContent/>
      </Main>
    </>
  )
}