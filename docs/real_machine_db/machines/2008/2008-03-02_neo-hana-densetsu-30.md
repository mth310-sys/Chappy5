# NEO花伝説-30

machineName: NEO花伝説-30
manufacturer: オリンピア
modelName: NEO花伝説-30
releaseDate: 2008-03-02
generation: 5号機初期
systemType: ノーマル / 完全告知・30Φ
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## payoutRateBySetting
### パチマガスロマガ シミュレート値
|設定|機械割|
|---:|---:|
|1|96.58%|
|2|98.72%|
|3|101.32%|
|4|104.76%|
|5|107.76%|
|6|111.17%|

### 当時事前解析 / 5号機クロニクル系列
|設定|機械割|
|---:|---:|
|1|95.5%|
|2|97.4%|
|3|99.7%|
|4|102.7%|
|5|105.3%|
|6|109.4%|

reliability: CONFLICT

- 2系列は全設定で約1.1〜2.1pt差があり丸め差とは扱えない。
- 平均化せず `CONFLICT_PAYOUT_RATE` として両方保持。
- K-Naviは機械割を未発表としている。

## initialHitBySetting
|設定|BIG合成|REG|ボーナス合成|
|---:|---:|---:|---:|
|1|1/291.27|1/436.91|1/174.76|
|2|1/280.07|1/420.10|1/168.04|
|3|1/267.49|1/402.06|1/160.63|
|4|1/253.03|1/378.82|1/151.70|
|5|1/242.73|1/364.09|1/145.64|
|6|1/229.15|1/343.12|1/137.39|

reliability: ANALYSIS_HIGH

- パチマガスロマガの精密値。
- グリーンべると、K-Navi、P-WORLDの丸め値（BIG 1/291〜1/229、REG 1/437〜1/343、合成1/175〜1/137）と一致。

## baseGamesPer50
|設定|50枚あたりゲーム数|
|---:|---:|
|1|36.47G|
|2|36.87G|
|3|37.31G|
|4|37.97G|
|5|38.83G|
|6|39.17G|

reliability: ANALYSIS_HIGH

- パチマガスロマガ「小役確率」の1000円あたりゲーム数。
- グリーンべると当時記事の概算「33〜34G」とは差があるため、精密解析値と当時業界発表/説明値を定義差候補として分離保持する。

## netIncrease
- NOT_APPLICABLE
- RT/ARTなどの付加機能なし。

reliability: INDUSTRY

- グリーンべると当時記事で「RTなどの付加機能は搭載せず」と明記。

## basicPayout
- BIG: 純増約300枚（336枚超払い出しで終了）
- REG: 純増約105枚（140枚超払い出しで終了）

reliability: INDUSTRY / ANALYSIS_HIGH

- グリーンべると当時記事、K-Navi、P-WORLDで整合。

## modeSpecificMinimumData
- 30Φのノーマル完全告知機。
- パトランプ/フラワーランプ等でボーナスを告知。
- ボーナスは単独成立主体。特殊リプレイ、特殊10枚役、チェリーとの同時成立あり。
- 天井なしを必勝本が明記し、パチマガスロマガも「攻め時・ヤメ時→特にナシ」としている。
- 2002年4号機「花伝説-30」とは別機種。性能・モード/ストック情報を混用しない。

## resetBehavior
settingChangeBehavior: `NO_SPECIAL_BEHAVIOR_CONFIRMED_WITH_LIMITS` — 本機はRT/ART・通常時ゲーム数天井・公開モードを持たないノーマル機で、設定変更専用の天井短縮/朝一モード/恩恵は確認されない。ただし設定変更直後の内部乱数状態等、物差し用途外の詳細を意味するものではない。
carryOverBehavior: `NO_CEILING_OR_MODE_TO_CARRY_CONFIRMED` — 天井なし・公開モードなし。前日ゲーム数を使う宵越し要素は確認されない。
powerCycleBehavior: `NO_SPECIAL_PUBLIC_EFFECT_CONFIRMED` — 電源OFF→ONのみで変化する天井/モード/RTは確認されない。本機固有の表示・出目初期化挙動は直接資料未確定。
gameCounterReset: `NOT_APPLICABLE_CEILING_NONE` — 必勝本が天井「ナシ」と明記。
ceilingAfterReset: `NOT_APPLICABLE_CEILING_NONE` — 短縮対象となる通常時天井なし。
modeAfterReset: `NOT_APPLICABLE_NO_PUBLIC_MODE` — 朝一専用/通常時モード構造は確認されない。
stateAfterReset: `NONE_CONFIRMED` — ホール経営/朝一客AIに影響する公開内部状態の再抽選・引継ぎ要素は確認されない。
advantageousSectionReset: `NOT_APPLICABLE` — 有利区間導入前の5号機。
resetBenefits: `NONE_CONFIRMED`
resetPenalties: `NONE_CONFIRMED`
resetDetection: `UNVERIFIED_AFTER_RESEARCH` — `NEO花伝説-30 / 花伝説30 / オリンピア` と設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン・初期出目・パトランプを組み替えて探索したが、本機固有の変更判別を直接示す資料は確定できず。
numericResetData:
- 通常時ゲーム数天井: NONE（天井ナシ確認）
- リセット短縮天井: NOT_APPLICABLE
- 朝一専用モード振り分け: NONE_CONFIRMED
- 設定変更専用恩恵発生率: NONE_CONFIRMED

### resetBehavior探索メモ
`NEO花伝説-30 / NEO花伝説30 / 花伝説30 / オリンピア / 30Φ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン / 初期出目 / パトランプ` を組み替え、グリーンべると、K-Navi、P-WORLD、パチマガスロマガ、必勝本、当時事前解析、5号機クロニクルを横断した。

4号機の旧「花伝説-30」にはストック/モード資料が大量に存在するため、検索結果混入に注意し、2008年5号機の `NEO花伝説-30` と明記された資料だけを採用した。通常時天井なし・RTなしであるため、朝一客AI向けのゲーム数/モード恩恵は `NOT_APPLICABLE/NONE_CONFIRMED`。ガックン等だけは直接資料不足で推測しない。

## releaseTiming
- グリーンべると（2008-02-08）: `NEO花伝説-30` の納品日を2008-03-02予定と明記。
- K-Navi、P-WORLD、当時事前解析も2008年3月機として整合。
- 本DBでは当時業界一次資料の具体納品日 `2008-03-02` を採用。
- 231件地点の境界監査後に未登録が判明したため遡及追加。

## sources
取得日: 2026-09-01
1. グリーンべると「オリンピアが第2弾パチンコ機を発表」 — https://web-greenbelt.jp/00003478/ — 2008-03-02納品予定、RTなし、BIG/REG/合成、純増300/105枚、1000円33〜34G概算 — reliability: INDUSTRY
2. K-Navi「NEO花伝説-30」 — https://p-kn.com/slot/774/ — BIG/REG/合成丸め値、336枚/140枚超払い出し、ノーマルA-300 — reliability: ANALYSIS_HIGH
3. P-WORLD「花伝説30」 — https://www.p-world.co.jp/machine/database/5090 — 型式名 `NEO花伝説-30`、BIG/REG/合成、払い出し条件、ノーマル完全告知 — reliability: INDUSTRY_DB
4. パチマガスロマガ「花伝説30 ボーナス確率・PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/83/h.php — 精密BIG/REG/合成、シミュレート機械割96.58〜111.17% — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「花伝説30 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/83/c.php — 1000円あたり36.47〜39.17G — reliability: ANALYSIS_HIGH
6. パチマガスロマガ「花伝説30」目次 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/83/olympia_slot_83.php — 攻め時・ヤメ時「特にナシ」 — reliability: ANALYSIS_HIGH
7. パチ＆スロ必勝本「花伝説-30」 — https://p.hisshobon.jp/machine/1078 — 天井情報「ナシ」 — reliability: ANALYSIS_HIGH
8. 侍～samurai～777ブログ 2008-01-31 — https://ameblo.jp/samurai777net/entry-10069226725.html — 当時事前解析、機械割95.5〜109.4%、BIG/REG、300/105枚 — reliability: ANALYSIS_SINGLE
9. 5号機クロニクル「平和＆オリンピア」 — https://5goki.com/heiwa-olympia — 機械割95.5〜109.4%系列 — reliability: ANALYSIS_SINGLE

## missingFields
- 本機固有の設定変更判別（ガックン/初期出目/ランプ表示等）
- グリーンべると概算ベース33〜34Gとパチマガ精密36.47〜39.17Gの定義差の一次説明

## conflicts
- `CONFLICT_PAYOUT_RATE`: パチマガスロマガ96.58〜111.17% vs 当時事前解析/5号機クロニクル95.5〜109.4%。平均化しない。
- `CONFLICT_BASE_DEFINITION`: 当時業界記事の概算33〜34G vs パチマガスロマガ精密36.47〜39.17G。推測で一本化しない。

## reliabilitySummary
- release / system / bonus probabilities / payout: INDUSTRY + ANALYSIS_HIGH
- payoutRate: CONFLICT
- baseGamesPer50: CONFLICT_DEFINITION with precise ANALYSIS_HIGH series retained
- resetBehavior: PARTIAL; no ceiling/mode reset benefit confirmed, detection remains UNVERIFIED_AFTER_RESEARCH
