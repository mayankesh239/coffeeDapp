import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
    <h2 style={{ color: "white",
				textAlign: "center",
				marginTop: "-60px" }}>CafeChain - Where Blockchain Meets Your Daily Brew!</h2>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Feedback</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Customer Support</FooterLink>
			<FooterLink href="#">Subscription Services</FooterLink>
			<FooterLink href="#">Partnership Inquiries</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Live Chat Support</FooterLink>
			<FooterLink href="#">Compliance & Legal</FooterLink>
			<FooterLink href="#">Partnership Inquiries</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;