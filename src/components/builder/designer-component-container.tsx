import styled from "styled-components";
export const DesignerComponentContainer = styled.div`
  transition: all 0.3s ease;
  border: gray 2px dashed;
  padding: 12px;
  margin: 4px;
  border-radius: 16px;
  cursor: grab;
  &:hover {
    border: red 2px dashed;
  }
`;
