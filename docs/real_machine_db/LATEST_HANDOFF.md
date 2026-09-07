# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **928**
- latestRecordAdded: **パチスロ龍が如く OF THE END**（タイヨーエレック）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-02_ryu-ga-gotoku-of-the-end.md`
- chronologicalFrontier: **2015-11-02**
- frontierLatestMachine: **パチスロ龍が如く OF THE END**
- schema: **resetBehavior v0.7**
- status: **2015-11-02_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.927 `2015-10-26_hyakka-ryoran-samurai-girls.md` を再取得。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **927** / chronologicalFrontier **2015-10-26** / `2015-11-02_GROUP_NEXT`。
- handoff指定の次未処理 **パチスロ龍が如く OF THE END** をNo.928として追加。

## No.928 — パチスロ龍が如く OF THE END

- record: `docs/real_machine_db/machines/2015-11-02_ryu-ga-gotoku-of-the-end.md`
- manufacturer: **タイヨーエレック**
- releaseDate: **2015-11-02**
- formalModelName: **龍が如く OF THE END ZA**
- inspectionNumber: **5S0756**
- generation/system: **5号機 新基準AT / 差枚数管理型AT**

### performanceCore

- 機械割: **97.4 / 98.4 / 100.0 / 102.8 / 105.0 / 110.3%**。
- AT初当たり: **1/388.6 / 369.4 / 361.9 / 318.0 / 297.5 / 272.4**。
- 50枚ベース: **約44.6G**。
- AT「龍が如くRUSH」純増: **約2.9枚/G**。
- AT初当たり時のBATTLE ZONE最低保証: **100枚**。
- 通常天井: **AT間1380G+前兆、AT確定**。

### resetBehavior v0.7

- 設定変更: **天井RESET / 1380G→800Gへ580G短縮 / 内部モード再抽選**。
- 純電源OFF→ON: **天井ゲーム数・内部モードCARRYOVER**。ステージ表示は当時比較資料で調査中のため `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き: 電源比較と宵越し記述から天井進捗・内部モードは **CARRYOVER_SUPPORTED**。
- 設定変更後の低確/通常/高確/超高確の具体振り分けは、検索語・資料系統変更後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- リセット後の新台初日1回目実戦集計で天井到達率 **約17.3%**。メーカー公表ではなく `ANALYSIS_SINGLE_EMPIRICAL`。
- 本機固有ガックン/初期出目/ランプ等の確定変更判別は再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。

### conflicts / missing

- `CEILING_TEXT_1380_VS_1300`: 複数当時資料、同ページ表、短縮幅580Gは **1380G** を支持。一方、期待値見える化の記事本文1箇所に **1300G→800G** 表記があるためCONFLICT保持。canonicalは1380G。
- settingChangeStateDistribution: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleStageDisplay: `UNVERIFIED_AFTER_RESEARCH`。
- resetDetectionDedicatedCue: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 2015-11-02群 — OPEN

処理済み:
1. **パチスロ龍が如く OF THE END — No.928**

未処理の強候補（順番維持）:
1. **ぱちスロAKB48 バラの儀式 — 京楽**
2. **パチスロガールズ＆パンツァー — 平和**
3. **ハイスクールD×D — KPE**
4. **銀河機攻隊 マジェスティックプリンス — D-light**
5. **パチスロ IS〈インフィニット・ストラトス〉 — SANKYO**
6. **K-Navi同日カレンダーで後続するベルコ系を含め、残りメーカーを全件監査**。

- 11/02群はまだCLOSEDにしない。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 遡及 resetBehavior QA

- retroQaScanConfirmedThrough: **2005-10_devilman3.md**
- retroQaNextInspection: **2005-11_demashita-hakushon-daimaou.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE / NOT_ADVANCED_THIS_RELAY**
- 本線の時系列収集を優先しつつ、後続リレーで既存v0.7有無を順次確認する。既収集なら重複更新しない。

## 次回再開地点

1. **recordCount 928 / chronologicalFrontier 2015-11-02 / 11/02群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.928を再取得。
3. 本線: 次の未処理 **ぱちスロAKB48 バラの儀式（京楽）** を性能コア + resetBehavior v0.7で登録。
4. 続けて **ガールズ＆パンツァー → ハイスクールD×D → マジェスティックプリンス → IS〈インフィニット・ストラトス〉** と進め、ベルコ系を含む11/02全メーカーを再監査。
5. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等で検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
6. 競合は平均せずCONFLICTとして双方保存。
7. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せずCONFLICT/定義差として双方保持。

## 主要出典 — 取得日 2026-09-08

### No.928 パチスロ龍が如く OF THE END
- グリーンべると（2015-09-17）: https://web-greenbelt.jp/00008085/
- K-Navi: https://p-kn.com/slot/2360/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0756/
- すろぱちくえすと天井/スペック: https://www.slopachi-quest.com/article/ryugagotoku/
- すろぱちくえすと解析まとめ: https://www.slopachi-quest.com/kisyubetsu/ryugagotoku/
- ちょんぼりすた: https://chonborista.com/slot/taiyo-slot/12222/
- 期待値見える化 朝一リセット: https://slotjin.com/slot/ryu-ga-gotoku-reset/
- 期待値見える化 天井/ゾーン: https://slotjin.com/zone/ryu-ga-gotoku/

## confidence

- No.928 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- No.928 identityFormalModel: ANALYSIS_HIGH
- No.928 performanceCore: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE
- No.928 settingChangeBehavior: ANALYSIS_HIGH_DIRECT_RESET_COMPARISON
- No.928 carryOverBehavior: ANALYSIS_HIGH_SUPPORTED_BY_POWER_COMPARISON_AND_OVERNIGHT_CONTEXT
- No.928 purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.928 resetNumericCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- No.928 resetEmpiricalCeilingHitRate: ANALYSIS_SINGLE_EMPIRICAL
- No.928 resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
- No.928 resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
