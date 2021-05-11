import ButtonComponent from '@/examples/Button';
import LoadingComponent from '@/examples/Loading';
import IconComponent from '@/examples/Icon';
import BadgeComponent from '@/examples/Badge';
import OverlayComponent from '@/examples/Overlay';
import PopupComponent from '@/examples/Popup';
import DialogComponent from '@/examples/Dialog';
import ToastComponent from '@/examples/Toast';
const routes = [
    {
        name: 'ToastComponent',
        path: '/toast',
        component: ToastComponent,
        exact: true
    },
    {
        name: 'DialogComponent',
        path: '/dialog',
        component: DialogComponent,
        exact: true
    },
    {
        name: 'PopupComponent',
        path: '/popup',
        component: PopupComponent,
        exact: true
    },
    {
        name: 'OverlayComponent',
        path: '/overlay',
        component: OverlayComponent,
        exact: true
    },
    {
        name: 'ButtonComponent',
        path: '/button',
        component: ButtonComponent,
        exact: true
    },
    {
        name: 'LoadingComponent',
        path: '/loading',
        component: LoadingComponent,
        exact: true
    },
    {
        name: 'IconComponent',
        path: '/icon',
        component: IconComponent,
        exact: true
    },
    {
        name: 'BadgeComponent',
        path: '/badge',
        component: BadgeComponent,
        exact: true
    }
];

export default routes;
