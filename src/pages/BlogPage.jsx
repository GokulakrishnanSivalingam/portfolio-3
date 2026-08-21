import React from 'react';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const BlogPage = ({ onBackToHome, theme, toggleTheme }) => {
	return (
		<>
			<Navbar
				onOpenBlogs={() => {}}
				theme={theme}
				toggleTheme={toggleTheme}
				isBlogPage
				onBackToHome={onBackToHome}
			/>

			<main style={{ position: 'relative', zIndex: 2, paddingTop: '5rem' }}>
				<Blogs />
			</main>

			<Footer onOpenBlogs={() => {}} />
		</>
	);
};

export default BlogPage;