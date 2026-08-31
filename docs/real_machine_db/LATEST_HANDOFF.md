# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- READMEと最新ミッション v0.7 を継続適用。
- **LATEST_HANDOFF基準125件。**
- 前回124件地点から、2007年5月未処理候補 `機動警察パトレイバーX`（アビリット系）を新規追加。
- 5号機クロニクルでは `機動警察パトレイバー` と `機動警察パトレイバーX` を同じ2007年5月の別機種として掲載。ボーナス確率は同系統だが、差分仕様を高信頼資料で確定するまで同一性能扱いせず、今回はXのみ独立登録。
- パトレイバーX: BIG 1/329.33→1/267.49、CT 1/512.00→1/425.56、合成 1/200.42→1/164.25、1000円33.72→34.47G。SUPER BIG約305枚、NORMAL BIG約275枚、CT技術介入MAX約125枚。
- 通常時スイカ成立で25G RTへ移行する構造を確認。RTの1Gあたり純増は今回の再探索では比較可能な高信頼数値を確定できずUNVERIFIED。
- 機械割はパチマガスロマガ98.24 / 101.51 / 104.80 / 108.49%と、5号機クロニクル97.0 / 101.0 / 104.9 / 109.4%が競合するためCONFLICT。平均しない。
- resetBehaviorは通常時ゲーム数天井、朝一専用ゲーム数モード、短縮天井、設定変更専用初当たり優遇はNONE_CONFIRMED。有利区間はNOT_APPLICABLE。25G RTの設定変更/据え置き/電源OFF→ON時残G・内部状態処理、本機固有ガックンはUNVERIFIED。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを正として継続する。

## 今回新規追加

### 機動警察パトレイバーX（アビリット系）

- `docs/real_machine_db/machines/2007-05_kidou-keisatsu-patlabor-x.md`
- 2007-05 / 5号機初期 / A+RT / 完走型RT / BIG中ナビ変動 / 同時成立のみ。
- 設定構成: 1 / 2 / 5 / 6。
- BIG: 1/329.33 / 1/307.68 / 1/288.71 / 1/267.49。
- CT: 1/512.00 / 1/474.90 / 1/442.81 / 1/425.56。
- ボーナス合成: 1/200.42 / 1/186.71 / 1/174.76 / 1/164.25。
- 1000円あたり: 33.72 / 33.95 / 34.21 / 34.47G。
- SUPER BIG約305枚、NORMAL BIG約275枚、CT技術介入MAX約125枚。
- 通常時スイカで25G RT。
- 機械割: CONFLICT（パチマガスロマガ98.24〜108.49% / 5号機クロニクル97.0〜109.4%）。
- status: COMPLETE_CORE（主要性能値は揃う。機械割競合は根拠双方保持）。
- resetBehavior QA: PARTIAL。

## 前回までの主要追加

### バーニングフラワー25（岡崎産業）

- `docs/real_machine_db/machines/2007-05_burning-flower-25.md`
- 2007-05 / 5号機初期 / A+RT / 完全告知 / 25Φ。
- BIG合成: 1/399.61 → 1/327.68。
- REG: 1/799.22 → 1/655.36。
- ボーナス合算: 1/266.41 → 1/218.45。
- 1000円あたり: 38.13G → 46.87G。
- BIG約360枚、REG約97枚。赤7BIG後100G RT。
- 機械割: CONFLICT（パチマガスロマガ94.23〜109.72% / 5号機クロニクル共通項目94.7〜107.9%）。
- status: COMPLETE_CORE。
- resetBehavior QA: PARTIAL。

### バーニングフラワー30（岡崎産業）

- `docs/real_machine_db/machines/2007-05_burning-flower-30.md`
- 2007-05 / 5号機初期 / A+RT / 完全告知 / 30Φ。
- BIG合成: 1/404.54 → 1/350.46。
- REG: 1/579.96 → 1/504.12。
- ボーナス合算: 1/238.31 → 1/206.74。
- 1000円あたり: 39.09G → 47.33G。
- BIG約360枚、REG約97枚。赤7BIG後100G RT。
- 機械割: 94.70 / 96.85 / 100.21 / 101.21 / 104.59 / 107.86%。
- status: COMPLETE_CORE。
- resetBehavior QA: PARTIAL。

## resetBehavior遡及QA

### 平成カツヲ伝説

- `docs/real_machine_db/machines/2006-02-19_heisei-katsuo-densetsu.md` はv0.7形式へ補完済み。
- 性能コア既存値を維持しつつ、HAZUSE追加照合で設定別BIG/CT確率を複数資料一致へ改善。
- HAZUSEで特殊リプレイ成立時3G RTを確認。
- 通常時ゲーム数天井、朝一専用モード、設定変更専用短縮天井/初当たり優遇はNONE_CONFIRMED。
- 3G RTの設定変更/据え置き/電源OFF→ON時残G・内部状態処理、本機固有ガックンは十分再探索後もUNVERIFIED。
- 有利区間はNOT_APPLICABLE。
- resetBehavior QA: PARTIAL。

## 2007年5月監査メモ

既登録または登録済み確認:
- `アストロ球団`
- `SASHIBA（サシバE-30）`
- `うる星やつら`
- `常夏アロハ`
- `アクアビーナス30`
- `もえろ!ハーレムエース`
- `三國志`
- `ジャックポットトロピカルバージョン30`
- `バーニングフラワー25`
- `バーニングフラワー30`
- `機動警察パトレイバーX` — 今回追加。

未処理候補:
- `機動警察パトレイバー`（無印2007年版）
- `けものっち!`
- その他2007年5月漏れ候補

時系列補正メモ:
- `機動警察パトレイバー` / `機動警察パトレイバーX` は5号機クロニクルおよび後年年表で2007年5月。無印とXは別掲載されているが、ボーナス確率は同系統。差分仕様を確定するまで片方の値を他方へ自動転記しない。
- `機動警察パトレイバー(/X)` は2007-02-13東京都公安委員会告示の検定情報にCS機動警察パトレイバーを確認済み。日単位の全国納品/ホール導入日は今回も未確定。
- `けものっち!` は2007-05-22ケータイWatchで「実機導入に先がけて」アプリ先行配信と明記されるため、5/22以前の実導入として扱わない。
- `トリプルクラウン30` は2007年6月候補。
- `アントニオ猪木も燃えるパチスロ機` は当時一次記事で6月上旬納品のため6月候補。
- `ディスクアップオルタナティブ` は4〜6月資料競合を保持し、納品/ホール導入根拠を追加探索してから月確定する。

## 今回の主要出典

### 機動警察パトレイバーX
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/kyotai.php
- パチマガスロマガ 確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/h.php
- パチマガスロマガ 1000円G/スイカRT25G: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/c.php
- パチマガスロマガ ボーナス中: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/e.php
- パチマガスロマガ 単独成立なし: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/16/k.php
- 5号機クロニクル コナミ/アビリット: https://5goki.com/konami
- P-WORLD 無印2007年版: https://www.p-world.co.jp/machine/database/4591

### バーニングフラワー25/30
- パチマガスロマガ 25 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/54/a.php
- パチマガスロマガ 25 確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/54/h.php
- パチマガスロマガ 25 1000円G: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/54/c.php
- パチマガスロマガ 30 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/55/a.php
- パチマガスロマガ 30 確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/55/h.php
- パチマガスロマガ 30 1000円G: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/55/c.php
- P-WORLD 25: https://www.p-world.co.jp/machine/database/4695
- P-WORLD 30: https://www.p-world.co.jp/machine/database/4696
- 5号機クロニクル 岡崎産業: https://5goki.com/okazaki

取得日: 2026-08-31

## 次回再開地点

1. **2007年5月の時系列監査を継続。まず無印 `機動警察パトレイバー` の型式/筐体/仕様差をXと比較し、独立スペックとして保存すべきか確定する。**
2. 無印版は5号機クロニクルでXとは別掲載だが、ボーナス確率は同系統。Xの性能値を無条件転記せず、メーカー/業界記事、当時解析、古いDB、検定情報で差分を確認する。
3. 無印版処理後、`けものっち!` の納品開始日を一次/当時業界資料で優先探索し、性能コア＋v0.7 resetBehaviorを登録する。
4. `けものっち!` は2007-05-22のアプリ先行配信記事より前に実機導入済みと扱わない。
5. パトレイバーXは再登録不要。正式型式名、日単位導入、RT純増、reset時RT処理の確定資料が見つかった場合のみQA補完する。
6. 発表日・検定日・発売月・納品開始日・ホール導入日を分離し、日付を推測しない。
7. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・性能項目名・リセット関連語・資料系統を変えて十分再探索してからのみ残す。CONFLICTは平均しない。
8. resetBehavior遡及QAは `平成カツヲ伝説` より後の未対応最古レコードを1機以上補完する。既補完機を重複処理しない。
9. INDEXは旧19件地点のため更新競合を避け、README規定どおり**LATEST_HANDOFFの125件地点を正**として継続する。
