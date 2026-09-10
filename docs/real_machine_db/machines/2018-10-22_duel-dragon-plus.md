# No.1238 デュエルドラゴンプラス

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: デュエルドラゴンプラス
- manufacturer: ミズホ / ユニバーサルエンターテインメント系
- releaseDateCanonical: 2018-10-22
- generation: 5.9号機
- systemType: A+RT / リアルボーナス+CZ+RT
- formalModelName: `デュエルドラゴンプラスUL`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- ユニバーサル公式は発売を2018年10月と掲載。
- 2018-09-28グリーンべるとは納品予定日を2018-10-21と掲載。
- K-Navi、すろぱちくえすと、当時解析は2018-10-22導入を掲載。
- ちょんぼりすたは「2018年11月5日（一部10月22日〜）」、当時実戦系資料も「一部地域10/22、全国11/5」と記載。
- canonicalは最初の確認可能なホール導入として `2018-10-22`。全国導入 `2018-11-05` を地域差として保持。
- confidence: `OFFICIAL_MONTH_PLUS_CONTEMPORARY_INDUSTRY_PLUS_MULTIPLE_ANALYSIS_CROSSCHECKED_WITH_REGIONAL_ROLLOUT`。

## identificationEvidence
- ユニバーサル公式: メーカー ミズホ、5号機、ボーナス+RT、2018年10月発売。
- 複数中古実機DBは型式名 `デュエルドラゴンプラスUL` を掲載。
- 検定番号は型式名・メーカー名・検定/認定/適合/号数等で再探索したが、今回高信頼で固定できず推測しない。

## performanceCore
### payoutRateBySetting
- setting1: 97.4%
- setting2: 100.2%
- setting5: 103.9%
- setting6: 108.0%
- パチマガスロマガ、すろぱちくえすと、ちょんぼりすたで一致。

### initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/331.0 | 1/392.4 | 1/179.6 |
| 2 | 1/324.4 | 1/368.2 | 1/172.5 |
| 5 | 1/306.2 | 1/329.3 | 1/158.7 |
| 6 | 1/290.0 | 1/290.0 | 1/145.0 |

### baseGamesPer50
- 約36.1〜38.3G/50枚（設定差あり）。
- すろぱちくえすと、パチマガスロマガで一致。

### netIncrease
- RT純増: `現状維持程度`。
- RT「CHANCE TIME」は1セット20G。

### basicPayout
- BIG: 300枚。
- REG: 最大100枚。
- ユニバーサル公式/業界記事/P-WORLD/K-Naviで一致。

### ceiling
- 天井: `NONE / NOT_EQUIPPED`。

## modeSpecificMinimumData
- BIG後CZ「DRAGON BATTLE」からRT「CHANCE TIME」へ突入。
- BIG後CZのRT期待度は約52%。
- RTは20G、終了後CZを介して約82%ループ。
- REG成立ではRTが終了しない。

## resetBehavior
### settingChangeBehavior
- `RT_STATE_CARRYOVER_CONFIRMED_INITIAL_LCD_PATTERN_FIXED`
- 公開朝一比較表では設定変更時もRT状態を引き継ぐ。
- 液晶初期出目は `7・BAR・Do`。

### carryOverBehavior
- `RT_CARRYOVER_EXPECTED_WHEN_NO_SETTING_CHANGE_BUT_DISTINCT_FULL_INTERNAL_CONTRACT_NOT_PUBLISHED`
- 前日RT残りがあれば朝一判別材料になり得ると攻略資料が記載。
- 据え置き時の全内部状態を独立して列挙した本機固有資料は確認できず、純電断と完全同義にはしない。

### powerCycleBehavior
- `RT_STATE_CARRYOVER_CONFIRMED_INITIAL_LCD_PATTERN_FIXED`
- 電源OFF→ON時もRT状態を引き継ぐ。
- 液晶初期出目は設定変更時と同じ `7・BAR・Do`。

### gameCounterReset
- `NOT_APPLICABLE_NO_CEILING_COUNTER`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- 朝一専用モード/リセット専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- RT状態は設定変更でも電源OFF→ONでも引継ぎ確認。
- その他の内部抽選状態: `NONE_RELEVANT_CONFIRMED_FOR_YARDSTICK / DETAILED_INTERNAL_REPRODUCTION_NOT_COLLECTED`。

### advantageousSectionReset
- `N/A_NOT_APPLICABLE_TO_CORE_GAMEPLAY`。
- 本機は5.9号機A+RTで、朝一・主要出玉性能を有利区間リセットに依存させる機種固有公開情報は確認していない。

### resetBenefits
- 短縮天井・朝一初当たり優遇等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `SETTING_CHANGE_DIFFICULT_TO_DETECT_FROM_RT_OR_LCD`
- RT状態は設定変更でも引継ぎ、液晶出目も設定変更/電源再投入とも `7・BAR・Do` のため、これらでは設定変更判別不可。
- 攻略資料は「ガックン判別できる機種ではない」と記載。
- 前日RT残り等の外部履歴が分かる場合のみ据え置き推測材料になり得る。

### numericResetData
- normalCeiling: `NONE`。
- resetSpecificCeiling: `NOT_APPLICABLE`。
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`。
- morningHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`。
- reelGakkunRate: `N/A / NOT_USABLE_FOR_DETECTION`。

## conflicts
- release date: `REGIONAL_ROLLOUT_2018_10_22_VS_NATIONWIDE_2018_11_05`。平均せず双方保持。
- 日刊スポーツ2018-09-28導入カレンダーは10/22欄にチェインクロニクルを掲載するが、サミー公式2018-09-10はチェインクロニクルを「11月上旬より稼動開始予定」、複数実導入DBは2018-11-05で一致。したがってチェインクロニクルを10/22実導入として登録しない。

## missingFields
- 検定番号。
- 据え置き時の全内部状態を純電断と独立条件で明記した資料（RT引継ぎ・判別上の要点は取得済み）。

## sources
取得日: 2026-09-10

1. ユニバーサル公式 デュエルドラゴンプラス — https://www.universal-777.com/product/slot/dueldragon_plus/
   - ミズホ、5号機、ボーナス+RT、約82%ループRT、2018年10月発売。
   - reliability: OFFICIAL
2. グリーンべると「出目と液晶演出が織りなす矛盾を楽しめ！」 — https://web-greenbelt.jp/00010777/
   - 2018-09-28、BIG300枚/REG最大100枚、RT20G・約82%ループ、10/21納品予定。
   - reliability: INDUSTRY_CONTEMPORARY
3. PiDEA X「A+RTで決闘、再び『デュエルドラゴン』」 — https://www.pidea.jp/articles/A%2BRT%E3%81%A7%E6%B1%BA%E9%97%98%E3%80%81%E5%86%8D%E3%81%B3%E3%80%8C%E3%83%87%E3%83%A5%E3%82%A8%E3%83%AB%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%80%8D%EF%BC%8F%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB
   - A+RT、20G RT、約82%ループ、10月下旬導入予定。
   - reliability: INDUSTRY_CONTEMPORARY
4. K-Navi — https://p-kn.com/slot/3110/
   - 2018-10-22導入、BIG300枚、REG最大100枚。
   - reliability: ANALYSIS_HIGH
5. すろぱちくえすと — https://www.slopachi-quest.com/article/dueldragon-plus/
   - 2018-10-22、設定別BIG/REG/合算/機械割、36.1〜38.3G/50枚、RT現状維持、天井なし。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ ボーナス確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/41/h-1.php
   - 設定別BIG/REG/合算/PAYOUT。
   - reliability: ANALYSIS_HIGH
7. パチマガスロマガ 小役確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/41/c.php
   - 50枚あたり36.1〜38.3G。
   - reliability: ANALYSIS_HIGH
8. ちょんぼりすた — https://chonborista.com/slot/universal-slot/66434/
   - 11/5全国（一部10/22〜）、朝一比較: 設定変更/電源OFF→ONともRT状態引継ぎ、液晶出目7・BAR・Do、RT/出目では変更判別不可。
   - reliability: ANALYSIS_HIGH
9. モゲスロ — https://moge-site.com/archives/22740
   - ガックン判別不可、前日RT残り等がなければリセット判別不可。
   - reliability: ANALYSIS_SINGLE
10. サミー公式 チェインクロニクル発売告知 — https://www.sammy.co.jp/japanese/news/2018/1119.html
   - 2018-09-10時点で11月上旬より稼動開始予定。
   - reliability: OFFICIAL
11. 日刊スポーツ導入カレンダー 2018-09-28 — https://www.nikkansports.com/amusement/pachislot/news/201809280000351.html
   - 10/22にチェインクロニクルを掲載する予定表。後続の公式/実導入情報と競合するため予定情報として保持。
   - reliability: INDUSTRY_CONTEMPORARY_SCHEDULE
