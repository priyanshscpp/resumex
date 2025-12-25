module.exports = [
"[project]/Desktop/daddy-ai-main/.next-internal/server/app/api/upload/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Desktop/daddy-ai-main/src/lib/fileStore.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteFile",
    ()=>deleteFile,
    "getFile",
    ()=>getFile,
    "saveFile",
    ()=>saveFile
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const store = new Map();
const TTL_MS = 30 * 60 * 1000; // 30 minutes
function cleanup() {
    const now = Date.now();
    for (const [id, entry] of store){
        if (now - entry.uploadedAt > TTL_MS) {
            store.delete(id);
        }
    }
}
function saveFile(buffer, filename, mimeType) {
    cleanup();
    const id = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
    store.set(id, {
        buffer,
        filename,
        mimeType,
        uploadedAt: Date.now()
    });
    console.log(`Saved file: ${id}, filename: ${filename}, store size: ${store.size}`);
    return id;
}
function getFile(fileId) {
    cleanup();
    const file = store.get(fileId);
    console.log(`Getting file: ${fileId}, found: ${file ? 'yes' : 'no'}`);
    if (file) {
        console.log(`File details: ${file.filename}, ${file.mimeType}, ${file.buffer.length} bytes`);
    }
    return file;
}
function deleteFile(fileId) {
    store.delete(fileId);
}
}),
"[project]/Desktop/daddy-ai-main/src/app/api/upload/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/daddy-ai-main/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$src$2f$lib$2f$fileStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/daddy-ai-main/src/lib/fileStore.ts [app-route] (ecmascript)");
;
;
const runtime = "nodejs"; // ensures Node APIs like Buffer work
async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get("file");
        console.log("Received file:", file?.name, file?.type, file?.size);
        if (!file) {
            console.log("No file found in request");
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "No file uploaded"
            }, {
                status: 400
            });
        }
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        console.log("Buffer length:", buffer.length);
        // Save in in-memory store
        const fileId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$src$2f$lib$2f$fileStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveFile"])(buffer, file.name, file.type);
        console.log("Saved file with ID:", fileId);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            fileId,
            filename: file.name,
            size: buffer.length
        });
    } catch (err) {
        console.error("Upload error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: err.message || "Upload failed"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a8898262._.js.map