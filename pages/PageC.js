import Link from 'next/link'
import { withRouter } from 'next/router'

const PageC = ({ router }) => {
	return (
		<div>
			<p>I am page C!</p>
			<p>Welcome {router.query.name} come to my home!</p>
			<Link href="/">
				<a>Home</a>
			</Link>
		</div>
	)
}

export default withRouter(PageC)
