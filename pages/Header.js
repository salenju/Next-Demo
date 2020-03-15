import Head from 'next/head'
import { Button } from 'antd'

const Header = () => {
	return (
		<div>
			{/* 在这里写页面的title 等信息 */}
			<Head>
				<title>Welcome to Salen Ju Blog</title>
				<meta charSet="utf-8" />>
			</Head>
			Salen Ju
			<Button type='primary'>赞</Button>
		</div>
	)
}

export default Header
