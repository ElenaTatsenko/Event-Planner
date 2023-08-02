import styled from "@emotion/styled";
import { AppBar } from "@mui/material";

export const Header = styled(AppBar)({
  position: "relative",
  padding: "32px 24px 24px 24px",
  
  backgroundColor: `inherit`,
  boxShadow: "none",
  borderBottom: "1px solid #7B61FF",
  textAlign:"start"
});

export const Text = styled.p`
  font-family: "Alata", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #7b61ff;
  
`;
