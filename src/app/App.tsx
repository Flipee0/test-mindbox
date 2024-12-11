import { composeComponents } from '@/shared/utils';
import { ThemeProvider } from './providers/ThemeProvider';
import { Layout } from '@/widgets/Layout';
import { Todos } from '@/widgets/Todos';

import '@fontsource/inter/index.css';

function App() {
    return <Todos />;
}

export default composeComponents(App, Layout, ThemeProvider);
