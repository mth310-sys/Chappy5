# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 3

## Read before work
- latest main README: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked
- previous `LATEST_HANDOFF.md` / Relay 2: checked
- existing CYBORG009 199 record/template: checked

## This relay
Closed the remaining 2024-10-07 boundary without forcing non-LT / unconfirmed upper modes into the LT database, then advanced chronologically to 2024-10-21.

New COMPLETE_CORE record:
1. `2024-10-21_p_egashira250_in_nanasy_lt.md` — P江頭2:50inナナシーLT

### P江頭2:50inナナシーLT definition controls
- release: 2024-10-21; manufacturer: 豊丸産業; type/model: P江頭2：50 inナナシーV3.
- LT equipment is directly supported by 豊丸公式ティザー; not inferred from an upper-mode name.
- normal composite probability about1/129.7 = 特図当り1/131 + premium c時短1/16384; keep definitions separate.
- right-hand effective jackpot: 1/1.0.
- initial distribution: 0.4% c時短/LT direct route; 49.6% about400 payout + ど～んBIG BONUS; 50.0% about400 payout + normal.
- `ど～んBIG BONUS`: about2500 payout. Its ordinary acquisition-state 特図2 has 10.6% EGASYRUSH promotion; P-WORLD notes 7.6% for the bonus occurring after EGASYRUSH end or c時短 route, so preserve the denominator/context distinction.
- LT `EGASYRUSH`: about500 payout per jackpot, 90.2% continuation; 9.8% exit goes to ど～んBIG BONUS rather than directly to normal.
- direct published total EGASYRUSH entry per initial hit: about6% (一撃: ど～んBIG BONUS route4.5% + チャレンジBONUS終了時1.2% + c時短0.4%, rounded). This is stored as a directly published value, not independently inferred.
- no 遊タイム.

## 2024-10-07 boundary QA
Candidates from Relay 2 were re-searched with LT-specific terms and variant checks.

- `e乃木坂46Ⅱ` (2024-10-07): explicitly **LT non-equipped** in K-Navi and an industry feature; Cタイム / 超乃木坂RUSH must not be mistaken for LT. Exclude.
- `Pフィーバー革命機ヴァルヴレイヴ3 Light ver.` (2024-10-07): パチマガスロマガ explicitly says `ラッキートリガー なし`. Exclude.
- `P宇宙戦艦ヤマト2202 超波動` (2024-10-07): K-Navi explicitly says `ラッキートリガー 非搭載`; 2025 `森雪 199LT ver.` is a later separate variant. Exclude.
- `Pルパン三世 ONE COLLECTION` (2024-10-07): 2024 P-spec is ordinary RUSH/ST; the LT variant is the separate 2025 `eルパン三世 ONE COLLECTION 超ブチヌキLTver.`. Exclude 2024 P-spec.
- `P中森明菜・歌姫伝説～BLACK DIVA 愛～` (2024-10-07): 1/99.9 ST100%/ST80 + 遊タイム structure found; no direct LT-equipment evidence after cross-source search. Do not register.
- `PAわんわんパラダイスCELEBRATION` (2024-10-07): has an upper `わんわんCELEBRATION` (right-hit 2%, ST50 + 時短67, about90%) and strong upper-mode wording, but this relay did **not** find a direct source explicitly identifying the 2024 model as ラッキートリガー搭載. Mission requires confirmed LT only, so do not register it merely because it has an upper mode. Keep as boundary exclusion pending explicit LT proof.

## Sources used for boundary QA
- https://p-kn.com/pachinko/4198/ — e乃木坂46Ⅱ; explicitly LT非搭載
- https://pachirevo.com/featuredmachine/4078/ — e乃木坂46Ⅱ; explicitly LT非搭載
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sankyo_pachi/524/kh02.php — PFヴァルヴレイヴ3 Light; explicitly LTなし
- https://p-kn.com/pachinko/4210/ — P宇宙戦艦ヤマト2202 超波動; explicitly LT非搭載
- https://news.p-world.co.jp/articles/30705/greenbelt — 2025 森雪199LT is a later LT variant of the 2024 machine
- https://1geki.jp/pachinko/p_lupin_oc/ — 2024 Pルパン ONE COLLECTION structure
- https://web-greenbelt.jp/post-90772/ — 2025 eルパン ONE COLLECTION 超ブチヌキLTver. is the later LT variant
- https://chonborista.com/pachinko/dlight/220850/ — BLACK DIVA 愛 2024-10-07 ST/遊タイム structure
- https://news.p-world.co.jp/articles/28322/yugitsushin — PAわんわんCELEBRATION official-industry announcement / upper mode, no LT wording
- https://www.p-world.co.jp/machine/database/10089 — PAわんわんCELEBRATION upper mode 2% / about90%; no direct LT identification used

## Sources used for P江頭2:50inナナシーLT
- https://www.youtube.com/watch?v=BC8mbROhZWw — 豊丸公式ティザー; direct LT confirmation
- https://www.p-world.co.jp/machine/database/10108
- https://1geki.jp/pachinko/p_ega_nanasylt/39/
- https://1geki.jp/pachinko/p_ega_nanasylt/51/
- https://nana-press.com/kaiseki/machine/820/24203/
- https://hazuse.com/machine/pachinko/4P0800/
- https://p-kn.com/pachinko/4201/
- https://p-cultureclub.com/news/7904/

## DB state after this relay
- previous INDEX registered count: 30 (INDEX had not yet integrated Relay 2's CYBORG009 file)
- Relay 2 added CYBORG009 199 COMPLETE_CORE
- Relay 3 added P江頭2:50inナナシーLT COMPLETE_CORE
- effective machine-record total should therefore be 32 once INDEX is next fully integrated
- COMPLETE_CORE effective total: 31
- CONFLICT: 1 (`P GO!GO!郷 革命の5`)
- Do not infer PAわんわんCELEBRATION as LT without explicit confirmation.

## Next restart point
Continue chronologically **after 2024-10-21 P江頭2:50inナナシーLT**.

First, finish the **2024-10-21 same-day LT candidate boundary** from reliable new-machine calendars. Register every directly confirmed LT-equipped machine on that date before advancing. Then move to the next October/November 2024 introduction date in chronological order.

QA priority remains:
1. `P GO!GO!郷 革命の5` 3% vs 4% primary-source resolution
2. `PAハイスクール・フリート オールスター すい～とでハッピー!2400` direct total LT reach-rate source search
3. PAわんわんCELEBRATION: only reconsider if a direct 2024-model LT-equipment source is found
4. variant mixing / RUSH-vs-LT rate / payout-vs-net integrity checks.
