# ハイパーブラックジャック

No: 1365
machineName: ハイパーブラックジャック
machineNameVariants: ハイパーブラックジャック / ハイパーブラックジャック えなこ / SハイパーブラックジャックZG
manufacturer: ネット
releaseDate: 2020-08-17
formalModelName: SハイパーブラックジャックZG
certificationNumber: 0S0528

generation: 6号機
systemType: AT / 疑似ボーナス+ST / ボーナスストック型

## identity / release
- HAZUSEで型式 `SハイパーブラックジャックZG`、検定番号 `0S0528`、メーカー「ネット」、導入開始2020-08-17を確認。
- グリーンべると/P-WORLD、遊技日本もネットの新台として2020-08-17全国導入開始を報道。
- 一部攻略資料では「カルミナ（NET系）」表記があるため manufacturerVariant としてCONFLICT欄に保持するが、業界記事/型式DBに合わせcanonicalはネット。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.2% |
| 3 | 100.7% |
| 4 | 104.3% |
| 5 | 107.2% |
| 6 | 110.1% |
- HAZUSE、イチカツ、スロットセブン等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
ボーナス初当たり:
| 設定 | 初当たり |
|---:|---:|
| 1 | 1/360.8 |
| 2 | 1/339.4 |
| 3 | 1/261.9 |
| 4 | 1/243.4 |
| 5 | 1/201.1 |
| 6 | 1/174.9 |

ST当選率:
| 設定 | ST当選 |
|---:|---:|
| 1 | 1/834.3 |
| 2 | 1/763.1 |
| 3 | 1/535.8 |
| 4 | 1/473.2 |
| 5 | 1/395.0 |
| 6 | 1/308.4 |
- イチカツの精密値をcanonicalとし、HAZUSE/グリーンべると等の丸め値と整合。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約51.5G/50枚。
- イチカツ、スロットセブン等で一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- 疑似ボーナス: 約6.1枚/G。
- グリーンべると、HAZUSE、複数攻略資料で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- HYPER BIG BONUS: 30G、平均約184枚。終了後はSTOCK TIME HYPER濃厚。
- BIG BONUS: 21G。初当たり時平均約146枚、ST中平均約129枚の資料整理あり。
- REG BONUS: 8G、平均約49枚。
- STOCK TIME: 1セット30GのST型、ボーナスストックで30G再セット。ループ率約86%、突入時期待獲得約750枚。
- STOCK TIME HYPER: 獲得期待1,200枚overと業界発表。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は4モード: 通常A / 通常B / 通常C / レジェンド。
- 最大天井: 通常A 777G+α / 通常B 577G+α / 通常C 777G+α / レジェンド77G+α。
- 有利区間移行後、最大777G+αでボーナス当選。
- 小役でポイントを蓄積し10000ptでJOKERルーレットへ。周期数/ポイントも朝一引継ぎ判別に関係するためresetBehaviorに必要な範囲のみ保持。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_INITIAL_POINT_DATA
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井ゲーム数RESET。
- 周期数RESET。
- ポイントは再抽選。
- 非有利区間へ移行し、有利区間ランプ消灯。
- 朝一液晶は0G/1周期目/ポイント???表示となる整理がある。
- ステージはカジノステージ。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は内部天井ゲーム数CARRY_OVER。
- 周期数CARRY_OVER。
- ポイントCARRY_OVER。
- 内部状態/有利区間をCARRY_OVER。
- 液晶上はG数0、周期1回目、ポイント???と見た目がリセットされるため、表示だけでは内部引継ぎを否定できない。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ONでは内部天井G、周期数、ポイント、内部状態、有利区間をCARRY_OVER。
- 有利区間ランプは点灯状態を引き継ぐのが主要朝一解析の整理。
- 液晶G数/周期/ポイント表示は初期表示へ戻るため、内部値と液晶表示を分離して保存。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 内部天井G RESET。
- 据え置き / 純電源OFF→ON: 内部天井G CARRY_OVER。ただし液晶G数は0G表示へ戻る。
- 周期数も設定変更ではRESET、据え置きでは内部CARRY_OVERだが液晶上1回目表示。

### ceilingAfterReset
- 設定変更後は新規モードに応じた規定Gから開始。
- モード別最大天井: 通常A 777G+α / 通常B 577G+α / 通常C 777G+α / レジェンド77G+α。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- レジェンド選択時は77G+αとなるが、これはモード抽選結果による短縮。

### modeAfterReset
- 有利区間移行時の成立役と設定に応じて通常A/B/C/レジェンドを抽選。
- 設定変更後は非有利区間を経由して新しい有利区間へ移行するため、このモード抽選を受ける。
- 1gekiでは成立役別・設定別モード振り分けを公開しているが表が大きいため、実機完全再現目的の全テーブルは保存しない。
- 朝一比較値として、弱チェリー/スイカ成立時の例では設定1が A48.8 / B20.9 / C23.3 / レジェンド7.0%、設定6が A7.5 / B30.6 / C44.7 / レジェンド17.2%。これは設定変更専用固定表ではなく「有利区間移行時×成立役」の公開抽選値。
- reliability: ANALYSIS_HIGH

### stateAfterReset
- 設定変更: 非有利区間へ移行し内部状態を新規構築。
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
- 有利区間移行時の初期ポイント抽選あり。

### advantageousSectionReset
- 設定変更: RESET → 非有利区間 / ランプ消灯。
- 据え置き / 純電源OFF→ON: CARRY_OVER、通常時ランプ点灯型のため点灯継続が基本。
- ボーナス/ディーラーステージ終了後には区間終了でランプ消灯する場合があるため、前日終了状況は判別の例外。

### resetBenefits
- 設定変更後は有利区間移行時にモードと初期ポイントを新規抽選。
- 初期ポイントは0pt以外も選択されるため、朝一ポイント進行に実質的な先行値が付く場合がある。
- 一律の設定変更専用短縮天井/ボーナス保証は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- `NONE_DIRECTLY_PUBLISHED`。
- 据え置き側で蓄積していた内部G/周期/ポイントは設定変更で消えるが、設定変更固有の定量ペナルティとして公表された値は確認できない。

### resetDetection
- 通常時は有利区間ランプ点灯型。
- 朝一ランプ消灯: 設定変更濃厚。
- 朝一ランプ点灯: 据え置き濃厚。
- 店側が1G回す等の対策が可能なため確定判別にはしない。
- 液晶G数/周期/ポイント表示は据え置きでも初期表示へ戻るため、見た目の0G/1周期/???のみでは変更判別不可。
- 本機固有のガックン条件・発生率は機種名/型式/メーカー表記と `ガックン / 朝一 / 設定変更 / 据え置き / リール` を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
有利区間移行時/ポイントMAX後前兆終了後の初期ポイント振り分け:
| 初期pt | 振り分け |
|---:|---:|
| 0pt | 70.3% |
| 1000pt | 6.3% |
| 2000pt | 6.3% |
| 3000pt | 6.3% |
| 4000pt | 6.3% |
| 5000pt | 3.1% |
| 7500pt | 1.6% |
- 設定変更後も有利区間移行を経由するため朝一比較値として保存。ただし設定変更専用テーブルではない。

有利区間移行時のモード抽選例（弱チェリー/スイカ成立時）:
- 設定1: 通常A48.8 / 通常B20.9 / 通常C23.3 / レジェンド7.0%。
- 設定6: 通常A7.5 / 通常B30.6 / 通常C44.7 / レジェンド17.2%。
- 成立役別の全テーブルは本DB目的上省略。

## resetBehavior 再探索メモ
2026-09-11。`ハイパーブラックジャック / ハイパーブラックジャック えなこ / SハイパーブラックジャックZG / ネット / NET / カルミナ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / ポイント / モード / 初期ポイント / ガックン / 有利区間 / 有利区間ランプ` を組み替え、グリーンべると、遊技日本、HAZUSE、P-WORLD系記事、1geki、なな徹、パチマガスロマガ、ちょんぼりすた、イチカツ、スロットセブン、期待値見える化等を横断。内部G/周期/ポイントのRESET/CARRY_OVER、非有利区間、ランプ判別、初期ポイント公開値、モード抽選まで固定。本機固有ガックン契約は未固定のため推測補完しない。

## conflicts
- manufacturer: HAZUSE/グリーンべると/遊技日本/イチカツは `ネット`。一部攻略資料は `カルミナ（NET系）`。canonicalはネット、カルミナ表記はCONFLICT/販売系統表記として保持。
- BIG平均獲得枚数: グリーンべるとの初当たりBIGは平均146枚、HAZUSEはBIG一般値として約129枚。1gekiが「初回平均146枚 / ST中平均129枚」と定義差を説明するため、競合ではなく条件差として分離保存。

## missingFields
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH。
- 設定変更専用だけに限定されたモード全振り分け: NOT_SEPARATELY_PUBLISHED; 有利区間移行時抽選を朝一比較値として使用。

## sources
取得日: 2026-09-11

1. グリーンべると / P-WORLD「【8/17導入】パチスロ『ハイパーブラックジャック』」
   - https://news.p-world.co.jp/articles/14410/greenbelt
   - 2020-08-17導入、純増約6.1枚/G、ボーナスG数/平均獲得、ST性能。
   - reliability: INDUSTRY
2. 遊技日本「【8/17導入】ハイパーブラックジャック」
   - https://yugi-nippon.com/pachinko-new-machine/post-36911/
   - ネット、2020-08-17全国導入、ゲーム性。
   - reliability: INDUSTRY
3. HAZUSE「ハイパーブラックジャック」
   - https://hazuse.com/machine/pachislot/0S0528/
   - 型式 `SハイパーブラックジャックZG`、検定0S0528、メーカー、導入日、出玉率、各確率、ボーナス基本性能、ランプ判別。
   - reliability: ANALYSIS_HIGH
4. イチカツ「ハイパーブラックジャック」
   - https://ichikatsu.com/hbj/
   - 設定別初当たり/ST/機械割、ベース、天井、設定変更/電断比較。
   - reliability: ANALYSIS_HIGH
5. 期待値見える化「ハイパーブラックジャック」
   - https://slotjin.com/tenjoukitaichi/enako/
   - 朝一の内部G/周期/ポイント/状態/ランプ、液晶表示差、初期ポイント振り分け。
   - reliability: ANALYSIS_HIGH
6. 1geki「ハイパーブラックジャック 通常時のモード」
   - https://1geki.jp/slot/s_hbj/44/
   - 4モード、モード別天井、有利区間移行時の成立役×設定別モード振り分け。
   - reliability: ANALYSIS_HIGH
7. 1geki「ハイパーブラックジャック ボーナス概要」
   - https://1geki.jp/slot/s_hbj/61/
   - BIGの初回146枚/ST中129枚等の条件差。
   - reliability: ANALYSIS_HIGH
8. パチマガスロマガ「ハイパーブラックジャック 通常時のモード」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/179/tj04.php
   - モード別最大天井。
   - reliability: ANALYSIS_HIGH
9. なな徹「ハイパーブラックジャック 天井/ヤメ時」
   - https://nana-press.com/kaiseki/machine/83/1565/
   - 有利区間移行後最大777G+α、ランプ消灯時の区間終了確認。
   - reliability: ANALYSIS_HIGH
