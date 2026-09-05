# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **654**
- latestMachineAdded: **パチスロ鉄拳デビルVer.**（山佐）
- latestRecord: `docs/real_machine_db/machines/2012-05-07_tekken-devil-ver.md`
- chronologicalFrontier: **2012-05-07**
- frontierLatestExactDateMachine: **パチスロ鉄拳デビルVer.**
- schema: **resetBehavior v0.7**
- status: **FINAL_AUDIT_2012-05-07_SAME_DAY_GROUP**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ コードギアス 反逆のルルーシュ」を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおり最新のLATEST_HANDOFFと実レコードを優先。
- handoffのrecordCount 653 / frontier 2012-05-07 / 次候補「パチスロ鉄拳デビルVer.」を確認。
- `docs/real_machine_db/machines/2012-05-07_tekken-devil-ver.md` をmainで直接確認し404、重複なしを確認して654件目として追加。
- 2012-05-07同日群は既登録「パチスロ コードギアス 反逆のルルーシュ」と今回の「パチスロ鉄拳デビルVer.」を確認。次回は同日群を最終監査してから5/8以降へ進む。

## 今回の本線追加 — パチスロ鉄拳デビルVer.

### 導入・分類

- manufacturer: **山佐**。
- releaseDate: **2012-05-07**。K-Naviのホール導入開始日を採用。2012-04-05付グリーンべるとは納品開始を2012-05-06予定としており、日付競合ではなく納品/ホール導入の定義差として保持。
- generation: **5号機**。
- systemType: **ART特化 / ボーナス非搭載 / セットストックART**。
- formalModelName: **パチスロ鉄拳2デビルVer．**（後年整理資料）。
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**。

### 性能コア

- 機械割: **96.9 / 98.9 / 101.5 / 104.9 / 107.3 / 110.8%**。
- ART初当り: **1/439.5 / 403.5 / 379.5 / 357.5 / 328.2 / 287.3**。
- 50枚ベース: **33.13〜33.00G/50枚**。パチマガスロマガの1000円あたり直接値。設定別対応順は安全に割り当てずレンジ保持。
- ART「デビルRUSH」: **1セット50G + デビルバトル1〜5G、約+3.0枚/G**。
- ボーナス非搭載。
- CZ「鉄拳チャンス」: 平均約20G、ART期待度約55%。
- プレミアムデビルフリーズ: **1/8192（全設定共通）**、ART5セット以上 + 80%継続のプレミアム鉄拳アタック。
- 通常天井: **ART間1500G**。前兆経由で天井ART、当時解析では2セット以上確定。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_COUNTER_AND_ART_STATE_CLEAR_MODE_RELOTTERY_STAGE_RANDOM**。設定変更で天井Gクリア、ART中ならART状態クリア、液晶ステージランダム、内部モード移行抽選。
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE**。ART間1500G天井進捗を消去、宵越し天井狙い不可。
- `ceilingAfterReset`: **NO_RESET_SPECIFIC_SHORTENED_CEILING_CONFIRMED_AFTER_RESEARCH**。変更専用短縮天井は確認できず。
- `modeAfterReset`: **CONFIRMED_WITH_PUBLIC_NUMBERS**。通常の設定変更では全設定共通 **通常50% / 高確50%**。
- `stateAfterReset`: ART中の設定変更ならART状態クリア。
- `resetBenefits`: 通常変更時 **50%高確スタート**。
- `resetPenalties`: 前日1500G天井進捗消失。ART中変更ならART状態も消える。
- `publicMorningNumbers`: 通常変更 **通常50% / 高確50%**。当時資料では **同一設定への打ち直しは100%低確スタート**。操作条件が違うため別条件値として保持。
- `resetDetection`: 設定変更時の液晶ステージランダムは確認。ガックン/初期出目等の初代デビル固有確定判別は `UNVERIFIED_AFTER_RESEARCH`。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。純据え置き時の全カウンタ/内部モード保持を本機固有の直接表で確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの本機固有挙動は確定できず。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### 品質メモ

- 2021年「鉄拳4デビルVer.」など後継機の有利区間/リセット仕様は初代2012年機へ流用していない。
- 設定変更時50%通常/50%高確と、同一設定打ち直し100%低確は条件差のためCONFLICT扱いにしない。
- approvalNumber、純据え置き、単純電源OFF→ON、ガックン等は表記揺れ・型式名・メーカー名・シリーズ名を変えて再探索後も直接根拠不足のためUNVERIFIED。

## 次回再開地点

1. **recordCount 654 / chronologicalFrontier 2012-05-07**から開始。
2. **2012-05-07同日群を最終監査**。コードギアス初代・鉄拳デビル以外の5号機がないか、導入日/納品日/検定日を混同せず確認。
3. 同日群に追加がなければ **2012-05-08以降の最古未処理5号機**へ前進。
4. 既知の後続日アンカーは **スカイラブ4=2012-05-21**。ただし5/8〜5/20を必ず境界監査し、途中機種を飛ばさない。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi 鉄拳デビルVer.: `https://p-kn.com/slot/1617/`
- K-Navi モード移行率: `https://p-kn.com/slot/1617/38378/`
- K-Navi プレミアムデビルフリーズ: `https://p-kn.com/slot/1617/37674/`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/186/a.php`
- パチマガスロマガ ART確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/186/h.php`
- パチマガスロマガ 小役/1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/186/c.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6689`
- グリーンべると 2012-04-05: `https://web-greenbelt.jp/00001440/`
- 天井ハイエナ生活 鉄拳デビル: `https://macerate.seesaa.net/article/275873798.html`
- 天井ハイエナ生活 天井期待値リスト: `https://macerate.seesaa.net/article/288333617.html`
- パチナビ: `https://pachinavi.net/machines/tekken-devil/`
- livedoorニュース 2012-05-10: `https://news.livedoor.com/article/detail/6546923/`

## GitHub commits

- パチスロ コードギアス 反逆のルルーシュ machine record: `c79b8a786df576e352625bf9220ba9c9ab3465cd`
- パチスロ鉄拳デビルVer. machine record: `5a7f1e7863216e31f1d5ad290f88e65b0df9ed99`
