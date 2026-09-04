# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **647**
- latestMachineAdded: **パチスロ「モンスターハンター」**（ロデオ）
- latestRecord: `docs/real_machine_db/machines/2012-03-26_monster-hunter.md`
- chronologicalFrontier: **2012-03-26**
- frontierLatestExactDateMachine: **パチスロ「モンスターハンター」**
- schema: **resetBehavior v0.7**
- status: **2012-03-26_GROUP_OPEN__CONTINUE_SAME_DAY_AUDIT**

## 今回の同期・時系列監査

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコードを確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時はrecordCount 646 / frontier 2012-03-19 / ニューアイムジャグラーEX。
- 前handoff指定の次候補ロデオ「パチスロ『モンスターハンター』」を想定path直接fetchで未登録確認。
- K-Navi・パチ＆スロ必勝本は2012-03-26導入、HAZUSEは同一型式について2012-04-02導入開始としており具体日CONFLICT。漏れ防止のため最古具体日2012-03-26を時系列キーとして647件目に登録。
- 03/26同日群はまだ閉じていない。次回は同日候補をK-Navi/HAZUSE/P-WORLD/当時業界記事で再監査してから次日へ進む。

## 今回の本線追加 — パチスロ「モンスターハンター」

### 導入日・型式

- 時系列キー: **2012-03-26**。
- K-Navi: 2012-03-26ホール導入開始。
- パチ＆スロ必勝本: 2012-03-26導入。
- HAZUSE: 2012-04-02導入開始。
- 同一型式について具体日が競合するため `CONFLICT_EXACT_DATE_2012-03-26_VS_2012-04-02` として保持。
- formalModelName: **モンスターハンターZS**。
- approvalNumber: **1S1230**。

### 性能コア

- systemType: **5号機 A+ART / ボーナス+ゲーム数上乗せART**。
- HAZUSE系機械割: **97.1 / 98.5 / 100.3 / 104.5 / 108.6 / 116.0%**。
- 必勝本シミュレート機械割: **97.30 / 99.05 / 100.92 / 104.90 / 110.12 / 115.89%**。平均せずCONFLICT保持。
- ボーナス合算: **1/248.2 / 242.7 / 237.5 / 224.4 / 211.4 / 199.8**。
- ART初当たり整理値: **1/612.0 / 588.3 / 566.1 / 512.7 / 445.7 / 388.9**。
- 50枚ベース: **30.01G（設定1）〜30.10G（設定6）**。
- ART「モンハンRUSH」: **30〜500G+α / 約+1.5枚/G**。
- 最大獲得: ラージャンBONUS約24枚、狩猟/大連続狩猟BONUS約210枚、BIG約210枚、アイルーボーナス約50枚。
- 通常天井: **ボーナス間1400G**。到達時は**300G or 500G ARTを1:1**。

### resetBehavior v0.7

- **設定変更で天井ゲーム数リセット**を本機専用の当時解析から直接確認。
- 設定変更時の内部状態再抽選も具体率まで直接回収。
  - 設定1〜3: 低確A **75.00%** / 高確A **15.00%** / 高確B **5.00%** / 高確C **5.00%**。
  - 設定4〜6: 低確A **66.67%** / 高確A **23.33%** / 高確B **5.00%** / 高確C **5.00%**。
  - 高確以上合計は設定1〜3 **25.00%**、設定4〜6 **33.33%**。
- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 開始背景は単純固定ではなく、変更前の状況に応じてポッケ村外観/突入直前背景/変更前背景引継ぎとなるため、液晶背景だけの単純変更判別は困難。
- 据え置き時の天井/内部状態の厳密な保持、単純電源OFF→ON、ガックン等は本機名を明示する直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。後継モンハンシリーズの仕様は流用しない。
- 有利区間は `NOT_APPLICABLE_5TH_GEN`。

## 時系列監査 / 次回再開地点

1. **recordCount 647 / chronologicalFrontier 2012-03-26**から開始。
2. **2012-03-26同日群を継続監査**する。モンスターハンター以外の具体日付き未登録5号機がないかK-Navi/HAZUSE/P-WORLD/パチビー/当時業界記事を横断する。
3. 03/26群を閉じるまでは次日へ飛ばさない。
4. HAZUSE上で本機が04/02表記のため、04/02到達時は重複登録せず既存レコードのreleaseDate conflictを参照する。
5. PARTIAL/UNVERIFIEDは機種名表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/モード/状態/ガックンを組み替えて再探索し、競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi モンスターハンター: `https://p-kn.com/slot/1596/`
- 必勝本 基本スペック: `https://p.hisshobon.jp/machine/1988/1/33626`
- 必勝本 設定変更&天井情報: `https://p.hisshobon.jp/machine/1988/1/33904`
- 必勝本 ART概要: `https://p.hisshobon.jp/machine/1988/1/33633`
- 必勝本 小役確率: `https://p.hisshobon.jp/machine/1988/1/34432`
- 必勝本 ボーナス&小役構成: `https://p.hisshobon.jp/machine/1988/1/33627`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S1230/`
- パチナビ: `https://pachinavi.net/machines/monhan-1/`
- GameBusiness.jp: `https://www.gamebusiness.jp/article/2012/02/14/5426.html`

## GitHub commits

- パチスロ「モンスターハンター」 machine record: `247e9274b56a313ff5d54f7c5fcd6e35a4edaa9a`
