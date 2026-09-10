# No.1224 ルーレットクイーン‐女神の羅針盤‐

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: ルーレットクイーン‐女神の羅針盤‐
- manufacturer: コナミアミューズメント
- releaseDateCanonical: 2018-08-20
- generation: 5.9号機
- systemType: A+ART / リアルボーナス+ART / 5.9号機有利区間
- formalModelName: `ルーレットクイーン／KN`
- certificationNumber: `7S1595`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- コナミアミューズメント公式アーカイブは稼働開始を2018年8月と掲載。
- ちょんぼりすた、K-Navi、すろかい、すろぱちくえすとは2018-08-20導入で一致。
- 日刊スポーツ当時導入カレンダーも2018-08-20のパチスロ導入機として本機を掲載。
- confidence: `OFFICIAL_INDUSTRY_AND_ANALYSIS_CROSSCHECKED`。

## identificationEvidence
- コナミアミューズメント公式アーカイブでメーカー/5.9号機A+ARTを確認。
- 2018-03-27鹿児島県公安委員会告示は型式 `ルーレットクイーン／KN`、製造者 株式会社コナミアミューズメント、検定番号 `7S1595` を掲載。
- P-WORLDも型式 `ルーレットクイーン／KN`、検定番号 `7S1595` を掲載。
- confidence: `PUBLIC_NOTICE_AND_INDUSTRY_DB_CROSSCHECKED`。

## performanceCore

### payoutRateBySetting
- setting1: 97.6%
- setting2: 98.7%
- setting3: 100.3%
- setting4: 103.1%
- setting5: 105.7%
- setting6: 110.1%

- ちょんぼりすた、パチマガスロマガ、5号機クロニクルで一致。

### initialHitBySetting
BIG:
- setting1-6: 1/266.4（全設定共通）

REG:
- setting1: 1/399.6
- setting2: 1/387.8
- setting3: 1/372.4
- setting4: 1/356.2
- setting5: 1/332.7
- setting6: 1/299.3

ボーナス合算:
- setting1: 1/159.8
- setting2: 1/157.9
- setting3: 1/155.3
- setting4: 1/152.4
- setting5: 1/147.9
- setting6: 1/140.9

ART初当たり:
- setting1: 1/399.0
- setting2: 1/397.1
- setting3: 1/394.2
- setting4: 1/384.7
- setting5: 1/376.1
- setting6: 1/367.1

ボーナス+ART合成:
- setting1: 1/114.1
- setting2: 1/113.0
- setting3: 1/111.4
- setting4: 1/109.2
- setting5: 1/106.2
- setting6: 1/101.8

### baseGamesPer50
- 約31G/50枚。
- ちょんぼりすた、すろかい、すろぱちくえすとで一致。
- パチマガスロマガの50枚あたりゲーム数欄は「現在調査中」のため、数値根拠には使用しない。

### netIncrease
- ART純増: ボーナス込み約2.0枚/G。

### basicPayout
- BIG BONUS: 約150枚。
- REG BONUS: 約72枚。
- ART `RUSH`: 初期/1セット30～300G+α、ゲーム数上乗せ+継続抽選型。

### ceiling
- 通常ゲーム数天井: `NONE / 非搭載`。

## modeSpecificMinimumData
- 通常時はレア小役/ボーナス等からCZを経由しART `RUSH` を目指すA+ART。
- CZは32G、ART期待度約36%。
- ART継続率は50% / 67% / 80% / 100%。
- ART継続率100%到達時は有利区間1500G完走が確定する旨をP-WORLDが掲載。
- JACK POTは300G+α。
- 完全再現用の小役別CZ抽選、継続率昇格詳細、上乗せ振り分け等は収集対象外。

## resetBehavior

### settingChangeBehavior
- 当時解析の朝一比較表は設定変更時の内部状態を `リセット!?` と疑問符付きで掲載。
- 機種名/型式 `ルーレットクイーン/KN`/コナミアミューズメント/KPE/PRIMEProject、設定変更/リセット/朝一/据え置き/電源OFF ON/内部状態/CZ/ART/有利区間/ガックンを組み替えて再探索したが、疑問符を外して断定できる本機固有別ソースを固定できず `UNVERIFIED_AFTER_RESEARCH_SOURCE_SUGGESTS_INTERNAL_STATE_RESET_WITH_QUESTION_MARK`。

### carryOverBehavior
- 据え置き条件を設定変更・純電源OFF→ONから独立して断定する本機固有公開資料は固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 純電断の情報を据え置き契約へ自動転記しない。

### powerCycleBehavior
- 当時解析の朝一比較表は純電源OFF→ON時の内部状態を `引き継ぎ!?` と疑問符付きで掲載。
- 追加探索でも断定可能な別系統資料を固定できず `UNVERIFIED_AFTER_RESEARCH_SOURCE_SUGGESTS_CARRYOVER_WITH_QUESTION_MARK`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため天井ゲーム数カウンタは `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- CZ32GやART残りG数、有利区間G数について設定変更/据え置き/純電断別の公開リセット契約は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常天井/リセット短縮天井: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 設定変更専用/朝一専用モード、専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ART継続率等の通常ゲーム性を朝一モードとして誤転記しない。

### stateAfterReset
- 設定変更時は `リセット!?`、純電断時は `引き継ぎ!?` という疑問符付き当時資料のみ。
- 確定契約へ昇格せず `UNVERIFIED_AFTER_RESEARCH_QUESTION_MARK_SOURCE_ONLY`。

### advantageousSectionReset
- 本機は5.9号機A+ARTで、有利区間1500G完走に関する公開ゲーム性は確認できるため有利区間自体は該当。
- ただし設定変更/据え置き/純電源OFF→ON時の有利区間リセット/引継ぎを本機固有に断定する公開資料は固定できず `APPLICABLE_BUT_RESET_CONTRACT_UNVERIFIED_AFTER_RESEARCH`。
- 一般5.9号機規則のみから本機固有挙動を補完しない。

### resetBenefits
- 通常天井短縮、設定変更専用CZ/ART優遇、朝一専用高確・専用モードなど: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時のみの主要な不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、ランプ、ルーレット表示、CZ/ART状態による設定変更/据え置き判別の確定条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。
- 通常設定示唆BGM/特殊フラッシュはresetDetectionとは分離する。

### numericResetData
- 設定変更時モード振り分け、朝一特定G以内当選率、リセット恩恵率、ガックン率、短縮天井G数等: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `ART_SETTING6_SOURCE_DISCREPANCY_367_1_VS_376_1`。
  - ちょんぼりすた、パチマガスロマガ、5号機クロニクルは設定6 ART初当たり `1/367.1`。
  - すろかい/転載系ページの基本スペック表には設定6 `1/376.1` とする記載がある。
  - 設定5と同一値の転記に見えるが推測で修正せず、3系統一致の `1/367.1` をcanonical、`1/376.1` をCONFLICT側に保持。
- reset内部状態の `リセット!?` / `引き継ぎ!?` は条件（設定変更 vs 純電断）が異なるため相互CONFLICTではない。いずれも疑問符付き情報として未確定扱い。

## missingFields
- 設定変更時内部状態/有利区間の確定契約。
- 据え置き時の本機固有内部状態/有利区間契約。
- 純電源OFF→ON時内部状態/有利区間の確定契約。
- 本機固有の朝一変更判別条件・公開reset数値。

## sources
取得日: 2026-09-10

1. コナミアミューズメント公式 — 2018年機種アーカイブ
   - https://www.konami.com/amusement/psm/archive/ps/2018/roulettequeen/
   - 稼働開始2018年8月、5.9号機A+ART。
   - reliability: `OFFICIAL`
2. 鹿児島県公報 / 公安委員会告示（2018-03-27）
   - https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1803/documents/64982_20180326200332-1.pdf
   - 型式 `ルーレットクイーン／KN`、製造者コナミアミューズメント、検定番号 `7S1595`。
   - reliability: `PUBLIC_PRIMARY`
3. グリーンべると — 2018-06-19発表記事
   - https://web-greenbelt.jp/00010550/
   - A+ART、BIG約150枚/REG約72枚、ボーナス/ART/合算/機械割レンジ。
   - reliability: `INDUSTRY`
4. 日刊スポーツ — 2018年8月導入カレンダー
   - https://www.nikkansports.com/amusement/pachislot/news/201808100000381.html
   - 2018-08-20導入。8/20パチスロ群は本機と蒼き鋼Mental Model ver.の2機を掲載。
   - reliability: `INDUSTRY_CALENDAR`
5. P-WORLD — 機種DB
   - https://www.p-world.co.jp/machine/database/8684
   - 型式/検定、A+ART、BIG/REG枚数、ART2.0枚/G、CZ32G/36%、有利区間1500G完走説明。
   - reliability: `INDUSTRY_DB`
6. ちょんぼりすた — 解析
   - https://chonborista.com/slot/konami-slot/61967/
   - 導入2018-08-20、約31G/50枚、設定別BIG/REG/合算/ART/機械割、天井非搭載。朝一表で設定変更内部状態 `リセット!?`、電源OFF→ON `引き継ぎ!?`。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
7. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/03/h-1.php
   - 設定別BIG/REG/合算/ART/機械割を照合。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
8. K-Navi — 機種DB
   - https://p-kn.com/slot/3039/
   - 導入2018-08-20、ボーナス+ART。
   - reliability: `ANALYSIS_PERIOD_DB`
9. すろかい — 2018年当時解析
   - https://slotkaiseki.hatenablog.com/entry/roulettequeen
   - 型式 `ルーレットクイーン/KN`、2018-08-20、A+ART、約31G/50枚、主要スペック。
   - reliability: `PERIOD_ANALYSIS_SECONDARY`
10. 5号機クロニクル — コナミアミューズメント一覧
   - https://5goki.com/konami
   - 2018/8、設定別BIG/REG/合算/ART/機械割を照合。
   - reliability: `RETROSPECTIVE_SECONDARY`
11. すろぱちくえすと — 解析まとめ
   - https://www.slopachi-quest.com/article/roulette-queen/
   - 導入2018-08-20、約31G/50枚、純増2.0枚/G、BIG150枚/REG72枚、天井非搭載。
   - reliability: `ANALYSIS_SECONDARY`
