import {Profile} from "/src/ui/components/molecules/Profile/Profile.jsx";
import {Sidebar} from "/src/ui/components/organisms/Sidebar/Sidebar.jsx";

import "./Main.css";

export const Main = () => {
  return (
    <main className={'wrapper'}>
      <Sidebar/>
      <article> {/* TODO: article components */}
        <Profile/>
      </article>
    </main>
  )
}