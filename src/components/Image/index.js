import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import images from '@/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, ...props }, ref) {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(images.noImage);
  };

  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
