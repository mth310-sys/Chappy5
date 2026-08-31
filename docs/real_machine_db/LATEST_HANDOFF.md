# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 162件目 `ドリスタ -ミントのヒロイン救出大作戦-`（NET、2007-09-24）までの既存進捗を引継ぎ。
- 2007-09-25境界を当時系資料、P-WORLD、K-Navi、パチマガスロマガ、検定記録で監査。
- **163件目 `エリア88`（型式 エリア88A、イレブン、2007-09-25）を新規登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09-25_area88-a.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `14d9036f1e83059783f2b6934d05530ed800221b`
- resetBehavior遡及QAは前回の `ロックユークイーン3`（2006-04）まで進行した状態を維持。

## 163. エリア88

- manufacturer: イレブン
- formalModelName: `エリア88A`
- releaseDate: `2007-09-25`
- generation: 5号機
- systemType: ボーナス + RT / チャンスゾーン

### 導入時期

- 検定記録整理: 2007-07-19 `エリア88 A` 検定通過。
- P-WORLD: 2007年09月導入。
- 2007年当時からの業界史更新資料: 2007-09-25発売。
- 本DBでは具体日を持つ当時系資料を採用。

### 性能コア

パチマガスロマガ解析値:
- SBIG合算: `1/512.00 → 1/372.36`
- NBIG合算: `1/1024.00 → 1/744.73`
- 全ボーナス合算: `1/341.33 → 1/248.24`
- PAYOUT（シミュレート）: `96.63 → 110.73%`
- 1000円あたり: `48.59 → 53.23G`

基本獲得性能:
- 赤SBIG: 465枚超払い出し終了 / 純増約377枚
- 青SBIG: 345枚超払い出し終了 / 純増約283枚
- NBIG（赤/青）: 225枚超払い出し終了 / 純増約188枚

RT:
- チャンスゾーンで斜めリプレイ成立を契機にRT `リプレイミッション` へ移行。
- 本機固有のRT純増/G、継続G数は今回高信頼資料から確定できず `UNVERIFIED`。推定補完しない。

### v0.7 resetBehavior

`エリア88 / エリア88A / エリア88 A / イレブン` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / チャンスゾーン / リプレイミッション / RT / ガックン` を組み替え、旧攻略/DB、業界資料、回顧資料を横断して再探索。

- 通常時ゲーム数天井: `NONE_CONFIRMED`
- リセット専用短縮天井: `NONE_CONFIRMED`
- 朝一専用モード/設定変更専用モード: `NONE_CONFIRMED`
- 公開朝一当選率/リセット恩恵率: `NONE_CONFIRMED`
- 有利区間: `NOT_APPLICABLE`
- 設定変更時のCZ/RT状態・RT残G処理: `UNVERIFIED`
- 据え置き時のCZ/RT状態・残G引継ぎ: `UNVERIFIED`
- 電源OFF→ON時のCZ/RT状態・残G処理: `UNVERIFIED`
- 本機固有のガックン/出目/液晶等による変更判別: `UNVERIFIED`
- 設定変更挙動から電断挙動を推定転記しない。

## 今回主要出典

- パチマガスロマガ 基本システム/獲得枚数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleven_slot/02/a.php
- パチマガスロマガ 1000円ゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleven_slot/02/c.php
- パチマガスロマガ ボーナス確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleven_slot/02/h.php
- K-Navi: https://p-kn.com/slot/644/
- P-WORLD: https://www.p-world.co.jp/machine/database/4892
- パチスロ業界初まとめ 更新情報4: https://slothistory.com/kousin_kako04.html
- イレブン検定通過整理: https://q-and-a.hatenablog.com/entry/2016/10/21/201148

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準163件地点から継続。2007-09-26〜09-30をまず漏れ監査する。**
2. `戦慄-IF IT HAPPEN（戦慄DD）` は2007-08-17時点でメーカー情報公開済みだが、9月内の具体的実導入日をまだ確定できていない。公式/当時業界/旧DBで引き続き詰め、09-25以前なら時系列へ遡及差し込み、以後なら次の正規位置で登録する。
3. 9月残候補 `DIGIParadise / くりぃむしちゅー / ちょいスゴ!!アリババインファンタジア / ぱちすろおり姫は告知がお好き / めんそーれ2-30 / クレイジージョーカー / コータローまかりとおる! / サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / バリバリ伝説 / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 時空大作戦 / 熊酒場30` は具体導入日を照合して時系列へ差し込む。
4. 2007-09-26〜30に確定機がなければ2007-10月最古の未処理機へ進む。
5. resetBehavior遡及QAは、**ロックユークイーン3の次の最古未補完既存レコード**から継続する。
6. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。別機種/パチンコとの混同を避ける。