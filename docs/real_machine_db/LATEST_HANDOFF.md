# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- 159件目 `DECOICHI`（2007-09-17）の次として、同日未処理の `男気!祭野郎`（藤興）を160件目に登録。
- **LATEST_HANDOFF基準160件。**
- 新規機種は性能コアとv0.7 resetBehaviorを同時収集。欠損は表記・型式・メーカー・資料系統・検索語を変更して十分再探索後のみUNVERIFIED。競合値は平均せずCONFLICT。

## 今回追加

### 160. 男気!祭野郎（藤興）

- `docs/real_machine_db/machines/2007-09-17_otokogi-matsuri-yaro.md`
- releaseDate: `2007-09-17`
  - グリーンべると2007-09-21記事で、兵庫県先行導入後、9月17日から本格納品開始を確認。
- generation: 5号機
- systemType: ボーナス + RT / ART（RT延命・残RTのART化）
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- main commit: `fc43870aeb7b3c0e3f07a895ac905cfa945e87ef`

### 性能コア

パチマガスロマガ当時解析＋グリーンべると業界記事＋P-WORLD＋5号機クロニクルを横断:

- 赤BIG: `1/992.97 → 1/689.85`
- 青BIG: `1/992.97 → 1/744.73`
- REG: `1/655.36 → 1/771.01`
- BIG合成: `1/496.48 → 1/358.12`
- 全ボーナス合成: `1/282.48 → 1/244.54`
- グリーンべると一次記事の合成約`1/283 → 1/245`と両端一致。
- 1000円あたりゲーム数: **全設定共通36.56G**（チェリー後1G RT非考慮という当時解析注記あり）。
- 赤/青BIG実獲得目安: 約`260枚`
- 赤7・赤7・青7ボーナス実獲得目安: 約`70枚`
- 規定払い出し終了条件: BIG 390枚超、小ボーナス100枚超。
- RT「男気タイム」: 最大`500G`、約`+0.5枚/G`。
- ART「スーパー男気タイム」: 約`+0.8枚/G`。男気タイム中のボーナス当選で残りRTがART化。

### 機械割 CONFLICT

平均せず双方保持:

- パチマガスロマガ当時シミュレート:
  - `97.76 / 99.22 / 101.41 / 103.64 / 105.79 / 108.37%`
- 5号機クロニクル / 2008年当時整理:
  - `96 / 98 / 100 / 104 / 107 / 110%`

設定別ボーナス確率は両系列でほぼ一致する一方、機械割は最大約1.6pt差。算出条件差を確定できないため `CONFLICT`。

### v0.7 resetBehavior

`男気!祭野郎 / 男気祭野郎 / 藤興` と `設定変更 / リセット / 朝一 / 据え置き / 電源 / 天井 / RT / 男気タイム / スーパー男気タイム / ガックン` を組み替え、当時解析・業界記事・旧DB・回顧資料を再探索。

- 通常時ゲーム数天井: `NONE_CONFIRMED`
- リセット専用短縮天井: `NONE_CONFIRMED`
- 朝一専用モード/設定変更専用モード振り分け: `NONE_CONFIRMED`
- 朝一特定G以内当選率/公開リセット恩恵率: `NONE_CONFIRMED`
- 有利区間: `NOT_APPLICABLE`
- 設定変更時の男気タイム/スーパー男気タイム状態・残G・チェリーナビ権利処理: `UNVERIFIED`
- 据え置き時のRT/ART状態・残G・ナビ権利処理: `UNVERIFIED`
- 電源OFF→ON時のRT/ART状態・残G・ナビ権利処理: `UNVERIFIED`
- 本機固有のガックン/出目/液晶等による設定変更判別: `UNVERIFIED`
- 設定変更挙動から電断挙動を推定転記しない。

## 2007年9月17日境界監査

処理済み:
- `ビーキッズクラブR`（157）
- `ツインビー`（158）
- `DECOICHI`（159）
- `男気!祭野郎`（160）

未処理同日候補:
- **`KODA KUMI PACHISLOT LIVE IN HALL`（SANKYO）**
  - 直前リレーで当時業界記事アーカイブから9月17日納品開始を先行確認済み。
  - BIG約330枚、REG約60枚、ライブボーナス約200枚、100G RT約+0.4枚/G、通常時1000円約40Gも先行確認済み。
  - 次回はSANKYO公式/P-WORLD/当時パチマガ等を優先して設定別確率・機械割・resetBehaviorを照合し登録する。

**KODA KUMI処理完了前に9月24日群へ進まない。**

## 9月後続候補

- `ドリスタ -ミントのヒロイン救出大作戦-`（NET）: グリーンべるとで納品 `2007-09-24` 開始予定。
- `エリア88A`（イレブン）: 古い業界資料に `2007-09-25` 発売表記。一次/別系統で導入日を再確認する。
- `戦慄-IF IT HAPPEN（戦慄DD）`: 2007年9月候補。具体導入日未確定のため導入順監査継続。
- その他2007年9月候補として `DIGIParadise / くりぃむしちゅー / ちょいスゴ!!アリババインファンタジア / ぱちすろおり姫は告知がお好き / めんそーれ2-30 / クレイジージョーカー / コータローまかりとおる! / サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / バリバリ伝説 / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 時空大作戦 / 熊酒場30` 等を継承。具体導入日を詰めて時系列に差し込む。

## Bun Bun Maru 境界監査（HOLD継続）

- `Bun Bun Maru-L / -R` は2007年パチスロ5号機としての独立証拠が弱く、同時期のパチンコ系名称との混同リスクがあるため `UNRESOLVED / HOLD` 継続。

## 今回主要出典

### 男気!祭野郎
- グリーンべると: https://web-greenbelt.jp/00006442/
- P-WORLD: https://www.p-world.co.jp/machine/database/4908
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fujikou_slot/01/a.php
- パチマガスロマガ ボーナス/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fujikou_slot/01/h.php
- パチマガスロマガ 小役/1000円ゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fujikou_slot/01/c.php
- パチマガスロマガ BIG中: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fujikou_slot/01/e.php
- 5号機クロニクル: https://5goki.com/others
- 2008年当時整理資料: https://slbl.blog.shinobi.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%EF%BC%9A%E3%81%82%E8%A1%8C/%E7%94%B7%E6%B0%97%EF%BC%81%E7%A5%AD%E3%82%8A%E9%87%8E%E9%83%8Ear

取得日: 2026-08-31

## 次回再開地点

1. **LATEST_HANDOFF基準160件地点から継続。2007-09-17同日未処理の `KODA KUMI PACHISLOT LIVE IN HALL`（SANKYO）を次に処理する。**
2. KODA KUMIで性能コア＋v0.7 resetBehaviorを登録し、9月17日同日群を完了させる。
3. その後09-18〜09-23をメーカー別一覧・当時業界記事で漏れ監査し、未処理がなければ2007-09-24 `ドリスタ` へ進む。
4. `戦慄-IF IT HAPPEN（戦慄DD）` の具体導入日は公式/業界/当時解析/古いDBで継続比較し、時系列確定地点へ差し込む。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名とreset関連検索語を組み替えて十分再探索する。
6. 競合値は平均せずCONFLICT。既存COMPLETE_COREの性能完了判定は不用意に崩さずresetBehavior QA状態を別管理する。
7. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの160件地点を正**として継続する。
