import { Button, ButtonGroup, ButtonVariant, Size } from '../../lib/main';

const ButtonGroupDemoGroup = ({
  variant,
  size,
  orientation,
}: {
  variant?: ButtonVariant;
  size?: Size;
  orientation?: 'horizontal' | 'vertical';
}) => {
  return (
    <>
      <div>
        <ButtonGroup variant={variant} size={size} orientation={orientation}>
          <Button active>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup variant={variant} size={size} orientation={orientation}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup variant={variant} size={size} orientation={orientation}>
          <Button disabled>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup variant={variant} size={size} orientation={orientation}>
          <Button>One</Button>
          <Button disabled>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup variant={variant} size={size} orientation={orientation}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button disabled>Three</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export const ButtonGroupDemo = () => {
  const buttonVariants: ButtonVariant[] = [
    'outline',
    'ghost',
    'primary',
    'secondary',
    'info',
    'warning',
    'danger',
  ];
  return (
    <div className='space-y-2 p-4'>
      <div>Button Group Demo</div>
      {buttonVariants.map((buttonVariant) => {
        return (
          <>
            <div className='flex space-x-2'>
              <ButtonGroupDemoGroup variant={buttonVariant} />
            </div>
            <div className='flex space-x-2'>
              <ButtonGroupDemoGroup variant={buttonVariant} size='medium' />
            </div>
            <div className='flex space-x-2'>
              <ButtonGroupDemoGroup variant={buttonVariant} size='large' />
            </div>
            <div className='inline-flex space-x-2'>
              <ButtonGroupDemoGroup
                variant={buttonVariant}
                orientation='vertical'
              />
              <ButtonGroupDemoGroup
                variant={buttonVariant}
                size='medium'
                orientation='vertical'
              />
              <ButtonGroupDemoGroup
                variant={buttonVariant}
                size='large'
                orientation='vertical'
              />
            </div>
          </>
        );
      })}
    </div>
  );
};
