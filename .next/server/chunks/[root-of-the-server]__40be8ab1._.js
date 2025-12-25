module.exports = [
"[project]/Desktop/daddy-ai-main/.next-internal/server/app/api/parse/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Desktop/daddy-ai-main/src/app/api/parse/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
const runtime = "nodejs";
// Simple regex-based resume parser
function parseResumeText(text) {
    // Basic structure with fallbacks
    const result = {
        name: "",
        contact: {},
        summary: "",
        skills: [],
        experience: [],
        education: []
    };
    // Try to extract name (first line that looks like a name)
    const lines = text.split("\n").map((line)=>line.trim()).filter((line)=>line.length > 0);
    if (lines.length > 0) {
        // Simple heuristic: assume the first non-empty line is the name
        result.name = lines[0];
    }
    // Extract email
    const emailMatch = text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
    if (emailMatch) {
        result.contact.email = emailMatch[0];
    }
    // Extract phone (simple pattern)
    const phoneMatch = text.match(/\b(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\b/);
    if (phoneMatch) {
        result.contact.phone = phoneMatch[0];
    }
    // Try to find sections using common headings
    const sections = {
        experience: [
            "experience",
            "work experience",
            "employment",
            "work history"
        ],
        education: [
            "education",
            "academic",
            "qualifications"
        ],
        skills: [
            "skills",
            "technical skills",
            "competencies",
            "technologies"
        ],
        summary: [
            "summary",
            "objective",
            "profile"
        ]
    };
    // Extract section content
    Object.entries(sections).forEach(([section, keywords])=>{
        const lowerText = text.toLowerCase();
        for (const keyword of keywords){
            const index = lowerText.indexOf(keyword);
            if (index !== -1) {
                // Find the content after the section heading
                const afterHeading = text.substring(index + keyword.length);
                const nextSectionIndex = Math.min(...Object.values(sections).flat().map((k)=>afterHeading.toLowerCase().indexOf(k)).filter((i)=>i > 0));
                if (nextSectionIndex > 0) {
                    result[section] = afterHeading.substring(0, nextSectionIndex).trim();
                } else {
                    result[section] = afterHeading.trim();
                }
                break;
            }
        }
    });
    // Try to parse experience into array of objects
    if (typeof result.experience === "string") {
        // Simple parsing: split by likely job entries
        const experienceEntries = result.experience.split(/(?=\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\b|\d{4})/);
        result.experience = experienceEntries.filter((entry)=>entry.trim().length > 0).map((entry)=>{
            // Try to extract title, company, and bullets
            const lines = entry.split("\n").filter((line)=>line.trim().length > 0);
            if (lines.length === 0) return null;
            const experienceItem = {
                title: "",
                company: "",
                bullets: []
            };
            // First line might contain title and company
            const firstLine = lines[0];
            const titleCompanyMatch = firstLine.match(/(.*?)\s+at\s+(.*)/i) || firstLine.match(/(.*?),\s*(.*)/);
            if (titleCompanyMatch) {
                experienceItem.title = titleCompanyMatch[1].trim();
                experienceItem.company = titleCompanyMatch[2].trim();
            } else {
                experienceItem.title = firstLine.trim();
            }
            // Remaining lines as bullets
            if (lines.length > 1) {
                experienceItem.bullets = lines.slice(1).filter((line)=>line.trim().length > 0).map((line)=>line.replace(/^[-•*]\s*/, "").trim());
            }
            return experienceItem;
        }).filter((item)=>item !== null);
    }
    // Parse skills into array
    if (typeof result.skills === "string") {
        result.skills = result.skills.split(/[,;•\-]|\n/).map((skill)=>skill.trim()).filter((skill)=>skill.length > 0);
    }
    return result;
}
async function POST(req) {
    try {
        let body;
        try {
            body = await req.json();
        } catch (parseError) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: `Invalid JSON in request body  Error ${parseError}`
            }, {
                status: 400
            });
        }
        const { fileId } = body;
        if (!fileId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "No fileId provided"
            }, {
                status: 400
            });
        }
        const file = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$src$2f$lib$2f$fileStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFile"])(fileId);
        if (!file) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "File not found"
            }, {
                status: 404
            });
        }
        let rawText = "";
        if (file.mimeType.includes("pdf") || file.filename.endsWith(".pdf")) {
            // Use pdf2json
            const PDFParser = (await __turbopack_context__.A("[project]/Desktop/daddy-ai-main/node_modules/pdf2json/dist/pdfparser.js [app-route] (ecmascript, async loader)")).default;
            const pdfParser = new PDFParser();
            rawText = await new Promise((resolve, reject)=>{
                let text = "";
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                pdfParser.on("pdfParser_dataError", (_errData)=>{
                    reject(new Error("Failed to parse PDF"));
                });
                pdfParser.on("pdfParser_dataReady", (pdfData)=>{
                    try {
                        text = pdfData.Pages.map((page)=>page.Texts.map((textObj)=>decodeURIComponent(textObj.R[0].T)).join(" ")).join("\n");
                        resolve(text);
                    } catch (e) {
                        reject(e);
                    }
                });
                pdfParser.parseBuffer(file.buffer);
            });
        } else if (file.mimeType.includes("officedocument.wordprocessingml.document") || file.filename.endsWith(".docx")) {
            const mammoth = (await __turbopack_context__.A("[project]/Desktop/daddy-ai-main/node_modules/mammoth/lib/index.js [app-route] (ecmascript, async loader)")).default;
            const { value } = await mammoth.extractRawText({
                buffer: file.buffer
            });
            rawText = value;
        } else {
            rawText = file.buffer.toString("utf8");
        }
        // Parse the raw text into structured data
        const structuredData = parseResumeText(rawText);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            parsed: {
                rawText,
                structured: structuredData
            }
        });
    } catch (err) {
        console.error("Parse error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: err.message || "Parse failed"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__40be8ab1._.js.map