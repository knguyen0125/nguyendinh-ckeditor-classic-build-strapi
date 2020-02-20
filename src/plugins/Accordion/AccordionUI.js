import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import KeystrokeHandler from '@ckeditor/ckeditor5-utils/src/keystrokehandler';

class AccordionUI extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add('accordion', locale => {
			const command = editor.commands.get('insertAccordion');

			const buttonView = new ButtonView(locale);

			buttonView.set({
				label: t('Accordion'),
				withText: true,
				tooltip: true
			});

			buttonView
				.bind('isOn', 'isEnabled')
				.to(command, 'value', 'isEnabled');

			this.listenTo(buttonView, 'execute', () =>
				editor.execute('insertAccordion')
			);

			return buttonView;
		});

		editor.ui.componentFactory.add('accordionItem', locale => {
			const command = editor.commands.get('insertAccordionItem');

			const buttonView = new ButtonView(locale);

			buttonView.set({
				label: t('Accordion Item'),
				withText: true,
				tooltip: true
			});

			buttonView
				.bind('isOn', 'isEnabled')
				.to(command, 'value', 'isEnabled');

			this.listenTo(buttonView, 'execute', () =>
				editor.execute('insertAccordionItem')
			);

			return buttonView;
		});

		editor.ui.componentFactory.add('accordionItemBreak', locale => {
			const command = editor.commands.get('insertAccordionItemBreak');

			const buttonView = new ButtonView(locale);

			buttonView.set({
				label: t('Accordion Item Break'),
				withText: true,
				tooltip: true
			});

			buttonView
				.bind('isOn', 'isEnabled')
				.to(command, 'value', 'isEnabled');

			this.listenTo(buttonView, 'execute', () =>
				editor.execute('insertAccordionItemBreak')
			);

			return buttonView;
		});
	}
}

export default AccordionUI;
