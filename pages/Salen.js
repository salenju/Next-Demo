import Link from 'next/link'
import { withRouter } from 'next/router'
import axios from 'axios'

const Salen = ({ router, list }) => {
	return (
		<div>
			<p>I am Salen!</p>
			<p>Welcome {router.query.name} come to my home!</p>
			<div>{list}</div>
			<Link href="/">
				<a>Home</a>
			</Link>

			<style jsx>{`
				p {
					color: #f40;
				}
			`}</style>
		</div>
	)
}

Salen.getInitialProps = async () => {
	const promise = new Promise((resolve) => {
		axios('https://www.marineonline.com/api/language/api/lang/index')
			.then((res) => {
				console.log('======>远端数据是：', res)
				resolve(res.data)
			})
			.catch()
	})
	return await promise
}

export default withRouter(Salen)
