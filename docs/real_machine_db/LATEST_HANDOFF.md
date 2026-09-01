# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは229件地点（`パチスロ「PLAYBOY」Limited Edition` 追加済み）。
- **サミー `パチスロ北斗の拳2 ネクストゾーン闘` を230件目として追加済み。**
- resetBehavior遡及QAは前回 `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 230. パチスロ北斗の拳2 ネクストゾーン闘（サミー）

- new record: `docs/real_machine_db/machines/2008-03-02_hokuto2-next-zone-tou.md`
- commit: `f4f6b2e309ee2373330cdf903ab4ee04c41327d8`
- manufacturer: サミー
- modelName: `北斗の拳2NE`
- releaseDate: `2008-03-02`（当時業界記事の納品開始予定日）
- generation: 5号機初期
- systemType: ボーナス + RT（覇王モード）
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入境界の修正

- 後年DBの一部は『闘』を2008年2月導入とするが、2008-02-01のグリーンべるとは『闘』『将』の納品を **2008-03-02から開始予定** と明記。
- 2008-02-18のサミーネットワークス発表転載も、777タウンの2/25テスト版を **「ホールへの実機導入に先駆けて」** と明記している。
- よって2月機として登録せず、3月導入系列へ移動。releaseDateは納品開始予定日 `2008-03-02` を採用。

### 性能コア

- 設定1〜6 BIG: `1/407.1 / 387.8 / 374.5 / 358.1 / 343.1 / 327.7`
- MIDDLE: `1/799.2 / 780.2 / 753.3 / 712.3 / 689.9 / 655.4`
- 合成: `1/269.7 / 259.0 / 250.1 / 238.3 / 229.1 / 218.5`
- 50枚ベース（K-Navi）: `36.82 / 37.26 / 37.72 / 38.17 / 38.65 / 39.26G`
- BIG純増約264枚、MIDDLE純増約104枚。
- RT「覇王モード」: 約 `+0.05枚/G`、最大3000G、継続率50/60/70/80/90/95%。
- 機械割は資料競合:
  - 解析セブン: `98.8 / 100.8 / 102.8 / 105.0 / 107.2 / 109.7%`
  - 後年回顧資料: `97.8 / 99.6 / 101.4 / 103.4 / 105.5 / 107.7%`
  - 平均化せず `CONFLICT_PAYOUT_RATE`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `NOT_APPLICABLE_TO_NORMAL_CEILING`（通常時ゲーム数天井なし相当。RT最大3000Gは通常時天井ではない）
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: `UNVERIFIED_AFTER_RESEARCH`（RT継続率/内部モードの設定変更時処理）
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`（RT/チャンスタイム中の設定変更・電断処理）
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- 朝一専用モード、リセット短縮天井、公開朝一恩恵数値は確認されず。

### 主要出典

- グリーンべると: https://web-greenbelt.jp/00003486/
- 4Gamer（サミーネットワークス発表転載）: https://www.4gamer.net/games/021/G002122/20080218018/
- K-Navi: https://p-kn.com/slot/760/
- K-Navi 小役/ベース: https://p-kn.com/slot/760/4922/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/111/a.php
- 解析セブン: https://crankyseven.com/sp/hokuto2_nexttou-pc.htm

取得日: 2026-09-01

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 2008年2月境界監査

- 228: `リーチ目発見！スロガッパ`。再追加禁止。
- 229: `パチスロ「PLAYBOY」Limited Edition`。再追加禁止。
- `パチスロ北斗の拳2 ネクストゾーン闘 / 将` は当時一次資料により2月ではなく3月導入系列へ修正。
- 現時点では229より後、2008年2月内に強い日付根拠を持つ未処理機は未確定。漏れ候補が見つかった場合は遡及挿入を優先。

## 2008年3月境界監査

- 230: `パチスロ北斗の拳2 ネクストゾーン闘`。再追加禁止。
- **同日系列の `パチスロ北斗の拳2 ネクストゾーン将`（型式 北斗の拳2ZS）が次の最優先未処理。**
- グリーンべるとでは『闘』『将』とも納品2008-03-02開始予定。
- 将は闘と別スペック・別型式で、性能値を混用しない。
- 将の先行確認値:
  - BIG `1/290 → 1/236`
  - MID `1/524 → 1/289`
  - 合成 `1/187 → 1/130`
  - BIG約312枚、MID約100〜116枚（資料定義差を監査）
  - 北斗BIG後は次回ボーナスまでRT
  - 非北斗BIG後999G / MID後666Gで天井RT
  - 旧解析に「設定変更後も前日のG数を引き継ぐ」記録あり。resetBehaviorの重要確認対象。
- 将処理後、2008年3月の他未処理機を具体導入日順で監査する。

## 重複防止

既存230件は再追加禁止。`北斗の拳2 ネクストゾーン闘` と `将` は名称が一文字違うが、型式・ゲーム性・ボーナス性能・RT構造が異なる独立機種。前作 `北斗の拳2 乱世覇王伝 天覇の章` とも混用禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準230件地点から継続。**
2. **最優先: `パチスロ北斗の拳2 ネクストゾーン将` を同日2008-03-02系列として調査・登録。**
3. 将では性能コアに加え、BIG後999G / MID後666G天井RTと、設定変更時のG数引継ぎ、据え置き、電源OFF→ON、RT状態、朝一判別を重点確認する。
4. その後、2008年3月の最古未処理機を具体導入日で再監査して時系列順に進む。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` 以降の未補完レコードから継続。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを変えて十分再探索してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。
