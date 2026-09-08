import type { Certification } from "@/types/certification";

// Verificado em 2026-09-06 contra o índice canônico de exam guides da AWS:
// https://docs.aws.amazon.com/aws-certification/latest/examguides/aws-certification-exam-guides.html
// Fora da lista por aposentadoria: Machine Learning Specialty (MLS-C01),
// Database Specialty (DBS-C01), SAP on AWS Specialty (PAS-C01), Data Analytics (DAS-C01).
// SOA-C03 é o exame atual do antigo "SysOps Administrator", hoje "CloudOps Engineer".

const EXAM_GUIDE = "https://docs.aws.amazon.com/aws-certification/latest/examguides";

export const awsCertifications: Certification[] = [
  {
    id: "aws-aib-c01",
    provider: "aws",
    code: "AIB-C01",
    title: "AWS Certified AI Business Strategist",
    tier: "business",
    studyUrl: `${EXAM_GUIDE}/ai-business-strategist-01.html`,
  },
  {
    id: "aws-clf-c02",
    provider: "aws",
    code: "CLF-C02",
    title: "AWS Certified Cloud Practitioner",
    tier: "foundational",
    studyUrl: `${EXAM_GUIDE}/cloud-practitioner-02.html`,
  },
  {
    id: "aws-aif-c01",
    provider: "aws",
    code: "AIF-C01",
    title: "AWS Certified AI Practitioner",
    tier: "foundational",
    studyUrl: `${EXAM_GUIDE}/ai-practitioner-01.html`,
  },
  {
    id: "aws-soa-c03",
    provider: "aws",
    code: "SOA-C03",
    title: "AWS Certified CloudOps Engineer – Associate",
    tier: "associate",
    studyUrl: `${EXAM_GUIDE}/sysops-administrator-associate-03.html`,
  },
  {
    id: "aws-dea-c01",
    provider: "aws",
    code: "DEA-C01",
    title: "AWS Certified Data Engineer – Associate",
    tier: "associate",
    studyUrl: `${EXAM_GUIDE}/data-engineer-associate-01.html`,
  },
  {
    id: "aws-dva-c02",
    provider: "aws",
    code: "DVA-C02",
    title: "AWS Certified Developer – Associate",
    tier: "associate",
    studyUrl: `${EXAM_GUIDE}/developer-associate-02.html`,
    simuladoSlug: "developer-associate",
  },
  {
    id: "aws-mla-c02",
    provider: "aws",
    code: "MLA-C02",
    title: "AWS Certified Machine Learning Engineer – Associate",
    tier: "associate",
    studyUrl: `${EXAM_GUIDE}/machine-learning-engineer-associate-02.html`,
  },
  {
    id: "aws-saa-c03",
    provider: "aws",
    code: "SAA-C03",
    title: "AWS Certified Solutions Architect – Associate",
    tier: "associate",
    studyUrl: `${EXAM_GUIDE}/solutions-architect-associate-03.html`,
  },
  {
    id: "aws-aip-c01",
    provider: "aws",
    code: "AIP-C01",
    title: "AWS Certified Generative AI Developer – Professional",
    tier: "professional",
    studyUrl: `${EXAM_GUIDE}/ai-professional-01.html`,
  },
  {
    id: "aws-dop-c02",
    provider: "aws",
    code: "DOP-C02",
    title: "AWS Certified DevOps Engineer – Professional",
    tier: "professional",
    studyUrl: `${EXAM_GUIDE}/devops-engineer-professional-02.html`,
    simuladoSlug: "devops-engineer-professional",
  },
  {
    id: "aws-sap-c02",
    provider: "aws",
    code: "SAP-C02",
    title: "AWS Certified Solutions Architect – Professional",
    tier: "professional",
    studyUrl: `${EXAM_GUIDE}/solutions-architect-professional-02.html`,
    simuladoSlug: "solutions-architect-professional",
  },
  {
    id: "aws-ans-c01",
    provider: "aws",
    code: "ANS-C01",
    title: "AWS Certified Advanced Networking – Specialty",
    tier: "specialty",
    studyUrl: `${EXAM_GUIDE}/advanced-networking-specialty-01.html`,
  },
  {
    id: "aws-scs-c03",
    provider: "aws",
    code: "SCS-C03",
    title: "AWS Certified Security – Specialty",
    tier: "specialty",
    studyUrl: `${EXAM_GUIDE}/security-specialty-03.html`,
    simuladoSlug: "security-especialist",
  },
];
