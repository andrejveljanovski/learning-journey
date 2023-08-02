import styled from "styled-components";

export const OgnenContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.M}px;
  font-size: 20px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.tertiary : theme.colors.secondary};

  span {
  }

  &:hover {
    background-color: blue;
  }
`;
