const fontSize = {
	options: [
		{
			model: 'fontSizeXS',
			title: 'XS',
			view: {
				name: 'span',
				styles: {
					'font-size': '0.75rem'
				},
				attributes: {
					'data-font-size': 'xs'
				}
			}
		},
		{
			model: 'fontSizeSM',
			title: 'SM',
			view: {
				name: 'span',
				styles: {
					'font-size': '0.875rem'
				},
				attributes: {
					'data-font-size': 'sm'
				}
			}
		},
		{
			model: 'fontSizeMD',
			title: 'MD',
			view: {
				name: 'span',
				styles: {
					'font-size': '1rem'
				},
				attributes: {
					'data-font-size': 'md'
				}
			}
		},
		{
			model: 'fontSizeLG',
			title: 'lg',
			view: {
				name: 'span',
				styles: {
					'font-size': '1.125rem'
				},
				attributes: {
					'data-font-size': 'lg'
				}
			}
		},
		{
			model: 'fontSize2XL',
			title: '2XL',
			view: {
				name: 'span',
				styles: {
					'font-size': '1.5rem'
				},
				attributes: {
					'data-font-size': '2xl'
				}
			}
		},
		{
			model: 'fontSize3XL',
			title: '3XL',
			view: {
				name: 'span',
				styles: {
					'font-size': '1.875rem'
				},
				attributes: {
					'data-font-size': '3xl'
				}
			}
		},
		{
			model: 'fontSizeXL',
			title: '4XL',
			view: {
				name: 'span',
				styles: {
					'font-size': '2.25rem'
				},
				attributes: {
					'data-font-size': '4xl'
				}
			}
		},
		{
			model: 'fontSize5XL',
			title: '5XL',
			view: {
				name: 'span',
				styles: {
					'font-size': '3rem'
				},
				attributes: {
					'data-font-size': '5xl'
				}
			}
		},
		{
			model: 'fontSize6XL',
			title: '6XL',
			view: {
				name: 'span',
				styles: {
					'font-size': '4rem'
				},
				attributes: {
					'data-font-size': '6xl'
				}
			}
		},
		{
			model: 'fontSize7XL',
			title: '7XL',
			view: {
				name: 'span',
				styles: {
					'font-size': '5rem'
				},
				attributes: {
					'data-font-size': '7xl'
				}
			}
		},
		{
			model: 'fontSize8XL',
			title: '8XL',
			view: {
				name: 'span',
				styles: {
					'font-size': '6rem'
				},
				attributes: {
					'data-font-size': '8xl'
				}
			}
		},
		{
			model: 'fontSize9XL',
			title: '9XL',
			view: {
				name: 'span',
				styles: {
					'font-size': '7rem'
				},
				attributes: {
					'data-font-size': '9xl'
				}
			}
		}
	]
};

const fontFamily = {
	options: [
		'default',
		{
			model: 'fontFamilyStyledHeader',
			title: 'Styled Header',
			view: {
				name: 'span',
				styles: {
					'font-family': "'UTM Sloop 1', serif"
				},
				attributes: {
					'data-font-family': 'styledHeader'
				}
			}
		},
		{
			model: 'fontFamilyHeader',
			title: 'Header',
			view: {
				name: 'span',
				styles: {
					'font-family': "'UTM Copperplate', serif"
				},
				attributes: {
					'data-font-family': 'header'
				}
			}
		},
		{
			model: 'fontFamilyParagraph',
			title: 'Paragraph',
			view: {
				name: 'span',
				styles: {
					'font-family': "'UTM Aptima', serif"
				},
				attributes: {
					'data-font-family': 'paragraph'
				}
			}
		}
	]
};

const config = {
	fontSize,
	fontFamily
};

export default config;
