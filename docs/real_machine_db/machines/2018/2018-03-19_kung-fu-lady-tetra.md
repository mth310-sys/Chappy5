# No.1182 カンフーレディ・テトラ

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: カンフーレディ・テトラ
- manufacturer: 山佐
- releaseDateCanonical: 2018-03-19
- generation: 5.9号機 / 5号機
- systemType: A+RT / ボーナス+チャレンジループRT / 技術介入機
- formalModelName: `カンフーレディEVO／XX`
- certificationNumber: `7S1214`
- settings: `1 / 2 / 5 / 6`（4段階）
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`カンフーレディEVO／XX`、検定番号`7S1214`、導入開始日2018-03-19、メーカー山佐を掲載。
- パチ＆スロ必勝本、ちょんぼりすた、P-Summaも2018-03-19導入で一致。
- グリーンべるとは納品開始2018-03-18予定と報道しており、ホール導入日との差として矛盾なく扱う。
- 本DBではホール導入開始日2018-03-19をcanonical採用。

## performanceCore

### payoutRateBySetting
通常 / 技術介入なし:
- setting1: 97.9%
- setting2: 100.0%
- setting5: 102.4%
- setting6: 105.5%

完全攻略時:
- setting1: 100.6%
- setting2: 103.0%
- setting5: 105.5%
- setting6: 108.7%

- パチ＆スロ必勝本、HAZUSE、パチマガスロマガ、ちょんぼりすたで一致。
- 通常値と完全攻略値を混同せず別系列として保持する。

### initialHitBySetting
BIG:
- setting1: 1/295.2
- setting2: 1/295.2
- setting5: 1/295.2
- setting6: 1/295.2

REG:
- setting1: 1/370.2
- setting2: 1/343.1
- setting5: 1/313.5
- setting6: 1/295.2

ボーナス合成:
- setting1: 1/164.2
- setting2: 1/158.6
- setting5: 1/152.0
- setting6: 1/147.6

- パチ＆スロ必勝本、パチマガスロマガ、ちょんぼりすたで一致。

### baseGamesPer50
- 約36G/50枚。
- ちょんぼりすた掲載値。

### netIncrease
- RT「奥義」: 約0.1枚/G。
- RT「試練」: 約0.1枚/G。
- RTループ率: 技術介入成功前提で約66%。
- RT平均滞在: 約35G（解析資料掲載値）。

### basicPayout
- BIG: 最大285枚。
- REG: 最大117枚。
- BIG後RT「奥義」: 初回15G保証。
- 「試練」から再昇格したRT「奥義」: 7G。
- RT「試練」: 転落リプレイ成立まで継続し、昇格リプレイ成立時の技術介入成功で「奥義」へ復帰。
- グリーンべると、Amusement Japan、P-WORLD、パチマガスロマガで285枚/117枚および約66%ループを照合。

### ceiling
- 通常ゲーム数天井: 非搭載。
- HAZUSE、ちょんぼりすた、後年設定DBで一致。

## modeSpecificMinimumData
- A+RTの技術介入機で、BIG後のみチャレンジループRTへ突入。
- RT「奥義」はBIG後15G、ループ復帰時7G。
- 規定G消化後はRT「試練」へ移行。
- 「試練」中は昇格リプレイ成立時の目押し成功で「奥義」へ復帰、転落リプレイ成立で通常へ移行。
- 通常時の「閃光モード」「心眼モード」はプレイヤーがPUSH長押しで任意選択する演出モードであり、内部朝一モードとして扱わない。

## resetBehavior

### settingChangeBehavior
- 通常ゲーム数天井は非搭載のため天井カウンタRESETは`NOT_APPLICABLE`。
- 機種名、正式型式`カンフーレディEVO／XX`、山佐、功夫/カンフーレディシリーズ名と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「RT状態」「ガックン」「有利区間」を組み替え、HAZUSE、パチ＆スロ必勝本、パチマガスロマガ、ちょんぼりすた、P-WORLD、K-Navi/周辺検索、業界記事、後年DBを横断した。
- 設定変更時のRT状態、成立済みボーナス、演出モード/表示状態、初期出目を直接規定する本機固有資料は確認できず`UNVERIFIED_AFTER_RESEARCH`。
- 一般的なA+RT機や山佐他機種の挙動から推定補完しない。

### carryOverBehavior
- 「設定据え置き」を純電源OFF→ONと分けて、本機固有のRT状態・表示状態・出目等の処理を直接記載した資料は`UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため通常天井G数引継ぎは`NOT_APPLICABLE`。

### powerCycleBehavior
- 本機固有の純電源OFF→ON時RT状態・成立済みボーナス・演出モード・初期出目の直接契約は、検索語/資料系統を変えた再探索後も`UNVERIFIED_AFTER_RESEARCH`。
- 設定変更情報や他山佐機の電断仕様を自動転記しない。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- RT残G/RT内部状態のsettingChange: `UNVERIFIED_AFTER_RESEARCH`
- RT残G/RT内部状態のcarryOver: `UNVERIFIED_AFTER_RESEARCH`
- RT残G/RT内部状態のpowerCycle: `UNVERIFIED_AFTER_RESEARCH`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`
- 設定変更専用の短縮天井も`NOT_APPLICABLE`。

### modeAfterReset
- 朝一専用内部モード: `NONE_CONFIRMED_AFTER_RESEARCH`
- 設定変更時モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`
- 通常時「閃光/心眼」はプレイヤー任意選択の演出モードであり、resetBehaviorの内部モードとは区別する。

### stateAfterReset
- settingChange RT state: `UNVERIFIED_AFTER_RESEARCH`
- carryOver distinct RT state: `UNVERIFIED_AFTER_RESEARCH`
- powerCycle RT state: `UNVERIFIED_AFTER_RESEARCH`

### advantageousSectionReset
- 本機は5.9号機表記だが、確認した本機資料ではART/ATの有利区間を用いる機種としての有利区間ランプ・設定変更時有利区間処理を確認できなかった。
- 5.9号機一般論から有利区間使用有無を決めず、本機固有契約は`UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 朝一/設定変更専用の短縮天井: `NOT_APPLICABLE_NO_CEILING`
- 朝一専用のボーナス/RT優遇: `NONE_CONFIRMED_AFTER_RESEARCH`
- 設定変更専用の公開された数値的恩恵: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetPenalties
- 設定変更専用の主要な不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetDetection
- 本機固有のガックン発生条件・発生率、初期出目、ランプ等を用いた確定的な変更判別: `UNVERIFIED_AFTER_RESEARCH`。
- BIG中には多数の設定示唆があるが、これは朝一設定変更判別ではないためresetDetectionへ混入しない。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitProbability: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunChangeDetectionProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 朝一/設定変更時だけに適用される初当たり率、RT突入率、モード振り分け、規定G数以内当選率などの比較可能な公開数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- 主要性能コアについて採用を左右する数値CONFLICTは確認なし。
- 後年「5号機クロニクル」の当該項目には導入月2018年11月、BIG最大207枚、REG48枚という他資料群と大きく異なる値が掲載される。HAZUSEの型式/検定番号付き2018-03-19、当時業界記事のBIG285枚/REG117枚、必勝本/パチマガ/ちょんぼりすた/P-WORLDの一致を優先し、後年ページの当該値を`CONFLICT_LOW_CONFIDENCE_RETROSPECTIVE`として不採用。

## missingFields
- 設定変更時RT状態/残G・成立済みボーナス・表示/演出モード処理: `UNVERIFIED_AFTER_RESEARCH`
- 据え置きと純電断を分離した本機固有RT状態処理: `UNVERIFIED_AFTER_RESEARCH`
- 純電源OFF→ON時RT状態/残G・成立済みボーナス・表示状態: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有の有利区間使用有無/設定変更時処理: `UNVERIFIED_AFTER_RESEARCH`
- ガックン/初期出目/ランプによる変更判別: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. HAZUSE — カンフーレディ・テトラ
   - https://hazuse.com/machine/pachislot/7S1214/
   - 型式`カンフーレディEVO／XX`、検定番号`7S1214`、導入開始2018-03-19、山佐、天井非搭載。
   - confidence: `ANALYSIS_HIGH`

2. HAZUSE — 基本スペック
   - https://hazuse.com/machine/pachislot/7S1214/genre/201/
   - 通常機械割97.9/100.0/102.4/105.5%、完全攻略100.6/103.0/105.5/108.7%、BIG285枚、REG117枚。
   - confidence: `ANALYSIS_HIGH`

3. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/3132/1/68443
   - 2018-03-19導入、4段階設定、BIG全設定1/295.2、REG1/370.2〜1/295.2、合算1/164.2〜1/147.6、通常/完全攻略機械割。
   - confidence: `ANALYSIS_HIGH`

4. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/225/h.php
   - BIG/REG/合成、PAYOUTの4段階設定値。
   - confidence: `ANALYSIS_HIGH`

5. パチマガスロマガ — 機種概要
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/225/a.php
   - A+RT、BIG最大285枚、REG最大117枚、BIG後RT、約66%RTループ。
   - confidence: `ANALYSIS_HIGH`

6. ちょんぼりすた — カンフーレディテトラ
   - https://chonborista.com/slot/yamasa-slot/54991/
   - 2018-03-19、5.9号機、約36G/50枚、天井非搭載、通常/完全攻略機械割、ボーナス確率、RT約0.1枚/G、RT平均約35G。
   - confidence: `ANALYSIS_HIGH`

7. P-WORLD — カンフーレディ・テトラ
   - https://www.p-world.co.jp/machine/database/8605
   - 山佐、A+RT、BIG285枚/REG117枚、奥義初回15G/ループ時7G、約66%ループ。
   - confidence: `INDUSTRY_DB`

8. グリーンべると — カンフーレディでテトラリールが復活
   - https://web-greenbelt.jp/00010233/
   - 2018-02-19記事。A+RT、BIG最大285枚、REG最大117枚、RT約66%、納品開始2018-03-18予定。
   - confidence: `INDUSTRY`

9. Amusement Japan — 元祖4thリールが復活
   - https://amusement-japan.co.jp/article/detail/10000508/
   - 2018-02-09記事。A+RT、BIG285枚/REG117枚、RT約66%、3月上旬予定。
   - confidence: `INDUSTRY`

10. P-Summa — 2018年3月新台まとめ
    - https://psumma.jp/trend/41810/
    - 3月19日導入予定、合算1/164.2〜1/147.6、A+RT、約66%ループ。
    - confidence: `SECONDARY_CROSSCHECK`

11. 真パチスロ備忘録 — 2018年パチスロ新台導入日一覧
    - https://sin-surobi.com/dounyubi/23041/
    - 3月19日群としてカンフーレディ・テトラ / ドリームクルーン500 / マイケル・ジャクソンを掲載。
    - confidence: `SECONDARY_CALENDAR`

12. 5号機クロニクル — 山佐5号機一覧
    - https://5goki.com/yamasa
    - 当該項目の導入月/獲得枚数が複数当時資料と競合するため、CONFLICT監査用にのみ保持。
    - confidence: `CONFLICT_LOW_CONFIDENCE_RETROSPECTIVE`
