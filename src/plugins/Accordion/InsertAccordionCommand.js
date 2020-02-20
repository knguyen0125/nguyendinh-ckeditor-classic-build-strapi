import Command from '@ckeditor/ckeditor5-core/src/command';
import { createAccordion } from './utils';

export default class InsertAccordionCommand extends Command {
	execute() {
		this.editor.model.change(writer => {
			this.editor.model.insertContent(createAccordion(writer));
		});
	}

	refresh() {
		const model = this.editor.model;
		const selection = model.document.selection;
		const allowedIn = model.schema.findAllowedParent(
			selection.getFirstPosition(),
			'accordion'
		);

		this.isEnabled = allowedIn !== null;
	}
}
