export const createAccordionItem = writer => {
	const accordionItem = writer.createElement('accordionItem');
	const accordionItemTitle = writer.createElement('accordionItemTitle');
	const accordionItemDescription = writer.createElement(
		'accordionItemDescription'
	);

	writer.append(accordionItemTitle, accordionItem);
	writer.append(accordionItemDescription, accordionItem);

	writer.appendElement('paragraph', accordionItemDescription);

	return accordionItem;
};

export const createAccordionItemBreak = writer => {
	return writer.createElement('accordionItemBreak');
};

export const createAccordion = writer => {
	const accordion = writer.createElement('accordion');
	const accordionItem = createAccordionItem(writer);

	writer.append(accordionItem, accordion);
	return accordion;
};

export const findAncestor = (parentName, position) => {
	let parent = position.parent;

	while (parent) {
		if (parent.name === parentName) {
			return parent;
		}

		parent = parent.parent;
	}
};
