# GS-015 — High-chain-only diminishing returns is structurally narrower than slope tuning

- **Director:** Game Systems Analysis Director
- **Status:** STRUCTURAL_CANDIDATE_NOT_CLEARED
- **Severity (1-5):** 4
- **Confidence:** HIGH for reproduced ranking / MEDIUM-HIGH for design interpretation
- **Verification Type:** OBSERVED + CALCULATED + SIMULATED
- **Last updated:** 2026-08-26

## Finding

High-chain-only diminishing returns remains a structurally narrower intervention than global resonance-slope tuning, but the previously reported `visible-signal +5 cap` mixed-strategy win does **not** survive the corrected per-Run RNG isolation introduced by TQ-018.

The corrected deterministic probe still preserves the first successful resonance continuation at `+5` and changes only mature-chain rewards. However, after each simulated Run receives an independent seed derived from `(base seed, run index)`, fixed resonance remains ahead in all three high-chain modes tested. The earlier EX-017 aggregate claim that the cap made future-aware play beat fixed resonance must therefore not be used as Systems clearance evidence.

## Evidence

### OBSERVED

GitHub Actions `ECHO DRIFT Regression` run `32927965054` completed successfully after TQ-018's per-Run RNG isolation. The regression suite, strategy parity guard, deterministic strategy benchmark, and high-chain structural probe all passed.

The corrected high-chain probe reports:

| Mode | fixed resonance | chain-aware | future-aware | contextual best - fixed resonance |
| --- | ---: | ---: | ---: | ---: |
| production high-chain + visible-signal exit | 12.095225 | 11.856475 | 11.812975 | -0.238750 |
| taper after first +5 | 11.905175 | 11.733650 | 11.693250 | -0.171525 |
| cap after first +5 | 11.732800 | 11.635775 | 11.594800 | -0.097025 |

Thus the cap still narrows the fixed-resonance lead substantially versus the production high-chain curve, but it does not reverse it under the corrected simulation. The fixed-resonance collapse rate under the cap is about 46.40%, while chain-aware is about 52.15% and future-aware about 52.21%; the contextual policies take more risk without recovering enough additional secured value to overtake the fixed route.

The separate production strategy benchmark remains consistent with the known structural pressure: fixed resonance `12.106575` exceeds future-aware `11.918575` under state-conditioned extraction.

### CALCULATED

The intervention remains narrowly targeted. With independent A/B/C signals, reaching `chainLen=2` requires one same-signal continuation (1/3 on the next resonance choice), `chainLen=3` requires two consecutive matches (1/9), and `chainLen=4` requires three (1/27), before extraction, collapse, Energy exhaustion, or route switching.

Therefore preserving `+5` at `chainLen=2` while limiting only `chainLen>=3` still protects the common first acceleration event better than a global slope reduction. What changed is the empirical conclusion: narrowing the intervention is not sufficient by itself to clear the strategy balance.

## Impact

The strongest current structural candidate no longer has evidence that contextual play is economically superior. This prevents an incorrect promotion to a Controlled Playable based on the old +0.70% aggregate result.

At the same time, the monotonic narrowing of the fixed-resonance lead from about `0.239` to `0.172` to `0.097 bank/Run` shows that mature-chain compounding is genuinely one contributor to resonance dominance. It is not the whole cause. Further tightening the cap cannot affect the first `+5`, so repeatedly tuning the tail is now low-value and risks fitting the simulator rather than improving the game.

## Recommended Action

Do **not** change `game.js` or promote `visible-signal +5 cap` to a human candidate on Systems evidence alone.

Stop fine-tuning the high-chain reward tail. Preserve the corrected per-Run RNG isolation and common comparison conditions. The next Systems investigation should isolate the remaining source of fixed-resonance advantage that survives even when mature-chain growth is capped—especially the value of preserving an already-active chain versus switching to calm/deep, and whether the state-conditioned extraction policy prices that opportunity cost fairly.

Prefer one structural probe over another reward sweep. Any next candidate should keep the first `+5` resonance payoff intact, retain visible signal causality if tested, and be rejected if it merely transfers dominance to another fixed route.

Executive should treat EX-017's pre-TQ-018 +0.70% mixed advantage as superseded by this corrected result.

## Human Verification

Not yet applicable. All balance conclusions here are `SIMULATED`; no claim is made that fixed resonance is the human optimal strategy or that the candidate is more or less fun. If a later candidate becomes a Controlled Playable, human testing should still verify whether the first successful resonance continuation feels like clear acceleration and whether route switching creates a legible, meaningful sacrifice.