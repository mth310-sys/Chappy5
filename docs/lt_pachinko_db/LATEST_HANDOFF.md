# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 2 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX is stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-01-06 OPEN / `PLTジューシーハニー極嬢`
- duplicate check performed before writes

## This relay
Added two COMPLETE_CORE records and closed the 2025-01-06 boundary.

### 1. PLTジューシーハニー極嬢
- path: `docs/lt_pachinko_db/machines/2025-01-06_plt_juicy_honey_gokujo.md`
- manufacturer: Sansei R&D
- formalModel: Pジューシーハニー極嬢 MA
- normal/right: 約1/199.8 / 約1/62.8
- RUSH: 61%, ST50, 約55%
- LT: `ジューシーハニーRUSH ラッキートリガー`, ST100, 約80%
- LT route: RUSH中50%の極嬢HONEY BONUSで上乗せごとにLT抽選。BONUS1回あたり約50%でLT。右打ち大当り振り分け上は10R+α→LT 25%を含む。
- payout: initial 7R約700個。極嬢HONEY BONUSは最低2000個、50%で1000個上乗せループ、平均約3000個（払出）。
- status: COMPLETE_CORE
- total LT arrival from normal initial: UNVERIFIED; not inferred.

### 2. e ULTRAMAN 2400★80
- path: `docs/lt_pachinko_db/machines/2025-01-06_e_ultraman_2400_80.md`
- manufacturer: オッケー.（京楽産業.製）
- formalModel: e ULTRAMAN-K1
- normal: 図柄揃い約1/318.8 / レナチャージ約1/535.7 / 合算大当り約1/199
- right: 約1/82.5
- RUSH: ULTRA RUSH 65%, ST85, 約65%
- LT: `リミッター解除RUSH`, ST130, 約80%
- LT route: ULTRA RUSH中1回目大当り10%で直行、または同RUSH内2回目大当りで100% LT。
- right payout: ALL約2400個（1200個×2回、払出）
- status: COMPLETE_CORE
- total LT arrival from normal initial: UNVERIFIED; not inferred.

## 2025-01-06 boundary audit
**CLOSED.**

Independent re-enumeration found the date's pachinko introductions:
1. P戦国乙女7 終焉の関ヶ原 — LT / registered
2. eフィーバー戦姫絶唱シンフォギア4 キャロルver. — LT / registered
3. P清流物語4 ヌシを求めて4000匹 — LT / registered
4. P世界最高の暗殺者、異世界貴族に転生する — LT / registered
5. eぱちんこ押忍！番長 漢の頂 — LT / registered
6. PLTジューシーハニー極嬢 — LT / registered this relay
7. e ULTRAMAN 2400★80 — LT / registered this relay
8. P世紀末・天才バカボン～神SPEC 凱旋～99ver. (PA天才バカボン7FD-TT) — **LT-negative boundary item; do not register.** It has lower `神RUSH` and upper `極神RUSH`, but industry/analysis materials do not identify it as an LT machine. Do not confuse an upper RUSH with LT. Its March 2024 sibling `福神SPEC` is the LT machine.

No additional 2025-01-06 pachinko introduction was identified in the re-enumerated calendars used this relay.

## Effective DB state
Previous handoff:
- machine records: 54
- COMPLETE_CORE: 53
- CONFLICT: 1

After this relay:
- machine records: **56**
- COMPLETE_CORE: **55**
- CONFLICT: **1**
- 2025-01-06 boundary: **CLOSED**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next chronological boundary — 2025-01-20
Initial independent enumeration found these LT-positive candidates:
1. `Pゲゲゲの鬼太郎 獅子奮迅99Ver.` — LT confirmed; RUSH100%, lower約55.5%, upper `超ゲゲゲRUSH` 約92%.
2. `P花の慶次～裂 蓮極129ver.` — LT confirmed; lower約70%, LT約91%, RUSH中大当り15% route reported.
3. `Pブラックラグーン4 EXTRA BULLET 129ver.` — LT confirmed; RUSH52%/約75%, LT `(EXTRA)ラグーンボーナス` right-hit約4%, LT約90%, LT転落後RUSH復帰.

Boundary item:
- `PA花の慶次～裂99ver.` — current industry introduction describes a non-LT two-stage RUSH plus遊タイム; treat as LT-negative unless fresh evidence proves LT.
- `Pハネモノ ファミリースタジアム` — must classify during boundary audit; do not assume LT.

## Next restart point
1. Re-sync latest main README, LT mission, INDEX, this handoff, and current machine records.
2. Start **2025-01-20** with `Pゲゲゲの鬼太郎 獅子奮迅99Ver.` unless newer main has processed it.
3. Then process `P花の慶次～裂 蓮極129ver.` and `Pブラックラグーン4 EXTRA BULLET 129ver.` in the same date boundary.
4. Independently re-enumerate all 2025-01-20 introductions before closing the date.
5. Do not infer unpublished total LT-arrival values. Keep definitions such as lower RUSH continuation, LT continuation, c-time/転落, and payout basis separate.

## Sources used this relay
PLTジューシーハニー極嬢:
- https://news.p-world.co.jp/articles/29541/yugitsushin
- https://news.p-world.co.jp/articles/29526/greenbelt
- https://www.p-world.co.jp/machine/database/10173
- https://hisshobon.com/machineinfo/95893/
- https://p.hisshobon.jp/machine/4461/1/107072
- https://1geki.jp/pachinko/p_ltjcyhny_gj/

e ULTRAMAN 2400★80:
- https://www.kyoraku.co.jp/news/detail/792
- https://www.kyoraku.co.jp/news/detail/802
- https://news.p-world.co.jp/articles/29552/yugitsushin
- https://news.p-world.co.jp/articles/29948/greenbelt
- https://hisshobon.com/machineinfo/95450/
- https://hisshobon.com/machineinfo/95451/
- https://pachimaga.com/free/article/20241230/056374.php

2025-01-06 boundary:
- https://marutto-w.com/industry_news/20250108
- https://pachinkopachisro.com/archives/58760696.html
- https://news.p-world.co.jp/articles/29482/yugitsushin
- https://www.p-world.co.jp/machine/database/10165

2025-01-20 discovery:
- https://1geki.jp/pachinko/p_gegegenokitaro99/
- https://nana-press.com/kaiseki/machine/884/26720/
- https://chonborista.com/pachinko/newgin/224418/
- https://news.p-world.co.jp/articles/29290/yugitsushin
- https://www.amusement-japan.co.jp/article/detail/10004593/
