import timelinedata from "./timelinedata";
import TimelineItem from "./TimeLineItem";
import { Box } from "@chakra-ui/react";
import Section from "../Section";

const TimelineContainer = () => {
  return (
    <Section>
      {timelinedata.length > 0 && (
        <Box className="timeline-container">
          {timelinedata.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </Box>
      )}
    </Section>
  );
};
export default TimelineContainer;
