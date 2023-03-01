import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store.js";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const client = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false
        }
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <QueryClientProvider client={client}>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
              <ReactQueryDevtools />
          </QueryClientProvider>
      </Provider>
  </React.StrictMode>,
)
