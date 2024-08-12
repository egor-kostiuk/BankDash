import {useNavigate} from "react-router-dom";

export const useSidebarButton = ({path}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return {handleClick};
}