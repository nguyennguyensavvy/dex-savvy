import React from "react";
import { Flex } from "../Box";
import { StyledFooter } from "./styles";
import { FooterProps } from "./types";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        Footer
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
