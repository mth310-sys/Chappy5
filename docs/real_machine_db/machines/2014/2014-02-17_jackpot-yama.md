# ジャックポット（2014年・ヤーマ）

machineName: ジャックポット
aliases: JACKPOT / ジャックポット（2014年） / ジャックポットY6
manufacturer: ヤーマ / yama（販売協力: ベルコ）
releaseDate: 2014-02-17
releaseDatePrecision: exact_hall_start_analysis_calendar_with_period_industry_delivery

generation: 5号機
systemType: ノーマル / Aタイプ / 完全告知
recordStatus: PARTIAL_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- 型式名: **ジャックポットY6**。
- 検定番号: **3S0992**。
- HAZUSEは導入開始日を **2014-02-17** と掲載。
- 当時グリーンべるとは2013-11-19のプレス発表会を報道し、納品予定を **2014-02-16** と記載。これは納品日定義であり、本DBの時系列キーはHAZUSE/Pachisevenのホール導入開始日2014-02-17を採用する。
- ベルコ現行公式アーカイブは本機をヤーマ製・2014年2月登場・5号機ノーマル完全告知として掲載。
- 2025年のスマスロ「LBジャックポット」および岡崎産業の同名/近似シリーズとは別機種。
- confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.5% |
| 2 | 98.0% |
| 3 | 100.0% |
| 4 | 102.0% |
| 5 | 104.5% |
| 6 | 107.0% |

- HAZUSE本機ページで設定1～6のPAY OUTを確認。
- 後年のジャックポットシリーズ回顧資料も同値を掲載。
- confidence: ANALYSIS_HIGH + RETROSPECTIVE_CORROBORATION

## initialHitBySetting

### BIG / REG / ボーナス合算

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/287.0 | 1/356.0 | 1/158.9 |
| 2 | 1/277.0 | 1/348.0 | 1/154.2 |
| 3 | 1/273.0 | 1/334.0 | 1/150.2 |
| 4 | 1/268.0 | 1/315.0 | 1/144.8 |
| 5 | 1/260.0 | 1/303.0 | 1/139.9 |
| 6 | 1/252.0 | 1/292.0 | 1/135.3 |

- BIG/REGはHAZUSE本機ページ。
- 合算はベルコ公式アーカイブとHAZUSEで一致。
- 当時グリーンべるとも合算を約1/159～1/135と報道しており整合。
- HAZUSEのBIG/REG値は小数点以下を省いた掲載値。精密値へ推定補完しない。
- confidence: OFFICIAL_FOR_COMBINED + ANALYSIS_HIGH_FOR_BIG_REG

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「ジャックポット / JACKPOT / ジャックポットY6 / ヤーマ / ベルコ」と「50枚 / 1000円 / ベース / コイン持ち / 回転数」を組み替え、公式・HAZUSE・P-WORLD・当時記事・回顧資料を再探索したが、本機専用の比較可能な直接値を安全に固定できなかった。
- 2025年「LBジャックポット」の約40G/50枚は別機種のため使用しない。
- confidence: UNVERIFIED

## netIncrease

- **NOT_APPLICABLE_NORMAL_TYPE**。
- ART/AT等の付加機能は非搭載。

## basicPayout

- BIG: **平均312枚**。
- REG: **平均104枚**。
- P-WORLDはBIG 312枚 / REG 104枚、HAZUSEも平均312枚 / 平均104枚。当時グリーンべるとはBB312枚 / RB104枚と報道。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- リール右下の7セグ始動でボーナス確定となる完全告知Aタイプ。
- 7セグ「3」=REG、「5」=BIG or REG、「7」=BIG。
- 「リプレイテンパイハズレ」等の伝統リーチ目と、リプレイ/角チェリー後に次ゲームでリールが再始動する「リムーブシステム」を搭載。
- ボーナス終了後 **33G以内に成立したBIGでBGM変化**がある。これはボーナス間の演出条件であり、朝一リセット専用恩恵としては扱わない。

## ceiling

- **NOT_APPLICABLE_NORMAL_TYPE**。
- 本機はボーナスのみで出玉を増やすノーマルタイプ。ゲーム数天井・ART/AT間天井は確認されない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__NORMAL_TYPE_NO_CEILING_MODE_STATE_PROGRESS__DIRECT_MACHINE_RESET_CONTRACT_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更専用の短縮天井、朝一CZ/ART/AT、通常時モード優遇は **NOT_APPLICABLE_NORMAL_TYPE**。
- 本機固有の設定変更時リール初動、初期出目、告知デジタル等の直接仕様は、機種名/型式名/メーカー/シリーズ名と「設定変更 / リセット / 朝一 / 据え置き / ガックン」を組み替えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 天井ゲーム数、ゲーム数解除モード、ART/AT/CZ状態など朝一の宵越し価値を持つ内部進行要素は **NOT_APPLICABLE_NORMAL_TYPE**。
- ボーナス後33G以内BIGのBGM変化条件について、日跨ぎ・電断・設定変更時の扱いを直接示す資料は確認できず、朝一判別へ拡張しない。

### powerCycleBehavior

- 電源OFF→ONのみで比較対象となる天井進捗・通常時モード・ART/AT状態は **NOT_APPLICABLE_NORMAL_TYPE**。
- 本機固有の電断時特殊挙動は「電源OFF ON / 電断 / 朝一 / 据え置き」を含め再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。

### gameCounterReset

- internal ceiling/game-number progression: **NOT_APPLICABLE_NORMAL_TYPE**。

### ceilingAfterReset

- **NOT_APPLICABLE_NORMAL_TYPE**。設定変更専用短縮天井なし。

### modeAfterReset

- **NOT_APPLICABLE_NORMAL_TYPE**。AT/ART/CZの通常時モード管理なし。

### stateAfterReset

- **NOT_APPLICABLE_NORMAL_TYPE**。朝一狙いに影響するAT/ART内部高確等なし。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井、朝一CZ/AT、モード優遇: **NONE / NOT_APPLICABLE_NORMAL_TYPE**。
- 本機固有の公開朝一恩恵数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 前日天井進捗消滅等の不利: **NOT_APPLICABLE_NORMAL_TYPE**。
- 本機固有の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- ガックン、初期出目、7セグ表示、ランプ/BGM等による本機固有の設定変更/据え置き判別は、十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- ボーナス後33G以内BIGのBGM変化は公開されているが、設定変更判別契約を示す資料ではないためresetDetectionには採用しない。

### publicMorningNumbers

- reset-only shortened ceiling: **NOT_APPLICABLE**。
- reset mode/state distribution: **NOT_APPLICABLE_NORMAL_TYPE**。
- reset-only initial hit/CZ rate: **NOT_APPLICABLE**。
- 本機固有の公開朝一判別数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- 2014年ヤーマ版と2025年スマスロ「LBジャックポット」を混同しない。2025年機の約40G/50枚、BT仕様、設定1/2/5/6の4段階設定は本機へ転記しない。
- 岡崎産業の「スロット ジャックポット」「ジャックポットドリーム」等も別機種として分離。
- 当時業界記事の2014-02-16は納品予定日、HAZUSE/Pachisevenの2014-02-17は導入開始日として定義を分離する。
- HAZUSEのBIG/REG分母は整数丸め掲載値。精密値を推測生成しない。

## sources

取得日: **2026-09-06**

1. ベルコ公式 / ヤーマ「ジャックポット」機種情報
   - https://www.s-bellco.co.jp/products/slot/yama_jackpot/
   - 2014年2月登場 / ヤーマ / 5号機ノーマル完全告知 / 設定別ボーナス合算。
   - confidence: OFFICIAL

2. グリーンべると / P-WORLD業界ニュース「名機『ジャックポット』が復活」2013-11-20
   - https://news.p-world.co.jp/articles/6202/greenbelt
   - 2013-11-19プレス発表 / Aタイプ / BB312枚 / RB104枚 / 合算約1/135～1/159 / 2014-02-16納品予定。
   - confidence: INDUSTRY

3. HAZUSE「ジャックポット」
   - https://hazuse.com/machine/pachislot/3S0992/
   - 導入開始日2014-02-17 / 型式ジャックポットY6 / 検定3S0992 / 設定別BIG・REG・合算 / 機械割 / 平均獲得枚数。
   - confidence: ANALYSIS_HIGH_DATABASE

4. P-WORLD「ジャックポット（2014年）」
   - https://www.p-world.co.jp/machine/database/7270
   - ヤーマ / 5号機ノーマル完全告知 / BIG312枚 / REG104枚 / ゲーム性。
   - confidence: ANALYSIS_HIGH_DATABASE

5. Pachiseven「ジャックポット」通常時の打ち方
   - https://pachiseven.jp/machines/3256/cutout/70
   - 導入日2014-02-17 / メーカー ヤーマ / 通常時打ち方・リーチ目。
   - confidence: ANALYSIS_HIGH_PERIOD_DATABASE

6. 当時ホールスタッフ系記事「ベンリーシステムに新機能！JACKPOTがおもしろすぎる！」2014-02-16
   - https://pachinko-slot.blog.jp/archives/3500518.html
   - 「今週導入開始」とする当時現場文脈 / ベンリーシステム紹介。
   - confidence: PERIOD_SECONDARY_CONTEXT

7. 後年回顧「ジャックポットシリーズ！歴代機械割ランキング」
   - https://www.marimo0925.net/pachislot-kikaiwari-ranking-jackpot-ban/
   - 本機の機械割96.5/98.0/100.0/102.0/104.5/107.0%を再確認する補助資料。
   - confidence: RETROSPECTIVE_SINGLE

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の本機固有物理挙動 / power-cycle特殊挙動 / resetDetection: **UNVERIFIED_AFTER_RESEARCH**。

## nextQaNotes

- 当時のヤーマ/ベルコ営業資料・小役確率表・ホール向けスペックシートが発掘できた場合、50枚ベースを再確認する。
- ボーナス後33G以内BIGのBGM変化について、設定変更/電断をまたいだ条件が明示された一次・当時解析資料が見つかった場合のみresetDetectionを再評価する。
