# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前は **283 `海人`（トリビー / 2008-08-04）**。
- 今回新規で **284 `海人G-30`（トリビー / 2008-08-04）** を追加した。
- 25Φ兄弟機 `海人` の性能値は30Φ固有確認なしに流用せず、30Φ単独資料で確定できない値は十分な再探索後 `UNVERIFIED_AFTER_RESEARCH` とした。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 284. 海人G-30

- record: `docs/real_machine_db/machines/2008-08-04_uminchu-g-30.md`
- manufacturer: トリビー
- releaseDate: `2008-08-04`
- generation: 5号機
- systemType: 30Φ・沖スロ系 / 海人兄弟機
- 当時業界アーカイブで `海人 / 海人G-30` の2008-08-04発売を確認。
- 2008-07-19のグリーンべると/P-WORLD記事では `海人G-30` と `海人` が情報提供端子板の対応機種として別々に列挙され、別機種扱いを二経路で確認。
- 当時アーカイブには両機併記で「機械割110.1%」の痕跡があるが、30Φ単独の設定6値か兄弟共通値かを固有資料で確認できず `AMBIGUOUS_SHARED_110_1_PAYOUT` とした。
- 設定別BIG/REG/合算、設定別機械割、50枚ベース、BIG/REG獲得枚数は、30Φ単独の確定表を再探索しても取得できず `UNVERIFIED_AFTER_RESEARCH`。
- 25Φ `海人` の `BIG 1/325〜1/257 / REG 1/362〜1/260 / 機械割95.9〜110.1% / BIG約312枚・REG約104枚` は自動転記していない。
- coreStatus: `PARTIAL_CORE_AFTER_RESEARCH`

### resetBehavior（284）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`
- `carryOverBehavior`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`
- `gameCounterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `modeAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`
- `stateAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）
- `resetBenefits` / `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`
- `numericResetData`: `NONE_CONFIRMED_AFTER_RESEARCH`
- 海人G-30/ウミンチュG-30/海人G30/トリビーを使い、設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン・天井・モード等へ検索語を切り替えたが、本機固有の変更/電断挙動や朝一数値は確定できなかった。
- 2026年スマスロ `L海人`、4号機時代の海人-30、裏物資料は流用禁止。

## 今回の主要出典

取得日: 2026-09-01

- https://slothistory.com/kousin_kako05.html
  - 2008-08-04発売、海人/海人G-30併記、機械割110.1%という痕跡。30Φ単独値か不明のため曖昧値として保持。
- https://web-greenbelt.jp/00003699/
  - 2008-07-19時点で海人G-30と海人を別対応機種として列挙。
- https://news.p-world.co.jp/articles/2959/greenbelt
  - 同業界記事の別経路照合。

## 重複防止・境界管理

- **既存284件の再追加禁止。**
- `海人G-30` と25Φ `海人` は別レコード。兄弟機の数値を根拠なく共通化しない。
- `完熟チェリー` は2008年10月境界で再確認する。
- `スーパージャックポットK / P-30` は別型式痕跡の同一機/別機判定を後続QAで継続する。
- 情報提供端子板の対応機種化日だけを導入日として扱わない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 2006年ヤーマ `ジャックポット トロピカルバージョン` の実ファイル同定問題は未解消。2017年 `Ver.2` と混同しない。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準284件地点。時系列は2008-08-04 `海人G-30` まで進行。**
2. 次は同日候補 **`爆音伝説サクラ`（KPE）** を最優先。2008-08-04発売痕跡を当時業界アーカイブで確認済み。正式型式、設定別機械割/ボーナス・ART等の主要初当たり、50枚ベース、純増・基本獲得性能を複数資料で確定する。
3. `爆音伝説サクラ` のv0.7 resetBehaviorでは、設定変更/据え置き/電源OFF→ON、ゲーム数・天井、モード/状態、朝一恩恵、不利、変更判別、公開朝一数値を重点監査する。
4. その後 `犬キングX` 等の2008年8月初旬群を具体日順に監査する。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と検索項目を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
