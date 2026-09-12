更新日: 2026-09-12

## 現在地点
- recordCount: **1464**
- latestRecordAdded: **ハナハナホウオウ～天翔～（25φ） — No.1464**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-24_hanahana-houoh-tensho-25.md`
- chronologicalFrontier: **2022-01-24**
- frontierLatestMachine: **ハナハナホウオウ～天翔～（25φ） — No.1464**
- schema: **resetBehavior v0.7**
- status: **2022-01-24_GROUP_OPEN_1_OF_11_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1463「沖ワニマル-30」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 開始時点のmainは recordCount 1463 / chronologicalFrontier 2022-01-17 / `2022-01-17_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。
- 2022-01-18〜01-23境界を新台カレンダーで再監査し、1/17と1/24の間に本線へ追加すべき新規一般導入候補を確認できなかったため1/24群へ前進。
- 「ハナハナホウオウ～天翔～」は25φ `Sハナハナホウオウ～天翔～LX / 0S1386` と30φ `Sハナハナホウオウ～天翔～EX-30 / 0S1174` が別型式・別検定番号で同日導入。公開性能は同一だが全機種方針に従い独立レコード化する。今回は25φをNo.1464として処理。

## No.1464 — ハナハナホウオウ～天翔～（25φ）
- path: `docs/real_machine_db/machines/2022-01-24_hanahana-houoh-tensho-25.md`
- manufacturer: **パイオニア**
- formalModel: **Sハナハナホウオウ～天翔～LX**
- certificationNumber: **0S1386**
- releaseDate: **2022-01-24**
- generation/system: **6.1号機 / ノーマル / 完全告知 / 25φ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97 / 99 / 101 / 103 / 106 / 109%**
- bonusInitialHit: **BIG 1/297→1/236 / REG 1/496→1/337 / 合算 1/186→1/139**
- baseGamesPer50: **約42G/50枚**
- basicPayout: **BIG最大240枚 / REG最大120枚**
- normalCeiling: **非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE_HIGH_RESET_WITH_BGM_HISTORY_UNVERIFIED**

### resetBehavior v0.7 — No.1464
- **設定変更**: 天井非搭載、AT/ART/CZモードなし。有利区間進行も朝一物差し上NOT_APPLICABLE。BETランプは設定変更でも引継ぎ、リールガックンは「ナシ」。設定変更専用の短縮天井・専用モード・主要恩恵/不利は非該当/確認なし。
- **据え置き**: 天井・AT/CZ状態は非該当。BETランプ引継ぎ。BGM変化条件に関わる内部履歴のみ直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **純電源OFF→ON**: BETランプ引継ぎ、リールガックンなし。BGM変化条件は当時解析でも「現在調査中」のため `UNVERIFIED_AFTER_RESEARCH`。
- **変更判別**: ガックンなし、BETランプは変更/電断双方で引継ぐため判別材料にならない。天井・朝一専用モード・有利区間ランプによる判別は非該当。
- **公開朝一数値**: 設定変更専用の当選率、モード振り分け、短縮G数などの公開数値なし。

## 2022-01-24群 — OPEN
既知の独立レコード候補（今回の型式分離反映後）:
1. **ハナハナホウオウ～天翔～（25φ） — No.1464 / DONE**
2. **ハナハナホウオウ～天翔～-30（30φ） — No.1465候補 / NEXT**
3. **ディスクアップ2**
4. **聖闘士星矢 冥王復活**
5. **新世紀エヴァンゲリオン～魂の共鳴～**
6. **アラジンAクラシック**
7. **南国物語30**
8. **ハイスクールD×D2 ハーレム王に俺はなる**
9. **ぱちスロ ギャグダー**
10. **パチスロ春一番**
11. **来雷エイサー30**

## 次回本線の再開地点
- **No.1465候補「ハナハナホウオウ～天翔～-30」— 2022-01-24。**
- 型式 `Sハナハナホウオウ～天翔～EX-30`、検定番号 `0S1174`。25φと公開性能は同一だが別型式・30φのため独立登録する。
- 30φ処理後は **ディスクアップ2** へ進む。
- 1/24群完了後、別型式/25φ・30φ/PB/地域先行/延期・段階導入を再監査してCLOSED判定する。
- **2022-01-25 ブルーファルコン（玉越PB）** を1/24群と混同しない。
- 25φの後発紫パネル `Sハナハナホウオウ～天翔～GP` は2022-05上旬導入の別型式であり、1/24群へ重複登録しない。時系列到達時に独立性を再確認する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-01_aa-warera-nihonmatsu-judobu.md`（嗚呼!我ら日本松柔道部）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`（空手バカ一代）**。
- 今回は本線の2022-01-24群開始を優先し、遡及QAカーソルは動かしていない。

## GitHub保存
- No.1464追加 commit: `a0e0dfda1730840a3c899d2d8f8a92cee7289bad`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1464 ハナハナホウオウ～天翔～（25φ）
- https://www.slot-pioneer.co.jp/information/hanahana_houoh_tensho.html
- https://news.p-world.co.jp/articles/18115/nippon
- https://news.p-world.co.jp/articles/19304/nippon
- https://news.p-world.co.jp/articles/18117/yugitsushin
- https://hazuse.com/machine/pachislot/0S1386/
- https://p.hisshobon.jp/machine/3792/1/85421
- https://www.nankaikoya.jp/hanahana-houou-tensho/
- https://ichikatsu.com/newslot2022/
