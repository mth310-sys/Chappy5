# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **671**
- latestMachineAdded: **めぞん一刻～夏色の風と～**（オリンピア）
- latestRecord: `docs/real_machine_db/machines/2012-07-02_maison-ikkoku-natsuiro-no-kaze-to.md`
- chronologicalFrontier: **2012-07-02**
- frontierLatestExactDateMachine: **めぞん一刻～夏色の風と～**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-07-02__NEXT_SAME_DAY_TENKU_NO_SYMPHONIA_HIKARI_WO_MOTOMETE**

## 今回の同期・時系列監査

- 最新mainのREADME全文、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「アイドルマスターライブインスロット」を確認して開始。
- INDEXは旧地点19件のまま。README規定どおり、より新しいLATEST_HANDOFFと実レコードを現在進捗の正本として使用。開始時は recordCount 670 / frontier 2012-07-02。
- LATEST_HANDOFF指定の最優先候補「めぞん一刻～夏色の風と～」をrepo検索し未登録を確認。
- K-Naviで全国導入開始2012-07-02、グリーンべると当時業界記事で2012-07-01納品開始予定を確認。納品日/ホール導入日の定義差として整合。
- 671件目として追加。2012-07-02同日群は未閉鎖。

## 今回の本線追加 — めぞん一刻～夏色の風と～

### 識別

- manufacturer: **オリンピア**
- releaseDate: **2012-07-02**
- modelName: **UNVERIFIED_AFTER_RESEARCH**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation: **5号機**
- systemType: **A+ART / CZ経由ART / セットストック+ゲーム数上乗せ**

### 性能コア

- 機械割主値: **97.2 / 98.8 / 100.3 / 104.3 / 110.4 / 119.4%**
- 設定6のみ119.5%表記もあり、丸め/転記差候補として保持。パチマガスロマガは119%丸め。
- BIG: **1/468.1 / 1/448.9 / 1/431.2 / 1/404.5 / 1/385.5 / 1/352.3**
- REG: **1/565.0 / 1/537.2 / 1/512.0 / 1/489.1 / 1/468.1 / 1/436.9**
- ボーナス合算: **1/256.0 / 1/244.5 / 1/234.1 / 1/221.4 / 1/211.4 / 1/195.0**
- ART初当り: **1/622.8 / 1/605.9 / 1/586.7 / 1/514.3 / 1/486.1 / 1/386.6**
- 50枚ベース: **約31～33G**（単一整理資料のためANALYSIS_SINGLE_RETROSPECTIVE）
- BIG約**204枚** / REG約**50枚**
- ART「ドラマチックタイム」: **1セット40～300G+α / 純増約1.4枚/G**
- 第1天井系はボーナス間規定Gで無限ART「ドラマチックタイムSP」。510/950/1500Gが主要ポイント。資料に99～1499G、100～1500G、1500G本天井の表現差があるため定義を分離。
- 第2天井は**1590G**でウェディングモード。1589G表記資料もあり、到達/消化完了の数え方差候補として保持。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_PARTIAL** — 設定変更時に天井到達までのゲーム数をクリア。本機固有のA～Dモード/低高確/ART状態の完全な変更契約は未確定。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH** — 当時攻略は「宵越し×」だが、純据え置き時の天井進捗・モード・状態保持契約まで直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE** — CrankySeven、2-9伝説で明記。当時天井攻略の宵越し×とも整合。
- `ceilingAfterReset`: **RESET_RESELECTS_OR_ALTERS_FIRST_CEILING_DISTRIBUTION__EXACT_NUMERIC_TABLE_UNVERIFIED** — 設定変更後は天井振り分けが変わる旨の攻略整理あり。ただし専用全振り分け表/最大短縮値は未確認。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH** — 通常時A～Dモード自体は確認したが、設定変更直後振り分けは未確定。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH** — 低確/高確の存在は確認、変更直後振り分けは未確定。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **CONFIRMED_QUALITATIVE_ONLY** — 当時攻略は通常850G狙いに対し設定変更確定台700G狙いを掲載。ただしこれは戦略値で、朝一当選率そのものではない。
- `resetPenalties`: **CONFIRMED** — 設定変更で前日の天井進捗を失う。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH** — ガックン/初期出目/液晶等の解析済み本機固有判別契約を確定できず。
- `publicMorningNumbers`: **PARTIAL_STRATEGY_NUMERIC_ONLY** — 通常850G/設定変更確定700Gという当時狙い目のみ。設定変更時規定G振り分け率や特定G以内当選率は未確認。

### 品質メモ

- 「めぞん一刻～夏色の風と～ / めぞん一刻 夏色 / めぞん一刻3 / オリンピア / 平和」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井リセット / 天井短縮 / 天井振り分け / モード / 高確 / ガックン / 50枚 / 1000円」を組み替えて再探索。
- K-Navi、P-WORLD、パチマガスロマガ、グリーンべると、2012年当時天井攻略、後年解析整理、旧機種回顧資料、中古実機流通資料を横断。
- K-Naviには本機専用「設定変更後の挙動」ページが存在するが現存キャッシュ本文を取得できず、見出しだけから具体仕様を補完していない。
- 後継/別スペックのめぞん一刻シリーズのreset情報は流用していない。

## 次回再開地点

1. **recordCount 671 / chronologicalFrontier 2012-07-02**から開始。
2. **2012-07-02同日群を継続**。最優先は **天空のシンフォニア ～光を求めて～（コルモ）**。repo検索では現時点未登録。性能コア＋resetBehavior v0.7を収集。
3. 2012-07-02同日群を完全に閉じてから07-03以降へ進む。
4. 次の既知K-Navi具体日アンカーは **2012-07-09 シンデレラブレイド（ネット）**。
5. 「夜王」は既存方針どおり2012年8月地点で再監査。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi: `https://p-kn.com/slot/1646/`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/5308/greenbelt`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6738`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/104/a.php`
- パチマガスロマガ ART: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/104/l.php`
- CrankySeven: `https://crankyseven.com/mezon-natuiro-pc.htm`
- 当時天井攻略: `https://macerate.seesaa.net/article/268277971.html`
- 2-9伝説: `https://29den.com/mezonikkoku3/`
- A-SLOT: `https://www.a-slot.com/SHOP/heiwa79.html`
- パチスロ解析ガイド: `https://pachislot-guide.net/2012/mezon-ikkoku-natsuiro/`

## GitHub commits

- めぞん一刻～夏色の風と～ machine record: `ec338d6afafcb2467d2f9ed9a0f0e1354b959577`
