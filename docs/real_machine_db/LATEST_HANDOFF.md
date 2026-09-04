# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **632**
- latestMachineAdded: **パチスロ サクラ大戦3 ～Loop ver.～**（サミー）
- latestRecord: `docs/real_machine_db/machines/2012-01-23_sakura-taisen3-loop-ver.md`
- chronologicalFrontier: **2012-01-23**
- frontierLatestExactDateMachine: **パチスロ サクラ大戦3 ～Loop ver.～**
- schema: **resetBehavior v0.7**
- status: **2012-01-23_SAME_DAY_AUDIT**

## 今回の本線追加 — パチスロ サクラ大戦3 ～Loop ver.～

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ鉄拳2nd」を再取得して開始。
- 開始時正本は **recordCount 631 / chronologicalFrontier 2012-01-10**。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 01/10同日群から01/13→01/16→01/20境界を検索語・資料系統を変えて監査。今回、01/23より前へ差し込む具体日付き未登録5号機を追加確定できなかったため01/23へ前進。
- GitHub code searchと想定実パス直接fetchで「パチスロ サクラ大戦3 ～Loop ver.～」が未登録であることを確認し632件目として追加。
- K-Navi・パチビーが導入 **2012-01-23** で一致。当時グリーンべるとは2011-12-13記事で「2012年1月下旬納品開始予定」と掲載。

### 性能コア

- systemType: **A+ART**。
- 型式名: **サクラ大戦3RR**。
- 検定番号: **1S0215**。
- 設定別機械割: **97.40 / 98.30 / 100.98 / 104.24 / 110.00 / 114.39%**。
- BIG合算: **1/414.78 / 407.06 / 394.80 / 381.02 / 370.26 / 362.08**。
- REG: **1/624.15 / 590.41 / 560.14 / 532.81 / 500.27 / 474.90**。
- ボーナス合算: **1/249.2 / 240.9 / 231.6 / 222.2 / 212.8 / 205.4**。
- ボーナス+ART初当たり合算: **1/121.4 / 117.1 / 109.5 / 101.5 / 90.2 / 83.1**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。前作値は流用しない。
- 赤7BIG約**300枚**、白7BIG約**200枚**、REG約**30～50枚**。
- ART「光武モード」「デートタイム」は **1セット50G・約+1.4枚/G**。デートタイム最大ループ率80%。
- 通常救済は900G系。P-WORLDではボーナス&ART間900G天井、ボーナス間901G以降のART当選率上昇、SIN間救済を整理。解析ガイドでは900Gハマリで3セット以上のART、901～1200GのSINこぼし時5.01%、1201～1500G 13.01%、1501G以降33.43%。

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetBehavior調査メモ

- K-Navi本機トップに「設定変更後の挙動」専用解析項目が存在すること自体は確認したが、現在取得可能な検索インデックス/本文経路では具体本文を安全に回収できなかった。
- Loop/Loop Ver./～Loop ver.～、型式名サクラ大戦3RR、サミー、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/900G/SIN/ガックンを組み替え、K-Navi、P-WORLD、パチビー、パチマガスロマガ、当時業界、後年解析を横断。
- 設定変更時の900G/ボーナス間/SIN間救済カウンタCLEAR/RETAIN、据え置き、単純電源OFF→ON、設定変更時のモード/状態/ARTストック、ガックン等は本機固有直接根拠を確定できずUNVERIFIED_AFTER_RESEARCH。
- リセット専用短縮天井、朝一専用モード/特定G以内当選率はNONE_CONFIRMED_AFTER_RESEARCH。
- 前作「サクラ大戦3～巴里は燃えているか～」の設定変更情報は別スペックなので流用しない。

## conflicts

1. `CONFLICT_RETROSPECTIVE_BASIC_PAYOUT`
   - グリーンべると / P-WORLD / パチマガスロマガ / 解析ガイド: 赤BIG約300枚、白BIG約200枚、REG約30～50枚。
   - 5号機クロニクル: BIG約204枚、REG約48枚。
   - 高信頼複数系統との不整合が大きいため平均化せず、後年DB側の混線/簡略化疑いとしてCONFLICT保持。

## 時系列監査

- 2012-01-10同日群から01/13→01/16→01/20境界を再探索し、今回01/23より前に差し込む具体日付き未登録5号機は追加確定できず。
- 01/23の「パチスロ サクラ大戦3 ～Loop ver.～」を登録。
- 01/23同日群はまだ最終閉鎖していない。次回まず同日群の漏れをメーカー別一覧/P-WORLD/HAZUSE/K-Navi/当時業界で最終監査する。
- その後は前handoff既知の **01/27** を再監査し、具体候補が確定しなければ **01/30～2012-02上旬**へ時系列で進む。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 632 / chronologicalFrontier 2012-01-23**から開始。
2. **2012-01-23同日群**の残存漏れをメーカー別一覧/P-WORLD/HAZUSE/K-Navi/当時業界で最終監査。
3. 追加がなければ **01/27 → 01/30 → 2012-02上旬**の順に監査。
4. 候補ごとにGitHub code search + 想定実パス直接fetchで重複確認し、未登録なら性能コア+resetBehavior v0.7を同時収集。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

### パチスロ サクラ大戦3 ～Loop ver.～
- グリーンべると: `https://web-greenbelt.jp/00002455/`
- K-Navi: `https://p-kn.com/slot/1551/`
- パチビー: `https://www.pachibee.jp/machines/lecture/211120004`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6586`
- パチスロ解析ガイド: `https://pachislot-guide.net/2012/sakura3-loop/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/132/a.php`
- 5号機クロニクル: `https://5goki.com/sammy`

### 次回順序確認
- **2012-01-23同日群最終監査 → 01/27 → 01/30 → 2012-02上旬。**
