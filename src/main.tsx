
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add animation observer effect after render
const observeAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        // Check if the element is an HTMLElement before accessing style
        if (entry.target instanceof HTMLElement) {
          entry.target.style.opacity = '1';
        }
      }
    });
  }, { threshold: 0.1 });

  // Observe all animation elements
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
};

createRoot(document.getElementById("root")!).render(<App />);

// Initialize animations after render
window.addEventListener('load', observeAnimations);
