import React from "react";
import {
	Box,
	Typography,
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid,
	TextField,
} from "@mui/material";
import { styled } from "@mui/system";
// import ContactForm from "./ContactForm";
// import SocialMediaLinks from "./SocialMediaLinks";
// import EventsCalendar from "./EventsCalendar";

const Root = styled(Box)(({ theme }) => ({
	padding: "2rem",
	background: "#f5f5f5",
}));

const Section = styled(Box)(({ theme }) => ({
	marginBottom: "2rem",
}));

const MediaCard = styled(Card)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	marginBottom: "1rem",
}));

const Media = styled(CardMedia)(({ theme }) => ({
	height: 140,
	width: 140,
	borderRadius: "50%",
	margin: "1rem",
}));

const Community = () => {
	return (
		<Root>
			<Typography variant="h3" gutterBottom>
				Community and Engagement
			</Typography>
			<Typography variant="body1" paragraph>
				Engaging with the community is at the heart of my mission. I believe in
				creating platforms that encourage the development of people and
				communities through active participation, fostering a sense of belonging
				among individuals and groups. My initiatives are designed to empower
				people, enhance civic responsibility, and promote collaborative
				problem-solving.
			</Typography>

			<Section>
				<Typography variant="h4" gutterBottom>
					Key Engagement Initiatives
				</Typography>

				<Typography variant="h5" gutterBottom>
					Community Forums and Dialogues
				</Typography>
				<Typography variant="body1" paragraph>
					Facilitating forums where community members can discuss issues, share
					ideas, and collaborate on solutions.
				</Typography>
				<Typography variant="body1" paragraph>
					Encouraging active participation in governance by ensuring every voice
					is heard.
				</Typography>
				<Button
					variant="contained"
					color="primary"
					href="https://www.facebook.com/YourCommunityPage"
				>
					Join our Community on Facebook
				</Button>
			</Section>

			<Section>
				<MediaCard>
					<Media
						image="path/to/sadi-logo.jpg"
						title="Seyi Adisa Development Initiative (SADI)"
					/>
					<CardContent>
						<Typography variant="h5" component="div">
							Seyi Adisa Development Initiative (SADI)
						</Typography>
						<Typography variant="body1" paragraph>
							Providing initiatives to develop women and youth in education,
							healthcare, infrastructure, and empowerment through sports, ICT,
							and technical and vocational skill acquisition programs.
						</Typography>
						<Button
							variant="contained"
							color="primary"
							href="https://www.yourlink.com"
						>
							Visit SADI
						</Button>
					</CardContent>
				</MediaCard>

				<MediaCard>
					<Media
						image="path/to/agid-logo.jpg"
						title="African Governance Institute for Development (AGID)"
					/>
					<CardContent>
						<Typography variant="h5" component="div">
							African Governance Institute for Development (AGID)
						</Typography>
						<Typography variant="body1" paragraph>
							Creating an ecosystem of governance initiatives from primary
							school to tertiary institutions, including local organizations,
							grassroots groups, and online platforms to foster a knowledge
							economy of good governance.
						</Typography>
						<Button
							variant="contained"
							color="primary"
							href="https://www.yourlink.com"
						>
							Visit AGID
						</Button>
					</CardContent>
				</MediaCard>
			</Section>

			<Section>
				<MediaCard>
					<Media image="path/to/7eleven-logo.jpg" title="7Eleven Foundation" />
					<CardContent>
						<Typography variant="h5" component="div">
							7Eleven Foundation
						</Typography>
						<Typography variant="body1" paragraph>
							Supporting young entrepreneurs in building sustainable businesses
							by equipping them with knowledge, skills, and grants during the
							early phases of their ventures.
						</Typography>
					</CardContent>
				</MediaCard>
			</Section>

			<Section>
				<Typography variant="h4" gutterBottom>
					Volunteer and Internship Opportunities
				</Typography>
				<Typography variant="body1" paragraph>
					Providing opportunities for individuals to volunteer or intern with my
					various initiatives and programs.
				</Typography>
				<Typography variant="body1" paragraph>
					Encouraging community involvement and hands-on experience in
					governance and leadership projects.
				</Typography>
			</Section>

			<Section>
				<Typography variant="h4" gutterBottom>
					How to Get Involved
				</Typography>
				<Typography variant="body1" paragraph>
					We welcome you to join our efforts in making a difference. Whether you
					are interested in attending a forum, participating in a workshop, or
					volunteering for a community project, there are numerous ways to get
					involved and contribute to our shared vision of a thriving, engaged
					society.
				</Typography>
				<Typography variant="body1" paragraph>
					For more information on upcoming events, volunteer opportunities, or
					how to participate in our initiatives, please fill out the contact
					form below. Together, we can drive positive change and build a
					brighter future for our communities.
				</Typography>
			</Section>

			<Section>
				<Typography variant="h4" gutterBottom>
					Newsletter Signup
				</Typography>
				<Typography variant="body1" paragraph>
					Sign up for our newsletter to receive regular insights and updates.
				</Typography>
				<TextField label="Email" variant="outlined" fullWidth />
				<Button variant="contained" color="primary" sx={{ marginTop: "1rem" }}>
					Sign Up
				</Button>
			</Section>

			{/* <Section>
				<Typography variant="h4" gutterBottom>
					Social Media Integration
				</Typography>
				<SocialMediaLinks />
			</Section> */}

			{/* <Section>
				<Typography variant="h4" gutterBottom>
					Events Calendar
				</Typography>
				<EventsCalendar />
			</Section> */}

			{/* <Section>
				<ContactForm />
			</Section> */}
		</Root>
	);
};

export default Community;
