# No.1194 シークレットハイビスカス

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: シークレットハイビスカス
- manufacturer: パイオニア
- releaseDateCanonical: 2018-05-21
- generation: 5.9号機 / 5号機
- systemType: ノーマルA / 完全告知
- formalModelName: `シークレットハイビスカス／AA`
- certificationNumber: `7S1036`
- medalDiameter: 25φ
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、ちょんぼりすた、すろぱちくえすと、2-9伝説は導入開始を2018-05-21としている。
- 一方、グリーンべると2018-04-11記事とPiDEA同日記事は発表時点の納品予定を2018-06-03としている。DMMぱちタウンには2018-05-28表記もある。
- パイオニア公式は2018-05-14〜05-28に「シークレットハイビスカス導入記念」キャンペーンを実施しており、少なくとも5月中の市場投入施策は公式に確認できる。
- 事前予定日と複数の導入後DBの実導入日を平均化せず、複数の導入後資料が一致する2018-05-21をcanonicalとし、05-28 / 06-03予定はCONFLICTとして保持する。

## performanceCore

### payoutRateBySetting
- setting1: 96.5%
- setting2: 98.4%
- setting3: 99.9%
- setting4: 103.2%
- setting5: 105.9%
- setting6: 110.1%

### initialHitBySetting
BIG:
- setting1: 1/286
- setting2: 1/281
- setting3: 1/271
- setting4: 1/263
- setting5: 1/251
- setting6: 1/239

REG:
- setting1: 1/428
- setting2: 1/362
- setting3: 1/339
- setting4: 1/291
- setting5: 1/276
- setting6: 1/239

ボーナス合算:
- setting1: 1/171
- setting2: 1/158
- setting3: 1/150
- setting4: 1/138
- setting5: 1/131
- setting6: 1/119

### baseGamesPer50
- 約35〜36G/50枚。

### netIncrease
- `NOT_APPLICABLE_NORMAL_A_TYPE`。

### basicPayout
- BIG: 312枚。
- REG: 最大約104枚。

### ceiling
- 天井非搭載。

## modeSpecificMinimumData
- AT/ART/RT/CZ非搭載のボーナス主体ノーマルタイプ。
- リール左側のシークレットランプ点灯でボーナス告知。
- 告知割合は先告知約33%、後告知約67%。
- 実機完全再現用の全小役確率・告知パターン詳細は物差し範囲外。

## resetBehavior

### settingChangeBehavior
- 本機固有の「設定変更時に成立済みボーナス/内部フラグをどう扱うか」を直接示す一次・当時解析資料は、機種名・型式名・メーカー名と「設定変更・リセット・朝一・据え置き・電源OFF ON」を変えて再探索したが固定できず`UNVERIFIED_AFTER_RESEARCH`。
- AT/ART/CZ・通常ゲーム数天井は存在しないため、それらのゲーム数/モード初期化契約は`NOT_APPLICABLE`。

### carryOverBehavior
- 据え置きという独立条件での本機固有の成立済みボーナス/内部フラグ契約は`UNVERIFIED_AFTER_RESEARCH`。
- 天井・AT/ART/CZモードの引継ぎは`NOT_APPLICABLE`。

### powerCycleBehavior
- 純電源OFF→ON時の本機固有の成立済みボーナス/内部フラグ契約は、十分な再探索後も直接固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 天井・AT/ART/CZ状態の引継ぎは`NOT_APPLICABLE`。

### gameCounterReset
- `NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_RELEASE`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- `NOT_APPLICABLE_NO_AT_ART_CZ_MODE_SYSTEM`。

### stateAfterReset
- 朝一の出玉挙動を左右する本機固有の内部高確/低確等は確認できず、ノーマルAタイプのため該当する公開状態契約は`NONE_CONFIRMED_AFTER_RESEARCH`。
- 成立済みボーナス等の低レイヤー保持/消滅は`UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_NORMAL_A_TYPE_NO_ADVANTAGEOUS_SECTION_GAMEPLAY`。

### resetBenefits
- 天井非搭載。
- ちょんぼりすたは朝一について「恩恵などは無し」としている。
- 設定変更専用の短縮天井・朝一専用モード・初当たり優遇率等は`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の公開された朝一不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- ちょんぼりすたはパイオニア系ゆえガックンが有効と思われるものの非常に分かりにくく参考にならない可能性が高い、と推測表現で記載。
- 本機固有の確定的なガックン発生条件・発生率・初期出目契約は確認できないため、`POSSIBLE_GAKKUN_NONDETERMINISTIC`。確定判別扱いしない。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetSpecificModeDistribution: `NOT_APPLICABLE`
- resetSpecificHitBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更専用の比較可能な朝一当選率/モード振り分け/恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `CONFLICT_RELEASE_DATE_2018_05_21_VS_2018_05_28_VS_PRE_RELEASE_DELIVERY_2018_06_03`
  - HAZUSE / ちょんぼりすた / すろぱちくえすと / 2-9伝説: 2018-05-21。
  - DMMぱちタウン: 2018-05-28。
  - グリーンべると / PiDEAの2018-04-11発表記事: 2018-06-03納品予定。
  - canonicalは複数の導入後DBが一致する2018-05-21。6/3は事前予定値として別保持。
- `SECONDARY_PAYOUT_RATE_SETTING1_95_5_VS_PRIMARY_96_5`
  - みんスロは設定1出玉率95.5%とするが、HAZUSE・P-WORLD・ちょんぼりすた・グリーンべるとが96.5%で一致。96.5%をcanonicalとし、95.5%は二次資料の競合値として保持。

## missingFields
- 設定変更/据え置き/純電源OFF→ONごとの成立済みボーナス・内部フラグの本機固有契約。
- 本機固有ガックンの確定条件・発生率。
- DMM 2018-05-28表記と6/3事前納品予定が5/21実導入DB群とずれる理由（地域差・予定変更等）の一次説明。

## sources
取得日: 2026-09-10

1. パイオニア公式 — シークレットハイビスカス導入記念キャンペーン
   - https://www.slot-pioneer.co.jp/campaign/secret_rt/
   - 2018-05-14〜05-28の公式導入記念施策。
   - confidence: `OFFICIAL`
2. グリーンべると — 祝福のハイビスカスを独り占め！（2018-04-11）
   - https://web-greenbelt.jp/00010382/
   - パイオニア新機種発表、BB/RB/合算/出玉率、35〜36G/50枚、BB312枚/REG約104枚、納品6/3予定。
   - confidence: `INDUSTRY_PRIMARY_PRE_RELEASE`
3. PiDEA — ついに登場！華を独り占め「シークレットハイビスカス」／パイオニア（2018-04-11）
   - https://www.pidea.jp/articles/%E3%81%A4%E3%81%84%E3%81%AB%E7%99%BB%E5%A0%B4%EF%BC%81%E8%8F%AF%E3%82%92%E7%8B%AC%E3%82%8A%E5%8D%A0%E3%82%81%E3%80%8C%E3%82%B7%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%83%E3%83%88%E3%83%8F%E3%82%A4%E3%83%93%E3%82%B9%E3%82%AB%E3%82%B9%E3%80%8D%EF%BC%8F%E3%83%91%E3%82%A4%E3%82%AA%E3%83%8B%E3%82%A2
   - 内覧会、ボーナス仕様、6/3導入（納品）予定。
   - confidence: `INDUSTRY_PRIMARY_PRE_RELEASE`
4. HAZUSE — シークレットハイビスカス
   - https://hazuse.com/machine/pachislot/7S1036/
   - 型式`シークレットハイビスカス／AA`、検定番号`7S1036`、導入2018-05-21、設定別BIG/REG/合算/機械割、天井非搭載。
   - confidence: `INDUSTRY_DB_HIGH`
5. P-WORLD — シークレットハイビスカス
   - https://www.p-world.co.jp/machine/database/8647
   - ノーマル完全告知、BIG312枚/REG最大104枚、設定別BIG/REG/合算/機械割。
   - confidence: `INDUSTRY_DB_HIGH`
6. パチマガスロマガ — シークレットハイビスカス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/125/a.php
   - パイオニア/2018年5月、ノーマル、BIG312枚/REG約104枚。
   - confidence: `ANALYSIS_HIGH`
7. ちょんぼりすた — シークレットハイビスカス
   - https://chonborista.com/slot/pionia-slot/57664/
   - 導入2018-05-21、機械割、BIG/REG/合算、天井非搭載、朝一恩恵なし、ガックンは推測表現。
   - confidence: `ANALYSIS_HIGH`
8. すろぱちくえすと — シークレットハイビスカス
   - https://www.slopachi-quest.com/article/secret-hibiscus/
   - 導入2018-05-21、35〜36G/50枚、BIG312枚/REG104枚、設定別性能。
   - confidence: `ANALYSIS_HIGH`
9. 2-9伝説 — 新台導入一覧
   - https://29den.com/newslot/
   - 2018-05-21群にシークレットハイビスカスを掲載。
   - confidence: `SECONDARY_CALENDAR`
10. みんスロ — シークレットハイビスカス
   - https://minslo.com/%E3%82%B7%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%83%E3%83%88%E3%83%8F%E3%82%A4%E3%83%93%E3%82%B9%E3%82%AB%E3%82%B9/
   - 導入2018-05-21、35〜36G/50枚、基本獲得枚数。設定1出玉率のみ95.5%で主要資料群と競合。
   - confidence: `SECONDARY_SINGLE`

## researchNotes
- 導入日競合は「導入後DBの日付」と「発表時の納品予定」を同値扱いせず分離した。複数の導入後資料が5/21で一致するため5/21を本DB上のcanonicalとしたが、6/3予定資料を消去せずCONFLICTとして残した。
- ノーマルAタイプで天井・AT/ART/CZ・有利区間依存の朝一恩恵は確認されない。本機固有の低レイヤー電断/設定変更契約は一般論で補完せずUNVERIFIEDを維持した。
- ガックンは当時解析自体が推測・参考度低とするため、設定変更確定要素へ昇格していない。
