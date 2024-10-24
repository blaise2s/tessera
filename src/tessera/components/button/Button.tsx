import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { Size, Sizes } from '../properties';
import { clsx } from 'clsx';

const ButtonVariants = {
  primary: 'primary',
  outline: 'outline',
  ghost: 'ghost',
  danger: 'danger',
} as const;
export type ButtonVariant =
  (typeof ButtonVariants)[keyof typeof ButtonVariants];

const commonNonDangerButtonClasses =
  'focus:outline focus:outline-primary-300 focus:outline-offset-2';
const getButtonVariantClasses = (variant: ButtonVariant, active?: boolean) => {
  let className = '';
  switch (variant) {
    case ButtonVariants.primary:
      className = clsx(
        'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
        active && 'bg-primary-700',
        commonNonDangerButtonClasses,
      );
      break;
    case ButtonVariants.outline:
      className = clsx(
        'bg-white border border-secondary-400 text-secondary-900 hover:bg-secondary-50 hover:border-secondary-700 active:bg-secondary-100 active:border-secondary-800',
        active && 'bg-secondary-100 border-secondary-800 z-10',
        commonNonDangerButtonClasses,
      );
      break;
    case ButtonVariants.ghost:
      className = clsx(
        'bg-transparent text-secondary-900 hover:bg-secondary-100 active:bg-secondary-200 focus:bg-secondary-100',
        active && 'bg-secondary-200',
        commonNonDangerButtonClasses,
      );
      break;
    case ButtonVariants.danger:
      className = clsx(
        'bg-error-500 text-white hover:bg-error-600 active:bg-error-700 focus:outline focus:outline-error-300 focus:outline-offset-2',
        active && 'bg-error-700',
      );
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
  'font-medium rounded relative hover:z-20 focus:z-10 disabled:bg-secondary-200 disabled:text-secondary-600 disabled:border-secondary-200 disabled:z-0 disabled:cursor-not-allowed';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: Size;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  active?: boolean;
}

export const Button = ({
  size = 'medium',
  variant = 'primary',
  className: clazzName = '',
  icon,
  iconPosition = 'left',
  active,
  children,
  ...props
}: ButtonProps) => {
  const buttonVariantClasses = getButtonVariantClasses(variant, active);
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
        className={clsx(
          'flex items-center justify-center',
          iconOnRight && 'flex-row-reverse',
        )}
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
