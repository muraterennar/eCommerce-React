import {createAsyncThunk} from "@reduxjs/toolkit";

export const postUsers = createAsyncThunk("post_user", async (user) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: "POST", body: JSON.stringify({
            username: user.username, password: user.password, email: user.email, phone_number: user.phone_number,
        })
    });

    const data = await response.json();
    return data;
});