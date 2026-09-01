# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは226件地点（`ウルトラキューティーハニー3` 追加済み）。
- **エマ `めんそーれ2-25` を227件目として追加済み。**
- **resetBehavior遡及QAは `ブリチカ-30（2006-09）` を補完済み。**

## 227. めんそーれ2-25（エマ）

- new record: `docs/real_machine_db/machines/2008-01_or_02_mensore2-25.md`
- commit: `e1f418d71bbe78ff82f4f940e8907bb6108b6daf`
- manufacturer: エマ
- modelName / P-WORLD型式: `メンソーレ2H`
- releaseDate: `2008-01 / 2008-02` (`CONFLICT_RELEASE_TIMING`)
- generation: 5号機初期
- systemType: ボーナス+RT / 完全告知 / 25Φ
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 同定・時期

- 既存 `2007-09_mensore2-30.md` は2007年9月30Φ版。再追加禁止。
- 5号機クロニクルは25Φを `2008/1` 導入として独立掲載。
- 当時系業界史は `めんそーれ2 [エマ]` を `2008/2発売`、30Φ版と中身ほぼ同じと記録。
- 当時小冊子一覧も `めんそーれ2（-25） 2008/02`。
- 一本化せず `CONFLICT_RELEASE_TIMING` として保存。
- `めんそーれ2A-30` は別型式。P-WORLDは2008年5月導入、当時業界史は2008-04-21発売/納期確定。227へ混入させず、4〜5月時系列で後処理する。

### 性能コア

- 機械割: `94.2 / 96.8 / 101.0 / 103.2 / 106.9 / 110.4%`
- P-WORLD型式メンソーレ2Hの全ボーナス合算: `1/117.9 / 1/121.4 / 1/115.4 / 1/113.4 / 1/109.6 / 1/103.0`
- パチマガスロマガ25Φ専用ページ:
  - BAR BIG: 345枚超払い出し終了、純増約256枚
  - BIG: 253枚超、純増約192枚
  - REG: 77枚超、純増約64枚
- 25Φ専用解析は「基本的な仕様、スペックは前作30Φとほぼ同様」と明記。
- ただし25Φ版として直接比較可能な50枚ベースとRT純増/Gは確定できず、30Φ値を自動転記しないため `coreStatus=PARTIAL`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: `NONE_CONFIRMED`
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `NONE_CONFIRMED`

25Φ正式名・型式名と設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/RT/天井を組み替え、当時解析、P-WORLD、旧DB、回顧資料まで再探索したが25Φ固有の変更・据え置き・電断処理を直接確定できず。2007年30Φ版の未確認リセット挙動は流用しない。

### 主要出典

- パチマガスロマガ25Φ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/27/a.php
- P-WORLD めんそーれ2（型式メンソーレ2H）: https://www.p-world.co.jp/machine/database/5063
- 5号機クロニクル エマ: https://5goki.com/ema
- 当時系業界史（25Φ 2008/2）: https://slothistory.com/kousin_kako04.html
- 小冊子一覧: https://plaza.rakuten.co.jp/sukisukiyamasa/20001/
- P-WORLD 2A-30: https://www.p-world.co.jp/machine/database/5149
- 当時系業界史（2A-30 2008-04-21）: https://slothistory.com/kousin_kako05.html

取得日: 2026-09-01

## resetBehavior 遡及QA

### ブリチカ-30（2006-09）補完済み

- record: `docs/real_machine_db/machines/2006-09_burichika-30.md`
- commit: `3f237de7e982945f86f4012cd24a610f0f37914d`
- coreStatus: `PARTIAL`（性能コア判定を維持）
- resetBehaviorQA: `PARTIAL`
- メーカー公式/HAZUSE/2006年当時記事でREG後必ず32GのRT「ブリチカチャンス」を確認。
- 32Gは通常時天井ではなくREG後RT固定G数。
- 設定変更/据え置き/電源OFF→ON時のRT残G・内部RT状態、ガックン等は資料系統変更後も本機固有の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的5号機RT挙動は推測転記しない。

### 次の遡及QA対象

- **`球児（2006-09）`**。
- next record: `docs/real_machine_db/machines/2006-09_kyuji.md`
- 現行レコードにv0.7 resetBehavior節がなく、RT「反撃タイム」を持つ。設定変更/据え置き/電断時のRT状態・残G、通常時天井有無、朝一恩恵/判別を優先探索する。

## 2008年1月→2月境界監査

- 226: `ウルトラキューティーハニー3`。再追加禁止。
- 227: `めんそーれ2-25`。再追加禁止。
- `めんそーれ2A-30` は2008年4月21日/5月系列なので直後に追加しない。
- **次は2008年2月上旬の未処理機を時系列監査。`スロガッパ` はHAZUSEで2008-02-10導入開始を確認済みで、main未登録。これより早い2月未処理機の有無を最終監査し、なければ次レコードとして処理する。**
- `パチスロ「PLAYBOY」Limited Edition` は山佐公式で2008年2月稼働、HAZUSEも2008年2月。具体日を追加探索して時系列位置を決める。
- 北斗の拳2ネクストゾーン将/闘等の2月機も順次境界監査する。

## 重複防止

既存の2007年 `めんそーれ2-30`、227 `めんそーれ2-25`、226以前の既収録機種は再追加禁止。`めんそーれ2A-30` は別機種だが2008年4〜5月時系列まで保留。

## 次回再開地点

1. **LATEST_HANDOFF基準227件地点から継続。**
2. **2008年2月1〜9日の未処理機を当時業界記事・メーカー公式・旧DBで最終監査。より早い未処理がなければ `スロガッパ`（エレコ、2008-02-10導入開始）を228件目候補として処理する。**
3. `PLAYBOY Limited Edition` / 北斗の拳2ネクストゾーン将・闘など同月候補を具体導入日で並べる。
4. resetBehavior遡及QAは **`球児（2006-09）`** から再開。
5. 欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機・同名類似機の仕様を根拠なしに流用しない。
