import { apiv1Url } from "#consts/api";

export const fetchBaseQueryConfig = {
    baseUrl: apiv1Url,
    prepareHeaders: headers => {
        let token = "no-token";
        if (token) {
            headers.set("authorization", token);
        }

        return headers;
    }
};
