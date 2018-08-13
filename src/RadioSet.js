import React from 'react'
import styled from 'styled-components'

const RadioWrapper = styled.div``

const RadioButton = styled.button`
  font-family: inherit;
  font-size: inherit;

  padding: 6px 12px

  background-color: ${({active}) => active ? '#eee' : 'transparent'};

  --border: thin solid #333;

  border: none;
  border-top: var(--border);
  border-bottom: var(--border);

  &:first-of-type {
    border-left: var(--border);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-of-type {
    border-right: var(--border);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:focus {
    outline: none;
  }
`

const Button = ({active, handleSelect, value, ...rest}) => (
  <RadioButton active={active} onClick={() => handleSelect(value)} {...rest} />
)

export const Radio = ({children, value, handleSelect}) => {
  const mappedChildren = React.Children.map(children, child => {
    if (child.type !== Button) {
      return child
    }

    return React.cloneElement(child, {
      active: child.props.value === value,
      handleSelect
    })
  })

  return <RadioWrapper>{mappedChildren}</RadioWrapper>
}

Radio.Button = Button
