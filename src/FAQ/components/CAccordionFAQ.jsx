import PropTypes from "prop-types";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const CAccordionFAQ = ({ title = "", content = "", extraContent }) => {
  return (
    <Accordion sx={{ mb: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
      <AccordionDetails>{extraContent}</AccordionDetails>
    </Accordion>
  );
};

CAccordionFAQ.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  extraContent: PropTypes.string,
};
