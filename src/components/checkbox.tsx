import styled from 'styled-components';

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  padding: 0;
  display: inline-block;
  print-color-adjust: exact;
  vertical-align: middle;
  background-origin: border-box;
  user-select: none;
  flex-shrink: 0;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 999px;
  background-image: linear-gradient(var(--clr-border), var(--clr-border));
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:checked {
    background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    background-color: var(--clr-background-card);
    border-radius: 999px;
  }

  &:checked::after {
    background-color: transparent;
    background-image: url('/src/assets/icon-check.svg');
    background-position: center;
    background-repeat: no-repeat;
  }
`;
