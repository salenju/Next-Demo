import Head from 'next/head'

const Header = () => {
	return (
		<div>
      {/* 在这里写页面的title 等信息 */}
			<Head>
				<title>Welcome to Salen Ju Blog</title>
				<meta charSet="utf-8" />>
			</Head>
			Salen Ju
		</div>
	)
}

export default Header
