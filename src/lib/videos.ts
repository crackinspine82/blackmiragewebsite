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
    id: '1',
    src: '/videos/castrol.mp4',
    clientName: 'Castrol',
    serviceCategory: 'Audio-Visual',
    client: 'Castrol India Ltd. (Lubricants Leader)',
    agency: 'Goalseek Solutions Pvt Ltd.',
    strategicChallenge: 'Castrol was launching a disruptive, subscription-based B2B tool to digitize distributor operations. The challenge was Change Management: How to communicate a complex, intangible SaaS (Software as a Service) value proposition to a non-technical audience of traditional distributors without friction?',
    solutionServices: '2D Animation & Motion Graphics, Scriptwriting & Storyboarding, Creative Strategy',
    execution: 'We utilized Visual Storytelling to simplify complexity. We produced a high-fidelity 2D Explainer Video that deconstructed the technical workflow into a relatable narrative. By combining clear metaphorical visuals with a persuasive script, we highlighted the transition from manual errors to automated productivity.',
    businessImpact: 'Accelerated Digital Adoption. The asset became the cornerstone of their internal training and external marketing. It effectively reduced resistance to change, ensuring faster onboarding of distributors onto the new digital platform.'
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
    agency: 'Not Specified',
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
    agency: 'Not Specified',
    strategicChallenge: 'Despite possessing high-end engineering capabilities, Paramatrix\'s digital persona was failing to resonate with enterprise decision-makers. They required a Strategic Brand Repositioning to pivot from a generic "IT Vendor" identity to a "Global Technology Partner," specifically to support their expansion into international markets.',
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
    agency: 'Not Specified',
    strategicChallenge: 'In the sensitive domain of Background Verification and POSH compliance, trust is the only currency. The client struggled with low visibility and needed to build Topical Authority to generate inbound leads without resorting to aggressive sales tactics.',
    solutionServices: 'SEO Strategy, Content Marketing, Social Media Management, Thought Leadership',
    execution: 'We executed a Content-Led Growth Strategy. By targeting high-intent, long-tail keywords ("POSH mandates," "Compliance norms"), we developed authoritative blog assets. Simultaneously, we curated a LinkedIn strategy focused on Educational Carousels, turning dry legal mandates into bite-sized, shareable insights for HR professionals.',
    businessImpact: 'Brand Credibility & Lead Generation. The strategy doubled their social engagement and significantly improved organic search rankings. We successfully positioned Employee Crossings as a trusted compliance partner, driving a consistent stream of high-quality B2B inquiries.'
  }
];
