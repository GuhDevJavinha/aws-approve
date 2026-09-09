import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SOURCE_PATH = resolve(process.cwd(), "simulado-dva-c02.txt");
const OUTPUT_PATH = resolve(process.cwd(), "app/_data/simulado_developer_associate.ts");
const EXAM_CODE = "DVA-C02";

interface OutQuestion {
  id: string;
  type: "single" | "multi";
  pick?: number;
  stem: string;
  ask?: string;
  options: { id: string; text?: string; code?: string }[];
  answer: string[];
}

interface SourceLine {
  correct: boolean;
  text: string;
}

const QUESTION_START = /^(\d+)-\s?(.*)$/;
const OPTION_START = /^([A-Za-z])\.\s*(.*)$/;
const CHOOSE = /\(Escolha[^)]*\)/gi;
const MAIS_VOTADO = /\s*Mais votado\s*/gi;

// The source .docx shows the answer for these options only as a screenshot of JSON/VTL/CLI
// code (never captured in the extracted text), so the options are transcribed by hand from
// the embedded images instead of scraped. Everything else about these 8 questions (stem,
// which option is correct) still comes from the normal extraction pipeline.
const MANUAL_OPTION_CODE: Record<number, Record<string, string>> = {
  75: {
    A: '{\n    "source": ["aws.codecommit"],\n    "detail": {\n        "event": ["pullRequestMergeStatusUpdated"]\n    }\n}',
    B: '{\n    "source": ["aws.codecommit"],\n    "detail": {\n        "event": ["pullRequestApprovalRuleCreated"]\n    }\n}',
    C: '{\n    "source": ["aws.codecommit"],\n    "detail": {\n        "event": ["pullRequestSourceBranchUpdated", "pullRequestCreated"]\n    }\n}',
    D: '{\n    "source": ["aws.codecommit"],\n    "detail": {\n        "event": ["pullRequestUpdated", "pullRequestSourceBranchCreated"]\n    }\n}',
  },
  139: {
    A: '{\n  "Action": ["s3:GetObject"],\n  "Effect": "Allow",\n  "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET/doc.txt"\n}',
    B: '{\n  "Action": ["s3:*"],\n  "Effect": "Allow",\n  "Resource": "*"\n}',
    C: '{\n  "Action": ["s3:GetObject"],\n  "Effect": "Allow",\n  "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*"\n}',
    D: '{\n  "Action": ["s3:*"],\n  "Effect": "Allow",\n  "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET/doc.txt"\n}',
  },
  236: {
    A: '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "s3:ListBucket",\n      "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET"\n    },\n    {\n      "Effect": "Allow",\n      "Action": ["s3:GetObject"],\n      "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*"\n    }\n  ]\n}',
    B: '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "s3:ListBucket",\n      "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET"\n    },\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*"\n    }\n  ]\n}',
    C: '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "s3:ListBucket",\n      "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET"\n    },\n    {\n      "Effect": "Allow",\n      "Action": ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"],\n      "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*"\n    }\n  ]\n}',
    D: '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "s3:ListBucket",\n      "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET"\n    },\n    {\n      "Effect": "Deny",\n      "Action": ["s3:GetObject"],\n      "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*"\n    }\n  ]\n}',
  },
  443: {
    A: '"Condition": {\n  "ForAllValues:StringEquals": {\n    "dynamodb:LeadingKeys": ["${www.amazon.com:user_id}"],\n    "dynamodb:Attributes": ["user_name"]\n  }\n}',
    B: '"Condition": {\n  "ForAllValues:StringEquals": {\n    "dynamodb:LeadingKeys": ["${www.amazon.com:user_name}"],\n    "dynamodb:Attributes": ["user_id"]\n  }\n}',
    C: '"Condition": {\n  "ForAllValues:StringEquals": {\n    "dynamodb:LeadingKeys": ["${www.amazon.com:user_id}"],\n    "dynamodb:Attributes": ["user_name", "user_id"]\n  }\n}',
    D: '"Condition": {\n  "ForAllValues:StringEquals": {\n    "dynamodb:LeadingKeys": ["${www.amazon.com:user_name}"],\n    "dynamodb:Attributes": ["user_name", "user_id"]\n  }\n}',
  },
  454: {
    A: 'filter @type = "REPORT" |\n    stats avg(@duration), max(@duration), min(@duration) by bin(1m)',
    B: 'filter @type = "DISPLAY" |\n    stats avg(@duration), max(@duration), min(@duration) by bin(5m)',
    C: 'filter @type = "STATS" |\n    stats avg(@duration), max(@duration), min(@duration) by bin(5m)',
    D: 'filter @type = "PATTERN" |\n    stats avg(@duration), max(@duration), min(@duration) by bin(1m)',
  },
  483: {
    A: '#if( $input.params(\'integration\') == "mock" )\n    "statusCode": 404\n#else\n    "statusCode": 500\n#end',
    B: '#if( $input.params(\'scope\') == "internal" )\n    "statusCode": 200\n#else\n    "statusCode": 500\n#end',
    C: '#if( $input.path("integration") )\n    "statusCode": 200\n#else\n    "statusCode": 404\n#end',
    D: '#if( $context.integration.status)\n    "statusCode": 200\n#else\n    "statusCode": 500\n#end',
  },
  503: {
    A: '{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Effect": "Allow",\n    "Action": [\n      "dynamodb:BatchGetItem",\n      "dynamodb:GetItem",\n      "dynamodb:Query",\n      "dynamodb:Scan",\n      "dynamodb:BatchWriteItem",\n      "dynamodb:PutItem",\n      "dynamodb:UpdateItem"\n    ],\n    "Resource": "arn:aws:dynamodb:eu-east-1:321456987012:table/DailyOrders"\n  }]\n}',
    B: '{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Effect": "Allow",\n    "Action": [\n      "dynamodb:GetItem",\n      "dynamodb:PutItem",\n      "dynamodb:Query",\n      "dynamodb:Scan"\n    ],\n    "Resource": "arn:aws:dynamodb:eu-east-1:321456987012:table/DailyOrders"\n  }]\n}',
    C: '{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Effect": "Deny",\n    "Action": [\n      "dynamodb:Query",\n      "dynamodb:Scan",\n      "dynamodb:PutItem",\n      "dynamodb:UpdateItem"\n    ],\n    "Resource": "arn:aws:dynamodb:eu-east-1:321456987012:table/DailyOrders"\n  }]\n}',
    D: '{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Effect": "Allow",\n    "Action": [\n      "dynamodb:BatchGetItem",\n      "dynamodb:GetItem",\n      "dynamodb:Query",\n      "dynamodb:Scan"\n    ],\n    "Resource": "arn:aws:dynamodb:eu-east-1:321456987012:table/DailyOrders"\n  }]\n}',
  },
  543: {
    A: '"Condition": {\n  "ArnLike": {\n    "aws:SourceArn": "arn:aws:states:ap-south-1:111111111111:stateMachine:myStateMachine"\n  }\n}',
    B: '"Condition": {\n  "ArnLike": {\n    "aws:SourceArn": "arn:aws:states:ap-south-1:*:stateMachine:myStateMachine"\n  }\n}',
    C: '"Condition": {\n  "StringEquals": {\n    "aws:SourceAccount": "111111111111"\n  }\n}',
    D: '"Condition": {\n  "StringNotEquals": {\n    "aws:SourceArn": "arn:aws:states:ap-south-1:111111111111:stateMachine:myStateMachine"\n  }\n}',
  },
};

function normalize(text: string): string {
  return text.replace(MAIS_VOTADO, " ").replace(/\s+/g, " ").trim();
}

function splitStemAsk(text: string): { stem: string; ask?: string } {
  const qIdx = text.lastIndexOf("?");
  if (qIdx === -1) return { stem: text };

  const priorPeriod = text.lastIndexOf(". ", qIdx);
  const askStart = priorPeriod === -1 ? 0 : priorPeriod + 2;
  const ask = text.slice(askStart, qIdx + 1).trim();
  const stem = text.slice(0, askStart).trim();

  if (!stem) return { stem: ask };
  return { stem, ask };
}

function parseBlock(number: number, lines: SourceLine[]): OutQuestion | null {
  if (lines.length === 0) return null;

  const headerMatch = lines[0]!.text.match(QUESTION_START);
  const stemRaw = (headerMatch ? headerMatch[2]! : lines[0]!.text).replace(CHOOSE, "");

  const options: { id: string; text?: string; code?: string; correct: boolean }[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]!;
    const match = line.text.match(OPTION_START);
    if (!match) continue;

    const id = match[1]!.toUpperCase();
    const text = normalize(match[2]!);
    if (!text) {
      const code = MANUAL_OPTION_CODE[number]?.[id];
      if (!code) return null; // an option with no recoverable text makes the question unusable
      options.push({ id, code, correct: line.correct });
      continue;
    }

    options.push({ id, text, correct: line.correct });
  }
  if (options.length < 2) return null;

  // A handful of questions embed a screenshot (e.g. exact API parameters) between two
  // otherwise-empty option paragraphs; those already fail the empty-text check above (or are
  // recovered via MANUAL_OPTION_CODE). This guards the remaining case where extraction left
  // two options with identical wording.
  const optionKeys = options.map((o) => o.text ?? o.code);
  if (new Set(optionKeys).size !== optionKeys.length) return null;

  const answer = options.filter((o) => o.correct).map((o) => o.id);
  if (answer.length === 0) return null;

  const type: "single" | "multi" = answer.length > 1 ? "multi" : "single";
  const { stem, ask } = splitStemAsk(normalize(stemRaw));
  if (!stem) return null;

  return {
    id: `${EXAM_CODE}-${number}`,
    type,
    ...(type === "multi" ? { pick: answer.length } : {}),
    stem,
    ...(ask ? { ask } : {}),
    options: options.map(({ id, text, code }) => ({ id, ...(text ? { text } : {}), ...(code ? { code } : {}) })),
    answer,
  };
}

const source = readFileSync(SOURCE_PATH, "utf8");
const lines: SourceLine[] = source
  .split("\n")
  .filter((line) => line.length > 0)
  .map((line) => {
    const tabIdx = line.indexOf("\t");
    return { correct: line.slice(0, tabIdx) === "1", text: line.slice(tabIdx + 1) };
  });

const questionStarts: { number: number; lineIndex: number }[] = [];
for (let i = 0; i < lines.length; i++) {
  const match = lines[i]!.text.match(QUESTION_START);
  if (match) questionStarts.push({ number: Number(match[1]), lineIndex: i });
}

const questions: OutQuestion[] = [];
let droppedNoOptions = 0;
let droppedNoAnswer = 0;

for (let i = 0; i < questionStarts.length; i++) {
  const { number, lineIndex } = questionStarts[i]!;
  const end = i + 1 < questionStarts.length ? questionStarts[i + 1]!.lineIndex : lines.length;
  const block = lines.slice(lineIndex, end);

  const result = parseBlock(number, block);
  if (!result) {
    const hasOption = block.some((line, idx) => idx > 0 && OPTION_START.test(line.text));
    if (!hasOption) droppedNoOptions++;
    else droppedNoAnswer++;
    continue;
  }
  questions.push(result);
}

questions.sort((a, b) => Number(a.id.split("-")[2]) - Number(b.id.split("-")[2]));

const fileContent = `import type { Simulado } from "@/types/simulado";

export const simuladoDeveloperAssociate: Simulado = {
  slug: "developer-associate",
  title: "AWS Certified Developer – Associate",
  examCode: "${EXAM_CODE}",
  level: "associate",
  examQuestionCount: 65,
  examDurationMinutes: 130,
  passingScore: 72,
  questions: ${JSON.stringify(questions, null, 2)},
};
`;

writeFileSync(OUTPUT_PATH, fileContent, "utf8");

console.log(`Question markers found: ${questionStarts.length}`);
console.log(`Questions kept: ${questions.length}`);
console.log(`Dropped (no options found): ${droppedNoOptions}`);
console.log(`Dropped (no marked correct answer / empty option / duplicate): ${droppedNoAnswer}`);
