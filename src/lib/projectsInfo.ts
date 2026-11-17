export const portfolioItems = [
  {
    slug: 'quaddle',
    text: 'Quaddle',
    image: '/quaddledemo.gif',
    video: '/quaddledemo.mp4',
    aboutPics: [
      '/quaddleabout1.jpg',
      '/quaddleabout2.jpg',
      '/quaddleabout3.jpg',
      '/quaddledemo.gif',
      '/quaddleschematic.png',
      '/quaddlewebui.jpeg',
      '/quaddleappui.jpeg',
    ],
    description:
      'Quaddle is an open-source quadruped robotic dog project engineered to demonstrate real-world robotics, embedded systems, and IoT capabilities. Designed as a streamlined and accessible robot dog, it utilizes an ingenious 1-DOF (Degree of Freedom) mechanical linkage design per leg driven by SG90 micro servos and powered by an ESP32 / ESP8266 microcontroller, eliminating the need for complex inverse kinematics while delivering agile and lifelike movements. Quaddle hosts an onboard Wi-Fi web server for instant, zero-install browser control and includes a dedicated native Android controller app. With integrated dual-LED eyes, LiPo battery power management, and versatile pre-programmed motion routines—including walking, turning, sitting, standing, lying down, waving, and idle tail-wagging—Quaddle brings interactive, remotely controlled robotics to life.',
    link: 'https://github.com/AlphaBeta07/Quaddle/',
    more: ['/portfolio/opencat', '/portfolio/notespathv'],
    moreImgs: ['/opencatmain.png', '/notespathvmain.png'],

    features: [
      {
        title: '1-DOF Leg Linkage Mechanism',
        description:
          'Features an ingenious single degree-of-freedom per leg linkage system that delivers coordinated walking, trotting, and turning without demanding computationally intensive inverse kinematics.',
      },
      {
        title: 'ESP32 & ESP8266 Architecture',
        description:
          'Powered by high-performance 32-bit Wi-Fi microcontrollers that handle multi-channel servo PWM signaling, asynchronous network handling, and state machine motion routines.',
      },
      {
        title: 'Onboard Web Control Dashboard',
        description:
          'Hosts a mobile-responsive web interface directly on the microcontroller flash memory, allowing anyone on the Wi-Fi network to drive Quaddle directly from a browser without installing software.',
      },
      {
        title: 'Dedicated Android Application',
        description:
          'Includes a pre-built native Android APK with custom directional control pads, status monitors, and rapid action triggers for intuitive smartphone steering.',
      },
      {
        title: 'Dynamic Motion Sequences',
        description:
          'Pre-programmed with multiple expressive robotic behaviors including forward and backward walking, directional turning, sitting, standing, lying down, and greeting waves.',
      },
      {
        title: 'Autonomous Idle & Tail-Wagging',
        description:
          'Intelligent inactivity detection automatically triggers expressive animations—such as playful tail-wagging and eye-blinking routines—when the robot remains idle for several minutes.',
      },
      {
        title: 'Fully 3D Printable Chassis',
        description:
          'Designed in Blender with modular, snap-in components and lightweight geometries that can be easily fabricated on any standard consumer 3D printer without complex supports.',
      },
      {
        title: 'Integrated Power & Battery Circuitry',
        description:
          'Features a complete portable power supply system utilizing a rechargeable lithium battery, TP4056 USB charging protection module, and a 5V boost converter with filter capacitors to prevent servo voltage drops.',
      },
      {
        title: 'Expressive Dual-LED Eyes',
        description:
          'Hardware status indicators configured as robot eyes that provide clear visual feedback for power status, Wi-Fi connectivity, and command execution.',
      },
      {
        title: 'Open-Source & Hackable',
        description:
          'Clean, well-documented Arduino C++ firmware and CAD models allowing makers to easily modify gait algorithms, add sensors, or expand IoT integrations.',
      },
    ],

    technologies: [
      {
        title: 'ESP32 / ESP8266',
        description:
          '32-bit Wi-Fi enabled microcontrollers providing real-time processing, wireless connectivity, and hardware PWM servo signal generation.',
      },
      {
        title: 'C++ / Arduino IDE',
        description:
          'Embedded firmware written in C++ using Arduino frameworks, featuring non-blocking timer loops, servo driver logic, and HTTP server handlers.',
      },
      {
        title: 'SG90 Micro Servos',
        description:
          'Compact 9g servomotors delivering precise angular positioning and optimal torque-to-weight ratio for driving leg linkages.',
      },
      {
        title: 'Embedded Web Server',
        description:
          'Lightweight HTML5, CSS3, and JavaScript control interface hosted directly in microcontroller flash memory for instant local network control.',
      },
      {
        title: 'Android (APK)',
        description:
          'Custom Android application providing tactile robotic controls, IP configuration, and low-latency Wi-Fi communication.',
      },
      {
        title: '3D CAD / Blender',
        description:
          'Mechanical modeling and STL generation for 3D printed body components, linkages, and servo mounting brackets.',
      },
      {
        title: 'Power & Voltage Regulation',
        description:
          'Lithium battery power regulation with TP4056 charging module, 5V DC-DC boost converter, and 1500µF smoothing capacitors.',
      },
      {
        title: 'Wi-Fi & SoftAP Networking',
        description:
          'Supports both Wi-Fi Station mode (joining existing LANs) and SoftAP mode (creating its own direct Wi-Fi network for field operation).',
      },
      {
        title: 'Git & GitHub',
        description:
          'Version control, open-source repository hosting, release distribution, and technical project documentation.',
      },
    ],
  },
  {
    slug: 'notespathv',
    text: 'NotesPathv',
    image: '/notespathvmain.png',
    aboutPics: ['/notespathvabout2.png', '/notespathvabout1.png', '/notespathvabout3.png'],
    description:
      'NotesPathv is an advanced academic study materials platform and educational resource hub designed specifically for students to streamline their learning experience. Built with a clean, distraction-free modern UI and lightning-fast navigation, it organizes academic notes categorized by subjects, units, and topics for quick discovery. Leveraging Next.js, TypeScript, and Tailwind CSS, NotesPathv provides an optimized reading experience across desktops, tablets, and mobile devices, complete with smooth animations and dark mode support to ensure students can effectively access and revise key concepts anytime, anywhere.',
    link: 'https://notespathv.vercel.app/',
    more: ['/portfolio/3D-Room', '/portfolio/opencat'],
    moreImgs: ['/3droomabout2.png', '/opencatmain.png'],

    features: [
      {
        title: 'Responsive Design',
        description:
          'NotesPath is fully responsive and optimized for desktops, tablets, and mobile devices, ensuring students can access study materials anytime and anywhere.',
      },
      {
        title: 'Organized Study Notes',
        description:
          'Provides well-structured academic notes categorized by subjects, units, and topics, helping students easily navigate and find relevant study material.',
      },
      {
        title: 'Clean & Modern UI',
        description:
          'A simple and distraction-free interface designed for effective learning, with clear typography and structured layouts for easy reading.',
      },
      {
        title: 'Fast Navigation',
        description:
          'Intuitive navigation allows users to quickly browse through subjects, units, and topics without unnecessary complexity.',
      },
      {
        title: 'Educational Resource Hub',
        description:
          'Acts as a centralized platform where students can access important notes, concepts, and explanations in one place.',
      },
      {
        title: 'Optimized Reading Experience',
        description:
          'Content is formatted for clarity and readability, making it easier for students to understand and revise important topics quickly.',
      },
      {
        title: 'Smooth User Experience',
        description:
          'Optimized page transitions, smooth scrolling, and responsive elements provide a seamless learning experience.',
      },
      {
        title: 'Student-Friendly Platform',
        description:
          'Designed specifically for students to simplify studying by providing concise notes and structured academic content.',
      },
      {
        title: 'High Performance',
        description:
          'Built with performance optimization to ensure fast loading speeds and efficient browsing across devices.',
      },
    ],

    technologies: [
      {
        title: 'Next.js',
        description:
          'Used to build a fast and scalable web application with optimized performance and efficient page rendering.',
      },
      {
        title: 'TypeScript',
        description:
          'Provides strong type safety and improves code reliability, making the application more maintainable.',
      },
      {
        title: 'Tailwind CSS',
        description:
          'A utility-first CSS framework used to create responsive and clean UI components with modern styling.',
      },
      {
        title: 'Framer Motion',
        description:
          'Enables smooth animations and transitions that enhance the visual experience of navigating the platform.',
      },
      {
        title: 'Lucide React',
        description:
          'Provides modern SVG icons integrated into the interface for improved visual clarity and usability.',
      },
      {
        title: 'Next Themes',
        description:
          'Manages light and dark theme support to provide a comfortable viewing experience in different environments.',
      },
      {
        title: 'tw-animate-css',
        description:
          'Adds animation utilities that enhance UI interactions and transitions.',
      },
      {
        title: 'Sonner',
        description:
          'A lightweight notification system used for displaying alerts and user feedback messages.',
      },
      {
        title: 'Clsx',
        description:
          'Utility for conditionally combining class names, simplifying styling logic in components.',
      },
      {
        title: 'class-variance-authority',
        description:
          'Helps manage component style variations efficiently, improving UI scalability and maintainability.',
      },
      {
        title: 'tailwind-merge',
        description:
          'Optimizes Tailwind CSS class usage by intelligently merging classes and preventing style conflicts.',
      },
    ],
  },

  {
    slug: '3D-Room',
    text: '3D Room',
    image: '/3droommain.png',
    aboutPics: ['/3droomabout1.png', '/3droomabout2.png', '/3droomabout3.png'],
    description:
      'AnishLandage3D is a personal portfolio website that showcases creative 3D visuals, digital projects, and technical work in a modern interactive environment. Designed to highlight innovation and technical creativity, the site combines sleek layouts, immersive 3D elements, and smooth transitions to present projects in an engaging and visually striking way. It serves as a digital space where visitors can explore the creator’s work, skills, and experiments in technology, design, and development.',
    link: 'https://anishlandage3d.netlify.app/',
    more: ['/portfolio/notespathv', '/portfolio/opencat'],
    moreImgs: ['/notespathvmain.png', '/opencatmain.png'],
    features: [ 
      {
        title: 'Visual Experience & Intro',
        description:
          'The website opens with a visually striking introduction that blends modern layouts, smooth animations, and immersive visuals to create an engaging digital portfolio experience.',
      },
      {
        title: '3D Project Showcase',
        description:
          'Explore a collection of creative 3D projects, experiments, and technical builds presented in an interactive and visually engaging format.',
      },
      {
        title: 'Interactive Project Exploration',
        description:
          'Users can browse through projects and experiments with smooth navigation and intuitive layouts designed for easy discovery.',
      },
      {
        title: 'Detailed Project Pages',
        description:
          'Each project includes detailed descriptions, visuals, and technical insights explaining the concept, implementation, and technologies used.',
      },
      {
        title: 'Creative Portfolio Collection',
        description:
          'A curated portfolio highlighting innovative ideas, development experiments, and creative digital work across design and technology.',
      },
      {
        title: 'Contact & Social Links',
        description:
          'A dedicated contact section allows visitors to connect through social media and professional platforms.',
      },
      {
        title: 'Smooth Animations',
        description:
          'High-quality animations and motion effects create a polished and immersive browsing experience throughout the site.',
      },
      {
        title: 'Responsive Design',
        description:
          'Fully responsive layout ensures the portfolio looks great and functions smoothly across desktops, tablets, and mobile devices.',
      },
    ],

    technologies: [
      {
        title: 'Next.js',
        description:
          'A modern React framework used to build the portfolio with optimized performance, routing, and server-side rendering.',
      },
      {
        title: 'TypeScript',
        description:
          'Provides type safety and improved maintainability, ensuring a more stable and scalable codebase.',
      },
      {
        title: 'Tailwind CSS',
        description:
          'Utility-first CSS framework used to rapidly design responsive and visually consistent user interfaces.',
      },
      {
        title: 'Framer Motion',
        description:
          'Used for implementing smooth page transitions, motion effects, and interactive UI animations.',
      },
      {
        title: 'GSAP',
        description:
          'Advanced animation library used for scroll-based interactions and complex motion design effects.',
      },
      {
        title: 'Lenis',
        description:
          'Enables ultra-smooth scrolling behavior to enhance the overall browsing experience.',
      },
      {
        title: 'React Three Fiber',
        description:
          'A React renderer for Three.js that allows the integration of 3D elements and scenes directly within the website.',
      },
      {
        title: '@react-three/drei',
        description:
          'A helper toolkit built on React Three Fiber that simplifies 3D scene creation and reusable components.',
      },
      {
        title: 'React Icons',
        description:
          'Icon library used to provide scalable and visually consistent icons across the interface.',
      },
      {
        title: 'Cursify',
        description:
          'Adds a custom animated cursor to enhance interactivity and give the site a unique personality.',
      },
      {
        title: 'UI Libraries Collection',
        description:
          'Design inspiration and UI components from hover.dev, Cult UI, Magic UI, Aceternity UI, SparkUI, and UI Layouts were used to accelerate development and maintain modern design standards.',
      },
    ],
  },
  {
    slug: 'opencat',
    text: 'OpenCat',
    image: '/opencatmain.png',
    aboutPics: ['/opencatabout2.png', '/opencatabout1.png', '/opencatabout3.png'],
    more: ['/portfolio/quaddle', '/portfolio/3D-Room'],
    moreImgs: ['/quaddledemo.gif', '/3droommain.png'],

    description:
      'OpenCat is an open-source quadruped robotics framework designed to help developers and robotics enthusiasts build programmable robot pets using Arduino and Raspberry Pi. It combines hardware design, motion algorithms, and AI integration to create agile four-legged robots capable of lifelike movements. With its flexible architecture and strong focus on STEM learning, OpenCat makes robotics experimentation, education, and AI-powered robot development both accessible and engaging.',
    link: 'https://github.com/AlphaBeta07/opencat',
    features: [
      {
        title: 'Quadruped Robot Framework',
        description:
          'OpenCat provides a complete framework for building programmable four-legged robot pets capable of walking, balancing, and performing dynamic movements.',
      },
      {
        title: 'Advanced Motion Control',
        description:
          'Implements efficient servo motor control and motion algorithms that enable smooth robotic movements such as walking, trotting, and turning.',
      },
      {
        title: 'Inverse Kinematics Support',
        description:
          'Uses inverse kinematics calculations to control joint angles precisely, allowing realistic and coordinated leg movements.',
      },
      {
        title: 'Modular Hardware Design',
        description:
          'Designed with modular hardware components, making it easy to assemble, upgrade, or customize robotic platforms and servo configurations.',
      },
      {
        title: 'Sensor Integration',
        description:
          'Supports integration with sensors such as IMU modules and cameras for balance control, environment awareness, and intelligent behavior.',
      },
      {
        title: 'Arduino and Raspberry Pi Compatibility',
        description:
          'The system works with microcontrollers like Arduino and single-board computers such as Raspberry Pi for flexible robotics development.',
      },
      {
        title: 'Programmable Robot Behaviors',
        description:
          'Developers can program different robotic behaviors and motion sequences using open-source code and configurable parameters.',
      },
      {
        title: 'AI and Computer Vision Expansion',
        description:
          'Allows integration with AI and computer vision systems for advanced robotic applications such as object detection and autonomous interaction.',
      },
      {
        title: 'STEM Learning Platform',
        description:
          'Widely used as an educational robotics platform for students, researchers, and hobbyists to learn embedded systems and robotics.',
      },
      {
        title: 'Open-Source Ecosystem',
        description:
          'Fully open-source project encouraging collaboration, customization, and community-driven robotics innovation.',
      },
    ],

    technologies: [
      {
        title: 'Arduino',
        description:
          'Used as the primary microcontroller platform to control servo motors, sensors, and robotic movement algorithms.',
      },
      {
        title: 'Raspberry Pi',
        description:
          'Provides higher-level processing capabilities for AI integration, camera processing, and advanced robot behaviors.',
      },
      {
        title: 'C/C++',
        description:
          'Core programming language used for embedded system development and real-time robot motion control.',
      },
      {
        title: 'Python',
        description:
          'Used for high-level scripting, AI integration, and communication between the robot and external systems.',
      },
      {
        title: 'Servo Motor Control',
        description:
          'Controls multiple servo motors responsible for joint movement and leg articulation in the quadruped robot.',
      },
      {
        title: 'Inverse Kinematics',
        description:
          'Mathematical algorithms used to calculate joint angles for realistic robotic leg movements.',
      },
      {
        title: 'IMU Sensors',
        description:
          'Inertial Measurement Units such as MPU6050 help maintain robot balance and orientation during movement.',
      },
      {
        title: 'Serial Communication',
        description:
          'Enables communication between microcontrollers, computers, and additional modules for command execution and debugging.',
      },
      {
        title: 'Computer Vision Integration',
        description:
          'Supports camera modules and AI models for object detection, tracking, and environmental interaction.',
      },
      {
        title: 'Open-Source Robotics Platform',
        description:
          'Encourages community contributions, customization, and experimentation with robotic hardware and software.',
      },
    ],
  },
  {
    slug: 'threadcounty',
    text: 'ThreadCounty',
    image: '/threadcountymain.png',
    aboutPics: ['/threadcountyabout1.png', '/threadcountyabout2.png', '/threadcountyabout3.png'],
    more: ['/portfolio/opencat', '/portfolio/3D-Website'],
    moreImgs: ['/opencatmain.png', '/3denportmain.png'],

    description:
      'ThreadCounty is a all in one Textile analysis website.',
    link: 'https://threadcounty.pythonanywhere.com/',
    features: [
      {
        title: 'Fabric Thread Counting',
        description:
          'Automatically detects and counts warp and weft threads from uploaded fabric images using advanced computer vision techniques.',
      },
      {
        title: 'Image Processing Analysis',
        description:
          'Uses OpenCV-based image processing and frequency analysis to accurately identify fabric thread structures and patterns.',
      },
      {
        title: 'AI-Assisted Fabric Inspection',
        description:
          'Integrates machine learning techniques to improve detection accuracy and assist in textile quality inspection.',
      },
      {
        title: 'Automated Fabric Report Generation',
        description:
          'Generates structured analysis reports containing thread density, fabric parameters, and inspection results.',
      },
      {
        title: 'Industrial Textile Utility',
        description:
          'Designed for textile engineers, researchers, and manufacturers to analyze fabric construction digitally.',
      },
      {
        title: 'Web-Based Analysis Platform',
        description:
          'Users can upload fabric images directly through a browser interface and receive instant analysis results.',
      },
      {
        title: 'High Accuracy Thread Detection',
        description:
          'Applies advanced filtering, edge detection, and FFT-based frequency analysis for precise thread counting.',
      },
      {
        title: 'Scalable Architecture',
        description:
          'Built with a modular backend structure that allows integration of additional AI models and textile datasets.',
      },
    ],

    technologies: [
      {
        title: 'Python',
        description:
          'Primary programming language used to implement the fabric analysis algorithms and backend logic.',
      },
      {
        title: 'Flask',
        description:
          'Lightweight backend framework used to build the web application and handle image uploads and analysis requests.',
      },
      {
        title: 'OpenCV',
        description:
          'Computer vision library used for image processing, edge detection, and thread structure analysis.',
      },
      {
        title: 'NumPy',
        description:
          'Provides numerical computing capabilities required for matrix operations and image data processing.',
      },
      {
        title: 'SciPy',
        description:
          'Used for signal processing and frequency-domain analysis of fabric patterns.',
      },
      {
        title: 'Scikit-Image',
        description:
          'Provides additional advanced image processing tools for texture and pattern analysis.',
      },
      {
        title: 'Scikit-Learn',
        description:
          'Used to integrate machine learning models for improving thread detection accuracy.',
      },
      {
        title: 'Matplotlib',
        description:
          'Used to visualize analysis results such as thread frequency patterns and inspection outputs.',
      },
      {
        title: 'ReportLab',
        description:
          'Generates downloadable PDF reports containing the results of fabric thread analysis.',
      },
      {
        title: 'Supabase / Cloud Storage',
        description:
          'Handles storage of uploaded images and analysis results for scalable cloud-based deployment.',
      },
    ],
  },
  {
    slug: '3D-Website',
    text: '3D Env Website ',
    image: '/3denportmain.png',
    aboutPics: ['/3denportabout1.png', '/3denportabout2.png', '/3denportabout3.png'],
    more: ['/portfolio/opencat', '/portfolio/threadcounty'],
    moreImgs: ['/opencatmain.png', '/threadcountymain.png'],

    description:
      '3D Environment Website to show case 3d activities.',
    link: 'https://anishlandage3d.netlify.app/',
    features: [
      {
        title: 'Interactive 3D Portfolio',
        description:
          'Showcases projects and skills through immersive 3D elements that create a visually engaging portfolio experience.',
      },
      {
        title: 'Smooth Animations',
        description:
          'Implements fluid animations and transitions that enhance the browsing experience and make the interface feel dynamic.',
      },
      {
        title: 'Project Showcase',
        description:
          'Highlights major development projects with clear visuals, descriptions, and technology stacks used.',
      },
      {
        title: 'Modern UI Design',
        description:
          'Features a clean dark-themed interface with well-structured sections for an aesthetically pleasing developer portfolio.',
      },
      {
        title: 'Responsive Web Experience',
        description:
          'Designed to work smoothly across desktops, tablets, and mobile devices with adaptive layouts.',
      },
      {
        title: 'Developer Skill Presentation',
        description:
          'Displays technical skills, programming languages, and development tools in an organized and professional format.',
      },
      {
        title: 'Interactive User Experience',
        description:
          'Allows visitors to explore sections, animations, and portfolio elements in an intuitive and engaging way.',
      },
      {
        title: 'Personal Branding Platform',
        description:
          'Acts as a digital identity that represents the developer’s work, creativity, and technical expertise.',
      },
    ],

    technologies: [
      {
        title: 'React',
        description:
          'JavaScript library used to build a fast and interactive user interface for the portfolio website.',
      },
      {
        title: 'Three.js / React Three Fiber',
        description:
          'Used to render interactive 3D graphics and models directly inside the web browser.',
      },
      {
        title: 'JavaScript',
        description:
          'Core scripting language used to implement dynamic functionality and interactivity.',
      },
      {
        title: 'Tailwind CSS',
        description:
          'Utility-first CSS framework used to design a modern and responsive user interface.',
      },
      {
        title: 'HTML5',
        description:
          'Provides the structural foundation of the website and its content sections.',
      },
      {
        title: 'CSS3',
        description:
          'Used for styling, layout design, and visual effects across the website.',
      },
      {
        title: 'Vercel',
        description:
          'Deployment platform used to host and deliver the portfolio website with high performance.',
      },
      {
        title: 'Git & GitHub',
        description:
          'Used for version control and managing the project’s source code.',
      },
    ],
  },
];