// assets
import { IconPlaneInflight, IconCalendar, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconPlaneInflight,
    IconCalendar,
    IconShadow,
    IconWindmill
};

// ==============================|| TRACKING MENU ITEMS ||============================== //

const tracking = {
    id: 'tracking',
    title: 'Tracking',
    type: 'group',
    children: [
        {
            id: 'track-flights',
            title: 'Flights',
            type: 'item',
            url: '/dashboard/tracking-flights',
            icon: icons.IconPlaneInflight,
            breadcrumbs: false
        },
        {
            id: 'track-dates',
            title: 'Dates',
            type: 'item',
            url: '/dashboard/tracking-dates',
            icon: icons.IconCalendar,
            breadcrumbs: false
        }
    ]
};

export default tracking;
