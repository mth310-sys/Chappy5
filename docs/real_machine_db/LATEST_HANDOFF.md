更新日: 2026-09-09

## 現在地点
- recordCount: **1125**
- latestRecordAdded: **パチスロ 討鬼伝**（七匠）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-08-28_toukiden.md`
- chronologicalFrontier: **2017-08-28**
- frontierLatestMachine: **パチスロ 討鬼伝 — No.1125**
- schema: **resetBehavior v0.7**
- status: **2017-08-28_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1124「イミソーレ3V-30」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` ＋実レコードを進捗正本として採用。
- 開始時mainは **1124件 / chronologicalFrontier 2017-08-21 / 8/21群CLOSED / 2017-08-28群OPEN**。
- HANDOFF指定の次候補 **「パチスロ 討鬼伝」** をGitHubコード検索し、同名既存レコードなしを確認してNo.1125として新規登録。
- 七匠公式製品アーカイブで機種存在とミタマを核にしたゲーム性を確認。2017年検定通過記事で正式型式 **パチスロ討鬼伝N** を固定。
- 導入日はALL7・すろぱちくえすと・期待値見える化の **2017-08-28** をcanonical。ちょんぼりすたの **2017-08-27** は平均せずCONFLICT保持。
- 検定番号は型式名・メーカー・公安委員会・検定・7S等で資料系統を変えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 性能コアは複数解析で一致し、機械割 **97.9 / 98.9 / 100.1 / 104.8 / 107.5 / 115.5%**、ART初当たり **1/488 / 476 / 461 / 400 / 367 / 254**、ベース約 **35G/50枚**、ART純増約 **2.0枚/G**、討鬼RUSH **30～150G** を保存。
- 通常時は **1周期99G+α / 最大12周期**。12周期目はモードD（極モード）確定。
- resetBehavior v0.7は設定変更/純電断の直接表と公開数値を保存。設定変更で周期天井RESET・周期モード再抽選・ミタマ保留RESET、純電源OFF→ONでは周期天井/周期進行/周期モードCARRYOVER、ミタマ保留は一時非表示後に周期到達で再表示。
- 設定変更後天井は設定1～5が最大7周期、設定6のみ12周期12.5%。全設定共通でモードD（極モード）25.0%。
- ガックンは資料が **「おそらく可能」 vs 「判別不可」** と競合するため断定せず `CONFLICT_GAKKUN_DETECTION`。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1125 — パチスロ 討鬼伝
- manufacturer: **七匠**
- releaseDate canonical: **2017-08-28**
- releaseDate conflict: **2017-08-28 vs 2017-08-27**
- formalModelName: **パチスロ討鬼伝N**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ART / 周期管理 / 擬似ボーナス**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.9 / 98.9 / 100.1 / 104.8 / 107.5 / 115.5%**。
- ART初当たり: **1/488 / 476 / 461 / 400 / 367 / 254**。
- baseGamesPer50: **約35G/50枚**。
- netIncrease: **約2.0枚/G**。
- 討鬼RUSH: **1セット30～150G**。
- 討鬼ボーナス: **30G**、真討鬼ボーナス: **60G**。
- 通常周期: **99G+α**、通常最大天井 **12周期**。

### resetBehavior v0.7
- settingChange: **周期天井RESET / 周期モードRESELECT / ミタマ保留RESET**。
- pure power OFF→ON: **周期天井・周期進行・周期モードCARRYOVER / ミタマ保留は一時非表示後再表示**。
- reset ceiling distribution:
  - 設定1: **1周期12.5 / 3周期37.5 / 7周期50.0 / 12周期0%**
  - 設定2: **12.5 / 43.8 / 43.8 / 0%**
  - 設定3: **12.5 / 37.5 / 50.0 / 0%**
  - 設定4: **12.5 / 43.8 / 43.8 / 0%**
  - 設定5: **12.5 / 37.5 / 50.0 / 0%**
  - 設定6: **12.5 / 37.5 / 37.5 / 12.5%**
- reset cycle mode:
  - 設定1/3/5: **B37.5 / C37.5 / D25.0%**
  - 設定2/4/6: **B25.0 / C50.0 / D25.0%**
  - モードA: **0%**、モードD=極モード。
- resetBenefits: **設定1～5最大7周期 / 全設定25%極モード / 1or3周期選択が大幅優遇**。
- resetDetection: ガックンは **CONFLICT**。朝一極モードはリセット可能性UPのヒントだが確定判別ではない。ステージ単独判別不可。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## conflicts / unresolved
- releaseDate: **2017-08-28 vs 2017-08-27**。canonical 2017-08-28。
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**。
- gakkun: **おそらく可能 vs 判別不可**。平均/断定せずCONFLICT。
- 設定変更時の周期モード以外の低確/高確等内部状態振り分け: **UNVERIFIED_AFTER_RESEARCH**。

## 2017-08-21群監査 — CLOSED
- No.1118 イノキロードトゥゴッド
- No.1119 パチスロ ロボットガールズZ
- No.1120 戦国乙女～TYPE-A～
- No.1121 戦国パチスロ花の慶次～天を穿つ戦槍～
- No.1122 ぱちスロ 仮面ライダーBLACK
- No.1123 神の左手 悪魔の右目
- 遡及漏れ「イミソーレ3V-30」もNo.1124で回収済み。

## 2017-08-28群 — OPEN
- No.1125 **パチスロ 討鬼伝** — 登録済み。
- 次候補 **戦国美少女 織田信奈の野望** は先行再確認済み:
  - HAZUSE: 導入開始 **2017-08-28**、メーカー **D-light**、型式 **織田信奈の野望S**、検定番号 **7S0411**。
  - パチビー、すろぱちくえすとも **2017-08-28** で一致。
  - ちょんぼりすたのみ **2017-08-27** のため、次回レコード化時に日付CONFLICTとして保持予定。
- 「戦国美少女 織田信奈の野望」処理後、8/28群を全メーカー横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は本線No.1125を優先し、QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1125を再取得。
2. **1125件 / chronologicalFrontier 2017-08-28 / 2017-08-28群OPEN** を正本として継続。
3. **最優先:「戦国美少女 織田信奈の野望」No.1126候補**。重複確認後、performance core + resetBehavior v0.7を収集・登録。
4. その後8/28群を全メーカー横断再監査し、漏れ回収後にCLOSED判定。
5. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1125 パチスロ 討鬼伝
- 七匠公式 機種情報: https://www.nanashow.co.jp/product/
- ALL7 2017年8月導入予定一覧: https://www.all7.jp/plans/index/2017/08
- P-MEDIA 検定通過（型式パチスロ討鬼伝N）: https://p-media.info/%E5%92%8C%E9%A2%A8%E3%82%B2%E3%83%BC%E3%83%A0%E7%89%88%E6%A8%A9%E3%81%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%8C%96%EF%BC%8F%E4%B8%83%E5%8C%A0%E3%81%95%E3%82%93%E3%81%8B%E3%82%89%E3%80%8C%E3%83%91/
- P-WORLD: https://www.p-world.co.jp/machine/database/8469
- すろぱちくえすと: https://www.slopachi-quest.com/article/toukiden/
- 期待値見える化: https://slotjin.com/zone/toukiden/
- ちょんぼりすた: https://chonborista.com/slot/nanashow/43458/
- パチ7: https://pachiseven.jp/machines/5261/cutout/66
- SLOT HACK: https://slothack.net/matome/3346/

### 次候補 戦国美少女 織田信奈の野望
- HAZUSE: https://hazuse.com/machine/pachislot/7S0411/
- パチビー: https://www.pachibee.jp/machines/movie/217080001
- 大一/D-light公式: https://daiichi777.jp/product/detail/157/slot_odanobuna
- すろぱちくえすと: https://www.slopachi-quest.com/article/slot-odanobunanoyabou/
