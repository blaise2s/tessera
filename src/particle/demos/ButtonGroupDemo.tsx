import { Button, ButtonGroup, ButtonVariant } from '../components';
import { Size } from '../components/properties';

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
  return (
    <div className='space-y-2 p-4'>
      <div>Button Group Demo</div>
      <div className='flex space-x-2'>
        <ButtonGroupDemoGroup />
      </div>
      <div className='flex space-x-2'>
        <ButtonGroupDemoGroup size='medium' />
      </div>
      <div className='flex space-x-2'>
        <ButtonGroupDemoGroup size='large' />
      </div>
      <div className='inline-flex space-x-2'>
        <ButtonGroupDemoGroup orientation='vertical' />
        <ButtonGroupDemoGroup size='medium' orientation='vertical' />
        <ButtonGroupDemoGroup size='large' orientation='vertical' />
      </div>
      {/*  */}
      <div className='flex space-x-2'>
        <ButtonGroupDemoGroup variant='ghost' />
      </div>
      <div className='flex space-x-2'>
        <ButtonGroupDemoGroup size='medium' variant='ghost' />
      </div>
      <div className='flex space-x-2'>
        <ButtonGroupDemoGroup size='large' variant='ghost' />
      </div>
      <div className='inline-flex space-x-2'>
        <ButtonGroupDemoGroup orientation='vertical' variant='ghost' />
        <ButtonGroupDemoGroup
          size='medium'
          orientation='vertical'
          variant='ghost'
        />
        <ButtonGroupDemoGroup
          size='large'
          orientation='vertical'
          variant='ghost'
        />
      </div>
      {/*  */}
      <div className='flex space-x-2'>
        <ButtonGroupDemoGroup variant='primary' />
      </div>
      <div className='flex space-x-2'>
        <ButtonGroupDemoGroup size='medium' variant='primary' />
      </div>
      <div className='flex space-x-2'>
        <ButtonGroupDemoGroup size='large' variant='primary' />
      </div>
      <div className='inline-flex space-x-2'>
        <ButtonGroupDemoGroup orientation='vertical' variant='primary' />
        <ButtonGroupDemoGroup
          size='medium'
          orientation='vertical'
          variant='primary'
        />
        <ButtonGroupDemoGroup
          size='large'
          orientation='vertical'
          variant='primary'
        />
      </div>
      {/*  */}
      <div className='flex space-x-2'>
        <ButtonGroupDemoGroup variant='danger' />
      </div>
      <div className='flex space-x-2'>
        <ButtonGroupDemoGroup size='medium' variant='danger' />
      </div>
      <div className='flex space-x-2'>
        <ButtonGroupDemoGroup size='large' variant='danger' />
      </div>
      <div className='inline-flex space-x-2'>
        <ButtonGroupDemoGroup orientation='vertical' variant='danger' />
        <ButtonGroupDemoGroup
          size='medium'
          orientation='vertical'
          variant='danger'
        />
        <ButtonGroupDemoGroup
          size='large'
          orientation='vertical'
          variant='danger'
        />
      </div>
    </div>
  );
};
