# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **934**
- latestRecordAdded: **プレミアムビンゴ**（ベルコ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-02_premium-bingo.md`
- chronologicalFrontier: **2015-11-02**
- frontierLatestMachine: **プレミアムビンゴ**
- schema: **resetBehavior v0.7**
- status: **2015-11-02_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.933 `2015-11-02_is-infinite-stratos.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本 recordCount **933** / 2015-11-02群OPEN。
- 指定された次未処理 **プレミアムビンゴ** をNo.934として追加。

## No.934 — プレミアムビンゴ
- record: `docs/real_machine_db/machines/2015-11-02_premium-bingo.md`
- manufacturer: **ベルコ**
- releaseDate: **2015-11-02**
- formalModelName: **スーパービンゴネオM1**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 旧基準AT / 周期抽選+CZ / G数上乗せ+継続型AT**

### performanceCore
- 機械割: **97.13 / 99.04 / 101.05 / 104.06 / 107.18 / 111.00%**。
- BC初当たり: **1/433.99 / 407.68 / 387.71 / 357.75 / 325.29 / 291.30**。
- ベルコ公式BC値は **1/433.9 / 407.6 / 387.7 / 357.7 / 325.2 / 291.3** で丸め差。
- 50枚ベース: **約29G**。
- AT純増: **約2.8枚/G**。
- BC: **1セット33G+α**。
- 通常最大天井: **AT間1222G**。モードBは **555G+前兆**。

### resetBehavior v0.7
- 設定変更: **天井再セット、内部状態再抽選、内部モード再抽選、カジノステージ開始**。
- 据え置き/純電源OFF→ON: **天井・内部状態・内部モード引継ぎ**。表示ステージはカジノ。
- 設定変更/BC終了時モード振り分け: **モードA 63% / モードB 37%**。
- モードA最大天井1222G、モードBは555G+前兆のため、設定変更時は約37%で浅い天井相当を選択。
- 設定変更専用のこれ以上の固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時の高確等、具体的な初期状態振り分け数値: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有リールガックン契約: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetDetection
- ゾロ目G数のフェイク前兆は内部G数依存。朝一の当日ゾロ目で前兆が出るか、前日最終+当日G数の合計ゾロ目で出るかがリセット/据え置き推測材料になる。
- コインランプ点灯=据え置き可能性、消灯=リセット可能性とする当時実戦情報あり。ただしホール対策可能で確定判別ではない。

### quality / conflicts
- **導入日CONFLICT**: K-Navi 2015-08-06発表会記事は **11/16導入予定**。一方、K-Navi機種ページ、P-Summa当時記事、パチセブン、複数攻略資料は **11/02導入開始**。本DBは実ホール導入を11/02 canonical、11/16は発表時予定日として分離保持。
- 機械割精密値と1桁丸め値は丸め差。
- 期待値見える化の朝一ページに **A63% / B67%** という合計130%の表記があるが、本文は「AT終了後と同じ」、同系統別ページとK-Navi/アタリ7は **63/37**。67%は転記誤りとしてcanonicalへ採用しない。

## 2015-11-02群 — OPEN
処理済み:
1. パチスロ龍が如く OF THE END — No.928
2. ぱちスロAKB48 バラの儀式 — No.929
3. パチスロ ガールズ＆パンツァー — No.930
4. ハイスクールD×D — No.931
5. 銀河機攻隊 マジェスティックプリンス — No.932
6. パチスロ IS〈インフィニット・ストラトス〉 — No.933
7. プレミアムビンゴ — No.934

未処理の強候補:
1. **戦国パチスロ 花の慶次～戦極めし傾奇者の宴～ — EXCITE**

注意:
- 11/02群はまだCLOSEDにしない。
- 次機処理後、K-Naviカレンダー・メーカー別一覧・業界発表を再横断し、同日群の漏れを監査する。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-11_demashita-hakushon-daimaou.md**
- retroQaNextInspection: **2005-12_nobunaga-no-yabou-tenka-sousei-r.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE / 本線優先のため今回カーソル変更なし**

## 次回再開地点
1. **recordCount 934 / chronologicalFrontier 2015-11-02 / 11/02群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.934を再取得。
3. 本線: 次の未処理 **戦国パチスロ 花の慶次～戦極めし傾奇者の宴～（EXCITE）** を性能コア + resetBehavior v0.7で登録。
4. その後11/02群を全メーカー再監査し、漏れがなければ `2015-11-02_GROUP_CLOSED_FOR_CURRENT_RESEARCH` 判定。
5. 続いて11/03～11/08境界を監査し、次の強アンカー **2015-11-09 パチスロヤッターマン（三洋物産）** へ進む。
6. 遡及QA次候補は `2005-12_nobunaga-no-yabou-tenka-sousei-r.md`。本線収集を優先。
7. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
8. 競合は平均せずCONFLICT/定義差として双方保存。
9. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 実績異常/噂を公表性能や内部解析確定値へ昇格させない。

## 主要出典 — 取得日 2026-09-08
### No.934 プレミアムビンゴ
- BELLCO公式: https://www.s-bellco.co.jp/products/slot/puremium_superbingo/
- K-Navi機種ページ: https://p-kn.com/slot/2329/
- K-Navi 2015-08-06発表会: https://p-kn.com/topics/exhibition/1385/
- P-Summa: https://psumma.jp/pachislo/16846/
- パチセブン: https://pachiseven.jp/machines/4596/cutout/70
- アタリ7: https://www.atari7.com/slot/date1439268148.php
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/13832/
- 2-9伝説: https://2-9densetsu.com/premiumbingo/
- 期待値見える化 通常: https://slotjin.com/zone/bingopremium/
- 期待値見える化 朝一: https://slotjin.com/slot/bingopremium-reset/
- 真パチスロ備忘録: https://sin-surobi.com/purebin/12938/

## confidence
- No.934 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SCHEDULE_CONFLICT
- No.934 officialIdentity: OFFICIAL
- No.934 formalModelName: ANALYSIS_MULTI_SOURCE_SECONDARY
- No.934 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OFFICIAL_HIT_RATES
- No.934 settingChangeGameCounterReset: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.934 carryOverGameCounter: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.934 purePowerCycleCeilingModeState: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.934 resetModeDistribution: ANALYSIS_HIGH_MULTI_SOURCE
- No.934 resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
- No.934 resetDetection: ANALYSIS_SECONDARY / PERIOD_PRACTICE
