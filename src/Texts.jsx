import { useEffect, useRef } from 'react'
import './Texts.css'

export default function Texts({ savedNumber }) {

  const array1to60 = [
    {
      id: 1,
      title: `. Wieduwilt M. Development of inotuzumab ozogamicin and blinatumomab for 
      frontline treatment of older patients with ph-negative B-cell acute lymphoblastic leukemia. 
      Clinical Lymphoma, Myeloma and Leukemia. 2024;24:S31-S33.`,
      resume: `Age and Prognosis in B-cell ALL Treatment of older patients diagnosed with 
      Philadelphia chromosome-negative (Ph-negative) acute lymphoblastic leukemia (ALL) has, until 
      recently, relied on conventional chemotherapy combinations. With these approaches, remission 
      rates were comparatively low, induction death and death in remission were common, and relapse 
      rates were high, leading to poor survival with 20% or less of older patients surviving beyond 
      3–5 years from diagnosis. Attempts to reduce the toxicity of conventional chemotherapy with 
      regimens designed for older patients largely failed to yield an improvement in major clinical 
      outcomes.1 The utility of allogeneic hematopoietic cell transplantation for ALL in older patients 
      is also unclear, and many older patients are ineligible due to age, comorbidities, or lack of 
      adequate disease control. The findings of clinical trials are mirrored by real-world 
      Surveillance, Epidemiology, and End Results (SEER) data, showing little to no improvement 
       survival outcomes in older patients in the United States (US) over the years 1980 through 
       2017.2 Enter Novel Targeted Agents The advent of highly active targeted therapies for B-cell 
       ALL has transformed therapy for relapsed and refractory disease. Inotuzumab ozogamicin (InO) 
       is an antibody-drug conjugate that links the potent DNA-damaging antibiotic, calicheamicin, 
       to a monoclonal antibody targeting cell surface CD22, which is expressed in approximately 85% 
       of B-cell ALL cases. Internalization of InO by target cells into lysosomes is followed by 
       lysosome acidification, which leads to the release of free calicheamicin inside the cell. In 
       the phase III INO-VATE ALL study for patients with relapsed/refractory B-cell ALL, InO was 
       superior to conventional chemotherapy, with an improved complete remission (CR) rate (81% vs. 
       29%, P<0.001), measurable residual disease (MRD) negativity rate (78% vs. 28%, P<0.001), 
       progression-free survival (PFS, median: 5.0 vs.1.8 months, Hazard ratio [HR]: 0.45, P<0.001), 
       and overall survival (OS, 7.7 vs. 6.7 months, HR: 0.77, P=0.04), leading to its approval by the 
       US Food and Drug Administration (FDA). Myelosuppression and hepatotoxicity, including 
       potentially fatal veno-occlusive disease of the liver, are major toxicities of concern.3 
       Blinatumomab is a bifunctional T-cell-engaging molecule that combines the variable domains of 
       CD3 and CD19 monoclonal antibodies with a peptide linker. The drug targets patient T cells to 
       CD19-expressing cells, including B-cell ALL cells, leading to T-cell activation, proliferation, 
       cytokine secretion, and cell-mediated killing. The phase III TOWER study randomized patients 
       with relapsed/refractory B-cell ALL to receive blinatumomab or conventional chemotherapy. 
       Blinatumomab had a superior composite CR rate (44% vs. 25%, P<0.001), eventfree survival 
       (EFS, 6 months, 31% vs. 12%, HR: 0.55, P<0.001), and OS (median: 7.7 vs. 4.0 months, HR: 0.71, 
       P=0.01) when compared to conventional chemotherapy. Notably, blinatumomab was more active in 
       lower-burden ALL states, with composite CR rates of 66% in patients with <50% bone marrow 
       lymphoblasts but only 34% in patients with 50% or more bone marrow lymphoblasts prior to 
       therapy.4 In addition, blinatumomab can clear MRD in 78% of patients with persistent or 
       recurrent MRD.5 The major toxicity of concern is neurotoxicity, which is significant in 
       approximately 5–10% of patients and can limit the ability to safely give the drug. Cytokine 
       release syndrome is rare and generally of manageable severity when it occurs. The drug is now 
       FDA approved for relapsed/refractory and MRD-positive B-cell ALL. Inotuzumab Ozogamicin The 
       high remission rate and relatively low toxicity of InO in relapsed/refractory B-cell ALL has 
       led to exploration in adult and pediatric populations in combination with or sequential with 
       conventional chemotherapy and/or blinatumomab. In older adults, three groups have reported on 
       trials studying InO and chemotherapy in older patients with newly diagnosed B-cell ALL. In the 
       single-arm, phase II INITIAL-1 trial (median age 64 years), the GMALL group administered 3 
       cycles of InO with dexamethasone as remission induction therapy, followed by reduced-intensity 
       chemotherapy, and then maintenance therapy with mercaptopurine and methotrexate. The CR rate 
       was 100%, with an MRD-negativity rate at CR of 71% after 3 cycles of InO/dexamethasone. The 
       estimated EFS rate was 88% at 1 year and 55% at 3 years, with no deaths in the first 6 months 
       of therapy, comparing favorably with historical outcomes in similar populations of patients.6 
       The EWALL group and MD Anderson leukemia group have reported outcomes of combining InO with 
       chemotherapy. In the EWALL-INO study, older patients (median age 68 years) received InO in 
       combination with reduced-intensity chemotherapy as remission induction therapy, followed by 
       intensive conventional chemotherapy. The CR/CR with incomplete platelet recovery (CRp) rate was 
       90%, with an 83% MRD-negativity rate. With 15 months of follow-up, the estimated 1-year OS and 
       leukemia-free survival rates were 73% and 65%, respectively.7 Similarly, MD Anderson studied a 
       reduced-dose InO in combination with mini-hyperCVD (dosereduced cyclophosphamide, vincristine, 
       and dexamethasone, alternating with methotrexate and cytarabine) regimen in older patients 
       (median age 68 years). The composite CR rate was 98%, with 2-year PFS and OS rates of 59% and 
       66%, respectively.8 In a follow-up, the death in remission rate for the regimen was extremely 
       high at 49%, precluding the safe use of this regimen in clinical practice.9 Differences in 
       apparent toxicity and death in remission among these studies likely reflect the different 
       regimen designs, both agents and sequencing and possibly different study populations. 
       Blinatumomab As noted above, blinatumomab is FDA-approved for frontline use in patients with 
       persistent or recurrent MRD. The recently presented ECOG 1910 phase III study randomized 
       patients who were 30 to 70 years of age (median 51 years) and in MRDnegative CR at the end of 
       3 cycles of intensive chemotherapy to receive either 4 cycles of blinatumomab or no blinatumomab 
       in consolidation. The study met its primary endpoint, showing a significant OS benefit for 
       patients in the blinatumomab arm (median OS: not reached vs. 71 months, HR: 0.42, P=0.003).9 
       Notably, the survival benefit appears to be from a reduction in both relapse and non-relapse 
       mortality in the blinatumomab arm. In a secondary analysis, patients aged 55 years and older 
       derived a statistically significant OS benefit from blinatumomab (HR: 0.77, P=0.47), although 
       the power to detect a significant difference was limited.10 In the phase II SWOG 1318 study, 
       blinatumomab was studied as a single agent for induction and consolidation therapy, followed 
       by maintenance chemotherapy for older patients with newly diagnosed, Ph-negative B-cell ALL. 
       Blinatumomab induction yielded a CR rate of 66%, with a 92% MRD-negativity rate. Relapse after 
       CR was common; however, with a 3-year diseasefree survival (DFS) rate of 37%.11 Inotuzumab and 
       Blinatumomab Two studies have evaluated using both InO and blinatumomab in frontline therapy 
       for older patients with CD22-positive B-cell ALL. The MD Anderson leukemia group added 
       blinatumomab cycles to the mini-InO-HCVD regimen described above. The addition of blinatumomab 
       to this regimen appeared tolerable, although the regimen as a whole was still unacceptably 
       toxic. The 3-year death in remission rate was 35%, with a short median follow-up of 9 months 
       and no difference in the long-term outcomes with the addition of blinatumomab.12 Given the high 
       death in induction or remission observed with intensive chemotherapy, the Alliance for 
       Clinical Trials in Oncology conducted a phase II study of InO for up to 2 cycles as remission 
       induction therapy, followed by 4 or 5 cycles of blinatumomab without any conventional systemic 
       chemotherapy (intrathecal methotrexate was given for 8 doses) for older patients (median age 71 
       years) with newly diagnosed CD22- positive, Ph-negative B-cell ALL. The cumulative CR rate for 
       the regimen was 97%, with a 1-year EFS rate of 75%, meeting the primary endpoint of a 
       statistically significant benefit over historical outcomes. The regimen was well tolerated 
       overall, but there was one early death and two deaths (6%) in remission.13 Conclusions The 
       outcomes of older patients with ALL treated with conventional chemotherapy has been dismal, 
       even with regimens designed for older patients. Compared to historical outcomes, the 
       application of InO and blinatumomab in frontline therapy has improved remission rates, 
       MRD-negativity rates, and early survival outcomes. The impact of these approaches on long-term 
       survival remains unclear, especially given the high rates of late toxicity and toxic death 
       observed with the combination of InO and conventional chemotherapy. Elimination of conventional 
       chemotherapy by using highly active targeted agents is highly effective in Ph-positive ALL, and 
       the preliminary results for InO and blinatumomab with either dose-reduced or no conventional 
       chemotherapy support some of these approaches as valid options for the treatment of older 
       patients in clinical practice. Given this success, the integration of additional targeted agents 
       holds promise to further improve outcomes for older and, by extension, younger patients with 
       B-cell ALL, thereby representing a new paradigm of older-adult-inspired therapy for ALL.`
    },
    {
      id: 2,
      title: `. Goekbuget N, Schwartz S, Faul C, et al. Dose reduced chemotherapy in sequence with
blinatumomab for newly diagnosed older patients with Ph/BCR::ABL negative B-precursor
adult lymphoblastic leukemia (ALL): Preliminary results of the GMALL bold trial.
Blood. 2023;142:964.`,
      resume: `Older patients (pts) with newly diagnosed ALL are ineligible for unmodified pediatric-based therapies. Although
results are improved with age-adapted, dose-reduced regimens including MRD-based treatment modification, there is
much space for further improvement.Therefore, the GMALL study group developed a trial to evaluate Blinatumomab, a
CD19 directed bi-specific T-cell engager, in sequence with chemotherapy in this patient population with high medical
need (NCT 03480438). Importantly, Blinatumomab replaced three cycles of standard consolidation chemotherapy.Pts
aged 56 - 76 years (yrs) with CD19-positive, Ph-neg B-precursor ALL wereeligible. The primary endpoint was complete
hematologic remission (CR) afterinduction (1 cycle chemo, 1 cycle Blinatumomab) and the key secondary endpoint was
molecular response (table 1). The efficacy population included pts treated with dose reduced and shortened induction
I (IP1) and Blinatumomab 1 or early death (ED). Induction was followed by 3 further Blinatumomab cycles alternating
with age adapted consolidation cycles (HDMTX/ASP, HDAC, reinduction and maintenance) according to GMALL protocols
for older pts (Gökbuget et al, ASH 2021). The median age was 66 (56-76) yrs. 21% had pro-B-ALL and 79% c/
preB subtype. 40% had comorbidities according to the Charlson Score; most frequent were diabetes (13%) myocardial
infarction (10%) or vascular diseases (10%). 50 pts were evaluable for IP1: 76% achieved CR/CRu and 2 pts (4%) died
due to infections. 33% (N=11) had a molecular response and 18% MolCR (table 1). 47 pts were evaluable for the primary
endpoint after Blinatumomab 1: CR/CRu was observed in 85%; 2 experienced ED (4%; those mentioned above;
no additional ED). 88% of the CR pts had a molecular response (82% MolCR). The median follow-up is 757 (61-1584)
days. Overall Survival (OS) after 1 and 3 yrs was 80% and 67% for the efficacy population (figure 1). The resp results
for the total population were 82% and 65%. The 3y OS was 69% for c/pre-B-ALL and 58% for pro-B-ALL (p>.05). 3y
OS was 81% for pts aged 55-65 yrs and 53% for those older than 65 yrs (p=.025). Only three pts received an allogeneic
stem cell transplantation in CR1. 6 pts relapsed, 2 pt developed a secondary malignancy (Colon Ca, MDS) and
3 pts died in CR (1 HLH, 1 arterial disease, 1 Covid19). EFS was 60% at 3 yrs. We compared the results with those of
the current GMALL standard therapy for older pts with B-precursor ALL (N=186) (Gökbuget et al, ASH 2022). Patient
characteristics were similar. CR rates after induction were 85% vs 78% for BOLD vs standard (p>.05). Molecular CR
rates in pts with hematologic CR were 82% vs 55% (p=.006). OS at 3 yrs was 67% and 49% (p=0.08) and Remission
Duration (RD) was 83% vs 58% (p=0.055). Overall tolerability and efficacy of the regimen was very promising with a
high hematologic and molecular response rate; mortality in induction and consolidation was low. In comparison with
the current standard therapy the MRD response rates were significantly better. OS and RD was superior despite the
omission of several chemotherapy cycles in contrast to other trials with unmodified chemotherapy but additional cycles
of Blinatumomab. An ongoing randomized trial (NCT04994717) compares an even more dose reduced combination
of Blina and chemotherapy with standard of care. This is an independent academic trial initiated by the GMALL Study
Group which received free supply of Blinatumomab and financial support by Amgen.`
    },
    {
      id: 3,
      title: `. Advani AS, Moseley AB, O’Dwyer KM, et al. Long-term follow up for SWOG 1318: Combination
of dasatinib, prednisone, and blinatumomab for older patients with philadelphia-chromosome
(ph) positive acute lymphoblastic leukemia (ALL). Blood. 2023;142:1499.`,
      resume: `Tyrosine kinase inhibitors (TKIs) have improved the outcomes of patients with Philadelphia chromosome positive
(Ph+) acute lymphoblastic leukemia (ALL). Many older patients (pts) are not good candidates for intensive chemotherapy
and are treated with TKIs plus corticosteroids or low-intensity chemotherapy. Although the remission rates
with this approach have been high, the median disease-free survival (DFS) has been short. Therefore, novel treatment
strategies are needed. This trial evaluated the feasibility of combining the TKI dasatinib with prednisone and blinatumomab
in older pts with Ph+ ALL. Here we present updated results (median follow-up, 4.3 years). Methods: This trial was
activated through the NCTN in January 2015 and closed to accrual in April 2021. Pt eligibility included: age ≥ 65 years;
Ph+ or Ph-like ALL (with dasatinib-sensitive fusions or mutations); newly diagnosed or relapsed/ refractory; no evidence
of central nervous system (CNS) disease; and adequate organ function. Treatment: For induction, pts received dasatinib
140 mg/d orally (PO) Days 1-56 along with prednisone 60 mg/m 2/d PO Days 1-24. Pts achieving complete remission
(CR) or CR with incomplete count recovery (CRi) (Day 28 or Day 56) continued dasatinib until Day 84, followed by 3
cycles of post-remission therapy (PRT) with blinatumomab/ dasatinib. Pts not achieving CR or CRi by Day 56 received
re-induction with blinatumomab. The response rate was assessed on Day 35 of blinatumomab. Pts not achieving CR/
CRi could receive a second cycle of blinatumomab. This was followed by 3 cycles of PRT with blinatumomab/ dasatinib.
Maintenance therapy consisted of prednisone 60 mg/m 2/d x 5 days every 28 days for a total of 18 cycles, along with
dasatinib 140 mg po qd indefinitely. CNS prophylaxis included intrathecal (IT) methotrexate every 4-6 weeks x 8 doses.
IT methotrexate was given at least 2 days apart from blinatumomab. Response was assessed at Days 28, 56, and 84,
and additional time points were dependent on response. Minimal residual disease (MRD) was assessed centrally by
multi-color flow cytometry on Day 28. Statistics: A total of 24 eligible patients were accrued. The primary objective was
the feasibility of the combination therapy. The combination was to be deemed feasible if the dose-limiting toxicity (DLT)
was < 33%. DLT included: > Grade 3 non-hematologic toxicities (excluding nausea, vomiting, diarrhea) and Grade 4
neutropenia lasting > 42 days. The primary results were reported in 2022 with a median of 2.7 years of follow-up.
Herein, we report long-term outcomes for these patients. Results: The median age was 73 years (range 65-87). All
pts had newly diagnosed Ph+ ALL; 79% of Ph+ pts had additional cytogenetic abnormalities. During induction, 2 pts
experienced treatment-related non-hematologic Grade 4 toxicities. No Grade 4 or higher treatment-related non-hematologic
toxicities occurred during post-remission therapy or maintenance. The toxicity of the combination was deemed
acceptable. Twenty-two of 24 pts (92%) achieved a CR during dasatinib and prednisone induction therapy. Four did
not receive PRT (2 due to adverse events, 1 to receive a transplant, and 1 because of insurance issues). Sixteen pts
who achieved CR had MRD data. Six of 16 pts (38%) were MRD undetectable by multi-color flow cytometry on Day 28.
Most sites also monitored patients’ blood or bone marrow with real-time quantitative PCR to quantify the BCR-ABL1
transcript for molecular response. Of 19 patients analyzed, 17 (89%) were in a major or complete molecular remission
at some time point after treatment, with at least 12 of these patients achieving complete molecular remission. Four
patients remain on maintenance. The median follow- up for pts who are alive is 4.3 years (range 2.6-6.5 years). The
median overall survival (OS) is 6.5 years (95% CI 3-NA) and the median DFS has not been reached as of June 29,
2023. Kaplan-Meier 3-year estimates of OS and DFS are 75% (95% CI 52%-88%) and 72% (95% CI 49%-87%),
respectively (Figure). Of the 8 relapses, 4 patients were CD19+ and 3 had T315I mutations. Conclusions: Median DFS
and OS with dasatinib and blinatumomab in this older group of Ph+ ALL patients remain excellent despite only 1 patient
proceeding to an allogeneic transplant. Further correlative studies (single cell transcriptomics and DNA methylation
sequencing) are being planned to evaluate predictors of relapse and will be presented at the meeting.`
    },
    {
      id: 4,
      title: `. Jen W, Jabbour E, Haddad FG, et al. Phase 2 trial of mini-hyper-CVD plus inotuzumab
ozogamicin, with or without blinatumomab, in older patients with newly diagnosed
philadelphia chromosome-negative B-cell acute lymphoblastic leukemia. Blood.
2023;142:2878.`,
      resume: `Background The introduction of inotuzumab ozogamicin (InO) and blinatumomab (blina) has drastically improved
the overall survival (OS) of patients with relapsed/refractory B-cell acute lymphoblastic leukemia (B-ALL). Older
patients with B-ALL have worse outcomes compared with younger patients due to the poor-risk biology of their disease
and their inability to tolerate intensive chemotherapy. We aim to study the incorporation of InO and blina with low
intensity chemotherapy in older patients with newly diagnosed (ND) B-ALL. Methods Adults ≥60 years with ND Philadelphia
chromosome (Ph)-negative B-ALL who were untreated or had received up to two cycles of previous therapy
were eligible. Other inclusion criteria included an Eastern Cooperative Oncology Group (ECOG) performance status of
≤3 and adequate organ function. Patients with central nervous system (CNS) disease were eligible. Patients received
mini-Hyper-CVD (mHCVD, cyclophosphamide 150mg/m 2 q12h D1-3, dexamethasone 20mg daily D1-4, 11-14, and
vincristine 2mg D1, 8 alternating with methotrexate (MTX) 250mg/m 2 D1 & cytarabine 500mg/m 2 q12h D2, 3) for up
to 8 cycles. Eight doses of intrathecal (IT) MTX /cytarabine were given for CNS prophylaxis; patients with CNS disease
had IT hydrocortisone, MTX, and cytarabine twice weekly till CNS clearance, then weekly x4. Eight doses of rituximab
375mg/m 2 were given on D1, 8 of C1-4 if CD20 was ≥20% by flow cytometry. Initially, InO was given at 1.3-1.8mg/m
2 on D3 of C1 and 1.0-1.3mg/m 2 on D3 in C2-4. The protocol was amended from patient 50 such that InO was given
in fractionated doses with a maximum cumulative dose of 2.7mg/m 2 (0.6 mg/m 2 on D2 of C1, 0.3 mg/m 2 on D8 of
C1, then 0.3 mg/m 2 on D2 and D8 of C2-4). Ursodeoxycholic acid was given to all patients. Four cycles of blina 28μg/
day replaced C5-8 of mHCVD + InO. Maintenance was initially with vincristine 2mg D1, prednisolone 50mg daily D1-
5, 6-mercaptopurine 50mg BID & MTX 10mg/m 2 weekly (POMP) for three years. After the protocol amendment, this
was reduced to 12 cycles of POMP, with one cycle of blina given after every three POMP cycles (total four blina cycles).
Results 83 patients with a median age of 68y (range, 60 - 87; ≥70y, 34%) were enrolled (Table 1). Several patients had
high-risk features: 25 (39%) harbored TP53 mutations, 9 (18%) had a Ph-like signature, and 19 (23%) had high-risk
cytogenetics (12 low hypodiploidy/near triploidy, 3 tetraploidy, 3 complex and 1 t(4;11)). 77 patients were not in CR
at enrollment and evaluable for response. 76 (99%) responded, with 69 (90%) attaining CR. Among responders, 60
(79%) and 71 (94%) patients had no detectable minimal residual disease (MRD) by flow cytometry after C1 and overall,
respectively. No early deaths were observed. After a median follow-up of 88 months (IQR, 41-120), the median overall
survival (OS) was 56 months (95%CI, 28-85), and the median progression-free survival (PFS) was 47 months (95% CI,
21-72). The 5-year continuous remission duration (CRD) and OS rates were 78% and 49%, respectively. The 5-year OS
for patients aged 60-69 without adverse cytogenetics (n=40), age 60-69 with adverse cytogenetics (n=15), age ≥70
without adverse cytogenetics (n=24) and age ≥70 with adverse cytogenetics (n=4) were 73%, 27%, 39% and 0%,
respectively. Five (6%) patients underwent allogeneic stem cell transplantation (ASCT) in first CR, 12 (15%) relapsed,
33 (40%) remain in ongoing continuous remission without ASCT, and 33 (40%) died in remission. Of the 12 relapsing
patients, 5 had extramedullary disease, all with CNS involvement. 12 (14%) patients died due to progressive disease
at a median of 23 (range 2 - 78) months; these patients had a median age of 64 (range 60 - 79) years. Of the 33 who
died in remission, nine were due to secondary myelodysplastic syndrome (MDS) or acute myeloid leukemia (AML). The
median age of these patients was 71 years (range, 64 - 87), with a median time to MDS/AML of 34 months (range, 7
- 75). Fourteen deaths in CR were due to treatment-related complications (9 sepsis, 3 veno-occlusive disease (VOD), 2
ASCT). Six (7%) patients developed veno-occlusive disease, 4/49 (8%) in the pre-amendment group and 2/34 (6%) in
the post-amendment group. Conclusion Older patients with ND Ph-negative ALL treated with mHCVD plus InO, with or
without blina had excellent response rates and deep remissions. However, further adjustment of the regimen is needed,
especially in patients ≥70 years.`
    },
    {
      id: 5,
      title: `. Wieduwilt MJ, Yin J, Kour O, et al. Chemotherapy-free treatment with inotuzumab
ozogamicin and blinatumomab for older adults with newly diagnosed, ph-negative,
CD22-positive, B-cell acute lymphoblastic leukemia: Alliance A041703. Journal of Clinical
Oncology. 2023;41(16):7006`,
      resume: `Background: Older adult patients (pts) with Philadelphia-chromosome-negative (Ph-) acute lymphoblastic leukemia
(ALL) have poor survival with chemotherapy. The a-CD22 Ab-drug conjugate inotuzumab ozogamicin (InO) and
a-CD19/CD3 T-cell engager blinatumomab (blina) were each superior to chemotherapy in Phase III studies in relapsed/
refractory B-ALL. Because InO induces high CR rates and blina can induce durable remissions in low burden disease,
we conducted a Phase II trial of induction InO then blina for older adults with newly-diagnosed (ND), Ph-, B-ALL. Methods:
Eligible were pts ≥60 years old with ND, Ph-, CD22+ (≥20% of blasts) B-ALL without plan for allogeneic HCT
(alloHCT). Pts with CNS leukemia or liver disease were excluded. Induction IA was InO 0.8 mg/m2 day (d) 1, 0.5 mg/
m2 d8, d15 IV on a 21d cycle. Pts with adequate cytoreduction (marrow blasts by ≥50% or cellularity ≤20%) after IA
went to IB if in CR/CRi (InO 0.5 mg/m2 d1, d8, d15 IV; 28d cycle) or IC if no CR/CRi (InO 0.8 mg/m2 d1, d8, d15 IV;
28d cycle). Those without cytoreduction to IA started course II blina. Pts without events in IA/B/C received course II
blina CIV (9 mcg/d x 7d then 28 mcg/d x 21d; 14d break; 28 mcg/d x28d). Pts with CR/CRi to InO received 2 more 28d
cycles of blina, others received 3 more. CNS prophylaxis was methotrexate 15 mg intrathecal x 8. The primary endpoint
was 1-yr event-free survival (EFS) with a lower limit of a 90% CI for 1-yr EFS.10% defined as success. EFS was the
time from therapy start to failure to achieve CR/CRh/CRi by end Course II, progression, relapse, or death, whichever
occurred first. Results: Thirty-three eligible pts were treated (1 ineligible, 2nd malignancy). The median age was 71
years (range 60-84). Median WBC count was 3,200/mcl (range 6-38,000). Median CD22 expression was 92% (range
21-100%). Eight pts had therapy-related ALL. The cumulative CR rates through Course IA/B/C and Course II were 85%
and 97%, respectively (Table). With median follow up of 22 mo, the 1-yr EFS was 75% (95% CI 61-92%). The 2-sided
90% CI was 63-89% for 1-yr EFS with lower bound above 10% indicating regimen success. Twelve pts had events: 9
relapses, 2 deaths in remission (1 after alloHCT), and 1 death without remission from respiratory failure with sinusoidal
occlusion syndrome of liver. The 1-yr OS was 84% (95% CI 72-98%). Nine pts have died, 6 after relapse. Conclusions:
InO induction then blina consolidation is highly active for ND, Ph-, CD22+ B-ALL. The regimen is an option for older
adults and a comparator regimen for future studies. Support: U10CA180821, U10CA180882, U10CA180820 https://
acknowledgments. alliancefound.org.`
    },
    {
      id: 6,
      title: `. Jabbour E, Short NJ, Senapati J, et al. Mini-hyper-CVD plus inotuzumab ozogamicin,
with or without blinatumomab, in the subgroup of older patients with newly diagnosed
philadelphia chromosome-negative B-cell acute lymphocytic leukaemia: Long-term results
of an open-label phase 2 trial. The Lancet Haematology. 2023;10(6):e433-e444.`,
      resume: `Background: The outcome of older patients with B-cell acute lymphocytic leukaemia is inferior to that in
younger patients due to the adverse disease biology and their inability to tolerate intensive therapy. We aimed to study
the long-term outcomes of inotuzumab ozogamicin with or without blinatumomab in combination with low-intensity
chemotherapy in these patients. Methods: For this open-label phase 2 trial, patients aged 60 years or older with newly
diagnosed, Philadelphia-chromosome negative, B-cell acute lymphocytic leukaemia, and an ECOG performance status
of 3 or lower were eligible. This study was conducted at the University of Texas MD Anderson Cancer Center. The induction
chemotherapy consisted of mini-hyper-CVD and has been published before; inotuzumab ozogamicin was administered
intravenously on day 3 of the first four cycles at a dose of 1·3–1·8 mg/m2 in cycle 1, followed by 1·0–1·3 mg/
m2 in subsequent cycles (cycles 2–4). Maintenance therapy with dose-reduced POMP (6-mercaptopurine, vincristine,
methotrexate, and prednisone) was given for 3 years. From patient 50 onwards, the study protocol was amended to
fractionate inotuzumab ozogamicin to a maximum cumulative dose of 2·7 mg/m2 (0·9 mg/m2 during cycle 1 fractionated
into 0·6 mg/m2 on day 2 and 0·3 mg/m2 on day 8 of cycle 1, and 0·6 mg/m2 in cycles 2–4 fractionated into 0·3
mg/m2 on day 2 and 0·3 mg/m2 on day 8) followed by blinatumomab for four cycles (cycles 5–8). POMP maintenance
was shortened to 12 cycles with one cycle of blinatumomab administered by continuous infusion after every three cycles
of POMP. The primary endpoint was progression-free survival and was analysed on an intention-to-treat basis. This
trial is registered with ClinicalTrials.gov (NCT01371630) and the present data is from the newly diagnosed, older subgroup
of patients treated on the phase 2 portion of this trial; the trial is still enrolling patients. Results: Between Nov 11,
2011, and March 31, 2022, 80 patients were enrolled and treated (32 female and 48 male patients; median age 68
years [IQR 63–72]), 31 of whom were treated after the protocol amendment. With a median follow-up of 92·8 months
(IQR 8·8–67·4), the 2-year progression-free survival was 58·2% (95% CI 46·7–68·2) and 5-year progression-free
survival was 44·0% (31·2–54·3). At a median follow-up of 104·4 months (IQR 6·6–89·2) for the patients treated
before the protocol amendment and 29·7 months (8·8–41·0) for those treated after the protocol amendment, median
progression-free survival did not differ significantly between the two groups (34·7 months [95% CI 15·0–68·3] vs 56·4
months [11·3–69·7]; p=0·77). The most common grade 3–4 events were thrombocytopenia in 62 (78%) patients
and febrile neutropenia in 26 (32%) patients. Six (8%) patients developed hepatic sinusoidal obstruction syndrome.
There were eight (10%) deaths due to infectious complications, nine (11%) from complications related to secondary
myeloid malignancy, and four (5%) from sinusoidal obstruction syndrome. Interpretation: Inotuzumab ozogamicin with
or without blinatumomab added to low-intensity chemotherapy showed promising activity in terms of progression-free
survival in older patients with B-cell acute lymphocytic leukaemia. Further attenuation of the chemotherapy regimen
might improve tolerability while maintaining efficacy in older patients. Funding: Pfizer and Amgen.`
    },
    {
      id: 7,
      title: `. Goekbuget N, Viardot A, Steffen B, et al. Outcome of 841 older patients (> 55 yrs) with
newly diagnosed Ph/BCR-ABL negative ALL prospectively treated according to pediatric-
based, age-adapted GMALL protocols. 64th Annual Meeting and Exposition of the
American-Society-of-Hematology (ASH). 2022;140.`,
      resume: `Outcome in younger patients (pts) with ALL has been improved considerably using intensive pediatric-based
therapy, but limited data on this approach have been reported for older pts and even the age cut-off is heavily debated.
The German Multicenter Center Study Group for Adult ALL (GMALL) has conducted a clinical trial (>55 years)
(NCT00198978) which was followed by a registry trial based on standard management recommendations with prospective
documentation in the GMALL registry (NCT02872987). Strategies were modified over the years (yrs). The
backbone included: Pre-phase (Dexa, Cyclo), induction I (Dexa, VCR, Idarubicine), induction II (Cyclo, AraC), +/- post-induction
PEG-ASP, consolidation (C) cycles with IDMTX (+/- E.coli ASP), HDAraC (earlier: VM26), reinduction (VCR,
Idarubicine, Cyclo, AraC), +/- Rituximab in CD20+, i.th. prophylaxis and maintenance (6-MP/MTX) (group 1). The latest
protocol (from 2017) additionally included IDMTX/PEG-ASP in consolidation and recommended MRD-based treatment
modification (Blinatumomab in B-Lin and Nelarabin in T-Lin) in molecular failure (MolFail) after C2 (group 2).882 patients
(pts) from 142 sites were included 2003-2021 (table 1). 5% were withdrawn early and therefore not evaluable.
The median age was 68 (56-86) yrs. 61% were older than 65 yrs. B-Lin-ALL was present in 68%; 7% of B-Lin-ALL
(N=45) had a KMT2A-rearrangement. 19% and 9% had immature subtypes, pro-B and early T-ALL resp.. 50% had at
least one comorbidity according to the Charlson-Score (ChS); 11% had a score >= 3; 28% had an BMI=30 mg/m(2).
Group 2 vs group 1 had a significantly lower median age (66 vs 68 yrs; p=.001) and a higher proportion of T-ALL (21%
vs 14%; p=.0003).In 841 pts the CR rate after induction was 73% with 14% early death (ED) and 13% failure. The ED
rate was lower in group 2 vs group 1 (9% vs 15%; p=.04). CR rates were 76%, 73% and 63% in three age groups
(56-65, 66-75, =76 yrs) with ED rates of 9%, 14% and 26% resp. (p<.0001). CR rates were significantly lower in pts
with WBC =30.000/ml (table 1). BMI (=30 kg/m2) was not associated to CR/ED but ED rates were correlated to ChS
with a high ED rate (26%) in those with ChS =3 (table 1). MRD response data were available in 163, 239 and 173 pts
after induction II, C1 and C2 resp. The molecular CR (MolCR)/ MolFail rates were 41%/52%, 57%/38% and 64%/30%
resp. The remaining pts had intermediate MRD (MolIMR). MolCR rates were similar in B-Lin only (43%/58%/64%).
With a median follow up of 2.7 yrs overall survival (OS) in 841 pts at 3, 5 and 10 yrs was 36%, 28% and 22% resp.
The 3y remission probability was 37%. Mortality in CR was 5% (3%, 6% and 7% by age) and 12% of the pts were
withdrawn from protocol. OS strongly correlated to age and was very poor in pts older than 75 yrs (7% at 3 yrs; table
1). Only 8% (N=51) of all CR pts received an allogeneic stem cell transplantation (SCT) in CR1 (N=20 >= 65 yrs) but
the SCT-rate increased in group 2 vs group 1 (9% vs 5%). 3y-OS after SCT in this selected group (N=51) was 56%.OS
was significantly superior in group 2 vs group 1 (50% vs 32%; p<0.001) (figure 1). This improvement occurred mainly
in the younger age group (56-65 yrs): 62% vs 38% 3y OS in group 2 vs group 1 resp. (p<0.0001) with no significant
improvement in pts older than 65 yrs. WBC and ChS >= 3 were associated with poorer OS (table 1). MRD response had
a significant impact on OS at all timepoints. Pts with MolCR after C1 had a 3 yr OS of 80% vs 52% for MolFail and 62%
for MolIMR (p=.0004). Interestingly the 3y-OS of 52 MolFail pts tended to be superior in group 2 (74% vs 46%;p>.05).
The CR rate and OS of MLL-rearranged cases was 62% and 19% resp.With this age-adapted, pediatric-based regimen
a reasonable CR rate was achieved up to 75 yrs. Pt numbers were small and OS very poor in pts >75 yrs. MolCR
rates were overall lower compared to more intensive protocols in younger pts. Thus, treatment modification based on
MolFail is a promising approach and might produce benefits in many older pts. The optimal time-point for treatment
change remains to be defined. Together with more intensive consolidation including PEG-ASP this modification likely
contributed to the improved outcome with 62% OS in the youngest cohort (56-65 yrs) in group 2. In all older pts, but
specifically in those >65-75 yrs or with multiple comorbidities, alternative protocols with targeted therapies and further
step-wise reduction of chemotherapy require prospective exploration in clinical trials with the major goal to reduce ED
rate and to improve MRD response.[GRAPHICS].`
    },
    {
      id: 8,
      title: `. Jabbour E, Aldoss I, Fleming S, et al. Blinatumomab alternating with low-intensity
chemotherapy (CT) treatment for older adults with newly diagnosed philadelphia
(ph)-negative B-cell precursor acute lymphoblastic leukemia (BCP-ALL) is well tolerated
and efficacious: Safety run-in results for the phase 3 randomized controlled golden
gate study. 64th Annual Meeting and Exposition of the American-Society-of-Hematology
(ASH). 2022;140:6134-6136.`,
      resume: `Introduction: Outcomes have improved for younger adults with BCP-ALL through better understanding of the
biological mechanisms of BCP-ALL and development of intensive CT regimens (overall survival [OS], >= 60%). However,
outcomes in patients (pts) >55 y remain poor (5 y OS, <10-40%) as toxicities limit use of intensive CT regimens. Novel
treatment strategies incorporating immunotherapy to reduce CT-related morbidity and mortality may improve outcomes
in this older pt population. Blinatumomab, a CD3/CD19-directed bispecific T-cell engager (BiTE (R)) molecule, directs T
cells to lyse CD19+ B-lineage cells and has demonstrated efficacy in pediatric and adult pts with relapsed or refractory
CD19+ BCP-ALL or minimal residual disease (MRD) >= 0.1%. We report results from the single-arm safety run-in
for the randomized controlled phase 3 Golden Gate Study in older adults with newly diagnosed Ph-negative BCP-ALL
(NCT04994717). The safety run-in evaluated blinatumomab alternating with low-intensity CT and a shorter blinatumomab
dose step (4 days) than presently included in the blinatumomab label. Methods: Pts aged >= 55 y (or 40 to <55
y with severe, pre-defined comorbidities) with newly diagnosed Ph-negative BCP-ALL, Eastern Cooperative Oncology
Group performance status <= 2 and adequate organ function were included. Clearance of central nervous system
(CNS) leukemia with intrathecal (IT) CT was required before enrollment. Pts in the safety run-in (Figure) were to receive
7 cycles (C) of blinatumomab (2 in induction, 2 in consolidation and 3 in maintenance) alternating with CT, including
IT CT. Rituximab (8 doses) was given if CD20 expression was >= 20%. Permitted pre-phase CT consisted of cyclophosphamide,
vincristine, dexamethasone and/or hydroxyurea; IT CT was requested per local standard of care. Primary
objective of the safety run-in was to evaluate the safety and tolerability of blinatumomab alternating with low-intensity
CT. Secondary objectives were to evaluate efficacy endpoints (complete remission [CR] within 14 weeks of starting
induction C1; MRD response, defined as <10(-4) by quantitative PCR [central lab] within 14 weeks of starting induction
C1; relapse-free survival) and pharmacokinetics (PK) of blinatumomab. Results: Ten pts enrolled in the safety run-in
between November 2021 and 28 June 2022. Median age was 69 y (range, 57-77); 4 (40%) pts were >= 70 y (Table).
Nine (90%) pts had bone marrow blasts >= 50% at diagnosis; 4 (40%) pts were CD20+ and received rituximab. All
10 pts completed induction C1. Seven pts remain on treatment (induction C2, n=5 [ongoing, n=2; completed, n=3];
consolidation C1 completed, n=1; consolidation C2 ongoing, n=1) and 3 pts discontinued treatment (2 for planned
allogeneic stem cell transplant in post C2 induction CR and 1 due to isolated extramedullary relapse during induction
C2). From the data cut off (28 June 2022), the most common all-grade treatment emergent adverse events (TEAEs)
were cytokine release syndrome (CRS; n=5), decreased neutrophils (n=5) and decreased white blood cell count (WBC;
n=5). All pts had grade >= 3 TEAEs; grade >= 3 TEAEs in >= 20% of pts were neutropenia (n=6), decreased WBC
(n=5), anemia (n=3), thrombocytopenia (n=3) and bacteremia (n=2). All grade 4 TEAEs were hematologic. No deaths
occurred. One pt had a serious adverse event (AE; grade >= 3, bilirubin increased). Grade >= 3 CNS TEAEs occurred
in 1 pt (vasovagal and peripheral neuropathy unrelated to blinatumomab); no grade >= 3 CNS or CRS AEs related to
blinatumomab occurred. Four pts had COVID-19 (grade 2, n=3; grade 3, n=1); blinatumomab was interrupted in 4/4
pts until COVID-19 negative and treatment then resumed without unusual AEs. After induction C1, all 10 pts achieved
CR and 9/10 pts achieved a MRD response <10(-4) per central lab. After induction C2, 5 pts had MRD results available;
all 5 pts had a MRD response <10(-4). Blinatumomab PK results will be presented. Conclusions: Blinatumomab alternating
with low-intensity CT had an acceptable safety profile and was well tolerated. No deaths occurred. The regimen
was efficacious in this older adult population as all 10 pts achieved CR and 90% had a MRD response <10(-4) after
induction C1. These data support the planned regimen for the randomized controlled phase 3 study of blinatumomab
alternating with low-intensity CT versus standard of care CT.[GRAPHICS].`
    },
    {
      id: 9,
      title: `. Haddad F, Kantarjian H, Short N, et al. MINI-HYPER-CVD PLUS INOTUZUMAB OZOGAMICIN,
WITH OR WITHOUT BLINATUMOMAB, IN OLDER ADULTS WITH NEWLY DIAGNOSED B-CELL
ACUTE LYMPHOBLASTIC LEUKEMIA: UPDATES FROM A PHASE II TRIAL. HemaSphere.
2022;6:508-509.`,
      resume: `Background: Blinatumomab (Blina) and inotuzumab ozogamicin (INO) improve the outcomes of patients (pts)
with relapsed/refractory B-cell acute lymphoblastic leukemia (B-ALL). These drugs may allow for use of less chemotherapy
and improve remission durations and overall survival (OS) in older pts with newly diagnosed B-ALL. Aims: To
evaluate the combination of low-intensity chemotherapy and INO with or without Blina, in older pts with newly diagnosed
B-ALL. Methods: Pts ≥60 years with newly diagnosed Philadelphia chromosome (Ph)-negative B-ALL were eligible
to receive minihyper- CVD for up to 8 cycles. Initially, INO was given at 1.3-1.8mg/m2 on day (D) 3 of cycle 1 and
0.8-1.3mg/m2 on D3 of cycles 2-4. Rituximab (if CD20+) and prophylactic IT chemotherapy were given for the first 4
cycles. POMP maintenance was given for up to 3 years. Starting with pt #50, the protocol was amended and INO was
administered in fractionated doses with each of the 4 cycles of hyper-CVD (0.6 mg/m2 on D2 and 0.3 mg/m2 on D8 of
cycle 1; 0.3 mg/m2 on D2 and 8 of cycles 2-4) followed by 4 cycles of blina. The cumulative doses of INO given before
and after this amendment were 4.3 mg/m2 and 2.7 mg/m2, respectively. Maintenance was also amended to include
12 cycles of POMP and 4 cycles of blina (1 cycle of blina after every 3 cycles of POMP). Results: 80 pts have been
treated with a median age of 68 years (range, 60-87); 30 pts (38%) were ≥70 years. 6 pts were in complete remission
(CR) at enrollment and unevaluable for morphological response. Pt characteristics are summarized below (Figure 1A).
The overall response rate (ORR) among 74 evaluable pts was 99% (CR, n=66; CRi, n=7). MRD negativity by flow cytometry
was achieved in 61/76 pts (80%) after 1 cycle and 74/79 pts (94%) overall. The 30-day and 60-day mortality
rates were 0% and 3%, respectively. Among 79 pts who achieved remission, 33 (42%) are still in ongoing remission
without stem cell transplant (SCT), 31 (39%) died in remission, 11 (14%) relapsed without SCT, and 4 (5%) proceeded
to SCT in first remission (1 of whom subsequently relapsed). Notably, 9 pts (11%) later developed MDS/AML, 7 of whom
had a TP53 mutation. Overall, 6 pts (8%) developed VOD, 1 after allogeneic SCT. With a median follow-up of 55 months
(range, 3-119), the 5-year continuous remission and OS rates were 76% and 47%, respectively (Figure 1B). Pts aged
60-69 years had better outcomes compared with pts ≥70 years (5-year OS rates: 59% vs 27%, respectively; P=0.04)
and as did those without poor cytogenetics (i.e. complex, KMT2Arearranged, low-hypodiploidy/near-triploidy) compared
with poor cytogenetics (5-year OS rates: 54% and 25%, respectively; P=0.02). Deaths in remission were more
frequent in pts ≥70 years compared with those 60-69 years (70% vs 35%; P=0.005). The 5-year OS rates for pts age
60-69 without poor-risk cytogenetics (n=37), age 60-69 with poor-risk cytogenetics (n=13), age ≥70 without poor-risk
cytogenetics (n=24), and age ≥70 with poor-risk cytogenetics (n=6) were 69%, 39%, 36% and 0% respectively (Figure
1C). Presence of a TP53 mutation did not significantly impact OS (P=0.22). Summary/Conclusion: Reduced-intensity
chemotherapy plus INO, with or without blina, resulted in an ORR of 99% and a 5-year OS rate of 47% in older pts
with newly diagnosed Ph-negative B-ALL. Outcomes were particularly favorable in those 60-69 years of age without
poor-risk cytogenetics. Pts ≥70 years were at a higher risk of death in remission. A chemotherapy-free approach, with
INO plus blina only, is therefore now being explored in this population.`
    },
    {
      id: 10,
      title: `. Macaron W, Kantarjian HM, Short NJ, et al. Updated results from a phase II study
of mini-hyper-CVD (mini-HCVD) plus inotuzumab ozogamicin (INO), with or without blinatumomab
(blina), in older adults with newly diagnosed philadelphia chromosome
(ph)-negative B-cell acute lymphoblastic leukemia (ALL). Journal of Clinical Oncology.
2022;40(16).`,
      resume: `Background: INO and Blina improve overall survival (OS) in patients (pts) with relapsed/refractory BALL. The
use of these agents in older adults in the frontline setting may allow for use of less chemotherapy and improve remission
duration and OS compared to standard therapies. Methods: Pts ≥60 years with newly diagnosed Ph-negative
B-cell ALL received mini-HCVD for up to 8 cycles. Initially, INO was given at 1.3-1.8mg/m2 on day 3 of cycle 1 and
0.8-1.3mg/m2 on day 3 of cycles 2-4. Rituximab (if CD20+) and prophylactic IT chemotherapy were given for the
first 4 cycles. Responding pts received POMP maintenance for up to 3 years. Beginning with pt #50, INO was given in
fractionated doses each cycle (0.6 mg/m2 on day 2 and 0.3 mg/m2 on day 8 of cycle 1; 0.3 mg/m2 on day 2 and 8
of cycles 2-4) and 4 cycles of Blina were given following 4 cycles of mini-HCVD plus INO. Maintenance was with 12
cycles of POMP and 4 cycles of Blina (1 cycle of Blina after 3 cycles of POMP). Results: Characteristics of the 80 pts
are shown in Table. 6 pts were in complete remission (CR) at enrollment. Among 74 evaluable pts, 73 (99%) responded
(CR in 89%). MRD negativity by flow was achieved in 80% of pts after 1 cycle and in 94% overall. The 30-day mortality
rate was 0%. Among 79 responders, 11 (14%) relapsed, 4 (5%) underwent SCT, 33 (42%) remain in ongoing
continuous remission, and 31 (39%) died in remission. Notably, 6 pts (8%) developed veno-occlusive disease, 1 after
subsequent SCT. With a median follow-up of 55 months, the 5-year continuous remission and OS rates were 76% and
47%, respectively. Age ≥70 and poor-risk cytogenetics were associated with worse outcomes. The inferior outcomes in
pts ≥70 years was primarily due to higher rates of death in CR. The 5-year OS for pts age 60-69 years without poor-risk
cytogenetics (n=37), age 60-69 with poor-risk cytogenetics (n=13), age ≥70 without poor-risk cytogenetics (n=24)
and age ≥70 with poor-risk cytogenetics (n=6) were 69%, 39%, 36% and 0%, respectively. Conclusions: The combination
of mini-HCVD plus INO, with or without Blina, in older adults with newly diagnosed Ph-negative ALL resulted in
an overall response rate of 99% and a 5-year OS rate of 47%. Particularly favorable outcomes were seen in pts age
60-69 years without poor-risk cytogenetics (5-year OS: 69%). Chemotherapy-free regimens may improve outcomes in
pts age ≥70 years, and novel agents/regimens are still needed for those with poor-risk cytogenetics.`
    },
    {
      id: 11,
      title: `. Advani AS, Moseley A, O’Dwyer K,M., et al. SWOG 1318: A phase II trial of blinatumomab
followed by POMP maintenance in older patients with newly diagnosed philadelphia
chromosome-negative B-cell acute lymphoblastic leukemia. Journal of clinical oncology
: official journal of the American Society of Clinical Oncology. 2022;40(14):1574-1582.`,
      resume: `PURPOSE: Chemotherapy outcomes in older patients with Philadelphia (Ph) chromosome-negative B-acute
lymphoblastic leukemia (ALL) are very poor. Here, we evaluated blinatumomab as induction and consolidation therapy
followed by prednisone, vincristine, 6-mercaptopurine, and methotrexate (POMP) maintenance chemotherapy in this
patient population. PATIENTS AND METHODS: Patients were treated at National Clinical Trial Network sites. Eligibility
criteria included age ≥ 65 years and newly diagnosed Ph chromosome-negative B-ALL. Patients received blinatumomab
as induction for one-two cycles until attainment of response (complete remission (CR) and CR with incomplete
count recovery). Patients then received three cycles of consolidation with blinatumomab followed by 18 months of
POMP maintenance chemotherapy. Eight doses of intrathecal methotrexate were administered as central nervous
system prophylaxis. RESULTS: Twenty-nine eligible patients were enrolled. The median age was 75 years, and the
median bone marrow blast count at diagnosis was 87%. Cytogenetic risk was poor in 10 patients (34%), and five of
14 patients (36%) tested had the Ph-like ALL gene signature. Nineteen patients (66%; 95% CI, 46 to 82) achieved
CR. Kaplan-Meier 3-year disease-free survival and overall survival estimates were 37% (95% CI, 17 to 57) and 37%
(95% CI, 20 to 55), respectively. CONCLUSION: Blinatumomab was well tolerated and effective in the treatment of
older patients with newly diagnosed Ph chromosome-negative B-ALL, including patients with poor-risk cytogenetics.
The 3-year disease-free survival and overall survival results are encouraging and suggest that this approach should
be further explored.`
    },
    {
      id: 12,
      title: `. Short NJ, Kantarjian HM, Ravandi F, et al. Reduced-intensity chemotherapy with 
      mini-hyper-CVD plus inotuzumab ozogamicin, with or without blinatumomab, in older adults with 
      newly diagnosed philadelphia chromosome-negative acute lymphoblastic leukemia: Results from a 
      phase II study. 62nd Annual Meeting of the American-Society-of-Hematology (ASH). 2020;136.`,
      resume: `
      Background: Inotuzumab ozogamicin (INO) and blinatumomab both improve overall survival (OS) in 
      relapsed or refractory B-cell acute lymphoblastic leukemia (ALL). Use of these effective 
      monoclonal antibodies in the frontline setting may lead to deep and durable remissions in older 
      adults with newly diagnosed Philadelphia chromosome (Ph)-negative B-cell ALL. Methods: Patients 
      (pts) >= 60 years of age with newly diagnosed Ph-negative pre-B-cell ALL, including pts who had 
      received no more than 1 prior cycle of chemotherapy, were eligible. Pts were required to have a 
      performance status of <= 3, total bilirubin <= 1.5 mg/dl, AST/ALT <= 3x ULN and creatinine <= 2 
      mg/dl. Pts received mini-hyper-CVD (cyclophosphamide and dexamethasone at 50% dose reduction, 
      no anthracycline, methotrexate at 75% dose reduction, cytarabine at 0.5 g/m(2) x 4 doses) for 
      up to 8 cycles. INO was initially given at a dose of 1.3-1.8mg/m(2) on day 3 of cycle 1 and 
      0.8-1.3mg/m(2) on day 3 of cycles 2-4. Rituximab (if CD20+) and prophylactic IT chemotherapy 
      were given for the first 4 cycles. Responding pts received POMP maintenance for up to 3 years. 
      In order to decrease the risk of veno-occlusive disease (VOD), the protocol was amended in 3/2017 
      (pts 50+) to give INO in fractionated doses each cycle (0.6 mg/m(2) on day 2 and 0.3 mg/m(2) 
      on day 8 of cycle 1; 0.3 mg/m(2) on day 2 and 8 of cycles 2-4) and to administer 4 cycles of 
      blinatumomab following 4 cycles of hyper-CVD plus INO, followed by maintenance with 12 cycles 
      of POMP and 4 cycles of blinatumomab (1 cycle of blinatumomab after every 3 cycles of POMP). 
      The cumulative dose of INO given before and after this most recent amendment was 4.3 mg/m2 and 
      2.7 mg/m(2), respectively. Results: 73 pts have been treated, 70 of whom are evaluable for 
      efficacy (3 pts too early for response assessment). 6 pts were in complete remission (CR) at 
      enrollment and unevaluable for morphological response. Pt characteristics of the 70 evaluable 
      pts are summarized in Table 1. Median age was 68 years (range, 60-81 years); 29 pts (41%) 
      were >= 70 years. 41% were positive for TP53 mutation, 18% were CRLF2 positive by flow 
      cytometry, and 27% had adverse-risk karyotype. 38/64 pts (59%) were CD20+ and received 
      rituximab.Among 64 pts evaluable for morphologic response, 63 (98%) responded (CR, n=56; 
      CRp, n=6; CRi, n=1). MRD negativity by flow cytometry was achieved in 53/66 pts (80%) 
      after 1 cycle and 65/68 pts (96%) overall. There were no early deaths, and the 30-day and 
      60-day mortality rates were 0% and 3%, respectively. Among 69 pts who achieved remission, 9 
      (13%) relapsed, 3 (4%) underwent allogeneic SCT in first remission (1 of whom subsequently 
      relapsed), 35 (51%) remain on treatment or have completed therapy, and 21 (32%) died in CR/CRp. 
      Notably, 6 pts (9%) developed VOD, 1 after subsequent allogeneic SCT. The rate of VOD was 6/70 
      (9%) with no difference in rate of VOD in pts who did or did not receive fractionated INO and 
      blinatumomab. With a median follow-up of 45 months (range, 2-98 months), the 4-year continuous 
      remission and OS rates were 78% and 50%, respectively ( Figure 1A). Age and cytogenetic risk 
      were the primary factors associated with OS. The 4-year OS rate was 61% in pts 60-69 years vs. 
      34% in pts >= 70 years (P=0.06), driven by higher rates of death in remission in the older pts 
      (13/29 [45%] vs. 8/41 [20%] in pts 60-69 years of age; P=0.03). These remission deaths in pts 
      >= 70 years were primarily due to infection (n=7) or development of MDS/AML (n=3). Pts with 
      high-risk cytogenetic features (e.g. KMT2A rearranged, low hypodiploidy/near triploidy, complex 
      cytogenetics) had a 4-year OS rate of 22% vs. 57% for patients without high-risk cytogenetic 
      features ( Figure 1B; P=0.009). Neither CRLF2 positivity by flow cytometry nor the presence of 
      a TP53 mutation significantly impacted OS. Conclusion: Reduced-intensity chemotherapy with 
      hyper-CVD plus INO, with or without blinatumomab, is safe and effective in older adults with 
      newly diagnosed Ph-negative ALL, with an overall response rate of 98% and 4- year OS rate of 
      50%. This novel regimen leads to durable remissions and apparent cure in the majority of pts 
      age 60-69 years of age and in those without poor-risk cytogenetic features. To decrease 
      treatment-related mortality, the protocol has been amended to eliminate chemotherapy for 
      pts >= 70 years of age.
      `
    },
    {
      id: 13,
      title: `. Niyongere S, Sanchez-Petitto G, Masur J, Baer MR, Duong VH, Emadi A. Frontline blinatumomab
in older adults with philadelphia chromosome-negative B-cell acute lymphoblastic
leukemia. Pharmaceuticals (Basel, Switzerland). 2020;13(6).`,
      resume: `Outcomes of acute lymphoblastic leukemia (ALL) in older adults treated with chemotherapy are poor. The
CD19/CD3 bispecific T-cell engager (BiTE) antibody blinatumomab is approved for refractory, relapsed or minimal/
measurable residual disease (MRD)-positive B-cell ALL, but there is little experience in the upfront setting, including in
older patients. We retrospectively analyzed outcomes of blinatumomab monotherapy in five newly diagnosed Philadelphia
chromosome-negative B-cell ALL patients over 70 years. Three had cytokine release syndrome, treated with dexamethasone
and/or tocilizumab, and four patients had neurotoxicity, treated with dexamethasone, without blinatumomab
interruption. All five achieved complete remission (CR) after cycle one, three with undetectable MRD. All five were alive
at 8 to 15 months. Three remained in MRD-negative CR. Two relapsed after cycle 3, one with extramedullary disease.
In our small cohort of patients over 70 years, blinatumomab was safe initial therapy and produced a high response rate.`
    },
    {
      id: 14,
      title: `. Kathari YK, An M, Dougherty C, Emadi A. Long-term follow up of blinatumomab in
older patients with B-cell acute lymphoblastic leukemia. Pharmaceuticals (Basel, Switzerland).
2024;17(3).`,
      resume: `Older adults who are diagnosed with acute lymphoblastic leukemia (ALL) and are treated with chemotherapy
generally have poor outcomes. Blinatumomab is a CD19/CD3 bispecific T-cell engager that has been approved for the
treatment of B-cell ALL in the relapsed/refractory setting or in patients with minimal residual disease (MRD) positivity.
We previously reported on a small cohort of older adults with newly diagnosed Philadelphia chromosome negative
B-cell ALL who were treated with blinatumomab monotherapy in the first line setting. This is a long-term follow up of
those patients and their clinical courses. All five patients achieved complete remission (CR) after one cycle of blinatumomab,
and three were MRD-negative. Two patients completed three cycles of blinatumomab, two patients completed
four cycles of blinatumomab, and one patient completed 17 cycles of blinatumomab total. In the last four years, four of
these patients had relapsed disease requiring additional therapy. Two patients are alive after 61 months and 57 months
since their first cycle of blinatumomab. Two of the patients died at 10 months and one died at 20 months. Here we
describe the long-term clinical courses of these patients.`
    },
  ];

  // Array de referências para os textos
  const textRefs = useRef(array1to60);

  // Função que rola até o texto específico
  useEffect(() => {
    if (savedNumber >= 1 && savedNumber <= 14) {
      // Certifica que o número do texto é válido e rola até ele
      textRefs.current[savedNumber - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }, [savedNumber]);

  return (
    <div className="text-container">
      <header>
        <h1>Blina Frontline Idoso</h1>
      </header>

      {array1to60.map((item, index) => {
        return (
          <section
            key={index}
            ref={el => textRefs.current[index] = el}
            className="text-item"
          >
            <h2>{item.id}{item.title}</h2>
            <p className="summary">
              <strong>Abstract:</strong>{item.resume}
            </p>
          </section>
        )
      })}


      <footer className="footer">
        <p>
          Material destinado aos profissionais da saúde. Este material pode conter informações sobre terapias ou medicamentos ainda não
          aprovados no Brasil. A Amgen recomenda o uso de seus medicamentos de acordo com a aprovação regulatória local.
        </p>
        <p>SC-BRA-AMG103-00637. Aprovado em outubro de 2024.</p>
      </footer>
    </div>
  );
}