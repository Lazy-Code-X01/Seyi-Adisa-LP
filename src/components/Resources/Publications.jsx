import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = styled(Box)(({ theme }) => ({
	padding: "2rem",
	maxWidth: "1280px",
	margin: "0 auto",
	[theme.breakpoints.down("md")]: {
		padding: "1rem",
	},
}));

const CustomCard = styled(Card)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	height: "100%",
	borderRadius: "15px",
	cursor: "pointer",
	boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	transition: "box-shadow 0.3s ease-in-out",
	"&:hover": {
		boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
	},
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		alignItems: "flex-start",
	},
}));

const Media = styled(CardMedia)(({ theme }) => ({
	height: 200,
	width: 500,
	[theme.breakpoints.down("md")]: {
		height: 150,
		width: "100%",
	},
}));

const DownloadButton = styled(Button)(({ theme }) => ({
	marginTop: "1rem",
	alignSelf: "center",
	background: "#7a6800",
	textTransform: "unset",

	"&:hover": {
		// backgroundImage: `linear-gradient(
		//     to right,
		//     rgba(205, 198, 74, 0.913),
		//     rgba(21, 40, 145, 0.93)
		// )`,
		background: '#7a6800',
		opacity: '90%',
		boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
	},
	[theme.breakpoints.down("md")]: {
		width: "100%",
	},
}));

const Publications = () => {
	const [publications, setPublications] = useState([]);
	const [loading, setLoading] = useState(true);
	const [downloadLoading, setDownloadLoading] = useState({});

	const [page, setPage] = useState(1);
	const postsPerPage = 4;
	const totalPages = Math.ceil(publications.length / postsPerPage);

	const handleChangePage = (event, value) => {
		setPage(value);
	};

	const displayedPublications = publications.slice(
		(page - 1) * postsPerPage,
		page * postsPerPage,
	);

	useEffect(() => {
		const fetchPublications = async () => {
			try {
				setLoading(true);
				const response = await axios.get(
					"https://seyi-adisa-backend.onrender.com/api/publications",
				);
				setPublications(response.data);
				setLoading(false);
				// toast.success("Publications loaded successfully!");
			} catch (error) {
				setLoading(false);
				toast.error("Failed to load publications.");
			}
		};
		fetchPublications();
	}, []);

	const handleDownload = async (publicationId) => {
		setDownloadLoading((prev) => ({ ...prev, [publicationId]: true }));
		try {
			const response = await axios.get(
				`https://seyi-adisa-backend.onrender.com/api/publications/download/${publicationId}`,
				{
					responseType: "blob",
				},
			);
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", `publication-${publicationId}.pdf`);
			document.body.appendChild(link);
			link.click();
			link.parentNode.removeChild(link);
			toast.success("Download successful!");
		} catch (error) {
			toast.error("Failed to download publication.");
		} finally {
			setDownloadLoading((prev) => ({ ...prev, [publicationId]: false }));
		}
	};

	return (
		<Root>
			<h1 className="title publication-title" style={{ color: "#232536" }}>
				Publications
			</h1>
			{loading ? (
				<Box display="flex" justifyContent="center" mt={4}>
					<CircularProgress color="inherit" size={"25px"} />
				</Box>
			) : (
				<>
					<Grid
						container
						spacing={4}
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						{displayedPublications.map((publication, index) => (
							<Grid item xs={12} sm={6} key={index}>
								<CustomCard>
									<Media
										image={`${`https://seyi-adisa-backend.onrender.com/${publication.image.replace(
											/\\/g,
											"/",
										)}`}`}
										title={publication.title}
									/>
									<CardContent>
										<Typography variant="h6" component="div">
											{publication.title}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{publication.description}
										</Typography>
										{downloadLoading[publication._id] ? (
											<CircularProgress />
										) : (
											<DownloadButton
												variant="contained"
												onClick={() => handleDownload(publication._id)}
											>
												Download
											</DownloadButton>
										)}
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
			{/* <ToastContainer /> */}
		</Root>
	);
};

export default Publications;
