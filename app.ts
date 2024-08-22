const text = "This is a test that should be saved in a file with DENO!";

const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFile("message.txt", data).then(() => {
    console.log("Wrote file message.txt!");
});