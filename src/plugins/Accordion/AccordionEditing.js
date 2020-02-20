import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import {
	toWidget,
	toWidgetEditable
} from '@ckeditor/ckeditor5-widget/src/utils';
import InsertAccordionCommand from './InsertAccordionCommand';
import InsertAccordionItemCommand from './InsertAccordionItemCommand';
import InsertAccordionItemBreakCommand from './InsertAccordionItemBreakCommand';

export default class AccordionEditing extends Plugin {
	static get requires() {
		return [Widget];
	}

	init() {
		this._defineSchema();
		this._defineConverters();

		this.editor.commands.add(
			'insertAccordion',
			new InsertAccordionCommand(this.editor)
		);

		this.editor.commands.add(
			'insertAccordionItem',
			new InsertAccordionItemCommand(this.editor)
		);

		this.editor.commands.add(
			'insertAccordionItemBreak',
			new InsertAccordionItemBreakCommand(this.editor)
		);
	}

	_defineSchema() {
		const schema = this.editor.model.schema;

		schema.register('accordion', {
			// Behaves like a self-contained object (e.g. an image).
			isObject: true,

			// Allow in places where other blocks are allowed (e.g. directly in the root).
			allowWhere: '$block'
		});

		schema.register('accordionItem', {
			isLimit: true,
			isObject: true,
			allowIn: 'accordion'
		});

		schema.register('accordionItemBreak', {
			isLimit: true,
			isObject: true,
			allowIn: 'accordion'
		});

		schema.register('accordionItemTitle', {
			// Cannot be split or left by the caret.
			isLimit: true,

			allowIn: 'accordionItem',

			// Allow content which is allowed in blocks (i.e. text with attributes).
			allowContentOf: '$block'
		});

		schema.register('accordionItemDescription', {
			// Cannot be split or left by the caret.
			isLimit: true,

			allowIn: 'accordionItem',

			// Allow content which is allowed in the root (e.g. paragraphs).
			allowContentOf: '$root'
		});

		schema.addChildCheck((context, childDefinition) => {
			if (
				context.endsWith('accordionItemDescription') &&
				(childDefinition.name === 'accordion' ||
					childDefinition.name === 'accordionItem')
			) {
				return false;
			}
		});

		// schema.addChildCheck((context, childDefinition) => {
		// 	if (
		// 		context.endsWith('accordion') &&
		// 		childDefinition.name === 'accordion'
		// 	) {
		// 		return false;
		// 	}
		// });
	}

	_defineConverters() {
		const conversion = this.editor.conversion;

		conversion.for('upcast').elementToElement({
			model: 'accordion',
			view: {
				name: 'div',
				attributes: {
					'data-react-element': 'accordion'
				},
				classes: 'card bg-dark'
			}
		});
		conversion.for('dataDowncast').elementToElement({
			model: 'accordion',
			view: {
				name: 'div',
				attributes: {
					'data-react-element': 'accordion'
				},
				classes: 'card bg-dark'
			}
		});
		conversion.for('editingDowncast').elementToElement({
			model: 'accordion',
			view: (modelElement, viewWriter) => {
				const div = viewWriter.createContainerElement('div', {
					'data-react-element': 'accordion',
					class: 'card bg-dark'
				});

				return toWidget(div, viewWriter, { label: 'Accordion Widget' });
			}
		});

		conversion.for('upcast').elementToElement({
			model: 'accordionItem',
			view: {
				name: 'section',
				attributes: {
					'data-react-element': 'accordion-item'
				},
				classes: ['card-header']
			}
		});

		conversion.for('dataDowncast').elementToElement({
			model: 'accordionItem',
			view: {
				name: 'section',
				attributes: {
					'data-react-element': 'accordion-item'
				},
				classes: ['card-header']
			}
		});

		conversion.for('editingDowncast').elementToElement({
			model: 'accordionItem',
			view: (modelElement, viewWriter) => {
				const section = viewWriter.createContainerElement('section', {
					'data-react-element': 'accordion-item',
					class: 'card-header'
				});

				return toWidget(section, viewWriter, {
					label: 'Accordion Item Widget'
				});
			}
		});

		conversion.for('upcast').elementToElement({
			model: 'accordionItemTitle',
			view: {
				name: 'h2',
				attributes: {
					'data-react-element': 'accordion-item-title'
				},
				classes: ['card-title bg-gray text-dark']
			}
		});

		conversion.for('dataDowncast').elementToElement({
			model: 'accordionItemTitle',
			view: {
				name: 'h2',
				attributes: {
					'data-react-element': 'accordion-item-title'
				},
				classes: ['card-title bg-gray text-dark']
			}
		});

		conversion.for('editingDowncast').elementToElement({
			model: 'accordionItemTitle',
			view: (modelElement, viewWriter) => {
				const h1 = viewWriter.createEditableElement('h2', {
					'data-react-element': 'accordion-item-title',
					class: 'card-title bg-gray text-dark'
				});

				return toWidgetEditable(h1, viewWriter);
			}
		});

		conversion.for('upcast').elementToElement({
			model: 'accordionItemDescription',
			view: {
				name: 'section',
				attributes: {
					'data-react-element': 'accordion-item-description'
				},
				classes: ['card-body bg-gray text-dark']
			}
		});

		conversion.for('dataDowncast').elementToElement({
			model: 'accordionItemDescription',
			view: {
				name: 'section',
				attributes: {
					'data-react-element': 'accordion-item-description'
				},
				classes: ['card-body bg-gray text-dark']
			}
		});

		conversion.for('editingDowncast').elementToElement({
			model: 'accordionItemDescription',
			view: (modelElement, viewWriter) => {
				const div = viewWriter.createEditableElement('div', {
					'data-react-element': 'accordion-item-description',
					class: 'card-body bg-gray text-dark'
				});

				return toWidgetEditable(div, viewWriter);
			}
		});

		conversion.for('upcast').elementToElement({
			model: 'accordionItemBreak',
			view: {
				name: 'div',
				attributes: {
					'data-react-element': 'accordion-item-break',
					'data-content': 'divider'
				},
				classes: ['divider text-center']
			}
		});

		conversion.for('dataDowncast').elementToElement({
			model: 'accordionItemBreak',
			view: {
				name: 'div',
				attributes: {
					'data-react-element': 'accordion-item-break',
					'data-content': 'divider'
				},
				classes: ['divider text-center']
			}
		});

		conversion.for('editingDowncast').elementToElement({
			model: 'accordionItemBreak',
			view: (modelElement, viewWriter) => {
				const div = viewWriter.createContainerElement('div', {
					'data-react-element': 'accordion-item-break',
					class: 'divider text-center',
					'data-content': 'divider'
				});

				return toWidget(div, viewWriter, {
					label: 'Accordion Item Break'
				});
			}
		});
	}
}
