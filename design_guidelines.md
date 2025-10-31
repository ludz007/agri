# Design Guidelines: Audit Compliance Consulting & Agri Training Landing Page

## Design Approach

**Selected Approach**: Reference-Based (Professional Services)
Drawing inspiration from modern professional service websites like HubSpot, Deloitte Digital, and agricultural tech platforms like FarmLogs. The design balances corporate professionalism with agricultural authenticity, emphasizing trust, expertise, and accessibility.

**Key Design Principles**:
- Professional credibility through clean, structured layouts
- Agricultural context through authentic imagery
- Immediate accessibility via prominent WhatsApp CTA
- Single-page narrative flow with clear service communication

---

## Typography System

**Primary Font**: Inter or Source Sans Pro (Google Fonts)
- Hero Headline: 3xl to 5xl, bold (700), tight leading
- Section Headers: 2xl to 3xl, semibold (600)
- Subheadings: xl, medium (500)
- Body Text: base to lg, regular (400), relaxed leading
- CTA Buttons: base to lg, semibold (600), uppercase tracking

**Secondary Font**: For tagline or accent text - Playfair Display or similar serif for "Powerful insight. Proven Success."

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm

**Section Padding**: 
- Desktop: py-20 to py-32
- Mobile: py-12 to py-16

**Container Strategy**:
- Full-width sections with inner max-w-7xl
- Content sections: max-w-6xl
- Text-heavy areas: max-w-4xl

**Grid System**:
- Desktop: 3-column for services, 4-column for certifications
- Tablet: 2-column
- Mobile: Single column stack

---

## Component Library

### Navigation
Fixed header with transparent-to-solid transition on scroll
- Logo (left-aligned)
- Smooth scroll navigation links (Services, Certifications, Contact)
- Primary WhatsApp CTA button (right-aligned, high contrast)

### Hero Section (Full viewport height: 85vh)
Large hero image showing agricultural field/farm operations with professional overlay
- Centered content overlay with semi-transparent backdrop
- Company logo prominently displayed
- Tagline: "Powerful insight. Proven Success."
- Primary headline emphasizing audit compliance expertise
- Dual CTA approach: Primary WhatsApp booking button + Secondary "Learn More" scroll anchor
- WhatsApp button with blurred background treatment, icon + "Book Consultation" text

### Services Section
Grid layout (3 columns desktop, responsive)
Each service card includes:
- Icon representation (agricultural/compliance themed from Heroicons)
- Service title (bold, prominent)
- 2-3 sentence description
- Visual separator between cards

**Services to showcase**:
1. Audit Preparation
2. Internal Audit
3. Induction Training Pack
4. Paperless System
5. Continued Post Audit Support & Availability
6. One-on-One GlobalG.A.P and Siza Training

### Certification Programs Section
Badge-style grid layout (4 columns desktop)
Visual emphasis on compliance credentials:
- Global G.A.P
- Siza Social
- Siza Environmental
- Grasp
- Tesco Nurture
- Albert Heijn
- SPRING
- LEAF

Each badge with icon/logo placeholder, program name, minimal description

### Why Choose Us / Trust Section
Two-column layout (desktop):
- Left: Professional agricultural image (farmer, crops, inspection)
- Right: Key differentiators in bullet/card format
  - Expertise highlight
  - Success metrics (if available)
  - Client-focused approach
  - Post-audit support emphasis

### Contact/Booking Section
Centered layout with emphasis on accessibility
- Consultant information: Estelle Kotze
- Primary WhatsApp CTA (extra large, highly visible)
- Email: auditcc.at@gmail.com
- Phone display: +27817251048
- Operating hours or response time indicator
- Brief reassurance text ("Get expert guidance today" or similar)

### Footer
Three-column layout:
- Company info and tagline
- Quick links (Services, Certifications)
- Contact information repeat
- Social proof or certification badges
- Copyright notice

---

## Image Strategy

**Hero Image**: Full-width, high-quality agricultural scene - either:
- Aerial view of organized farm rows/crops
- Professional farmer/consultant in field with clipboard
- Modern greenhouse or agricultural facility
Overlay: Dark gradient (bottom to top, 70% to 20% opacity) for text legibility

**Section Images**:
- Services section: Background pattern or subtle agricultural texture
- Why Choose Us: Professional on-site consultation photo
- Certification section: Clean background with badge emphasis
- Footer: None, clean background

**Image Treatment**: All images should convey professionalism, modern agricultural practices, and expertise. Avoid stock photo clichés; prefer authentic, documentary-style photography.

---

## Interactive Elements

### WhatsApp Integration
Pre-filled message: "Hi, I'd like to book a consultation with Audit Compliance Consulting & Agri Training"
Link format: `https://wa.me/27817251048?text=Hi,%20I'd%20like%20to%20book%20a%20consultation`

### Buttons
- Primary WhatsApp CTA: High contrast, icon + text, generous padding (px-8 py-4), rounded-lg
- Secondary CTAs: Outlined style with hover fill
- All buttons: Semibold text, subtle shadow, smooth transitions

### Cards
Service and certification cards with:
- Subtle border
- Hover: slight elevation (shadow increase), minimal scale transform
- Clean, organized internal padding (p-6 to p-8)

### Scroll Behavior
- Smooth scroll for navigation links
- Subtle fade-in animations for sections (on scroll into view)
- Parallax effect on hero image (subtle, 20% slower scroll speed)

---

## Accessibility & Polish

- Minimum contrast ratio 4.5:1 for all text
- Focus states for all interactive elements (visible outline)
- Alt text for all images
- Semantic HTML structure (proper heading hierarchy)
- Mobile-first responsive breakpoints (sm, md, lg, xl)
- Touch targets minimum 44x44px on mobile

---

## Content Hierarchy

1. **Hero**: Immediate impact + primary CTA
2. **Services**: Core offering details
3. **Certifications**: Credibility and compliance programs
4. **Why Choose Us**: Differentiation and trust building
5. **Contact/Booking**: Multiple conversion opportunities
6. **Footer**: Supporting information and navigation

**Vertical Rhythm**: Consistent section spacing creates clear visual breaks while maintaining flow. Use larger spacing (py-24 to py-32) between major sections, tighter spacing (py-12 to py-16) within subsections.