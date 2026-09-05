# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **724**
- latestMachineAdded: **アントニオ猪木が伝説にするパチスロ機**（オリンピア）
- latestRecord: `docs/real_machine_db/machines/2013-04-01_antonio-inoki-ga-densetsu-ni-suru-pachislot-ki.md`
- chronologicalFrontier: **2013-04-01**
- frontierLatestExactDateMachine: **アントニオ猪木が伝説にするパチスロ機**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-04-01_GROUP__NEXT_SAME_DAY_AUDIT**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-03-18_shin-onimusha-sairin.md` を確認。
- `INDEX.md` は19件地点の旧集約状態のため、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **723** / chronologicalFrontier **2013-03-18** / 03-18群OPEN。
- 2013年スロット年別一覧では3月掲載が「絶対衝激II」「天才バカボン」「クランキーコレクション」「新鬼武者 再臨」の4機種で、いずれも本線登録済み。03-18同日および03-19～03-31をHAZUSE日付カレンダー、K-Navi/当時系検索で再監査し、追加すべき具体日付き未登録5号機を今回確認できなかった。
- よって **03-18群をCLOSED**、**03-19～03-31境界をCLOSED_FOR_CURRENT_RESEARCH** とし、次の具体日 **2013-04-01** へ前進。
- **724件目として「アントニオ猪木が伝説にするパチスロ機」**を追加。

## 今回追加 — アントニオ猪木が伝説にするパチスロ機

### 性能コア

- releaseDate: **2013-04-01**。K-Navi、HAZUSEで一致。グリーンべるとは納品開始予定2013-03-31。後年解析ガイドの2013-04-05～はCONFLICT保持。
- manufacturer: **オリンピア**（平和発表/販売系列）。
- formalModelName: **アントニオ猪木が伝説にするパチスロ機P** / inspectionNumber: **2S1297**。
- systemType: **5号機 / 擬似ボーナス+高純増ART / ゲーム数解除**。
- 機械割: **97.2 / 98.6 / 100.0 / 104.9 / 110.1 / 115.1%**。
- 擬似ボーナス合算: **1/285.9 / 285.4 / 277.0 / 262.2 / 250.6 / 241.4**。
- ART「闘魂CHANCE」初当り: **1/525.2 / 488.3 / 490.5 / 416.6 / 364.5 / 310.0**。
- 50枚ベース: **約31.6G**。別系統の約31.5～32G/1000円と丸め差で整合。
- ART: **初回50G、2セット目以降30～300G+α / 純増約+2.8枚/G**。
- 擬似BIG: **約120 / 300 / 600枚**。擬似REG: **約30枚+α**。
- 通常時モード: **通常A / 通常B / 通常C / 天国 / 超天国**。HAZUSEでは通常C相当を天国準備と表記。
- モード別天井: **通常A/B 996G / 通常C 1023G / 天国・超天国96G**。最大1023G。

### resetBehavior v0.7

- 必勝本の機種固有「天井&設定変更」で直接確認:
  - **設定変更**: 天井までのG再抽選 / 状態再抽選 / 液晶は機内or砂浜1:1 / 履歴リセット。
  - **電源OFF→ONのみ**: 天井までのG引継ぎ / 状態引継ぎ / 通常時液晶は機内or砂浜1:1 / 履歴リセット。
- K-Naviの設定変更時モード表により、設定変更時のモード再抽選と具体振り分けを確認:
  - 設1: A77.5 / B15.0 / 天国7.5%
  - 設2: A72.5 / B20.0 / 天国7.5%
  - 設3: A75.0 / B15.0 / 天国10.0%
  - 設4: A70.0 / B20.0 / 天国10.0%
  - 設5: A72.5 / B15.0 / 天国12.5%
  - 設6: A65.0 / B22.5 / 天国12.5%
- 設定変更時状態:
  - 設1～5: **低確75 / 高確20 / 超高確5%**。
  - 設6: **低確70 / 高確20 / 超高確10%**。
- 朝一恩恵の比較可能値: **天国7.5～12.5%**、**高確以上25%（設定1～5）/30%（設定6）**。
- `gameCounterReset`: 設定変更 **RESET_AND_RESELECT** / 電源OFF→ON **CARRY_OVER**。
- `ceilingAfterReset`: 固定リセット短縮天井は確認なし。モード再抽選後に通常天井体系を使用。
- `modeAfterReset`: 設定変更 **RESELECT_WITH_PUBLISHED_DISTRIBUTION**。電源OFF→ON/純据え置き時のモードそのものの明示的引継ぎ契約は、十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。天井G引継ぎから推測しない。
- `stateAfterReset`: 設定変更 **RESELECT** / 電源OFF→ON **CARRY_OVER**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- 朝一不利: 設定変更で前日天井進捗が消失するため、深い前日ハマリの宵越し価値が消える。
- 変更判別: ボーナス後97G以降の通常前兆帯（190～220G、290～320G…）から朝一前兆発生位置がズレる場合、**据え置き可能性アップ**。前日最終G数が分かれば精度向上。設定変更/電断とも通常時初期ステージは機内or砂浜1:1、履歴もリセットされるので表示単独では判別困難。
- 本機固有ガックン契約は表記・型式・メーカー・資料系統を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### 品質注記 / CONFLICT

- releaseDateはK-Navi/HAZUSE **2013-04-01** と後年解析ガイド **2013-04-05～** が競合。平均せず両方保持し、具体日複数一致の04-01を本線キーに採用。
- グリーンべるとの**納品開始予定2013-03-31**はホール導入日と定義が異なるため別フィールド扱い。
- 通常C / 天国準備の名称差は数値を混ぜず注記。
- 電源OFF→ONで天井Gと状態の引継ぎは直接確認できるが、モードそのものは明記が取れないため推測補完していない。

## 2013-03-18同日群 / 03-19～03-31境界監査

- 2013年年別スロット一覧の3月掲載4機種は、絶対衝激II / 天才バカボン / クランキーコレクション / 新鬼武者 再臨で、すべて登録済み。
- HAZUSE日付カレンダーとK-Navi/当時系検索で03-18同日および03-19～03-31を再監査し、今回追加すべき具体日付き未登録5号機は確認できなかった。
- **03-18群: CLOSED**。
- **03-19～03-31境界: CLOSED_FOR_CURRENT_RESEARCH**。

## 2013-04-01同日群

- **アントニオ猪木が伝説にするパチスロ機**（オリンピア） — **724件目 / 今回登録**。
- **あしたのジョー2**（タイヨーエレック） — K-Navi/メーカー発表転載で **2013-04-01** を確認、repo未登録。次候補。
- **スーパーシオ-30**（パイオニア） — K-Naviで **2013-04-01** を確認、repo未登録。同日候補。
- 04-01群の全メーカー横断最終監査は未完了のため **OPEN**。

## 次回再開地点

1. **recordCount 724 / chronologicalFrontier 2013-04-01 / 04-01群OPEN** から開始。
2. まず **2013-04-01同日群の残存監査**。既確認の未登録候補として **「あしたのジョー2」**、**「スーパーシオ-30」** がある。
3. 同日機の順序は漏れ防止を優先し、当時導入カレンダー/メーカー・業界資料で同日全候補を再確認してから古い順（同日は監査順）に追加する。
4. 04-01群を閉じる前に、表記揺れ・メーカー別一覧・HAZUSE/K-Navi・当時新台一覧を再横断する。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### 境界監査
- 2013年スロット機種一覧: `https://www.nikuziru.com/slot/2013slot-list`
- HAZUSE 新機種導入カレンダー: `https://hazuse.com/calendar/`

### アントニオ猪木が伝説にするパチスロ機
- グリーンべると: `https://web-greenbelt.jp/00000754/`
- K-Navi: `https://p-kn.com/slot/1826/`
- K-Navi モード移行率: `https://p-kn.com/slot/1826/43670/`
- K-Navi 状態移行率: `https://p-kn.com/slot/1826/43671/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S1297/`
- HAZUSE 基本スペック: `https://hazuse.com/machine/pachislot/2S1297/genre/201/`
- パチ＆スロ必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2175/1/39310`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7027`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/108/a.php`
- パチスロ解析ガイド（導入日CONFLICT）: `https://pachislot-guide.net/2013/inoki-densetsu/`
- CrankySeven: `https://crankyseven.com/inoki-densetu-pc.htm`

### 次候補確認
- あしたのジョー2 メーカー発表転載: `https://www.4gamer.net/games/211/G021176/20130411063/`
- スーパーシオ-30 K-Navi: `https://p-kn.com/slot/1818/`
