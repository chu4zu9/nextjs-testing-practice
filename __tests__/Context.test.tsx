import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContextA from '../components/ContextA'
import ContextB from '../components/ContextB'
import { StateProvider } from '../context/StateProvider'
import userEvent from '@testing-library/user-event'

describe('Global state management (useContext)', () => {
  it('Should changethe toggle state globally', () => {
    render(
      <StateProvider>
        <ContextA />
        <ContextB />
      </StateProvider>
    )
    expect(screen.getByTestId('toggle-a').textContent).toBe('false')
    expect(screen.getByTestId('toggle-b').textContent).toBe('false')
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId('toggle-a').textContent).toBe('true')
    expect(screen.getByTestId('toggle-b').textContent).toBe('true')
  })
})
