import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Image from 'next/image';

export default function ImageSliderBlock(props) {
    const { elementId, className, images, subtitle, styles = {}, enableAnnotations } = props;
    const [sliderPosition, setSliderPosition] = React.useState(50);
    const [isDragging, setIsDragging] = React.useState(false);

    const handleMove = (clientX: number, rect: DOMRect) => {
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isDragging) return;
        const rect = event.currentTarget.getBoundingClientRect();
        handleMove(event.clientX, rect);
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.touches.length > 0) {
            const touch = event.touches[0];
            handleMove(touch.clientX, rect);
        }
    };

    const handleInteractionStart = () => setIsDragging(true);
    const handleInteractionEnd = () => setIsDragging(false);

    function ImagesForSlider({ images = [], hasTopMargin, justifyContent = 'flex-start', hasAnnotations }) {
        if (images.length !== 2) {
            return null;
        }

        return (
            <div
                className={classNames('w-full', 'flex', 'flex-wrap', 'items-center', mapStyles({ justifyContent: justifyContent }), { 'mt-12': hasTopMargin })}
                {...(hasAnnotations && { 'data-sb-field-path': '.images' })}
            >
                <Image fill priority alt={images[0].altText} src={images[0].url} />

                <div
                    className="absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[50/50] m-auto overflow-hidden select-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <Image fill priority alt={images[1].altText} src={images[1].url} />
                </div>

                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{
                        left: `calc(${sliderPosition}% - 1px)`
                    }}
                >
                    <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
                </div>
            </div>
        );
    }

    return (
        <div className="w-full relative" onMouseUp={handleInteractionEnd} onTouchEnd={handleInteractionEnd}>
            <div
                className="relative w-full max-w-[700px] aspect-[50/50] m-auto overflow-hidden select-none"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={handleInteractionStart}
                onTouchStart={handleInteractionStart}
            >
                <ImagesForSlider images={images} hasTopMargin={!!subtitle} justifyContent={styles?.self?.justifyContent} hasAnnotations={enableAnnotations} />
            </div>
        </div>
    );
}
