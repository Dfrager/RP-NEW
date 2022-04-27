import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordion = ({accordionHeader, children, index}) => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<Accordion
			expanded={expanded === `panel${index}`}
			onChange={handleChange(`panel${index}`)}
			sx={{boxShadow: 'none'}}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls={`panel${index}`}
				id={`panel${index}`}
			>
				<Typography sx={{fontWeight: 700, flexShrink: 0}}>{accordionHeader}</Typography>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
};

export default CustomAccordion;
