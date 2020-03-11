import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
	// 路由钩子事件
	// routeChangeStart-路由开始变化时
	Router.events.on('routeChangeStart', (...args) => {
		console.log('===>routeChangeStart-路由开始变化时:', args)
	})

	// routeChangeComplete-路由结束变化时
	Router.events.on('routeChangeComplete', (...args) => {
		console.log('===>routeChangeComplete-路由结束变化时:', args)
	})

	// beforeHistoryChange-浏览器history触发前
	Router.events.on('beforeHistoryChange', (...args) => {
		console.log('===>beforeHistoryChange-浏览器history触发前:', args)
	})

	// routerChangeError-跳转发生错误时
	Router.events.on('routerChangeError', (...args) => {
		console.log('===>routerChangeError-跳转发生错误时:', args)
	})

	return (
		<div>
			<p>Hello Next.js</p>
			<div>
				<Link href="/PageA?name=B">
					<a>Go to PageA</a>
				</Link>
			</div>
			<div>
				<Link href={{ pathname: '/PageD', query: { name: 'A' } }}>
					<a>Go to PageD</a>
				</Link>
			</div>
			<div>
				<button onClick={() => Router.push('/PageB?name=A')}>
					<a>Go to PageB</a>
				</button>
			</div>
			<div>
				<button
					onClick={() =>
						Router.push({
							pathname: '/PageC',
							query: {
								name: 'B'
							}
						})
					}
				>
					<a>Go to PageC</a>
				</button>
			</div>
		</div>
	)
}

export default Home
