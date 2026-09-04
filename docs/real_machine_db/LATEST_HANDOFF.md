# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **636**
- latestMachineAdded: **新・ドロンジョにおまかせ**（オリンピア）
- latestRecord: `docs/real_machine_db/machines/2012-02-13_shin-doronjo-ni-omakase.md`
- chronologicalFrontier: **2012-02-13**
- frontierLatestExactDateMachine: **新・ドロンジョにおまかせ**
- schema: **resetBehavior v0.7**
- status: **2012-02-13_SAME_DAY_GROUP_IN_PROGRESS__NEXT_MOGUMOGU_FURINKAZAN**

## 今回の本線追加 — 新・ドロンジョにおまかせ

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「コンチネンタルV」を確認して開始。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時正本は **recordCount 635 / chronologicalFrontier 2012-02-06 / latestMachineAdded コンチネンタルV**。
- 2012-02-07〜02-12境界をK-Navi/P-WORLD/パチビー系検索で再確認し、今回新たに具体日付き未登録5号機を確定できなかったため02-13群へ前進。
- 想定実パス `docs/real_machine_db/machines/2012-02-13_shin-doronjo-ni-omakase.md` を直接fetchし未登録を確認後、636件目として追加。
- K-Navi、パチビー、当時解析資料で導入 **2012-02-13** を確認。
- P-WORLDで型式名 **新・ドロンジョにおまかせC**、検定番号 **1S1155** を確認。

### 性能コア

- systemType: **A+ART**。
- 設定別機械割: **97.2 / 98.8 / 100.3 / 104.5 / 108.1 / 113.6%**。
- 同色ボーナス/BIG: 全設定 **1/183.1**（パチマガ精密値1/183.06）。
- REG: **1/436.9 / 414.8 / 394.8 / 376.6 / 360.1 / 344.9**。
- ボーナス合算: **1/129.0 / 127.0 / 125.1 / 123.2 / 121.4 / 119.6**。
- ART初当たり: **1/458.6 / 417.4 / 410.0 / 352.9 / 321.2 / 263.7**。
- 50枚ベース: **32.13 / 32.11 / 32.09 / 32.08 / 32.06 / 32.04G**。パチマガの直接設定別表を採用。必勝本実戦値32.0G、当時解析約32Gと整合。
- ART「ギガパーRUSH」: **1セット30G、約+1.9枚/G（ボーナス込み）**。
- 基本獲得: **ART中BIG約180枚 / 通常時おしおきチャンス約60枚 / REG約30枚**。
- 通常天井: **通常時777Gで特殊無限ART「最終決戦モード」**。

### resetBehavior v0.7

- `settingChangeBehavior`: **SETTING_CHANGE_GAME_COUNTER_RESET_REPORTED_IN_PERIOD_SOURCE__OTHER_INTERNAL_BEHAVIOR_UNVERIFIED**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE_REPORTED_IN_PERIOD_KNAVI_LOG**。K-Navi機種ページ内の2012-06-28当時パチログに「設定変更時ゲーム数リセット」の直接記述あり。ただし編集部正式解析本文ではないため信頼度を限定。
- `ceilingAfterReset`: 通常777G。設定変更専用の777G未満短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: 設定変更専用恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: 設定変更で天井G数がリセットされる当時記述があり、宵越しハマリ利用には不利となる可能性。具体的据え置き比較は未確定。
- `resetDetection`: K-Naviに「設定変更判別」項目の存在は確認したが具体本文を安全に回収できず **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

### 競合・注意

- 性能コアの主要値はK-Navi/パチマガ/当時解析で一致し、今回CORE CONFLICTなし。
- 旧作「ドロンジョにおまかせ」の1400G天井・設定変更挙動は別機種のため流用していない。
- reset game counterは時代近接の直接記述だがユーザー投稿由来なので、正式解析と同等扱いにはしていない。

## 時系列監査

- 2012-02-06同日群はコンチネンタルVまで処理済み。
- 2012-02-07〜02-12は今回の境界再監査で新たな具体日付き未登録候補を確定できず。
- 2012-02-13群へ前進し「新・ドロンジョにおまかせ」を処理済み。
- 同日未処理の既知候補として **「世界で叩け！モグモグ風林火山」（ネット）** をK-Naviで2012-02-13導入と確認済み。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 636 / chronologicalFrontier 2012-02-13**から開始。
2. 最優先は **2012-02-13「世界で叩け！モグモグ風林火山」**。
3. 想定実パスを直接fetch→重複確認→性能コア+resetBehavior v0.7を収集。
4. 02-13同日群をK-Navi/P-WORLD/パチビー/HAZUSE/業界記事で最終監査し、残候補を処理してから次の具体日へ進む。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

- オリンピア公式 新・ドロンジョにおまかせ: `https://www.olympia.co.jp/newmachine/dr2/index.html`
- K-Navi 新・ドロンジョにおまかせ: `https://p-kn.com/slot/1565/`
- パチビー 新ドロンジョにおまかせ: `https://www.pachibee.jp/machines/lecture/211120013`
- P-WORLD 新・ドロンジョにおまかせ: `https://www.p-world.co.jp/machine/database/6610`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/102/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/102/h.php`
- パチマガスロマガ 小役確率/1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/102/c.php`
- パチスロ必勝本 打ち方説明: `https://p.hisshobon.jp/machine/1970/1/33098`
- 当時解析記事: `https://ameblo.jp/ex-tencho/entry-11159738166.html`
- K-Navi 世界で叩け！モグモグ風林火山: `https://p-kn.com/slot/1561/`

## GitHub commits

- machine record: `3c86b17747b80457478ec4d82e660c8349afa7ee`
