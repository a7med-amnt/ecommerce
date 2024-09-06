import Router from "#routers/router";
import { MantineProvider, DirectionProvider } from "#mc";
import { Notifications } from "#mn";
import { Provider } from "react-redux";
import { theme } from "#configs/mc";
import store from "#store/store";
import "#i18n/i18n";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
//import "#styles/main.css";

export default function () {

    return (
        <Provider store={store}>
            <DirectionProvider>
                <MantineProvider theme={theme}>
                    <Notifications position="top-center" limit={1} />
                    <Router />
                </MantineProvider>
            </DirectionProvider>
        </Provider>
    );
}
