# チャレンジマン

machineName: チャレンジマン
manufacturer: 岡崎産業
releaseDate: 2012-03-05
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviおよびパチビーは2012-03-05導入開始。2012-02-20付グリーンべるとは3月4日から納品開始予定としており、納品日とホール導入日の定義差として整合する。
generation: 5号機
systemType: ボーナス+ART / CZ搭載 / 天井ポイント型
formalModelName: チャレンジマンA
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 99.0% |
| 3 | 100.6% |
| 4 | 102.4% |
| 5 | 105.0% |
| 6 | 110.0% |

reliability: ANALYSIS_HIGH
notes: P-WORLD、5号機クロニクル、pacnkで一致。

## initialHitBySetting

### bonusAndArt

| 設定 | 赤7BIG | 青7BIG | BAR | ART初当たり | ボーナス合算 | ボーナス+ART合算 |
|---|---:|---:|---:|---:|---:|---:|
| 1 | 1/1285 | 1/630 | 1/655 | 1/697.5 | 1/257 | 1/187.8 |
| 2 | 1/1285 | 1/618 | 1/636 | 1/689.7 | 1/252 | 1/184.6 |
| 3 | 1/1285 | 1/612 | 1/618 | 1/676.3 | 1/248 | 1/181.5 |
| 4 | 1/1285 | 1/596 | 1/596 | 1/676.4 | 1/242 | 1/178.2 |
| 5 | 1/1285 | 1/570 | 1/568 | 1/676.3 | 1/232 | 1/172.7 |
| 6 | 1/1285 | 1/570 | 1/512 | 1/662.1 | 1/223 | 1/166.8 |

reliability: ANALYSIS_HIGH_FOR_PWORLD_TABLE__CROSSCHECKED_FOR_RED_BIG_BLUE_BIG_BAR
notes: P-WORLDが設定別赤7BIG・青7BIG・BAR・ART初当たり・合算を掲載。pacnkは赤7BIG全設定1/1285、青7BIGとREG(BAR)の精密値を掲載し、丸め範囲で一致する。

## baseGamesPer50

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED
notes: 「チャレンジマン/チャレンジマンA/岡崎産業」と「50枚/1000円/ベース/コイン持ち/千円」を組み替え、P-WORLD、K-Navi、パチビー、パチマガスロマガ、当時業界記事、後年5号機DB・設定判別DBを再探索したが、本機固有の比較可能な50枚ベースを直接確定できなかった。

## netIncrease

mode: ART「チャレンジゲーム」
value: 約+1.3枚/G
reliability: HIGH
notes: K-Navi、P-WORLD、パチビー、パチマガスロマガ、2012-02-20付グリーンべるとで一致。

## basicPayout

- 赤BIG: 約300枚（396枚超払い出し終了）
- 青BIG: 約195枚（252枚超払い出し終了）
- BAR: 約53枚（60枚超払い出し終了）
- ART「チャレンジゲーム」: 1セット30G+α、純増約+1.3枚/G

reliability: HIGH
notes: K-Navi、P-WORLD、パチビー、パチマガスロマガで一致。グリーンべるとも赤7約300枚・青7約195枚を当時発表記事で確認。

## modeSpecificMinimumData

- ART「チャレンジゲーム」は1セット30G+α、純増約+1.3枚/G。
- CZ経由のARTは約50～90%のループ率を持ち、セットストックとゲーム数上乗せも併用。
- 通常時は24G+α周期でCZ「チャレンジタイム」突入抽選。4回連続非当選なら5回目はCZ突入。
- 通常・高確・超高確の内部状態が存在。
- 天井は固定ゲーム数ではなく「天井ポイント」。ボーナスorART終了時に50 / 200 / 230ポイントのいずれかを決定し、通常時の小役成立で累積。規定値到達でCZ「スーパーチャレンジタイム」へ入り、ART5セット以上確定かつ高ループ/ストックに期待。
- 通常時、BET前に右停止ボタンを押すと天井ポイントを0～230で7セグ確認可能。中停止ボタンではCZ連続非当選回数1～5を確認可能。

reliability: ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_PARTIAL
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: 後年整理解析で、設定変更後は天井ポイントとCZポイントがリセットされ、内部状態は必ず通常へ移行すると記録。本機固有の設定変更時処理として採用するが、当時一次/攻略本文の直接照合は未取得のため信頼度を限定する。
carryOverBehavior: 据え置き時に天井ポイント・CZポイントを明示的に引き継ぐとする本機固有の直接資料は、表記・資料系統を変えた再探索後もUNVERIFIED_AFTER_RESEARCH。通常仕様上は7セグで現在値確認可能だが、据え置き処理そのものを推定で補完しない。
powerCycleBehavior: 単純電源OFF→ONのみの場合の天井ポイント、CZポイント、通常/高確/超高確、CZ/ART状態の処理はUNVERIFIED_AFTER_RESEARCH。
gameCounterReset: RESET_TENJO_POINT_AND_CZ_POINT_ON_SETTING_CHANGE__ANALYSIS_SINGLE_RETROSPECTIVE
ceilingAfterReset: 設定変更で天井ポイントがリセットされる。設定変更専用の固定短縮天井や専用ポイント選択率は確認できずUNVERIFIED_AFTER_RESEARCH。通常の天井規定値は50 / 200 / 230ポイント。
modeAfterReset: 本機には通常・高確・超高確の内部状態が存在し、設定変更後は通常へ移行するとする整理解析あり。朝一専用モードは確認できない。
stateAfterReset: NORMAL_STATE_ON_SETTING_CHANGE_REPORTED_BY_RETROSPECTIVE_ANALYSIS
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: 設定変更専用のCZ/ART確定、短縮天井、朝一高確保証等の明確な恩恵はNONE_CONFIRMED_AFTER_RESEARCH。
resetPenalties: 前日の天井ポイント/CZポイント進捗が設定変更で消去されるとする解析情報があるため、天井・CZ狙いの朝一客には不利になり得る。
resetDetection: 通常時BET前の停止ボタン操作で天井ポイントとCZ連続非当選回数を7セグ確認できるため朝一の内部進捗確認材料になる。ただし設定変更後の表示初期値、据え置きとの判別閾値、ガックン/初期出目等の本機固有変更判別はUNVERIFIED_AFTER_RESEARCH。
publicMorningNumbers: 天井ポイント表示0～230、CZ連続非当選回数表示1～5。通常天井候補は50 / 200 / 230ポイント。設定変更時は天井/CZポイントリセット・通常状態移行とする解析情報あり。
numericResetData: normalCeilingPointCandidates=50|200|230; visibleCeilingPointRange=0-230; visibleCzMissCountRange=1-5; settingChangeCeilingPoint=RESET_REPORTED; settingChangeCzPoint=RESET_REPORTED; settingChangeState=NORMAL_REPORTED

notes:
- P-WORLDは通常時のポイント確認機能を明記し、右停止ボタンで天井ポイント0～230、中停止ボタンでCZ連続非当選回数1～5を表示できるとしている。
- pacnkは設定変更後に天井ポイント・CZポイントがリセットされ、状態は必ず通常へ移行すると記録。この情報は本機固有だが後年整理資料単独なので、reset項目はANALYSIS_SINGLE_RETROSPECTIVEとして過剰に確度を上げない。
- 「チャレンジマン/チャレンジマンA/岡崎産業」と「設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井ポイント/CZポイント/ガックン/状態」を組み替え、K-Navi、P-WORLD、パチビー、パチマガスロマガ、当時業界記事、5号機クロニクル、pacnkまで横断したが、据え置き・単純電断・ガックン等は直接確定できずUNVERIFIED_AFTER_RESEARCH。

resetQaReliability: ANALYSIS_SINGLE_RETROSPECTIVE_FOR_SETTING_CHANGE_POINT_RESET_AND_NORMAL_STATE__UNVERIFIED_FOR_CARRYOVER_POWER_CYCLE_AND_GAKKUN

## conflicts

- 数値競合として確定した項目は今回なし。
- 赤7BIG/青7BIG/BARの設定別確率はP-WORLDの丸め値とpacnkの精密値に小差があるが、丸め精度差の範囲と判断しCONFLICTにはしない。

## missingFields

- baseGamesPer50
- approvalNumber
- carryOverBehavior exact handling
- powerCycleBehavior
- setting-change detection by gakkun/initial reel state
- exact reset-point initial values/distribution after setting change

## sources

取得日: 2026-09-05

1. K-Navi「チャレンジマン」 https://p-kn.com/slot/1597/
   - 2012-03-05ホール導入、ART概要、ボーナス払い出し条件。
   - reliability: ANALYSIS_HIGH
2. K-Navi「チャレンジゲーム」 https://p-kn.com/slot/1597/36281/
   - ART1セット30G+上乗せ、純増約1.3枚/G、ループ率約50～90%。
   - reliability: ANALYSIS_HIGH
3. P-WORLD「チャレンジマンA」 https://www.p-world.co.jp/machine/database/6653
   - 設定別赤7BIG/青7BIG/BAR/ART初当たり/合算/機械割、天井ポイント50/200/230、CZ周期、内部状態、7セグポイント確認機能、基本獲得枚数。
   - reliability: INDUSTRY_DATABASE_HIGH
4. パチビー「チャレンジマン」 https://www.pachibee.jp/machines/index/212020002
   - 2012-03-05導入、基本獲得枚数、天井ポイント構造、ART性能。
   - reliability: INDUSTRY_DATABASE_HIGH
5. グリーンべると「『チャレンジマン』ART機で復活」 https://web-greenbelt.jp/00001315/
   - 2012-02-20当時業界記事。純増約1.3枚/G、1セット30G、CZ周期、ARTループ約50～90%、赤7約300枚/青7約195枚、3月4日納品開始予定。
   - reliability: INDUSTRY
6. パチマガスロマガ「チャレンジマン」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/65/a.php
   - ART純増約1.3枚/G、1セット30G、赤BIG約300枚、青BIG約195枚、REG約53枚。
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル「岡崎産業 5号機全機種一覧」 https://5goki.com/okazaki
   - 2012/3、チャレンジマンA、設定別機械割97.4～110.0%。
   - reliability: ANALYSIS_HIGH_RETROSPECTIVE
8. pacnk「チャレンジマン 設定判別ツール」 https://pacnk.com/slot/tools/sh_challengeman.html
   - 精密な青BIG/REG・機械割、赤7BIG全設定1/1285、設定変更後の天井ポイント/CZポイントリセット・通常状態移行。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE_FOR_RESET

## collectionNotes

- 完全再現用のART継続率全振り分け・小役別ポイント抽選等はミッション対象外のため収集しない。
- 50枚ベースとresetBehavior欠損は十分な再探索後のみUNVERIFIEDとした。
