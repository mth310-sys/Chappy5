machineName: ニューアイムジャグラーEX-KA（ニューアイムジャグラーEX レッドゴールドパネル）
manufacturer: 北電子 / KITA DENSHI
releaseDate: 2016-09-12
recordNumber: 1013
generation: 5号機
systemType: ノーマルAタイプ / 完全告知 / リアルボーナス
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity
- 北電子公式に `ニューアイムジャグラーEX-KA` の検定情報および「ニューアイムジャグラーEX(レッドゴールドパネル)」製品ページが現存。
- formalModelName: `ニューアイムジャグラーEX-KA`。
- certificationNumber: `4S0098`（P-WORLD、HAZUSE machine_codeとも一致）。
- 北電子公式製品一覧は本機を「EX完全継承」とし、設定別BB/RB/合成/出玉率を掲載。
- 導入日はHAZUSEが2016-09-12、K-Naviの「レッドゴールドパネル」ページが2016-09-26。後年パチ7も2016-09-12を掲載。全国導入開始とパネル展開日の差の可能性があるが直接一次資料で解消できないため、時系列canonicalはHAZUSE＋後年一覧が一致する2016-09-12とし、09/26をCONFLICT保持。
reliability: OFFICIAL_ANALYSIS_MULTI_SOURCE_WITH_RELEASE_DATE_CONFLICT

## payoutRateBySetting
canonicalSourceDefinition: FACTORY_PREDICTED / OFFICIAL
| 設定 | 出玉率 |
|---:|---:|
| 1 | 95.9% |
| 2 | 96.7% |
| 3 | 98.7% |
| 4 | 100.8% |
| 5 | 102.8% |
| 6 | 105.2% |
- 北電子公式製品一覧掲載値。公式注記は「工場データから算出した予測値」。
- チェリー狙い解析値は 96.91 / 97.80 / 99.91 / 102.04 / 104.16 / 106.55% と別定義なので混合しない。
reliability: OFFICIAL

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/287.4 | 1/455.1 | 1/176.2 |
| 2 | 1/282.5 | 1/442.8 | 1/172.5 |
| 3 | 1/282.5 | 1/348.6 | 1/156.0 |
| 4 | 1/273.1 | 1/321.3 | 1/147.6 |
| 5 | 1/273.1 | 1/268.6 | 1/135.4 |
| 6 | 1/268.6 | 1/268.6 | 1/134.3 |
- 北電子公式、P-WORLD、HAZUSEで一致。
reliability: OFFICIAL_MULTI_SOURCE_CONFIRMED

## baseGamesPer50
- canonical comparison value: チェリー狙いで約34.52 / 34.54 / 34.53 / 34.55 / 34.54 / 35.88G/50枚（設定1→6）。
- 完全小役奪取では約34.99 / 35.01 / 35.00 / 35.02 / 35.01 / 36.39G/50枚。
- 後年解析の同一EX系統計算値。公式「EX完全継承」かつKAのボーナス/小役仕様と一致するため比較用に採用し、条件を明記。
reliability: ANALYSIS_HIGH_RETROSPECTIVE_SAME_SPEC_FAMILY

## netIncrease
- NOT_APPLICABLE_REAL_BONUS_NORMAL_TYPE。

## basicPayout
- BIG: 約325枚。
- REG/BONUS GAME: 約104枚。
- P-WORLDはBIG 336枚超払出終了・純増約325枚、REG 98枚超払出終了・純増約104枚。
- 北電子公式の同一EX系統製品情報でもBB約325枚/RB約104枚。
reliability: OFFICIAL_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData
- ノーマルAタイプ / 完全告知。
- AT/ART/CZ、通常時ゲーム数管理モード、ゲーム数天井は非搭載。
- GOGO!ランプ点灯でボーナス確定。先告知1/4・後告知3/4はゲーム性でありreset専用挙動ではない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 通常ゲーム数天井・AT/ARTゲーム数・モードは非搭載のため、それらのリセット契約はNOT_APPLICABLE。
- 本機固有に設定変更時だけ成立する朝一高確・専用モード・短縮天井は確認できない。
- ボーナス成立済み等の特殊状態を含む厳密な設定変更契約は、公式/当時解析/後年回顧を再探索したが直接固定できずUNVERIFIED_AFTER_RESEARCH。

### carryOverBehavior
- 天井・AT/ART/CZ・通常時ゲーム数モードはNOT_APPLICABLE。
- 特殊状態の据え置き契約はUNVERIFIED_AFTER_RESEARCH。

### powerCycleBehavior
- 天井・AT/ART/CZ・通常時ゲーム数モードはNOT_APPLICABLE。
- 純電源OFF→ONのみの場合の特殊状態契約はUNVERIFIED_AFTER_RESEARCH。

### gameCounterReset
- NOT_APPLICABLE_NO_GAME_NUMBER_CEILING。

### ceilingAfterReset
- NOT_APPLICABLE_NO_CEILING。

### modeAfterReset
- NOT_APPLICABLE_NO_GAME_NUMBER_MODE_SYSTEM_CONFIRMED。

### stateAfterReset
- AT/ART高確等はNOT_APPLICABLE。
- リアルボーナス成立済み等の特殊状態のみUNVERIFIED_AFTER_RESEARCH。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 設定変更専用の短縮天井、朝一専用モード、公開されたリセット初当たり優遇: NONE_CONFIRMED_AFTER_RESEARCH。

### resetPenalties
- 設定変更によって失われる天井進捗/AT・ARTモードは非搭載。
- その他の主要な設定変更固有不利要素: NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 後年ジャグラー解析では朝一1回転目のリールガックンを設定変更判別材料として扱う資料が存在。
- 一方、本機/同一EX系統についてはガックンが極めて小さく、目視では判別困難でスローモーション等で辛うじて確認できる程度との回顧資料あり。
- メーカー公式が変更確定契約として保証している資料は確認できないため、`GACKUN_REPORTED_BUT_VISUALLY_WEAK_NOT_MANUFACTURER_GUARANTEE` とする。
- 設定変更/電源ON-OFFのBGM引継ぎについては後継AE資料に報告があるが、KA固有直接契約としては転記しない。

### numericResetData
- 朝一専用モード振り分け / リセット恩恵発生率 / 短縮天井G数: NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts
- RELEASE_DATE:
  - HAZUSE: 2016-09-12導入開始。
  - パチ7後年ジャグラー一覧: 2016-09-12。
  - K-Navi「ニューアイムジャグラーEXレッドゴールドパネル」: 2016-09-26ホール導入開始。
  - A-SLOT / 北電子公式製品年表は2016年9月まで。
  - 平均化せず `CONFLICT_RELEASE_DATE_2016_09_12_VS_2016_09_26` として保持。
- PAYOUT_RATE_DEFINITION:
  - 公式工場予測値: 95.9 / 96.7 / 98.7 / 100.8 / 102.8 / 105.2%。
  - チェリー狙い解析値: 96.91 / 97.80 / 99.91 / 102.04 / 104.16 / 106.55%。
  - 条件差のためCONFLICTではなく別定義系列として保持。

## missingFields
- 設定変更/据え置き/純電断時のリアルボーナス成立済み等の特殊状態契約: UNVERIFIED_AFTER_RESEARCH
- ガックンのメーカー保証契約: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08
1. 北電子公式 — ニューアイムジャグラーEX-KA 検定情報
   - https://www.kitadenshi.co.jp/slot-kentei/newimjugglerex-ka/
   - 形式名、各都道府県の検定公示。
   - reliability: OFFICIAL
2. 北電子公式 — ニューアイムジャグラーEX(レッドゴールドパネル)
   - https://www.kitadenshi.co.jp/products/2016/ex-ka/
   - 公式製品存在。
   - reliability: OFFICIAL
3. 北電子公式 — パチスロ製品一覧
   - https://www1.kitadenshi.co.jp/slot/?s=2&slot-year=
   - 「EX完全継承」、設定別BB/RB/合成/出玉率。
   - reliability: OFFICIAL
4. HAZUSE DATA — ニューアイムジャグラーEX-KA
   - https://data.hazuse.com/?genre=208&machine_code=4S0098
   - 導入開始2016-09-12、型式系machine_code 4S0098、設定別ボーナス値。
   - reliability: ANALYSIS_HIGH
5. K-Navi — ニューアイムジャグラーEXレッドゴールドパネル
   - https://p-kn.com/slot/2602/
   - ホール導入開始2016-09-26、設定別BIG等。
   - reliability: ANALYSIS_HIGH
6. P-WORLD — ニューアイムジャグラーEX-KA
   - https://www.p-world.co.jp/machine/database/8163
   - 型式名、検定番号4S0098、ノーマルタイプ、設定別ボーナス/機械割、約325枚/104枚。
   - reliability: INDUSTRY_DATABASE
7. なな徹 — ニューアイムジャグラーEX 小役確率
   - https://nana-press.com/kaiseki/machine/21/331/
   - 同一EX系の50枚あたりゲーム数、設定別小役。
   - reliability: RETROSPECTIVE_ANALYSIS
8. ジャグジャグBeats! — ニューアイムジャグラーEX(EX-KT,EX-KA)
   - https://jugjug.net/newimjugglerex
   - メーカー発表値転載、チェリー狙い機械割、朝一ガックンが極めて小さい旨。
   - reliability: RETROSPECTIVE_ANALYSIS
9. パチ7 — ジャグラーシリーズ一覧
   - https://pachiseven.jp/articles/detail/9823
   - EX-KA導入日2016-09-12。
   - reliability: RETROSPECTIVE_INDUSTRY_MEDIA
10. A-SLOT — 北電子 ニューアイムジャグラーEX-KA
   - https://www.a-slot.com/SHOP/kitadensi80.html
   - 2016年9月導入開始。
   - reliability: SECONDARY_MACHINE_DATABASE
