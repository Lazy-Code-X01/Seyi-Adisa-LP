import React from "react";
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
import "./styles.css";

const CustomCard = styled(Card)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	// justifyContent: "space-between",
	// height: "100%",
	padding: "1rem",
	border: "0.1px solid #6d6e7623",
	boxShadow: "unset",
	// "&:hover": {
	// 	boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
	// },
}));

const Media = styled(CardMedia)(({ theme }) => ({
	height: 350,
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
	return (
		<div className="home-blog-container">
			<div className="featured-post-container">
				<h1 className="title">featured post</h1>
				<CustomCard data-aos="fade-up" data-aos-duration="1000">
					<Media
						image="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9saXRpY3N8ZW58MHx8MHx8fDA%3D"
						title={"Politics in governance"}
					/>
					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<DescriptionTypography>
							By Sam Fiero l July 19, 2023
						</DescriptionTypography>
						<EllipsisTypography title={"Politics in governance"}>
							{"Politics in Governance"}
						</EllipsisTypography>
						<DescriptionTypography>
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident.
						</DescriptionTypography>
						<ReadMoreButton variant="contained">Read More</ReadMoreButton>
					</CardContent>
				</CustomCard>
			</div>
			<div className="all-post-container">
				<h1 className="title">all post</h1>
				<div
					className="inner-all-post-container"
					data-aos="fade-up"
					data-aos-duration="1500"
				>
					<div className="box">
						<p className="small">
							By <span> Seyi Adisa</span> | July 23, 2023
						</p>
						<p className="title">
							Visions throughout Africa: A Visual Journey Across the Continent
						</p>
					</div>
					<div className="box">
						<p className="small">
							By <span> Seyi Adisa</span> | July 23, 2023
						</p>
						<p className="title">
							Visions throughout Africa: A Visual Journey Across the Continent
						</p>
					</div>
					<div className="box">
						<p className="small">
							By <span> Seyi Adisa</span> | July 23, 2023
						</p>
						<p className="title">
							Visions throughout Africa: A Visual Journey Across the Continent
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
