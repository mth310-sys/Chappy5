# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- README全文、最新ミッション v0.7、INDEX、既存レコード、直前handoffを最新mainで再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準128件。**
- 127件地点の次候補 `アントニオ猪木も燃えるパチスロ機` と `トリプルクラウン30` の導入境界を再監査。
- 当時グリーンべると2007-04-06記事は猪木を「6月上旬から納品」と明記。P-WORLDは「導入開始 2007年05月」とするため月表記はCONFLICTとして保持したが、具体的な当時納品予定を時系列本線として**2007年6月上旬の未処理機**として登録。
- `トリプルクラウン-30` はALL7.jpで導入予定2007-06-25を確認済みのため、今回の猪木より後として次回候補へ。

## 今回新規追加

### アントニオ猪木も燃えるパチスロ機（HEIWABROS / 平和）

- `docs/real_machine_db/machines/2007-06_antonio-inoki-mo-moeru-pachislot-ki.md`
- 2007-06上旬（時系列本線） / 5号機初期 / ボーナス+完走型RT / REG後CZ。
- パチマガスロマガ精密ボーナス値:
  - BIG合成 1/372.36 → 1/321.25
  - REG合成 1/1024.00 → 1/569.88
  - 全ボーナス合成 1/273.07 → 1/205.44
- 機械割はパチマガスロマガ・シミュレート96.40〜107.66%と、後年整理95.60〜107.61%で設定1〜5に差があるため平均せずCONFLICT。
- BIG約240枚、REG約120枚。闘魂BIG後200G RT、通常BIG後100G RT、REG後8G CZから特殊リプレイ成立で100G RT。
- RT純増は当時グリーンべると約0.6枚/G、後年整理約0.65枚/G、P-WORLD約0.7枚/Gで表記差があるためCONFLICT。
- 通常時天井なし。
- 50枚/1000円ベースは再探索したが、パチマガスロマガ該当ページ自体が「現在調査中」。比較可能値を確定できずUNVERIFIED。

## v0.7 resetBehavior — アントニオ猪木も燃えるパチスロ機

- 通常時ゲーム数天井なし。短縮天井はNOT_APPLICABLE。
- 有利区間はNOT_APPLICABLE。
- 設定変更専用の朝一ゲーム数優遇/短縮天井はNONE_CONFIRMED。
- 設定変更/据え置き/電源OFF→ON時のRT/CZ状態・残G処理、本機固有ガックン/変更判別は表記揺れ・RT名・CZ名・リセット関連語を変えて再探索後もUNVERIFIED。
- P-WORLD掲示板には電源OFF時内部状態を問う投稿が残るが、質問投稿自体は根拠として採用していない。

## resetBehavior遡及QA

### ゴルゴ13 ザ・プロフェッショナルJ

- `docs/real_machine_db/machines/2006-03-27_golgo13-the-professional.md` にv0.7 resetBehaviorを追加。
- パチマガスロマガでSモード最大130P、BIG後必ずSモード突入、Gモードの存在を確認。
- 設定変更/据え置き/電源OFF→ON時のSモード/Gモード状態・残P処理、本機固有ガックンは検索語・資料系統変更後もUNVERIFIED。
- 設定変更専用の短縮天井/朝一初当たり優遇はNONE_CONFIRMED。
- 有利区間はNOT_APPLICABLE。

## 2007年6月境界メモ

処理済み:
- ディスクアップオルタナティブ — 2007-06として登録済み。
- アントニオ猪木も燃えるパチスロ機 — 今回登録。グリーンべると6月上旬納品予定/P-WORLD 2007年05月表記はCONFLICT保持。

次候補:
- `トリプルクラウン-30`（清龍ゲームジャパン）
  - 検定通過: 2007-05-10（後年検定整理）
  - 2007.06リリース表記あり
  - ALL7.jp導入予定: **2007-06-25**
  - 後年整理スペック: 機械割96.47〜107.72%、BIG 1/327.68〜1/262.14、ボーナスゲーム 1/546.13〜1/385.51、合算1/204.80〜1/156.04
  - K-Navi/P-WORLD/後年整理間の設定別確率・呼称差を監査し、同名後継機 `ニュートリプルクラウン30` 等と混同しないこと。
- 2007-06-25には同日に `スーパーキューティーハニー`、`ズーマニア`、`ニューパルサーV`、`モーニング娘。`、`ラーメン王` 等もALL7.jpに掲載。トリプルクラウン登録後、同日導入5号機を漏れ監査して時系列継続する。

## 今回の主要出典

### アントニオ猪木も燃えるパチスロ機
- グリーンべると 2007-04-06: https://web-greenbelt.jp/00004124/
- P-WORLD: https://www.p-world.co.jp/machine/database/4688
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/04/a.php
- パチマガスロマガ 確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/04/h-1.php
- パチマガスロマガ 1000円G数ページ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/04/c.php
- パチスロ救急車: https://www.eightbeat.com/slot99/kishu/a_gyou/a/antonmomoeru5/page_menu.html
- 後年猪木シリーズ整理: https://www.marimo0925.net/pachisuro-rekidai-ranking-inoki/

### ゴルゴ13 resetBehavior QA
- P-WORLD/グリーンべると: https://news.p-world.co.jp/articles/1576/greenbelt
- パチマガスロマガ ATの特徴: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/29/e.php
- パチ7 AT・ART変遷: https://pachiseven.jp/articles/detail/14122

### 次候補トリプルクラウン-30
- ALL7.jp 2007年6月導入予定: https://www.all7.jp/plans/index/2007/06
- P-WORLD: https://www.p-world.co.jp/machine/database/4719
- K-Navi: https://p-kn.com/slot/642/
- 後年検定整理: https://q-and-a.hatenablog.com/entry/2016/10/21/095330
- 後年2007.06スペック整理: https://pachinko.hatenablog.jp/entry/2007/06/tripleCrown-30

取得日: 2026-08-31

## 次回再開地点

1. **`トリプルクラウン-30`（清龍ゲームジャパン、ALL7.jp導入予定2007-06-25）を次の未処理機として性能コア+v0.7 resetBehavior収集。**
2. 設定別確率・機械割はK-Navi/P-WORLD/後年整理を照合し、`ニュートリプルクラウン30`、`トリプルクラウンS2-30` 等の後継スペックと混同しない。競合なら平均せずCONFLICT。
3. 50枚ベース、設定変更/据え置き/電源OFF→ON、朝一、ガックン、ボーナス状態の扱いを表記揺れ・型式名・メーカー名・シリーズ名で十分再探索してからのみUNVERIFIED。
4. `トリプルクラウン-30` 後は2007-06-25同日導入5号機（スーパーキューティーハニー、ズーマニア、ニューパルサーV、モーニング娘。、ラーメン王等）を漏れ監査し、導入順を確定して進む。
5. 発表日・検定日・発売月・納品開始日・ホール導入日を分離し、日付を推測しない。
6. resetBehavior遡及QAはゴルゴ13 ザ・プロフェッショナルJの次の未対応最古レコードを1機以上補完する。既補完機を重複処理しない。
7. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの128件地点を正**として継続する。
