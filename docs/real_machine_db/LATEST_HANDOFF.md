更新日: 2026-09-12

## 現在地点
- recordCount: **1388**
- latestRecordAdded: **ニューハナハナゴールド-30 — No.1388**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-01-12_new-hanahana-gold-30.md`
- chronologicalFrontier: **2021-01-12**
- frontierLatestMachine: **ニューハナハナゴールド-30 — No.1388**
- schema: **resetBehavior v0.7**
- status: **2021-01-12_GROUP_OPEN_6_OF_7_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1387「S Lucky海物語」を再取得して開始。
- `INDEX.md` は旧表示（19件）のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- handoff指定の次機種 **No.1388「ニューハナハナゴールド-30」**を追加。
- 遡及resetBehavior QAは今回本線を優先し、カーソルを進めていない。

## No.1388 — ニューハナハナゴールド-30
- path: `docs/real_machine_db/machines/2021-01-12_new-hanahana-gold-30.md`
- manufacturer: **パイオニア**
- formalModel: **SニューハナハナゴールドEX-30**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-01-12**（パイオニア公式全国導入開始。2021-01-04表記は予定/DB差としてCONFLICT保持）
- generation/system: **6号機 / ノーマルA / 完全告知 / 30Φ沖スロ**
- payoutRateBySetting: **97 / 99 / 101 / 103 / 105 / 107%**
- BIG: **1/297 / 284 / 273 / 262 / 251 / 240**
- REG: **1/496 / 458 / 425 / 397 / 370 / 344**
- bonusCombined: **1/186 / 175 / 166 / 157 / 149 / 141**
- baseGamesPer50: **約48G（設定1-6代表値）**
- basicPayout: **BIG最大224枚 / REG最大112枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_NO_CEILING_WITH_UNVERIFIED_MACHINE_SPECIFIC_DETECTION**

### resetBehavior v0.7 — No.1388
- 天井: **非搭載**。リセット短縮天井、AT/CZ規定G数モードは `NOT_APPLICABLE`。
- 当時解析では天国/高確等の概念なし。設定変更専用の朝一モード・高確・CZ優遇・当選率優遇の公開値は確認なし。
- 1geki本機専用資料では設定変更時/電源OFF→ON時の「状態」は現在調査中。
- イチカツ系には **設定変更=G数リセット / 電源ON-OFF=G数引継ぎ** の表記があるが、天井非搭載で対象G数の定義が明示されないため、内部天井契約へ拡張せず `PUBLIC_CLAIM_DEFINITION_UNCLEAR` として保持。
- 有利区間ランプ/区間ゲーム数を使う本機固有の朝一判別契約は直接資料を固定できず、一般的6号機知識から補完しない。
- ガックンはハナハナ系一般論の後年資料があるが、本機固有の条件/率を高信頼直接資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。当時実戦回顧には全リセ想定でもガックンしなかった観察例があり、ガックン無しを据え置き確定条件とはしない。
- 公開された設定変更専用の数値恩恵（短縮天井、モード振り分け、朝一特定G当選率、恩恵発生率）は確認なし。

## 2021-01-12群監査 — OPEN
固定キュー:
1. **パチスロ頭文字D — No.1383 / DONE**
2. **パチスロ花の慶次～武威 — No.1384 / DONE**
3. **麻雀格闘倶楽部 真 — No.1385 / DONE**
4. **戦国乙女3～天剣を継ぐもの～ — No.1386 / DONE**
5. **S Lucky海物語 — No.1387 / DONE**
6. **ニューハナハナゴールド-30 — No.1388 / DONE**
7. **南国育ち-30 — NEXT / No.1389候補**

- 2021年1月12日導入群には **南国育ち-30** が未処理のためCLOSEDにしない。
- No.1389処理後、同日全メーカー・別型式・別スペック・地域差・段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、**2021-01-12群OPEN**を継続。
- 次の未処理: **南国育ち-30 — No.1389候補**。
- これを処理後、2021-01-12群の境界監査を実施する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-04-08_super-bomb.md`（スーパーボム）。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- 性能側 `coreStatus: PARTIAL` は維持。
- 次回遡及QAカーソルは **`docs/real_machine_db/machines/2007-05-13_urusei-yatsura.md`（うる星やつら）**。

## GitHub保存
- No.1388追加 commit: `2a79e6ed140bd916616434589232f5a3a28335c5`

## 主要出典 — 取得日 2026-09-12
### No.1388 ニューハナハナゴールド-30
- https://www.slot-pioneer.co.jp/news.html
- https://www.amusement-japan.co.jp/article/detail/10001968/
- https://p.hisshobon.jp/machine/3574/1/79597
- https://p.hisshobon.jp/machine/3574/1/80388
- https://1geki.jp/slot/newhana_gold/3/
- https://1geki.jp/slot/newhana_gold/4/
- https://p-kn.com/slot/3499/
- https://nana-press.com/kaiseki/machine/92/3084/
- https://www.p-world.co.jp/machine/database/9267
- https://chonborista.com/slot/pionia-slot/121545/
- https://ichikatsu.com/newhanahanagold/
- https://pachinko-curation.com/5225/
- https://www.pachinkoquora.com/machine/pachinslot/1458/
- https://kaiseki.sulopachinews.com/archives/2352
- https://ameblo.jp/datyo1062/entry-12651286369.html
- https://ameblo.jp/datyo1062/entry-12652385387.html
