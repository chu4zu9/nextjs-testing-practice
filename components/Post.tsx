import Link from 'next/link'
import { POST } from '../types/Types'

const POST: React.FC<POST> = ({ id, title }) => {
  return (
    <div>
      <span>{id}</span>
      <Link href={`/post/${id}`}>
        <a className="cursor-pointer border-b border-gray-500 hover:bg-gray-300">
          {title}
        </a>
      </Link>
    </div>
  )
}

export default POST
