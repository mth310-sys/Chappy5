# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before write

## Closed boundaries retained
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9
- 2025-08-18 — CLOSED 3/3

## 2025-08-18 boundary completed this relay
Candidate queue:
1. `e女神のカフェテラス` — COMPLETE_CORE
2. `eGODZILLA7 TYPE-CRASH` — COMPLETE_CORE
3. `P【超甘LT】豊丸のとあるパチンコにしみけん参戦 感度UP1/39` — COMPLETE_CORE this relay

Boundary re-audit:
- ぱちんこキュレーション 2025-08-18 lists exactly these three pachinko machines.
- ALL7 2025/08 list independently lists exactly these three machines on 2025/08/18.
- 情報島＋ retrospective explicitly states the three pachinko new machines introduced from 8/18 were these same three.
Therefore 2025-08-18 is CLOSED 3/3.

Calendar sources:
- https://pachinko-curation.com/shindai_calendar/2/
- https://www.all7.jp/plans/index/2025/08
- https://p-johojima.jp/colum/post-13351/

### P【超甘LT】豊丸のとあるパチンコにしみけん参戦 感度UP1/39 — COMPLETE_CORE
- 豊丸産業 / 型式 `P豊丸のとあるパチンコにしみけん参戦 AX2` / 2025-08-18 / LT3.0 PLUS / 一種二種混合。
- 通常1/39.9、RUSH中1/35.4。初当り4R約213個（払出）。
- 通常内部モードA-D。A-Cは初当り25%で対応RUSH、25%で1段階モードアップ、50%維持。DはRUSH100%、うち50%でLT直行。
- 下位RUSH: ギンギンタイム10回 約33% / ギンギンタイム20回 約50% / 満開JOURNEY40回 約72%。いずれも残保留4個引き戻し込み。
- LT正式名称 `超満開JOURNEY`。モードD初当り50%またはRUSH中大当り7.4%で直行。75回＋残保留4、継続約90%。
- RUSH中10R約1500個は50%。下位では10Rの42.6%が段階アップ、7.4%がLT。LT本体中は1500個50% / 約213個50%、いずれもLT継続。
- 残保留当選時はギンギンタイム10回中と同様の振り分けになるためLT本体振り分けと分離。
- 通常遊技全体を分母とする総LT到達率は直接値未確認。内部モード履歴を含むため独自計算しない。
- P-WORLD詳細表示の一部にLT `ST70回` という孤立表記があるが、同サイト基本スペックおよびパチマガスロマガ、情報島＋、1geki、K-Navi等は75回で一致。75回をcanonicalとして注記保持。
- record: `docs/lt_pachinko_db/machines/2025-08-18_p_chouama_lt_toyomaru_shimiken_kando_up_1_39.md`
- commit: `031435b1905828307288b6c67e7087b5d1a9051d`

Sources:
- https://news.p-world.co.jp/articles/31034/greenbelt
- https://p-johojima.jp/machine_spec/post-8672/
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/toyomaru_pachi/317/kh02.php
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/toyomaru_pachi/317/kh04.php
- https://www.p-world.co.jp/machine/database/10294
- https://1geki.jp/pachinko/p_sod2_sk39lt/
- https://p-kn.com/pachinko/4363/

## Effective DB state
Previous effective state: 124 machine records / 123 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **125**
- COMPLETE_CORE: **124**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next chronological boundary — 2025-09-08
Two independent calendars show no pachinko introduction date between 2025-08-18 and 2025-09-08; 2025-09-01 is slot-only in the checked calendars.

Known 2025-09-08 pachinko candidate queue to audit for LT eligibility, in calendar order where practical:
1. `eフィーバーブルーロック` — LT3.0 PLUS confirmed; process first.
2. `eパリピ孔明` — new-standard/C-time structure; audit LT status and collect if eligible.
3. `P戦国乙女7 終焉の関ヶ原 LLサイズ 299ver.` — calendar explicitly marks LT; collect if duplicate search clear.
4. `ぱちんこ シン・エヴァンゲリオン PREMIUM MODEL` — audit LT eligibility.
5. `Pアズールレーン THE ANIMATION 異次元トリガー 79ver.` — audit LT eligibility.
6. `デジハネP 頭文字D せかんど` — audit LT eligibility.
7. `P FAIRY TAIL 超一夜Ver.` — LT structure indicated; collect if eligible.
8. `P真・座頭市物語 LT99Ver.` — LT confirmed; collect if duplicate search clear.
9. `Pデビルマン-THE FINAL- 179Ver.` — appears on one calendar; verify actual introduction date and LT eligibility before processing.

Calendar sources:
- https://pachinko-curation.com/shindai_calendar/2/
- https://p-kn.com/calendar/202509/
- https://pachinkopachisro.com/archives/58760696.html

## Next restart point
**2025-09-08 `eフィーバーブルーロック` is the next unprocessed chronological candidate. Duplicate-search first, confirm LT eligibility, then collect full core/LT structure. Continue through the complete 2025-09-08 pachinko boundary, excluding LT-noneligible machines.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.