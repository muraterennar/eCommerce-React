import {createSlice} from "@reduxjs/toolkit";
import {STATUS} from "../../utils/status";
import {getUsers} from "../../api/getRequest/getUsers";
import {getUserById} from "../../api/getRequest/getUserById";
import {postUsers} from "../../api/postRequests/postUser";

const initialState = {
    users: [],
    usersStatus: STATUS.IDLE,
    user: {},
    userStatus: STATUS.IDLE,
};

const UserSlice = createSlice({
    name: "user", initialState, reducers: {},
    extraReducers: (builder) => {
        // ------- Get all users --------
        builder.addCase(getUsers.pending, (state, action) => {
            state.usersStatus = STATUS.LOADING;
        });

        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.usersStatus = STATUS.SUCCESS;
            state.users = action.payload;
        });

        builder.addCase(getUsers.rejected, (state, action) => {
            state.usersStatus = STATUS.FAIL;
        });

        // ------- Get user by id --------
        builder.addCase(getUserById.pending, (state, action) => {
            state.userStatus = STATUS.LOADING;
        });

        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.userStatus = STATUS.SUCCESS;
            state.user = action.payload;
        });

        builder.addCase(getUserById.rejected, (state, action) => {
            state.userStatus = STATUS.FAIL;
        });

        // ------- Add User --------
        builder.addCase(postUsers.fulfilled, (state, action) => {
            state.userStatus = STATUS.LOADING;
            state.user = action.payload;
        });
    }
});
export default UserSlice.reducer;