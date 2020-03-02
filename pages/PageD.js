import Link from 'next/link'
import { withRouter } from 'next/router'

const PageD = ({ router }) => {
	return (
		<div>
			<p>I am page D!</p>
			<p>Welcome {router.query.name} come to my home!</p>
			<Link href="/">
				<a>Home</a>
			</Link>
		</div>
	)
}

export default withRouter(PageD)
