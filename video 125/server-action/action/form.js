"use server";

import fs from "fs/promises";
export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("email"), e.get("message"));
    fs.appendFile(
        "data.txt",
        `${JSON.stringify({
            name: e.get("name"),
            email: e.get("email"),
            message: e.get("message"),
        })}\n`,
        (err) => {
            if (err) console.log(err);
        }
    );
};
