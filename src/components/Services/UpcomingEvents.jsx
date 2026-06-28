import { useEffect, useRef, useState } from "react";
import { FaUtensils, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const UpcomingEvents = () => {
	const navigate = useNavigate();
	const lunchLearnRef = useRef(null);
	const [showModal, setShowModal] = useState(false);

	// Open modal if hash is #lunch-learn
	useEffect(() => {
		if (window.location.hash === "#lunch-learn") {
			setShowModal(true);
		}
	}, []);

	const toContact = () => {
		navigate("/contact");
	};

	const toLaunchAndLearn = () => {
		window.open("https://forms.gle/WBTh1ZvuSKo6qQFe9", "_blank");
	};

	const handleScrollToSection = () => {
		setShowModal(false);
	  
		// Slight delay to allow modal to close
		setTimeout(() => {
		  if (lunchLearnRef.current) {
			const offset = 100; 
			const y = lunchLearnRef.current.getBoundingClientRect().top + window.scrollY - offset;
	  
			window.scrollTo({
			  top: y,
			  behavior: "smooth",
			});
	  
			// Clear URL
			// window.history.replaceState(null, "", window.location.pathname);
		  }
		}, 100);
	  };
	  
	  

	return (
		<>
			<Dialog open={showModal} onClose={() => setShowModal(false)} fullWidth maxWidth="xs">
				<DialogTitle>Lunch & Learn</DialogTitle>
				<DialogContent>Would you like to go to the Lunch & Learn section?</DialogContent>
				<DialogActions sx={{ flexDirection: 'column', gap: 1, p: 2 }}>
    <Button
      onClick={handleScrollToSection}
      variant="contained"
      fullWidth
      sx={{
        backgroundColor: '#C8A500',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#b19000',
        },
      }}
    >
      Go to Section
    </Button>
    <Button
      onClick={() => setShowModal(false)}
      variant="outlined"
      fullWidth
      sx={{
        borderColor: '#C8A500',
        color: '#C8A500',
        '&:hover': {
          borderColor: '#b19000',
          backgroundColor: 'rgba(200, 165, 0, 0.1)',
        },
      }}
    >
      Close
    </Button>
  </DialogActions>
			</Dialog>

			<section className="upcoming-events">
				<div className="events-header" >
					<h2>Join Our Upcoming Events</h2>
					<p>
						Stay informed and engaged with our latest events designed for your
						growth.
					</p>
				</div>
				<div className="events-list">
					<div className="event-card" id="lunch-learn" ref={lunchLearnRef}>
						<FaUtensils className="event-icon" />
						<h3>Lunch & Learn</h3>
						<p>July 19</p>
						<div className="overlay">
							<button className="book-button" onClick={toLaunchAndLearn}>Book</button>
						</div>
					</div>
					<div className="event-card">
						<FaChalkboardTeacher className="event-icon" />
						<h3>Governance Workshop</h3>
						<p>February</p>
						<div className="overlay">
							<button className="book-button" onClick={toContact}>Book</button>
						</div>
					</div>
					<div className="event-card">
						<FaGlobe className="event-icon" />
						<h3>Change Your World</h3>
						<p>March</p>
						<div className="overlay">
							<button className="book-button" onClick={toContact}>Book</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default UpcomingEvents;
