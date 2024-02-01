"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const flex_sdk_package_1 = __importDefault(require("flex_sdk_package"));
const client = new flex_sdk_package_1.default({
    apiKey: "123",
});
client
    .createPost({
    title: "foo",
    body: "bar",
    userId: 101,
})
    .then((p) => {
    console.log(`New post is created with ${p.id}`);
});
