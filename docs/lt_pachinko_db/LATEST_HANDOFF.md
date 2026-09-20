# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 2

## Read before work
- latest main README: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked
- `docs/lt_pachinko_db/LATEST_HANDOFF.md`: checked
- existing records / Relay 1 progress: checked

## This relay
Advanced from Relay 1 into the first October 2024 introduction date. One confirmed LT machine was registered:

1. `2024-10-07_p_cyborg009_ros_vs_scarl_body_199.md` — COMPLETE_CORE

### Definition controls
- CYBORG009 199: normal 1/199.8; first hit is 3R390 payout + time-shortening 100 for all initial jackpots.
- Time-shortening draw is 1/196.2 for 100 spins; breakthrough / RUSH entry about40%.
- Lower `加速RUSH`: 1/43.9, ST100, about90% continuation.
- LT `超加速RUSH`: 1/43.9, ST126, about95% continuation.
- LT trigger is DEAD HEAT BATTLE victory on a 10R jackpot in lower RUSH = 50% of 10R jackpots. P-WORLD / PachiMaga describe LT activation at about one in three lower-RUSH entries, but this is not stored as a normal-first-hit total LT reach rate.
- Payouts are payout values: 3R390 through 10R1300.
- Keep separate from 2025 CYBORG009 LT99ver.

## 2024-10-07 boundary check
Industry calendars list: e乃木坂46Ⅱ, Pルパン三世 ONE COLLECTION, PAわんわんパラダイスCELEBRATION, CYBORG009 199, P宇宙戦艦ヤマト2202 超波動, P中森明菜 BLACK DIVA, plus Pフィーバー革命機ヴァルヴレイヴ3 Light ver. in another calendar. CYBORG009 199 is directly confirmed LT and is now registered. Search results for Pルパン ONE COLLECTION and P宇宙戦艦ヤマト2202 identify their later 2025 LT variants separately, so do not contaminate the 2024 specs. Continue final LT confirmation/exclusion on the remaining 2024-10-07 candidates before moving to 2024-10-21.

## DB state after this relay
- registered: 31
- COMPLETE_CORE: 30
- CONFLICT: 1 (`P GO!GO!郷 革命の5`)
- UNVERIFIED fields: PAハイスクール・フリート normal-first-hit total LT reach rate; CYBORG009 199 normal-first-hit total LT reach rate. Do not infer either.

## Next restart point
Continue **2024-10-07 same-day boundary**: explicitly confirm/exclude e乃木坂46Ⅱ, PAわんわんパラダイスCELEBRATION, P中森明菜 BLACK DIVA and Pフィーバー革命機ヴァルヴレイヴ3 Light ver. as LT/non-LT for their 2024 specs; Pルパン ONE COLLECTION and P宇宙戦艦ヤマト2202 currently have evidence pointing to later 2025 LT variants, but finish boundary QA. Then advance to **2024-10-21**, where `P江頭2:50 in ナナシーLT` is an immediate LT candidate.

QA priority remains:
1. `P GO!GO!郷 革命の5` 3% vs 4% primary-source resolution
2. `PAハイスクール・フリート オールスター すい～とでハッピー!2400` direct total LT reach-rate source search
3. variant mixing / RUSH-vs-LT rate / payout-vs-net integrity checks.
