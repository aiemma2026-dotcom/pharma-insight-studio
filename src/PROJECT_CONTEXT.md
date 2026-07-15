# Pharma Insight Studio
## Project Context & Development Status

Version: V2
Last Updated: 2026-07-13

---

# 1. Project Overview

## Project Name

Pharma Insight Studio

## Product Vision

Build an AI-powered pharmaceutical market opportunity assessment platform.

The tool helps pharma professionals estimate:

- TAM (Total Addressable Market)
- SAM (Serviceable Available Market)
- SOM (Serviceable Obtainable Market)

for new pharmaceutical products.

The target users are:

- Pharma commercial teams
- Market access teams
- Business development teams
- Product strategy teams

The ultimate goal is to transform traditional market sizing work from:

"manual Excel + consultant reports"

into:

"knowledge-driven AI market intelligence platform".

---

# 2. Core Product Concept

The system architecture follows:

User Input
    ↓
Knowledge Base
    ↓
Calculation Engine
    ↓
Insight Engine
    ↓
Strategic Recommendation


The project should NOT become a simple calculator.

The differentiation is:

1. Medical knowledge base
2. Pharma commercial assumptions
3. Scenario simulation
4. AI-generated strategic insights


---

# 3. Current Technical Architecture


## Folder Structure


pharma-insight-studio/

│
├── prototype/
│   └── pharma-market-sizing.html
│
├── src/
│   ├── app.js
│   ├── marketCalculator.js
│   ├── validator.js
│   ├── insightEngine.js
│   └── knowledgeLoader.js
│
├── knowledge/
│   ├── t2dm.json
│   ├── hospital.json
│   └── productTypes.json
│
└── PROJECT_CONTEXT.md



---

# 4. Completed Work


## 4.1 Prototype Web Interface

Status:
DONE


File:

prototype/pharma-market-sizing.html


Current capability:

- User input interface
- Disease selection
- Product selection
- Pricing input
- Hospital tier selection
- Penetration input
- TAM/SAM/SOM result display
- Opportunity/Risk/Recommendation section


The page can run through:

VS Code Live Server


---

## 4.2 Market Calculation Engine

Status:
DONE


File:

src/marketCalculator.js


Current calculation logic:

TAM:

patient population
× diagnosis rate
× treatment rate
× product applicable ratio
× annual treatment cost


SAM:

TAM
× hospital coverage


SOM:

SAM
× penetration assumption


Current model supports:

- GLP-1 products
- T2DM indication
- Year 5 penetration scenario


---

## 4.3 T2DM Knowledge Model

Status:
DONE (Version 2)


File:

knowledge/t2dm.json


Contains:


Disease information:

- Patient population
- Diagnosis rate
- Treatment rate


Hospital:

- Tertiary A coverage
- Tertiary B coverage
- Secondary hospital coverage


Pricing:

- Metformin
- DPP4
- GLP-1


Insurance:

- reimbursement status


Competitors:

- Liraglutide
- Dulaglutide
- Semaglutide injection
- Oral semaglutide


Commercial assumptions:

- Peak penetration
- Peak year
- Currency


---

## 4.4 Additional Knowledge Files

Status:
DONE


Files:

knowledge/hospital.json

knowledge/productTypes.json


Purpose:

Separate business assumptions from code.

Future expansion should add new JSON files instead of modifying calculation code.


---

## 4.5 Insight Engine

Status:
INITIAL VERSION CREATED


File:

src/insightEngine.js


Purpose:

Generate:

- Opportunity insights
- Risk warnings
- Strategic recommendations


Currently:

Architecture created.

Needs further integration with calculation results.


---

## 4.6 Validator Module

Status:

INITIAL VERSION


File:

src/validator.js


Purpose:

Input validation:

- Required fields
- Positive numbers
- Percentage validation
- Hospital coverage validation


Future improvement:

Integrate with UI error messages.


---

# 5. Current Development Issue


## JSON Knowledge Loading


Task in progress:

Connect external knowledge files with frontend.


Goal:

Replace hard-coded data:

Example:

Before:

const patients = 140000000;


After:

const patients =
knowledge.market.patientPopulation.value;


A new module was created:

src/knowledgeLoader.js


Expected:

app.js imports:

import { loadT2DMKnowledge } from "./knowledgeLoader.js";


Then:

loadT2DMKnowledge()
.then(data=>{
 console.log(data)
})


Current problem:

Browser console does not show:

"Knowledge Loaded"


Possible causes:

1. app.js not loaded by HTML
2. Wrong app.js file modified
3. Wrong relative path
4. Module loading issue


Need to debug before continuing.


---

# 6. Immediate Next Tasks


## Task 1: Complete Knowledge Loading

Priority: HIGH


Verify:

prototype/pharma-market-sizing.html


contains:

<script type="module" src="../src/app.js"></script>


Verify:

src/app.js


imports:

knowledgeLoader.js


Verify:

console outputs:

Knowledge Loaded


After success:

Commit:

"Connect knowledge base loader"



---

## Task 2: Replace Hard-coded Data

Priority: HIGH


Move current T2DM assumptions from:

app.js

into:

knowledge/t2dm.json


Calculation engine should read JSON.


Goal:

No disease-specific data inside JavaScript.


---

## Task 3: Integrate Insight Engine

Priority: HIGH


Connect:

Calculation Result

↓

insightEngine.js

↓

UI


Generate:


Opportunity:

Example:

"Large diagnosed population creates significant GLP-1 opportunity."


Risk:

Example:

"High competition from semaglutide may limit penetration."


Recommendation:

Example:

"Consider differentiated positioning and reimbursement strategy."


---

## Task 4: Add Scenario Simulation

Priority: MEDIUM


Add:

Base case

Optimistic case

Conservative case


Variables:

- Diagnosis rate
- Product adoption
- Penetration
- Price


---

## Task 5: Expand Disease Knowledge Base

Priority: FUTURE


Architecture target:


knowledge/

├── t2dm.json

├── obesity.json

├── breastCancer.json

└── hypertension.json



Calculation engine should become disease-agnostic.


---

# 7. Development Rules for AI Agent


IMPORTANT:


1. Do NOT rewrite the whole project.

Make incremental changes.


2. Before modifying code:

Explain:

- Which file
- Why modify
- Expected impact


3. Keep existing functionality.


4. Use modular architecture.


5. Business logic should NOT be placed in HTML.


6. Disease/product assumptions belong in knowledge/*.json.


7. Calculation logic belongs in src/*.js.


8. UI rendering belongs in prototype/*.html.


---

# 8. Current Product Status Summary


Overall Progress:

ประมาณ 40%


Completed:

✅ UI prototype

✅ TAM/SAM/SOM calculation

✅ T2DM knowledge model

✅ Hospital/product knowledge separation

✅ Insight engine framework


In Progress:

🔄 Knowledge base connection


Next milestone:

A fully knowledge-driven pharma market sizing application.

