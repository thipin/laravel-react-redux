import { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { store } from "./redux/config/store";

import Spinner from "./core/components/spinner/Fallback-spinner";
import { ToastContainer } from 'react-toastify'

import Router from './routers'



ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<Spinner />}>
            <Router />
            <ToastContainer newestOnTop />
        </Suspense>
    </Provider>,
    document.getElementById("root")
);


