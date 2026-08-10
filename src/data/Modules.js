export const menuItems = [
  { id: 'home', label: '00. HOME' },
  { id: 'about', label: '01. ABOUT' },
  { id: 'projects', label: '02. PROJECTS' },
  { id: 'blogs', label: '03. BLOGS' },
  { id: 'contact', label: '04. CONTACT' },
];

export const moduleData = {
  home: {
    command: 'system.status',
    title: '/ HOME_STATION',
    type: 'window',
    content: 'Hello and welcome to Techdumpsters! This is a personal project repository, tutorials, and casual blogs. It was made to be a place to dump useless ideas and experiments. Some of them are not only \'just for fun\' but also there are some of rejected projects that I want to show to the public, no matter how bad they are. I hope you\'re enjoying this site and find some useful or interesting topics here. Have fun!'
  },
  about: {
    command: 'cat /sys/about.txt',
    title: '/ PROFILE',
    type: 'window',
    content: 'Too many tech dumps here. We\'re providing you wide range of needs, weird ideas, and somehow unusual experimemts. As long it\'s on my dump list, it means that it is going to be dumped here.'
  },
  projects: {
    command: 'ls -la /var/projects/',
    title: '/ RECENT_PROJECTS',
    type: 'window',
    windowTitle: 'projects_manager.exe',
    items: [
      { name: 'RC ROBOT CAR', tech: 'ESP32, C++, FreeRTOS', highlight: 'turquoise' },
      { name: 'KRITA SHORTCUT PAD', tech: 'Embedded C, Custom PCB', highlight: 'pink' }
    ]
  },
  blogs: {
    command: 'cat /var/log/notes.md',
    title: '/ CASUAL_DUMPS',
    type: 'window',
    content: 'Belum ada tulisan panjang. Kebanyakan hanya coretan catatan teknis singkat dan eksperimen kustomisasi sistem.'
  },
  contact: {
    type: 'contactMulti'
}
};