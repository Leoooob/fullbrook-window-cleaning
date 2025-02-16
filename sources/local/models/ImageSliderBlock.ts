import { Model } from '@stackbit/types';

export const ImageSliderBlock: Model = {
    type: 'object',
    name: 'ImageSliderBlock',
    label: 'Image Slider Block',
    labelField: 'altText',
    fields: [
    ],
    fieldGroups: [
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ]
};
