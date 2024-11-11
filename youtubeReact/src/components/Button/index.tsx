import { ReactNode } from 'react'
import "./Button.css";
type Props = {
    children: ReactNode;
    isLoading: boolean;
    onClick: () => void;
}

function Button({children, isLoading, onClick}: Props) {
  return (
    <button className='py-2 px-4' type="button" onClick={onClick}>{isLoading ? 'Cargando...' : children}</button>
  )
}

export default Button