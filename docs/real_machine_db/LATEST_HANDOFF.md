# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **820**
- latestRecordAdded: **B-MAX**（アクロス）— 2014-05-26
- latestRecord: `docs/real_machine_db/machines/2014-05-26_b-max.md`
- chronologicalFrontier: **2014-05-26**
- frontierLatestMachine: **B-MAX**
- schema: **resetBehavior v0.7**
- status: **2014-05-26_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、直前レコード `docs/real_machine_db/machines/2014-05-19_haisai-cho-tokkyu-turbo.md` を再読して正本化。
- INDEXは旧集約状態のため、README規定に従いLATEST_HANDOFFと実レコードを進捗正本として継続。
- 作業開始時の正本は **819件 / 2014-05-19 / 05-19_GROUP_CLOSED / 05-20〜05-25_BOUNDARY_CLOSED**。
- handoff指定の次の未処理 **B-MAX（アクロス）— 2014-05-26** が未登録であることを最新main検索で再確認し、820件目として追加。

## 今回追加 — B-MAX

### identity / 性能コア

- manufacturer: **アクロス**。
- formalModelName: **ビーマックスMA**。
- inspectionNumber: **4S0204**。
- hall start: **2014-05-26**。K-Navi、HAZUSEで一致。
- generation/system: **5号機 / ノーマルAタイプ / BIG後条件付きRT / 高技術介入**。
- BIG: **1/352.3 → 1/327.7**。
- REG: **1/368.2 → 1/327.7**。
- bonus combined: **1/180.0 → 1/163.8**。
- baseGamesPer50: **38.67〜42.86G/50枚**。パチ7の38.7〜42.9Gと整合。
- 完全攻略時 payout: **101.5 / 102.5 / 103.4 / 104.6 / 106.1 / 108.5%**。HAZUSE・5号機クロニクル一致、当時業界記事も設定1設計100%超を確認。
- 平均的手順参考 payout: **97.3 / 98.3 / 99.2 / 100.4 / 101.8 / 104.1%**。完全攻略系列とは条件差なので統合しない。
- BIG: 385枚超払い出し終了。当時業界発表の実獲得目安 **約316枚+RT**。
- REG: 12Gまたは8回入賞、技術介入で **最大112枚**。
- BIG後RT: **純増約0.7枚/G、平均約30G**、チェリー入賞またはボーナス成立で終了。
- ceiling: **天井非搭載**。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- settingChangeBehavior: BIG後RT状態等の設定変更時処理を本機固有の直接資料で固定できず **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 純据え置き時のRT状態引継ぎは **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 設定変更なし電源OFF→ON時のRT状態保持/クリアは **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: 通常時ゲーム数天井非搭載のため **NOT_APPLICABLE**。
- ceilingAfterReset: 設定変更専用短縮天井/救済G数は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: 通常時ゲーム数解除モード/天国等は **NOT_APPLICABLE**。
- stateAfterReset: BIG後RT状態の設定変更/据え置き/純電断比較契約は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 本機固有ガックン/初期出目/ランプ等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL**。

## conflicts / safeguards

- 完全攻略時101.5〜108.5%と平均的手順97.3〜104.1%はプレイ条件が異なるため **DEFINITION_DIFFERENCE**。平均しない。
- BIG獲得表現は「約316枚」「約320枚」「最大333枚」「MAX375枚」等が資料ごとに混在するため、平均/最大/払い出し/RT込みの定義を混ぜず、当時業界記事の約316枚+RTを主記述とした。
- 1998年4号機B-MAXの仕様/resetBehaviorを混入しない。

## 2014-05-26群 / 境界

K-Navi全国一斉導入カレンダー掲載パチスロ:
1. **B-MAX**（アクロス）— No.820 / 処理済み
2. **麻雀格闘倶楽部**（KPE）— 未処理
3. **パチスロ御伽屋HANZO**（タイヨーエレック）— 未処理

- よって **2014-05-26_GROUP_OPEN** を維持。

## 遡及 resetBehavior QA

### 今回QA — パチスロ暴れん坊将軍

- 対象: `docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`。
- 2026-09-07にメーカー公式、業界記事、P-WORLD、パチマガスロマガ旧攻略、旧DB、実戦/回顧資料を再探索。
- 設定変更/据え置き/純電断時のRT内部状態、設定変更判別、公開朝一数値を直接固定する新規根拠は得られず、推測補完しない。
- `schemaVersion: v0.7`、`resetQaLastUpdated: 2026-09-07`、`publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH` 等を明示して更新。
- 既存 **coreStatus: COMPLETE_CORE** は維持。
- resetBehaviorQA: **PARTIAL** を維持。
- Git履歴で暴れん坊将軍追加後の次の実レコード追加が **仮面ライダーDX〜走れ！スーパーバイク編** であることを確認。
- 次QAカーソル: `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`。

## 次回再開地点

1. **recordCount 820 / chronologicalFrontier 2014-05-26 / 05-26_GROUP_OPEN** から開始。
2. 最新mainで既存登録を再確認してから、次の未処理 **麻雀格闘倶楽部（KPE）— 2014-05-26** をNo.821候補として処理。
3. 続いて **パチスロ御伽屋HANZO（タイヨーエレック）— 2014-05-26**。
4. 05-26群処理後に全メーカー横断再監査しCLOSED判定。
5. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md` から再開。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### 境界 / 導入日
- K-Navi 2014年5月全国一斉導入カレンダー: `https://p-kn.com/calendar/201405/`

### B-MAX
- K-Navi: `https://p-kn.com/slot/2055/`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0204/`
- グリーンべると 2014-04-25: `https://web-greenbelt.jp/00006198/`
- 娯楽産業 2014-04-18: `https://www.goraku-sangyo.com/across%EF%BC%8F%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8Cb-max%E3%80%8D%E7%99%BA%E8%A1%A8/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/03/a.php`
- パチ7 50枚G: `https://pachiseven.jp/machines/4123/cutout/70`
- 5号機クロニクル: `https://5goki.com/universal`
- イチカツ 平均/完全攻略系列: `https://ichikatsu.com/settei1-100/`
- 1GAMEてつブログ 2014-04-18: `https://pachibaka.com/archives/37623420.html`

### QA — 暴れん坊将軍
- 藤商事公式: `https://www.fujimarukun.co.jp/products/abare_slot/`
- グリーンべると: `https://web-greenbelt.jp/00003966/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/4574`
- パチマガスロマガ旧攻略: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/06/a.php`
