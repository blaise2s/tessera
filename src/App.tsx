import { Button } from './particle';

export const App = () => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='space-x-2'>
        <Button size='large' icon={<div>X</div>} disabled>
          Click me!
        </Button>
        <Button size='large' icon={<div>X</div>}>
          Click me!
        </Button>
        <Button size='large' icon={<div>X</div>} iconPosition='right' disabled>
          Click me!
        </Button>
        <Button size='large' icon={<div>X</div>} iconPosition='right'>
          Click me!
        </Button>
        <Button size='large' icon={<div>X</div>} disabled />
        <Button size='large' icon={<div>X</div>} />
      </div>
      <div className='space-x-2'>
        <Button size='large' disabled>
          Click me!
        </Button>
        <Button size='large'>Click me!</Button>
        <Button>Click me!</Button>
        <Button size='small'>Click me!</Button>
      </div>
      <div className='space-x-2'>
        <Button variant='outline' size='large' disabled>
          Click me!
        </Button>
        <Button variant='outline' size='large'>
          Click me!
        </Button>
        <Button variant='outline'>Click me!</Button>
        <Button variant='outline' size='small'>
          Click me!
        </Button>
      </div>
      <div className='space-x-2'>
        <Button variant='ghost' size='large' disabled>
          Click me!
        </Button>
        <Button variant='ghost' size='large'>
          Click me!
        </Button>
        <Button variant='ghost'>Click me!</Button>
        <Button variant='ghost' size='small'>
          Click me!
        </Button>
      </div>
      <div className='space-x-2'>
        <Button variant='danger' size='large' disabled>
          Click me!
        </Button>
        <Button variant='danger' size='large'>
          Click me!
        </Button>
        <Button variant='danger'>Click me!</Button>
        <Button variant='danger' size='small'>
          Click me!
        </Button>
      </div>
    </div>
  );
};
