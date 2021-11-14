import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { lnk } = router.query
  if (process.browser)  
    window.location.replace('/api/recive?slug='+lnk)
  return true;
}

export default Post
