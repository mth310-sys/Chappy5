# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコード、直近コミットを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- 156件目 `恐怖新聞`（2007-09-10）の後、2007-09-17同日群として `ビーキッズクラブR`（157）、`ツインビー`（158）がmainへ追加済み。
- 今回、同日未処理の `DECOICHI`（タイヨー）を159件目として登録。
- **LATEST_HANDOFF基準159件。**
- 新規機種は性能コアとv0.7 resetBehaviorを同時収集。欠損は検索語・資料系統変更後のみUNVERIFIED、競合値は平均せず保持。

## 直近追加

### 157. ビーキッズクラブR（オリンピア）
- `docs/real_machine_db/machines/2007-09-17_bee-kids-club-r.md`
- releaseDate: `2007-09-17`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- main commit: `a9c0132bcee0d6db42dbf6967485d7cf84b7c543`

### 158. ツインビー（KPE）
- `docs/real_machine_db/machines/2007-09-17_twinbee.md`
- releaseDate: `2007-09-17`
- 型式: `ツインビーJG`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 重要reset特性: パチマガスロマガ当時解析で、BIG後998G / REG後573Gの天井RTカウンタは**設定変更でも引継ぎ**を確認。
- main commit: `a93b4fbdb7da757dbffbf5c4a8ee7c795ffb67d0`

### 159. DECOICHI（タイヨー）

- `docs/real_machine_db/machines/2007-09-17_decoichi.md`
- 型式: `D51α`
- releaseDate: `2007-09-17`
  - グリーンべると2007-08-31記事が納品9月17日開始を明記。
  - 東京都公安委員会告示の当時転載資料で `D51α` 検定通過を確認。
- generation: 5号機
- systemType: ノーマル / ボーナス主体 + スーパーゾーン
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

#### 性能コア

パチマガスロマガ当時解析＋グリーンべると一次記事を照合:

- BIG合成: `1/264.26 → 1/228.35`
- CT合成: `1/399.61 → 1/287.44`
- ボーナス合成: `1/159.07 / 1/152.76 / 1/146.94 / 1/139.14 / 1/132.13 / 1/127.25`（設定1〜6）
- 1000円あたりゲーム数: `35.90 / 36.35 / 36.81 / 37.28 / 37.76 / 38.26G`
- SPECIAL BIG実獲得目安: 約`336枚`
- SUPER BIG実獲得目安: 約`260枚`
- NORMAL BIG実獲得目安: 平均約`230枚`
- 規定払い出し終了条件: SPECIAL BIG 346枚超、SUPER/NORMAL BIG 286枚超、CT 91枚超。
- スーパーゾーン: 最大`50G`、平均`20G`。ゾーン中に成立したNORMAL BIGでは3択15枚役が完全ナビされる。

#### 機械割欠損

- `DECOICHI / デコイチ / D51α / タイヨー` と `機械割 / PAYOUT / 出玉率 / 設定1 / 設定6` を組み替えて再探索。
- P-WORLD、パチマガスロマガ、HAZUSE、当時業界記事、古い5号機一覧・回顧資料を横断。
- パチマガスロマガ当時ページ自体がPAYOUTを `現在調査中` としており、設定別機械割を高信頼で確定できなかったため `UNVERIFIED`。推定値は入れない。

#### v0.7 resetBehavior

- `DECOICHI / デコイチ / D51α / タイヨー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / スーパーゾーン / 高確 / ガックン` を組み替えて再探索。
- 通常時ゲーム数天井: `NONE_CONFIRMED`
- リセット専用短縮天井: `NONE_CONFIRMED`
- 朝一専用モード/設定変更専用モード振り分け: `NONE_CONFIRMED`
- 朝一特定G以内当選率/公開リセット恩恵率: `NONE_CONFIRMED`
- 有利区間: `NOT_APPLICABLE`
- 設定変更時のスーパーゾーン/高確状態処理: `UNVERIFIED`
- 据え置き時のスーパーゾーン残G/内部状態処理: `UNVERIFIED`
- 電源OFF→ONのみのスーパーゾーン/内部状態処理: `UNVERIFIED`
- 本機固有のガックン/出目/ランプによる変更判別: `UNVERIFIED`
- スーパーゾーン表示ランプは通常時の状態表示であり、朝一変更判別の根拠としては転用しない。

## 2007年9月17日境界監査

処理済み:
- `ビーキッズクラブR`
- `ツインビー`
- `DECOICHI`

未処理同日候補:
- **`男気!祭野郎`（藤興）** — グリーンべると2007-09-21記事で9月17日から本格納品開始を確認。RT「男気タイム」最大500G、約+0.5枚/G、スーパー男気タイム約+0.8枚/G、赤/青BB約260枚、赤7赤7青7約70枚、合成約1/283〜1/245を一次記事で先行確認済み。
- **`KODA KUMI PACHISLOT LIVE IN HALL`（SANKYO）** — 当時業界記事アーカイブで納品9月17日開始、BIG約330枚、REG約60枚、ライブボーナス約200枚、100G RT約+0.4枚/G、通常時1000円約40Gを先行確認。次回はより一次性の高いSANKYO/P-WORLD/当時解析で照合してから登録する。

同日群完了前に9月24日群へ進まない。

## 9月後続候補の先行確認

- `ドリスタ -ミントのヒロイン救出大作戦-`（NET）: グリーンべるとで納品 `2007-09-24` 開始予定。
- `エリア88A`（イレブン）: 古い業界資料に `2007-09-25` 発売表記。一次/別系統で導入日を再確認する。
- `戦慄-IF IT HAPPEN（戦慄DD）`: 2007年9月候補。具体導入日未確定のため導入順監査継続。
- 2007年9月には `DIGIParadise / くりぃむしちゅー / ちょいスゴ!!アリババインファンタジア / ぱちすろおり姫は告知がお好き / めんそーれ2-30 / クレイジージョーカー / コータローまかりとおる! / サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / バリバリ伝説 / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 時空大作戦 / 熊酒場30` 等も存在確認済み。具体導入日を詰めて順次処理する。

## resetBehavior遡及QA進捗

- 既存レコードは少なくとも2006-03-27収録群までv0.7 resetBehavior補完済みであることを継承。
- 新規収集を止めず、QA時にその次の時系列既存レコードから欠損確認を継続する。

## Bun Bun Maru 境界監査（継続HOLD）

- `Bun Bun Maru-L / -R` は2007年パチスロ5号機としての独立証拠が弱く、同時期のパチンコ系名称との混同リスクがあるため `UNRESOLVED / HOLD` 継続。

## 今回の主要出典

### DECOICHI
- グリーンべると: https://web-greenbelt.jp/00004267/
- P-WORLD: https://www.p-world.co.jp/machine/database/4901
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/59/h.php
- パチマガスロマガ 小役/1000円ゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/59/c.php
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/59/a.php
- HAZUSE: https://hazuse.com/i/data/decoichi/top.htm
- Pマンズ検定情報アーカイブ: https://p-mans.blogspot.com/2007/06/

### 次候補境界
- 男気!祭野郎 — グリーンべると: https://web-greenbelt.jp/00006442/
- KODA KUMI PACHISLOT LIVE IN HALL — 当時記事アーカイブ: https://plaza.rakuten.co.jp/pachinkoworker/diaryall/
- ドリスタ — グリーンべると: https://web-greenbelt.jp/00004270/

取得日: 2026-08-31

## 今回GitHub反映

- `ビーキッズクラブR`: `a9c0132bcee0d6db42dbf6967485d7cf84b7c543`
- `ツインビー`: `a93b4fbdb7da757dbffbf5c4a8ee7c795ffb67d0`
- `DECOICHI`: `1a5c481cdb3a6e5c97d10d20298b46b7745ac80c`
- 本LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **LATEST_HANDOFF基準159件地点から継続。2007-09-17同日未処理群の `男気!祭野郎` と `KODA KUMI PACHISLOT LIVE IN HALL` を実導入順/同日扱いを確認しながら処理する。**
2. 9月17日群完了後、09-18〜09-23をメーカー別一覧・当時業界記事で漏れ監査し、未処理がなければ2007-09-24 `ドリスタ` へ進む。
3. `戦慄-IF IT HAPPEN（戦慄DD）` の具体導入日は引き続き公式/業界/当時解析/古いDBで比較し、時系列が確定した地点へ差し込む。
4. 新規機種は性能コア＋v0.7 resetBehaviorを同時収集する。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名とリセット関連検索語を組み替え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を十分再探索する。
6. 競合値は平均せずCONFLICT。既存COMPLETE_COREの性能完了判定は不用意に崩さずリセットQA状態を別管理する。
7. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの159件地点を正**として継続する。
