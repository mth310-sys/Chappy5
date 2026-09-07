# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **930**
- latestRecordAdded: **パチスロ ガールズ＆パンツァー**（オリンピア / 平和系）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-02_girls-und-panzer.md`
- chronologicalFrontier: **2015-11-02**
- frontierLatestMachine: **パチスロ ガールズ＆パンツァー**
- schema: **resetBehavior v0.7**
- status: **2015-11-02_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.929 `2015-11-02_akb48-bara-no-gishiki.md` を再取得。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **929** / chronologicalFrontier **2015-11-02** / `2015-11-02_GROUP_OPEN`。
- handoff指定の次未処理 **パチスロ ガールズ＆パンツァー** をNo.930として追加。

## No.930 — パチスロ ガールズ＆パンツァー
- record: `docs/real_machine_db/machines/2015-11-02_girls-und-panzer.md`
- manufacturer: **オリンピア（平和系）**
- releaseDate: **2015-11-02**（K-Navi等のホール導入開始日。オリンピア公式2015年製品として確認）
- generation/system: **5号機 AT / セット継続・完全バトル型**
- formalModelName / inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**

### performanceCore
- 機械割: **97.1 / 98.3 / 100.2 / 104.5 / 108.1 / 113.1%**。
- AT「戦車道」初当たり: **1/399.7 / 378.3 / 354.2 / 298.4 / 259.9 / 216.6**。
- 50枚ベース: **約45.2G**。
- AT純増: **約2.5枚/G**。
- ATは固定G数/固定枚数型ではなく、対戦校撃破まで継続する完全バトル型。
- 通常時最大天井: **1280G → AT**。

### resetBehavior v0.7
- 設定変更: **天井ゲーム数RESET / 内部状態RESET・再抽選 / 内部モード再抽選**。
- 据え置き: **天井ゲーム数・内部状態/モード CARRYOVER**。
- 純電源OFF→ON: **天井ゲーム数・内部状態/モード CARRYOVER**。
- 設定変更後 **666GでCZ「あんこう祭り」確定**。当該CZのAT期待度は **約66%**。
- 初期に流布した「666GでAT確定」は後続当時解析でガセ濃厚と訂正されているため採用せず、**CZ確定とAT確定を分離**。
- 最大AT天井自体は **1280G** のまま。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 変更判別: あんこう煽りの発生ゲーム数が補助材料。ガックン「しない」は元資料が要検証表記のため **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の全モード/0G状態の具体振り分けは十分な直接数値表を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### conflicts / missing
- `RESET_666G_AT_VS_CZ`: 旧「666G AT確定」説 vs 後続「666G CZあんこう祭り確定 / AT期待度約66%」。後者をcanonical。
- formalModelName / inspectionNumber / resetModeExactDistribution / resetImmediateStateExactDistribution / reelGakkun: `UNVERIFIED_AFTER_RESEARCH`。

## 2015-11-02群 — OPEN
処理済み:
1. **パチスロ龍が如く OF THE END — No.928**
2. **ぱちスロAKB48 バラの儀式 — No.929**
3. **パチスロ ガールズ＆パンツァー — No.930**

未処理の強候補（順番維持）:
1. **ハイスクールD×D — KPE**
2. **銀河機攻隊 マジェスティックプリンス — D-light**
3. **パチスロ IS〈インフィニット・ストラトス〉 — SANKYO**
4. **ベルコ系を含む残りメーカーを全件監査**

- KPE/KONAMI公式は **ハイスクールD×Dが2015-11-02より全国ホール稼働開始**と明記。
- K-Naviはマジェスティックプリンスも **2015-11-02** と確認。
- 11/02群はまだCLOSEDにしない。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-11_demashita-hakushon-daimaou.md**
- retroQaNextInspection: **2005-12_nobunaga-no-yabou-tenka-sousei-r.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE / HAKUSHON_RESEARCH_RECONFIRMED_NO_NEW_DIRECT_RESET_EVIDENCE**

### 今回QA — 出ましたハクション大魔王
- 既存 `resetBehaviorQA: PARTIAL` と性能コア状態は維持。
- 「設定変更」「リセット」「朝一」「電源OFF」「RT」「ドキドキタイム」「残りゲーム」等へ検索語を変更し、HAZUSE、Cranky Seven、5号機回顧DB、設定判別DB等を再探索。
- 赤7後180G / 白7後60G / 青7後30G / REG後1000GのRT構造は再確認。
- **設定変更・据え置き・純電源OFF→ONでRT残G数/RT状態を消去または保持するかを本機固有で直接固定できる新資料は今回も未発見**。
- 初期5号機一般論や他サミー機から推測せず、`settingChangeBehavior / carryOverBehavior / powerCycleBehavior / stateAfterReset` の未確認部分は維持。
- QA確認済みカーソルのみ次の `2005-12_nobunaga-no-yabou-tenka-sousei-r.md` へ進める。

## 次回再開地点
1. **recordCount 930 / chronologicalFrontier 2015-11-02 / 11/02群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.930を再取得。
3. 本線: 次の未処理 **ハイスクールD×D（KPE）** を性能コア + resetBehavior v0.7で登録。
4. 続けて **銀河機攻隊 マジェスティックプリンス → IS〈インフィニット・ストラトス〉**、その後ベルコ系を含む11/02全メーカー監査。
5. 遡及QA: **`2005-12_nobunaga-no-yabou-tenka-sousei-r.md`** を次に確認。既存COMPLETE_CORE/PARTIALの性能判定とreset QAは分離管理。
6. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等で検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
7. 競合は平均せずCONFLICTとして双方保存。
8. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せずCONFLICT/定義差として双方保持。

## 主要出典 — 取得日 2026-09-08
### No.930 パチスロ ガールズ＆パンツァー
- オリンピア公式機種ページ: https://www.olympia.co.jp/newmachine/gup/
- オリンピア2015年発売機種: https://www.olympia.co.jp/official/products/2015.html
- K-Navi: https://p-kn.com/slot/2361/
- Pachinavi: https://pachinavi.net/machines/girls-und-panzer/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/12042/
- 期待値見える化: https://slotjin.com/slot/girls-und-panzer-reset/
- すろぱちくえすと reset: https://www.slopachi-quest.com/article/girl-pan-reset/
- すろぱちくえすと resetcheck: https://www.slopachi-quest.com/article/girl-pan-resetcheck/
- P-WORLD: https://www.p-world.co.jp/machine/database/7857

### QA 出ましたハクション大魔王
- HAZUSE: https://www.hazuse.com/i/det2/demasita/top.htm
- Cranky Seven: https://crankyseven.com/sp/demasitahakusyon-pc.htm
- 5号機クロニクル: https://5goki.com/sammy
- pacnk: https://pacnk.com/slot/tools/sh_demashitahakushondaimaou.html

## confidence
- No.930 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- No.930 identityManufacturer: OFFICIAL
- No.930 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.930 settingChangeBehavior: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_RESET
- No.930 carryOverBehavior: ANALYSIS_HIGH_MULTI_SOURCE
- No.930 purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.930 reset666CzBenefit: ANALYSIS_HIGH_MULTI_SOURCE_WITH_PERIOD_CORRECTION
- No.930 exactResetModeDistribution: UNVERIFIED_AFTER_RESEARCH
- No.930 resetDetection: PARTIAL_NON_DETERMINISTIC
- Hakushon reset QA: PARTIAL_UNVERIFIED_AFTER_RESEARCH_RECONFIRMED
