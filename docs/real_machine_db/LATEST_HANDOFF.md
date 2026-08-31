# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- README全文、最新ミッション v0.7、INDEX、既存レコード、直前handoffを最新mainで再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準129件。**
- 128件地点の次の未処理機 `トリプルクラウン-30`（清龍ゲームジャパン）を登録済み。
- 時系列本線はALL7.jpの具体的な導入予定 **2007-06-25** を採用。P-WORLDは導入開始2007年05月、後年整理は2007.06のため日付定義差をCONFLICTとして保持。

## 今回新規追加

### トリプルクラウン-30（清龍ゲームジャパン）

- `docs/real_machine_db/machines/2007-06-25_triple-crown-30.md`
- status: `COMPLETE_CORE`
- qaResetBehavior: `PARTIAL`
- 5号機初期 / ノーマル / 完全告知 / 30Φ沖スロ。
- 本線スペック（P-WORLD・パチマガスロマガ・メーカー由来後年整理で一致）:
  - BIG: 1/327.68 → 1/262.14
  - BG/REG: 1/546.13 → 1/385.51
  - 合算: 1/204.80 → 1/156.04
  - BIG約312枚 / BG・REG約104枚
  - 1000円（50枚）あたり **40.52G**
- 機械割はメーカー由来整理/P-WORLDの96.47〜107.72%と、パチマガスロマガのPAYOUTシミュレート96.95〜107.52%が異なるため平均せずCONFLICT。
- K-NaviにはBIG 1/312.0〜1/247.3、BAR 1/504.1〜1/354.2という別の設定別確率が掲載されるためCONFLICTとして保持。本線値は複数資料一致側。
- 2012年グリーンべるとの `トリプルクラウンZERO-30` 発表記事が「初代トリプルクラウン-30の出玉性能を完全継承」と明記し、初代由来BIG/REG/出玉率の設定1〜6レンジを再確認できる。

## v0.7 resetBehavior — トリプルクラウン-30

- 通常時ゲーム数天井・RT/ART/CZ・ゲーム数管理モードなしとして、天井短縮/モード朝一恩恵はNOT_APPLICABLE / NONE_CONFIRMED。
- 有利区間はNOT_APPLICABLE。
- 設定変更/据え置き/電源OFF→ON時の本機固有の成立済みボーナス処理、リール初動、ガックン等は表記揺れ・型式名・メーカー名・シリーズ名で再探索後もUNVERIFIED。
- 公開朝一専用数値は未確認。

## resetBehavior遡及QA

### お庭でドン（バルテック、2006-04-16）

- `docs/real_machine_db/machines/2006-04-16_oniwa-de-don.md` にv0.7 resetBehaviorを追加。
- 既存の性能コア `PARTIAL` は維持し、リセットQAを別管理。
- パチマガスロマガで赤7BIG約312枚 / 青7BIG約264枚 / 白7BIG約202枚、赤7BIG後100G RTを再確認し、既存のグリーンべると丸め値（約310/260/200枚）と整合。
- 設定別機械割/設定別BIG確率/50枚ベースは追加再探索でも確定できず既存UNVERIFIEDを維持。パチマガスロマガ機種メニュー自体が「ボーナス確率・PAYOUT→特にナシ」。
- 設定変更/据え置き/電源OFF→ON時の100G RT残G・内部RT状態、本機固有ガックンは十分再探索後もUNVERIFIED。
- 通常時天井、朝一専用ゲーム数モード、リセット短縮天井はNONE_CONFIRMED。有利区間はNOT_APPLICABLE。

## 2007年6月25日境界メモ

処理済み:
- ディスクアップオルタナティブ — 2007-06として登録済み。
- アントニオ猪木も燃えるパチスロ機 — 2007-06上旬時系列本線で登録済み。
- トリプルクラウン-30 — 今回、2007-06-25本線で登録済み。

同日未処理候補（ALL7.jp 2007-06-25）:
- スーパーキューティーハニー（エレコ）
- ズーマニア（アリストクラート）
- ニューパルサーV（山佐）
- モーニング娘。（ビスティ）
- ラーメン王（オーイズミ）

### 次候補の事前確認 — スーパーキューティーハニー

- ユニバーサル公式: 5号機、エレコ、ボーナス+RT、発売2007年6月。
- 公式: BIG約327枚、BIG後RT「キューティーゲーム」、約+0.5枚/G、最大999G、チェリー出現またはBIG当選まで継続。
- 後年解析: 設定1/4/6の3段階、BIG合算1/474.9 / 1/442.8 / 1/394.8、機械割98.3 / 101.5 / 106.8%。
- ALL7.jpの2007-06-25同日候補として、次回は導入日定義・設定別BIG詳細・ベース・resetBehaviorを複数系統照合してから登録する。

## 今回の主要出典

### トリプルクラウン-30
- ALL7.jp: https://www.all7.jp/plans/index/2007/06
- P-WORLD: https://www.p-world.co.jp/machine/database/4719
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/02/a.php
- パチマガスロマガ 確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/02/h.php
- パチマガスロマガ 1000円G数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/02/c.php
- グリーンべると 2012年初代性能継承確認: https://web-greenbelt.jp/00001447/
- K-Navi競合値: https://p-kn.com/slot/642/
- 清龍5号機整理: https://5goki.com/seiryu
- 検定通過整理: https://q-and-a.hatenablog.com/entry/2016/10/21/095330

### お庭でドン resetBehavior QA
- グリーンべると: https://web-greenbelt.jp/00004571/
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/45/a.php
- パチマガスロマガ 機種メニュー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/45/baltech_slot_45.php
- パチマガスロマガ RT演出: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/45/h.php

### 次候補スーパーキューティーハニー
- ユニバーサル公式: https://www.universal-777.com/product/slot/super_cutiehoney/
- P-WORLD: https://www.p-world.co.jp/machine/database/4798
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/70/a.php
- 後年設定別整理: https://pacnk.com/slot/tools/sh_superqthani.html

取得日: 2026-08-31

## 次回再開地点

1. **2007-06-25同日未処理5号機を漏れ監査し、最古未処理として `スーパーキューティーハニー` を第一候補に性能コア+v0.7 resetBehavior収集。**
2. スーパーキューティーハニーは公式のBIG約327枚/RT約+0.5枚/G/最大999Gと、解析資料の設定1・4・6 BIG確率/機械割を別系統照合。50枚ベースも「1000円/コイン持ち/ベース」で再探索する。
3. その後、同日候補 `ズーマニア`、`ニューパルサーV`、`モーニング娘。`、`ラーメン王` の実導入/納品順を監査し、未処理を飛ばさず進む。
4. 発表日・検定日・発売月・納品開始日・ホール導入日を分離し、日付を推測しない。
5. resetBehavior遡及QAは `お庭でドン` の次の未対応最古レコードを1機以上補完する。既補完機を重複処理しない。
6. 既存COMPLETE_COREは性能コア完了として維持し、リセットQA状態を別管理する。
7. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの129件地点を正**として継続する。
