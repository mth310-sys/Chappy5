# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **637**
- latestMachineAdded: **世界で叩け！モグモグ風林火山**（ネット）
- latestRecord: `docs/real_machine_db/machines/2012-02-13_sekai-de-tatake-mogumogu-furinkazan.md`
- chronologicalFrontier: **2012-02-13**
- frontierLatestExactDateMachine: **世界で叩け！モグモグ風林火山**
- schema: **resetBehavior v0.7**
- status: **2012-02-13_SAME_DAY_GROUP_AUDITED__NEXT_EARLIEST_UNPROCESSED_AFTER_2012-02-13**

## 今回の本線追加 — 世界で叩け！モグモグ風林火山

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「新・ドロンジョにおまかせ」を確認して開始。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時正本は **recordCount 636 / chronologicalFrontier 2012-02-13 / latestMachineAdded 新・ドロンジョにおまかせ**。
- 想定実パスを直接fetchし404を確認してから637件目として追加。
- K-Navi、パチビーでホール導入 **2012-02-13** を確認。グリーンべるとの2011-12-22業界記事では2012年2月中旬納品予定。

### 性能コア

- systemType: **A+ART**。
- 設定別機械割: **96.5 / 98.5 / 101.0 / 104.0 / 107.0 / 110.5%**。
- 合戦BONUS合算: **1/439.84 / 434.01 / 428.34 / 422.81 / 417.43 / 412.18**。
- 戦BONUS: **1/873.81 / 862.32 / 851.12 / 840.21 / 829.57 / 819.20**。
- ART初当たり: **1/353 / 327 / 298 / 277 / 252 / 217**。
- 50枚ベース: **30.10 / 30.13 / 30.17 / 30.20 / 30.24 / 30.27G**。パチマガスロマガの設定別1000円あたりゲーム数を直接採用。
- ART「世覇の刻」: **1セット30〜200G+α、約+1.5枚/G**。
- 基本獲得: **超・大合戦約300枚 / 大合戦約225枚 / 合戦約150枚 / 戦約42枚**。
- 通常天井: ボーナス間 **888G=ART1〜3セット / 1111G=1〜5セット / 1333G=2〜15セット** の3段階。

### resetBehavior v0.7

- `settingChangeBehavior`: **GAME_COUNTER_RESET_AND_INTERNAL_MODE_RESELECTION_REPORTED**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE**。pacnkが設定変更後はゲーム数天井リセットと明記。
- `ceilingAfterReset`: 通常888/1111/1333G段階天井。設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **INTERNAL_MODE_RESELECTED_ON_SETTING_CHANGE__DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: 設定変更時に内部モード再抽選とする当時攻略系記録あり。
- `resetPenalties`: 設定変更でボーナス間天井G数がクリアされ、前日ハマリの宵越し狙いには不利。
- `resetDetection`: 当時攻略系資料で **朝一にレア役無しで流鏑馬/座禅ステージへ移行すれば設定変更濃厚**。ガックンは未確定。
- `publicMorningNumbers`: 設定変更時モード振り分け、朝一特定G以内当選率、リセット専用短縮天井の具体公開値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### 競合・注意

- 性能コアはP-WORLD、パチビー、pacnk、パチマガスロマガで整合し、今回CORE CONFLICTなし。
- 設定変更時モード再抽選と流鏑馬/座禅による変更推測は回顧型の当時攻略資料に依存するため、正式解析と同等の信頼度にはしていない。
- 据え置き時の天井進捗/モード保持、単純電源OFF→ON、設定変更時モード具体振り分け、ガックンは十分再探索後も本機固有の直接根拠を確定できずUNVERIFIED_AFTER_RESEARCH。

## 時系列監査

- 2012-02-13同日群は、既知の「新・ドロンジョにおまかせ」「世界で叩け！モグモグ風林火山」を処理済み。
- K-Navi/P-WORLD/パチビー系の2012-02-13検索を再監査し、今回この2機種以外の具体日付き未登録5号機は確定できなかった。
- 次回は **2012-02-14以降**を日付順に監査し、最古の未処理機を確定してから追加する。既登録の2012-02-06 BLACK LAGOON等へ逆戻りしない。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 637 / chronologicalFrontier 2012-02-13**から開始。
2. **2012-02-14以降の最古未処理5号機**を、K-Navi/P-WORLD/パチビー/HAZUSE/業界記事で日付順に確定する。
3. 候補を確定したら想定実パスを直接fetch→重複確認→性能コア+resetBehavior v0.7を収集。
4. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

- グリーンべると: `https://web-greenbelt.jp/00002436/`
- K-Navi 世界で叩け！モグモグ風林火山: `https://p-kn.com/slot/1561/`
- パチビー: `https://www.pachibee.jp/machines/index/211120012`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6601`
- パチマガスロマガ 小役確率/1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/152/c.php`
- pacnk: `https://pacnk.com/slot/tools/sh_sekamog.html`
- 天井ハイエナ生活 回顧資料: `https://macerate.seesaa.net/article/372758539.html`

## GitHub commits

- machine record: `d8a8a2ce38f581af91b4a3a1005ee74f1928a7f8`
