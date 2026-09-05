# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **658**
- latestMachineAdded: **パチスロ 天 天和通りの快男児**（藤商事）
- latestRecord: `docs/real_machine_db/machines/2012-06-04_ten-tenho-dori-no-kaidanji.md`
- chronologicalFrontier: **2012-06-04**
- frontierLatestExactDateMachine: **パチスロ 天 天和通りの快男児**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-06-04_SAME_DAY_GROUP**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「スパイガール2」を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおり最新LATEST_HANDOFFと実レコードを優先。開始時正本は recordCount 657 / frontier 2012-05-21。
- 2012-05-21同日群を再監査し、既登録「スカイラブ4」「スパイガール2」以外の具体日2012-05-21未登録5号機を今回確定できなかったため同日群を閉じた。
- 05-22〜06-03を導入日/新台/メーカー名等で境界監査。先行して差し込むべき具体日付き未登録機を今回確定できず、既知アンカーへ前進。
- 藤商事「パチスロ 天 天和通りの快男児」はrepo実パス404で未登録確認。
- K-Naviは2012-06-04ホール導入開始、HAZUSEは2012-06-03導入開始、P-WORLDは2012年05月表記。日付差をCONFLICT保持し、時系列キーは明示的なホール導入開始日2012-06-04を採用。
- 性能コアはP-WORLD、K-Navi、HAZUSE、パチマガスロマガ、必勝本で横断照合。
- resetBehaviorは機種名/型式名/藤商事と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/1200G/龍玉/320G/モード/高確/ガックンを組み替えて再探索。K-Navi・パチマガスロマガ・必勝本に本機専用の設定変更/朝一項目の存在は確認したが、取得可能本文では具体挙動を安全に回収できず、推測せずUNVERIFIED_AFTER_RESEARCH。
- 658件目として `docs/real_machine_db/machines/2012-06-04_ten-tenho-dori-no-kaidanji.md` を追加。
- 2012-06-04同日群にはビスティ「パチスロ GTO ～Limit Break～」の具体日2012-06-04候補を確認。次回はrepo重複確認後に最優先処理する。

## 今回の本線追加 — パチスロ 天 天和通りの快男児

### 導入・分類

- manufacturer: **藤商事**。
- releaseDate: **2012-06-04**（K-Naviホール導入開始）。HAZUSEは2012-06-03、P-WORLDは2012年05月でCONFLICT保持。
- generation: **5号機**。
- systemType: **A+ART / 周期CZ / セットストック+ゲーム数上乗せART**。
- formalModelName: **テンXSFB**。
- approvalNumber: **1S1158**。

### 性能コア

- 機械割: **97 / 99 / 101 / 105 / 109 / 113%**。
- BIG: **1/445.8 / 445.8 / 414.8 / 414.8 / 404.5 / 404.5**。
- REG: **1/682.7 / 642.5 / 642.5 / 595.8 / 595.8 / 528.5**。
- ボーナス合算: **1/269.7 / 263.2 / 252.1 / 244.5 / 240.9 / 229.1**。
- ART初当り: **1/577.0 / 529.7 / 555.6 / 449.8 / 492.6 / 360.3**。
- ボーナス+ART合算: **1/183.8 / 175.8 / 173.4 / 158.4 / 161.8 / 140.1**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。小役からの逆算は不採用。
- BIG約**204枚**、REG約**30枚**。
- ART「東西戦決勝」: **1セット50G+α、約+1.5枚/G**。
- 通常天井: **ボーナス間1200GでART**。
- 周期CZ「龍玉チャンス」: **最大320G周期**。

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。本機専用ページの存在は確認したが具体本文未回収。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。1200G天井/320G周期/内部状態の据え置き保持契約を直接確認できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。設定変更で1200G天井および周期カウンタがCLEAR/RETAINか確定できず。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。通常1200Gは確認、変更専用短縮数値は未確認。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。内部モード存在は確認、変更時再抽選/引継ぎは未確定。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶/龍玉表示の本機固有判別を未確定。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

### 品質メモ

- BIG/REG/合算/機械割、ART仕様、1200G天井は複数解析/旧DB系統で照合。
- 導入日は2012-06-03 / 06-04 / 2012年05月の資料差を平均せず保持。
- K-Navi/パチマガスロマガ/必勝本に本機専用設定変更ページが存在することだけでは仕様値とせず、本文を取得できない項目はUNVERIFIED。
- 50枚ベースは「50枚/1000円/ベース/コイン持ち」等で再探索後も直接値未確定。

## 次回再開地点

1. **recordCount 658 / chronologicalFrontier 2012-06-04**から開始。
2. **2012-06-04同日群を継続**。最優先候補は **ビスティ「パチスロ GTO ～Limit Break～」**。後年整理DBで2012-06-04導入を確認済み。repo重複確認後、メーカー/業界/当時解析/旧DBで導入日を再照合してから登録判断。
3. GTO処理後も2012-06-04同日群をメーカー別・当時新台一覧・K-Navi/HAZUSE等で最終監査し、未登録具体日機がなければ閉じる。
4. その後06-05以降を日付順に境界監査。途中機種を飛ばさず、次の具体日へ前進する。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi パチスロ天 天和通りの快男児: `https://p-kn.com/slot/1642/`
- P-WORLD 天 天和通りの快男児: `https://www.p-world.co.jp/machine/database/6732`
- HAZUSE DATA 天 天和通りの快男児: `https://hazuse.com/machine/pachislot/1S1158/`
- パチマガスロマガ パチスロ天: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/12/fuji_slot_12.php`
- パチ&スロ必勝本 ART概要: `https://p.hisshobon.jp/machine/2026/1/34720`
- パチナビ パチスロ GTO ～Limit Break～（次候補）: `https://pachinavi.net/machines/gto-limit-break/`

## GitHub commits

- スカイラブ4 machine record: `aa9dec461adee380df5563578d55c860e9f80936`
- スパイガール2 machine record: `03438bb8c14e52555eb8fb3ebc64b6cf48855d2a`
- パチスロ 天 天和通りの快男児 machine record: `61fba37eb7465d7862adf6dc6ad2316893a55252`
