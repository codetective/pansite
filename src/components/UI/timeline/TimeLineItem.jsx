import { Box, Text } from "@chakra-ui/react";

const TimelineItem = ({ data }) => (
  <Box className="timeline-item">
    <Box className="timeline-item-content" shadow="xl">
      <Box as="time" fontFamily="Poppins">
        {data.date}
      </Box>
      <Text fontFamily="Poppins" as="p">
        {data.text}
      </Text>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <Box as="span" className="circle" />
    </Box>
  </Box>
);

export default TimelineItem;
