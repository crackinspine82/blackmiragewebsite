export interface VideoItem {
  id: string;
  src: string;
  clientName: string;
  serviceCategory: string;
  client?: string;
  agency?: string;
  ask?: string;
  delivered?: string;
  value?: string;
  strategicChallenge?: string;
  solutionServices?: string;
  execution?: string;
  businessImpact?: string;
}

export const videoItems: VideoItem[] = [
  {
    id: '2',
    src: '/videos/gulf.mp4',
    clientName: 'Gulf Oil',
    serviceCategory: 'E-Learning',
    agency: 'Goalseek Solutions Pvt Ltd.',
    strategicChallenge: 'With a focus on strengthening their team\'s understanding of sector-specific operations, Gulf Oil sought to develop a digital training module under the theme "Know Your Sector" to build domain knowledge and better align their solutions with customer needs. Challenges: To design and develop interactive, engaging, and informative e-learning modules tailored to Gulf Oil\'s sales and technical teams, focused on Sector overview and market size, Challenges faced in each sector and lubrication needs, Gulf Oil\'s product relevance and application in each industry, simplifying complex industrial processes for a non-technical audience, and ensuring visual and instructional consistency across diverse sectors.',
    solutionServices: 'Instructional Design, Visual Design & Animation, Development on Articulate 360, Voiceover & Audio Sync, Assessments',
    execution: 'Designed clear learning objectives and flow for each sector. Scripted storyboard with scenarios, infographics, and knowledge checks. Developed custom icons, illustrations, and process diagrams specific to each industry. Designed a unified visual style using Gulf Oil branding elements. Created industry-relevant animations to illustrate heavy machinery, lubrication points, etc. Built multiple modules using Articulate Storyline 360 for interactivity. Professionally recorded and edited voiceovers for narration in English. Synced audio with animations and transitions for a seamless experience. Created end-of-module quizzes with randomized questions.',
    businessImpact: 'By leveraging Articulate 360\'s versatile platform and applying instructional design best practices, we successfully delivered a high-quality digital learning experience for Gulf Oil India. The "Know Your Sector" e-learning series is now a key part of their sales enablement and on-boarding programs, driving product alignment and customer engagement across core industries.'
  },
  {
    id: '3',
    src: '/videos/fabula.mp4',
    clientName: 'Fabula Coatings',
    serviceCategory: 'Digital',
    client: 'Fabula Coatings (Paint Manufacturing)',
    agency: 'Goalseek Solutions Pvt Ltd.',
    strategicChallenge: 'Fabula was grappling with "Operational Opaqueness." Their reliance on manual spreadsheets for inventory and production created data silos, leading to stock discrepancies and fulfillment delays. They needed a Custom Enterprise Resource Planning (ERP) solution to digitize their manufacturing workflow.',
    solutionServices: 'Full-Stack Web Application Development, Database Architecture, Business Process Automation',
    execution: 'We architected a bespoke Manufacturing Command Center using the MERN stack (MongoDB, Express, React, Node). This end-to-end solution digitized the entire lifecycle: from Raw Material Procurement and Batch Formulation logic to Real-time Inventory Tracking and Order Dispatch.',
    businessImpact: 'Process Optimization & Scalability. The system eliminated data redundancy and manual errors. By providing management with a real-time, 360-degree view of operations, Fabula was able to scale production capacity without a proportional increase in administrative overhead.'
  },
  {
    id: '4',
    src: '/videos/drivol.mp4',
    clientName: 'DRIVOL India',
    serviceCategory: 'Digital',
    client: 'DRIVOL India Pvt. Ltd. (Automotive Lubricants)',
    agency: 'Black Mirage',
    strategicChallenge: 'DRIVOL faced a critical disconnect between their HQ and their fragmented network of distributors and mechanics. They needed to move beyond traditional supply chains and orchestrate a Digital Transformation to capture real-time market data, streamline ordering, and drive brand stickiness through a gamified loyalty ecosystem.',
    solutionServices: 'Mobile Application Development (Android/iOS), UI/UX Design, Cloud Backend Architecture',
    execution: 'We engineered a robust, omnichannel mobile ecosystem. The solution featured an intuitive Product Discovery Engine for technical specs, a seamless Order Management System (OMS) for instant fulfillment, and an integrated QR-Code Loyalty Module to incentivize repeat purchase behavior among mechanics. The backend was built on Firebase for real-time data synchronization across the entire supply chain.',
    businessImpact: 'Operational Excellence & Customer Retention. The platform successfully bridged the "phygital" gap, transforming a commodity-based transaction model into a relationship-driven engagement loop. It significantly reduced order processing latency and fostered a high-retention user base.'
  },
  {
    id: '5',
    src: '/videos/paramatrix.mp4',
    clientName: 'Paramatrix Technologies',
    serviceCategory: 'Strategy',
    client: 'Paramatrix Technologies Pvt. Ltd. (IT Services)',
    agency: 'Black Mirage',
    strategicChallenge: 'Despite possessing high-end engineering capabilities, Paramatrix\'s digital persona was wanting to resonate with enterprise decision-makers. They required a Strategic Brand Repositioning to pivot from a generic "IT Vendor" identity to a "Global Technology Partner," specifically to support their expansion into international markets.',
    solutionServices: 'Content Strategy & Audit, B2B Copywriting, SEO Optimization, Corporate Communications',
    execution: 'We deployed a comprehensive Content Architecture Overhaul. By conducting a deep-dive audit, we restructured their entire digital narrative. We translated complex technical competencies (Microservices, Offshore Development Centers) into compelling Business Value Propositions, ensuring the messaging was not just technically accurate but also commercially persuasive for C-suite audiences.',
    businessImpact: 'Authority Building & Global Visibility. The revamped content strategy successfully established Paramatrix as a thought leader. The SEO-optimized narrative enhanced their organic search footprint, effectively converting passive site visitors into qualified B2B leads.'
  },
  {
    id: '6',
    src: '/videos/employeecrossings.mp4',
    clientName: 'Employee Crossings',
    serviceCategory: 'Strategy',
    client: 'Employee Crossings (HR Compliance)',
    agency: 'Black Mirage',
    strategicChallenge: 'In the sensitive domain of Background Verification and POSH compliance, trust is the only currency. The client struggled with low visibility and needed to build Topical Authority to generate inbound leads without resorting to aggressive sales tactics.',
    solutionServices: 'SEO Strategy, Content Marketing, Social Media Management, Thought Leadership',
    execution: 'We executed a Content-Led Growth Strategy. By targeting high-intent, long-tail keywords ("POSH mandates," "Compliance norms"), we developed authoritative blog assets. Simultaneously, we curated a LinkedIn strategy focused on Educational Carousels, turning dry legal mandates into bite-sized, shareable insights for HR professionals.',
    businessImpact: 'Brand Credibility & Lead Generation. The strategy doubled their social engagement and significantly improved organic search rankings. We successfully positioned Employee Crossings as a trusted compliance partner, driving a consistent stream of high-quality B2B inquiries.'
  },
  {
    id: '7',
    src: '/videos/ekwedor.mp4',
    clientName: 'Ekwedor Films',
    serviceCategory: 'Digital',
    agency: 'Black Mirage',
    strategicChallenge: 'Ekwedor Films had completed production on their short film I Saw Desufnoc, created for submission to international film festivals. While the film itself was already strong, it needed equally compelling support material, brochures, inlays, and DVD packaging that could match its artistic quality. The challenge was clear, to design festival-ready collateral that would stand out on an international stage, reflect the film\'s tone and craftsmanship, and leave a lasting impression on juries and curators.',
    solutionServices: 'Creative write-up (synopsis) about the film, Designing the posters, inlays, and packaging.',
    execution: 'Our design team immersed themselves in the film, watching it repeatedly to fully absorb its mood and narrative. They collaborated closely with the director and writer, translating the essence of the story into visually striking concepts that aligned seamlessly with the film\'s tone. The designs were executed using Adobe Photoshop and CorelDRAW. To enhance the physical experience, the team conceptualized custom tin boxes for the DVDs, featuring a wooden frame that cradled the disc. These metal boxes were printed with bespoke artwork and presented in handcrafted jute bags, sealed with denim-style metal buttons and screen-printed with the film\'s title I Saw Desufnoc creating a package that felt both rustic and cinematic.',
    businessImpact: 'Our design and packaging elevated the visual identity of an already remarkable film. We\'re proud to have contributed to a project that was awarded Best Picture at the 3rd Eye Asian Film Festival by an international jury and Best Picture at the prestigious IDPA.'
  },
  {
    id: '8',
    src: '/videos/goalseek.mp4',
    clientName: 'GoalSeek Solutions',
    serviceCategory: 'Strategy',
    agency: 'Black Mirage',
    strategicChallenge: 'As an organization focused on high-value consulting and business transformation, GoalSeek had already built a strong foundation of expertise and innovation. To further amplify its market presence, the next natural step was to align its digital identity with the sophistication and impact of its service offerings. To effectively help clients expedite their transformation journeys, GoalSeek needed a platform that demonstrated technological sophistication and thought leadership from the first click.',
    solutionServices: 'Full-Stack Web Design, Content Architecture, Digital Brand Transformation, UX Strategy',
    execution: 'We designed a digital experience that mirrors GoalSeek\'s Consulting-Learning-Technology triad. Consulting-First Navigation: We restructured the information architecture to lead with "Point Solutions," allowing visitors to quickly identify high-value service entries. Learning-Centric Content: We developed a content framework that positions GoalSeek as a mentor, using clear, authoritative language to simplify complex "transformation" concepts. Agile Tech Stack: By utilizing a high-performance framework (Next.js), we ensured the site itself felt like an "expedited journey"—lightning-fast, responsive, and technically seamless—to reflect their own commitment to innovation.',
    businessImpact: 'Value-Driven Authority & Growth. The website was transformed from a simple URL into a high-performance conversion tool. By aligning the digital interface with their pitch of "Expediting Business Transformation," we successfully reduced the sales cycle. The new platform now serves as a credible proof-of-concept for their technological capabilities, driving higher-quality leads from organizations seeking modern, high-value consulting solutions.'
  }
];
