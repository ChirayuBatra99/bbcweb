/**
 * ═══════════════════════════════════════════════════════════════
 *  SITE CONTENT — Update names, contact info & location here
 * ═══════════════════════════════════════════════════════════════
 */

export const site = {
  name: 'Batra Brain Cafe',
  alternateName: 'Bright Beginnings Coaching Centre',
  shortName: 'BBC',
  motto: 'Where Every Child Matters',
  tagline: 'Nurturing Excellence Since 1992',
  foundedYear: 1992,
  description:
    'A trusted coaching institute guiding students from Class 2 to Class 12 with personalized attention, proven results, and a legacy of academic excellence spanning over four decades.',

  contact: {
    phone: '+91 9855995453',
    phoneDisplay: '+91 98559 95453',
    whatsapp: '919855995453',
    email: 'diksha.batra72@gmail.com',
    hours: 'Mon – Sat: 8:00 AM – 8:00 PM',
  },

  location: {
    address: '647V+M2J, Pensarian Mohalla, Garhshankar, Punjab 144527',
    // Google Maps embed URL — replace with your exact location embed link
  embedUrl:
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.2351709553245!2d76.13994647559936!3d31.214213374355538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391abf0d4f543801%3A0x8579b225c2618c8b!2sBatra%20Brain%20Cafe!5e0!3m2!1sen!2sin!4v1783056196788!5m2!1sen!2sin',
    // Direct link — opens Google Maps app / website
    mapsUrl: 'https://maps.app.goo.gl/P4RH1uAjCeSx6H1TA',
    lat: 19.076,
    lng: 72.8777,
  },

  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
  },

  founders: [
    {
      id: 'founder-mother',
      name: 'Mrs. [Founder Name]',
      role: 'Co-Founder & Director',
      relation: 'Mother',
      bio: 'With decades of dedication to education, she laid the foundation of this institute in 1982 with a vision to make quality learning accessible to every child.',
      subjects: 'Administration & Academic Leadership',
    },
    {
      id: 'founder-son',
      name: 'Mr. [Founder Name]',
      role: 'Co-Founder & Head Faculty',
      relation: 'Son',
      bio: 'Carrying forward a proud family legacy, he brings modern teaching methodologies while preserving the values that have defined us for over 40 years.',
      subjects: 'Science & Competitive Exam Coaching',
    },
  ],

  staff: [
    { id: 'staff-1', name: 'Staff Member 1', role: 'Mathematics Faculty', subjects: 'Maths (Class 6–12)' },
    { id: 'staff-2', name: 'Staff Member 2', role: 'Science Faculty', subjects: 'Physics & Chemistry' },
    { id: 'staff-3', name: 'Staff Member 3', role: 'English Faculty', subjects: 'English & Communication' },
    { id: 'staff-4', name: 'Staff Member 4', role: 'Biology Faculty', subjects: 'Biology & NEET Prep' },
    { id: 'staff-5', name: 'Staff Member 5', role: 'Social Studies Faculty', subjects: 'History & Geography' },
    { id: 'staff-6', name: 'Staff Member 6', role: 'Foundation Faculty', subjects: 'Class 2–5 All Subjects' },
    { id: 'staff-7', name: 'Staff Member 7', role: 'Competitive Exam Coach', subjects: 'JEE & Olympiad Prep' },
  ],

  programs: [
    {
      id: 'foundation',
      title: 'Foundation Classes',
      grades: 'Class 2 – 5',
      description: 'Building strong fundamentals in Maths, Science, English, and logical reasoning from an early age.',
      boards: ['All Boards'],
      icon: 'foundation',
    },
    {
      id: 'middle',
      title: 'Middle School',
      grades: 'Class 6 – 8',
      description: 'Structured curriculum with concept clarity, regular assessments, and personalized doubt sessions.',
      boards: ['CBSE', 'ICSE', 'State Board'],
      icon: 'cbse',
    },
    {
      id: 'secondary',
      title: 'Secondary & Senior Secondary',
      grades: 'Class 9 – 12',
      description: 'Board exam preparation with comprehensive notes, test series, and result-oriented teaching.',
      boards: ['CBSE', 'ICSE', 'State Board'],
      icon: 'icse',
    },
    {
      id: 'jee',
      title: 'JEE Preparation',
      grades: 'Class 11 – 12',
      description: 'Rigorous coaching for JEE Main & Advanced with problem-solving drills and mock tests.',
      boards: ['JEE Main', 'JEE Advanced'],
      icon: 'jee',
    },
    {
      id: 'neet',
      title: 'NEET Preparation',
      grades: 'Class 11 – 12',
      description: 'Focused Biology, Physics & Chemistry coaching designed for medical entrance success.',
      boards: ['NEET'],
      icon: 'neet',
    },
    {
      id: 'state',
      title: 'State Board Special',
      grades: 'Class 6 – 12',
      description: 'Tailored programs aligned with state board syllabi, ensuring top scores in board examinations.',
      boards: ['Maharashtra', 'Gujarat', 'Other State Boards'],
      icon: 'state',
    },
  ],

  stats: [
    { value: '40+', label: 'Years of Excellence' },
    { value: '5000+', label: 'Students Guided' },
    { value: '95%', label: 'Board Pass Rate' },
    { value: '200+', label: 'JEE/NEET Selections' },
  ],

  highlights: [
    'Small batch sizes for individual attention',
    'Experienced faculty with 15+ years average experience',
    'Regular parent-teacher meetings',
    'Comprehensive study material & test series',
    'Doubt-clearing sessions every week',
    'Safe & supportive learning environment',
  ],

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Our Team', href: '#team' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default site;
