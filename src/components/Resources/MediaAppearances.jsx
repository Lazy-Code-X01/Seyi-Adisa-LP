import React, { useState } from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Root = styled(Box)(({ theme }) => ({
	padding: "2rem",
	background: "#0c0c0c",
}));

const VideoCard = styled(Box)(({ theme }) => ({
	position: "relative",
	padding: "1rem",
	textAlign: "center",
	cursor: "pointer",
	transition: "transform 0.3s, box-shadow 0.3s",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	},
}));

const VideoThumbnail = styled(Box)(({ theme }) => ({
	position: "relative",
	"& img": {
		width: "100%",
		borderRadius: "10px",
	},
	"&::after": {
		content: '""',
		display: "block",
	},
}));

const PlayButton = styled(Button)(({ theme }) => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	color: "#fff",
	"&:hover": {
		backgroundColor: "rgba(0, 0, 0, 0.7)",
	},
}));

const CustomArrow = styled(Button)(({ theme }) => ({
	position: "absolute",
	top: "50%",
	transform: "translateY(-50%)",
	color: "#fff",
	"&:hover": {
		backgroundColor: "#0000481",
	},
	zIndex: 1,
}));

const MediaAppearances = () => {
	const mediaAppearances = [
		{
			title: "Sustainable Governance on TVC",
			// videoLink: "https://youtu.be/dQw4w9WgXcQ",
			videoLink: "https://youtu.be/VixYfv0UEyE",
		},
		{
			title: "Leadership in Crisis Podcast",
			videoLink: "https://youtu.be/J---aiyznGQ",
		},
		{
			title: "Future of Governance Interview",
			videoLink: "https://youtu.be/eVTXPUF4Oz4",
		},
		{
			title: "Ethical Leadership Webinar",
			videoLink: "https://youtu.be/5NV6Rdv1a3I",
		},
	];

	const [currentVideo, setCurrentVideo] = useState(null);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <CustomArrow />,
		prevArrow: <CustomArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};

	const extractVideoId = (url) => {
		const urlObj = new URL(url);
		if (urlObj.hostname === "youtu.be") {
			return urlObj.pathname.slice(1);
		} else {
			return urlObj.searchParams.get("v");
		}
	};

	const handleVideoClick = (videoLink) => {
		const videoId = extractVideoId(videoLink);
		setCurrentVideo(videoId);
	};

	const handleCloseVideo = () => {
		setCurrentVideo(null);
	};

	return (
		<Root>
			<Slider {...settings}>
				{mediaAppearances.map((media, index) => (
					<VideoCard
						key={index}
						onClick={() => handleVideoClick(media.videoLink)}
					>
						<VideoThumbnail>
							<img
								src={`https://img.youtube.com/vi/${extractVideoId(
									media.videoLink,
								)}/hqdefault.jpg`}
								alt={media.title}
							/>
							<PlayButton variant="contained">Play</PlayButton>
						</VideoThumbnail>
					</VideoCard>
				))}
			</Slider>

			{currentVideo && (
				<Box
					position="fixed"
					top={0}
					left={0}
					width="100%"
					height="100%"
					display="flex"
					justifyContent="center"
					alignItems="center"
					bgcolor="rgba(0, 0, 0, 0.8)"
					zIndex={9999}
				>
					<Box position="relative" width="80%" maxWidth="800px">
						<YouTube
							videoId={currentVideo}
							opts={{
								width: "100%",
								playerVars: {
									autoplay: 1,
								},
							}}
						/>
						<Button
							variant="contained"
							onClick={handleCloseVideo}
							sx={{
								position: "absolute",
								top: 8,
								right: 8,
								backgroundColor: "rgba(0, 0, 0, 0.5)",
								"&:hover": {
									backgroundColor: "rgba(0, 0, 0, 0.7)",
								},
							}}
						>
							Close
						</Button>
					</Box>
				</Box>
			)}
		</Root>
	);
};

export default MediaAppearances;
