import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import NewArrival from "./features/New Arrival/NewArrival";
// import Pants from "./features/Pants/Pants";
import Home from "./features/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Favorite from "./features/Favorite/Favorite";
import PageNotFound from "./ui/PageNotFound";
import CategoryAllItem from "./features/CategoryAllItem/CategoryAllItem";
import Cart from "./features/cart/cart";
import Login from "./features/User/Login";
import SignUp from "./features/User/Signup";
import Items from "./Items/Items";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/women/new-arrival" element={<NewArrival />} />
            <Route
              path="/women/category/:category"
              element={<CategoryAllItem />}
            />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/item/:itemCategory/:itemId" element={<Items />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
