import { ProfileLayout } from '/src/ui/components/templates/ProfileLayout/ProfileLayout.jsx';
import { Sidebar } from '/src/ui/components/organisms/Sidebar/Sidebar.jsx';

import './Main.css';

export const Main = ({ children }) => {
  return (
    <main className={'wrapper'}>
      <Sidebar/>
      <article> {/* TODO: article components */}
        <ProfileLayout>
          {children}
        </ProfileLayout>
      </article>
    </main>
  )
}