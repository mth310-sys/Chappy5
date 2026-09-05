# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **742**
- latestMachineAdded: **ハローサンタ アルティメットマシンガンバージョン**（タイヨー）
- latestRecord: `docs/real_machine_db/machines/2013-06-17_hello-santa-ultimate-machinegun-version.md`
- chronologicalFrontier: **2013-06-17**
- frontierLatestExactDateMachine: **ハローサンタ アルティメットマシンガンバージョン**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-06-17_GROUP__NEXT_SORA_NO_KISEKI_THEN_FULL_SAME_DAY_AUDIT**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-06-17_snipai72.md` を再読。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **741** / chronologicalFrontier **2013-06-17** / 06-17群OPEN。
- 06-17群の残対象 **ハローサンタ アルティメットマシンガンバージョン**をrepo重複確認後、742件目として追加。
- K-Navi/ALL7で06-17群は **スナイパイ72 / ハローサンタ アルティメットマシンガンバージョン / パチスロ英雄伝説 空の軌跡 THE ANIMATION** を確認。残りは空の軌跡1機のため群はOPEN。

## 今回追加 — ハローサンタ アルティメットマシンガンバージョン

### identity / 性能コア

- manufacturer: **タイヨー**。
- 型式名: **ハローサンタUMV-S**。
- releaseDate: **2013-06-17**。K-Navi/ALL7/当時解析で一致。
- systemType: **5号機 ART（ゲーム数上乗せ+セットストック型）**。
- 機械割: **96.5 / 98.2 / 100.1 / 103.5 / 108.5 / 113.2%**。
- ART初当たり: **1/279.1 / 268.3 / 254.5 / 242.3 / 225.2 / 190.2**。
- 50枚ベース: **30.8 / 30.9 / 30.9 / 30.9 / 30.9 / 31.0G**（設定1～6）。
- ART「マシンガンラッシュ」: **1セット50G+α / 純増約2.0枚/G**。
- アルティメットフリーズボーナス: **約60枚 + ART**。
- 通常A/Bのゲーム数天井は最大 **1280G**、天国は最大 **96G**。
- 別系統のハズレ天井は通常A **11～20G**、通常B **9～20G**、天国 **3～16G**、マシンガン **1～5G**。

### resetBehavior v0.7

- 本機固有天井整理で **設定変更時にゲーム数天井G数リセット**を確認。gameCounterReset.settingChange = **CLEAR_CONFIRMED**。
- パチマガスロマガには本機専用「朝イチ・設定変更」導線が現存するが、検索取得できた本文から設定変更時の内部モード/状態/初期液晶値までは安全に固定できなかった。
- 機種名、型式 `ハローサンタUMV-S`、タイヨー、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/電断/天井/モード/ガックンを組み替え、当時スペック記事・K-Navi・P-WORLD・パチマガスロマガ・2-9伝説・Re.design・旧解析系を横断。
- 設定変更時の具体的モード振り分け/内部状態: **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時のゲーム数天井進捗・モード・連続ハズレ履歴: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの純電源OFF→ON時契約: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の固定短縮天井/天国優遇/マシンガン優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン/初期出目/液晶等による本機固有の確定変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 設定変更により前日のゲーム数天井進捗が消えることは朝一天井狙い上の不利要素として保持。
- resetQaStatus: **RESEARCHED__SETTING_CHANGE_GAME_COUNT_CEILING_RESET_CONFIRMED__RESET_MODE_STATE_CARRYOVER_POWER_CYCLE_AND_DETECTION_UNVERIFIED_AFTER_RESEARCH**。

## 2013-06-17同日群 / 次境界

- **スナイパイ72**（ネット）— 登録済み741件目。
- **ハローサンタ アルティメットマシンガンバージョン**（タイヨー）— 今回登録742件目。
- **パチスロ英雄伝説 空の軌跡 THE ANIMATION**（ニューギン）— 次対象。
- よって06-17群は **OPEN**。空の軌跡を処理後、K-Navi/ALL7に加えて別メーカー/当時導入一覧でも同日漏れ監査してCLOSED判定する。

## 遡及resetBehavior QA 進捗

- 本線収集を優先。既存性能値は無駄に再調査していない。
- QAカーソルは **空手バカ一代直後の実ファイル順**を維持し、resetBehavior既収集機をスキップして最初の欠損機を後続リレーで補完する。

## 次回再開地点

1. **recordCount 742 / chronologicalFrontier 2013-06-17 / 06-17群OPEN** から開始。
2. **パチスロ英雄伝説 空の軌跡 THE ANIMATION**を743件目候補としてrepo重複確認 → 性能コア + resetBehavior v0.7を収集・保存。
3. 06-17同日群を全メーカー横断監査し、漏れがなければCLOSED。
4. 次の具体日境界を時系列監査して前進する。
5. ハローサンタUMV-Sの設定変更時モード振り分け、据え置き/純電断契約、変更判別は後続QAで本機固有直接資料が見つかった場合のみ補完。

## 主要出典 — 取得日 2026-09-06

### ハローサンタ アルティメットマシンガンバージョン

- K-Navi 機種トップ: `https://p-kn.com/slot/1844/`
- ALL7 2013年6月導入予定一覧: `https://www.all7.jp/plans/index/2013/06`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7060`
- パチマガスロマガ 基本情報: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/77/a.php`
- パチマガスロマガ ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/77/l.php`
- パチマガスロマガ 機種総合/朝イチ・設定変更導線: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/77/taiyo_slot_77.php`
- K-Navi 内部モードの基本: `https://p-kn.com/slot/1844/44473/`
- 2-9伝説 天井・設定変更: `https://29den.com/hellosanta-ultimate/`
- 2013-04-07当時スペック記事: `https://slosoku.com/archives/26459761.html`
- Re.design: `https://www.redesign777.tokyo/Spec/SlotView?flag=True&id=S2015030207501601`
- 中一商事 型式/仕様: `https://www.nakaiti.com/html/sTaiyo013.html`
- パチスロ解析ガイド: `https://pachislot-guide.net/2013/hello-santa-ultimate/`
