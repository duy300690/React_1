import React from "react";
import Styled from "styled-components";

const StyleCardList = Styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 90px 30px;
padding:30px;
`;

const CardList = (props) => {
  return <StyleCardList>{props.children}</StyleCardList>;
};

export default CardList;
