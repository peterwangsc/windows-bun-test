import { BunFile } from "bun";

let file: BunFile = Bun.file("./src/db/bun.json", {
  type: "application/json",
});

export const bunDB = {
  async get(id: string) {
    const data = await file.json();
    return data[id];
  },
  async list() {
    const data = await file.json();
    return Object.keys(data);
  },
  async set(id: string, value: string) {
    const data = await file.json();
    data[id] = value;
    const writer = file.writer();
    writer.write(JSON.stringify(data));
    writer.end();
    return id;
  },
  async delete(id: string) {
    const data = await file.json();
    delete data[id];
    const writer = file.writer();
    writer.write(JSON.stringify(data));
    writer.end();
  },
};
