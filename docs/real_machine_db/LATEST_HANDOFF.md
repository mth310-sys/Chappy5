# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **778**
- latestMachineAddedByChronology: **マジカルハロウィン4**（KPE）
- latestRecord: `docs/real_machine_db/machines/2013-11-18_magical-halloween-4.md`
- chronologicalFrontier: **2013-11-18**
- frontierLatestExactDateMachine: **マジカルハロウィン4**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-11-18_GROUP__MAGICAL_HALLOWEEN_4_DONE__NEXT_STAR_DRIVER**

## 今回の同期 / 重要事項

- 最新mainの README、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード `2013-11-18_tiger-mask.md` を再読。
- INDEXは旧集約状態のため README 規定どおり **LATEST_HANDOFF + 実レコード** を正本扱い。
- 作業開始時正本は recordCount 777 / 2013-11-18群OPEN / タイガーマスク済み / 次マジカルハロウィン4。
- GitHub検索で既存レコード不在を確認し、**マジカルハロウィン4** を778件目として追加。
- 11/18群はまだOPEN。次の既知未処理候補は **パチスロ スタードライバー**。

## 今回追加 — マジカルハロウィン4

### 性能コア

- manufacturer: **KPE**。
- releaseDate: **2013-11-18**。K-Navi / ALL7 / パチビーで一致。KONAMI公式後年回顧でも2013年作品。
- system: **5号機 / ART / 擬似ボーナス / CZ / ゲーム数管理 / 天井**。
- 機械割: **97.4 / 98.6 / 100.5 / 104.2 / 108.1 / 113.2%**。パチマガスロマガ / CrankySeven / 2-9伝説で一致。
- 擬似ボーナス合算: **1/249.7 / 241.5 / 242.4 / 234.1 / 237.1 / 219.4**。
- ART初当たり: **1/499.9 / 490.8 / 489.0 / 423.3 / 409.3 / 335.6**。
- ART「マジカルラッシュ」: **1セット40G+α / 純増約2.0枚/G**。
- BIG 60G / REG 30G。
- 通常モード: **通常A / 通常B / 天国A / 天国B**。
- 最大規定G: 通常A/B **777G**、天国A/B **96G**。
- baseGamesPer50: パチマガスロマガに1000円あたりG数項目の存在は確認したが数値本文を安全に回収できず、後年約33G記述は照合不足のため **UNVERIFIED_AFTER_RESEARCH**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- 設定変更時: CrankySeven / 2-9伝説で **天井ゲーム数クリア**を複数確認。
- 据え置き: 2014年当時の真パチスロ備忘録で **当日G数+前日G数でフェイクまたは本前兆発生**。宵越しゲーム数が機能する当時資料として保存。
- power OFF→ON only: 機種固有のゲーム数・モード・状態保持契約を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。通常A/Bの777G、天国A/Bの96Gは通常仕様でありリセット専用扱いしない。
- modeAfterReset: 設定変更後にも解除モードが存在することはパチマガスロマガの設定変更時フェイク前兆テーブル記述から確認。ただし設定変更専用モード振り分け値は **UNVERIFIED_AFTER_RESEARCH**。
- stateAfterReset: 通常時の低確/高確は確認。設定変更時初期振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBenefits: リセット専用短縮天井/CZ・ART確定等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 設定変更で前日の天井進捗を消すため、深い宵越しGを失う点を朝一客AI用の不利要素として保持。期待値は推計しない。
- resetDetection: PUSH等でボーナス間G数を確認できる当時資料があり、据え置き時の前日+当日Gによる前兆が判別材料になり得る。ガックン等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: 設定変更後天井Gは0から再スタート / 通常モード最大777G。設定変更専用モード振り分けはUNVERIFIED。

## safeguards

- 後年整理資料に天井恩恵をART当選とする記述があるが、当時解析は777Gで擬似ボーナス当選。後年誤記は本線に採用しない。
- 通常A/B=777G、天国A/B=96Gをリセット専用短縮天井と混同しない。
- G数クリアからモード・内部状態まで全リセットとは推定しない。

## 遡及resetBehavior QA 進捗

- QAカーソルは引き続き `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回は本線追加を優先しQAカーソルは進めていない。

## 次回再開地点

1. **recordCount 778 / chronologicalFrontier 2013-11-18 / 11-18群OPEN** から開始。
2. 次の未処理候補 **「パチスロ スタードライバー」** を既存レコード不在確認後、性能コア + resetBehavior v0.7で収集。
3. その後2013-11-18同日全メーカー監査を行い、漏れがなければCLOSED。
4. 次の日付境界へ時系列で前進。
5. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合はCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

- KONAMI公式: `https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_23/20200403.html`
- ALL7: `https://www.all7.jp/plans/index/2013/11`
- パチビー: `https://www.pachibee.jp/machines/index/213100006`
- K-Navi: `https://p-kn.com/slot/1945/`
- パチマガスロマガ確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/34/h-1.php`
- パチマガスロマガ小役: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/34/c.php`
- パチマガスロマガ前兆: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/34/ens02.php`
- CrankySevenスペック: `https://www.crankyseven.com/sp/magicalhalloween4-3-pc.htm`
- CrankySeven天井: `https://www.crankyseven.com/sp/magicalhalloween4-12-pc.htm`
- CrankySevenモード: `https://www.crankyseven.com/sp/magicalhalloween4-6-pc.htm`
- CrankySeven状態: `https://www.crankyseven.com/sp/magicalhalloween4-7-pc.htm`
- 2-9伝説: `https://29den.com/magicalhalloween4/`
- 真パチスロ備忘録: `https://sin-surobi.com/notebook/3111/`
