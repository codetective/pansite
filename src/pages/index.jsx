import { Box, Heading, Text, Button } from "@chakra-ui/react";
import NextImage from "next/image";

import { SEO } from "../components/seo";
import Hero from "../components/home/Hero";
import CountUpStats from "../components/home/CountUpStats";
import WelcomeCard from "../components/home/WelcomeCard";
import ObjectiveCards from "../components/home/ObjectiveCards";
import UpcomingEvents from "../components/home/UpcomingEvents";

const Home = () => {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <CountUpStats />
      <WelcomeCard />
      <ObjectiveCards />
      <UpcomingEvents />
    </>
  );
};

export default Home;
