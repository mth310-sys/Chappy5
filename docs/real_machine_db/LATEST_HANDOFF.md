# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前は **284 `海人G-30`（トリビー / 2008-08-04）**。
- 今回新規で **285 `爆音伝説サクラ`（KPE / 2008-08-04）** を追加した。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 285. 爆音伝説サクラ

- record: `docs/real_machine_db/machines/2008-08-04_bakuon-densetsu-sakura.md`
- manufacturer: KPE
- modelName: `爆音伝説サクラJG`
- releaseDate: `2008-08-04`
- generation: 5号機
- systemType: ボーナス+ループ型RT
- コナミ公式アーカイブで2008年8月稼働開始を確認。当時グリーンべるとで8月4日納品予定、当時解析でも8/4導入開始予定を確認。
- BIG/MID/REG約320/220/49枚。CZ中ベルで30G RT、特殊リプレイで100G RT。発売版RT純増は約+1.0枚/G。
- 通常時550G消化で天井CZ。
- 設定変更後は内部CZへ突入することを当時解析2系統で確認。
- 設定変更後CZのRT突入期待度は、CrankySevenが約50%とする一方、パチ＆スロ必勝本は「調査中」。確定数値として採用せず `CONFLICT_RESET_RT_ENTRY_EXPECTATION` とした。
- 設定別ボーナス確率はパチ＆スロ必勝本とCrankySevenで一部差異があるため平均せずCONFLICT保持。
- 機械割は必勝本が各設定レンジ、CrankySevenが概ねレンジ下端、5号機クロニクルが概ね上端。定義差本文を完全回収できないためレンジ保持。
- 50枚ベースは表記・型式・検索項目・資料系統を変えて再探索しても比較可能値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- coreStatus: `PARTIAL_CORE_AFTER_RESEARCH`

### resetBehavior（285）

- `settingChangeBehavior`: `CONFIRMED` — 設定変更後は内部CZ。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時の550G周期カウンタ/CZ状態の前日跨ぎ処理を本機固有資料で確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみで周期カウンタ/CZ状態を維持するか未確定。
- `gameCounterReset`: `UNVERIFIED_AFTER_RESEARCH` — 変更後CZは確定だが内部550G周期カウンタのリセット定義を直接資料で確定できず。
- `ceilingAfterReset`: `SETTING_CHANGE_BYPASSES_550G_WAIT_TO_CZ_CONFIRMED` — 通常550G待ちに対し設定変更後は即CZ。短縮天井0Gという推定表現は使わない。
- `modeAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`
- `stateAfterReset`: `INTERNAL_CZ_CONFIRMED`
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）
- `resetBenefits`: 設定変更直後からRT契機の内部CZへ入る点を確認。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`
- `numericResetData`: 通常天井CZ 550G、設定変更後CZ即突入。変更後CZのRT期待度はCONFLICT/UNRESOLVED。

## 今回の主要出典

取得日: 2026-09-01

- https://www.konami.com/amusement/psm/archive/ps/2008/sakura/
  - コナミ公式。2008年8月稼働開始、5号機RT。
- https://news.p-world.co.jp/articles/2880/greenbelt
  - 2008年新基準対応版発表。8月4日納品予定、RT約+1枚/G、30G/100G、BIG約320枚、550G天井CZ。
- https://news.p-world.co.jp/articles/2537/greenbelt
  - 2007年旧仕様発表。RT約+0.8枚/G、BIG/MID/REG約320/220/49枚、550G救済CZ。発売版とは仕様履歴を分離。
- https://p.hisshobon.jp/machine/1038/1/17844
  - 当時解析。8/4導入予定、設定別BIG/MID/REG/合算、設定別機械割レンジ。
- https://p.hisshobon.jp/machine/1038/1/17848
  - 設定変更後は内部CZ、通常550Gで天井CZ。
- https://p.hisshobon.jp/machine/1038/1/17849
  - CZ/RT詳細。BIG後80%、MID後53%、REG後20.2%、RT後51%、周期51%、設定変更後期待度は調査中。
- https://crankyseven.com/bakuonsakura-pc.htm
  - 別解析系列。設定別数値、設定変更後CZ、変更後から約50%RTという記載。競合検出に使用。
- https://5goki.com/kpe
  - 2008年8月、機械割98.3〜111.6%系列の照合。
- https://www.nakaiti.com/html/sKpe052.html
  - 型式名 `爆音伝説サクラJG`、基本獲得性能の補助照合。
- https://slothistory.com/kousin_kako05.html
  - 2008-08-04発売痕跡、新基準対応版としての再登場履歴。

## 重複防止・境界管理

- **既存285件の再追加禁止。**
- 2007年1月予定の旧仕様と2008年8月発売版を同一数値として混在させない。RT純増0.8枚/Gは旧仕様履歴、発売版主値は約1.0枚/G。
- `海人G-30` と25Φ `海人` は別レコード。兄弟機の数値を根拠なく共通化しない。
- `完熟チェリー` は2008年10月境界で再確認する。
- `スーパージャックポットK / P-30` は別型式痕跡の同一機/別機判定を後続QAで継続する。
- 情報提供端子板の対応機種化日だけを導入日として扱わない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 2006年ヤーマ `ジャックポット トロピカルバージョン` の実ファイル同定問題は未解消。2017年 `Ver.2` と混同しない。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準285件地点。時系列は2008-08-04 `爆音伝説サクラ` まで進行。**
2. 次は同日候補 **`犬キング / イヌキングX`（コルモ）** を最優先。グリーンべるとは2008-08-03納品開始予定、当時業界アーカイブは2008-08-04発売と記録するため、納品日/発売日の定義差を保持して導入日を確定する。
3. `犬キング` は当時業界記事ですでにボーナス合算1/282.5〜1/183.1、通常時約41G/1000円・AT時約55G/1000円、BIG約300枚/CHALLENGE約221枚、押し順ナビAT+5G RTを確認できる。型式 `イヌキングX` と設定別機械割/初当たり、ATの物差し最低値を複数資料で照合する。
4. `犬キング` のv0.7 resetBehaviorでは、AT残G/ナビ状態の設定変更・据え置き・電源OFF→ON処理、ゲーム数天井有無、朝一恩恵/不利、変更判別、公開朝一数値を重点監査する。
5. その後2008年8月初旬群を具体日順に監査し、`メガラニカ` 等の未処理候補へ進む。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と検索項目を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
