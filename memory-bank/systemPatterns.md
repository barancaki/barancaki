# System Patterns

## Architecture
- **Single Page Application (SPA)**: Built with Vite + React.
- **Routing**: `react-router-dom` v6 for managing views (`Home`, `LinkedinLeadGen`).
- **Styling**: Tailwind CSS for utility-first styling, with a custom `index.css` defining global variables and animations.

## Key Design Patterns
- **Glassmorphism**: Extensive use of `backdrop-filter: blur()`, semi-transparent backgrounds (`bg-white/5`), and subtle borders (`border-white/10`) to create depth.
- **Neon Accents**: Use of specific colors (`neon` #7c3aed, `cyan` #06b6d4) for highlights, shadows, and gradients.
- **Component Composition**: Small, focused components (`Skills`, `ProjectCard`) aggregated into larger sections (`BentoGrid`, `Hero`).
- **Data-Driven UI**: Content (Skills, Projects) is largely driven by `constants.tsx`, making it easy to update without touching JSX (though WorkflowVisualizer has its own internal data structure due to its complexity).

## Directory Structure
- `src/`
    - `components/`: Reusable UI blocks (`Hero`, `Navbar`, `WorkflowVisualizer`).
    - `pages/`: Top-level route components (`Home`, `LinkedinLeadGen`).
    - `constants.tsx`: Source of truth for static content.
    - `index.css`: Global styles and Tailwind directives.

## State Management
- Local React `useState` for UI states (e.g., active step in Workflow Visualizer, text typing effect).
- No global state store (Redux/Zustand) needed currently as the app is simple.
