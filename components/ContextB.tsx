import { useStateContext } from '../context/StateProvider'

const ContextB: React.FC = () => {
  const { toggle } = useStateContext()
  return (
    <div>
      <p>Context B</p>
      <p className="text-indigo-600" data-testid="toggle-b">
        {toggle ? 'true' : 'false'}
      </p>
    </div>
  )
}

export default ContextB
