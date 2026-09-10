# No.1213 ストリートファイターV パチスロエディション

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: ストリートファイターV パチスロエディション
- manufacturer: エンターライズ
- releaseDateCanonical: 2018-07-23
- generation: 5.9号機 / 5号機
- systemType: A+ART
- formalModelName: `ストリートファイターV／ZS`
- certificationNumber: `7S1716`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`ストリートファイターV／ZS`・検定番号`7S1716`と紐づけて導入開始日2018-07-23を掲載。
- K-Navi、ちょんぼりすたもホール導入開始を2018-07-23とする。
- すろぱちくえすとは2018-07-16と掲載しており、7/16と7/23の導入日競合を保持する。
- 業界記事（遊技日本、PiDEA X）は2018年5〜6月時点で「7月導入予定」までを確認できるが日付までは固定していない。
- 型式・検定番号付きDBと複数解析の一致を優先しcanonicalを2018-07-23とする。
- confidence: `CONFLICT_RESOLVED_CANONICAL_2018_07_23`。

## performanceCore

### payoutRateBySetting
- setting1: 97.82%
- setting2: 99.48%
- setting3: 101.38%
- setting4: 103.84%
- setting5: 106.61%
- setting6: 110.48%

HAZUSE/ちょんぼりすた/すろぱちくえすと等の97.8 / 99.5 / 101.4 / 103.8 / 106.6 / 110.5%は丸め差として整合する。

### initialHitBySetting
BIG合算:
- setting1: 1/595.78
- setting2: 1/528.52
- setting3: 1/474.90
- setting4: 1/420.10
- setting5: 1/368.20
- setting6: 1/300.60

ART初当たり:
- setting1: 1/379.90
- setting2: 1/379.20
- setting3: 1/378.70
- setting4: 1/375.77
- setting5: 1/374.86
- setting6: 1/371.67

ボーナス+ART合成:
- setting1: 1/231.98
- setting2: 1/220.79
- setting3: 1/208.01
- setting4: 1/198.37
- setting5: 1/185.74
- setting6: 1/166.18

### baseGamesPer50
- 約34G/50枚。

### netIncrease
- ART「V-RUSH」: 約1.5枚/G。
- すろぱちくえすとはボーナス込み約2.0枚/Gも併記するため、ART単体純増1.5枚/Gと定義を分ける。

### basicPayout
- BIG: 204枚。
- ART: 1セット30G+α。

### ceiling
- 通常ゲーム数天井: `NOT_APPLICABLE / 天井非搭載`。

## modeSpecificMinimumData
- A+ART。通常時はCZ「ランクUP前兆」等からART「V-RUSH」を目指す。
- ARTは1セット30G+α、純増約1.5枚/G。
- 詳細なCZ内部モード昇格抽選・バトル内部抽選は実機完全再現向けのため本DBでは収集対象外。

## resetBehavior

### settingChangeBehavior
- 朝一3G以内、レア小役を引いていない条件でのステージチェンジ発生率に設定変更専用値が公開されている。
- 1G目: 設定1=5.0%、2=20.0%、3=5.0%、4=20.0%、5=5.0%、6=20.0%。
- 2G目: 設定1=5.0%、2=20.0%、3=5.0%、4=20.0%、5=5.0%、6=20.0%。
- 3G目: 設定1=5.0%、2=5.0%、3=5.0%、4=20.0%、5=5.0%、6=20.0%。
- パチマガスロマガとHAZUSE/ちょんぼりすた系の値が一致。
- 内部状態そのものの設定変更時契約は、当時資料に「引き継ぎ?」表記があり確定情報としては扱わず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ステージチェンジ数値 `ANALYSIS_HIGH_CROSSCHECKED_MACHINE_SPECIFIC`。

### carryOverBehavior
- 据え置き時の朝一3G以内ステージチェンジ発生率が公開されている。
- 1G目: 設定1=0.5%、2=2.0%、3=0.5%、4=2.0%、5=0.5%、6=2.0%。
- 2G目: 設定1=0.5%、2=2.0%、3=0.5%、4=2.0%、5=0.5%、6=2.0%。
- 3G目: 設定1=0.5%、2=0.5%、3=0.5%、4=2.0%、5=0.5%、6=2.0%。
- 設定変更後の対応値に対し各ゲーム・設定で10倍差となる。
- ステージチェンジ判別以外の内部状態引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 「電源OFF→ONのみ」を据え置き条件から独立して確定的に定義した本機固有資料は、表記揺れ・型式・メーカー・シリーズ名を含む再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- ちょんぼりすたの朝一比較表には内部状態について設定変更側「引き継ぎ?」、電源OFF→ON側「リセット?」と疑問符付きで掲載されるため、確定契約へ昇格しない。

### gameCounterReset
- normalCeilingCounter: `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- 天井非搭載のため、設定変更/据え置き/純電断による天井ゲーム数引継ぎ・短縮の比較対象なし。

### ceilingAfterReset
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 設定変更専用の朝一出玉モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一3G以内のステージチェンジ率はモード移行率とは別の変更判別用公開数値として保持する。

### stateAfterReset
- settingChange: `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: `UNVERIFIED_AFTER_RESEARCH_BEYOND_STAGE_CHANGE_CONTRACT`。
- powerOFF_ON: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 疑問符付きの当時比較表を確定値として補完しない。

### advantageousSectionReset
- 5.9号機A+ARTとして有利区間概念の対象世代だが、本機固有の設定変更・据え置き・純電断時の有利区間処理を直接固定できる資料は再探索後も確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機一般論だけから本機固有契約を補完しない。

### resetBenefits
- 通常天井短縮や設定変更専用の初当たり優遇: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし設定変更後は朝一3G以内ステージチェンジ率が据え置きの10倍で、客側の変更判別材料となる。

### resetPenalties
- 設定変更固有の公開された主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- レア小役非成立の朝一3G以内にステージチェンジが発生すれば、設定変更の可能性が大幅に上がる。
- 設定変更後と据え置き後ではステージチェンジ率が10倍差。
- さらに1G目チェンジは設定2以上、2G目チェンジは偶数設定、3G目チェンジは設定4以上の可能性アップという設定推測要素が公開されている。
- 本機固有のリールガックン発生条件/率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`
- resetSpecificModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- morningStageChangeSettingChange:
  - setting1: `1G 5.0% / 2G 5.0% / 3G 5.0%`
  - setting2: `1G 20.0% / 2G 20.0% / 3G 5.0%`
  - setting3: `1G 5.0% / 2G 5.0% / 3G 5.0%`
  - setting4: `1G 20.0% / 2G 20.0% / 3G 20.0%`
  - setting5: `1G 5.0% / 2G 5.0% / 3G 5.0%`
  - setting6: `1G 20.0% / 2G 20.0% / 3G 20.0%`
- morningStageChangeCarryOver:
  - setting1: `1G 0.5% / 2G 0.5% / 3G 0.5%`
  - setting2: `1G 2.0% / 2G 2.0% / 3G 0.5%`
  - setting3: `1G 0.5% / 2G 0.5% / 3G 0.5%`
  - setting4: `1G 2.0% / 2G 2.0% / 3G 2.0%`
  - setting5: `1G 0.5% / 2G 0.5% / 3G 0.5%`
  - setting6: `1G 2.0% / 2G 2.0% / 3G 2.0%`
- morningStageChangeRateRatio: `SETTING_CHANGE_10X_CARRY_OVER_FOR_CORRESPONDING_CELL`
- gakkunChangeDetectionRate: `PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 朝一3G以内ステージチェンジ率を上記numericResetDataに保存。
- レア小役成立時は判別サンプルから除外するという公開条件あり。
- 設定変更専用の朝一特定G以内ART当選率・短縮天井・専用モード振り分けは確認されず。

## conflicts
- releaseDate: `CONFLICT_RELEASE_DATE_2018_07_16_VS_2018_07_23`。
  - すろぱちくえすと: 2018-07-16
  - HAZUSE / K-Navi / ちょんぼりすた: 2018-07-23
  - canonical: 2018-07-23
- industryArticleLabeling: グリーンべるとは「ART初当たり確率1/232.0〜1/166.2」と記載するが、この数列はパチマガスロマガ・すろぱちくえすとの「ボーナス+ART合成」1/231.98〜1/166.18と一致する。ART単独初当たりは1/379.90〜1/371.67として別定義で複数解析が一致するため、本DBでは業界記事側のラベル混同候補として平均・置換しない。
- ちょんぼりすた初期表の設定4 BIGに1/450.1表記がある一方、パチマガスロマガ・すろぱちくえすと・後年整理は1/420.1で一致するため `CONFLICT_SOURCE_TYPO_SUSPECTED_450_1_VS_420_1` として保持し、canonicalは1/420.10。

## missingFields
- 電源OFF→ONのみを据え置きから分離した内部状態契約。
- 設定変更/据え置き/純電断時の本機固有有利区間契約。
- ガックン/初期出目による変更判別条件・率。

## sources
取得日: 2026-09-10

1. HAZUSE — ストリートファイターV パチスロエディション
   - https://hazuse.com/machine/pachislot/7S1716/
   - 型式、検定番号、導入2018-07-23、メーカー、出玉率、純増、朝一ステージチェンジ率を確認。
   - confidence: `ANALYSIS_HIGH_DATABASE`
2. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/18/h-1.php
   - 設定別BIG合算、ART初当たり、ボーナス+ART合成、PAYOUT精密値を確認。
   - confidence: `ANALYSIS_HIGH`
3. パチマガスロマガ — ステージチェンジの法則
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/18/en04.php
   - 設定変更/据え置き別、朝一1〜3Gのステージチェンジ率と判別法則を確認。
   - confidence: `ANALYSIS_HIGH_MACHINE_SPECIFIC`
4. パチマガスロマガ — 小役確率/50枚ゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/18/c-1.php
   - 約34G/50枚を確認。
   - confidence: `ANALYSIS_HIGH`
5. すろぱちくえすと — ストリートファイターV
   - https://www.slopachi-quest.com/article/street-fighter-v/
   - 導入2018-07-16、A+ART、約34G/50枚、ART純増1.5枚/G、ボーナス込み2.0枚/G、BIG204枚、設定別主要値を照合。導入日はCONFLICT側。
   - confidence: `ANALYSIS_HIGH`
6. ちょんぼりすた — ストリートファイター5
   - https://chonborista.com/slot/enta-slot/60006/
   - 導入2018-07-23、A+ART、約34G/50枚、純増約1.5枚/G、天井非搭載、朝一比較とステージチェンジ率を照合。疑問符付き内部状態項目は確定扱いしない。
   - confidence: `ANALYSIS_HIGH`
7. K-Navi — ストリートファイターV パチスロエディション
   - https://p-kn.com/slot/3030/
   - 導入開始2018-07-23、約34G/50枚、機械割端点、A+ART基本性能を照合。
   - confidence: `ANALYSIS_HIGH`
8. グリーンべると — 闘う度に強くなる「ライズアップシステム」搭載
   - https://web-greenbelt.jp/00010566/
   - A+ART、BIG204枚、ART純増約1.5枚/G、出玉率97.8〜110.5%を業界記事で確認。1/232.0〜1/166.2の「ART初当たり」表記は他資料のボーナス+ART合成と一致するためラベル競合として保持。
   - confidence: `INDUSTRY`
9. PiDEA X — 勝つほど有利に！「ストリートファイターV」
   - https://www.pidea.jp/articles/%E5%8B%9D%E3%81%A4%E3%81%BB%E3%81%A9%E6%9C%89%E5%88%A9%E3%81%AB%EF%BC%81%E3%80%8C%E3%82%B9%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%82%BF%E3%83%BC%E2%85%A4%E3%80%8D%EF%BC%8F%E3%82%A8%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%A9%E3%82%A4%E3%82%BA
   - 2018年6月の業界発表としてBIG204枚、ART純増約1.5枚/G、1セット30G+α、7月導入予定を確認。
   - confidence: `INDUSTRY`
10. P-WORLD — ストリートファイターV パチスロエディション
   - https://www.p-world.co.jp/machine/database/8699
   - BIG204枚、ART1セット30G+α・約1.5枚/Gを照合。
   - confidence: `ANALYSIS_HIGH_DATABASE`

## confidenceSummary
- identity/formal model/certification: `ANALYSIS_HIGH_DATABASE`
- releaseDate: `CONFLICT_RESOLVED_CANONICAL_2018_07_23`
- performance core: `ANALYSIS_HIGH_CROSSCHECKED`
- resetDetection numeric stage-change contract: `ANALYSIS_HIGH_CROSSCHECKED_MACHINE_SPECIFIC`
- settingChange/carryOver internal state and powerCycle: `UNVERIFIED_AFTER_RESEARCH_WHERE_NOT_DIRECTLY_FIXED`
- advantageousSectionReset: `UNVERIFIED_AFTER_RESEARCH_MACHINE_SPECIFIC`
