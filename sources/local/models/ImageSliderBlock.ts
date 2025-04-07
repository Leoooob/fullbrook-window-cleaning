import { Model } from '@stackbit/types';

export const ImageSliderBlock: Model = {
    type: 'object',
    name: 'ImageSliderBlock',
    label: 'Image Slider Block',
    labelField: 'altText',
    fields: [
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            required: false,
            default: 'This is a subtitle',
            hidden: false,
            localized: false
        },
        {
            type: 'list',
            name: 'images',
            label: 'Images',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['ImageBlock']
            }
        },
        {
            type: 'string',
            name: 'elementId',
            label: 'Element ID',
            description: 'The unique ID for an HTML element, must not contain whitespace',
            required: false,
            default: '',
            hidden: false,
            localized: false,
            group: 'settings'
        },
        {
            type: 'style',
            name: 'styles',
            label: 'Styles',
            description: 'The styles field is controlled by Netlify Create editor',
            required: false,
            hidden: false,
            localized: false,
            styles: {
                self: {
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    justifyContent: ['flex-start', 'flex-end', 'center']
                },
                subtitle: {
                    fontStyle: '*',
                    fontWeight: ['400', '500', '700'],
                    textDecoration: '*',
                    textAlign: '*'
                }
            }
        }
    ],
    fieldGroups: [
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ]
};
