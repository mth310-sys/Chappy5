# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **672**
- latestMachineAdded: **天空のシンフォニア ～光を求めて～**（コルモ）
- latestRecord: `docs/real_machine_db/machines/2012-07-02_tenkuu-no-symphonia-hikari-wo-motomete.md`
- chronologicalFrontier: **2012-07-02**
- frontierLatestExactDateMachine: **天空のシンフォニア ～光を求めて～**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-07-02__NEXT_2012-07-09_CINDERELLA_BLADE**

## 今回の同期・時系列監査

- 最新mainのREADME全文、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「めぞん一刻～夏色の風と～」を確認して開始。
- INDEXは旧地点19件のまま。README規定どおり、より新しいLATEST_HANDOFFと実レコードを進捗正本として使用。開始時は recordCount 671 / frontier 2012-07-02。
- LATEST_HANDOFF指定の最優先候補「天空のシンフォニア ～光を求めて～」をrepo検索し未登録を確認。
- K-Navi 2012年7月導入カレンダーの7/2パチスロ群は「スーパー5 / 餓狼伝説☆双撃 / アイドルマスターライブインスロット / めぞん一刻～夏色の風と～ / 天空のシンフォニア ～光を求めて～」。5機すべて登録済みとなったため、K-Navi基準の2012-07-02同日群をCLOSED。
- 672件目として追加。次のK-Navi具体日アンカーは2012-07-09「シンデレラブレイド」。

## 今回の本線追加 — 天空のシンフォニア ～光を求めて～

### 識別

- manufacturer: **コルモ**
- releaseDate key: **2012-07-02**
- releaseDate conflict: **K-Navi 2012-07-02 vs パチスロ解析ガイド 2012-07-23～**
- modelName: **テンクウノシンフォニアヒカリヲモトメテ**
- approvalNumber: **2S0338**
- generation: **5号機**
- systemType: **ART専用系 / ゲーム数上乗せ+セットストック**

### 性能コア

- 機械割主系列: **97.82 / 98.92 / 101.87 / 106.56 / 107.45 / 110.37%**
- ART初当たり主系列: **1/164 / 1/150 / 1/159 / 1/141 / 1/151 / 1/131**
- ハイパー封印モード: **1/2154.94 / 1/2154.94 / 1/2089.64 / 1/2089.64 / 1/2089.64 / 1/2089.64**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- ART「封印モード」: **1セット30G+α / 約+2.1枚/G**
- ハイパー封印モード: **約207枚**
- 通常天井: **ART終了後901GでART超高確へ移行**
- P-WORLDでは天井到達後のART初当たりは**最低3セット以上**。

### 主要CONFLICT

- 導入日: K-Naviは全国一斉導入開始**2012-07-02**。パチスロ解析ガイドは**2012-07-23～**。2012-07-22付当時天井攻略記事も新台として扱うため、日付を平均化せずCONFLICT保持。本線キーはK-Naviの具体日と前handoff指定に従い7/2。
- 機械割: P-WORLD/パチマガスロマガ/A-SLOT系列 **97.82/98.92/101.87/106.56/107.45/110.37%** に対し、2-9伝説 **97.8/98.3/102.3/106.0/107.6/110.0%**。丸め差では説明できない設定があるためCONFLICT。
- ART初当たり: P-WORLD/パチマガスロマガ/A-SLOT系列 **1/164,1/150,1/159,1/141,1/151,1/131** に対し、2-9伝説 **1/178.4,1/161.5,1/172.0,1/151.3,1/162.9,1/140.3**。平均化しない。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_PARTIAL** — 設定変更で天井G数リセット。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH** — 純据え置き時の901Gカウンタ/状態/ART関連状態の本機固有契約を直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE** — 2-9伝説と2012年当時天井攻略で照合。
- `ceilingAfterReset`: **NO_SEPARATE_SHORTENED_CEILING_CONFIRMED** — 変更後専用短縮天井の公開値は未確認。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NO_PUBLIC_NUMERIC_RESET_BENEFIT_CONFIRMED**
- `resetPenalties`: **CONFIRMED** — 設定変更で前日ART間天井進捗を失う。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `publicMorningNumbers`: **UNVERIFIED_AFTER_RESEARCH**

### 品質メモ

- 「天空のシンフォニア～光を求めて～ / 天空のシンフォニア 光を求めて / シンフォニア2 / テンクウノシンフォニアヒカリヲモトメテ / コルモ」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF / 電断 / 天井 / 901G / モード / 状態 / 高確 / ガックン / 50枚 / 1000円」を組み替えて再探索。
- P-WORLD、K-Navi、パチマガスロマガ、2-9伝説、2012年当時天井攻略、パチスロ解析ガイド、A-SLOT、回顧/実機資料を横断。
- 50枚ベース、純据え置き、単純電断、設定変更時モード/状態、ガックン等は十分再探索しても直接確定できず、一般論で補完していない。
- 初代「天空のシンフォニア」の仕様は流用していない。

## 次回再開地点

1. **recordCount 672 / chronologicalFrontier 2012-07-02 / 07-02 group CLOSED**から開始。
2. **2012-07-03～07-08境界監査**を行い、具体日漏れがなければ **2012-07-09「シンデレラブレイド」（ネット）**を次の本線候補としてrepo重複確認 → 導入日照合 → 性能コア＋resetBehavior v0.7を収集。
3. K-Naviはシンデレラブレイドのホール導入開始を**2012-07-09**と明記。
4. 07-09同日群を完全に閉じてから07-10以降へ進む。
5. 「夜王」は既存方針どおり2012年8月地点で再監査。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi 2012年7月導入カレンダー: `https://p-kn.com/calendar/201207/`
- K-Navi 封印モード: `https://p-kn.com/slot/1656/39185/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6745`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/09/h.php`
- 2-9伝説: `https://29den.com/tenkuunosinfonia/`
- 当時天井攻略: `https://mezase20.com/blog-entry-590.html`
- パチスロ解析ガイド: `https://pachislot-guide.net/2012/sinfonia2/`
- A-SLOT: `https://www.a-slot.com/SHOP/colmo3.html`

## GitHub commits

- 天空のシンフォニア ～光を求めて～ machine record: `9f5f9ce480f5c8e3eb6c7ea5e6288e67faa17aa9`
