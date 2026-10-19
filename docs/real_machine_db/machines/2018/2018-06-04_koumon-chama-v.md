# No.1197 パチスロ黄門ちゃまV

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ黄門ちゃまV
- alternateName: 黄門ちゃまV / パチスロ黄門ちゃまＶ
- manufacturer: オリンピア
- releaseDateCanonical: 2018-06-04
- generation: 5.9号機 / 5号機
- systemType: A+ART / ボーナス+ART
- formalModelName: `パチスロ黄門ちゃまV／K2`
- certificationNumber: `7S1718`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、一撃、当時解析資料で2018-06-04導入が一致。
- オリンピア公式製品サイトは2018-03-26機種情報公開、2018-04-10製品サイト公開、2018-06-01更新を確認。
- canonicalはホール導入日として2018-06-04。

## performanceCore

### payoutRateBySetting
高信頼解析系の採用値:
- setting1: 98.1%
- setting2: 99.1%
- setting3: 100.4%
- setting4: 104.9%
- setting5: 106.0%
- setting6: 109.1%

別資料値:
- setting1: 97.6%
- setting2: 98.2%
- setting3: 100.4%
- setting4: 104.9%
- setting5: 106.0%
- setting6: 109.1%

設定1/2のみ差があるため平均化せず `CONFLICT_PAYOUT_S1_S2_98_1_99_1_VS_97_6_98_2` として保持。

### initialHitBySetting
同色BIG:
- allSettings: 1/1489.5

異色BIG:
- allSettings: 1/404.5

BIG合算:
- allSettings: 1/318.1

REG:
- setting1: 1/360.1
- setting2: 1/360.1
- setting3: 1/318.1
- setting4: 1/250.1
- setting5: 1/266.4
- setting6: 1/227.6

ボーナス合算:
- setting1: 1/168.9
- setting2: 1/168.9
- setting3: 1/159.1
- setting4: 1/140.0
- setting5: 1/145.0
- setting6: 1/132.7

ART「水戸喝ラリー」初当たり:
- setting1: 1/567.3
- setting2: 1/565.0
- setting3: 1/545.9
- setting4: 1/518.7
- setting5: 1/529.2
- setting6: 1/499.2

### baseGamesPer50
- 約28.8G～30.2G/50枚（設定1～6）。

### netIncrease
- ART「水戸喝ラリー」: 約0.8枚/G。
- ボーナス込みART期待純増: 約1.5枚/Gとする当時資料あり。定義を分離して保持。

### basicPayout
- 同色BIG: 約284枚。
- 異色BIG: 平均約185枚、最大232枚。
- REG: 最大59枚。

### ceiling
- 通常ゲーム数天井: 非搭載。

## modeSpecificMinimumData
- 通常時はボーナスとCZからARTを目指すA+ART。
- 通常/1stナビ待ち/高確/超高確等の内部状態と有利区間が連動し、通常状態は非有利区間、通常以外では有利区間となる解析。
- ART「水戸喝ラリー」は初期G数を選択式上乗せ特化ゾーン「ハンマープライス」で決定。
- 実機完全再現用の小役別状態移行率・上乗せ振り分けは物差し対象外として収集しない。

## resetBehavior

### settingChangeBehavior
- 機種固有の朝一比較資料で、有利区間ランプは設定変更後 `消灯`。
- 内部状態は設定変更後 `通常`。
- 通常状態は本機解析上、非有利区間に対応するため、設定変更後は非有利区間/通常から開始する契約として扱う。
- 開始液晶ステージは直接比較資料で `調査中` のため推測しない。

### carryOverBehavior
- 据え置き時に前日の有利区間ランプが点灯したままなら翌朝も残ることから、据え置き推測要素になると解析されている。
- ただし「据え置き」を純電源OFF→ONと独立条件で全内部状態について表にした直接資料は確認できず、詳細は `UNVERIFIED_AFTER_RESEARCH_AS_SEPARATE_CONDITION`。
- 通常ゲーム数天井は非搭載。

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは、有利区間ランプ `引き継ぐ`。
- 内部状態も `引き継ぐ`。
- 液晶ステージは直接比較資料で `調査中`。

### gameCounterReset
- 通常ゲーム数天井: `NOT_APPLICABLE_NO_CEILING`。
- 設定変更時は内部状態が通常へ戻り、有利区間ランプ消灯。
- 純電断では有利区間/内部状態を引き継ぐ。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING`。

### modeAfterReset
- 設定変更後: 通常状態。
- 純電源OFF→ON: 内部状態引継ぎ。
- リセット専用モード振り分け・朝一専用モード: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- settingChange: `NORMAL_STATE`。
- powerCycle: `CARRYOVER`。
- carryOver/据え置き独立条件: `UNVERIFIED_AFTER_RESEARCH_AS_SEPARATE_CONDITION`。

### advantageousSectionReset
- settingChange: `RESET_TO_NON_ADVANTAGEOUS_SECTION`（有利区間ランプ消灯、通常状態）。
- powerCycle: `CARRYOVER`。
- carryOver/据え置き独立条件: 前日点灯維持なら据え置き濃厚とされるが、純電断との独立契約は未固定。

### resetBenefits
- 通常ゲーム数天井短縮: `NOT_APPLICABLE_NO_CEILING`。
- 設定変更専用の初当たり優遇、朝一専用モード、公開恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更により前日の有利区間/高確・超高確等は保持されず通常状態へ戻るため、前日有利状態の持越しは失われる。
- それ以外の定量的朝一不利: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 前日閉店時に有利区間ランプ点灯を確認し、翌朝も点灯していれば据え置き濃厚とされる。
- 設定変更後は有利区間ランプ消灯。
- 本機固有のガックン発生率・確定判別契約は検索語を変えた再探索でも直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificHitBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- advantageousSectionOnSettingChange: `NON_ADVANTAGEOUS_SECTION / LAMP_OFF`
- advantageousSectionOnPowerCycle: `CARRYOVER`
- internalStateOnSettingChange: `NORMAL`
- internalStateOnPowerCycle: `CARRYOVER`
- gakkunChangeDetectionRate: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更専用のモード振り分け、朝一特定G以内当選率、短縮天井、リセット恩恵発生率は確認できない。
- 朝一判別は有利区間ランプの消灯/引継ぎという状態差が公開されているが、判別成功率の定量値は未確認。

## conflicts
- `CONFLICT_PAYOUT_S1_S2_98_1_99_1_VS_97_6_98_2`
  - 一撃および当時解析整理: 98.1 / 99.1 / 100.4 / 104.9 / 106.0 / 109.1%。
  - 一部資料: 97.6 / 98.2 / 100.4 / 104.9 / 106.0 / 109.1%。
  - 設定3～6は一致、設定1～2のみ競合。平均化しない。

## missingFields
- 据え置きを純電断と独立条件で示した全内部状態契約。
- 設定変更/純電断時の液晶開始ステージ。
- 本機固有ガックンの発生条件・定量値。
- 設定1/2機械割の98.1/99.1系と97.6/98.2系の定義差を直接説明する一次資料。

## sources
取得日: 2026-09-10

1. オリンピア公式 — パチスロ 黄門ちゃまV
   - https://www.olympia.co.jp/newmachine/ps_chamav/
   - 2018-03-26機種情報公開、2018-04-10製品サイト公開、2018-06-01更新。本機同一性確認。
   - confidence: `OFFICIAL`
2. HAZUSE — パチスロ黄門ちゃまV
   - https://hazuse.com/machine/pachislot/7S1718/
   - 導入2018-06-04、メーカーオリンピア、型式`パチスロ黄門ちゃまV／K2`、検定`7S1718`、ボーナス基本獲得性能。
   - confidence: `ANALYSIS_HIGH`
3. 一撃 — パチスロ黄門ちゃまV
   - https://1geki.jp/slot/s_koumonv/
   - 導入2018-06-04、A+ART、純増約0.8枚/G、PAY 98.1～109.1%。
   - confidence: `ANALYSIS_HIGH`
4. 一撃 — ボーナス確率 / ART初当たり
   - https://1geki.jp/slot/s_koumonv/1/
   - BIG/REG/ボーナス合算、ART初当たり設定別数値。
   - confidence: `ANALYSIS_HIGH`
5. 一撃 — 小役確率 / 50枚ベース
   - https://1geki.jp/slot/s_koumonv/4/
   - 約28.8～30.2G/50枚。
   - confidence: `ANALYSIS_HIGH`
6. 一撃 — ボーナス概要
   - https://1geki.jp/slot/s_koumonv/61/
   - 同色BIG約284枚等。
   - confidence: `ANALYSIS_HIGH`
7. PiDEA X — 選択式上乗せゾーンを継承！黄門ちゃまV／オリンピア
   - https://www.pidea.jp/articles/%E9%81%B8%E6%8A%9E%E5%BC%8F%E4%B8%8A%E4%B9%97%E3%81%9B%E3%82%BE%E3%83%BC%E3%83%B3%E3%82%92%E7%B6%99%E6%89%BF%EF%BC%81%E9%BB%84%E9%96%80%E3%81%A1%E3%82%83%E3%81%BEV%EF%BC%8F%E3%82%AA%E3%83%AA%E3%83%B3%E3%83%94%E3%82%A2
   - 2018-04-12内覧会、同色BIG約284枚、異色BIG平均185枚・最大232枚、REG最大59枚、ART純増約0.8枚。
   - confidence: `INDUSTRY`
8. 期待値見える化 — 黄門ちゃまV 有利区間・朝一リセット解析
   - https://slotjin.com/slot/koumonv/
   - 設定変更後: 有利区間ランプ消灯/内部状態通常。電源OFF→ON: 有利区間ランプ・内部状態引継ぎ。前日点灯→翌朝点灯で据え置き濃厚。天井非搭載。
   - confidence: `ANALYSIS_HIGH`
9. すろかい — 黄門ちゃまV解析情報
   - https://slotkaiseki.hatenablog.com/entry/2018/03/30/090612
   - 2018-06-04導入、A+ART、ベース、ボーナス・ART初当たり、PAY 98.1～109.1%。
   - confidence: `ANALYSIS_SINGLE`
10. スロット専門ゲームセンター スパイダー — エントリー可能機種
   - https://ameblo.jp/kenchan-retro/entry-12869487725.html
   - PAY 97.6 / 98.2 / 100.4 / 104.9 / 106.0 / 109.0%系の後年資料。設定1/2の競合確認用。
   - confidence: `SECONDARY_CONFLICT`

## researchNotes
- 性能コアは公式同一性、HAZUSE、一撃、PiDEA X、当時解析を横断。
- 設定1/2機械割は複数資料系統で差があるため平均せずCONFLICT保持。
- resetBehaviorは設定変更と電源OFF→ONを機種固有で直接比較する資料を採用し、5.9号機一般論だけでは補完していない。
- 「5.9号機はリセット恩恵を付けられない」という説明は、朝一専用の数値恩恵なしの補強として扱い、法規一般論だけで個別状態を推定しない。
