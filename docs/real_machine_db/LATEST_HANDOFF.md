# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **669**
- latestMachineAdded: **餓狼伝説☆双撃**（SNKプレイモア）
- latestRecord: `docs/real_machine_db/machines/2012-07-02_garou-densetsu-sougeki.md`
- chronologicalFrontier: **2012-07-02**
- frontierLatestExactDateMachine: **餓狼伝説☆双撃**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-07-02__NEXT_SAME_DAY_IDOLMASTER_LIVE_IN_SLOT**

## 今回の同期・時系列監査

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「スーパー5」を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFと実レコードを正本化。開始時は recordCount 668 / frontier 2012-07-02。
- LATEST_HANDOFF指定の最優先候補「餓狼伝説☆双撃」をrepo検索し未登録を確認。
- K-Naviでホール導入開始2012-07-02を確認し、当時グリーンべるとの7月上旬納品予定とも整合。669件目として追加。
- 2012-07-02同日群は未閉鎖。次候補は「アイドルマスターライブインスロット」。

## 今回の本線追加 — 餓狼伝説☆双撃

### 識別

- manufacturer: **SNKプレイモア**
- releaseDate: **2012-07-02**
- modelName: **UNVERIFIED_AFTER_RESEARCH**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation: **5号機**
- systemType: **A+ART / CZ搭載 / ゲーム数上乗せ+セットストック**

### 性能コア

- 主機械割: **97.1 / 99.0 / 100.3 / 106.2 / 110.3 / 115.1%**
- 別系列: **96.8 / 98.7 / 99.9 / 105.8 / 109.8 / 114.6%** → 条件差未確定のため **CONFLICT**
- BIG: **1/399.6 / 1/372.4 / 1/390.1 / 1/360.1 / 1/372.4 / 1/348.6**
- REG: **1/728.2 / 1/668.7 / 1/682.7 / 1/606.8 / 1/606.8 / 1/546.1**
- ボーナス合算: **1/258.0 / 1/239.2 / 1/248.2 / 1/226.0 / 1/230.8 / 1/212.8**
- ART初当り: **1/513.7 / 1/497.5 / 1/490.1 / 1/434.4 / 1/415.5 / 1/369.9**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- BIG: **約204枚** / REG: **約36枚**
- ART「餓狼チャンス」: **1セット50G+α / 純増約1.6枚/G**
- 第1天井: **ボーナス+ART間864G → ART確定**
- 第2天井: **ボーナス間1399G → ART3セット以上確定**

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_PARTIAL_ANALYSIS_SINGLE_PERIOD_SOURCE** — ART状況クリア、天井までのG数クリア、内部状態移行抽選あり。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE** — 864G/1399G両天井の進捗を設定変更でリセット。
- `ceilingAfterReset`: **NO_SHORTENING_CONFIRMED; NORMAL_CEILINGS_RESTART_FROM_ZERO**
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `stateAfterReset`: **CONFIRMED_RELOTTERY_EXISTENCE_RATE_UNVERIFIED** — 内部状態移行抽選あり、具体振り分け未確認。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **前日天井進捗は設定変更で失われるため宵越し天井狙いには不利**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**

### resetBehavior品質メモ

- 「餓狼伝説☆双撃 / 餓狼伝説 双撃 / SNK PLAYMORE」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 天井短縮 / 内部状態 / モード / ガックン / 50枚 / 1000円」を組み替えて再探索。
- K-Navi、P-WORLD、パチマガスロマガ、pacnk、当時解析、天井回顧DB、実機販売資料、業界記事を横断。
- 設定変更時のART状況クリア・天井G数クリア・内部状態移行抽選ありは当時本機専用解析で確認。天井G数リセットは後年別系統でも一致。
- 据え置き・単純電源OFF→ONは設定変更の反対挙動を自動推定せずUNVERIFIED。
- 50枚ベースは表記揺れと資料系統を変えて再探索したが直接値を確定できず、逆算していない。

## CONFLICT / 品質メモ

- payoutRate: **97.1/99.0/100.3/106.2/110.3/115.1%** と **96.8/98.7/99.9/105.8/109.8/114.6%** の2系列。単純丸め差ではないため平均せずCONFLICT。
- P-WORLD現存ページの「ART初当り」欄にはボーナス合算値が表示されるラベル/転記異常がある。ART初当り主値はK-Navi等で一致する **1/513.7～1/369.9** を採用。

## 次回再開地点

1. **recordCount 669 / chronologicalFrontier 2012-07-02**から開始。
2. **2012-07-02同日群を継続**。最優先は **アイドルマスターライブインスロット（Sammy）**。repo重複確認後、性能コア＋resetBehavior v0.7を収集。
3. その後、同日群を飛ばさず以下を順に重複確認・未登録処理。
   - めぞん一刻～夏色の風と～（オリンピア）
   - 天空のシンフォニア ～光を求めて～（コルモ）
4. 2012-07-02同日群を完全に閉じてから07-03以降へ進む。
5. 次の既知K-Navi具体日アンカーは **2012-07-09 シンデレラブレイド（ネット）**。
6. 「夜王」は既存handoff方針どおり2012年8月地点で再監査。
7. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi: `https://p-kn.com/slot/1653/`
- グリーンべると: `https://web-greenbelt.jp/00001465/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6742`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/40/a.php`
- 当時スペック記事: `https://ameblo.jp/samurai777net/entry-11258058953.html`
- pacnk機種トップ: `https://pacnk.com/slot/2012/garousougeki/top.php`
- pacnk設定判別: `https://pacnk.com/slot/tools/sh_garousougeki.html`
- 2-9伝説: `https://29den.com/garoudensetsu/`
- 当時設定変更解析: `https://ameblo.jp/urametalkids/entry-11431845524.html`
- 中一商事: `https://www.nakaiti.com/html/sSNK088.html`

## GitHub commits

- 餓狼伝説☆双撃 machine record: `e1960532d6bc2f3d718f1d83331eaf489bcb0563`
