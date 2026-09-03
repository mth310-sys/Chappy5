# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **523**
- latestMachineAdded: **エニィバー**（ヤーマ / HAZUSE導入開始基準 2010-11-12）
- latestRecord: `docs/real_machine_db/machines/2010-11-12_anybar.md`
- chronologicalFrontier: **2010-11-12**
- frontierLatestMachine: **エニィバー**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前522「ジャイアン～情熱のタイ編～」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **522** / chronologicalFrontier **2010-10-18**。
- K-Navi 2010年10月導入カレンダーでは10/25はパチンコのみ。2010-10-19〜31と11月前半を再監査し、HAZUSEで「エニィバー」の導入開始 **2010-11-12** を確認。repo重複なしを確認して523件目として追加。
- 25φ「エニィバー」と30φ「エニィバー-30」はベルコ現公式が同一製品ページで掲載し、5号機クロニクルも共通性能系列として整理するためvariant併記とし、別性能レコードへ分割しない。

## 523 — エニィバー

- メーカー: **ヤーマ**
- 型式: **エニィバー**
- 検定番号: **0S0625**
- 導入開始: **2010-11-12**（HAZUSE）
- 世代/タイプ: **5号機 / ボーナス主体 + BIG・MID後33G RT / 25φ・30φ**
- 機械割: **97.5 / 99.0 / 101.0 / 103.0 / 105.5 / 108.0%**
- 全ボーナス合成: **1/128 → 1/109**
- BIG: **1/230 → 1/199 / 約221枚**
- MID: **1/1170 → 1/963 / 約156枚**
- LB: **1/1170 → 1/963 / 約104枚**
- REG: **1/564 → 1/496 / 約52枚**
- BIG/MID後RT: **33G**
- 通常ゲーム数天井: **なしを確認**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- RT純増/G: **UNVERIFIED_AFTER_RESEARCH**
- coreStatus: **PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — エニィバー

- 設定変更、リセット、朝一、据え置き、電源OFF→ON、ガックン、RTと、25φ/30φ・型式0S0625・メーカー名を組み替えて再探索。
- 本機には通常ゲーム数天井を確認しないため `gameCounterReset` / `ceilingAfterReset` は **NOT_APPLICABLE_FOR_CEILING / NO_CEILING_CONFIRMED**。
- BIG/MID後33G RT途中の設定変更時残G・RT状態処理は **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の33G RT残G処理は **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の33G RT残G、リール/ランプ/初期出目は **UNVERIFIED_AFTER_RESEARCH**。
- 朝一専用高確、短縮天井、初当たり優遇、設定変更固有の不利は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン等の本機固有変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は5号機のため **NOT_APPLICABLE**。
- resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**。

## CONFLICT / 注意 — エニィバー

- 設定3 REGはパチマガスロマガとpacnkが **1/546**、HAZUSEが **1/564**。平均せずCONFLICT保持。主系列は2系統一致の1/546を採用し、HAZUSE異値を消さない。
- HAZUSEの「BIG/REG/合成」表は4ボーナス区分を簡略化している。全ボーナス合成1/128〜1/109は他資料と整合するため、物差し比較は全ボーナス合成を主軸にする。

## 主要出典 — エニィバー（取得日 2026-09-04）

- HAZUSE: `https://hazuse.com/machine/pachislot/0S0625/`
- ベルコ現公式（旧ヤーマ製品）: `https://www.s-bellco.co.jp/products/slot/yama_anybar/`
- グリーンべると: `https://web-greenbelt.jp/00002872/`
- P-WORLD / グリーンべると転載: `https://news.p-world.co.jp/articles/4183/greenbelt`
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/14/a.php`
- パチマガスロマガ設定別確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/14/h.php`
- pacnk: `https://pacnk.com/slot/tools/sh_anybar.html`
- 5号機クロニクル: `https://5goki.com/yama`

## 今回のGitHub更新

- 523 エニィバー追加: `docs/real_machine_db/machines/2010-11-12_anybar.md`
- machine record commit: `e525119e9069d4b81e0cb934985ac3d15733c6b4`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**。
- 次回はmachine treeの実パス順を確認し、怪胴王直後の**最初の実在resetBehavior欠損レコード**を特定して処理する。タイトル推測でQA済み範囲を進めない。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 523 / chronologicalFrontier 2010-11-12**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを必ず再取得。
2. **2010-11-13〜14境界を監査**。特に「月面兎兵器ミーナ」は11月中旬/11月14日前後の納品・導入表記を区別し、確定導入日が11/15群より早いか再照合する。
3. その後、明確な **2010-11-15同日群**（「パチスロ超時空要塞マクロス」「パチスロ戦国無双～猛将伝～」「エピソードドライブ」等）をrepo重複監査して時系列追加する。
4. 50枚ベースやresetBehaviorを最初の検索だけで欠損扱いにせず、型式・メーカー・シリーズ名と朝一/リセット/据え置き/電源OFF ON/天井/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・回顧資料を横断する。
5. 競合値は平均せずCONFLICT、既存性能値は無駄にやり直さない。
