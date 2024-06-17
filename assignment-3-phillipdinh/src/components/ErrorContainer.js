import React from "react";

import styled from "@emotion/styled";

function ErrorContainer({ children }) {
  const Error = styled.div`
    padding: 12px;
    background-color: #ce0000;
    color: #fff;
  `;
  return <Error>{children}</Error>;
}

export default ErrorContainer;
