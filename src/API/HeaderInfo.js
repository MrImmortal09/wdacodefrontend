import { getCurrentUserToken } from "../LocalStorage/LocalStorage";
export function headerWithoutToken() {
const head = {
Accept: "application/json",
"Acess-Control-Allow-Origin": "*",
"Content-Type": "application/json",
};
return head;
}
export function headerWithToken() {
console.log("token in header with token",getCurrentUserToken());
const head = {
Accept: "application/json",
"Content-Type": "application/json",
Authorization: `Bearer ${getCurrentUserToken()}`,
};
return head;
}