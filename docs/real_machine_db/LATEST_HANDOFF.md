# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **676**
- latestMachineAdded: **メガミリオネア**（ラスター製 / WIN NET TECHNOLOGY・メテオ系販売資料あり）
- latestRecord: `docs/real_machine_db/machines/2012-07-30_mega-millionaire.md`
- chronologicalFrontier: **2012-07-30**
- frontierLatestExactDateMachine: **メガミリオネア**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-07-30__NEXT_MY_JUGGLER_II**

## 今回の同期・時系列監査

- 最新mainのREADME全文、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「シオサイA-30」を確認して開始。
- INDEXは旧地点19件のまま。README規定どおりLATEST_HANDOFFと実レコードを進捗正本として使用。開始時は recordCount 675 / frontier 2012-07-23。
- LATEST_HANDOFF指定の次候補「メガミリオネア」をrepo検索し未登録を確認。
- K-Navi機種ページはホール導入開始2012-07-30、2012-06-11発表会速報も7月30日導入予定とするため676件目として追加。
- 2012-07-30同日群は未閉鎖。handoff既知の次候補「マイジャグラーII」（北電子）もrepo未登録を確認済み。

## 今回の本線追加 — メガミリオネア

### 識別

- manufacturer: **ラスター（製造）**。K-Naviはウィンネット表記、当時業界記事はメテオ発表・ラスター製とするため、WIN NET TECHNOLOGY / メテオ系の企画・販売表記を注記。
- releaseDate key: **2012-07-30**
- generation: **5号機**
- systemType: **ART専用 / BR非搭載 / セットストック+ゲーム数上乗せ**
- modelName: **UNVERIFIED_AFTER_RESEARCH**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**

### 性能コア

- 機械割はCONFLICT。
  - P-WORLD / CrankySeven系列: **95.49 / 98.72 / 101.79 / 104.74 / 109.34 / 119.1%**（CrankySevenは丸め表示）
  - K-Navi系列: **95.8 / 99.0 / 102.2 / 104.9 / 109.7 / 119.4%**
- ART設定別初当たり: **UNVERIFIED_AFTER_RESEARCH**。K-Naviに専用ページ存在は確認したが本文取得不能、別系統でも直接値を回収できず。
- MEGA揃い: **1/8192（全設定共通）**
- 50枚ベース: **約20G/50枚（1000円あたり約20G）** — CrankySeven直接値。
- ART「メガゲーム」: **1セット100G+α / 純増約+2.4枚/G**。
- ボーナス: **非搭載**。
- 通常天井: **ART間/通常状態1200G消化後、前兆を経てART**。

### resetBehavior v0.7

- `settingChangeBehavior`: **PARTIAL_CONFIRMED**。2013年の後継ヴィーナス版当時解析が前作比較として「前作メガミリオネアは設定変更後でもモード引継ぎ」と明記。モード以外は未確定。
- `carryOverBehavior`: **PARTIAL / MODE_ONLY**。モード引継ぎ証拠はあるが、据え置き専用のゲーム数/ストック等の直接契約は未確認。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。K-Navi当時掲示板に電源ON/OFFとARTストック消滅を問う投稿は残るが回答取得不能。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。通常天井1200G自体は確定したが、設定変更時CLEAR/RETAINを直接確定できず。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用短縮天井なしとは断定しない。
- `modeAfterReset`: **RETAIN_ON_SETTING_CHANGE_RETROSPECTIVE_ANALYSIS**。後継機当時解析の前作比較による単一系統証拠。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。モードと内部状態全般を同一視しない。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。後継ヴィーナス版の「123スタート」は流用しない。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**

### 主要CONFLICT / 品質メモ

- 機械割はP-WORLD/CrankySeven系列とK-Navi系列で約0.2～0.4pt差。平均化せず双方保持。
- メーカー表記はK-Navi「ウィンネット」、P-WORLD/CrankySeven/5号機クロニクル「ラスター」、当時業界記事「メテオ発表・ラスター製」。製造者ラスターを主値とし企画/販売系を注記。
- 後継「メガミリオネア ヴィーナスヴァージョン」は別機種。前作について明示した比較記述のみ補助証拠として利用し、ヴィーナス版固有の800G天井、123出目、設定変更時天井リセットは初代へ流用していない。
- 「メガミリオネア / MEGA MILLIONAIRE / ラスター / WIN NET」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 1200G / モード / 状態 / ガックン / 50枚」を組み替え、K-Navi、P-WORLD、当時業界、旧解析、後継当時解析の前作比較、回顧資料まで再探索後に欠損判定。

## 次回再開地点

1. **recordCount 676 / chronologicalFrontier 2012-07-30 / 07-30 group OPEN**から開始。
2. 次は **2012-07-30「マイジャグラーII」（北電子）**をrepo重複再確認 → 導入日照合 → 性能コア＋resetBehavior v0.7収集。
3. マイジャグラーII処理後も07-30同日群の残存候補を監査し、完全に閉じるまで08月へ進まない。
4. 「夜王」は既存方針どおり2012年8月地点で再監査。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi 機種情報: `https://p-kn.com/slot/1675/`
- K-Navi 発表会速報: `https://p-kn.com/topics/exhibition/953/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6766`
- 遊技通信社提供の当時業界記事転載: `https://www.55hadama.com/new/2012-06-13-191541.html`
- CrankySeven旧解析: `https://crankyseven.com/megamillionaire-pc.htm`
- 5号機クロニクル ラスター一覧: `https://5goki.com/luster`
- 後継ヴィーナス版の当時解析・前作比較: `https://macerate.seesaa.net/article/322077320.html`

## GitHub commits

- メガミリオネア machine record: `127a1b2804d93ea23ec157995043a51e9bd97b42`
