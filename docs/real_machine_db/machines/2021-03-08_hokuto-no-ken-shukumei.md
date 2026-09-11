# パチスロ北斗の拳 宿命

No: 1395
machineName: パチスロ北斗の拳 宿命
machineNameVariants: パチスロ北斗の拳 宿命 / 北斗の拳 宿命 / 北斗宿命 / S パチスロ北斗の拳AC LA
manufacturer: サミー
releaseDate: 2021-03-08
formalModelName: S パチスロ北斗の拳AC LA
certificationNumber: 0S1190

generation: 6.1号機
systemType: AT / CZ・直撃経由 / ダブルAT

## identity / release
- HAZUSEで型式 `S パチスロ北斗の拳AC LA`、検定番号 `0S1190`、メーカーSammy、導入開始日2021-03-08を確認。
- K-Navi、1geki、業界記事でも2021-03-08導入で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 98.0% |
| 2 | 99.1% |
| 3 | 100.7% |
| 4 | 104.3% |
| 5 | 109.0% |
| 6 | 111.1% |
- イチカツ、当時業界試打資料、複数解析で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | AT「BATTLE BONUS」初当たり |
|---:|---:|
| 1 | 1/340.1 |
| 2 | 1/335.1 |
| 3 | 1/315.3 |
| 4 | 1/283.4 |
| 5 | 1/243.0 |
| 6 | 1/194.2 |
- K-Navi、イチカツ、当時試打資料で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約35.8G/50枚（設定1代表値）。
- 1geki、PiDEA、イチカツ、複数解析で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## netIncrease
- AT「BATTLE BONUS」純増約2.8枚/G。
- PiDEA、P-WORLD、1geki、HAZUSEで一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- BB伝承: 前半15G or 30G+α + 継続バトル4G。継続率約67〜89%のセット継続型。
- BB拳王: 初期150枚以上の差枚数管理型。
- いずれも固定一律獲得枚数ではないため、上記を基本獲得性能として保持。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は低確 / 通常 / 高確の内部モード。
- 天井は有利区間開始後800G+αでAT「BATTLE BONUS」当選。
- 北斗カウンター、七星カウンターを搭載するが、全詳細抽選は実機完全再現用のため本DB対象外。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_HIGH_START
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は天井G数RESET。
- 北斗カウンター / 七星カウンターもRESET。
- 有利区間RESET。
- 内部状態は高確スタート。
- 液晶は荒野ステージ開始。
- 必勝本、イチカツ、期待値見える化、複数攻略資料で高確スタートを照合。

### carryOverBehavior
- 据え置き時は天井進行・内部状態・有利区間をCARRY_OVER側として扱う。
- 北斗カウンター / 七星カウンターも内部的に引き継ぐ。
- 電源再投入後は表示上非表示になる項目があるため、表示初期化と内部引継ぎを分離する。

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数を引き継ぐ。
- 内部状態を引き継ぐ。
- 有利区間を引き継ぐ。
- 北斗カウンターは表示上リセット/非表示でも内部的に引継ぎ。
- 七星カウンターも表示上非表示だが、内部所持星は次回星獲得時にまとめて表示される。
- 液晶は荒野ステージ開始とする必勝本資料あり。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 設定変更後も天井は800G+α。
- リセット専用短縮天井は確認できない。

### modeAfterReset
- 通常時内部モードは低確 / 通常 / 高確。
- 設定変更時は高確スタートが公開されているため、低確/通常への再抽選テーブルではなく高確開始契約として保存。
- 高確の設定変更専用滞在G数・保障G数の固定公開値は確認できない。

### stateAfterReset
- 設定変更: 高確スタート。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 高確中はCZ/AT抽選が優遇される。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常時から有利区間ランプ点灯型。

### resetBenefits
- 設定変更後は必ず高確スタート。
- 高確中の強レア役ではCZ/AT直撃期待度が高いため、朝一客行動へ影響する主要恩恵として扱う。
- 固定短縮天井・AT直撃保証は確認できない。

### resetPenalties
- 公開された設定変更専用の定量的不利要素は確認できない。

### resetDetection
- 有利区間ランプは通常時点灯型。朝一消灯なら設定変更濃厚、点灯なら据え置き濃厚。
- 前日が非有利区間で閉店したケースやホール側対策では例外があるため確定条件にはしない。
- 一部攻略資料では設定変更後1G目のガックンが変更判別材料とされる。サミー筐体系の一般論を含むため、本機固有の厳密な発生率は `UNVERIFIED_AFTER_RESEARCH` とし、補助判別材料に留める。

### numericResetData
- 設定変更時天井: 800G+α（通常天井と同じ）。
- 設定変更時内部状態: 高確スタート。
- リセット専用天井短縮: NONE_CONFIRMED。
- 高確開始率: 公開記述上100%扱い（複数資料一致）。

## sources
取得日: 2026-09-12

1. PiDEA X「当たりはすべて本AT『北斗の拳 宿命』」
   - https://www.pidea.jp/articles/1607067966
   - サミー新機種、純増約2.8枚/G、50枚ベース約35.8G、AT確率レンジを確認。
   - reliability: INDUSTRY

2. HAZUSE「パチスロ北斗の拳宿命」
   - https://hazuse.com/machine/pachislot/0S1190/
   - 型式、検定番号、導入日、メーカー、純増、出玉率レンジを確認。
   - reliability: ANALYSIS_HIGH

3. K-Navi「パチスロ北斗の拳 宿命」
   - https://p-kn.com/slot/3522/
   - 2021-03-08導入、設定別AT初当たりを確認。
   - reliability: ANALYSIS_HIGH

4. イチカツ「北斗の拳宿命」
   - https://ichikatsu.com/hokutosyukumei/
   - 設定別AT初当たり/機械割、約35.8G/50枚、設定変更時高確、有利区間ランプ判別、電源ON/OFF時引継ぎを確認。
   - reliability: ANALYSIS_HIGH

5. パチ＆スロ必勝本「天井&設定変更」
   - https://p.hisshobon.jp/machine/3589/1/79999
   - 天井800G、設定変更/電断時の天井、北斗/七星カウンター、荒野ステージ開始を確認。
   - reliability: ANALYSIS_HIGH

6. 期待値見える化「北斗の拳宿命」
   - https://slotjin.com/tenjoukitaichi/hokutoshukumei/
   - 設定変更後天井RESET・高確・ランプ消灯、電断時天井/モード引継ぎ、有利区間ランプ判別を照合。
   - reliability: ANALYSIS_HIGH

7. スロットセブン「北斗の拳宿命 設定判別」
   - https://slot-seven.com/hokutonokensyukumei-settei/
   - 設定変更時高確、天井/有利区間RESET、電断時引継ぎを別系統で照合。
   - reliability: ANALYSIS_HIGH

8. P-WORLD「パチスロ北斗の拳 宿命」
   - https://www.p-world.co.jp/machine/database/9300
   - ダブルAT仕様、純増約2.8枚/G、BB伝承/拳王の基本性能を確認。
   - reliability: INDUSTRY_DB

9. なな徹「内部モード」
   - https://nana-press.com/kaiseki/machine/103/2809/
   - 低確/通常/高確、AT終了後高確スタート等を確認。
   - reliability: ANALYSIS_HIGH

## missingFields
- 設定変更専用の高確保障G数・滞在率詳細: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン発生率/対策時挙動: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- 1gekiの後年ページでは設定変更/電断時の天井・状態を「調査中」とする古い表が残るが、必勝本・イチカツ・期待値見える化・スロットセブン等の後発解析で設定変更天井RESET/高確、電断引継ぎが一致。後発複数一致をcanonicalとする。
