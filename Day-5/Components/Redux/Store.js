import { configureStore } from "@testing-library/react";
import UserSlice from "./UserSlice";

export default configureStore({
    reducer: {
            user: UserSlice.reducer
    }
}

)