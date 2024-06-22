import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	Grid,
	Box,
	Pagination,
} from "@mui/material";
import { styled } from "@mui/system";

const Root = styled(Box)(({ theme }) => ({
	padding: "2rem",
	maxWidth: "1280px",
	margin: "0 auto",
}));

const CustomCard = styled(Card)(({ theme }) => ({
	display: "flex",
	// gap: "20px",
	alignItems: "center",
	// flexDirection: "column",
	justifyContent: "space-between",
	height: "100%",
	borderRadius: "15px",
	cursor: "pointer",
	boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	transition: "box-shadow 0.3s ease-in-out",
	"&:hover": {
		boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
	},
}));

const Media = styled(CardMedia)(({ theme }) => ({
	height: 200,
	width: 500,
}));

const DownloadButton = styled(Button)(({ theme }) => ({
	marginTop: "1rem",
	alignSelf: "center",
	backgroundImage: `linear-gradient(
        to right,
        rgba(205, 198, 74, 0.913),
        rgba(21, 40, 145, 0.93)
    )`,
	textTransform: "unset",
}));

const Publications = () => {
	const publications = [
		{
			title: "Parable of Politics",
			description:
				"Download our latest ebook ‘Parable of Politics’ for actionable insights.",
			image:
				"https://media.licdn.com/dms/image/C4D12AQHkrckl0U35Rw/article-cover_image-shrink_600_2000/0/1520216747376?e=2147483647&v=beta&t=DETHPXxRo4mVhDP0CnA3Bb9fuxfGmk4Rv-7ySvBljiI",
			link: "path/to/your/ebook1.pdf",
		},
		{
			title: "Governance and Leadership",
			description:
				"Access comprehensive research on governance and leadership.",
			image:
				"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
			link: "path/to/your/ebook2.pdf",
		},
		{
			title: "Leadership in Crisis",
			description: "Strategies for effective leadership in times of crisis.",
			image:
				"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
			link: "path/to/your/ebook3.pdf",
		},
		{
			title: "Future of Governance",
			description: "Innovative approaches to governance for the future.",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
			link: "path/to/your/ebook4.pdf",
		},
		{
			title: "Ethical Leadership",
			description: "The importance of ethics in leadership and governance.",
			image:
				"https://img.freepik.com/free-vector/different-multicolored-microphones_1284-17119.jpg?t=st=1718917025~exp=1718920625~hmac=68a20513a7a9fb930b32a3e8cb007488a1071a95da2fda232ed7805cea7d2904&w=360",
			link: "path/to/your/ebook5.pdf",
		},
		{
			title: "Sustainable Leadership",
			description: "Principles and practices of sustainable leadership.",
			image:
				"https://img.freepik.com/free-vector/different-multicolored-microphones_1284-17119.jpg?t=st=1718917025~exp=1718920625~hmac=68a20513a7a9fb930b32a3e8cb007488a1071a95da2fda232ed7805cea7d2904&w=360",
			link: "path/to/your/ebook6.pdf",
		},
		{
			title: "Effective Team Building",
			description: "Best practices for building and leading effective teams.",
			image:
				"https://img.freepik.com/free-vector/different-multicolored-microphones_1284-17119.jpg?t=st=1718917025~exp=1718920625~hmac=68a20513a7a9fb930b32a3e8cb007488a1071a95da2fda232ed7805cea7d2904&w=360",
			link: "path/to/your/ebook7.pdf",
		},
		{
			title: "Digital Transformation",
			description: "How digital transformation is reshaping governance.",
			image:
				"https://img.freepik.com/free-vector/different-multicolored-microphones_1284-17119.jpg?t=st=1718917025~exp=1718920625~hmac=68a20513a7a9fb930b32a3e8cb007488a1071a95da2fda232ed7805cea7d2904&w=360",
			link: "path/to/your/ebook8.pdf",
		},
	];

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

	return (
		<Root>
			<h1 className="title" style={{ color: "#232536" }}>
				Publications
			</h1>
			<Grid container spacing={4}>
				{displayedPublications.map((publication, index) => (
					<Grid item xs={12} sm={6} key={index}>
						<CustomCard>
							<Media image={publication.image} title={publication.title} />
							<CardContent>
								<Typography variant="h6" component="div">
									{publication.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{publication.description}
								</Typography>
								<DownloadButton
									variant="contained"
									href={publication.link}
									target="_blank"
								>
									Download
								</DownloadButton>
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
					// color="primary"
				/>
			</Box>
		</Root>
	);
};

export default Publications;
