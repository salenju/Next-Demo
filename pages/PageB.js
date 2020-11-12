import Link from 'next/link'
import { withRouter } from 'next/router'

import MOLSteps from '../components/MOLSteps'

const PageB = ({ router }) => {
	return (
		<div>
			<p>I am page B!</p>
			<p>Welcome {router.query.name} come to my home!</p>
			<MOLSteps />
			<Link href="/">
				<a>Home</a>
			</Link>
		</div>
	)
}

export default withRouter(PageB)
