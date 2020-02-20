import Command from '@ckeditor/ckeditor5-core/src/command';
import { createAccordionItemBreak, findAncestor } from './utils';

export default class InsertAccordionItemBreakCommand extends Command {
	execute() {
		const editor = this.editor;
		const selection = editor.model.document.selection;
		const accordion = findAncestor(
			'accordion',
			selection.getFirstPosition()
		);

		editor.model.change(writer => {
			try {
				const accordionItemBreak = createAccordionItemBreak(writer);

				const row = accordion.getChildIndex(
					selection.getSelectedElement()
				);
				const insertAt = row + 1;

				writer.insert(accordionItemBreak, accordion, insertAt);
			} catch (e) {
				console.error('Cannot insert here');
			}
		});
	}

	refresh() {
		const model = this.editor.model;
		const selection = model.document.selection;
		const allowedIn = model.schema.findAllowedParent(
			selection.getFirstPosition(),
			'accordionItemBreak'
		);

		this.isEnabled = allowedIn !== null;
	}
}
