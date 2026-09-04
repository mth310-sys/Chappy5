# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **607**
- latestMachineAdded: **パチスロ快盗天使ツインエンジェル3**（Sammy）
- latestRecord: `docs/real_machine_db/machines/2011-10-03_kaito-tenshi-twin-angel-3.md`
- chronologicalFrontier: **2011-10-03**
- frontierLatestExactDateMachine: **パチスロ快盗天使ツインエンジェル3**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — パチスロ快盗天使ツインエンジェル3

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ X JAPAN～強行突破～」を再取得して開始。
- 開始時正本は **recordCount 606 / chronologicalFrontier 2011-10-02**。
- 2011-10-03全国導入群を再監査。repo既存想定パスを直接fetchして404確認後、本機を607件目として追加。
- K-Navi/HAZUSEとも **2011-10-03導入開始**で一致。
- 型式名 **ツインエンジェル3X**、検定番号 **1S0560**。

### 性能コア

- 5号機 / ボーナス+RT / CZ経由ナビストック型RT。
- 機械割: **97.3 / 98.5 / 100.9 / 104.5 / 108.9 / 113.3%**。
- BIG合算: **1/315.08 / 1/297.89 / 1/282.48 / 1/268.59 / 1/256.00 / 1/234.06**。
- MID合算: **1/532.81 / 1/508.03 / 1/485.45 / 1/464.79 / 1/445.82 / 1/412.18**。
- ボーナス合算: **1/197.99 / 1/187.78 / 1/178.57 / 1/170.22 / 1/162.62 / 1/149.28**。
- RT「エンジェルタイム」: **1セット33G / 約+0.6枚/G**。
- HYPER BIG約**260枚**、NORMAL BIG約**210枚**、MID約**77枚**。
- RT間天井: エンジェルチャレンジ終了後999G → 次回ボーナスまでCZ/RTループ。
- ボーナス間天井: ボーナス後999G → ナビストック1個、以後100Gごとに1個追加。
- 50枚ベースはパチマガスロマガに項目存在まで確認したが数値本文を安全に回収できず、再探索後 **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **PARTIAL_CORE**。

### resetBehavior v0.7

- P-WORLD/HAZUSEで **設定変更後のみボーナス間天井777G**を直接確認。通常999Gから**222G短縮**。
- `ceilingAfterReset`: **SHORTENED_TO_777G_CONFIRMED**。
- `gameCounterReset`: **SETTING_CHANGE_SPECIAL_COUNTER_START_CONFIRMED / CLEAR_VS_RETAIN_SEMANTICS_PARTIAL**。前日999G天井進捗の単純継続ではないことは確実だが、内部実装上のCLEAR/RETAIN表現は資料にないため断定しない。
- HAZUSEは内部状態（低確/高確/超高確）の移行契機に**設定変更**を明記。`modeAfterReset/stateAfterReset`は再抽選契機CONFIRMED。ただし設定変更専用振り分け数値は未回収。
- 据え置き時のRT間/ボーナス間G数、ナビストック、高確ポイント等の保持は **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ONも **UNVERIFIED_AFTER_RESEARCH**。
- ガックン/初期出目/液晶/マイスロ等の変更判別も **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は制度導入前の5号機なので **NOT_APPLICABLE**。
- resetBenefits: **設定変更で999G→777Gの222G短縮**。
- resetQaStatus: **PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH**。

### CONFLICT / 資料品質

- releaseDateはK-Navi/HAZUSEとも10-03で一致。
- 機械割はK-Navi詳細値97.3〜113.3%とHAZUSE整数97〜113%で丸め整合し、CONFLICT扱いしない。
- 50枚ベースは小役確率から逆算せずUNVERIFIEDを維持。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 607 / chronologicalFrontier 2011-10-03**から開始。
2. エージェント・クライシス、X JAPAN～強行突破～、快盗天使ツインエンジェル3を重複追加しない。
3. **2011-10-03全国導入群**の残存を継続監査。
4. 次候補は **サムライスピリッツ鬼（SNKプレイモア） / REVO（スター）**。両方ともK-Navi 10-03群に掲載。納品開始日・市場投入日の一次/業界資料を再確認し、最古未登録から処理する。
5. **ケロット2はグリーンべるとで10-10納品開始予定**。K-Naviの10-03全国導入表記と日付定義が競合するため、10-03群を閉じる際に再照合するが、現時点では10-10側を強い市場投入根拠として後ろへ回す。
6. 10-03群を閉じた後、K-Naviでは10-10にキングハナハナ-30、10-17にラーゼフォン、10-24にバツ＆テリー/押忍！番長2が続く。
7. tree実パス → 既存ファイル直接fetch → 未登録確認後に新規作成。code search未ヒットだけで未登録判定しない。
8. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
9. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-04

### パチスロ快盗天使ツインエンジェル3
- K-Navi: `https://p-kn.com/slot/1493/`
- K-Navi 機械割: `https://p-kn.com/slot/1493/33371/`
- K-Navi ボーナス確率: `https://p-kn.com/slot/1493/33780/`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0560/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6475`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/130/a.php`
- パチマガスロマガ 小役/1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/130/c.php`
- パチマガスロマガ 解析トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/130/sammy_slot_130.php`
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`

### 次回候補確認
- サムライスピリッツ鬼 K-Navi: `https://p-kn.com/slot/1482/`
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
- ケロット2 グリーンべると/P-WORLD転載: `https://news.p-world.co.jp/articles/4896/greenbelt`
