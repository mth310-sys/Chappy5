# Technical Finding TQ-014 — Stale route taps cannot resolve a newly generated offer

Updated: 2026-08-26 05:50 JST
Director: Technical & Quality Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01`

- Status: PASS
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Route buttons previously captured only their numeric index and called `chooseRoute(index)`. A successful route resolution synchronously replaces `run.routes` with a new three-route offer before re-rendering. If a second already-dispatched/queued click from the old button were delivered after that replacement, the old handler could resolve the same index from the new offer, advancing two decisions from one rapid double interaction. Commit `0c7638c68bb1c51fd8f5965f96ea4605ac723a69` added offer-identity validation: each rendered button captures its exact route object and `chooseRoute(index, expectedRoute)` rejects the event if that object is no longer the current route at that index. Commit `a686098ee26827f996b82319581518a94f12bd8b` adds deterministic regression coverage that resolves one offered route, then replays the stale previous-offer identity against the same index and asserts depth does not advance a second time. GitHub Actions `ECHO DRIFT Regression` run `32897575574` completed with conclusion `success`.
- Recommended Action: Preserve the offer-identity guard and deterministic regression. Keep physical iPhone/Safari rapid-tap behavior as a separate device verification item; no further gameplay or balance change is justified by this finding.

## Why this matters for the frozen iPhone candidate

This is a state-integrity repair rather than a balance change. Mobile users can tap rapidly, and a stale input must never consume a route that was not visible when the tap target was created. The repair preserves the human-feel candidate while preventing an accidental hidden second decision.

## Verification boundary

- Code-path vulnerability: `OBSERVED` in the pre-fix implementation.
- Repair behavior: `OBSERVED` and deterministic regression-protected.
- CI result: `OBSERVED`, run `32897575574` = `success`.
- Physical Safari reproduction/rapid-tap behavior: `UNKNOWN / UNVERIFIED` until device testing.

No claim is made that the stale-event sequence was reproduced on physical Safari. The vulnerable state transition, the identity guard, and the regression result are directly verified.