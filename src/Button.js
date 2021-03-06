import styled from 'styled-components'

const Button = styled.button`
  background: white;
  color: ${props => props.theme.main};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.main};
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  transition: background .3s;

  &:hover {
    background: ${props => props.theme.main};
    color: white;
  }
`

Button.defaultProps = {
  theme: {
    main: 'palevioletred'
  }
}

export default Button
