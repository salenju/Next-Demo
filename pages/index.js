import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
	return (
		<div>
			<p>Hello Next.js</p>
			<div>
				<Link href="/PageA?name=B">
					<a>Go to PageA</a>
				</Link>
			</div>
      <div>
				<Link href={{pathname:'/PageD',query:{name:'A'}}}>
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
