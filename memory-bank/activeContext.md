# Active Context

## Current Focus
Transitioning the portfolio from a static single-page app to a multi-page experience that allows for deep dives into specific projects. Just implemented the "LinkedIn Lead Gen" workflow visualization and case study page.

## Recent Changes
- **Refactoring**: Moved `App.tsx` logic to `pages/Home.tsx` and introduced `pages/LinkedinLeadGen.tsx`.
- **Routing**: Implemented `react-router-dom` for client-side navigation.
- **New Component**: Created `WorkflowVisualizer` detailed interactive component for the Bento Grid.
- **Content Updates**: 
    - Changed "Available for Hire" to "Vibe Coding".
    - Consolidated AI skills into "AI API Management".
    - Added "Web Scraping" and "Automations" to skills.
    - Added "Web Scraping" and "Automations" to skills.
    - Cleared generic projects from `constants.tsx` to focus on the Workflow Visualizer.
- **About Page**: Created `pages/About.tsx`. Updated content to remove "Open to Work" and reflect "Computer Engineering" degree.
- **Workflow Visualizer Update**: Enhanced the visual design with a dot grid background, centered nodes, and more prominent "n8n-style" editor aesthetics.
- **Light Mode Refined**: Completed "Ultra-Think" polish.
    - Fixed contrast issues (white-on-white text).
    - Tuned blobs for watercolor-like appearance in light mode.
    - Added dot grid and soft slate backgrounds for a premium feel.
- **Theme Logic**: Defaulted the site to **Dark Mode** for all users unless they have explicitly chosen 'light' in the past.
- **New Project**: Added **Google Maps Scraper Engine**.
    - Created `MapsWorkflowVisualizer` (orange/red theme).
    - Created `GoogleMapsScraper` detail page.
    - Added to BentoGrid layout throughout.
- **Certificates**: Added a new section for professional certifications (Google, IBM, BTK) with a sliding logo marquee.
- **New Project**: Added **Raya AI (Skin Analysis App)**.
    - Created `RayaAiVisualizer` (Pink/Rose beauty-tech theme) simulating a mobile skin scan.
    - Created `RayaAI` detail page focusing on Gemini Vision/OpenAI integration.
    - Added to BentoGrid layout and routing.
- **New Project**: Added **Data Instruction Tool** (ML/Python ETL).
    - Created `DataInstructionVisualizer` (Cyan/Blue data theme) mimicking a terminal console with ML steps.
    - Created `DataInstructionTool` detail page highlighting AsyncIO, Parallel Processing, and TF-IDF/Gemini.
- **Contact Info**: Updated LinkedIn URL to correct profile.
- **Tech Stack Alignment**: Updated `constants.tsx` and `techContext.md` to accurately reflect technologies used in recent projects (Gemini, TensorFlow, React Native, n8n).

## Next Steps
- **Add More Case Studies**: Create pages/visuals for other key projects (as hinted by "We'll continue with the other projects afterwards").
- **Refine Mobile Experience**: Ensure complex visualizations (like the workflow) work well on smaller screens.

## Active Decisions
- **React Router**: Chosen for navigation to avoid page reloads and maintain the SPA feel.
- **Glassmorphism**: Continued use of the glass/neon aesthetic for all new components to ensure consistency.
- **Abstraction**: Decision to show *how* the LinkedIn tool works conceptually rather than showing raw code, to protect IP while demonstrating competence.
