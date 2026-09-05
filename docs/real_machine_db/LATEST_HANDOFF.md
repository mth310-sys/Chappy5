# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **720**
- latestMachineAdded: **絶対衝激II**（アリストクラートテクノロジーズ）
- latestRecord: `docs/real_machine_db/machines/2013-03-04_zettai-shogeki-ii.md`
- chronologicalFrontier: **2013-03-04**
- frontierLatestExactDateMachine: **絶対衝激II**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-03-04_GROUP__NEXT_TENSAI_BAKABON_UNAGIINU**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-02-25_haisai-cho-tokkyu-2.md` を確認。
- `INDEX.md` は19件地点の旧集約状態のため、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **719** / chronologicalFrontier **2013-02-25** / 02-25群CLOSED / 次候補「絶対衝激II」。
- repoコード検索で「絶対衝激II」既存レコードなしを確認後、**720件目として追加**。

## 今回追加 — 絶対衝激II

### 性能コア

- releaseDate: **2013-03-04**。K-Navi、パチ＆スロ必勝本、ドラス2013-03-04発表で一致。
- manufacturer: **アリストクラートテクノロジーズ**。
- systemType: **5号機 / AT / 擬似ボーナス+規定ゲーム数管理+自力CZ / セット数・ゲーム数上乗せ**。
- 機械割: **97.1 / 98.5 / 100.5 / 104.2 / 107.5 / 111.8%**。P-WORLD、pacnk、CrankySeven等で一致。
- PLATONIC BONUS初当たり: **1/314.9 / 286.7 / 292.2 / 251.0 / 263.0 / 215.5**。
- 衝激RUSH初当たり: **1/624.4 / 609.3 / 585.3 / 532.1 / 511.2 / 451.4**。
- BONUS+AT合算: **1/208.9 / 194.2 / 194.4 / 170.8 / 170.9 / 148.3**。
- 50枚ベース: **約34G/50枚**。現存する2013年版直接比較値は単一回顧資料のため `ANALYSIS_SINGLE_RETROSPECTIVE`。2025年スマスロ版36.7Gは別機種として除外。
- AT「衝激RUSH」: **純増約+2.9枚/G**。
- 基本1セット: **40G+α**（必勝本/K-Navi）。P-WORLDの50G+αとは競合するため平均せずCONFLICT保持。
- PLATONIC BONUS: **約75枚**（P-WORLD実獲得目安）。必勝本/K-Naviの「116枚超払い出し終了」は定義を分けて保持。
- 通常モード: **通常 / 準備 / 天国 / 超天国**。
- 最大規定G: **通常992G / 準備800G / 天国128G / 超天国128G**。
- 通常時状態: **低確 / 高確**の2状態。

### resetBehavior v0.7

- **設定変更時**:
  - 天井までのゲーム数: **再抽選**
  - モード: **再抽選**
  - 状態: **再抽選**
  - 液晶ステージ: **学校ステージ**
- **電源OFF→ONのみ**:
  - 天井までのゲーム数: **引継ぎ**
  - モード: **引継ぎ**
  - 状態: **引継ぎ**
  - 液晶ステージ: **学校ステージ**
- 据え置き+通常電断は上記直接仕様から内部G/モード/状態保持として保存。
- 設定変更時モード振り分け（通常 / 準備 / 天国 / 超天国）:
  - 設定1: **77.5 / 10.0 / 12.2 / 0.3%**
  - 設定2: **72.5 / 15.0 / 12.2 / 0.3%**
  - 設定3: **75.7 / 10.0 / 13.8 / 0.4%**
  - 設定4: **65.7 / 20.0 / 13.8 / 0.4%**
  - 設定5: **73.3 / 10.0 / 16.1 / 0.6%**
  - 設定6: **58.3 / 25.0 / 16.1 / 0.6%**
- 設定変更後の天国以上: **12.5 / 12.5 / 14.2 / 14.2 / 16.7 / 16.7%**。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED**。ただしモード再抽選で準備800G/天国系128Gが選択されるため朝一短縮可能性あり。
- 設定変更時に低確/高確を再抽選することは直接確認済みだが、具体振り分けは再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### 朝一/変更判別

- 設定変更で前日天井進捗は失われる。
- 前日が天国/超天国や高確でも設定変更で再抽選される。
- 設定変更時も電源OFF→ON時も**学校ステージ開始**なので、朝一液晶ステージ単独では変更判別不可。
- 本機固有のガックン/初期出目等は検索語・資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。
- 朝一128G以内当選は天国系選択の可能性を示すが、設定変更確定要素にはしない。

### CONFLICT

- 衝激RUSH基本セットG数: 必勝本/K-Navi **40G+α** vs P-WORLD **50G+α**。平均せず `CONFLICT_40G_VS_50G`。
- PLATONIC BONUS: P-WORLD **約75枚** vs 必勝本/K-Navi **116枚超払い出し終了**。実獲得と払い出し終了条件の定義差として分離。

## 2013-03-04同日群

- **絶対衝激II**（アリストクラートテクノロジーズ） — **720件目 / 今回登録**。
- 前HANDOFFで同日候補として確認済みの **「パチスロ天才バカボン 人類ウナギイヌ化計画を阻止するのだ！」（D-light）** は未処理。
- 03-04群は **OPEN** のまま。

## 次回再開地点

1. **recordCount 720 / chronologicalFrontier 2013-03-04 / 03-04群OPEN** から開始。
2. **「パチスロ天才バカボン 人類ウナギイヌ化計画を阻止するのだ！」（D-light）** を721件目候補として、最新mainで重複再確認後、性能コア+resetBehavior v0.7を収集。
3. 03-04同日群をK-Navi、メーカー/業界記事、当時解析一覧で残存監査し、漏れがなければCLOSED。
4. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### 絶対衝激II
- ドラス / ValuePress 2013-03-04: `https://www.value-press.com/pressrelease/108120`
- K-Navi: `https://p-kn.com/slot/1803/`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/2162/1/38716`
- パチ＆スロ必勝本 AT概要: `https://p.hisshobon.jp/machine/2162/1/38882`
- パチ＆スロ必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2162/1/38881`
- パチ＆スロ必勝本 モード移行率: `https://p.hisshobon.jp/machine/2162/1/39632`
- パチ＆スロ必勝本 状態移行率: `https://p.hisshobon.jp/machine/2162/1/39130`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6991`
- pacnk: `https://pacnk.com/slot/2013/zettaishougeki2/top.php`
- CrankySeven: `https://crankyseven.com/zettaisyougeki-two-pc.htm`
- みんスロ: `https://minslo.com/%E7%B5%B6%E5%AF%BE%E8%A1%9D%E6%BF%80ii/`

### 次候補/境界
- K-Navi 2013年3月新台カレンダー: `https://p-kn.com/calendar/201303/`
