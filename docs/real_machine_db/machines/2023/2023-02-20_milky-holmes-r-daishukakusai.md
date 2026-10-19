# パチスロ 探偵オペラ ミルキィホームズR 大収穫祭!!!!

recordNo: 1551
machineName: パチスロ 探偵オペラ ミルキィホームズR 大収穫祭!!!!
manufacturer: カルミナ販売 / ネット製造
formalModel: SパチスロミルキィホームズGNB
inspectionCode: 230198
releaseDate: 2023-02-20
generation: 6.5号機 / メダル機
systemType: AT / 疑似ボーナス・A-500タイプ
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.7%
- 設定2: 98.9%
- 設定3: 101.0%
- 設定4: 104.2%
- 設定5: 106.9%
- 設定6: 108.7%

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス合算
- 設定1: 1/255
- 設定2: 1/245
- 設定3: 1/227
- 設定4: 1/209
- 設定5: 1/198
- 設定6: 1/148

### MMB
- 設定1: 1/349
- 設定2: 1/337
- 設定3: 1/319
- 設定4: 1/300
- 設定5: 1/288
- 設定6: 1/201

### MB
- 設定1: 1/964
- 設定2: 1/908
- 設定3: 1/802
- 設定4: 1/700
- 設定5: 1/642
- 設定6: 1/560

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 設定1: 約33.3G/50枚
- 設定2: 約33.5G/50枚
- 設定3: 約33.6G/50枚
- 設定4: 約35.0G/50枚
- 設定5: 約37.1G/50枚
- 設定6: 約73.0G/50枚
- 設定6は通常時押し順ナビ発生率が大幅に高く、コイン持ちが別格となる。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 疑似ボーナス: 約4.5枚/G。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- MMB「MIRACLEミルキィホームズBONUS」: 平均約480枚（業界発表では平均500枚近く）。
- MB「ミルキィホームズBONUS」: 50枚獲得まで継続。
- ボーナス後は必ず100G+αの「収穫祭」へ移行。
- 収穫祭中のボーナスはMMB濃厚。設定1のボーナス期待度は約40%。
- 「大収穫祭」はボーナスループ期待度80%over。
- ミルキィアタックは最大1000枚獲得可能。

信頼度: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData
- ボーナス間天井: 777G+αでボーナス当選。
- MMB間天井: MMB間1000G到達後、次回ボーナスがMMB濃厚。
- MB2連続後: 次回ボーナスがMMB濃厚。
- 通常時は内部状態（通常 / 高確A / 高確B / 高確C / 収穫祭）を持つ。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_INITIAL_STATE_DISTRIBUTION
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- ボーナス間777G+α天井をRESET。
- 内部状態をRESETし、朝一初期状態を再抽選。
- 開始ステージはシャロ・昼ステージ。
- MMB間1000G進行、MB連続回数について、設定変更時の個別RESET契約を直接明記する高信頼資料は十分に固定できなかったため、通常の「天井RESET」記述から自動推測せず個別は `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- ボーナス間天井をCARRY_OVER。
- 内部状態をCARRY_OVER。
- 据え置き時のMMB間1000G進行・MB連続回数の個別契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ON時は有利区間・天井・内部状態をCARRY_OVER。
- 開始ステージはシャロ・昼ステージ表記。
- MMB間1000G進行・MB連続回数の純電断個別契約は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: ボーナス間777G+α天井RESET。
- 据え置き: ボーナス間天井CARRY_OVER。
- 純電源OFF→ON: ボーナス間天井CARRY_OVER。
- MMB間1000GおよびMB2連続の救済カウンタは、設定変更/純電断の直接対比資料不足のため `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 設定変更専用の固定天井短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後も通常ボーナス間天井は777G+α。
- 朝一の内部状態再抽選により初当たり期待度は状態に応じ変化するが、ゲーム数天井自体の短縮ではない。

### modeAfterReset
- 設定変更時は内部状態を再抽選。
- 全設定共通の設定変更時振り分け:
  - 通常: 34.7%
  - 高確A: 2.3%
  - 高確B: 34.7%
  - 高確C: 2.3%
  - 収穫祭: 26.0%
- 高確A以上合算は65.3%。
- 朝一専用状態というより、通常時に存在する内部状態を設定変更時専用の振り分けで選択する仕様として保存。

### stateAfterReset
- 設定変更: 上記振り分けで再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更時の26.0%で内部的に収穫祭スタート。外見上はシャロ・昼ステージから開始するため、状態そのものは見た目で直接固定できない。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常遊技中の有利区間リセット契機としてMMB終了時の一部、およびエンディング終了後を確認。
- 有利区間ランプによるリセット判別不可。

### resetBenefits
- 設定変更時は65.3%で高確A以上スタート。
- 26.0%で内部的に収穫祭スタートとなり、100G間がボーナス当選チャンス状態。
- 設定変更専用のゲーム数天井短縮はなし。

### resetPenalties
- 設定変更で前日のボーナス間天井進行と内部状態を失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプでは設定変更判別不可。
- 設定変更時でも内部収穫祭26.0%は外見上シャロ・昼から始まるため、朝一ステージだけで収穫祭/変更を直接判別しにくい。
- 本機固有のリールガックン条件/発生率は、機種名・型式・メーカー・設定変更語を組み替えて再探索しても `UNVERIFIED_AFTER_RESEARCH`。
- 宵越しボーナス間天井挙動は据え置き推測材料となる。

### numericResetData
- 設定変更時初期状態:
  - 通常 34.7%
  - 高確A 2.3%
  - 高確B 34.7%
  - 高確C 2.3%
  - 収穫祭 26.0%
- 高確A以上合算: 65.3%。
- 内部収穫祭スタート: 26.0%。
- 設定変更専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更時の内部状態振り分けを全設定共通値として公開確認。
- 朝一内部収穫祭26.0%、高確A以上65.3%。
- 設定変更後の特定G以内ボーナス当選率について、条件が明確な高信頼公開値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ 探偵オペラ ミルキィホームズR 大収穫祭 / ミルキィホームズR 大収穫祭 / SパチスロミルキィホームズGNB / カルミナ / ネット / 230198` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / MMB天井 / MBスルー / 内部状態 / 収穫祭 / モード振り分け / ガックン / 有利区間` を組み替えて検索。
- P-WORLD、遊技日本、グリーンべると、PiDEA、パチ＆スロ必勝本、ちょんぼりすた、スロパチクエスト、イチカツ、フリック7、パチマガスロマガを横断。

## conflicts
- 50枚ベースの概要欄に設定1「約33.1G」とする二次資料がある一方、同資料の詳細表・P-WORLD・フリック7は設定1「33.3G」で一致。canonicalは詳細表の33.3Gとし、33.1Gは `CONFLICT_SUMMARY_ROUNDING_OR_TYPO` として保持。
- MMB平均獲得は業界発表「平均500枚近く」、解析値「約480枚」。定義差/丸めとして480枚を比較可能な解析値、500枚近くを業界表現として併記。

## sources
取得日: 2026-09-13

- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9778
  - 型式、検定番号230198、製造ネット/メーカー表記カルミナ、2023-02-20、設定別MMB/MB/合算、機械割、設定別ベース、天井。
- 遊技日本 / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/22790/nippon
  - 製造元ネット、型式SパチスロミルキィホームズGNB、A-500、MMB平均500枚近く、収穫祭、大収穫祭、導入日。
- PiDEA X 検定通過: https://www.pidea.jp/articles/1671498988
  - SパチスロミルキィホームズGNB、ネット、検定番号230198。
- P-WORLD / 遊技通信 検定: https://news.p-world.co.jp/articles/22607/yugitsushin
  - 型式・ネット・検定番号230198の別系統照合。
- ちょんぼりすた: https://chonborista.com/slot/carmina/180299/
  - 設定別性能、純増、天井、朝一設定変更/電断、設定変更時内部状態振り分け、有利区間、収穫祭性能。
- スロパチクエスト 天井/リセット: https://www.slopachi-quest.com/article/milky-holmes-r-tenjyou/
  - 設定変更/電断の有利区間・天井・内部モード、設定変更時状態振り分け、内部収穫祭26.0%。
- イチカツ: https://ichikatsu.com/milkyholmesr/
  - 設定変更天井RESET、電源ON/OFF天井引継ぎ、有利区間ランプ判別不可。
- フリック7 朝一: https://flick7.net/slot/reset_guide2023.php
  - 設定変更時内部状態振り分けの再照合。
- パチマガスロマガ MMB: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/carmina_slot/05/bn01-4.php
  - MMB平均約480枚、初当たり時MMB/MB振り分け。

## missingFields
- 設定変更/据え置き/純電断時のMMB間1000G救済カウンタ直接契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更/据え置き/純電断時のMB連続回数直接契約: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有リールガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。
- 朝一特定G以内ボーナス当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_INITIAL_STATE_DISTRIBUTION
