import Head from 'next/head'
import { Button } from 'antd'

import MOLMenu from '../components/MOLMenu'

const Header = () => {
	return (
		<div>
			{/* 在这里写页面的title 等信息 */}
			<Head>
				<title>Welcome to Salen Ju Blog</title>
				<meta charSet="utf-8" />>
			</Head>
			Salen Ju
			<MOLMenu />
			<Button type='primary'>赞</Button>
		</div>
	)
}

export default Header
