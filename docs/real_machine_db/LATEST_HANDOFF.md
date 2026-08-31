# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は193件目 `マジックモンスター2`（2007-10-22）。
- 2007-10-23〜10月末を再監査し、旧handoffで11月キューとしていた `CANスロ` に、当時系資料の **2007-10-29発売** 記録を発見。後年DBの2007-11導入と定義/日付競合するため飛ばさず処理した。
- **194件目として `CANスロ`（オルカ）を追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-10-29_can-slot.md`
- coreStatus: `COMPLETE_CORE_WITH_CONFLICT`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `668c9897f0802e0cde4b95bd1e0e73d3fba6dcea`

## 194. CANスロ

- manufacturer: オルカ
- releaseDate: `CONFLICT（2007-10-29発売 / 後年DB 2007-11導入）`
- generation: 5号機初期
- systemType: ボーナス主体 + 10G完走型RT
- status: `COMPLETE_CORE_WITH_CONFLICT`
- resetBehaviorQA: `PARTIAL`

### 性能コア

パチマガスロマガで設定別値を取得。

- BIG: 設定1 `1/94.16` → 設定6 `1/78.39`
- PAYOUT（シミュレート）: `98.42 / 99.60 / 100.81 / 103.08 / 106.77 / 110.91%`
- 1000円あたりゲーム数: `35.96 / 36.32 / 36.68 / 37.31 / 38.36 / 39.18G`
- BIG: 134枚超払い出し終了、純増約108枚
- BIG後: 10G完走型RT
- RT増加枚数/G: 設定1 `+0.81` → 設定6 `+0.92枚/G`
- RT中リプレイ: 全設定 `1/1.15`

### releaseDate CONFLICT

- パチスロ業界初まとめ当時更新履歴: `2007/10/29発売`
- パチ7後年回顧: `2007年11月導入`
- スロリスクタイム: `2007/11`
- 発売日とホール導入月の定義差で両立する可能性はあるが、全国導入開始日を確定できないため平均/一本化せず `CONFLICT`。

### v0.7 resetBehavior

- settingChangeBehavior: 本機固有の設定変更時RT/初期状態は `UNVERIFIED`。
- carryOverBehavior: 据え置き時RT残G/内部RT状態は `UNVERIFIED`。
- powerCycleBehavior: 電源OFF→ONのみ時のRT状態処理は `UNVERIFIED`。
- gameCounterReset: 通常ゲーム数天井/周期カウンタ `NONE_CONFIRMED`。
- ceilingAfterReset: リセット短縮/変更後専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/変更専用振り分け `NONE_CONFIRMED`。
- stateAfterReset: RT中設定変更時の残G/内部RT状態は `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/ランプ差等は `UNVERIFIED`。
- numericResetData: 公開朝一数値、短縮天井G、変更時RT率等 `NONE_CONFIRMED`。

### 主要出典

- パチマガスロマガ基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oluca_slot/01/a.php
- パチマガスロマガ確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oluca_slot/01/h.php
- パチマガスロマガ1000円G/RT純増: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oluca_slot/01/c.php
- パチマガスロマガ機種トップ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oluca_slot/01/oluca_slot_01.php
- パチスロ業界初まとめ: https://slothistory.com/kousin_kako04.html
- パチ7回顧: https://pachiseven.jp/articles/detail/4278
- スロリスクタイム: https://pachisuro100.com/normal/

取得日: 2026-09-01

## 新たに見つかった遡及漏れ — 最優先

10月境界監査中に **`南国姉妹-30`（アスワン東京）** の古い未登録を確認した。

- PACNK 2007年度一覧は `2007年9月` と記録。
- パチスロ業界初まとめ当時更新履歴には **30φ版が2007/9/18発売済み** とする記録がある。
- mainに `南国姉妹-30` の独立レコードは現時点で存在しない。
- K-Navi/P-WORLDでA+RT系、赤/青BIG、CHALLENGE BONUS、RTを確認したが、RTゲーム数の記述に資料差があるため要 `CONFLICT` 監査。
- 設定別BIG/REG/機械割はK-Naviで未発表表記。別解析・旧DB・アーカイブをさらに探索してから欠損判定する。
- **次回は時系列漏れ防止を優先し、194件地点からこの `南国姉妹-30` を遡及処理する。**

## resetBehavior 遡及QA

- 既存QAの次の最古resetBehavior欠損候補は `電撃フランケン`（2006-07-24）。
- 新規本線を止めず、QAリレー時にここから再開する。

## 次回再開地点

1. **LATEST_HANDOFF基準194件地点から継続。**
2. 最優先で遡及漏れ `南国姉妹-30`（アスワン東京、2007-09 / 当時資料9/18発売記録）を性能コア + v0.7 resetBehaviorまで再探索して登録する。
3. 同機の赤/青BIG後RT・CHALLENGE BONUS後RTの資料差を複数系統で照合し、解消不能なら `CONFLICT`。
4. その後、2007-10-23〜10月末の残機種監査へ戻り、11月境界へ前進する。
5. `CANスロ` の2007-10-29発売 / 2007-11導入は定義差の可能性を保持し、追加一次資料が出るまで `CONFLICT` を維持する。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
7. 競合値は平均せず `CONFLICT`。別機種・後継機仕様は流用しない。
