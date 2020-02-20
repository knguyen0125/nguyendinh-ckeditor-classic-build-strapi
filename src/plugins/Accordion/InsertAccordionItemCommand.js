import Command from '@ckeditor/ckeditor5-core/src/command';
import { createAccordionItem, findAncestor } from './utils';

export default class InsertAccordionItemCommand extends Command {
	execute() {
		const editor = this.editor;
		const selection = editor.model.document.selection;
		const accordion = findAncestor(
			'accordion',
			selection.getFirstPosition()
		);

		editor.model.change(writer => {
			const accordionItem = createAccordionItem(writer);

			const row = accordion.getChildIndex(selection.getSelectedElement());
			console.log(row);
			const insertAt = row + 1;

			writer.insert(accordionItem, accordion, insertAt);
		});
	}

	refresh() {
		const model = this.editor.model;
		const selection = model.document.selection;
		const allowedIn = model.schema.findAllowedParent(
			selection.getFirstPosition(),
			'accordionItem'
		);

		this.isEnabled = allowedIn !== null;
	}
}
