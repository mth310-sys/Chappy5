# S大花満SB

recordNo: 1547
machineName: 大花満
manufacturer: ジェイピーエス
formalModel: S大花満SB
inspectionCode: 2S1390
releaseDate: 2023-01-30
releasePhases:
- 2023-01-30: PB提携40法人向け初期納品
- 2023-04-03: 一般販売分導入開始
generation: 6.5号機 / メダル機
systemType: AT / 疑似ボーナス連チャン型 / PB機

## payoutRateBySetting
### 市場想定
- 設定1: 98.0%
- 設定2: 98.7%
- 設定3: 100.3%
- 設定4: 102.0%
- 設定5: 104.8%
- 設定6: 107.0%

### フル攻略
- 設定1: 99.0%
- 設定2: 99.8%
- 設定3: 101.3%
- 設定4: 102.9%
- 設定5: 105.9%
- 設定6: 108.0%

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### BIG初当たり
- 設定1: 1/434.1
- 設定2: 1/420.6
- 設定3: 1/407.4
- 設定4: 1/387.8
- 設定5: 1/375.6
- 設定6: 1/352.5

### REG初当たり
- 設定1: 1/695.9
- 設定2: 1/655.2
- 設定3: 1/628.3
- 設定4: 1/569.9
- 設定5: 1/521.4
- 設定6: 1/482.3

### ボーナス合算
- 設定1: 1/267.3
- 設定2: 1/256.2
- 設定3: 1/247.1
- 設定4: 1/230.8
- 設定5: 1/218.3
- 設定6: 1/203.7

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 全設定共通 約37.0G/50枚。

信頼度: INDUSTRY + ANALYSIS_HIGH

## netIncrease
- 花満BONUS / 超花満BONUS: 約4.2枚/G。
- REGULAR BONUS: 約2.0枚/G。

信頼度: INDUSTRY + ANALYSIS_HIGH

## basicPayout
- 花満BONUS: 120G、約500枚。小役ゲーム25G + JACゲーム15Gを3セット。
- 超花満BONUS: 120G、約500枚。通常BIGより1G連期待度が大幅優遇。
- REGULAR BONUS: 25G、約50枚。
- 1G連非当選時のボーナス終了後は8Gの引き戻しゾーンへ移行。

信頼度: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常A / 通常B / 天国の3モードで規定ゲーム数を管理。
- 有利区間継続時天井: 通常A 1126G+α / 通常B 582G+α / 天国 192G+α。
- 有利区間リセット時天井: 通常A 934G+α / 通常B 390G+α / 天国 192G+α。
- 通常Bは天国移行まで通常Aへ転落しないとする解析。
- 通常時は成立役による直撃抽選と規定ゲーム数解除を併用。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_MODE_NUMBERS_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井までのゲーム数、内部モード、内部状態をRESETし再抽選。
- 朝一表示ステージは陽光ステージ。
- 有利区間リセット時と同じ短縮天井契約が適用される。
- 初当たり時の上位BB「超花満BONUS」振り分けが優遇される解析あり。

### carryOverBehavior
- 据え置きでは設定変更を伴わないため、有利区間継続側の天井契約を維持し、天井進行・内部モード・内部状態をCARRY_OVERする扱い。
- 純電源OFF→ON時の直接表で、有利区間・天井・内部モード・内部状態の引継ぎが確認できる。

### powerCycleBehavior
- 純電源OFF→ONのみ: 有利区間CARRY_OVER。
- 天井ゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- 内部状態CARRY_OVER。
- 表示ステージは陽光ステージへ戻るため、見た目だけでは設定変更と区別できない。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 有利区間継続時の最大天井は通常A 1126G+α。

### ceilingAfterReset
- 設定変更 / 有利区間リセット時は通常A天井1126G+α→934G+α、通常B582G+α→390G+αへ192G短縮。
- 天国は設定変更前後とも192G+α。

### modeAfterReset
- 設定変更 / 有利区間リセット時はモード再抽選。
- 公開振り分け（通常A / 通常B / 天国）:
  - 設定1: 30% / 40% / 30%
  - 設定5: 12% / 40% / 48%
  - 設定6: 1% / 98% / 1%
- 設定2〜4は公開解析で調査中のため推測しない。
- 据え置き / 純電源OFF→ONは内部モードCARRY_OVER。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更専用の内部状態振り分け公開値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 有利区間ランプ等、外観だけで変更を見抜く確実な手段は確認できない。

### resetBenefits
- 通常A / 通常Bの天井が192G短縮。
- モード再抽選。設定1でも天国30%、設定5では天国48%。設定6は通常B98%と極端な振り分け。
- 初当たり時の超花満BONUS振り分け優遇。

### resetPenalties
- 設定変更により前日の天井進行・内部モード・内部状態を失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更 / 電源OFF→ONとも陽光ステージ開始。
- パチマガスロマガは「見た目から設定変更を見抜く手段が無い」と明記。
- モード由来の挙動は事後推測材料になり得るが確定判別とはしない。
- 本機固有のリールガックン条件 / 発生率は `大花満 / S大花満SB / 2S1390 / JPS` と `設定変更 / リセット / 朝一 / 据え置き / ガックン` を組み替え、当時解析・旧DB・回顧資料まで再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- リセット時天井: 通常A 934G+α / 通常B 390G+α / 天国192G+α。
- 有利区間継続時天井: 通常A1126G+α / 通常B582G+α / 天国192G+α。
- 設定変更 / 有利区間リセット時モード振り分け:
  - 設定1: A30% / B40% / 天国30%
  - 設定5: A12% / B40% / 天国48%
  - 設定6: A1% / B98% / 天国1%
- 設定2〜4: `PUBLIC_VALUE_NOT_FOUND / SOURCE_MARKED_UNDER_INVESTIGATION`。

### publicMorningNumbers
- 設定変更時の最大天井: 934G+α。
- 通常B選択時は390G+α、天国は192G+α。
- 公開モード振り分けは設定1/5/6のみ上記の通り。
- 朝一初当たりの超花満BONUS具体振り分け率は、優遇の存在は複数資料で確認したが数値を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得 / 再探索日: 2026-09-13。
- `大花満 / S大花満 / S大花満SB / 2S1390 / ジェイピーエス / JPS` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / モード / ガックン / 有利区間` を組み替えて検索。
- パチマガスロマガ、パチ7、HAZUSE、1geki、ちょんぼりすた、スロット解析系資料、業界発表を横断。
- PB初期納品と一般販売は同一型式の販売フェーズ差であり、導入日CONFLICTとして扱わない。

## conflicts
- **天井表現差**: 1gekiの見出しに「通常時最大1192G+α」とする表記がある一方、同ページのモード表・パチ7・P-WORLD・ちょんぼりすた等は有利区間継続時通常Aを1126G+αで一致。本DBのcanonicalは1126G+αとし、1192G+αは `CONFLICT_SINGLE_HEADING_VALUE` として保持。平均しない。
- **メーカー表記揺れ**: HAZUSE本文に「ジェイビーエス」表記があるが、検定通過業界記事・発表は株式会社ジェイピーエス。canonicalはジェイピーエス。

## sources
取得日: 2026-09-13

- グリーンべると / P-WORLD 業界発表: https://news.p-world.co.jp/articles/22687/greenbelt
  - `S大花満SB`、JPS、6.5号機AT、PB40法人、2023-01-30初期納品 / 2023-04-03一般販売、BB/RB確率、ベース、機械割、約500枚/約50枚、純増。
- グリーンべると原記事: https://web-greenbelt.jp/post-67378/
  - 上記業界発表の別掲載元。
- 遊技日本 / P-WORLD 検定通過: https://news.p-world.co.jp/articles/22456/nippon
  - `S大花満SB`（ジェイピーエス）の検定通過確認。
- HAZUSE: https://hazuse.com/machine/pachislot/2S1390/
  - 型式、検定番号2S1390、導入日、純増、設定別初当たり、モード振り分け。
- パチ7 スペック: https://pachiseven.jp/machines/6681/cutout/2
  - 設定別BIG/REG/合算、市場想定/フル攻略機械割、37.0G/50枚、導入日。
- パチ7 通常時解析: https://pachiseven.jp/machines/6681/cutout/6
  - モード別天井、設定変更/有利区間リセット時のモード振り分け。
- パチマガスロマガ 朝イチ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/50/kr01.php
  - 設定変更 / 電源OFF→ONの有利区間・天井・内部モード・開始ステージ、外観判別不可。
- スロット解析.com系（スロパチクエスト）: https://www.slopachi-quest.com/article/oohanaman-tenjyou/
  - 設定変更 / 電源OFF→ON、天井短縮、モード表。
- ちょんぼりすた: https://chonborista.com/slot/jps-slot/181312/
  - 天井、朝一、内部状態、モード、超花満BONUS優遇、基本ボーナス性能。
- 1geki 天井: https://1geki.jp/slot/s_oohanaman/3/
  - 有利区間リセット時天井、設定変更時の超花満BONUS優遇。
- ALL7 2023年1月導入一覧: https://www.all7.jp/plans/index/2023/01
  - 2023-01-30のパチスロとしてモンハンアイスボーン / 大花満を照合。
- K-Navi 2023年1月導入カレンダー: https://p-kn.com/calendar/202301/
  - 2023-01-30群の別系統照合。

## missingFields
- 設定2〜4の設定変更 / 有利区間リセット時モード振り分け: 公開解析が調査中。
- 設定変更時の超花満BONUS具体振り分け率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン条件 / 発生率: `UNVERIFIED_AFTER_RESEARCH`。

## status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_MODE_NUMBERS_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH
