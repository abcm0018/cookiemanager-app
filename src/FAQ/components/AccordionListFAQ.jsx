import PropTypes from "prop-types";

import { Box, Container, Typography } from "@mui/material";
import { CAccordionFAQ } from "./CAccordionFAQ";

export const AccordionListFAQ = ({ sections = [], getExtraContent }) => {
  return (
    <Container>
      <Box sx={{ bgcolor: "#F5F7F8", p: 2 }}>
        {sections.map((section, sectionIndex) => (
          <Box key={sectionIndex} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {section.header}
            </Typography>
            {section.items.map((item, itemIndex) => (
              <CAccordionFAQ
                key={itemIndex}
                title={item.title}
                content={item.content}
                extraContent={getExtraContent(item.title)}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

AccordionListFAQ.propTypes = {
  sections: PropTypes.array.isRequired,
  getExtraContent: PropTypes.func.isRequired,
};
