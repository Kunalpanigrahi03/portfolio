import dynamic from 'next/dynamic';
import { PinPerspective } from './PinPerspective';
import { ReactNode } from 'react';

interface PinContainerProps {
  children: ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}


const PinContainerClient = dynamic<PinContainerProps>(() => 
  import('./PinContainerClient').then(mod => mod.PinContainerClient), 
  { ssr: false }
);

export const PinContainer = (props: PinContainerProps) => {
  return <PinContainerClient {...props} />;
};

export { PinPerspective };