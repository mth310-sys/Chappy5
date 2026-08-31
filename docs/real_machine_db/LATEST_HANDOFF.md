# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再読して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- 160件目 `男気!祭野郎`（2007-09-17）の次として、同日未処理だった `KODA KUMI PACHISLOT LIVE IN HALL`（SANKYO）を161件目に登録。
- **LATEST_HANDOFF基準161件。2007-09-17同日群は今回処理対象としていた候補まで完了。**
- 新規機種は性能コアとv0.7 resetBehaviorを同時収集。欠損は表記・型式・メーカー・資料系統・検索語を変更して十分再探索後のみUNVERIFIED。競合値は平均せずCONFLICT。
- resetBehavior遡及QAは2006-03-27群の次へ進み、最古未補完 `ボンバーマンビクトリーF`（2006-04）を処理。次の未補完候補は `ロックユークイーン3`（2006-04）。

## 今回追加

### 161. KODA KUMI PACHISLOT LIVE IN HALL（SANKYO）

- `docs/real_machine_db/machines/2007-09-17_koda-kumi-pachislot-live-in-hall.md`
- formalModelName: `倖田來未Z4`
- releaseDate: `2007-09-17`
  - グリーンべると2007-07-27当時記事で「納品は9月17日から」。
  - SANKYO公式オンライン博物館は2007.09。
  - Pachibeeは2007-09-18導入表記。納品開始/ホール導入基準差として両方保持。
- generation: 5号機
- systemType: ボーナス + RT / チャンスゾーン
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- main commit: `4cf744cb9ed183ccb799d40431ded2505df6825e`

### 性能コア

SANKYO公式＋2007年当時グリーンべると＋当時パチマガスロマガ＋P-WORLD＋回顧資料を横断。

設定別ボーナス（パチマガ詳細値、SANKYO公式丸め値と一致）:

| 設定 | BIG合成 | LIVE BONUS | REG | 合成 |
|---|---:|---:|---:|---:|
| 1 | 1/528.52 | 1/1424.70 | 1/704.69 | 1/249.19 |
| 2 | 1/504.12 | 1/1394.38 | 1/682.67 | 1/240.06 |
| 3 | 1/489.07 | 1/1285.02 | 1/648.87 | 1/229.15 |
| 4 | 1/474.90 | 1/1285.02 | 1/636.27 | 1/224.44 |
| 5 | 1/448.88 | 1/1285.02 | 1/636.27 | 1/218.45 |
| 6 | 1/404.54 | 1/1285.02 | 1/528.52 | 1/194.47 |

- 通常時ベース: **約40G/1000円**（当時業界記事）
- BIG: 約326〜330枚
- LIVE BONUS: 約200枚
- REG: 約60枚
- LIVE BONUS後: 100G RT `LIVE TIME`へ必ず突入
- BIG/REG後: 50G `CHANCE TIME` → 特殊リプレイ「バタフライ」で100G LIVE TIME
- LIVE TIME: **約+0.4枚/G**
- LIVE TIME中のバタフライで、その地点から100Gを再スタート

### 機械割 CONFLICT

平均せず保持:

- パチマガスロマガ修正後シミュレート:
  - `97.75 / 100.22 / 103.46 / 105.35 / 107.84 / 113.49%`
  - 同ページに旧シミュレータ不具合で10/21以前の誌面値が約1.5%低かった旨の訂正あり。
- 2007年グリーンべると当時記事:
  - 設定1 `97.6%` → 設定6 `111%`
- 5号機クロニクル二次整理:
  - `97.9 / 99.9 / 102.6 / 104.0 / 106.4 / 111.0%`

5号機クロニクルの本機ゲーム性/ボーナス説明にはSANKYO公式・当時解析と明確に整合しない記述があるため、コア根拠には使わず機械割の補助比較のみ。設定6 111%系 vs 113.49%を `CONFLICT`。

### v0.7 resetBehavior

`KODA KUMI PACHISLOT LIVE IN HALL / 倖田來未Z4 / 倖田來未 / SANKYO` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / LIVE TIME / CHANCE TIME / ガックン / 天井` を組み替え、公式・業界・当時解析・旧DB・回顧資料を再探索。

- 通常時ゲーム数天井: `NONE_CONFIRMED`
- リセット専用短縮天井: `NONE_CONFIRMED`
- 朝一専用モード/設定変更専用モード: `NONE_CONFIRMED`
- 朝一特定G以内当選率/公開リセット恩恵率: `NONE_CONFIRMED`
- 有利区間: `NOT_APPLICABLE`
- 設定変更時のLIVE TIME/CHANCE TIME残G・内部RT状態処理: `UNVERIFIED`
- 据え置き時のRT/CZ状態・残G引継ぎ: `UNVERIFIED`
- 電源OFF→ON時のRT/CZ状態・残G処理: `UNVERIFIED`
- 本機固有のガックン/出目/液晶等による設定変更判別: `UNVERIFIED`
- 設定変更挙動から電断挙動を推定転記しない。

## 今回のresetBehavior遡及QA

### ボンバーマンビクトリーF（サミー / 2006-04）

- `docs/real_machine_db/machines/2006-04_bomberman-victory-f.md`
- 性能コアの既存 `COMPLETE_CORE` 判定を維持。
- `qaResetBehavior: PARTIAL` を新設。
- main commit: `017dc1360161c6ad1b21e272a890bb6a849a681a`

再探索結果:

- 全ボーナス後RT `ボンバータイム`、最大3000G、ボム入賞で終了、ナビ/目押しで延命という既存構造を再確認。
- 回顧資料からRT中ナビ回数振り分けに設定差があったことも確認。
- **3000Gは通常時ハマリ天井ではなく、ボーナス後RTの最大継続上限。**
- 通常時ゲーム数天井: `NONE_CONFIRMED`
- リセット専用短縮天井: `NONE_CONFIRMED`
- 有利区間: `NOT_APPLICABLE`
- 設定変更時のRT残G・内部RT・ナビ権利/回数状態: `UNVERIFIED`
- 据え置き時のRT/ナビ状態引継ぎ: `UNVERIFIED`
- 電源OFF→ONのみのRT/ナビ状態処理: `UNVERIFIED`
- 本機固有ガックン/出目/液晶等による変更判別: `UNVERIFIED`
- 朝一専用公開数値: `NONE_CONFIRMED`

## 2007年9月17日境界監査

処理済み:
- `ビーキッズクラブR`（157）
- `ツインビー`（158）
- `DECOICHI`（159）
- `男気!祭野郎`（160）
- `KODA KUMI PACHISLOT LIVE IN HALL`（161）

次回は**09-18〜09-23の漏れ監査**をメーカー別一覧・当時業界記事・古いDBで短く実施し、より早い未処理実導入機がなければ09-24へ進む。

## 9月後続候補

- `ドリスタ -ミントのヒロイン救出大作戦-`（NET）: グリーンべるとで納品 `2007-09-24` 開始予定。
- `エリア88A`（イレブン）: 古い業界資料に `2007-09-25` 発売表記。一次/別系統で導入日を再確認する。
- `戦慄-IF IT HAPPEN（戦慄DD）`: 2007年9月候補。具体導入日未確定のため導入順監査継続。
- その他2007年9月候補として `DIGIParadise / くりぃむしちゅー / ちょいスゴ!!アリババインファンタジア / ぱちすろおり姫は告知がお好き / めんそーれ2-30 / クレイジージョーカー / コータローまかりとおる! / サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / バリバリ伝説 / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 時空大作戦 / 熊酒場30` 等を継承。具体導入日を詰めて時系列に差し込む。

## Bun Bun Maru 境界監査（HOLD継続）

- `Bun Bun Maru-L / -R` は2007年パチスロ5号機としての独立証拠が弱く、同時期のパチンコ系名称との混同リスクがあるため `UNRESOLVED / HOLD` 継続。

## 今回主要出典

### KODA KUMI PACHISLOT LIVE IN HALL
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/526/
- グリーンべると: https://web-greenbelt.jp/00004229/
- パチマガスロマガ ボーナス/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/11/h.php
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/11/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/4858
- パチ7回顧: https://pachiseven.jp/articles/detail/11003
- 5号機クロニクル: https://5goki.com/sankyo

### ボンバーマンビクトリーF reset QA
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2006/04/bomberman-victory
- パチマガスロマガ設定推測: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/99/f.php
- パチマガスロマガFREE回顧: https://pachimaga.com/free/playback/d8be6afb1db37e8e073086d8d8fc6c5aacccef45.php
- グリーンべると: https://web-greenbelt.jp/00004573/

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準161件地点から継続。まず2007-09-18〜09-23をメーカー別一覧・当時業界記事・旧DBで漏れ監査する。**
2. 09-18〜09-23により早い未処理実導入機がなければ、2007-09-24 `ドリスタ -ミントのヒロイン救出大作戦-`（NET）を次の性能コア＋v0.7 resetBehavior対象にする。
3. 09-25 `エリア88A` の具体日を一次/別系統で照合し、順序を確定する。
4. resetBehavior遡及QAは、**次の最古未補完候補 `ロックユークイーン3`（2006-04）**から再開する。その後も既存全レコードを古い順に走査。
5. `戦慄-IF IT HAPPEN（戦慄DD）` の具体導入日は公式/業界/当時解析/古いDBで継続比較し、時系列確定地点へ差し込む。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名とreset関連検索語を組み替えて十分再探索する。
7. 競合値は平均せずCONFLICT。既存COMPLETE_COREの性能完了判定は不用意に崩さずresetBehavior QA状態を別管理する。
8. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの161件地点を正**として継続する。
