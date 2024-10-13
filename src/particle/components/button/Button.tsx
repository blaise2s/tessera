import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { Size, Sizes } from '../properties';
import { clsx } from 'clsx';

const Variants = {
  primary: 'primary',
  outline: 'outline',
  ghost: 'ghost',
  danger: 'danger',
} as const;
type Variant = (typeof Variants)[keyof typeof Variants];

const commonNonDangerButtonClasses =
  'focus:outline focus:outline-orange-300 focus:outline-offset-2';
const getButtonVariantClasses = (variant: Variant) => {
  let className = '';
  switch (variant) {
    case Variants.primary:
      className = clsx(
        'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700',
        commonNonDangerButtonClasses,
      );
      break;
    case Variants.outline:
      className = clsx(
        'bg-white border border-gray-400 text-gray-900 hover:bg-gray-50 hover:border-gray-700 active:bg-gray-100 active:border-gray-800',
        commonNonDangerButtonClasses,
      );
      break;
    case Variants.ghost:
      className = clsx(
        'bg-transparent text-gray-900 hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-100',
        commonNonDangerButtonClasses,
      );
      break;
    case Variants.danger:
      className =
        'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:outline focus:outline-red-300 focus:outline-offset-2';
      break;
  }
  return className;
};

const getButtonSizeClasses = (size: Size) => {
  let className = '';
  switch (size) {
    case Sizes.small:
      className = 'px-2 py-1';
      break;
    case Sizes.medium:
      className = 'px-4 py-2';
      break;
    case Sizes.large:
      className = 'px-6 py-3';
      break;
  }
  return className;
};

const commonButtonClasses =
  'font-medium rounded disabled:bg-gray-200 disabled:text-gray-600 disabled:border-none disabled:cursor-not-allowed';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: Size;
  variant?: Variant;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button = ({
  size = 'medium',
  variant = 'primary',
  className: clazzName = '',
  icon,
  iconPosition = 'left',
  children,
  ...props
}: ButtonProps) => {
  const buttonVariantClasses = getButtonVariantClasses(variant);
  const buttonSizeClasses = getButtonSizeClasses(size);
  const className = clsx(
    buttonVariantClasses,
    buttonSizeClasses,
    commonButtonClasses,
    clazzName,
  );

  const iconOnRight = iconPosition === 'right';
  return (
    <button {...{ className, ...props }}>
      <span
        className={clsx('flex items-center', iconOnRight && 'flex-row-reverse')}
      >
        {icon && (
          <span
            className={clsx(
              children && iconOnRight && 'pl-3',
              children && !iconOnRight && 'pr-3',
            )}
          >
            {icon}
          </span>
        )}
        {children}
      </span>
    </button>
  );
};
