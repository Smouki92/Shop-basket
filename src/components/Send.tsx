import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { FC } from 'react'

interface SendProps {
  onClick: () => void
}

export const Send: FC<SendProps> = ({ onClick }) => {
  return (
    <div className="align-self-end">
      <Button style={{ width: '230px' }} size="lg" variant="dark" onClick={onClick} >Оформить</Button>
    </div>
  )
}
