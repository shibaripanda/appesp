import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';

export const mainMenu = [
  { icon: IconHome2, label: 'Home', subMenu: ['1', '2', '3']},
  { icon: IconGauge, label: 'Dashboard', subMenu: ['4', '5', '6']},
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics', subMenu: ['7', '8', '9']},
  { icon: IconCalendarStats, label: 'Releases', subMenu: ['10', '11', '12']},
  { icon: IconUser, label: 'Account', subMenu: ['13', '14', '15']},
  { icon: IconFingerprint, label: 'Security', subMenu: ['16', '17', '18']},
  { icon: IconSettings, label: 'Settings', subMenu: ['19', '20', '21']},
];