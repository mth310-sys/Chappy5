# No.1219 クレアの秘宝伝 女神の夢と魔法の遺跡

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: クレアの秘宝伝 女神の夢と魔法の遺跡（通称: クレアの秘宝伝3 / クレア3）
- manufacturer: パオン・ディーピー（大都技研系）
- releaseDateCanonical: 2018-08-06
- generation: 5号機 / 5.9号機
- systemType: A+RT / ボーナス主体
- formalModelName: `クレアの秘宝伝 女神の夢と魔法の遺跡／P4`
- certificationNumber: `7S1909`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`クレアの秘宝伝 女神の夢と魔法の遺跡／P4`、検定番号`7S1909`、導入開始日2018-08-06、メーカー=パオン・ディーピーを掲載。
- すろぱちくえすとも導入日2018-08-06を掲載。
- ちょんぼりすたはページ上部に2018-07-23と記載し、8/6資料群と競合。型式・検定番号まで紐づくHAZUSEと8/6を明示する複数資料を優先し、canonical=2018-08-06。競合は保持する。
- confidence: `ANALYSIS_HIGH_CROSSCHECKED`。

## performanceCore

### payoutRateBySetting
- setting1: 98.0%
- setting2: 99.8%
- setting5: 104.6%
- setting6: 108.4%

### initialHitBySetting
BIG合算:
- setting1: 1/266.4
- setting2: 1/258.0
- setting5: 1/250.1
- setting6: 1/240.9

REG合算:
- setting1: 1/337.8
- setting2: 1/321.2
- setting5: 1/284.9
- setting6: 1/277.6

ボーナス合算:
- setting1: 1/148.9
- setting2: 1/143.1
- setting5: 1/133.2
- setting6: 1/129.0

同色BIG合算:
- setting1: 1/537.1
- setting2: 1/512.0
- setting5: 1/496.4
- setting6: 1/468.1

異色BIG合算:
- setting1: 1/528.5
- setting2: 1/520.1
- setting5: 1/504.1
- setting6: 1/496.4

### baseGamesPer50
- 約35G/50枚（プチRT込み）。

### netIncrease
- BIG後30G RT: `現状維持程度`。
- 信頼できる本機固有の枚/G精密値は再探索で固定できなかったため、数値への推測変換はしない。

### basicPayout
- 同色BIG: 最大302枚。
- 異色BIG: 最大203枚。
- REG: 最大105枚。
- 同色BIG/異色BIG後: 30G RT。

### ceiling
- 天井機能: `NOT_APPLICABLE / NONE`。

## modeSpecificMinimumData
- 通常時のチャンス目成立後は10G間のプチRT「高確率」へ移行する状態がある。
- BIG終了後は30G RTへ突入。
- RTは規定30G消化またはボーナス成立で終了。
- 細かなボーナス重複率、全設定示唆振り分け等は物差し目的外のため収集しない。

## resetBehavior

### settingChangeBehavior
- 設定変更時の内部状態: `チャンス目RT移行状態`。
- RT状態: `RESET`。
- 液晶ステージ: `原始の森`。
- 一撃の本機専用「設定変更時」比較表に基づく。

### carryOverBehavior
- 据え置き時を純電源OFF→ONから独立して直接説明する本機固有資料は、機種名・型式名・メーカー名・「据え置き/朝一/設定変更/電源ON OFF/ガックン/RT状態」を変えて再探索したが固定できず、`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 純電断の引継ぎ挙動を据え置きへ自動転記しない。

### powerCycleBehavior
- 電源OFF→ON時の内部状態: `チャンス目RT非移行状態`。
- RT状態: `CARRY_OVER`。
- 液晶ステージ: 原則`原始の森`。
- ただしボーナス中/RT中などで電断した場合は、その状態を引き継ぐと一撃注記あり。

### gameCounterReset
- 通常ゲーム数天井が存在しないため、天井ゲーム数カウンタ: `NOT_APPLICABLE`。
- プチRT/RT状態はsettingChangeBehavior / powerCycleBehaviorのとおり別契約。

### ceilingAfterReset
- 通常天井・短縮天井・朝一専用天井: `NOT_APPLICABLE`。

### modeAfterReset
- AT/ART型の朝一専用モードは存在しない。
- 設定変更時はチャンス目RT移行状態、純電断時はチャンス目RT非移行状態という内部状態差を本項でも参照。

### stateAfterReset
- 設定変更: `チャンス目RT移行状態`。
- 純電源OFF→ON: `チャンス目RT非移行状態`。
- RT自体は設定変更時RESET、純電断時CARRY_OVER。

### advantageousSectionReset
- ボーナス+RT主体の5.9号機で、本機について有利区間をホール朝一挙動として管理する必要がある直接資料は確認できず `NOT_APPLICABLE_TO_PRIMARY_GAME_FLOW / NONE_CONFIRMED_AFTER_RESEARCH`。
- 5.9号機一般論から有利区間処理を補完しない。

### resetBenefits
- 天井短縮・初当たり優遇等の朝一数値恩恵: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更でチャンス目RT移行状態から開始する点は、純電断との差として保存するが、勝率/期待値の推定はしない。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更と純電断でチャンス目後のプチRT移行可否に差があるため、朝一の状態挙動が変更判別材料になり得る。
- 液晶は設定変更/純電断とも原始の森が基本のため、ステージ単独では判別材料になりにくい。
- 本機固有のガックン確率・確定条件: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 公開された短縮天井・朝一当選率・リセット恩恵発生率などの比較可能な数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `CONFLICT_RELEASE_DATE_2018_08_06_VS_2018_07_23`: HAZUSEとすろぱちくえすとは2018-08-06。ちょんぼりすたは2018-07-23表記。型式/検定番号と結びつくHAZUSEおよび複数8/6資料を優先しcanonical=2018-08-06。
- 5号機クロニクルの該当項目には「AT・純増約3.5枚/G」等、本機のA+RT仕様と整合しない記述があるため、機種取り違え/後発シリーズ混同の可能性が高く性能根拠には採用しない。

## missingFields
- RTの本機固有の精密純増枚/G。
- 据え置き時を純電断と独立させた直接契約。
- 本機固有ガックンの確定条件/発生率。

## sources
取得日: 2026-09-10

1. HAZUSE — クレアの秘宝伝 女神の夢と魔法の遺跡
   - https://hazuse.com/machine/pachislot/7S1909/
   - 型式`クレアの秘宝伝 女神の夢と魔法の遺跡／P4`、検定番号`7S1909`、導入2018-08-06、メーカー=パオン・ディーピー、基本仕様、天井非搭載、30G RT。
   - reliability: `ANALYSIS_HIGH_PERIOD_DB`
2. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_kurea3/3/
   - 設定変更時: チャンス目RT移行状態 / RTリセット / 原始の森。電源OFF→ON時: チャンス目RT非移行状態 / RT引継ぎ / 原始の森（ボーナス中・RT中等は引継ぎ）。天井非搭載。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
3. 一撃 — 小役確率/ベース
   - https://1geki.jp/slot/s_kurea3/4/
   - 約35G/50枚（プチRT込み）。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
4. すろぱちくえすと — クレアの秘宝伝3
   - https://www.slopachi-quest.com/article/crea3/
   - 2018-08-06、A+RT、約35G/50枚、設定別BIG/REG/合算/機械割、最大302/203/105枚、BIG後30G RT、純増現状維持程度。
   - reliability: `ANALYSIS_HIGH`
5. pachislo-data — クレアの秘宝伝3
   - https://pachislo-data.com/daito/75679
   - A+RT、最大302/203/105枚、BIG後30G RT。
   - reliability: `ANALYSIS_SINGLE`
6. ちょんぼりすた — クレアの秘宝伝3
   - https://chonborista.com/slot/daito-slot/59726/
   - A+RT/30G RT、基本性能。導入日2018-07-23表記は8/6資料群とCONFLICTとしてのみ保持。
   - reliability: `ANALYSIS_HIGH`
