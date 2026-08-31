# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md`、直近commitを確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 187件目 `南国姉妹-30` までを継承。
- **188件目として `しぇんしぇーのスロットマシーン30`（トリビー）を追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-08-06_shenshe-slot-machine-30.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `9fc25481e8507f045678f24a7c2bdface4973526`

## 188. しぇんしぇーのスロットマシーン30

- manufacturer: トリビー
- releaseDate: `2007-08-06（沖縄先行） / 2007-09上旬（全国販売）`
- generation: 5号機初期
- systemType: A+RT / ボーナス+固定100G RT / 30Φ / 完全告知 / 設定2〜6の5段階設定
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入時期

- PachinkoVistaは2007年8月導入開始。
- slothistory 2007-08-11更新で「8/6に沖縄限定発売されてたが、全国販売が決定」「2007/9/上発売」と記録。
- 5号機クロニクルも2007/8導入として整理。
- 本DBでは最初の市場導入 `2007-08-06` を主日付とし、全国販売 `2007-09上旬` を併記。9月漏れ監査で発見した遡及漏れ。

### 性能コア

- 設定1なし、設定2〜6の5段階設定。
- 機械割（設定2→6）: `94.0 / 97.0 / 100.0 / 105.0 / 108.0%`。PachinkoVistaと5号機クロニクルで一致。
- BIG（設定2→6）: `1/327.2 / 1/302.8 / 1/292.0 / 1/271.3 / 1/258.4`。
- BABY/REG: `1/678.3 / 1/608.5 / 1/525.1 / 1/412.1 / 1/422.8`。
- 合算: `1/220.7 / 1/220.2 / 1/187.6 / 1/163.6 / 1/160.4`。
- 50枚ベース（設定2→6）: `35.94 / 36.07 / 36.17 / 36.66 / 37.24G`。パチマガスロマガ値（スイカ・チェリー取りこぼし算出）。
- BIG: 345枚超払い出し終了、実純増目安約290枚。
- BABY: 180枚超払い出し終了、実純増目安約140枚。
- 赤7BIG後のみ100G RT `しぇんしぇーたいむ`。RT純増/Gは再探索後も `UNVERIFIED`。

### v0.7 resetBehavior

- settingChangeBehavior: 専用モード/短縮天井/朝一恩恵 `NONE_CONFIRMED`、RT中変更時の残G/内部状態処理 `UNVERIFIED`
- carryOverBehavior: 通常時天井 `NONE_CONFIRMED`、RT中据え置き時残G/状態処理 `UNVERIFIED`
- powerCycleBehavior: 電源OFF→ONのみの通常時固有変化 `NONE_CONFIRMED`、RT中電断復帰 `UNVERIFIED`
- gameCounterReset: 通常時ゲーム数天井を確認できず `NONE_CONFIRMED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: 朝一/設定変更専用モード・公開振り分け `NONE_CONFIRMED`
- stateAfterReset: RT中設定変更/据え置き/電断時処理 `UNVERIFIED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: 本機固有ガックン/初期出目等 `UNVERIFIED`
- numericResetData: `NONE_CONFIRMED`
- 表記揺れ `しぇんしぇーのスロットマシーン30 / シェンシェ-30 / しぇんしぇーたいむ / トリビー` と、設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/天井/モード/RT残り/変更判別を組み替え、当時解析・旧DB・回顧/アーカイブ資料を横断済み。

## 主要出典

### しぇんしぇーのスロットマシーン30
- PachinkoVista: https://www.pachinkovista.com/pfactory/model.php?km=2&nid=016696
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/08/a.php
- パチマガスロマガ ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/08/c.php
- 5号機クロニクル トリビー一覧: https://5goki.com/trivy
- slothistory 更新情報4: https://slothistory.com/kousin_kako04.html
- あみゅのスロット談話室: https://plaza.rakuten.co.jp/slotamyu/diary/

取得日: 2026-09-01

## 9月漏れ監査メモ

- `しぇんしぇーのスロットマシーン30` は全国販売が9月上旬だが、沖縄先行 `2007-08-06` を確認したため遡及追加。188件目。
- `セブンボンバーA` は既存レコードを前リレーで追加済みのため重複しない。
- `ミスターマリック` も既存main有無を次回最優先で再確認する。候補名だけで登録しない。
- `クレイジージョーカー`、`熊酒場-30` は既存確認済み。
- P-WORLD/Pacnk/slothistory/当時一覧とmain既存群を突き合わせ、9月独立未登録機を閉じてから10月へ進む。

## resetBehavior 遡及QA

- 2006年5〜6月群は既補完機を重複改変せず通過済み。
- 2006年7月 `新造人間キャシャーン` は補完済み。
- 2006年7月 `花盛` はv0.7 resetBehavior補完済み（commit `fe6a61d86ab1dbac3e703381115b18c5fbeae017`）。
- **次の最古resetBehavior欠損候補は2006年7月 `大江戸漫遊記`。** 現レコード `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` の既存性能コアを不用意に再採掘せず、resetBehaviorのみ別管理で補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準188件地点から継続。** 2007年9月一覧とmain既存群を再照合し、残る独立未登録5号機の最古から追加する。
2. 最優先監査: `ミスターマリック` のmain既存有無・メーカー/型式/実導入時期を確認。`セブンボンバーA` は既存のため重複追加しない。
3. 9月監査でより古い未処理機が判明した場合は遡及漏れとして先に追加する。9月を閉じた後2007年10月へ前進。
4. 10月既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。`南国姉妹-30` は導入月CONFLICTのため10月側でも再照合するが性能レコードは重複作成しない。
5. resetBehavior遡及QAは **2006年7月 `大江戸漫遊記`** から再開。
6. PARTIAL/UNVERIFIEDは最初の検索で確定せず、表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替えて資料系統を横断する。競合値は平均せず `CONFLICT`。
