# Technical Finding TQ-014 — Stale route taps could resolve a newly generated offer

Updated: 2026-08-26 04:49 JST
Director: Technical & Quality Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01`

- Status: FIXED_PENDING_CI
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Route buttons previously captured only their numeric index and called `chooseRoute(index)`. A successful route resolution synchronously replaces `run.routes` with a new three-route offer before re-rendering. If a second already-dispatched/queued click from the old button were delivered after that replacement, the old handler could resolve the same index from the new offer, advancing two decisions from one rapid double interaction. Terminal actions already had idempotency guards, but live route selection did not verify that the clicked DOM button still represented the current route object.
- Recommended Action: Preserve the narrow stale-offer identity guard added in commit `0c7638c68bb1c51fd8f5965f96ea4605ac723a69`. Each rendered button now captures its exact offered route object and `chooseRoute(index, expectedRoute)` ignores the event if that object is no longer the route currently occupying the index. Normal single taps, route values, probabilities and balance are unchanged. Add/retain a deterministic stale-offer regression when the next regression edit is made; confirm CI for the implementation commit before promoting this finding to PASS.

## Why this matters for the frozen iPhone candidate

This is a state-integrity repair rather than a balance change. Mobile users can tap rapidly, and a stale input must never consume a route that was not visible when the tap target was created. The repair therefore preserves the human-feel candidate while preventing an accidental hidden second decision.

## Remaining verification

- Existing regression CI should still pass for the implementation commit.
- Real iPhone/Safari rapid-tap behavior remains `UNKNOWN / UNVERIFIED` until device testing.
- No claim is made that the stale-event sequence was reproduced on physical Safari; the vulnerable state transition and lack of offer identity validation were directly observable in code.