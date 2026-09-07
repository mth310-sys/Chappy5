# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **932**
- latestRecordAdded: **銀河機攻隊 マジェスティックプリンス**（D-light）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-02_majestic-prince.md`
- chronologicalFrontier: **2015-11-02**
- frontierLatestMachine: **銀河機攻隊 マジェスティックプリンス**
- schema: **resetBehavior v0.7**
- status: **2015-11-02_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.931 `2015-11-02_high-school-dxd.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本 recordCount **931** / 2015-11-02群OPEN。
- 指定された次未処理 **銀河機攻隊 マジェスティックプリンス** をNo.932として追加。

## No.932 — 銀河機攻隊 マジェスティックプリンス
- record: `docs/real_machine_db/machines/2015-11-02_majestic-prince.md`
- manufacturer: **D-light**
- releaseDate: **2015-11-02**
- formalModelName: **パチスロマジェスティックプリンスS**
- inspectionNumber: **5S0670**
- generation/system: **5号機 新基準AT / 規定ゲノムポイント解除 / G数上乗せ型AT**

### performanceCore
- 機械割: **97.2 / 98.1 / 100.1 / 104.1 / 107.2 / 113.0%**。
- AT初当たり: **1/466.9 / 449.7 / 418.0 / 365.4 / 325.0 / 283.6**。整数表記資料との差は丸め差。
- 50枚ベース: **約47G**。
- AT純増: **約2.8枚/G**。
- AT初期G数: **40 / 100 / 200 / 300G**。
- モード別最大規定ゲノム: 通常A **1500pt** / 通常B **1000pt** / 天国A/B **250pt**。

### resetBehavior v0.7
- 設定変更: **天井/内部ゲノム進捗RESET、内部状態再抽選、表示0pt、部屋ステージ**。
- 据え置き/純電源OFF→ON: **天井・内部ゲノム進捗と内部状態を引継ぎ**。ただし表示ptは0ptになり、部屋ステージ開始のため見た目だけでは変更判別不可。
- 設定変更後は当時新装実践値で **100～200G付近の当選率上昇、最大ハマリ798G** が報告され、複数当時資料が **1000ゲノム天井短縮の可能性が高い** と整理。ただし内部解析確定値ではないため `EMPIRICAL_RESET_SHORTENING_LIKELY` として保存し、確定1000ptとはしていない。
- 設定変更専用モード振り分け、低確/通常/高確/超高確のリセット初期振り分けは再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン契約: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2015-11-02群 — OPEN
処理済み:
1. パチスロ龍が如く OF THE END — No.928
2. ぱちスロAKB48 バラの儀式 — No.929
3. パチスロ ガールズ＆パンツァー — No.930
4. ハイスクールD×D — No.931
5. 銀河機攻隊 マジェスティックプリンス — No.932

未処理の強候補（順番維持）:
1. **パチスロ IS〈インフィニット・ストラトス〉 — SANKYO**
2. **ベルコ系を含む残りメーカーを全件監査**

- 11/02群はまだCLOSEDにしない。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-11_demashita-hakushon-daimaou.md**
- retroQaNextInspection: **2005-12_nobunaga-no-yabou-tenka-sousei-r.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE / 本線優先のため今回カーソル変更なし**

## 次回再開地点
1. **recordCount 932 / chronologicalFrontier 2015-11-02 / 11/02群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.932を再取得。
3. 本線: 次の未処理 **パチスロ IS〈インフィニット・ストラトス〉（SANKYO）** を性能コア + resetBehavior v0.7で登録。
4. その後ベルコ系を含む11/02全メーカー監査を行い、漏れがなければ11/02群CLOSED判定。
5. 遡及QA次候補は `2005-12_nobunaga-no-yabou-tenka-sousei-r.md`。本線収集を優先。
6. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
7. 競合は平均せずCONFLICT/定義差として双方保存。
8. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 実践値由来のリセット短縮推定を内部解析確定値へ昇格させない。

## 主要出典 — 取得日 2026-09-08
### No.932 銀河機攻隊 マジェスティックプリンス
- HAZUSE: https://hazuse.com/machine/pachislot/5S0670/
- K-Navi: https://p-kn.com/slot/2343/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/04/l.php
- パチマガスロマガ 50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/04/c.php
- ちょんぼりすた: https://chonborista.com/slot/d-light/12073/
- すろぱちくえすと性能: https://www.slopachi-quest.com/article/majestic-prince/
- すろぱちくえすと朝一: https://www.slopachi-quest.com/article/prince-reset/
- 期待値見える化: https://slotjin.com/zone/majestic-prince/
- P-Summa当時まとめ: https://psumma.jp/pachislo/16741/

## confidence
- No.932 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- No.932 identityModelInspection: ANALYSIS_HIGH_OLD_DB
- No.932 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.932 settingChangeGameCounterReset: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.932 purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.932 stateResetVsPowerCycle: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.932 resetShortenedCeiling1000Genome: EMPIRICAL_HIGH_NOT_INTERNAL_CONFIRMED
- No.932 resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
