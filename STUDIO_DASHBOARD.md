# Chappy5 Studio Dashboard

Updated: 2026-08-26 04:22 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` frozen for focused human play

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | READY_FOR_HUMAN_CANDIDATE / RULE_WATCH | 3 | HIGH | OBSERVED + SIMULATED | State-conditioned route jobs remain healthy. New structural finding: depth pressure is cumulative/triangular because `nextDepth*1.4` is added to already accumulated Threat each turn, helping explain why endings cluster around depth 2–4. This is an explicit post-human tuning parameter, not a reason to move the frozen candidate. |
| Player Experience | READY_FOR_HUMAN_CANDIDATE | 4 | MEDIUM-HIGH | OBSERVED + SIMULATED | Main unknown remains whether ≈53% collapse feels self-authored/replayable. Ordinary-play rule trust still has the A/B/C signal mismatch. iPhone readability is additionally brittle in theory because decision text reaches 11px / labels 9px while pinch zoom is disabled; actual discomfort remains device-unverified. |
| Progression & Content | FAIL / BLOCKED_FOR_CORE_TEST | 4 | HIGH | OBSERVED + DESIGN ANALYSIS | Persistent bank/runs/discoveries still do not change future strategy. Six discoveries are a short completion timer with no pursuit agency. `banked` is a lifetime `累計回収` metric, so future spendable progression must not silently make the lifetime total decrease. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH | 3 | HIGH | OBSERVED + UNVERIFIED | Core regression protection exists. Active-dive record reset no longer leaves the UI stuck/stale and its regression is CI-confirmed. Real iPhone/Safari remains unverified; terminal settlement is still not crash-atomic. |

## Executive priority

**Keep `HUMAN_CANDIDATE_01` frozen and obtain focused HUMAN_VERIFIED evidence before changing global balance or adding progression.**

The latest specialist evidence does not overturn this priority. Systems has now identified the cumulative depth-pressure curve as a structural reason for short runs, but whether that shortness creates tense replayable sessions or premature endings is exactly what the human candidate should answer. Player Experience has identified a real accessibility/readability risk, but actual iPhone readability remains unverified and changing typography/zoom now would move the evaluation target.

This is not a declaration that ECHO DRIFT is fun. No HUMAN_VERIFIED fun evidence exists yet.

## Frozen candidate

- Candidate: `HUMAN_CANDIDATE_01`.
- Keep production gameplay rules unchanged until the first focused human test unless a concrete severe exploit/regression appears.
- Do not change global threat growth, route base gains, anomaly frequency/reward, calm recovery, resonance reward, extraction multiplier, route generation, signal-chain rules, or low-Energy payment before that test.
- Safe work while waiting: tests, CI verification, non-gameplay technical fixes, focused simulations, and progression design analysis that does not alter the candidate.
- Do not add radar polish before this test; emotional flatness is useful evidence.

## Human verification package

Record answers as `HUMAN_VERIFIED`, including negative results.

1. **Decision tension** — During several runs, did continue versus `回収して帰還 +N` make you genuinely hesitate more than once?
2. **Failure ownership** — After a collapse, did it feel like a risk you knowingly pushed too far, enough that you wanted another attempt, or did it feel like the game erased your time?
3. **Immediate replay desire** — After either a successful return or a collapse, did you want to start the next run immediately?

Device/usability observations are not extra fun questions. On the actual iPhone, note scrolling, cramped route text, whether 11px decision hints / 9px labels require squinting or repeated rereading, thumb reach, safe-area behavior, reload restoration, background/foreground recovery, and whether disabled pinch zoom is felt as a limitation. Also note low-Energy cost surprise, same-letter resonance expectations, reset-scope expectations if used, and obvious top/middle/bottom positional bias.

## Why the candidate remains frozen

Current Systems evidence on exact production rules remains approximately:

- aggregate route share 58.7% deep / 29.0% resonance / 12.3% calm;
- mean ending depth 2.85;
- collapse 53.2–53.3%, voluntary extraction 40.9%, forced extraction 5.8%;
- Threat 0–24: deep 59.7%; Threat 25–49: calm 51.1%;
- no active chain: resonance 23.7%; active chain: resonance 49.3%.

These results do not prove enjoyment, but they remove the strongest prior structural reason for more AI-only global tuning.

### Newly explicit depth-pressure parameter — OBSERVED + CALCULATED

`projectedThreat()` adds `nextDepth * 1.4` to already accumulated Threat on every step. Depth pressure therefore grows by a triangular sum rather than a one-time linear modifier. Repeated anomaly-free resonance from the starting state reaches about 7.4 / 10.2 / 14.4 / 20.0 / 27.0 / 35.4 / 45.2 / 56.4% Threat at depths 1–8; repeated deep reaches about 10.4 / 16.2 / 23.4 / 32.0 / 42.0 / 53.4 / 66.2 / 80.4%. If human feedback says runs end before strategy develops, compare this curve against a deliberately linear/capped alternative before adding deeper rewards or content. If short runs feel tense and replayable, preserve the curve intentionally.

### Existing bounded rule issues

- Low-Energy partial payment occurs in a small minority of simulated runs and has small aggregate economic impact; resolve the intended rule after human evaluation.
- A/B/C is visible on every route, but calm/deep ignore signal identity and preserve/erase an active chain through hidden 50% RNG. This remains the most important ordinary-play rule-coherence issue after the candidate.
- Route ordering uses `sort(() => Math.random()-.5)`, a non-uniform/engine-dependent shuffle idiom; fix narrowly after the candidate if positional behavior matters.

## Deliberately blocked until HUMAN_VERIFIED core evidence

- No global balance patch without a demonstrated exploit/regression.
- No meta shop, linear permanent stat upgrades, larger relic list, new route/system/currency, archive/lore volume, radar-feedback polish, or broad refactor.
- No low-Energy or resonance-signal rule change solely to make the model cleaner before the candidate.
- No progression economy field split until a post-pass decision prototype proves it is needed.

## Important unresolved issues

1. **Human feel:** ≈53% collapse may be satisfying push-your-luck or unacceptable loss. `SIMULATED`.
2. **Long-term play:** persistent values do not change future decisions. `OBSERVED FAIL`.
3. **Discovery:** six anomaly contacts complete the prototype collection and discovery identity cannot be deliberately pursued. `OBSERVED FAIL`.
4. **iPhone/Safari:** real-device lifecycle/layout/readability remains `UNVERIFIED`; small decision text plus disabled pinch zoom is a concrete accessibility watch.
5. **Signal causality:** A/B/C is mechanically meaningful only to resonance; calm/deep chain survival is hidden RNG. `OBSERVED`.
6. **Depth pressure:** cumulative triangular escalation materially compresses deep play; whether that is good session pacing is human-dependent. `OBSERVED + CALCULATED`.
7. **Low-Energy clarity:** displayed route cost can exceed Energy actually charged. `OBSERVED`, small aggregate effect.
8. **Persistence hardening:** terminal settlement is not crash-atomic; acceptable prototype risk, not production-safe for valuable long-term rewards.
9. **Route ordering:** non-uniform/engine-dependent shuffle can confound positional observations. `OBSERVED`, low severity.
10. **Reset scope:** confirmation still understates that reset abandons a live dive, although the post-reset stuck/stale UI bug is fixed and regression-confirmed. `OBSERVED`.
11. **Progression semantics:** `banked` currently means lifetime cumulative recovery; future spending must not silently overload that meaning. `OBSERVED + DESIGN ANALYSIS`.

## Resolved / improved since previous dashboard

- Active-dive record reset now returns cleanly to an idle playable UI; regression is CI-confirmed.
- Persisted restored-log strings render as inert text; crafted-save regression is CI-confirmed.

## Executive decision

No gameplay implementation is justified in this cycle. The newest Systems finding gives a precise lever to test **after** human evidence if run length feels too compressed; the newest PX finding adds an iPhone accessibility observation but does not justify moving the candidate before device play. The highest-value work remains preserving the evaluation target and obtaining human evidence.

After HUMAN_VERIFIED feedback arrives:

- if decision tension/failure ownership/replay desire fail, diagnose the core before progression;
- if runs feel prematurely short, test the depth-pressure curve before compensating with extra rewards/content;
- if the core passes, resolve visible signal causality and the low-Energy rule explicitly;
- then prototype one compact mutually exclusive persistent choice that changes future-dive decisions rather than simply making the player stronger;
- preserve lifetime `累計回収` separately from any spendable/committed quantity if progression actually needs spending;
- if choices are clear but emotionally flat, test small reactions on the existing radar;
- before valuable persistent rewards, add save migration and crash-idempotent settlement hardening;
- after the candidate, restore zoom / modestly enlarge decision text if iPhone observation confirms readability friction, fix route shuffle narrowly, and make reset scope explicit or disable reset during a live dive.

No `HUMAN_VERIFIED` fun claim exists yet.