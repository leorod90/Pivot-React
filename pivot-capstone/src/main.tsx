import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from "./navigation";
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Prevents screen readers from reading content behind modal

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Navigation />
  </StrictMode>,
)