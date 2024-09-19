import { Main } from "/src/ui/components/templates/Main/Main.jsx";
import { Header } from "/src/ui/components/templates/Header/Header.jsx";

export const TestPage = () => {
  const switchTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <>
      <Header title={'Test'}/>
      <Main>
        <button
          style={{width: 100, height: 50, backgroundColor: 'wheat'}}
          onClick={() => switchTheme('light')}
        >
          light
        </button>
        <button
          style={{width: 100, height: 50, backgroundColor: 'darkgray'}}
          onClick={() => switchTheme('dark')}
        >
          dark
        </button>
        <button
          style={{width: 100, height: 50, backgroundColor: 'deepskyblue'}}
          onClick={() => switchTheme('ocean')}
        >
          ocean
        </button>
      </Main>
    </>
  )
}