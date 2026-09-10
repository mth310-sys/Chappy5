# No.1226 スーパービンゴリバース

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: スーパービンゴリバース
- manufacturer: ベルコ
- releaseDateCanonical: 2018-09-03
- generation: 5.9号機
- systemType: A+ART / リアルボーナス+ART
- formalModelName: `ビンゴ/A1`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- ベルコ公式は2018年9月登場と掲載。
- PiDEA Xの2018-07-13業界記事は導入（開店）日を2018-09-03予定と報道。
- 日刊スポーツ2018-08-31導入カレンダー、ちょんぼりすた、すろぱちくえすとが2018-09-03で一致。
- confidence: `OFFICIAL_INDUSTRY_AND_ANALYSIS_CROSSCHECKED`。

## identificationEvidence
- ベルコ公式でメーカー=ベルコ、5号機ART機を確認。
- 中一商事中古実機DBおよび中古実機販売資料で型式名 `ビンゴ/A1` を確認。公報系一次照合は今回取れず `SECONDARY_DB_CROSSCHECKED` 扱い。
- 検定番号は機種名/型式名/ベルコ/検定/公安委員会/7S/8Sを組み替えて再探索したが高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。

## performanceCore

### payoutRateBySetting
- setting1: 97.5%
- setting2: 99.0%
- setting3: 100.5%
- setting4: 102.0%
- setting5: 103.5%
- setting6: 105.0%

- パチマガスロマガ、ちょんぼりすた、中一商事で一致。

### initialHitBySetting
ART「BINGO CHANCE」初当たり:
- setting1: 1/563
- setting2: 1/559
- setting3: 1/554
- setting4: 1/549
- setting5: 1/544
- setting6: 1/539

ボーナス合成:
- setting1: 1/76.2
- setting2: 1/74.3
- setting3: 1/72.5
- setting4: 1/70.7
- setting5: 1/69.1
- setting6: 1/67.6

極/スーパーBB: 全設定1/16384.0
ミドルBB: 全設定1/655.4
プチBB: 1/86.7 / 1/84.2 / 1/81.9 / 1/79.7 / 1/77.6 / 1/75.8

### baseGamesPer50
- 約31G/50枚。
- ちょんぼりすた掲載値。

### netIncrease
- ART単体: 約1.7枚/G。
- ボーナス込み: 約2.0枚/G。
- 定義を分離して保存。

### basicPayout
- プチBINGO BONUS: 約30枚。
- ミドルBINGO BONUS: 約78枚。
- スーパーBINGO BONUS: 約150枚。
- 極BINGO BONUS: 約150枚。
- ART「BINGO CHANCE」: 1セット50Gが基本。Hooah!時は3桁以上、平均約300G期待と業界記事。

### ceiling
- 通常ゲーム数天井: `NONE / 非搭載`。

## modeSpecificMinimumData
- CZ「THE BINGO」: 通常時出現率約1/380、20Gまたは30G、ART期待度33%以上。
- ARTはストック+継続率管理。極Hooah!でエンディング（有利区間完走）濃厚。
- 詳細な小役別抽選/有利区間A/B中全抽選/設定示唆振り分けは完全再現用のため収集対象外。

## resetBehavior

### settingChangeBehavior
- すろぱちくえすとの設定判別資料は設定変更時を `非有利区間`、液晶を `星ステージ` と明記。
- 設定変更で有利区間状態を引き継がず、朝一は非有利区間から開始する契約を `ANALYSIS_HIGH_PERIOD_SOURCE` として採用。

### carryOverBehavior
- 同資料は据え置き時の状態・液晶ステージを `引き継ぐ` と明記。
- 前日星ステージ以外で閉店していれば、翌朝星ステージ開始は設定変更判別材料になり得る。

### powerCycleBehavior
- 「電源OFF→ONのみ」を据え置きと独立条件で明示した本機固有資料は、機種名/型式/ベルコ/朝一/電源OFF ON/有利区間/ステージ等へ検索語を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 据え置き情報を純電断契約へ自動転記しない。

### gameCounterReset
- 通常ゲーム数天井非搭載のため天井ゲーム数カウンタは `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- 有利区間状態は設定変更時非有利区間化、据え置き時引継ぎ。

### ceilingAfterReset
- 通常天井/リセット短縮天井: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 設定変更時は非有利区間から開始。
- 朝一専用モードの具体的振り分け・専用当選率は `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時: 非有利区間 / 星ステージ。
- 据え置き時: 状態 / 液晶ステージ引継ぎ。
- 非有利区間から有利区間移行後の内部状態振り分け全表は収集対象外かつ朝一専用公開値を固定できず。

### advantageousSectionReset
- 設定変更時: `RESET_TO_NON_ADVANTAGEOUS_SECTION_ANALYSIS_HIGH`。
- 据え置き時: `CARRYOVER_ANALYSIS_HIGH`。
- 電源OFF→ONのみ: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### resetBenefits
- 通常ゲーム数天井短縮なし。
- 設定変更時の公開された専用ART/CZ当選率・専用モード優遇率は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時のみの主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- すろぱちくえすとは設定変更時に星ステージ、据え置き時は液晶ステージ引継ぎと掲載し、前日星ステージ以外なら判別材料になると解説。
- ガックンは同資料でも「分かりにくい可能性」に留まり、本機固有の発生条件・確率・確定性を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時モード振り分け、朝一特定G以内当選率、リセット恩恵率、ガックン率、短縮天井G数: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- ベルコ公式ART確率は設定1を `1/536` と掲載する一方、パチマガスロマガ・ちょんぼりすた・すろぱちくえすと等の解析値は設定1 `1/563`。設定2～6は公式 `1/559 / 1/554 / 1/549 / 1/544 / 1/539` と解析値が一致。
- 設定1だけは平均せず `CONFLICT_ART_INITIAL_SETTING1_OFFICIAL_1_536_VS_ANALYSIS_1_563` として保持。performanceCoreの比較表には複数解析一致の1/563を載せ、公式競合をここに明記。

## missingFields
- 検定番号。
- 型式名 `ビンゴ/A1` の公報/一次資料照合。
- 電源OFF→ONのみを据え置きから独立して示す本機固有契約。
- ガックンの本機固有発生条件/確率。
- 公開された朝一専用数値。

## sources
取得日: 2026-09-10

1. ベルコ公式 — スーパービンゴリバース
   - https://www.s-bellco.co.jp/products/slot/superbingo_rebirth/
   - 2018年9月登場、5号機ART、設定別ART確率。
   - reliability: `OFFICIAL`
2. PiDEA X — 1/2超でHooah!発生「ビンゴリバース」／ベルコ（2018-07-13）
   - https://www.pidea.jp/articles/1%2F2%E8%B6%85%E3%81%A7Hooah%21%E7%99%BA%E7%94%9F%E3%80%8C%E3%83%93%E3%83%B3%E3%82%B4%E3%83%AA%E3%83%90%E3%83%BC%E3%82%B9%E3%80%8D%EF%BC%8F%E3%83%99%E3%83%AB%E3%82%B3
   - A+ART、ボーナス枚数、ART約2.0枚/G（ボナ込）、1セット50G、Hooah平均約300G、導入9/3予定。
   - reliability: `INDUSTRY`
3. 日刊スポーツ — パチンコ・パチスロ導入カレンダー 2018-08-31
   - https://www.nikkansports.com/amusement/pachislot/news/201808310000459.html
   - 2018-09-03パチスロ群として本機とハクション大魔王を掲載。
   - reliability: `INDUSTRY_CALENDAR`
4. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/102/h-1.php
   - 設定別ボーナス確率、ART初当たり、PAYOUT。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
5. ちょんぼりすた — 解析
   - https://chonborista.com/slot/belko-slot/63231/
   - 導入9/3、約31G/50枚、ART1.7枚/G（ボナ込約2.0枚/G）、天井非搭載、設定別確率/機械割。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
6. すろぱちくえすと — 解析
   - https://www.slopachi-quest.com/article/super-bingo-reverse/
   - 導入9/3、5.9号機A+ART、基本仕様。
   - reliability: `ANALYSIS_PERIOD_SOURCE`
7. すろぱちくえすと — 設定判別
   - https://www.slopachi-quest.com/article/super-bingo-reverse-settei/
   - 設定変更時=非有利区間/星ステージ、据え置き=状態/液晶ステージ引継ぎ、変更判別注記。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
8. 中一商事 — 中古実機情報
   - https://item.rakuten.co.jp/auc-nakaiti/bikoba/
   - 型式名ビンゴ/A1、5号機ART、機械割・ボーナス枚数。
   - reliability: `SECONDARY_MACHINE_DB`
9. グリーンべると — 残存する旧規則機リスト
   - https://web-greenbelt.jp/post-55482/
   - 型式名 `ビンゴ/A1`、メーカー=ベルコ、書類交付日H30.5.1を確認。
   - reliability: `INDUSTRY_RETROSPECTIVE`
