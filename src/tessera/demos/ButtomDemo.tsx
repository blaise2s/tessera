import { Button, ButtonVariant } from '../components';

const Icon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='currentColor'
      viewBox='0 0 16 16'
    >
      <path
        fillRule='evenodd'
        d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'
      />
    </svg>
  );
};

const ButtonDemoGroup = ({ variant }: { variant?: ButtonVariant }) => {
  return (
    <>
      <div className='flex items-center space-x-2'>
        <Button variant={variant} size='small'>
          Button
        </Button>
        <Button disabled variant={variant} size='small'>
          Button
        </Button>
        <Button variant={variant} size='small' icon={<Icon />}>
          Button
        </Button>
        <Button disabled variant={variant} size='small' icon={<Icon />}>
          Button
        </Button>
        <Button
          variant={variant}
          size='small'
          icon={<Icon />}
          iconPosition='right'
        >
          Button
        </Button>
        <Button
          disabled
          variant={variant}
          size='small'
          icon={<Icon />}
          iconPosition='right'
        >
          Button
        </Button>
      </div>
      <div className='flex items-center space-x-2'>
        <Button variant={variant}>Button</Button>
        <Button disabled variant={variant}>
          Button
        </Button>
        <Button variant={variant} icon={<Icon />}>
          Button
        </Button>
        <Button disabled variant={variant} icon={<Icon />}>
          Button
        </Button>
        <Button variant={variant} icon={<Icon />} iconPosition='right'>
          Button
        </Button>
        <Button disabled variant={variant} icon={<Icon />} iconPosition='right'>
          Button
        </Button>
      </div>
      <div className='flex items-center space-x-2'>
        <Button variant={variant} size='large'>
          Button
        </Button>
        <Button disabled variant={variant} size='large'>
          Button
        </Button>
        <Button variant={variant} size='large' icon={<Icon />}>
          Button
        </Button>
        <Button disabled variant={variant} size='large' icon={<Icon />}>
          Button
        </Button>
        <Button
          variant={variant}
          size='large'
          icon={<Icon />}
          iconPosition='right'
        >
          Button
        </Button>
        <Button
          disabled
          variant={variant}
          size='large'
          icon={<Icon />}
          iconPosition='right'
        >
          Button
        </Button>
      </div>
    </>
  );
};

export const ButtonDemo = () => {
  return (
    <div className='space-y-2 p-4'>
      <div>Button Demo</div>
      <ButtonDemoGroup />
      <ButtonDemoGroup variant='secondary' />
      <ButtonDemoGroup variant='outline' />
      <ButtonDemoGroup variant='ghost' />
      <ButtonDemoGroup variant='info' />
      <ButtonDemoGroup variant='warning' />
      <ButtonDemoGroup variant='danger' />
    </div>
  );
};
