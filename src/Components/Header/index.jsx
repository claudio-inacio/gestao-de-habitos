import Logo from "../../images/gesta-habitos-logo.png";

import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import Navegation from "../Navegacao";
import { HeaderCustomizer } from "./indexStyle";
import { useState } from "react";
import { MenuOverlay } from "../MenuOverlay/indexStyle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const controlNavegation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderCustomizer>
      <figure>
        <img src={Logo} alt="logo gestão de habitos" />
      </figure>
      <MenuOverlay open={isOpen} onClick={() => controlNavegation(false)} />
      <div>
        {isOpen ? (
          <FiX
            size="30"
            onClick={controlNavegation}
            color="var(--color-primary-light)"
          />
        ) : (
          <FaBars size="30" onClick={controlNavegation} />
        )}
      </div>

      <Navegation isOpen={isOpen} />
    </HeaderCustomizer>
  );
};

export default Header;
