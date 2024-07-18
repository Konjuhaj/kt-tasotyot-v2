import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
    const files = fs.readdirSync(path.join("./public/images/companies"));

    return NextResponse.json(files);

}