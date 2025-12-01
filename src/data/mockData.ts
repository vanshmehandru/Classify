import { PYQ, Note, ExamEvent, Event, ImportantLink } from '../types';

export const mockPYQs: PYQ[] = [
  {
    id: '1',
    title: 'Data Structures and Algorithms',
    subject: '21CSC201J',
    semester: '3',
    year: 2023,
    type: 'end semester',
    downloadUrl: 'https://drive.google.com/drive/folders/1teXP8p4jzzXHp35Z6Wy8HAn4tvckpLvS'
  },
  {
    id: '2',
    title: 'Operating Systems ',
    subject: '21CSC202J',
    semester: '3',
    year: 2023,
    type: 'end semester',
    downloadUrl: 'https://drive.google.com/file/d/1JbsMpAnBDBAuqvyendtizPJo89LktUkx/view?usp=sharing'
  },
  {
    id: '3',
    title: 'Advanced Programming Practice',
    subject: '21CSC203P',
    semester: '3',
    year: 2023,
    type: 'ct-2',
    downloadUrl: 'https://drive.google.com/file/d/13JgajWedB-GtdG1WmeDbM_txUA4Cnhik/view'
  },
  {
    id: '6',                                
    title: 'Computer Organization and Architecture ',
    subject: '21CSS201T',                
    semester: '3',                          
    year: 2023,                             
    type: 'ct-all',                  
    downloadUrl: 'https://drive.google.com/drive/folders/1qqQ5mvOZ1pLHfyYIGdqbds6X3HsYI_DN'
  },
  {
    id: '4',
    title: 'Introduction To Computational Biology',
    subject: '21BTB102T',
    semester: '1',
    year: 2023,
    type: 'end semester',
    downloadUrl: 'https://drive.google.com/drive/folders/1eYPdU8L6Gq2XRyFyULaF_q1KNwycBn72?usp=sharing'
  },
  {
    id: '5',
    title: 'Philosophy Of Engineering',
    subject: '21GNH101J',
    semester: '1',
    year: 2023,
    type: 'Question Bank',
    downloadUrl: 'https://drive.google.com/file/d/19kaUScD7eNuzqWY951GKrvNpVEmpBeZB/view?usp=sharing'
    title: 'Software Engineering',
    subject: 'Software Engineering',
    semester: '7',
    year: 2022,
    type: 'final',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_5'
  },
  {
    id: '7',
    title: 'Calculus and Linear Algebra',
    subject: '21MAB101T',
    semester: '1',
    year: 2024,
    type: 'CT-1',
    downloadUrl: 'https://drive.google.com/drive/folders/1ip_gN8-5k_lhNuDAnwShcwJPVxrWMG0M?usp=sharing'
  },
  {
    id: '8',
    title: 'Chemistry',
    subject: '21CYB101J',
    subject: 'Chemistry',
    semester: '1',
    year: 2024,
    type: 'CT-1',
    downloadUrl: 'https://drive.google.com/drive/folders/1gZND3Bot3g5DKQFl7augCqZfX_qBQUyx?usp=sharing'
  },
  {
    id: '9',
    title: 'Chemistry',
    subject: '21CYB101J',
    subject: 'Chemistry',
    semester: '1',
    year: 2024,
    type: 'CT-2',
    downloadUrl: 'https://drive.google.com/drive/folders/1Sh57xw4vjhhI1TlMDuzaZ485N185ttpt?usp=sharing'
  },
  {
    id: '10',
    title: 'Programming For Problem Solving',
    subject: '21CSS101J',
    subject: 'Programming For Problem Solving',
    semester: '1',
    year: 2024,
    type: 'CT-1',
    downloadUrl: 'https://drive.google.com/drive/folders/1Br_431Udmj9UFKJ7r5mAZoa3xKkgQNfT?usp=sharing'
  },
  {
    id: '11',
    title: 'Advanced Calculus and Complex Analysis',
    subject: '21MAB102T',
    subject: 'Advanced Calculus and Complex Analysis',
    semester: '2',
    year: 2024,
    type: 'CT-1',
    downloadUrl: 'https://drive.google.com/drive/folders/1Cy7coIoxPWkgN_cblEjp1U37H7VOoKAk?usp=sharing'
  },
  {
    id: '12',
    title: 'Advanced Calculus and Complex Analysis',
    subject: '21MAB102T',
    subject: 'Advanced Calculus and Complex Analysis',
    semester: '2',
    year: 2023,
    type: 'end semester',
    downloadUrl: 'https://drive.google.com/drive/folders/1FAFMoEBkJAbRKOyVtdjzK-griu8SW5Ox?usp=sharing'
  },
  {
    id: '13',
    title: 'Communicative English',
    subject: '21LEH101T',
    subject: 'Communicaative English',
    semester: '2',
    year: 2023,
    type: 'CT Papers',
    downloadUrl: 'https://drive.google.com/drive/folders/1JKBw4P4UcpDbFXdtzWu9ZNAs-9YqdmpH?usp=sharing'
  },
  {
    id: '14',
    title: 'Object Oriented Design and Programming',
    subject: '21CSC101T',
    subject: 'Object Oriented Design and Programming',
    semester: '2',
    year: 2023,
    type: 'end semester',
    downloadUrl: 'https://drive.google.com/drive/folders/1BzF4u9FyVf5Tq-IyeY-IXRTmEmX5tKXT?usp=sharing'
  },
  {
    id: '15',
    title: 'Electrical and Electronics Engineering',
    subject: '21EES101T',
    semester: '2',
    year: 2023,
    type: 'end semester',
    downloadUrl: 'https://drive.google.com/drive/folders/1Arg4M6W0bgrDqYUOKvK8j46PBpCFHTwU?usp=sharing'
  },
  {
    id: '16',
    title: 'Semiconductor Physics and Computational Methods',
    subject: '21EES101T',
    semester: '2',
    year: 2023,
    type: 'end semester',
    downloadUrl: 'https://drive.google.com/drive/folders/1dVmykmHu9n4C_MEemz9tIM0PEpJG_di1?usp=sharing',
    subject: 'Electrical and Electronics Engineering',
    semester: '2',
    year: 2023,
    type: 'end semester',
    downloadUrl: 'https://drive.google.com/drive/folders/1Arg4M6W0bgrDqYUOKvK8j46PBpCFHTwU?usp=sharing'
  }

];

export const mockNotes: Note[] = [
  {
    id: '1',
    title: 'DSA Handwritten Notes',
    subject: 'Data Structures',
    semester: '3',
    uploadedBy: 'Vansh',
    uploadDate: '2024-10-16',
    downloadUrl: 'https://drive.google.com/file/d/1aWdnDMxz6FY4yq7FXs3-_gVE1Tukofb2/view',
    fileSize: '5.4 MB'
  },
  {
    id: '2',
    title: 'APP Handwritten Notes',
    subject: 'Advanced Programming Practice',
    semester: '3',
    uploadedBy: 'Vansh',
    uploadDate: '2024-10-16',
    downloadUrl: 'https://drive.google.com/file/d/1IEIS1XWJ_6jSQgiuYqgi6eA0kKbqluSK/view',
    fileSize: '10.0 MB'
  },
  {
    id: '3',
    title: 'Operating Systems Full Syllabus',
    subject: 'Operating Systems',
    semester: '3',
    uploadedBy: 'Vansh',
    uploadDate: '2025-10-16',
    downloadUrl: 'https://drive.google.com/drive/folders/1n7VZmVD2M2T9sDfy4P0pZeFQjiWdWyxM',
    fileSize: '20 MB'
  },
  {
    id: '4',
    title: 'OS Handwritten Notes',
    subject: 'Operating Systems',
    semester: '3',
    uploadedBy: 'Amulya',
    uploadDate: '2024-10-16',
    downloadUrl: 'https://drive.google.com/drive/folders/1iTPtjfaj8H5EGcdy_KymedKiM9tEhMJS',
    fileSize: '9.2 MB'
  },
  {
    id: '5',
    title: 'Integration Formula sheet',
    subject: 'Transforms and Boundary Value Problems',
    semester: '3',
    uploadedBy: 'Vansh',
    uploadDate: '2024-10-16',
    downloadUrl: 'https://drive.google.com/file/d/1_vlBS0mtCu9fM1BQOMz-gvsyIu6ir_uo/view',
    fileSize: '5.0 MB'
  },
  {
    id: '6',
    title: 'Semiconductor Physics all derivations',
    subject: 'Semiconductor Physics and Computational Methods',
    semester: '3',
    uploadedBy: 'Amulya',
    uploadDate: '2024-10-16',
    downloadUrl: 'https://drive.google.com/file/d/1auuONnYec4qeDkhGDAnyPjhwg6BZQZ2J/view?usp=sharing',
    fileSize: '13.7 MB'
  },

  
    title: 'Unit 1 oodp',
    subject: 'Object Oriented Design and Programming',
    semester: '2',
    uploadedBy: 'Daksh',
    uploadDate: '2024-10-29',
    downloadUrl: 'https://drive.google.com/file/d/1-S-N6nJsmWdKBTMZYekSHYMTUxjmEG-z/view?usp=share_link',
    fileSize: '4.0 MB'
  },
  {
    id: '7',
    title: 'Cell',
    subject: 'Biology',
    semester: '1',
    uploadedBy: 'Daksh',
    uploadDate: '2024-10-29',
    downloadUrl: 'https://drive.google.com/drive/folders/10zuIBNexvDR8Kplv1iFLN3rUqIBbf3by?usp=share_link',
    fileSize: '4.0 MB'
  },
  {
    id: '8',
    title: 'Electrochemistry',
    subject: 'Chemistry',
    semester: '1',
    uploadedBy: 'Daksh',
    uploadDate: '2024-10-29',
    downloadUrl: 'https://drive.google.com/file/d/1p-AvzPT7LiCQ46SoMWLY6SfmNSFjS4js/view?usp=share_link',
    fileSize: '4.0 MB'
  },
];

export const mockExams: ExamEvent[] = [
  {
    id: '1',
    title: 'APP PROJECT REVIEW',
    subject: 'Advanced Programming Practice',
    date: '2025-10-16',
    time: '10:00 AM',
    type: 'practical',
    room: 'Room 506'
  },
  {
    id: '2',
    title: 'COA CT-2',
    subject: 'Computer Organization and Architecture',
    date: '2025-10-15',
    time: '2:00 PM',
    type: 'midterm',
    room: 'Room 506'
  },
  {
    id: '3',
    title: 'OS Practical Exam',
    subject: 'Operating Systems',
    date: '2024-02-25',
    time: '9:00 AM',
    type: 'practical',
    room: 'Lab 3'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Aaruush 2025',
    description: 'National Level Techno-Management Fest 2025',
    date: '2025-09-10',
    time: '9:00 AM',
    location: 'TP Ganeshan Auditorium',
    type: 'fest'
  },
  {
    id: '2',
    title: 'React Workshop',
    description: 'Learn modern React development techniques',
    date: '2024-10-18',
    time: '2:00 PM',
    location: 'Imac Lab',
    type: 'workshop'
  },
  {
    id: '3',
    title: 'Portfolio submission deadline',
    description: 'Final deadline for APP portfolio submission',
    date: '2024-10-16',
    time: '11:59 PM',
    location: 'Online',
    type: 'deadline'
  }
];

export const mockImportantLinks: ImportantLink[] = [
  {
    id: '1',
    title: 'Student Portal',
    description: 'Access grades, transcripts, and academic records',
    url: 'https://sp.srmist.edu.in/',
    category: 'academic',
    icon: 'GraduationCap'
  },
  {
    id: '2',
    title: 'Library Portal',
    description: 'Search books, journals, and digital resources',
    url: 'https://library.srmist.edu.in/univlib/',
    category: 'resources',
    icon: 'Library'
  },
  {
    id: '4',
    title: 'Hostel Information',
    description: 'Accommodation details and services',
    url: 'https://www.srmist.edu.in/srm-hostels/',
    category: 'campus',
    icon: 'Home'
  },
  {
    id: '5',
    title: 'Elab',
    description: 'Elab is a auto evaluation tool for learning programming',
    url: 'https://dld.srmist.edu.in/ktretelab2024/#/',
    category: 'academic',
    icon: 'Code'
  },
  {
    id: '6',
    title: 'eCurricula',
    description: 'Provides centralized access to high quality educational resources',
    url: 'https://dld.srmist.edu.in/ktretecurricula2024/#/ktretecurricula2024/',
    category: 'academic',
    icon: 'Code'
  },
];
