import clsx from 'clsx';
import { cloneElement, ReactElement } from 'react';
import { ButtonProps, ButtonVariant } from '../Button';
import { Size } from '../properties';

interface ButtonGroupProps {
  children: ReactElement<ButtonProps>[];
  variant?: ButtonVariant;
  size?: Size;
  orientation?: 'horizontal' | 'vertical';
}

const horizontalFirstButtonClasses =
  '[&>:first-child]:rounded-br-none [&>:first-child]:rounded-tr-none';
const horizontalMiddleButtonClasses =
  '[&>:not(:first-child):not(:last-child)]:rounded-none [&>:not(:first-child)]:-ml-px';
const horizontalLastButtonClasses =
  '[&>:last-child]:rounded-bl-none [&>:last-child]:rounded-tl-none';
const verticalFirstButtonClasses =
  '[&>:first-child]:rounded-br-none [&>:first-child]:rounded-bl-none';
const verticalMiddleButtonClasses =
  '[&>:not(:first-child):not(:last-child)]:rounded-none [&>:not(:first-child)]:-mt-px';
const verticalLastButtonClasses =
  '[&>:last-child]:rounded-tl-none [&>:last-child]:rounded-tr-none';

export const ButtonGroup = ({
  children: _children,
  variant = 'outline',
  size = 'small',
  orientation = 'horizontal',
}: ButtonGroupProps) => {
  // Add variant to children if they haven't been given one explicitly
  // and add size to children if they haven't been given one explicitly.
  // It would be a little silly to mix and match these, but it's possible, and this
  // should be left up to the consumer to decide.
  const children = _children.map((child, _key) => {
    const key = child.props.key || _key;
    if (!child.props.variant && !child.props.size) {
      return cloneElement(child, { variant, size, key });
    } else if (!child.props.variant) {
      return cloneElement(child, { variant, key });
    } else if (!child.props.size) {
      return cloneElement(child, { size, key });
    }
    return cloneElement(child, { key });
  });

  const classes =
    orientation === 'horizontal'
      ? clsx(
          'inline-flex',
          '[&>:not(:first-child)]:border-l',
          horizontalFirstButtonClasses,
          horizontalMiddleButtonClasses,
          horizontalLastButtonClasses,
        )
      : clsx(
          'inline-flex flex-col',
          '[&>:not(:first-child)]:border-t',
          verticalFirstButtonClasses,
          verticalMiddleButtonClasses,
          verticalLastButtonClasses,
        );

  return <div className={classes}>{children}</div>;
};
