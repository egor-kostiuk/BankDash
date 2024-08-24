import { PageLogo } from "/src/ui/components/atoms/PageLogo/PageLogo.jsx";
import { Nav } from "/src/ui/components/organisms/Nav/Nav.jsx";

import "./Header.css";

export const Header = ({ title }) => {
  return (
    <header>
      <PageLogo/>
      <Nav title={title}/>
    </header>
  )
}