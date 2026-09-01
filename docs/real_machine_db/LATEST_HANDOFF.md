# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは237件地点。237 `256（ジゴロ）` まで追加済み。
- 2008-03-25〜03-31境界を当時業界一覧・旧DBで再監査。3/31発売系列で確認できる `ハナダマシイ / ハナダマシイ-30` は既に232/233、`256（ジゴロ）` は237として登録済みで、今回新たに追加すべき3月末本線機種は確認されなかったため2008年3月列を閉じた。
- 2008年4月へ前進し、北電子 `月光仮面`（型式 `ゲッコウカメン2A`）を238件目として追加。
- 当時グリーンべるとは `2008-04-06納品開始`、旧業界史は `2008-04-07発売` とするため、納品開始/発売ラベル差として `CONFLICT_DATE_LABEL` を保持。
- 導入時系列の具体日前進地点は2008-04-06まで到達。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 238. 月光仮面（北電子）

- new record: `docs/real_machine_db/machines/2008-04-06_gekkou-kamen.md`
- manufacturer: 北電子
- modelName: `ゲッコウカメン2A`
- releaseDate: `2008-04-06`
- releaseDateConfidence: `INDUSTRY_DELIVERY_START`
- generation: 5号機初期
- systemType: ノーマルA / ボーナス主体（RTなし・小役同時当選あり）
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG: `1/295.21 / 1/281.27 / 1/269.70 / 1/259.04 / 1/248.24 / 1/240.94`。
- REG: `1/590.41 / 1/560.14 / 1/520.13 / 1/478.36 / 1/399.61 / 1/364.09`。
- ボーナス合成: `1/196.80 / 1/187.25 / 1/177.60 / 1/168.04 / 1/153.12 / 1/144.99`。
- 北電子公式の工場データ予測出玉率: `95.21 / 97.16 / 99.10 / 101.21 / 104.23 / 107.39%`。
- パチマガスロマガのシミュレートPAYOUT: `96.10 / 98.22 / 100.37 / 102.64 / 106.13 / 109.63%`。
- 出玉率は定義/条件差があるため `CONFLICT_PAYOUT_DEFINITION`。平均化しない。
- 50枚ベース: 設定1〜5 `35.98G`、設定6 `36.99G`。
- BIG約314枚、REG約126枚。
- BIGは345枚超払い出し、REGは120枚超払い出しで終了。
- RT/ART/ATなしのノーマルA。全小役でボーナス同時抽選。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`
- ceilingAfterReset: `NOT_APPLICABLE_NO_CEILING_CONFIRMED`
- modeAfterReset: `NOT_APPLICABLE_NO_MODE_SYSTEM_CONFIRMED`
- stateAfterReset: `NOT_APPLICABLE_NO_INTERNAL_STATE_SYSTEM_CONFIRMED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties / numericResetData: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- `月光仮面 / 月光仮面2A / 月光仮面A2 / ゲッコウカメン2A / 北電子` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電源 / ガックン / 初期出目 / 天井` を組み替え、公式・当時解析・旧DB・中古実機資料・業界アーカイブ・回顧資料を横断したが、本機固有の設定変更/据え置き/電断時初期挙動と変更判別は直接根拠を発見できず一般論で補完しない。

## 今回の境界監査メモ

- 2008年3月末は `ハナダマシイ / ハナダマシイ-30 / 256（ジゴロ）` が既登録であることを再確認し、3月列を閉じた。
- 北電子は `ジャンキージャグラー` と `月光仮面` の2機種を同時発表し、当時グリーンべるとは双方とも `2008-04-06` 納品開始と明記。今回はhandoffで明示されていた `月光仮面` を238として処理したため、同日未処理の `ジャンキージャグラー` が次回最優先。
- その後の具体日候補は `ナイトライダーSP`、`クローズS`（旧業界史では2008-04-07発売）、`デジスロF / デジスロV-30`（2008-04-14発売）。既存登録を必ず確認して時系列で処理する。
- 旧handoffにあった `アレックス7R 2008-04-21` は再監査で不確実。旧業界史は `2008-05-07 or 05-12発売（04-07先行導入済み）` とするため、4月本線へ自動配置せず導入日定義を再調査してから扱う。

## 今回の主要出典

取得日: 2026-09-01

### 月光仮面
- 北電子公式: https://www.kitadenshi.co.jp/slot/gekkoukamen/
- グリーンべると / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/2700/greenbelt
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/65/a.php
- パチマガスロマガ ボーナス/機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/65/h.php
- パチマガスロマガ 1000円あたりゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/65/c.php
- K-Navi: https://p-kn.com/slot/791/
- 中一商事（型式/RTなし補助）: https://www.nakaiti.com/html/sKitadenshi054.html
- パチスロ業界初まとめ: https://slothistory.com/kousin_kako05.html
- Pマンズ 2008年2月（型式告示転載）: https://p-mans.blogspot.com/2008/02/

## 重複防止

- 既存237件の再追加禁止。
- 238 `月光仮面` も再追加禁止。
- `月光仮面 / 月光仮面2A / 月光仮面A2 / ゲッコウカメン2A` を別機種として二重登録しない。
- `ハナダマシイ / ハナダマシイ-30` は232/233、`256（ジゴロ）` は237登録済み。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準238件地点から継続。**
2. **同じ2008-04-06納品開始の北電子 `ジャンキージャグラー` を最優先。既存レコードを確認し未登録なら239件目として性能コア + v0.7 resetBehaviorを収集する。**
3. 続いて2008-04-07候補 `ナイトライダーSP / クローズS` を具体導入日と既存登録で比較し、未処理を時系列順に追加する。
4. 4月14日候補 `デジスロF / デジスロV-30`、その他4月一覧の漏れをメーカー公式/当時業界/古いDBで監査する。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを変えて十分再探索してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。
