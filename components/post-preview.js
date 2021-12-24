import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  date,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`./posts/${slug}`} href="./posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}