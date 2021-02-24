import axios from "axios";

export const contactSend = axios.create({
    baseURL: 'https://webhook.site/a4a7c484-51c2-49c1-8561-9d813fe87857',
});

export const getData = axios.create({
    baseURL: 'https://accenture-server-rn.herokuapp.com/'
})