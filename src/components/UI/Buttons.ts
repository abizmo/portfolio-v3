import styled from 'styled-components';

interface LinkProps {
  $openInTab?: boolean;
  $solid?: boolean;
}

export const Button = styled.button<LinkProps>`
  background-color: ${({ $solid }) =>
    $solid ? 'hsl(var(--clr-primary))' : 'transparent'};
  border: 0.0625rem solid hsl(var(--clr-primary));
  border-radius: 0.25rem;
  color: ${({ $solid }) =>
    $solid ? 'hsl(var(--clr-neutral-900))' : 'hsl(var(--clr-primary))'};
  display: inline-grid;
  height: 2.5rem;
  padding-inline: 1rem;
  place-content: center;
  text-transform: uppercase;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Link = styled.a.attrs<LinkProps>(
  ({ $openInTab }) =>
    $openInTab && {
      target: '_blank',
      rel: 'noopener noreferrer',
    }
)<LinkProps>`
  color: inherit;
  letter-spacing: 0.08rem;
  text-transform: uppercase;

  transition: all 100ms ease-in;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const LinkButton = styled(Link)<LinkProps>`
  align-items: center;
  background-color: ${({ $solid }) =>
    $solid ? 'hsl(var(--clr-primary))' : 'transparent'};
  border: 0.0625rem solid hsl(var(--clr-primary));
  border-radius: 0.25rem;
  color: ${({ $solid }) =>
    $solid ? 'hsl(var(--clr-neutral-900))' : 'hsl(var(--clr-primary))'};
  display: inline-flex;
  height: 2.5rem;
  padding-inline: 1rem;

  &:hover {
    filter: brightness(1.1);
  }
`;
