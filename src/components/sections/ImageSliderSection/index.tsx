import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import Section from '../Section';
import TitleBlock from '../../blocks/TitleBlock';
import SliderBlock from '../../blocks/SliderBlock';

export default function ImageSliderSection(props) {
    const { elementId, colors, title, subtitle, images = [], motion, styles = {}, enableAnnotations } = props;

    return (
        <Section elementId={elementId} className="sb-component-image-gallery-section" colors={colors} styles={styles?.self} {...getDataAttrs(props)}>
            <div className={classNames('w-full', 'flex', 'flex-col', mapStyles({ alignItems: styles?.self?.justifyContent ?? 'flex-start' }))}>
                {title && (
                    <TitleBlock
                        {...title}
                        className={classNames('w-full', 'max-w-sectionBody')}
                        {...(enableAnnotations && { 'data-sb-field-path': '.title' })}
                    />
                )}
                {subtitle && (
                    <p
                        className={classNames(
                            'w-full',
                            'max-w-sectionBody',
                            'text-lg',
                            'sm:text-2xl',
                            styles?.subtitle ? mapStyles(styles?.subtitle) : undefined
                        )}
                        {...(enableAnnotations && { 'data-sb-field-path': '.subtitle' })}
                    >
                        {subtitle}
                    </p>
                )}
                <SliderBlock
                // images={images}
                // hasTopMargin={!!(title?.text || subtitle)}
                // justifyContent={styles?.self?.justifyContent}
                // hasAnnotations={enableAnnotations}
                />
            </div>
        </Section>
    );
}
