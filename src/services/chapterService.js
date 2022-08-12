import instance from "./index";

export const chapters = () => instance.get("v3/chapters");
