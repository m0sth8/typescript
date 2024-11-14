import {test as base} from "@playwright/test";
import {PasswordUser} from './user';
import path from 'path';
import dotenv from 'dotenv';
import {loginScreenExpect, loginWithPassword} from "./login";
import {changePassword, startChangePassword} from "./password";
import {changePasswordScreen, changePasswordScreenExpect} from "./password-screen";

// Read from ".env" file.
dotenv.config({path: path.resolve(__dirname, '.env.local')});

const test = base.extend<{ user: PasswordUser }>({
    user: async ({page}, use) => {
        const user = new PasswordUser({
            email: "password-changed@example.com",
            firstName: "first",
            lastName: "last",
            password: "Password1!",
            organization: "",
        });
        await user.ensure(page);
        await use(user);
    },
});

test("username and password changed login", async ({user, page}) => {
    const changedPw = "ChangedPw1!"
    await loginWithPassword(page, user.getUsername(), user.getPassword())
    await changePassword(page, user.getUsername(), changedPw)
    await loginWithPassword(page, user.getUsername(), changedPw)
    await loginScreenExpect(page, user.getFullName());
});

test("password not with desired complexity", async ({user, page}) => {
    const changedPw1 = "change"
    const changedPw2 = "chang"
    await loginWithPassword(page, user.getUsername(), user.getPassword())
    await startChangePassword(page, user.getUsername());
    await changePasswordScreen(page, changedPw1, changedPw2)
    await changePasswordScreenExpect(page, changedPw1, changedPw2, false, false, false, false, true, false)
});