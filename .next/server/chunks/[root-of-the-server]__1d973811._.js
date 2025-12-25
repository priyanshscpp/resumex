module.exports = [
"[project]/Desktop/daddy-ai-main/.next-internal/server/app/api/feedback/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Desktop/daddy-ai-main/src/lib/hugingface.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "APILimitExceededError",
    ()=>APILimitExceededError,
    "checkBothLimitsExceeded",
    ()=>checkBothLimitsExceeded,
    "checkTokenAvailability",
    ()=>checkTokenAvailability,
    "generateFeedback",
    ()=>generateFeedback,
    "generateInterviewQuestions",
    ()=>generateInterviewQuestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f40$huggingface$2f$inference$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/daddy-ai-main/node_modules/@huggingface/inference/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f40$huggingface$2f$inference$2f$dist$2f$esm$2f$InferenceClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/daddy-ai-main/node_modules/@huggingface/inference/dist/esm/InferenceClient.js [app-route] (ecmascript)");
;
// Alag clients for different services
const feedbackClient = process.env.HF_TOKEN_FEEDBACK ? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f40$huggingface$2f$inference$2f$dist$2f$esm$2f$InferenceClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InferenceClient"](process.env.HF_TOKEN_FEEDBACK) : null;
const questionsClient = process.env.HF_TOKEN_QUESTIONS ? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f40$huggingface$2f$inference$2f$dist$2f$esm$2f$InferenceClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InferenceClient"](process.env.HF_TOKEN_QUESTIONS) : null;
// Fallback to main token if specific tokens are not provided
const mainClient = process.env.HF_TOKEN ? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f40$huggingface$2f$inference$2f$dist$2f$esm$2f$InferenceClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InferenceClient"](process.env.HF_TOKEN) : null;
// Helper function to get appropriate client
function getClient(service) {
    if (service === "feedback" && feedbackClient) return feedbackClient;
    if (service === "questions" && questionsClient) return questionsClient;
    return mainClient; // fallback
}
class APILimitExceededError extends Error {
    limitType;
    constructor(limitType = "both", message){
        super(message || `API limit exceeded for ${limitType}`);
        this.name = "APILimitExceededError";
        this.limitType = limitType;
    }
}
// Detect if error means API limit
function isLimitExceededError(error) {
    const limitIndicators = [
        "rate limit",
        "quota exceeded",
        "limit exceeded",
        "too many requests",
        "403",
        "429",
        "overload",
        "usage limit",
        "billing",
        "subscription"
    ];
    const errorMessage = error.message?.toLowerCase() || "";
    const errorStatus = error.status || error.code || 0;
    return limitIndicators.some((indicator)=>errorMessage.includes(indicator)) || [
        403,
        429,
        503
    ].includes(errorStatus);
}
async function callHuggingFaceChat(prompt, service, model = "Qwen/Qwen3-Next-80B-A3B-Instruct") {
    const client = getClient(service);
    if (!client) {
        const tokenName = service === "feedback" ? "HF_TOKEN_FEEDBACK" : "HF_TOKEN_QUESTIONS";
        throw new Error(`${tokenName} or HF_TOKEN not configured`);
    }
    try {
        const chatCompletion = await client.chatCompletion({
            provider: "novita",
            model: model,
            messages: [
                {
                    role: "system",
                    content: "You are a helpful career coach that provides constructive feedback on resumes based on job descriptions. Always respond with valid JSON in the specified format. Your response must be valid JSON without any additional text."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7,
            max_tokens: 4000
        });
        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.error("Hugging Face API error:", error);
        // Check if it's a limit exceeded error
        if (isLimitExceededError(error)) {
            throw new APILimitExceededError(service, `Your ${service} API usage limit has been reached. Please upgrade to continue.`);
        }
        // For specific model overload errors, try a fallback model
        if (error.message.includes("overload") || error.message.includes("503")) {
            console.log("Primary model overloaded, trying fallback model...");
            try {
                return await callHuggingFaceChat(prompt, service, "meta-llama/Llama-3.3-70B-Instruct");
            } catch (fallbackError) {
                if (isLimitExceededError(fallbackError)) {
                    throw new APILimitExceededError(service, `Your ${service} API usage limit has been reached. Please upgrade to continue.`);
                }
                throw fallbackError;
            }
        }
        throw new Error(`Hugging Face API error: ${error.message}`);
    }
}
/**
 * Extract JSON from response text
 */ function extractJsonFromResponse(responseText) {
    try {
        // Clean the response text first
        let cleanedText = responseText.trim();
        // Remove any markdown code blocks if present
        if (cleanedText.startsWith("```json")) {
            cleanedText = cleanedText.replace(/^```json\s*/, "").replace(/\s*```$/, "");
        } else if (cleanedText.startsWith("```")) {
            cleanedText = cleanedText.replace(/^```\s*/, "").replace(/\s*```$/, "");
        }
        // Parse the JSON
        const parsed = JSON.parse(cleanedText);
        // If parsed is an array, wrap it into { questions: [...] }
        if (Array.isArray(parsed)) {
            return {
                questions: parsed
            };
        }
        // Otherwise, return the parsed object
        return parsed;
    } catch (e) {
        console.error("Failed to extract JSON from response. Response length:", responseText.length);
        console.error("Response preview:", responseText.substring(0, 500) + "...");
        // For feedback responses, return mock feedback instead of mock questions
        if (responseText.includes("score") || responseText.includes("suggestions")) {
            throw new Error("Failed to parse feedback response");
        }
        throw new Error("Failed to parse questions response");
    }
}
async function generateFeedback(parsedResume, jobDescription) {
    // Check if any token is available for feedback
    if (!feedbackClient && !mainClient) {
        throw new Error("HF_TOKEN_FEEDBACK or HF_TOKEN not configured");
    }
    try {
        const prompt = `
You are an experienced recruiter with 10+ years of experience reviewing resumes. 
Your task is to provide **genuine, constructive, human-like feedback** for this resume based on the job description.

IMPORTANT:
- Be fair and balanced. Highlight both **strengths** and areas for improvement.
- Give a **realistic score** out of 10 with varied decimals (e.g., 7.3, 8.7, 6.5) — do not use fixed increments.
- Focus on **skills, achievements, formatting, and relevance**.
- Avoid overly harsh or "roasting" language. Be encouraging and human.
- Provide actionable advice that a candidate could realistically apply.

RESUME:
${JSON.stringify(parsedResume, null, 2)}

JOB DESCRIPTION:
${jobDescription}

ANALYSIS REQUIREMENTS:

1. BALANCED ASSESSMENT:
   - Realistic score (1-10) with decimal precision
   - Compare fairly against role requirements
   - Mention strengths explicitly

2. CONSTRUCTIVE FEEDBACK:
   - Identify gaps or areas to improve
   - Suggest better phrasing or quantification

3. ACTIONABLE IMPROVEMENTS:
   - Specific wording improvements with examples
   - Quantification opportunities
   - Structural suggestions

4. KEYWORD ANALYSIS:
   - Missing hard skills and soft skills from JD

5. BULLET POINT ENHANCEMENTS (Top 3-5):
   - Transform responsibilities into achievements
   - Apply STAR method suggestions

TONE: Professional, constructive, and humanistic. Balance criticism with encouragement.

### Expected JSON Output Format

{
  "score": 8.2,
  "scoreExplanation": "Balanced explanation of strengths and areas for improvement",
  "summary": "Constructive overall assessment",
  "strengths": [
    "Key strength 1",
    "Key strength 2"
  ],
  "areasForImprovement": [
    "Constructive area 1",
    "Constructive area 2"
  ],
  "suggestions": [
    {
      "priority": "High/Medium/Low",
      "suggestion": "Specific improvement suggestion",
      "example": "Example implementation"
    }
  ],
  "missingKeywords": {
    "hardSkills": ["Technology 1", "Technology 2"],
    "softSkills": ["Skill 1", "Skill 2"]
  },
  "exampleBullets": [
    {
      "original": "Original bullet point",
      "improved": "Enhanced version",
      "reasoning": "Why this improves the resume"
    }
  ]
}
`;
        const responseText = await callHuggingFaceChat(prompt, "feedback");
        return extractJsonFromResponse(responseText);
    } catch (error) {
        if (error instanceof APILimitExceededError) {
            // Already set to "feedback" in callHuggingFaceChat
            throw error;
        }
        console.error("Error generating feedback with Hugging Face:", error);
        throw error;
    }
}
async function generateInterviewQuestions(parsedResume, jobDescription, count = 10) {
    // Check if any token is available for questions
    if (!questionsClient && !mainClient) {
        throw new Error("HF_TOKEN_QUESTIONS or HF_TOKEN not configured");
    }
    try {
        const prompt = `
You are a senior technical interviewer with 20+ years of experience at FAANG companies.
Create challenging, realistic interview questions specifically tailored to this candidate's background and the target role.

RESUME:
${JSON.stringify(parsedResume, null, 2)}

JOB DESCRIPTION:
${jobDescription}

INTERVIEW QUESTION REQUIREMENTS:

1. QUESTION MIX:
   - 40% Technical questions (specific to technologies mentioned in JD and resume)
   - 30% Behavioral questions (STAR format, based on resume experience)
   - 20% System design/architecture questions (appropriate for role level)
   - 10% Culture fit/motivation questions

2. QUESTION DEPTH:
   - Technical questions should be challenging but fair for the role level
   - Include follow-up questions that might be asked during the interview
   - Behavioral questions should probe for specific examples and measurable outcomes
   - System design questions should be relevant to the company's domain

3. ANSWER GUIDANCE:
   - Provide model answers that incorporate the candidate's actual experience
   - Include specific tips on what makes a strong vs weak answer
   - Highlight red flags interviewers would watch for in responses
   - Suggest how to quantify achievements even if not in original resume

4. DIFFICULTY GRADING:
   - Rate each question's difficulty (Easy/Medium/Hard)
   - Note which questions are likely to be elimination questions
   - Suggest preparation resources for each topic

5. TAILORING:
   - Questions must be specifically tailored to both the candidate's background and the JD
   - Reference specific technologies, projects, or experiences from the resume
   - Align with the company's industry, size, and mentioned technologies

TONE: Direct, challenging, and practical. Questions should reflect what would actually be asked in a competitive interview.

### Expected JSON Output Format

[
  {
    "type": "technical/behavioral/system-design/cultural",
    "difficulty": "Easy/Medium/Hard",
    "question": "The actual interview question",
    "modelAnswer": "Comprehensive answer that incorporates the candidate's experience and quantifies results",
    "tips": [
      "Tip 1 for answering effectively",
      "Tip 2 on what to emphasize",
      "What interviewers are really looking for"
    ],
    "followUps": [
      "Potential follow-up question 1",
      "Potential follow-up question 2"
    ],
    "preparationResources": [
      "Resource 1 to prepare for this question",
      "Resource 2 for deeper understanding"
    ],
    "redFlags": [
      "Response patterns that would raise concerns",
      "Common mistakes candidates make"
    ]
  }
]
`;
        const responseText = await callHuggingFaceChat(prompt, "questions");
        const result = extractJsonFromResponse(responseText);
        // Handle both array and object formats
        return Array.isArray(result) ? result : result.questions || [];
    } catch (error) {
        if (error instanceof APILimitExceededError) {
            // Already set to "questions" in callHuggingFaceChat
            throw error;
        }
        console.error("Error generating interview questions with Hugging Face:", error);
        throw error;
    }
}
function checkBothLimitsExceeded(feedbackError, questionsError) {
    return feedbackError instanceof APILimitExceededError && questionsError instanceof APILimitExceededError;
}
function checkTokenAvailability() {
    return {
        feedbackAvailable: !!(feedbackClient || mainClient),
        questionsAvailable: !!(questionsClient || mainClient)
    };
}
}),
"[project]/Desktop/daddy-ai-main/src/data/mockData/mockData.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockFeedback",
    ()=>mockFeedback,
    "mockQuestion",
    ()=>mockQuestion
]);
const mockQuestion = [
    {
        type: "technical",
        difficulty: "Medium",
        question: "Can you walk me through how you would optimize a slow database query in a production environment?",
        modelAnswer: "In my previous role at TechCorp, I optimized a slow product search query that was taking 2+ seconds. First, I used EXPLAIN ANALYZE to identify a full table scan. I added appropriate indexes on the frequently searched columns like product_name and category. Then I refactored the query to eliminate unnecessary joins and applied pagination. This reduced the query time to under 200ms and decreased database CPU usage by 40% during peak hours.",
        tips: [
            "Focus on your systematic approach to debugging performance issues",
            "Mention specific tools you've used (EXPLAIN, monitoring tools)",
            "Quantify the impact of your optimization"
        ],
        followUps: [
            "How would you handle a situation where adding indexes isn't enough?",
            "What monitoring tools have you used to identify performance bottlenecks?"
        ],
        preparationResources: [
            "Database indexing strategies",
            "Query optimization techniques in [specific DB technology]",
            "Performance monitoring tools like New Relic or Datadog"
        ],
        redFlags: [
            "Vague answers without specific examples",
            "Not considering trade-offs of indexing (write performance impact)",
            "Not mentioning monitoring or measurement of results"
        ]
    },
    {
        type: "behavioral",
        difficulty: "Medium",
        question: "Describe a time you had to work with a difficult team member on a critical project.",
        modelAnswer: "On the X project, I worked with a senior developer who was resistant to adopting our new CI/CD pipeline. I scheduled a one-on-one to understand his concerns, which were mainly about stability. I proposed a phased rollout where we'd run the old and new systems in parallel for two weeks. I also created detailed documentation and offered pair programming sessions. Eventually, he became one of our biggest advocates for the new system after seeing a 60% reduction in deployment failures.",
        tips: [
            "Use the STAR method (Situation, Task, Action, Result)",
            "Show empathy and understanding of different perspectives",
            "Highlight how you turned a challenging situation into a positive outcome"
        ],
        followUps: [
            "What would you do if your approach hadn't worked?",
            "How did you measure the success of your solution?"
        ],
        preparationResources: [
            "STAR method for behavioral questions",
            "Conflict resolution techniques",
            "Influencing without authority"
        ],
        redFlags: [
            "Blaming the other person entirely",
            "Not showing what you learned from the experience",
            "Vague descriptions without specific actions taken"
        ]
    }
];
const mockFeedback = {
    score: 7,
    tldr: "Solid technical background but lacks quantifiable achievements and specific keywords from the job description.",
    suggestions: [
        "Add metrics to quantify achievements (e.g., 'improved performance by 25%')",
        "Incorporate more keywords from the job description",
        "Highlight leadership experience more prominently",
        "Add a projects section to showcase specific work"
    ],
    keywords: [
        "cloud architecture",
        "Agile methodology",
        "CI/CD",
        "containerization"
    ],
    exampleBullets: [
        "Reduced API response time by 40% through optimization techniques",
        "Led a team of 5 developers to deliver a project 2 weeks ahead of schedule",
        "Implemented CI/CD pipeline that reduced deployment time by 60%"
    ]
};
}),
"[project]/Desktop/daddy-ai-main/src/app/api/feedback/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/daddy-ai-main/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$src$2f$lib$2f$hugingface$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/daddy-ai-main/src/lib/hugingface.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$src$2f$data$2f$mockData$2f$mockData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/daddy-ai-main/src/data/mockData/mockData.ts [app-route] (ecmascript)");
;
;
;
const MOCK_FEEDBACK = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$src$2f$data$2f$mockData$2f$mockData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockFeedback"];
async function generateFeedbackWithRetry(parsedResume, jobDescription, retries = 3) {
    for(let i = 0; i < retries; i++){
        try {
            const feedback = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$src$2f$lib$2f$hugingface$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFeedback"])(parsedResume, jobDescription);
            feedback.isMock = false;
            return feedback;
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            if (message.includes("503") && i < retries - 1) {
                await new Promise((res)=>setTimeout(res, 2000 * (i + 1)));
                continue;
            }
            throw err;
        }
    }
    throw new Error("Feedback API unavailable after retries");
}
async function POST(req) {
    try {
        const { parsedResume, jobDescription } = await req.json();
        if (!parsedResume || !jobDescription) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Missing parsedResume or jobDescription"
            }, {
                status: 400
            });
        }
        const limitedResume = {
            ...parsedResume,
            rawText: parsedResume.rawText?.substring(0, 5000) || ""
        };
        let feedback;
        try {
            feedback = await generateFeedbackWithRetry(limitedResume, jobDescription);
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            console.warn("⚠️ Using mock feedback due to API error:", message);
            feedback = {
                ...MOCK_FEEDBACK,
                isMock: true
            };
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            feedback
        });
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$daddy$2d$ai$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: message || "Unknown error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1d973811._.js.map