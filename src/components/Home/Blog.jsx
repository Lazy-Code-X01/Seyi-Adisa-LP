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
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
	// backgroundImage: `linear-gradient(
	//     to right,
	//     rgba(205, 198, 74, 0.913),
	//     rgba(21, 40, 145, 0.93)
	// )`,
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
  const navigate = useNavigate();

  const handleReadMore = (id) => {
  navigate(`/resources/${id}`);
};

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://seyi-adisa-backend.onrender.com/api/posts"
        );
        setBlogPosts(response.data.reverse());
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Failed to load posts:", error);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress sx={{color: '#000041'}} size={"25px"} />
      </Box>
    );
  }

    const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1, 5);

	return (
		<div className="home-blog-container">
			<div className="featured-post-container">
				<h1 className="title">featured post</h1>
				    {featuredPost && (
          <CustomCard data-aos="fade-up" data-aos-duration="1000">
            <Media
              image={`https://seyi-adisa-backend.onrender.com/${featuredPost.image.replace(
                /\\/g,
                "/"
              )}`}
              title={featuredPost.title}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <DescriptionTypography>
                By {featuredPost.author} | {new Date(featuredPost.date).toDateString()}
              </DescriptionTypography>
              <EllipsisTypography title={featuredPost.title}>
                {featuredPost.title}
              </EllipsisTypography>
              <DescriptionTypography>
                {featuredPost.description}
              </DescriptionTypography>
              <ReadMoreButton variant="contained"     onClick={(e) => {
      e.stopPropagation();
      handleReadMore(featuredPost._id);
    }}>
                Read More
              </ReadMoreButton>
            </CardContent>
          </CustomCard>
        )}
			</div>
			<div className="all-post-container">
				<h1 className="title">all post</h1>
				<div
					className="inner-all-post-container"
					data-aos="fade-up"
					data-aos-duration="1500"
				>
				       {otherPosts.map((post, index) => (
            <div className="box" key={index} onClick={() => handleReadMore(post._id)}>
              <p className="small">
                By <span>{post.author}</span> | {new Date(post.date).toDateString()}
              </p>
              <p className="title">{post.title}</p>
            </div>
          ))}
				</div>
			</div>
		</div>
	);
};

export default Blog;
