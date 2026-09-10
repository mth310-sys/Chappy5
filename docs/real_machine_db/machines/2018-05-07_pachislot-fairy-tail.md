# No.1190 パチスロ FAIRY TAIL

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ FAIRY TAIL
- manufacturer: 藤商事
- releaseDateCanonical: 2018-05-07
- generation: 5.9号機 / 5号機
- systemType: A+ART
- formalModelName: `FAIRY TAIL FSA`
- certificationNumber: `7S1186`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは導入開始日2018-05-07、型式`FAIRY TAIL FSA`、検定番号`7S1186`、メーカー藤商事を掲載。
- P-Summaの2018年当時イベントレポートも「5月7日導入」と記載。
- ちょんぼりすた・期待値見える化も2018-05-07で一致。
- releaseDateCanonical: 2018-05-07。

## performanceCore

### payoutRateBySetting
- setting1: 97.1%
- setting2: 98.9%
- setting3: 100.4%
- setting4: 104.3%
- setting5: 107.6%
- setting6: 115.3%

### initialHitBySetting
ART初当たり:
- setting1: 1/528.6
- setting2: 1/526.2
- setting3: 1/524.1
- setting4: 1/519.9
- setting5: 1/514.6
- setting6: 1/508.6

ボーナス合算:
- setting1: 1/368.2
- setting2: 1/352.3
- setting3: 1/326.0
- setting4: 1/278.9
- setting5: 1/245.5
- setting6: 1/209.4

ボーナス+ART合算:
- setting1: 1/217.0
- setting2: 1/211.0
- setting3: 1/201.0
- setting4: 1/181.5
- setting5: 1/166.2
- setting6: 1/148.3

青7BIG（フェアリーボーナス）:
- setting1: 1/461.5
- setting2: 1/436.9
- setting3: 1/397.2
- setting4: 1/329.3
- setting5: 1/283.7
- setting6: 1/236.6

赤7BIG（スーパーフェアリーボーナス）:
- 全設定共通相当として1/1820.4が主要解析表に掲載。設定別差なし扱い。

### baseGamesPer50
- canonical: 約33G/50枚。
- 期待値見える化・ちょんぼりすたで一致。

### netIncrease
- ART単体: 約1.2枚/G。
- ボーナス込みART純増: 約2.0枚/G。
- 定義を分離して保存。

### basicPayout
- スーパーフェアリーボーナス（赤7BIG）: 351枚。
- フェアリーボーナス（青7BIG）: 207枚。
- ART「FAIRY TIME」: 前半30G or 100G + 継続バトル後半。
- 前半⇔後半の平均ループ率: 約82%（解析値、補助）。

### ceiling
- 天井非搭載。

## modeSpecificMinimumData
- 通常時の内部状態は通常 / 高確 / 超高確。
- CZ「フェアリーコレクション」「WANTED」等からARTを目指すA+ART。
- 有利区間中はCZ・ART抽選が優遇される構造。

## resetBehavior

### settingChangeBehavior
- 内部状態: リセット。
- 有利区間ランプ: リセット。
- 液晶ステージ: 再抽選。
- ミニキャラレベル: リセット。
- 一撃とちょんぼりすたで同内容を照合。

### carryOverBehavior
- すろぱちくえすとの「据え置き時」表では、内部状態=引き継ぐ、有利区間ランプ=引き継ぐ、液晶ステージ=再抽選、ミニキャラレベル=リセット。
- 一撃の純電源OFF→ON表と内容が一致するため、本DBでは据え置き時の代表朝一挙動として保存。

### powerCycleBehavior
- 内部状態: 引き継ぐ。
- 有利区間ランプ: 引き継ぐ。
- 液晶ステージ: 再抽選。
- ミニキャラレベル: リセット。
- 一撃の本機専用表で直接確認。

### gameCounterReset
- 天井ゲーム数: `NOT_APPLICABLE_NO_CEILING`。
- ミニキャラレベルは設定変更・純電断ともリセット。
- 内部状態は設定変更でリセット、純電断/据え置きで引継ぎ。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- 朝一液晶ステージは設定変更時/電源OFF→ON時共通で設定依存再抽選。
- 奇数設定1/3/5: マグノリア33.3% / ルーシィの部屋33.3% / ビーチ33.3%。
- 偶数設定2/4/6: マグノリア25.0% / ルーシィの部屋25.0% / ビーチ50.0%。
- ビーチ開始は偶数設定示唆だが、設定変更と純電断の双方で同じ抽選のため変更判別には使えない。

### stateAfterReset
- settingChange: 内部状態リセット。
- carryOver: 内部状態引継ぎ。
- powerCycle: 内部状態引継ぎ。

### advantageousSectionReset
- settingChange: 有利区間ランプリセット。
- carryOver: 有利区間ランプ引継ぎ。
- powerCycle: 有利区間ランプ引継ぎ。
- 前日有利区間中に朝一ランプ点灯を維持していれば据え置き/純電断推測材料になり得る。

### resetBenefits
- 設定変更専用の短縮天井: なし（天井非搭載）。
- 朝一ステージ振り分け自体は設定差があるが、設定変更専用ではなく電源OFF→ON時も共通。
- 設定変更専用の主要初当たり/CZ優遇数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 前日高確/超高確等の内部状態は純電断なら引き継ぐが、設定変更ではリセットされるため、前日状態次第では設定変更で状態恩恵を失う。
- ミニキャラレベルは設定変更・純電断ともリセットされる。
- 独立したペナルティ率の公開値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- すろぱちくえすとは「リセット・据え置きの判別は不可」「ガックンもしない機種」と明記。
- 朝一ステージは設定変更/電源OFF→ON共通抽選のため変更確定判別には使えない。
- 有利区間ランプは設定変更で消灯、純電断/据え置きで引継ぐため、前日状態が分かる状況では推測材料になる。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- morningStageOddSettings_1_3_5: `マグノリア33.3% / ルーシィの部屋33.3% / ビーチ33.3%`
- morningStageEvenSettings_2_4_6: `マグノリア25.0% / ルーシィの部屋25.0% / ビーチ50.0%`
- settingChangeAdvantageousSectionLamp: `RESET`
- powerCycleAdvantageousSectionLamp: `CARRYOVER`
- gakkunChangeDetection: `NO_GAKKUN_REPORTED`

## morningRelatedPublicNumbers
- 朝一ステージ振り分けは設定変更時/電源OFF→ON時共通。
- 奇数設定は3ステージ各33.3%、偶数設定はビーチ50.0%、他2ステージ各25.0%。
- 1日1サンプルのため設定推測材料として過信不可と解析側も注意している。

## conflicts
- pachinaviの後年整理ページに「6号機」とする記述があるが、2018年導入時期・HAZUSE・当時解析・5.9号機有利区間資料から本機は5.9号機。後年ページの世代表記は誤記と判断しcanonicalへ採用しない。
- 主要性能値、導入日、型式/検定番号、朝一挙動について採用判断を左右する数値CONFLICTなし。

## missingFields
- 設定変更専用のCZ/ART初当たり優遇率: `NONE_CONFIRMED_AFTER_RESEARCH`
- 有利区間ランプ以外の確定的な変更判別手段: `NONE_CONFIRMED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. HAZUSE — パチスロ FAIRY TAIL
   - https://hazuse.com/machine/pachislot/7S1186/
   - 導入2018-05-07、メーカー藤商事、型式`FAIRY TAIL FSA`、検定番号`7S1186`、ボーナス/ART確率、天井非搭載。
   - confidence: `ANALYSIS_HIGH`
2. P-Summa — 超パチンコ＆パチスロフェスティバル2018 ファンイベント＠上野ショールーム
   - https://psumma.jp/featured/42539/
   - 2018年当時のイベントレポートで5月7日導入を明記。
   - confidence: `INDUSTRY`
3. ちょんぼりすた — フェアリーテイル スロット新台
   - https://chonborista.com/slot/fuji-slot/55964/
   - 5.9号機A+ART、2018-05-07、約33G/50枚、純増約1.2枚/G・ボナ込約2.0枚/G、設定別性能、朝一比較表。
   - confidence: `ANALYSIS_HIGH`
4. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_fairy_tail/3/
   - 設定変更時と電源ON/OFF時の内部状態・有利区間ランプ・ステージ・ミニキャラレベルを直接比較。朝一ステージ振り分けも掲載。
   - confidence: `ANALYSIS_HIGH`
5. 一撃 — 設定判別/立ち回りポイント
   - https://1geki.jp/slot/s_fairy_tail/5/
   - 朝一ステージの設定別振り分けを掲載。
   - confidence: `ANALYSIS_HIGH`
6. 期待値見える化 — フェアリーテイル 有利区間ランプ・狙い目・やめどき・朝一リセット解析
   - https://slotjin.com/slot/fairytail/
   - 2018-05-03/07-03更新。初当たり・機械割、33G/50枚、純増、有利区間ランプと朝一解析。
   - confidence: `ANALYSIS_HIGH`
7. すろぱちくえすと — フェアリーテイル
   - https://www.slopachi-quest.com/article/pachislot-fairytail/
   - 設定変更/据え置き比較、ガックンなし・変更判別不可との当時解析。
   - confidence: `ANALYSIS_SINGLE`
