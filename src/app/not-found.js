import Link from "next/link"

const NotFound = () => {
  return (
    <div>
        <p>The page you requested is not found</p>
        <Link href='/'>Go home</Link>
    </div>
  )
}
export default NotFound