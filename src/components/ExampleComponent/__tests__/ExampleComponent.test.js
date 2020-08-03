import React from 'react'
import { render } from '@testing-library/react'
import ExampleComponent from '../ExampleComponent'

const renderComponent = (props = {}) => (
  render(
    <ExampleComponent {...props} />
  )
)

describe('<ExampleComponent />', () => {
  it('should render ExampleComponent', () => {
    const { container } = renderComponent()
    expect(container.querySelector('div')).not.toBeNull()
  })
})