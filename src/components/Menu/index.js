import styled from "styled-components";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Search from "./components/Search";
import { BsYoutube } from 'react-icons/bs';
import { GiBatMask } from 'react-icons/gi';

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
`;

export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
  return (
    <StyledMenu>
      <div>
        <BsYoutube color="red" fontSize="1.3em" />
        <GiBatMask fontSize="1.6em" />
      </div>
      <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
      <DarkModeSwitch />
    </StyledMenu>
  );
}