# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは236件地点。236 `ジアマゾンロード` まで追加済み。
- 今回、直前指定の最優先候補 `256（ジゴロ）` を調査し、237件目として追加。
- 当時グリーンべると記事では `2008-03-30納品予定`。旧業界史には `2008-03-31発売` 表記があるため、納品日/発売日ラベル差の可能性はあるが推測統一せず `CONFLICT_DATE_LABEL` として保持。
- 導入時系列の具体日前進地点は2008-03-30まで到達。2008-03-25〜31の残監査はまだ閉じていない。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 237. 256（ジゴロ）（SNKプレイモア）

- new record: `docs/real_machine_db/machines/2008-03-30_256-jigoro.md`
- manufacturer: SNKプレイモア
- releaseDate: `2008-03-30`
- releaseDateConfidence: `INDUSTRY_PLANNED_DELIVERY`
- generation: 5号機初期
- systemType: ボーナス + RT/ART + 天井AT（1ライン）
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- 赤7BIG: `1/897.75 → 1/762.05`。
- 緑5BIG: `1/897.75 → 1/771.01`。
- 青3BIG: `1/897.75 → 1/771.01`。
- BIG合成: `1/299.25 / 1/291.27 / 1/283.71 / 1/276.52 / 1/269.70 / 1/256.00`。P-WORLDの丸め値とも整合。
- パチマガスロマガのシミュレート機械割: `96.62 / 99.45 / 102.17 / 105.13 / 107.90 / 113.69%`。
- 旧5号機Wiki: `97.3 / 99.9 / 102.4 / 105.0 / 107.5 / 112.4%`。
- 機械割は資料差があるため `CONFLICT_PAYOUT_RATE`。平均化しない。
- 各BIGは299枚超払い出し終了、純増約204枚。
- 全BIG後に最大100GのチャンスRTへ移行し、特殊リプレイ成立でART `256タイム` へ。
- `256タイム` は100Gまたは1000G、純増約+1.2枚/G、規定G消化またはボーナス成立で終了。
- 通常時からARTへ入るルートも存在。
- ボーナス間999Gで小役アシストが作動しコイン持ちが上がる救済機能（天井AT）を当時業界記事で確認。
- 50枚ベースは `256 / ジゴロ / SNKプレイモア / 50枚 / 1000円 / 千円 / ベース / コイン持ち` 等へ検索語を変更し、当時解析・旧DB・P-WORLD・業界記事・回顧資料を横断したが具体値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH`
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- modeAfterReset / stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties / numericResetData: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- 通常時の999G救済そのものはCONFIRMED。ただし設定変更時に999Gカウンタを初期化するか、据え置き/電源OFF→ONで引き継ぐか、短縮されるかは本機固有の直接根拠を発見できず一般論で補完しない。
- 設定変更/電断時のチャンスRT・256タイム残G/ART権利/内部状態処理も直接根拠なし。
- `256 / ジゴロ / SNKプレイモア` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 999G / 天井 / ガックン / 初期出目` を組み替えて再探索済み。

## 今回の境界監査メモ

- `256（ジゴロ）` は2008-02-25にSNKプレイモアが発表。当時グリーンべるとは3月30日納品予定、旧業界史は3月31日発売とするため日付表現差を保持。
- `ハナダマシイ / ハナダマシイ-30` は既に232/233として登録済み。3/31発売資料があっても重複追加禁止。
- 2008-03-25〜03-31のメーカー/業界一覧監査は未完。`256` 以外の漏れがないことを確認してから2008年3月を閉じる。
- 既知4月候補は北電子 `月光仮面2A`（2008-04-07発売記録）、アルゼ `アレックス7R`（2008-04-21発売記録）。3月残監査を優先する。

## 今回の主要出典

取得日: 2026-09-01

### 256（ジゴロ）
- SNKプレイモア公式: https://slot.snk-corp.co.jp/official/256/about/index.html
- グリーンべると: https://web-greenbelt.jp/00003430/
- プレイグラフ転載: https://p-mans.blogspot.com/2008/02/
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/19/a.php
- パチマガスロマガ ボーナス/機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/19/h.php
- P-WORLD: https://www.p-world.co.jp/machine/database/5113
- 旧5号機Wiki: https://w.atwiki.jp/5gouki/pages/64.html
- 5号機クロニクル: https://5goki.com/snkplaymore
- パチスロ業界初まとめ: https://slothistory.com/kousin_kako05.html

## 重複防止

- 既存236件の再追加禁止。
- 237 `256（ジゴロ）` も再追加禁止。
- `ハナダマシイ / ハナダマシイ-30` は232/233登録済み。日付根拠を追加する場合も新規レコードを作らず既存日付QAへ回す。
- `256` と `ジゴロ` を別機種として二重登録しない。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準237件地点から継続。**
2. **2008-03-25〜03-31の残監査をメーカー公式/当時業界一覧/古いDBで続け、`256（ジゴロ）` 以外に未処理機がないか確認する。**
3. 3月列を閉じたら2008年4月へ前進し、具体導入日を比較して最古未処理機から追加する。既知候補は北電子 `月光仮面2A`（2008-04-07）とアルゼ `アレックス7R`（2008-04-21）。
4. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを変えて十分再探索してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。
