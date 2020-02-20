import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AccordionEditing from './AccordionEditing';
import AccordionUI from './AccordionUI';
// import './index.css';

class Accordion extends Plugin {
	static get requires() {
		return [AccordionEditing, AccordionUI];
	}
}

export default Accordion;
