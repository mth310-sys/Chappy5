# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 163件目 `エリア88`（型式 エリア88A、イレブン、2007-09-25）までの最新進捗を引継ぎ。
- 2007-09-26〜09-30および残存9月候補を漏れ監査した結果、**`ぱちすろ おり姫は告知がお好き` は当時業界記事で2007-09-16納品開始予定と確定し、既存時系列より前の未処理漏れと判明。**
- **164件目として `ぱちすろ おり姫は告知がお好き`（銀座、2007-09-16）を遡及登録。** 件数上の追加順は164件目だが、時系列上は2007-09-16位置へ差し込む。
- 新規レコード: `docs/real_machine_db/machines/2007-09-16_orihime-kokuchi.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `442f19b466ef51ca3339f1114e9097c14be3570d`
- resetBehavior遡及QAは前回の `ロックユークイーン3`（2006-04）まで進行した状態を維持。

## 163. エリア88

- manufacturer: イレブン
- formalModelName: `エリア88A`
- releaseDate: `2007-09-25`
- generation: 5号機
- systemType: ボーナス + RT / チャンスゾーン
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- record: `docs/real_machine_db/machines/2007-09-25_area88-a.md`
- record commit: `14d9036f1e83059783f2b6934d05530ed800221b`

性能コア:
- SBIG合算 `1/512.00 → 1/372.36`
- NBIG合算 `1/1024.00 → 1/744.73`
- 全ボーナス合算 `1/341.33 → 1/248.24`
- PAYOUT（シミュレート） `96.63 → 110.73%`
- 1000円あたり `48.59 → 53.23G`
- 赤SBIG純増約377枚 / 青SBIG約283枚 / NBIG約188枚
- CZからRT `リプレイミッション` へ。RT純増/G・継続G数は高信頼資料で確定できずUNVERIFIED。

resetBehavior:
- 通常時天井、リセット短縮天井、朝一専用モード、公開朝一数値: NONE_CONFIRMED
- 有利区間: NOT_APPLICABLE
- 設定変更/据え置き/電断時のCZ・RT状態/残G: UNVERIFIED
- 本機固有の変更判別: UNVERIFIED

## 164. ぱちすろ おり姫は告知がお好き（遡及差し込み）

- manufacturer: 銀座
- releaseDate: `2007-09-16`
  - グリーンべると2007-08-10: 「納品は9月16日からスタートする予定」。
  - K-Navi 2007-08-08: 「ホール導入日は9月16日以降が予定」。
- generation: 5号機
- systemType: ノーマル / ボーナス主体 / 準完全告知
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

パチマガスロマガ解析値:

| 設定 | BIG | REG | 合成 | PAYOUT（シミュレート） | 1000円あたり |
|---|---:|---:|---:|---:|---:|
| 1 | 1/296.54 | 1/546.13 | 1/192.19 | 97.98% | 38.37G |
| 2 | 1/309.13 | 1/468.11 | 1/186.18 | 99.39% | 40.01G |
| 3 | 1/276.52 | 1/512.00 | 1/179.55 | 102.25% | 39.58G |
| 4 | 1/277.69 | 1/417.43 | 1/166.76 | 104.88% | 40.76G |
| 5 | 1/267.49 | 1/327.68 | 1/147.27 | 107.33% | 39.58G |
| 6 | 1/259.04 | 1/316.60 | 1/142.47 | 110.23% | 40.76G |

- BIG: 345枚超払い出し終了 / 純増約312枚。
- REG: 105枚超払い出し終了 / 純増約104枚。
- HAZUSE当時解析でRT等の付加機能なし。
- P-WORLD、HAZUSE、当時業界記事の合成丸め値 `1/192.2 → 1/142.5` と整合。

### 機械割 CONFLICT

平均せず保持:
- パチマガスロマガ: `97.98 / 99.39 / 102.25 / 104.88 / 107.33 / 110.23%`
- pacnk整理: `98 / 99 / 102 / 104 / 107 / 110%`
- 多くは丸め近似だが設定4は104.88%→104%で単純丸めと一致しないためCONFLICT。

### v0.7 resetBehavior

`ぱちすろ おり姫は告知がお好き / おり姫 / 銀座 / GINZA` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT / ガックン / 出目 / 告知モード` を組み替え、当時業界・旧攻略・旧DB・後年整理を再探索。

- 通常時ゲーム数天井: `NONE_CONFIRMED`（後年整理でも天井非搭載）
- リセット専用短縮天井: `NOT_APPLICABLE / NONE_CONFIRMED`
- RT/CZ/ART/AT: `NOT_APPLICABLE`
- 朝一専用モード/設定変更専用モード: `NONE_CONFIRMED`
- 有利区間: `NOT_APPLICABLE`
- 設定変更時の本機固有リール/出目/告知演出状態処理: `UNVERIFIED`
- 据え置き時の告知演出選択状態引継ぎ: `UNVERIFIED`
- 電源OFF→ON時のリール/告知状態: `UNVERIFIED`
- ガックン、出目、ランプ等による本機固有変更判別: `UNVERIFIED`
- 朝一特定G以内当選率/リセット恩恵発生率: `NONE_CONFIRMED`
- 当時業界記事で21種告知モードがボーナス当選時または遊技待機状態入りでリセットされることは確認したが、これは演出選択状態であり「設定変更リセット」と混同しない。

## 今回主要出典

### おり姫
- グリーンべると: https://web-greenbelt.jp/00004302/
- K-Navi展示発表会: https://p-kn.com/topics/news/305/
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/05/a.php
- パチマガスロマガ 1000円ゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/05/c.php
- パチマガスロマガ ボーナス/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/05/h-1.php
- HAZUSE: https://hazuse.com/i/data/padhisuroorihimehakokutigaosuki/top.htm
- P-WORLD: https://www.p-world.co.jp/machine/database/4869
- pacnk: https://pacnk.com/slot/tools/sh_orihimehakokuchigaosuki.html

### エリア88（前回継承）
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleven_slot/02/a.php
- パチマガスロマガ 1000円ゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleven_slot/02/c.php
- パチマガスロマガ ボーナス/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleven_slot/02/h.php
- K-Navi: https://p-kn.com/slot/644/
- P-WORLD: https://www.p-world.co.jp/machine/database/4892

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準164件地点から継続。2007年9月残候補を引き続き具体導入日で監査し、2007-09-25以前の未処理漏れが見つかれば遡及差し込み、なければ2007-09-26〜09-30の最古未処理を登録する。**
2. `戦慄-IF IT HAPPEN（戦慄DD）` は2007-08-17時点でメーカー情報公開済み。9月内の具体的実導入日を公式/当時業界/旧DBで引き続き詰める。
3. 残候補: `DIGIParadise / くりぃむしちゅー / ちょいスゴ!!アリババインファンタジア / めんそーれ2-30 / クレイジージョーカー / コータローまかりとおる! / サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / バリバリ伝説 / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 時空大作戦 / 熊酒場30`。月表記だけで順序を決めず、納品/ホール導入日の根拠を取る。
4. `ちょいスゴ!!アリババインファンタジア` はユニバーサル公式で2007年9月発売、BIG後1200G/アリババチャンス後1000GでRT突入まで確認済み。具体導入日の一次/当時系照合を次回優先。
5. `ぱちすろ おり姫は告知がお好き` は今回処理済みなので候補から除外する。
6. 2007-09-26〜30に確定機がなければ2007-10月最古の未処理機へ進む。
7. resetBehavior遡及QAは、**ロックユークイーン3の次の最古未補完既存レコード**から継続する。
8. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。別機種/パチンコとの混同を避ける。
