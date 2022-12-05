import styled from "styled-components";
import React from "react";

const Wrapper = styled('div')`
  max-width: 1130px;
  display: flex;
  flex-flow: column;
  width: 100%;
  background: white;
  margin-left: auto;
  margin-right: auto;
  padding: 11px 21px;
  min-height: 100vh;
  @media only screen and (max-width: 1000px) {
    padding: 0;
  }
`

export default function MainWrapper(props: React.PropsWithChildren) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}
