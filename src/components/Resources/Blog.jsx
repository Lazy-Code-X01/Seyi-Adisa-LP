import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	Grid,
	Box,
	Pagination,
	CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";

const Root = styled(Box)(({ theme }) => ({
	maxWidth: "1280px",
	margin: "0 auto",
	padding: "2rem",
}));

const CustomCard = styled(Card)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	height: "100%",
	borderRadius: "15px",
	fontFamily: "'Poppins', sans-serif",
	boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	transition: "box-shadow 0.3s ease-in-out",
	"&:hover": {
		boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
	},
}));

const Media = styled(CardMedia)(({ theme }) => ({
	height: 200,
}));

const ReadMoreButton = styled(Button)(({ theme }) => ({
	marginTop: ".6rem",
	alignSelf: "flex-start",
	fontSize: "16px",
	fontWeight: "500",
	backgroundImage: `linear-gradient(
        to right,
        rgba(205, 198, 74, 0.913),
        rgba(21, 40, 145, 0.93)
    )`,
	textTransform: "unset",
}));

const EllipsisTypography = styled(Typography)({
	textOverflow: "ellipsis",
	overflow: "hidden",
	whiteSpace: "nowrap",
	fontWeight: "500",
	fontSize: "22px",
	color: "#232536",
});

const DescriptionTypography = styled(Typography)({
	fontWeight: "400",
	fontSize: "0.9rem",
	color: "#6d6e76",
	lineHeight: "24px",
});

const Blog = () => {
	const [blogPosts, setBlogPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const postsPerPage = 6;

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get(
					"https://seyi-adisa-backend.onrender.com/api/posts",
				);
				setBlogPosts(response.data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				toast.error("Failed to load posts. Please try again later.");
			}
		};

		fetchPosts();
	}, []);

	const totalPages = Math.ceil(blogPosts.length / postsPerPage);

	const handleChangePage = (event, value) => {
		setPage(value);
	};

	const displayedPosts = blogPosts.slice(
		(page - 1) * postsPerPage,
		page * postsPerPage,
	);

	return (
		<Root>
			<h1 className="title" style={{ color: "#232536" }}>
				All Posts
			</h1>
			{loading ? (
				<Box display="flex" justifyContent="center" mt={4}>
					<CircularProgress size={"small"} sx={{ color: "000080" }} />
				</Box>
			) : (
				<>
					<Grid container spacing={4}>
						{displayedPosts.map((post, index) => (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<CustomCard>
									<Media
										image={`${`https://seyi-adisa-backend.onrender.com/${post.image.replace(
											/\\/g,
											"/",
										)}`}`}
										title={post.title}
									/>
									<CardContent
										sx={{
											display: "flex",
											flexDirection: "column",
										}}
									>
										<EllipsisTypography title={post.title}>
											{post.title}
										</EllipsisTypography>
										<DescriptionTypography>
											{post.content}
										</DescriptionTypography>
										<ReadMoreButton variant="contained">
											Read More
										</ReadMoreButton>
									</CardContent>
								</CustomCard>
							</Grid>
						))}
					</Grid>
					<Box display="flex" justifyContent="center" mt={4}>
						<Pagination
							count={totalPages}
							page={page}
							onChange={handleChangePage}
						/>
					</Box>
				</>
			)}
			<ToastContainer />
		</Root>
	);
};

export default Blog;
